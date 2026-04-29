import Link from 'next/link';

const base =
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/20';

const variants = {
  primary: 'bg-white text-black hover:bg-white/90',
  ghost: 'bg-transparent text-white hover:bg-white/10',
};

export function Button({
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} type="button" {...props}>
      {children}
    </button>
  );
}

