import { Input } from "@material-tailwind/react";
import useTheme from "../../hooks/useTheme";
import useLang from "../../hooks/useLang";
import PropTypes from "prop-types";

const SearchForm = ({ searchParams, setSearchParams }) => {
  const { isDarkMode } = useTheme();
  const { lang } = useLang();

  return (
    <div>
      <Input
        size="lg"
        label={lang === "id" ? "Cari Catatan" : "Search Note"}
        color={isDarkMode ? "white" : "black"}
        className="bg-white dark:bg-blue-gray-700"
        onChange={(e) => setSearchParams({ search: e.target.value })}
        value={searchParams || ""}
      />
    </div>
  );
};

SearchForm.propTypes = {
  searchParams: PropTypes.string,
  setSearchParams: PropTypes.func.isRequired,
};

export default SearchForm;
