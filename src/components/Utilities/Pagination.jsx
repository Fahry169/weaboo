const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlerPrev = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  };

  const handlerNext = () => {
    if (page < lastPage) {
      setPage((prevState) => prevState + 1);
      scrollTop();
    }
  };

  const handlerFirst = () => {
    setPage(1);
  };

  const handlerLast = () => {
    setPage(lastPage);
  };

  return (
    <div className="text-white text-2xl flex justify-center items-center gap-4 pb-8">
      <button
        onClick={handlerFirst}
        className="hover:text-amber-500 transition-all text-xl"
      >
        First Page
      </button>
      <button
        onClick={handlerPrev}
        className="hover:text-amber-500 transition-all"
      >
        Prev
      </button>
      <p>
        {" "}
        {page} of {lastPage}
      </p>
      <button
        onClick={handlerNext}
        className="hover:text-amber-500 transition-all"
      >
        Next
      </button>
      <button
        onClick={handlerLast}
        className="hover:text-amber-500 transition-all text-xl"
      >
        Last Page
      </button>
    </div>
  );
};

export default Pagination;
