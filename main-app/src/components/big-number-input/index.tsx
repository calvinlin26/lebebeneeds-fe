import * as React from "react"
 
import { cn } from "../../lib/utils"
import { textInputVariants, type TextInputVariants } from "./variants"

interface FunctionalProps {
  onChange?: (value: string) => void,
  fetchedValue?: string | number | readonly string[],
}

export interface BigInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    TextInputVariants,
    FunctionalProps {}

const BigInput = React.forwardRef<HTMLInputElement, BigInputProps>(
  ({ className, variant, fieldSize, onChange, type, fetchedValue, ...props }, ref) => {

    const formatNumber = (value: string | number | readonly string[]) => {
      return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  
    const parseNumber = (value: string | number | readonly string[]) => {
      value = value.toString();
      // Remove non-numeric characters except .
      const numericValue = value.replace(/[^0-9.]/g, '')
      // Split into integer and decimal parts
      const parts = numericValue.split('.')
      // Ensure maximum length
      const maxLength = 16 + (parts.length > 1 ? 1 : 0)
      // Truncate decimal part to precision
      if (parts.length > 1) {
        // console.log(`before : ${parts[1]}`)
        parts[1] = parts[1].substring(0, 2)
        // console.log(`after : ${parts[1]}`)
      }
      // Join parts and truncate to maxLength
      const newValue = parts.join('.').substring(0, maxLength)
      // Return formatted numeric value
      return formatNumber(newValue)
    }
  
    const [formattedValue, setFormattedValue] = React.useState<string>('')
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseNumber(e.target.value)
        setFormattedValue(newValue)
        //pass numeric to the parent
        onChange && onChange(newValue)
    }
  
    React.useEffect(() => {
        setFormattedValue(fetchedValue ? parseNumber(fetchedValue) : '')
    }, [fetchedValue])

    return (
      <input
        type={'text'}
        value={formattedValue}
        onChange={handleChange}
        className={cn(textInputVariants({ variant, fieldSize, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
BigInput.displayName = "BigInput"
 
export { BigInput }