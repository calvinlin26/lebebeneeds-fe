import * as React from "react"
 
import { cn } from "../../lib/utils"
import { textInputVariants, type TextInputVariants } from "./variants"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    TextInputVariants {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, fieldSize, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(textInputVariants({ variant: type == "file" ? "file" : variant, fieldSize, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"
 
export { Input }