import { type ReactNode } from "react";

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title?: ReactNode;
  description?: ReactNode;
}) {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        {index} — {label}
      </p>
      {title ? (
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-3 text-sm text-muted">{description}</p>
      ) : null}
    </>
  );
}
