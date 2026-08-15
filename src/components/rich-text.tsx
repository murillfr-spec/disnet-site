import { Fragment } from "react";

const colorClass = {
  primary: "text-accent",
  secondary: "text-accent-secondary",
} as const;

/** Renders `**phrase**` segments as bold accent-colored text, matching disnet.es's inline emphasis. */
export function RichText({
  text,
  color = "primary",
}: {
  text: string;
  color?: "primary" | "secondary";
}) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className={`font-semibold ${colorClass[color]}`}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
