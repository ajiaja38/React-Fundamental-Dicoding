/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../../utils/network.data";
import LoadingNote from "../../components/LoadingNote";
import { showFormattedDate } from "../../utils";
import { Button } from "@material-tailwind/react";
import useToast from "../../hooks/useToast";
import useLang from "../../hooks/useLang";
import { CARD_MESSAGE } from "../../utils/content";
import useModal from "../../hooks/useModal";
import Modal from "../../components/modal";

const DetailNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { lang } = useLang();
  const [openArchive, toggleArchiveModal] = useModal();
  const [openDelete, toggleDeleteModal] = useModal();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getDetailNote = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      const { error, data } = await getNote(id);

      if (error) {
        setIsLoading(false);
        navigate("/not-found-note");
      }

      setData(data);
      setIsLoading(false);
    }, 1500);
  };

  const handleDeleteNote = async () => {
    setIsLoading(true);

    const { error } = await deleteNote(id);

    if (error) {
      showToast("error", CARD_MESSAGE[lang].errorDelete);
      setIsLoading(false);
      return;
    }

    showToast("success", CARD_MESSAGE[lang].successDelete);
    setIsLoading(false);
    navigate("/home");
  };

  const toggleArchive = async () => {
    try {
      data.archived ? await unarchiveNote(id) : await archiveNote(id);
      showToast(
        "success",
        data.archived
          ? CARD_MESSAGE[lang].successRestore
          : CARD_MESSAGE[lang].successArchive
      );
      data.archived ? navigate("/home") : navigate("/archive");
    } catch (error) {
      showToast("error", error.message);
    }
  };

  useEffect(() => {
    getDetailNote();
  }, [id]);

  if (isLoading) {
    return <LoadingNote />;
  }

  return (
    <>
      <div className="flex flex-col gap-2 p-5 bg-white dark:bg-blue-gray-800 dark:border-blue-gray-700 border rounded-lg shadow">
        <h1 className="text-xl md:text-2xl font-extrabold">{data.title}</h1>
        <p>{data.body}</p>
        <p className="font-semibold">{showFormattedDate(data.createdAt)}</p>
        <div className="flex flex-col md:flex-row gap-2 mt-3">
          {data.archived ? (
            <Button onClick={() => toggleArchiveModal()} color="green">
              {lang === "id" ? "Aktifkan" : "Activate"}
            </Button>
          ) : (
            <Button onClick={() => toggleArchiveModal()} color="yellow">
              {lang === "id" ? "Arsipkan" : "Archive"}
            </Button>
          )}
          <Button onClick={() => toggleDeleteModal()} color="red">
            {lang === "id" ? "Hapus" : "Delete"}
          </Button>
        </div>
      </div>
      <Modal
        open={openArchive}
        handleOpen={toggleArchiveModal}
        message={
          data.archived
            ? CARD_MESSAGE[lang].restore
            : CARD_MESSAGE[lang].archive
        }
        onConfirm={toggleArchive}
      />
      <Modal
        open={openDelete}
        handleOpen={toggleDeleteModal}
        message={CARD_MESSAGE[lang].delete}
        onConfirm={handleDeleteNote}
      />
    </>
  );
};

export default DetailNote;
