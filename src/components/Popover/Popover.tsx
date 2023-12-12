import { useState, useRef, useId, type ElementType } from 'react';
import {
    useFloating,
    FloatingPortal,
    shift,
    offset,
    type Placement,
    flip,
    autoUpdate,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
    useClick,
    FloatingFocusManager,
} from '@floating-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    renderPopover: React.ReactNode;
    className?: string;
    as?: ElementType;
    initialOpen?: boolean;
    placement?: Placement;
    isNavVault?: boolean;
}

export default function Popover({
    children,
    className,
    renderPopover,
    as: Element = 'div',
    initialOpen,
    placement = 'bottom',
    isNavVault,
}: Props) {
    const [open, setOpen] = useState(initialOpen || false);

    const data = useFloating({
        open,
        onOpenChange: setOpen,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
        transform: false,
        placement,
    });
    const { refs, floatingStyles, context } = data;
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([click, role, dismiss]);
    const id = useId();

    return (
        <Element className={className}>
            <div ref={refs.setReference} {...getReferenceProps()}>
                {children}
            </div>
            <FloatingPortal id={id}>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            ref={refs.setFloating}
                            style={{
                                // transformOrigin: '5% 0%',
                                width: '100%',
                                // background: '#181F38',
                                ...floatingStyles,
                            }}
                            {...getFloatingProps()}
                            onClick={!isNavVault ? (e) => setOpen((pre) => !pre) : undefined}
                        >
                            {renderPopover}
                        </motion.div>
                    )}
                </AnimatePresence>
            </FloatingPortal>
        </Element>
    );
}
