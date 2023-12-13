import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import useTheme from "../../hooks/useTheme";
import useLang from "../../hooks/useLang";
import { showFormattedDate } from "../../utils";
import useModal from "../../hooks/useModal";
import Modal from "../modal";
import { CARD_MESSAGE } from "../../utils/content";
import useToast from "../../hooks/useToast";
import { archiveNote, unarchiveNote } from "../../utils/network.data";
import { NavLink, useNavigate } from "react-router-dom";

const CardItem = ({ id, title, body, archived, createdAt }) => {
  const { isDarkMode } = useTheme();
  const { lang } = useLang();
  const [open, toggleModal] = useModal();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const toggleArchive = async () => {
    try {
      archived ? await unarchiveNote(id) : await archiveNote(id);
      showToast(
        "success",
        archived
          ? CARD_MESSAGE[lang].successRestore
          : CARD_MESSAGE[lang].successArchive
      );
      toggleModal();
      archived ? navigate("/home") : navigate("/archive");
    } catch (error) {
      showToast("error", error.message);
    }
  };

  return (
    <>
      <Card
        className="w-full md:w-72 2xl:w-72 border"
        color={isDarkMode ? "blue-gray" : "white"}
        variant="gradient"
      >
        <CardBody className="flex flex-col gap-2">
          <Typography variant="h5">{title}</Typography>
          <Typography variant="small">{body}</Typography>
          <Typography variant="small" className="font-semibold">
            {showFormattedDate(createdAt)}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex gap-1">
          <NavLink to={`/detail-note/${id}`}>
            <Button
              size="sm"
              variant="gradient"
              color={isDarkMode ? "gray" : "blue"}
            >
              Detail
            </Button>
          </NavLink>
          <Button
            size="sm"
            variant="gradient"
            color={isDarkMode ? "gray" : archived ? "green" : "red"}
            onClick={() => toggleModal()}
          >
            {archived
              ? lang === "id"
                ? "Aktifkan"
                : "Activate"
              : lang === "id"
              ? "Arsipkan"
              : "Archive"}
          </Button>
        </CardFooter>
      </Card>
      <Modal
        open={open}
        handleOpen={toggleModal}
        message={
          archived ? CARD_MESSAGE[lang].restore : CARD_MESSAGE[lang].archive
        }
        onConfirm={toggleArchive}
      />
    </>
  );
};

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default CardItem;
