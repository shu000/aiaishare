import { useState } from 'react';

type ModalState = {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useModalState = (): ModalState => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return {
        open,
        onOpen,
        onClose,
    };
};
