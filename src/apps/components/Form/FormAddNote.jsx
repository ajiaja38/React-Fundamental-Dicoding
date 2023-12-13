import { Input, Textarea, Button, Spinner } from "@material-tailwind/react";
import useTheme from "../../hooks/useTheme";
import useLang from "../../hooks/useLang";
import PropTypes from "prop-types";

const FormAddNote = ({
  title,
  setTitle,
  content,
  setContent,
  handleInput,
  isLoading,
}) => {
  const { isDarkMode } = useTheme();
  const { lang } = useLang();

  return (
    <div className="flex flex-col gap-3">
      <Input
        value={title}
        onChange={setTitle}
        label={lang === "id" ? "Judul Catatan" : "Title Note"}
        color={isDarkMode ? "white" : "black"}
        className="bg-white dark:bg-blue-gray-700"
        size="lg"
      />
      <Textarea
        value={content}
        onChange={setContent}
        label={lang === "id" ? "Isi Catatan" : "Content Note"}
        color={isDarkMode ? "green" : "gray"}
        className="bg-white dark:bg-blue-gray-700 dark:text-white"
        size="lg"
      />
      <Button
        onClick={handleInput}
        className="w-full md:w-40 bg-blue-500 dark:bg-blue-gray-700 flex justify-center items-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <Spinner className="h-4 w-4" />
        ) : lang === "id" ? (
          "Tambah Catatan"
        ) : (
          "Add Note"
        )}
      </Button>
    </div>
  );
};

FormAddNote.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default FormAddNote;
