// CMS Admin Panel
const API = '';
let token = localStorage.getItem('cms_token') || '';

// ---- API Helpers ----
async function api(path, opts = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${API}${path}`, { ...opts, headers });
  if (res.status === 401) { logout(); throw new Error('Unauthorized'); }
  if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e.error || 'Request failed'); }
  return res.json();
}

async function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);
  const res = await fetch(`${API}/api/admin/upload`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    body: formData,
  });
  if (res.status === 401) { logout(); throw new Error('Unauthorized'); }
  if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e.error || 'Upload failed'); }
  return res.json();
}

// ---- Auth ----
function logout() { token = ''; localStorage.removeItem('cms_token'); render(); }

async function handleLogin(e) {
  e.preventDefault();
  const form = e.target;
  try {
    const data = await api('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username: form.username.value, password: form.password.value }),
    });
    token = data.token;
    localStorage.setItem('cms_token', token);
    render();
  } catch (err) {
    document.getElementById('login-error').textContent = 'Invalid credentials';
  }
}

// ---- State ----
let currentPage = 'list';
let editingArticle = null;
let articles = [];

// ---- Block Helpers ----
function createBlock(type) {
  switch(type) {
    case 'paragraph': return { type: 'paragraph', text: '', intro: false };
    case 'heading': return { type: 'heading', level: 2, text: '' };
    case 'list': return { type: 'list', style: 'unordered', items: [''] };
    case 'callout': return { type: 'callout', variant: 'info', title: '', text: '' };
    case 'cta': return { type: 'cta', title: '', description: '', buttons: [{ text: '', href: '', style: 'primary' }] };
    case 'image': return { type: 'image', src: '', alt: '', caption: '' };
    default: return { type: 'paragraph', text: '' };
  }
}

function renderBlockEditor(block, index) {
  const blockTypes = { paragraph: 'Paragraph', heading: 'Heading', list: 'List', callout: 'Callout', cta: 'CTA', image: 'Image' };
  const typeLabel = blockTypes[block.type] || block.type;

  let fieldsHtml = '';

  switch(block.type) {
    case 'paragraph':
      fieldsHtml = `
        <textarea class="w-full border rounded-lg p-3 text-sm min-h-[80px] focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          data-block="${index}" data-field="text" placeholder="Paragraph text (supports <strong>, <a> HTML tags)">${escHtml(block.text)}</textarea>
        <label class="flex items-center gap-2 mt-2 text-sm text-gray-600">
          <input type="checkbox" data-block="${index}" data-field="intro" ${block.intro ? 'checked' : ''} class="rounded">
          Intro paragraph (larger text)
        </label>`;
      break;
    case 'heading':
      fieldsHtml = `
        <div class="flex gap-3">
          <select class="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500" data-block="${index}" data-field="level">
            <option value="2" ${block.level === 2 ? 'selected' : ''}>H2</option>
            <option value="3" ${block.level === 3 ? 'selected' : ''}>H3</option>
          </select>
          <input type="text" class="flex-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
            data-block="${index}" data-field="text" value="${escAttr(block.text)}" placeholder="Heading text">
        </div>`;
      break;
    case 'list':
      const itemsHtml = (block.items || ['']).map((item, i) => `
        <div class="flex gap-2 mb-2">
          <input type="text" class="flex-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
            data-block="${index}" data-field="items" data-item="${i}" value="${escAttr(item)}" placeholder="List item (supports HTML)">
          <button type="button" onclick="removeListItem(${index}, ${i})" class="text-red-500 hover:text-red-700 px-2" title="Remove">×</button>
        </div>
      `).join('');
      fieldsHtml = `
        <select class="border rounded-lg px-3 py-2 text-sm mb-3 focus:ring-2 focus:ring-orange-500" data-block="${index}" data-field="style">
          <option value="unordered" ${block.style === 'unordered' ? 'selected' : ''}>Bullet List</option>
          <option value="ordered" ${block.style === 'ordered' ? 'selected' : ''}>Numbered List</option>
        </select>
        <div id="list-items-${index}">${itemsHtml}</div>
        <button type="button" onclick="addListItem(${index})" class="text-sm text-orange-600 hover:text-orange-700 font-medium mt-1">+ Add Item</button>`;
      break;
    case 'callout':
      fieldsHtml = `
        <select class="border rounded-lg px-3 py-2 text-sm mb-3 focus:ring-2 focus:ring-orange-500" data-block="${index}" data-field="variant">
          <option value="info" ${block.variant === 'info' ? 'selected' : ''}>Info (Blue)</option>
          <option value="warning" ${block.variant === 'warning' ? 'selected' : ''}>Warning (Red)</option>
          <option value="pro-tip" ${block.variant === 'pro-tip' ? 'selected' : ''}>Pro Tip (Orange)</option>
        </select>
        <input type="text" class="w-full border rounded-lg px-3 py-2 text-sm mb-2 focus:ring-2 focus:ring-orange-500"
          data-block="${index}" data-field="title" value="${escAttr(block.title)}" placeholder="Callout title">
        <textarea class="w-full border rounded-lg p-3 text-sm min-h-[60px] focus:ring-2 focus:ring-orange-500"
          data-block="${index}" data-field="text" placeholder="Callout text">${escHtml(block.text)}</textarea>`;
      break;
    case 'cta':
      const btnsHtml = (block.buttons || []).map((btn, i) => `
        <div class="flex gap-2 mb-2 items-center">
          <input type="text" class="flex-1 border rounded-lg px-3 py-2 text-sm" data-block="${index}" data-field="btn-text" data-btn="${i}" value="${escAttr(btn.text)}" placeholder="Button text">
          <input type="text" class="flex-1 border rounded-lg px-3 py-2 text-sm" data-block="${index}" data-field="btn-href" data-btn="${i}" value="${escAttr(btn.href)}" placeholder="URL or tel:">
          <select class="border rounded-lg px-2 py-2 text-sm" data-block="${index}" data-field="btn-style" data-btn="${i}">
            <option value="primary" ${btn.style === 'primary' ? 'selected' : ''}>Primary</option>
            <option value="outline" ${btn.style === 'outline' ? 'selected' : ''}>Outline</option>
          </select>
          <button type="button" onclick="removeCtaButton(${index}, ${i})" class="text-red-500 hover:text-red-700 px-2">×</button>
        </div>
      `).join('');
      fieldsHtml = `
        <input type="text" class="w-full border rounded-lg px-3 py-2 text-sm mb-2 focus:ring-2 focus:ring-orange-500"
          data-block="${index}" data-field="title" value="${escAttr(block.title)}" placeholder="CTA title">
        <textarea class="w-full border rounded-lg p-3 text-sm min-h-[40px] mb-2 focus:ring-2 focus:ring-orange-500"
          data-block="${index}" data-field="description" placeholder="CTA description">${escHtml(block.description)}</textarea>
        <div class="text-sm font-medium text-gray-700 mb-2">Buttons:</div>
        ${btnsHtml}
        <button type="button" onclick="addCtaButton(${index})" class="text-sm text-orange-600 hover:text-orange-700 font-medium">+ Add Button</button>`;
      break;
    case 'image':
      const previewHtml = block.src
        ? `<img src="${escAttr(block.src)}" alt="${escAttr(block.alt)}" class="max-h-48 rounded-lg mb-3 object-cover">`
        : '';
      fieldsHtml = `
        ${previewHtml}
        <div class="mb-3">
          <input type="file" accept="image/jpeg,image/png,image/gif,image/webp" onchange="handleBlockImageUpload(${index}, this)"
            class="text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-orange-50 file:text-orange-600 file:font-medium file:cursor-pointer hover:file:bg-orange-100">
          <span id="block-upload-status-${index}" class="text-xs text-gray-400 ml-2"></span>
        </div>
        <input type="text" class="w-full border rounded-lg px-3 py-2 text-sm mb-2 focus:ring-2 focus:ring-orange-500"
          data-block="${index}" data-field="alt" value="${escAttr(block.alt)}" placeholder="Alt text (describes the image)">
        <input type="text" class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
          data-block="${index}" data-field="caption" value="${escAttr(block.caption || '')}" placeholder="Caption (optional)">`;
      break;
  }

  const colors = { paragraph: 'border-gray-300', heading: 'border-blue-300', list: 'border-green-300', callout: 'border-yellow-300', cta: 'border-purple-300', image: 'border-pink-300' };

  return `
    <div class="block-item border-l-4 ${colors[block.type] || 'border-gray-300'} bg-white rounded-lg p-4 mb-3 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-gray-500">${typeLabel}</span>
        <div class="flex gap-1">
          <button type="button" onclick="moveBlock(${index}, -1)" class="p-1 text-gray-400 hover:text-gray-600" title="Move up" ${index === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" onclick="moveBlock(${index}, 1)" class="p-1 text-gray-400 hover:text-gray-600" title="Move down">↓</button>
          <button type="button" onclick="removeBlock(${index})" class="p-1 text-red-400 hover:text-red-600" title="Delete">🗑</button>
        </div>
      </div>
      ${fieldsHtml}
    </div>`;
}

function escHtml(s) { return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function escAttr(s) { return (s || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ---- Block Operations ----
window.addListItem = function(blockIdx) {
  collectBlockData();
  const blocks = editingArticle.content;
  blocks[blockIdx].items.push('');
  renderEditor();
};
window.removeListItem = function(blockIdx, itemIdx) {
  collectBlockData();
  editingArticle.content[blockIdx].items.splice(itemIdx, 1);
  if (editingArticle.content[blockIdx].items.length === 0) editingArticle.content[blockIdx].items = [''];
  renderEditor();
};
window.addCtaButton = function(blockIdx) {
  collectBlockData();
  editingArticle.content[blockIdx].buttons.push({ text: '', href: '', style: 'primary' });
  renderEditor();
};
window.removeCtaButton = function(blockIdx, btnIdx) {
  collectBlockData();
  editingArticle.content[blockIdx].buttons.splice(btnIdx, 1);
  renderEditor();
};
window.moveBlock = function(index, direction) {
  collectBlockData();
  const blocks = editingArticle.content;
  const newIndex = index + direction;
  if (newIndex < 0 || newIndex >= blocks.length) return;
  [blocks[index], blocks[newIndex]] = [blocks[newIndex], blocks[index]];
  renderEditor();
};
window.removeBlock = function(index) {
  if (!confirm('Remove this block?')) return;
  collectBlockData();
  editingArticle.content.splice(index, 1);
  renderEditor();
};
window.addBlock = function(type) {
  collectBlockData();
  editingArticle.content.push(createBlock(type));
  renderEditor();
  // Scroll to new block
  setTimeout(() => {
    const container = document.getElementById('blocks-container');
    if (container) container.scrollTop = container.scrollHeight;
  }, 50);
};

window.handleBlockImageUpload = async function(blockIdx, input) {
  const file = input.files[0];
  if (!file) return;
  const statusEl = document.getElementById(`block-upload-status-${blockIdx}`);
  statusEl.textContent = 'Uploading...';
  try {
    collectBlockData();
    const result = await uploadImage(file);
    editingArticle.content[blockIdx].src = result.url;
    renderEditor();
  } catch (err) {
    statusEl.textContent = 'Error: ' + err.message;
  }
};

window.handleFeaturedImageUpload = async function(input) {
  const file = input.files[0];
  if (!file) return;
  const statusEl = document.getElementById('featured-upload-status');
  statusEl.textContent = 'Uploading...';
  try {
    collectBlockData();
    const result = await uploadImage(file);
    editingArticle.featured_image = result.url;
    renderEditor();
  } catch (err) {
    statusEl.textContent = 'Error: ' + err.message;
  }
};

window.removeFeaturedImage = function() {
  collectBlockData();
  editingArticle.featured_image = '';
  renderEditor();
};

function collectBlockData() {
  const blocks = editingArticle.content;
  document.querySelectorAll('[data-block]').forEach(el => {
    const idx = parseInt(el.dataset.block);
    const field = el.dataset.field;
    if (!blocks[idx]) return;

    if (field === 'intro') {
      blocks[idx].intro = el.checked;
    } else if (field === 'level') {
      blocks[idx].level = parseInt(el.value);
    } else if (field === 'items') {
      const itemIdx = parseInt(el.dataset.item);
      blocks[idx].items[itemIdx] = el.value;
    } else if (field === 'btn-text') {
      blocks[idx].buttons[parseInt(el.dataset.btn)].text = el.value;
    } else if (field === 'btn-href') {
      blocks[idx].buttons[parseInt(el.dataset.btn)].href = el.value;
    } else if (field === 'btn-style') {
      blocks[idx].buttons[parseInt(el.dataset.btn)].style = el.value;
    } else if (el.tagName === 'TEXTAREA') {
      blocks[idx][field] = el.value;
    } else if (el.tagName === 'SELECT') {
      blocks[idx][field] = el.value;
    } else {
      blocks[idx][field] = el.value;
    }
  });
}

// ---- Slug Helper ----
function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '');
}

// ---- Page Rendering ----
function render() {
  const app = document.getElementById('app');
  if (!token) {
    app.innerHTML = renderLogin();
    return;
  }
  if (currentPage === 'list') {
    renderArticleList();
  } else if (currentPage === 'edit') {
    renderEditor();
  }
}

function renderLogin() {
  return `
    <div class="min-h-screen flex items-center justify-center">
      <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div class="text-center mb-8">
          <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
            <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v9h14v-9h3L12 3zm0 2.84L18.5 12H18v8H6v-8h-.5L12 5.84z"/></svg>
          </div>
          <h1 class="text-2xl font-bold text-slate-900">CMS Admin</h1>
          <p class="text-gray-500 text-sm">Florida Roof Restore</p>
        </div>
        <form onsubmit="handleLogin(event)">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input name="username" type="text" required class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="admin">
          </div>
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input name="password" type="password" required class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="••••••">
          </div>
          <div id="login-error" class="text-red-500 text-sm mb-4"></div>
          <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">Sign In</button>
        </form>
      </div>
    </div>`;
}

async function renderArticleList() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-2xl font-bold text-slate-900">Blog Articles</h1>
          <p class="text-gray-500 text-sm">Manage your blog content</p>
        </div>
        <div class="flex gap-3">
          <button onclick="newArticle()" class="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold transition">+ New Article</button>
          <button onclick="logout()" class="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg text-sm transition">Logout</button>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="text-center py-12 text-gray-400">Loading articles...</div>
      </div>
    </div>`;

  try {
    articles = await api('/api/admin/articles');
    const tbody = articles.map(a => `
      <tr class="border-t border-gray-100 hover:bg-gray-50 transition">
        <td class="px-6 py-4">
          <div class="font-medium text-slate-900">${escHtml(a.title)}</div>
          <div class="text-sm text-gray-500">/${escHtml(a.slug)}</div>
        </td>
        <td class="px-6 py-4"><span class="text-sm text-gray-600">${escHtml(a.category || '-')}</span></td>
        <td class="px-6 py-4">
          <span class="inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${a.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}">
            ${a.status}
          </span>
        </td>
        <td class="px-6 py-4 text-sm text-gray-500">${escHtml(a.date || '-')}</td>
        <td class="px-6 py-4 text-right">
          <button onclick="editArticle(${a.id})" class="text-orange-600 hover:text-orange-700 font-medium text-sm mr-3">Edit</button>
          <button onclick="deleteArticle(${a.id}, '${escAttr(a.title)}')" class="text-red-500 hover:text-red-700 text-sm">Delete</button>
        </td>
      </tr>
    `).join('');

    app.querySelector('.bg-white').innerHTML = `
      <table class="w-full">
        <thead>
          <tr class="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <th class="px-6 py-3">Title</th>
            <th class="px-6 py-3">Category</th>
            <th class="px-6 py-3">Status</th>
            <th class="px-6 py-3">Date</th>
            <th class="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>${tbody}</tbody>
      </table>`;
  } catch (err) {
    app.querySelector('.bg-white').innerHTML = `<div class="text-center py-12 text-red-500">Error loading articles: ${err.message}</div>`;
  }
}

window.newArticle = function() {
  editingArticle = {
    title: '', slug: '', excerpt: '', date: '', published_at: new Date().toISOString().split('T')[0],
    read_time: '', category: '', featured: 0, featured_image: '', seo_title: '', seo_description: '',
    author_name: '', author_title: '', author_bio: '', content: [], status: 'draft',
  };
  currentPage = 'edit';
  render();
};

window.editArticle = async function(id) {
  try {
    editingArticle = await api(`/api/admin/articles/${id}`);
    if (!Array.isArray(editingArticle.content)) editingArticle.content = [];
    currentPage = 'edit';
    render();
  } catch (err) { alert('Error loading article: ' + err.message); }
};

window.deleteArticle = async function(id, title) {
  if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
  try {
    await api(`/api/admin/articles/${id}`, { method: 'DELETE' });
    render();
  } catch (err) { alert('Error: ' + err.message); }
};

window.handleLogin = handleLogin;

function renderEditor() {
  const a = editingArticle;
  const app = document.getElementById('app');

  const blocksHtml = a.content.map((block, i) => renderBlockEditor(block, i)).join('');

  // Featured image UI
  const featuredImageHtml = a.featured_image
    ? `<div class="relative">
        <img src="${escAttr(a.featured_image)}" alt="Featured image" class="w-full h-40 object-cover rounded-lg mb-2">
        <button type="button" onclick="removeFeaturedImage()" class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs" title="Remove">×</button>
      </div>`
    : '';

  app.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex items-center justify-between mb-6">
        <button onclick="backToList()" class="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
          <span>←</span> Back to Articles
        </button>
        <div class="flex gap-3">
          <button onclick="saveArticle('draft')" class="border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-lg font-medium transition">Save as Draft</button>
          <button onclick="saveArticle('published')" class="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold transition">Publish</button>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-6">
        <!-- Main Content -->
        <div class="col-span-2 space-y-6">
          <div class="bg-white rounded-xl shadow-sm p-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input id="field-title" type="text" value="${escAttr(a.title)}" oninput="autoSlug()"
              class="w-full border rounded-lg px-4 py-3 text-lg font-semibold focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Article title">
            <div class="flex gap-4 mt-4">
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                <input id="field-slug" type="text" value="${escAttr(a.slug)}"
                  class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500" placeholder="url-slug">
              </div>
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                <input id="field-excerpt" type="text" value="${escAttr(a.excerpt)}"
                  class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500" placeholder="Short description">
              </div>
            </div>
          </div>

          <!-- Content Blocks -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-bold text-slate-900">Content Blocks</h2>
              <div class="flex gap-2 flex-wrap">
                <button onclick="addBlock('paragraph')" class="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition">+ Paragraph</button>
                <button onclick="addBlock('heading')" class="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg transition">+ Heading</button>
                <button onclick="addBlock('list')" class="text-xs bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1.5 rounded-lg transition">+ List</button>
                <button onclick="addBlock('callout')" class="text-xs bg-yellow-50 hover:bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-lg transition">+ Callout</button>
                <button onclick="addBlock('cta')" class="text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg transition">+ CTA</button>
                <button onclick="addBlock('image')" class="text-xs bg-pink-50 hover:bg-pink-100 text-pink-700 px-3 py-1.5 rounded-lg transition">+ Image</button>
              </div>
            </div>
            <div id="blocks-container" class="max-h-[600px] overflow-y-auto">
              ${blocksHtml || '<div class="text-center py-12 text-gray-400">No content blocks yet. Add one above.</div>'}
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="font-bold text-slate-900 mb-4">Featured Image</h3>
            ${featuredImageHtml}
            <input type="file" accept="image/jpeg,image/png,image/gif,image/webp" onchange="handleFeaturedImageUpload(this)"
              class="text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-orange-50 file:text-orange-600 file:font-medium file:cursor-pointer hover:file:bg-orange-100 w-full">
            <span id="featured-upload-status" class="text-xs text-gray-400 mt-1 block"></span>
          </div>

          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="font-bold text-slate-900 mb-4">Article Settings</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Display Date</label>
                <input id="field-date" type="text" value="${escAttr(a.date)}" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="January 15, 2026">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Read Time</label>
                <input id="field-read_time" type="text" value="${escAttr(a.read_time)}" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="5 min read">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input id="field-category" type="text" value="${escAttr(a.category)}" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="e.g. Emergency Response">
              </div>
              <label class="flex items-center gap-2 text-sm">
                <input id="field-featured" type="checkbox" ${a.featured ? 'checked' : ''} class="rounded">
                Featured article
              </label>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="font-bold text-slate-900 mb-4">SEO</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
                <input id="field-seo_title" type="text" value="${escAttr(a.seo_title)}" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Page title for search engines">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
                <textarea id="field-seo_description" class="w-full border rounded-lg px-3 py-2 text-sm min-h-[60px]" placeholder="Meta description">${escHtml(a.seo_description)}</textarea>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="font-bold text-slate-900 mb-4">Author</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input id="field-author_name" type="text" value="${escAttr(a.author_name)}" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Author name">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input id="field-author_title" type="text" value="${escAttr(a.author_title)}" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="e.g. Roofing Specialist">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea id="field-author_bio" class="w-full border rounded-lg px-3 py-2 text-sm min-h-[60px]" placeholder="Short author bio">${escHtml(a.author_bio)}</textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="save-status" class="fixed bottom-6 right-6 hidden"></div>
    </div>`;
}

window.autoSlug = function() {
  const titleEl = document.getElementById('field-title');
  const slugEl = document.getElementById('field-slug');
  if (!editingArticle.id) { // Only auto-slug for new articles
    slugEl.value = slugify(titleEl.value);
  }
};

window.backToList = function() {
  if (confirm('Go back? Unsaved changes will be lost.')) {
    currentPage = 'list';
    editingArticle = null;
    render();
  }
};

window.saveArticle = async function(status) {
  collectBlockData();

  const data = {
    title: document.getElementById('field-title').value,
    slug: document.getElementById('field-slug').value,
    excerpt: document.getElementById('field-excerpt').value,
    date: document.getElementById('field-date').value,
    published_at: editingArticle.published_at || new Date().toISOString().split('T')[0],
    read_time: document.getElementById('field-read_time').value,
    category: document.getElementById('field-category').value,
    featured: document.getElementById('field-featured').checked ? 1 : 0,
    featured_image: editingArticle.featured_image || '',
    seo_title: document.getElementById('field-seo_title').value,
    seo_description: document.getElementById('field-seo_description').value,
    author_name: document.getElementById('field-author_name').value,
    author_title: document.getElementById('field-author_title').value,
    author_bio: document.getElementById('field-author_bio').value,
    content: editingArticle.content,
    status: status,
  };

  if (!data.title) { alert('Title is required'); return; }
  if (!data.slug) data.slug = slugify(data.title);
  if (!data.seo_title) data.seo_title = data.title + ' | Florida Roof Restore';

  const statusEl = document.getElementById('save-status');
  statusEl.className = 'fixed bottom-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm';
  statusEl.textContent = 'Saving...';

  try {
    if (editingArticle.id) {
      editingArticle = await api(`/api/admin/articles/${editingArticle.id}`, { method: 'PUT', body: JSON.stringify(data) });
    } else {
      editingArticle = await api('/api/admin/articles', { method: 'POST', body: JSON.stringify(data) });
    }
    if (!Array.isArray(editingArticle.content)) {
      try { editingArticle.content = JSON.parse(editingArticle.content); } catch { editingArticle.content = []; }
    }
    statusEl.className = 'fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg text-sm';
    statusEl.textContent = status === 'published' ? 'Published!' : 'Draft saved!';
    setTimeout(() => { statusEl.className = 'fixed bottom-6 right-6 hidden'; }, 2000);
  } catch (err) {
    statusEl.className = 'fixed bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded-lg text-sm';
    statusEl.textContent = 'Error: ' + err.message;
    setTimeout(() => { statusEl.className = 'fixed bottom-6 right-6 hidden'; }, 3000);
  }
};

// ---- Init ----
render();
