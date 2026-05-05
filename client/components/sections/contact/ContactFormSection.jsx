'use client';

import { useState } from 'react';

export function ContactFormSection() {
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sent');
    const form = e.currentTarget;
    form.reset();
    window.setTimeout(() => setStatus('idle'), 2500);
  }

  const labelClass =
    'block text-base font-semibold text-white md:text-lg';
  const fieldClass =
    'mt-3 w-full rounded-xl border-0 bg-white px-5 py-4 text-base text-brand-dark placeholder:text-brand-medium/70 focus:outline-none focus:ring-2 focus:ring-brand-coral md:mt-3.5 md:px-6 md:py-[18px] md:text-lg';

  return (
    <section id="contact-form" className="scroll-mt-28 bg-white pb-16 pt-6 md:pb-28 md:pt-8">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand-coral px-7 py-3 text-[13px] font-bold uppercase tracking-[0.18em] text-white md:px-8 md:py-3.5 md:text-sm">
            Get in touch
          </span>
          <h2 className="mt-8 text-4xl font-bold tracking-tight text-brand-dark md:mt-10 md:text-5xl lg:text-6xl">
            Contact <span className="text-brand-coral">Us</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-medium md:mt-6 md:max-w-3xl md:text-lg lg:text-xl">
            Have questions, need assistance, or want to learn more?
            <br />
            Our team is here to help. Reach out to us, and we&apos;ll ensure you have!
          </p>
        </div>

        <div className="mt-14 rounded-[28px] bg-black px-6 py-10 md:mt-16 md:px-10 md:py-12 lg:px-14 lg:py-14">
          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
            <div className="grid gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
              <label className={labelClass}>
                Name*
                <input
                  name="name"
                  required
                  placeholder="Anna"
                  className={fieldClass}
                />
              </label>
              <label className={labelClass}>
                Email*
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Anna@mail"
                  className={fieldClass}
                />
              </label>
              <label className={labelClass}>
                Phone*
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+01 12345"
                  className={fieldClass}
                />
              </label>
            </div>

            <label className={labelClass}>
              Message*
              <textarea
                name="message"
                required
                rows={8}
                placeholder="I wanted to know..."
                className={`${fieldClass} min-h-[220px] resize-y md:min-h-[260px]`}
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-coral py-5 text-center text-lg font-semibold text-white transition hover:bg-brand-coral/90 md:py-6 md:text-xl"
            >
              Submit
            </button>
            {status === 'sent' ? (
              <p className="text-center text-base text-white/80 md:text-lg" role="status">
                Thanks — we&apos;ll get back to you shortly.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
