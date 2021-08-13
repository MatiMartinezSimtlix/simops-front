import React, { useState } from 'react'

const useBoolean = () => {
  const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false)
    }

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return {
        isOpen,
        handleOpen,
        handleClose,
        handleToggle
    }
}

export default useBoolean
