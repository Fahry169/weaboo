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

  return (
    <div className="text-white text-2xl flex justify-center items-center gap-4 py-8">
      <button
        onClick={handlerPrev}
        className="hover:text-color-1 transition-all"
      >
        Prev
      </button>
      <p>
        {" "}
        {page} of {lastPage}
      </p>
      <button
        onClick={handlerNext}
        className="hover:text-color-1 transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
