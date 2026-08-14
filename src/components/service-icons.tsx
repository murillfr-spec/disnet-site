import type { JSX, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ReceivingIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v9" />
      <path d="M8.5 9 12 12.5 15.5 9" />
      <path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
    </Base>
  );
}

export function HandlingIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3 4 7l8 4 8-4-8-4Z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 17l8 4 8-4" />
    </Base>
  );
}

export function StorageIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1" />
      <path d="M3.5 9.5h17M3.5 15.5h17M10.5 3.5v17" />
    </Base>
  );
}

export function PickingIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="5" y="4.5" width="14" height="16" rx="2" />
      <path d="M9 4.5V4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v.5" />
      <path d="M9 13l2 2 4-4.5" />
    </Base>
  );
}

export function PackingIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3.5 8 12 3.5 20.5 8 12 12.5 3.5 8Z" />
      <path d="M3.5 8v9L12 21.5" />
      <path d="M20.5 8v9L12 21.5" />
      <path d="M12 12.5v9" />
    </Base>
  );
}

export function EcommerceIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9.5" cy="20" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="20" r="1.1" fill="currentColor" stroke="none" />
      <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L21 8H6.2" />
    </Base>
  );
}

export function TransportIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2.5" y="7.5" width="12" height="9.5" rx="1" />
      <path d="M14.5 11h3.5l3 3v3h-6.5" />
      <circle cx="7" cy="19" r="1.6" />
      <circle cx="17" cy="19" r="1.6" />
    </Base>
  );
}

export function ReverseLogisticsIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4.5 12a7.5 7.5 0 0 1 12.7-5.4" />
      <path d="M17.5 3v4h-4" />
      <path d="M19.5 12a7.5 7.5 0 0 1-12.7 5.4" />
      <path d="M6.5 21v-4h4" />
    </Base>
  );
}

export const serviceIconBySlug: Record<string, (props: IconProps) => JSX.Element> = {
  "recepcion-de-mercancias": ReceivingIcon,
  "manipulacion-de-mercancias": HandlingIcon,
  almacenaje: StorageIcon,
  "preparacion-de-pedidos": PickingIcon,
  "empaqueado-packing": PackingIcon,
  "e-commerce": EcommerceIcon,
  "transporte-de-mercancias": TransportIcon,
  "logistica-inversa": ReverseLogisticsIcon,
};
