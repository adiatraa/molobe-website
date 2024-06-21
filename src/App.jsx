import HomePage from './pages/Home/HomePage.jsx'
import MoviesPage from './pages/Movies/MoviesPage.jsx'
import FavoritePage from './pages/FavoritePage.jsx'
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
    path: "/favorite",
    element: <FavoritePage/>
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
