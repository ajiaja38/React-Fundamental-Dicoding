import AddNote from "./auth/AddNote";
import ArchivePage from "./auth/ArchivePage";
import DetailNote from "./auth/DetailNote";
import HomePage from "./auth/HomePage";
import LoginPage from "./common/LoginPage";
import RegisterPage from "./common/RegisterPage";
import NotFoundNotePage from "./error/NotFoundNotePage";
import NotFoundPage from "./error/NotFoundPage";

const privatePage = {
  Home: <HomePage />,
  archive: <ArchivePage />,
  addNote: <AddNote />,
  detailNote: <DetailNote />,
};

const commonPage = {
  Login: <LoginPage />,
  Register: <RegisterPage />,
};

const errogPage = {
  NotFound: <NotFoundPage />,
  NotFoundNote: <NotFoundNotePage />,
};

export { privatePage, commonPage, errogPage };
