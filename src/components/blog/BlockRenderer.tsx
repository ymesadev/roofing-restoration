import Link from 'next/link';

const CMS_URL = process.env.CMS_API_URL || 'http://localhost:3001';

type ContentBlock =
  | { type: 'paragraph'; text: string; intro?: boolean }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; style: 'ordered' | 'unordered'; items: string[] }
  | { type: 'callout'; variant: 'warning' | 'pro-tip' | 'info'; title: string; text: string }
  | { type: 'cta'; title: string; description: string; buttons: { text: string; href: string; style: 'primary' | 'outline' }[] }
  | { type: 'image'; src: string; alt: string; caption?: string };

function renderHTML(html: string) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function ParagraphBlock({ block }: { block: Extract<ContentBlock, { type: 'paragraph' }> }) {
  if (block.intro) {
    return (
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        {renderHTML(block.text)}
      </p>
    );
  }
  return (
    <p className="text-gray-700 mb-6">
      {renderHTML(block.text)}
    </p>
  );
}

function HeadingBlock({ block }: { block: Extract<ContentBlock, { type: 'heading' }> }) {
  if (block.level === 2) {
    return (
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
        {renderHTML(block.text)}
      </h2>
    );
  }
  return (
    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
      {renderHTML(block.text)}
    </h3>
  );
}

function ListBlock({ block }: { block: Extract<ContentBlock, { type: 'list' }> }) {
  const Tag = block.style === 'ordered' ? 'ol' : 'ul';
  const listClass = block.style === 'ordered' ? 'list-decimal' : 'list-disc';
  return (
    <Tag className={`${listClass} pl-6 mb-6 text-gray-700 space-y-2`}>
      {block.items.map((item, i) => (
        <li key={i}>{renderHTML(item)}</li>
      ))}
    </Tag>
  );
}

function CalloutBlock({ block }: { block: Extract<ContentBlock, { type: 'callout' }> }) {
  const variantStyles: Record<string, { bg: string; border: string }> = {
    'warning': { bg: 'bg-red-50', border: 'border-red-500' },
    'pro-tip': { bg: 'bg-orange-50', border: 'border-orange-500' },
    'info': { bg: 'bg-blue-50', border: 'border-blue-500' },
  };
  const style = variantStyles[block.variant] || variantStyles['info'];
  return (
    <div className={`${style.bg} border-l-4 ${style.border} p-6 my-8`}>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{block.title}</h3>
      <p className="text-gray-700">{renderHTML(block.text)}</p>
    </div>
  );
}

function CTABlock({ block }: { block: Extract<ContentBlock, { type: 'cta' }> }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 mt-12 text-white">
      <h3 className="text-xl font-bold mb-4">{block.title}</h3>
      <p className="text-gray-300 mb-6">{renderHTML(block.description)}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        {block.buttons.map((btn, i) => {
          const isPhone = btn.href.startsWith('tel:');
          const className = btn.style === 'primary'
            ? 'inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition'
            : 'inline-flex items-center justify-center border border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition';

          if (isPhone || btn.href.startsWith('http')) {
            return (
              <a key={i} href={btn.href} className={className}>
                {btn.text}
              </a>
            );
          }
          return (
            <Link key={i} href={btn.href} className={className}>
              {btn.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function ImageBlock({ block }: { block: Extract<ContentBlock, { type: 'image' }> }) {
  const src = block.src.startsWith('/') ? `${CMS_URL}${block.src}` : block.src;
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={block.alt}
        className="w-full rounded-lg"
      />
      {block.caption && (
        <figcaption className="text-sm text-gray-500 mt-2 text-center">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <ParagraphBlock key={index} block={block} />;
          case 'heading':
            return <HeadingBlock key={index} block={block} />;
          case 'list':
            return <ListBlock key={index} block={block} />;
          case 'callout':
            return <CalloutBlock key={index} block={block} />;
          case 'cta':
            return <CTABlock key={index} block={block} />;
          case 'image':
            return <ImageBlock key={index} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
