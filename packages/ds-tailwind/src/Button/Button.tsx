import * as React from "react";
import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import variants from "../variants";

type ButtonVariantProps = Parameters<typeof styles>[0];
export type ButtonProps = ComponentPropsWithoutRef<"button"> &
  ButtonVariantProps;

const Button = React.forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { className, kind, size, ...rest } = props;

    return (
      <button
        {...rest}
        ref={ref}
        className={`${styles({ size, kind })} ${className}`}
      />
    );
  }
);

Button.displayName = "Button";
export default Button;

// Use /*tw*/ before variants for intelliSense in VsCode along with
//  "tailwindCSS.experimental.classRegex": [
//    ["/\\*tw\\*/ ([^;]*);", "[\"'`]([^\"'`]*).*?[\"'`]", "'([^']*)'"]
//  ]
// In settings.json

const styles = /*tw*/ variants({
  base: ["px-3 py-1"],
  variants: {
    kind: {
      outline: "border rounded-md",
      solid: [
        // use arrays or strings
        // useful for breaking up modifier groups
        "bg-blue-500",
        "hover:bg-blue-700 hover:scale-105",
      ],
    },
    size: {
      small: "text-sm",
      large: "text-xl",
    },
  },
  compoundVariants: [
    {
      kind: "outline",
      size: "large",
      css: "text-pink-500",
    },
  ],
  defaultVariants: {
    size: "large",
    kind: "solid",
  },
});
