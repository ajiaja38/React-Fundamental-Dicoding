import { useState } from "react";
import FormAddNote from "../../components/Form/FormAddNote";
import useInput from "../../hooks/useInput";
import useLang from "../../hooks/useLang";
import useToast from "../../hooks/useToast";
import { ADD_NOTE_MESSAGE } from "../../utils/content";
import { addNote } from "../../utils/network.data";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [title, setTitle] = useInput("");
  const [content, setContent] = useInput("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { showToast } = useToast();
  const { lang } = useLang();

  const handleInput = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      if (!title || !content) {
        showToast(
          "error",
          lang === "id"
            ? "Semua kolom harus diisi!"
            : "All fields must be filled!"
        );
        setIsLoading(false);
        return;
      }

      const { error } = await addNote({ title, body: content });

      if (error) {
        showToast("error", ADD_NOTE_MESSAGE[lang].error);
        setIsLoading(false);
        return;
      }

      showToast("success", ADD_NOTE_MESSAGE[lang].success);
      setIsLoading(false);
      navigate("/home");
    }, 1500);
  };

  return (
    <FormAddNote
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      handleInput={handleInput}
      isLoading={isLoading}
    />
  );
};

export default AddNote;
