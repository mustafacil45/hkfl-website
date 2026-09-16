'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLang } from '@/i18n/useLang';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function IletisimClient() {
  const { t } = useLang();
  const c = t.contact;

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const contactInfo = [
    {
      icon: MapPin,
      title: c.info.address,
      lines: c.info.addressLines,
      color: '#0f2342',
    },
    {
      icon: Phone,
      title: c.info.phone,
      lines: ['+90 (539) 245 94 54'],
      color: '#1d3557',
      href: 'tel:+905392459454',
    },
    {
      icon: Mail,
      title: c.info.email,
      lines: ['iletisim@hkmed.org'],
      color: '#0f2342',
      href: 'mailto:iletisim@hkmed.org',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are not configured. Falling back to email link opening.");
      const mailtoUrl = `mailto:iletisim@hkmed.org?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`${c.form.name}: ${form.name}\n${c.form.email}: ${form.email}\n\n${c.form.message}:\n${form.message}`)}`;
      window.location.href = mailtoUrl;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
          to_email: 'iletisim@hkmed.org'
        },
        publicKey
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Failed to send email via EmailJS:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <section
        className="relative pt-36 sm:pt-44 lg:pt-60 pb-20 sm:pb-28 lg:pb-32 overflow-hidden flex items-center min-h-[460px]"
        style={{ background: 'url("/students-bg.jpeg") center/cover no-repeat' }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(255, 255, 255, 0.92)' }} />
        <div className="container-custom relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center gap-2 bg-[#0f2342]/10 text-[#0f2342] border border-[#0f2342]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 max-w-full text-center">
              <Mail size={14} /> {c.hero.label}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              {c.hero.title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {c.hero.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div>
                <div className="section-label"><Mail size={14} />{c.info.label}</div>
                <h2 className="font-display text-3xl font-bold text-gray-900 mt-2 mb-2">
                  {c.info.titlePre}<span className="text-accent">{c.info.titleHighlight}</span>
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  {c.info.text}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}12` }}
                    >
                      <item.icon size={20} style={{ color: item.color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{item.title}</div>
                      {item.lines.map((line, i) => (
                        item.href ? (
                          <a key={i} href={item.href} className="block text-sm text-gray-700 hover:text-[#0f2342] transition-colors font-medium">{line}</a>
                        ) : (
                          <div key={i} className="text-sm text-gray-700 font-medium">{line}</div>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div
                className="rounded-2xl overflow-hidden shadow-sm"
                style={{ border: '1px solid rgba(15,35,66,0.15)' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.2!2d27.6974471!3d38.489059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9a78418be83e9%3A0xe69d5ca7a0973dfd!2sHalil%20Kale%20Fen%20Lisesi!5e0!3m2!1str!2str!4v1720620000000!5m2!1str!2str"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={c.info.mapTitle}
                />
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-10">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">{c.form.title}</h3>
                <p className="text-gray-500 text-sm mb-8">
                  {c.form.subtitle}
                </p>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(5,150,105,0.1)' }}
                    >
                      <CheckCircle size={32} style={{ color: '#059669' }} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl">{c.form.successTitle}</h4>
                    <p className="text-gray-500">{c.form.successText}</p>
                  </motion.div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          {c.form.name} <span style={{ color: '#0f2342' }}>*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder={c.form.namePlaceholder}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          {c.form.email} <span style={{ color: '#0f2342' }}>*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder={c.form.emailPlaceholder}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                        {c.form.subject} <span style={{ color: '#0f2342' }}>*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">{c.form.subjectPlaceholder}</option>
                        {c.form.subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        {c.form.message} <span style={{ color: '#0f2342' }}>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={c.form.messagePlaceholder}
                        className="form-input resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle size={16} />
                        {c.form.error}
                      </div>
                    )}

                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {c.form.sending}
                        </>
                      ) : (
                        <>
                          <Send size={17} />
                          {c.form.submit}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
