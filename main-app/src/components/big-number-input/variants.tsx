import { cva, type VariantProps } from "class-variance-authority";

export const textInputVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-primary rounded-md text-primary-foreground border border-solid border-input font-normal disabled:cursor-not-allowed focus-visible:ring-1 focus-visible:ring-ring",
        underlined:
          "bg-primary text-primary-foreground border-b-[1px] border-solid border-input font-normal disabled:cursor-not-allowed",
      },
      fieldSize: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      fieldSize: "default",
    },
  }
);

export type TextInputVariants = VariantProps<typeof textInputVariants>;
