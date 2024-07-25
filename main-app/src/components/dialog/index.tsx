import React, { ReactNode } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "./based"
import { Button } from '../button';

interface CustomDialogProps {
    children: ReactNode;
    title?: string;
    description?: string;
    content?: any;
    footer?: ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: ()=> void;
    modal?: boolean;
    styleContent?: string
    styleFooter?: string
    closeButtonLabel? : string
}

const CustomDialog: React.FC<CustomDialogProps> = ({ children, defaultOpen, open, onOpenChange, modal, title, description, content, footer,styleContent, styleFooter, closeButtonLabel }) => {
    return (
        <Dialog defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className={styleContent}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {content}
                <DialogFooter className={styleFooter}>
                    {footer}
                    {closeButtonLabel && (
                        <DialogClose asChild>
                            <Button variant="secondary">
                                {closeButtonLabel}
                            </Button>
                        </DialogClose>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export { CustomDialog }