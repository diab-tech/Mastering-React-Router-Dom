import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import Layout from "../pages/RootLayout";
import Learn from "../pages/learn/RootLearn";
import QuickStart from "../pages/learn";
import Installation from "../pages/learn/Installation";
import Thitd from "../pages/learn/Thitd";
import Contribute from "../pages/Contribute";
import Login from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../components/errors/PageNotFound";

const isLogged = false;
const userData = isLogged ? { data: "eldeep" } : null;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorHandler />, // لاي خطأ بشكل عام
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "contribute",

        element: (
          <ProtectedRoute isAllowed={isLogged} redirectPath="/login" data={userData}>
            <Contribute />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedRoute isAllowed={!isLogged} redirectPath="/contribute" data={userData}>
            <Login />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/learn",

    element: <Learn />,
    children: [
      { path: "", element: <QuickStart /> },
      { path: "installation", element: <Installation /> },
      { path: "thitd", element: <Thitd /> },
    ],
  },
  // لو عايز يشتغل لأي route غلط خارج الـ root
  { path: "*", element: <PageNotFound /> },
]);

export default router;
