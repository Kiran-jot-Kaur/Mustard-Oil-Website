import { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ id, title, subtitle, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-14 sm:py-16 ${className ?? ""}`}>
      <div className="container-pad">
        {(title || subtitle) && (
          <header className="mb-8 max-w-3xl">
            {title && <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-3 text-base text-stone-700 sm:text-lg">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
