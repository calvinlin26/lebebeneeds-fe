import React, { ReactNode } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "./based"

interface CustomDialogProps {
    children: ReactNode;
    title?: string;
    description?: string;
    content?: ReactNode;
    footer?: ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: ()=> void;
    modal?: boolean; 
}

const CustomDialog: React.FC<CustomDialogProps> = ({ children, defaultOpen, open, onOpenChange, modal, title, description, content, footer }) => {
    return (
        <Dialog defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {content}
                <DialogFooter>
                    {footer}
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export { CustomDialog }