import { useEffect, useState } from "react";

export const usePagination = (
    totalCount: number | null, 
    currentPage: number, 
    setCurrentPage: (page: number) => void
  ) => {


  const storedPage = JSON.parse(localStorage.getItem("page") ?? '1');
  const [page, setPage] = useState<number>(storedPage);
  const count = Math.ceil(totalCount! / 10);
  const hasPrevPage = page > 1;
  const hasNextPage = page < count;

  useEffect(() => {
    setPage(page);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem("page", `${page}`);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    hasPrevPage && setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    hasNextPage && setPage((prevPage) => prevPage + 1);
  };

  return {
    page,
    hasNextPage,
    hasPrevPage,
    count,
    handleNextPage,
    handlePrevPage,
    handlePageChange,
  };
};