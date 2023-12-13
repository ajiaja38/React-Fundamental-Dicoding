import { useState } from "react";

const useModal = () => {
  const [open, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  return [open, toggleModal];
};

export default useModal;
