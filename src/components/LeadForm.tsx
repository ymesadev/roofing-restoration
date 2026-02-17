'use client';

import { useState, FormEvent } from 'react';
import { trackFormSubmission } from '@/lib/tracking';

interface ServiceOption {
  id: string;
  title: string;
}

interface LeadFormProps {
  variant: 'hero' | 'contact' | 'landing';
  services?: ServiceOption[];
  className?: string;
}

interface FormState {
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zip: string;
  service: string;
  message: string;
  optin: boolean;
}

export default function LeadForm({ variant, services = [], className = '' }: LeadFormProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    zip: '',
    service: '',
    message: '',
    optin: true,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      variant,
      ...(variant === 'hero' && { name: form.name, phone: form.phone, email: form.email, service: form.service, zip: form.zip }),
      ...(variant === 'contact' && { firstName: form.firstName, lastName: form.lastName, phone: form.phone, email: form.email, zip: form.zip, service: form.service, message: form.message }),
      ...(variant === 'landing' && { name: form.name, phone: form.phone, zip: form.zip }),
      optin: form.optin,
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Submit failed');
      setStatus('success');
      trackFormSubmission(variant, form.service);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">We&apos;ll contact you within 1 hour during business hours.</p>
      </div>
    );
  }

  if (variant === 'landing') {
    return (
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <input name="name" type="text" placeholder="Your Name" required value={form.name} onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
        <input name="phone" type="tel" placeholder="Phone Number" required value={form.phone} onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
        <input name="zip" type="text" placeholder="Zip Code" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} required value={form.zip} onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
        <div className="flex items-start gap-3">
          <input type="checkbox" id="lp-optin" name="optin" checked={form.optin} onChange={handleChange}
            className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500" />
          <label htmlFor="lp-optin" className="text-sm text-gray-600">
            I agree to receive text messages and calls regarding my inquiry. Message and data rates may apply.
          </label>
        </div>
        <button type="submit" disabled={status === 'submitting'}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition disabled:opacity-50">
          {status === 'submitting' ? 'Submitting...' : 'Get My Free Quote'}
        </button>
        {status === 'error' && <p className="text-red-600 text-sm text-center">Something went wrong. Please try again or call us.</p>}
      </form>
    );
  }

  // contact variant (used on /contact page)
  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid md:grid-cols-2 gap-4">
        <input name="firstName" type="text" placeholder="First Name" required value={form.firstName} onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
        <input name="lastName" type="text" placeholder="Last Name" required value={form.lastName} onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
      </div>
      <input name="phone" type="tel" placeholder="Phone Number" required value={form.phone} onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
      <input name="email" type="email" placeholder="Email Address" required value={form.email} onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
      <input name="zip" type="text" placeholder="Zip Code" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} required value={form.zip} onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
      <select name="service" required value={form.service} onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 text-gray-600">
        <option value="">Service Needed</option>
        {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
      </select>
      <textarea name="message" placeholder="Tell us about your roof issue..." rows={4} required value={form.message} onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
      <div className="flex items-start gap-3">
        <input type="checkbox" id="contact-optin" name="optin" checked={form.optin} onChange={handleChange}
          className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500" />
        <label htmlFor="contact-optin" className="text-sm text-gray-600">
          I agree to receive text messages and calls regarding my inquiry. Message and data rates may apply.
        </label>
      </div>
      <button type="submit" disabled={status === 'submitting'}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition disabled:opacity-50">
        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
      </button>
      {status === 'error' && <p className="text-red-600 text-sm text-center">Something went wrong. Please try again or call us.</p>}
      <p className="text-gray-500 text-sm text-center">We respond within 1 hour during business hours</p>
    </form>
  );
}
