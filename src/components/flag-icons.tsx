import type { SVGProps } from "react";

type FlagProps = SVGProps<SVGSVGElement>;

const base: FlagProps = {
  width: 20,
  height: 14,
  viewBox: "0 0 20 14",
  className: "rounded-[2px]",
};

export function FlagES(props: FlagProps) {
  return (
    <svg {...base} {...props}>
      <rect width="20" height="14" fill="#AA151B" />
      <rect y="3.5" width="20" height="7" fill="#F1BF00" />
    </svg>
  );
}

export function FlagGB(props: FlagProps) {
  return (
    <svg {...base} {...props}>
      <rect width="20" height="14" fill="#012169" />
      <path d="M0 0 20 14M20 0 0 14" stroke="#fff" strokeWidth="2.4" />
      <path d="M0 0 20 14M20 0 0 14" stroke="#C8102E" strokeWidth="0.9" />
      <path d="M10 0V14M0 7H20" stroke="#fff" strokeWidth="3.6" />
      <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="1.6" />
    </svg>
  );
}

export function FlagFR(props: FlagProps) {
  return (
    <svg {...base} {...props}>
      <rect width="20" height="14" fill="#fff" />
      <rect width="6.67" height="14" fill="#0055A4" />
      <rect x="13.33" width="6.67" height="14" fill="#EF4135" />
    </svg>
  );
}

export function FlagCA(props: FlagProps) {
  return (
    <svg {...base} {...props}>
      <rect width="20" height="14" fill="#FCDD09" />
      <rect y="0" width="20" height="1.56" fill="#DA121A" />
      <rect y="3.11" width="20" height="1.56" fill="#DA121A" />
      <rect y="6.22" width="20" height="1.56" fill="#DA121A" />
      <rect y="9.33" width="20" height="1.56" fill="#DA121A" />
      <rect y="12.44" width="20" height="1.56" fill="#DA121A" />
    </svg>
  );
}
