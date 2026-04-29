export function Container({ as: Comp = 'div', className = '', children }) {
  return (
    <Comp className={`mx-auto w-full max-w-6xl px-4 ${className}`}>
      {children}
    </Comp>
  );
}

