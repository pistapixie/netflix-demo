import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Applayout from "./layout/Applayout";
import Homepage from "./pages/Homepage/Homepage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//홈페이지  /
//영화 전체보여주는 페이지 (서치)  /movies
//영화 디테일 페이지  /movies/:id
//추천 영화  /movies/:id/recommendation
//flqb  /movies/:id/reviews
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Homepage />} />
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
