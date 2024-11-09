import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import NavbarPanel from "./components/NavbarPanel"; 
import Product from './components/Product';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavbarPanel /> 
          <Outlet /> 
        </>
      ),
      children: [
        { index: true, element: <Product /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
