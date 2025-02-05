import type { LucideIcon } from "lucide-react";
import { TerminalIcon } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;
export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export const Icons = {
  // Add more custom icons as needed..
  tailwind: (props: IconProps) => (
    <svg
      viewBox="0 0 256 154"
      width="256"
      height="154"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          x1="-2.778%"
          y1="32%"
          x2="100%"
          y2="67.556%"
          id="gradient"
        >
          <stop stopColor="#2298BD" offset="0%"></stop>
          <stop stopColor="#0ED7B5" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
        fill="url(#gradient)"
      ></path>
    </svg>
  ),
};

export function create({
  icon: Icon,
}: {
  icon?: LucideIcon;
}): React.ReactElement {
  return <div className="my-1">{Icon ? <Icon /> : <TerminalIcon />}</div>;
}

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    data-testid="geist-icon"
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
    style={{ color: "currentColor" }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
      fill="currentColor"
    ></path>
  </svg>
);
