import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./based"

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    open?: boolean;
    onOpenChange?: ()=> void
    defaultOpen?: boolean
    delayDuration?: number
    skipDelayDuration?: number
    disableHoverableContent?: boolean
}

const CustomTooltip: React.FC<TooltipProps> = ({
    children,
    content,
    open,
    onOpenChange,
    defaultOpen,
    delayDuration,
    skipDelayDuration,
    disableHoverableContent,
    ...props
}) => {
    return (
        <TooltipProvider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration} disableHoverableContent={disableHoverableContent}>
            <Tooltip open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent {...props}>
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export { CustomTooltip }