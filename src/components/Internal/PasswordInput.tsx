"use client";
import {
  forwardRef,
  type ForwardedRef,
  type ComponentProps,
} from "react";
import { Input as OriginalInput } from "@/components/ui/input";
import { cn } from "@/utils/style";

type Props = ComponentProps<"input">;

function PasswordInput(
  { className, ...props }: Props,
  forwardedRef: ForwardedRef<HTMLInputElement>
) {
  return (
    <OriginalInput
      ref={forwardedRef}
      {...props}
      className={cn("w-full text-sm", className)}
      type="password"
    />
  );
}

const Password = forwardRef(PasswordInput);
Password.displayName = "PasswordInput";

export { Password };
