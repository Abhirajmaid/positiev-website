'use client';

import Link from 'next/link';
import { Container } from '@/components/layout/Container';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Agents', href: '#agents' },
  { label: 'Work In Progress', href: '#work' },
  { label: 'Collection', href: '#collection' },
  { label: 'About Us', href: '#about' },
];

function Svg({ children, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function IconHome({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M3 10.5 12 3l9 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 9.8V20a1 1 0 0 0 1 1H10v-6.2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V21h3.5a1 1 0 0 0 1-1V9.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IconLinkedIn({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M7.4 10.9V18.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M7.4 7.4h.01"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <path
        d="M11.2 18.8v-7.3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 14.1c.6-1.5 1.9-2.5 3.6-2.5 2.3 0 3 1.6 3 3.7v3.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IconInstagram({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M8 3.7h8A4.3 4.3 0 0 1 20.3 8v8A4.3 4.3 0 0 1 16 20.3H8A4.3 4.3 0 0 1 3.7 16V8A4.3 4.3 0 0 1 8 3.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17.1 6.9h.01"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function IconX({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M7 18.5 17.5 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 5.5l10.5 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function IconPhone({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M9.1 6.2c.4-.7.7-1 1.5-1.1 1-.1 2.2.3 2.7 1.2l.8 1.5c.4.7.2 1.6-.4 2.1l-.9.7c-.2.2-.3.5-.2.8.6 1.6 1.7 2.8 3.3 3.4.3.1.6 0 .8-.2l.7-.9c.5-.6 1.4-.8 2.1-.4l1.5.8c.9.5 1.3 1.7 1.2 2.7-.1.8-.4 1.1-1.1 1.5-1.4.8-3.2.7-4.9-.1-3.8-1.8-7.1-5.1-8.9-8.9-.8-1.7-.9-3.5-.1-4.9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function PillLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={[
        'whitespace-nowrap rounded-full px-6 py-3 text-[14px] font-medium leading-none transition md:px-7',
        active
          ? 'border border-white/0 bg-white text-[#1E1E1E] shadow-sm'
          : 'border border-white/35 bg-transparent text-white/80 hover:bg-white/10 hover:text-white',
      ].join(' ')}
    >
      {children}
    </Link>
  );
}

function CircleIconButton({ label, href = '#', className = '', children }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={[
        'grid h-11 w-11 place-items-center rounded-full',
        'border border-white/25 bg-black/25 text-white backdrop-blur',
        'hover:bg-black/35 transition',
        className,
      ].join(' ')}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 z-50">
      <Container className="pointer-events-auto flex max-w-[1500px] items-center justify-between py-4">
        {/* Left: logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
            <IconHome className="h-5 w-5 text-white/90" />
          </span>
          <span className="font-serif text-[30px] font-semibold tracking-[0.01em]">
            LeonHome
          </span>
        </Link>

        {/* Middle: nav */}
        <div className="hidden flex-1 justify-center px-6 md:flex">
          <nav className="inline-flex -translate-x-4 items-center justify-center gap-2 rounded-full bg-transparent p-0 backdrop-blur-xl">
            {navItems.map((item) => (
              <PillLink
                key={item.label}
                href={item.href}
                active={item.label === 'Home'}
              >
                {item.label}
              </PillLink>
            ))}
          </nav>
        </div>

        {/* Right: social + phone */}
        <div className="flex shrink-0 items-center">
          <div className="flex -translate-x-6 items-center gap-3">
            <CircleIconButton label="LinkedIn">
              <IconLinkedIn className="h-[22px] w-[22px] text-white" />
            </CircleIconButton>
            <CircleIconButton label="Instagram">
              <IconInstagram className="h-[22px] w-[22px] text-white" />
            </CircleIconButton>
            <CircleIconButton label="X">
              <IconX className="h-[22px] w-[22px] text-white" />
            </CircleIconButton>
          </div>

          <Link
            href="tel:+923199492086"
            className={[
              'ml-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-wide',
              'border border-white/10 bg-white text-black',
              'shadow-[0_14px_55px_rgba(0,0,0,0.35)] hover:bg-white transition',
            ].join(' ')}
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-black/10">
              <IconPhone className="h-[18px] w-[18px] text-black" />
            </span>
            <span>+923199492086</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}

