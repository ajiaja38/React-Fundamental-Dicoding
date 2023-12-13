/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../../utils/network.data";
import CardSkeleton from "../../components/card/CardSkeleton";
import CardItem from "../../components/card/CardItem";
import CardEmpty from "../../components/card/CardEmpty";
import useToast from "../../hooks/useToast";
import useLang from "../../hooks/useLang";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allNotes, setAllNotes] = useState([]);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();
  const { lang } = useLang();

  const fetchActiveNotes = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const { data } = await getActiveNotes();
        setAllNotes(data);
        setNotes(data);
      } catch (error) {
        showToast(
          "error",
          lang === "id" ? "Gagal memuat data" : "Failed to load data"
        );
      }
      setIsLoading(false);
    }, 1000);
  };

  const filteredNotes = () => {
    const searchNotes = allNotes.filter((note) =>
      note.title
        .toLowerCase()
        .includes(searchParams.get("search").toLowerCase())
    );
    setNotes(searchNotes);
  };

  useEffect(() => {
    fetchActiveNotes();
  }, []);

  useEffect(() => {
    if (searchParams.get("search")) {
      filteredNotes();
    } else {
      setNotes(allNotes);
    }
  }, [searchParams, allNotes]);

  return (
    <div>
      <SearchForm
        searchParams={searchParams.get("search")}
        setSearchParams={setSearchParams}
      />
      <div className="my-2 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center lg:place-items-start gap-6 2xl:gap-9">
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : notes.length ? (
          notes.length &&
          notes.map((note) => (
            <CardItem
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              archived={note.archived}
              createdAt={note.createdAt}
            />
          ))
        ) : (
          <div className="col-span-4 p-3 flex justify-center items-center w-full">
            <CardEmpty />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
