import { useState } from "react";

const useBoolean = ({ initialState }) => {
  const [isOpen, setIsOpen] = useState(initialState);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleToggle,
  };
};

export default useBoolean;
