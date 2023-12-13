import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import useLang from "../../hooks/useLang";

const Modal = ({ open, handleOpen, message, onConfirm }) => {
  const { lang } = useLang();

  return (
    <Dialog
      open={open}
      size="xs"
      handler={handleOpen}
      className="bg-white dark:bg-blue-gray-800"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader className="dark:text-gray-300">
        {lang === "id" ? "Peringatan" : "Warning"}
      </DialogHeader>
      <DialogBody className="dark:text-gray-300">{message}</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span className="dark:text-gray-300">
            {lang === "id" ? "Batal" : "Cancel"}
          </span>
        </Button>
        <Button variant="gradient" color="green" onClick={() => onConfirm()}>
          <span>{lang === "id" ? "Ya" : "Confirm"}</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
};

export default Modal;
