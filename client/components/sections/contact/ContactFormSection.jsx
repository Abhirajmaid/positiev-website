'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';

export function ContactFormSection() {
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sent');
    const form = e.currentTarget;
    form.reset();
    window.setTimeout(() => setStatus('idle'), 2500);
  }

  return (
    <section id="contact-form" className="scroll-mt-28 bg-white pb-16 pt-4 md:pb-24">
      <Container className="max-w-[900px]">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand-coral px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
            Get in touch
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Contact <span className="text-brand-coral">Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-brand-medium md:text-base">
            Have questions, need assistance, or want to learn more?
            <br />
            Our team is here to help. Reach out to us, and we&apos;ll ensure you have!
          </p>
        </div>

        <div className="mt-12 rounded-[24px] bg-black px-5 py-8 md:px-10 md:py-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <label className="block text-sm font-medium text-white">
                Name*
                <input
                  name="name"
                  required
                  placeholder="Anna"
                  className="mt-2 w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-medium/70 focus:outline-none focus:ring-2 focus:ring-brand-coral"
                />
              </label>
              <label className="block text-sm font-medium text-white">
                Email*
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Anna@mail"
                  className="mt-2 w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-medium/70 focus:outline-none focus:ring-2 focus:ring-brand-coral"
                />
              </label>
              <label className="block text-sm font-medium text-white">
                Phone*
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+01 12345"
                  className="mt-2 w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-medium/70 focus:outline-none focus:ring-2 focus:ring-brand-coral"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-white">
              Message*
              <textarea
                name="message"
                required
                rows={6}
                placeholder="I wanted to know..."
                className="mt-2 w-full resize-y rounded-xl border-0 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-medium/70 focus:outline-none focus:ring-2 focus:ring-brand-coral"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-coral py-4 text-center text-base font-semibold text-white transition hover:bg-brand-coral/90"
            >
              Submit
            </button>
            {status === 'sent' ? (
              <p className="text-center text-sm text-white/80" role="status">
                Thanks — we&apos;ll get back to you shortly.
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
