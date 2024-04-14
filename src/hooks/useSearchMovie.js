import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page, sort }) => {
  if (keyword) {
    return api.get(
      `/search/movie?query=${keyword}&page=${page}&sort_by=${sort}`
    );
  } else {
    return api.get(`/movie/popular?page=${page}&sort_by=${sort}`);
  }
};
export const useSearchMovieQuery = ({ keyword, page, sort }) => {
  return useQuery({
    queryKey: ["movie-search", keyword, page, sort], // 쿼리 키에 sort 추가
    queryFn: () => fetchSearchMovie({ keyword, page, sort }),
    select: (result) => result.data,
    keepPreviousData: true,
  });
};
