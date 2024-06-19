import HomePage from './pages/Home/HomePage.jsx'
import MoviesPage from './pages/Movies/MoviesPage.jsx'
import WatchlistPage from './pages/WatchlistPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/movies",
    element: <MoviesPage/>,
  },
  {
    path: "/watchlist",
    element: <WatchlistPage/>
  },
]);

function App() {
  return (
      <>
          <RouterProvider router={router} />
      </>
  );
}

export default App;
