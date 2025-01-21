import React, { ElementType, ReactNode, forwardRef } from "react";

import { typeVariants } from "./typeVariants";

interface TextProps {
  variant?:
    | "factoid"
    | "subtitle-1"
    | "subtitle-2"
    | "overline"
    | "lead-text"
    | "body"
    | "small-body"
    | "caption"
    | "button"
    | "link";
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = "body", as, className = "", children, ...props }, ref) => {
    const Component = as || "p";
    const variantClass = typeVariants({ variant });

    return (
      <Component
        ref={ref}
        className={`${variantClass}${className ? ` ${className}` : ""}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

export default Text;
