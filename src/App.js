import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./routelayouts/NavBar";
import SignIn from "./routelayouts/SignIn";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Blog from './components/Blog'
import Services from "./components/Services";
import "./BaseURL/Auth";
import AuthContext from "./context/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./routelayouts/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/LandingPage";
import BlogPageDisplay from "./components/BlogPageDisplay";
// import LandingPage from "./components/LandingPage";
// import LandingPage from "./components/LandingPage";


const router = createBrowserRouter([
  {
    element:
      <AuthContext>
        <NavBar />
      </AuthContext>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
        
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },

      {
        path: "blog",
        element: 
        <ProtectedRoute>
          <Blog />
        </ProtectedRoute>,
      },
      {
        path: "single/:id",
        element:
                  <ProtectedRoute>
        <BlogPageDisplay/>
                  </ProtectedRoute>,
      },
      {
        path: "*",
        element: <LandingPage/>
      }
    ]
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
