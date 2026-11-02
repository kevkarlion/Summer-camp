import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

interface ButtonLinkProps extends ButtonStyleProps {
  href: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
}

interface NativeButtonProps extends ButtonStyleProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "href"> {}

export type ButtonProps = ButtonLinkProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-ink shadow-[0_12px_40px_rgba(16,185,129,0.22)] hover:bg-brand-primary-hover hover:-translate-y-0.5",
  secondary:
    "bg-brand-secondary text-ink shadow-[0_12px_40px_rgba(230,178,85,0.18)] hover:bg-brand-secondary-hover hover:-translate-y-0.5",
  ghost: "bg-transparent text-main hover:bg-overlay-hover",
  outline: "border border-subtle bg-overlay-soft text-main hover:border-primary/50 hover:bg-overlay-hover",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-5 py-3 text-sm",
  lg: "min-h-14 px-6 py-4 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
  } = props;

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] transition-[transform,opacity,background-color,border-color] duration-300 ease-[var(--ease-out-expo)] motion-reduce:transform-none motion-reduce:transition-none",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props) {
    const {
      href,
      external,
      onClick,
      variant: _variant,
      size: _size,
      className: _className,
      children: _children,
      ...linkProps
    } = props;
    void _variant;
    void _size;
    void _className;
    void _children;

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        {...linkProps}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  const { variant: _variant, size: _size, className: _className, children: _children, ...buttonProps } = props;
  void _variant;
  void _size;
  void _className;
  void _children;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
