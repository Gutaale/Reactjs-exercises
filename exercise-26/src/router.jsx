import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";
import ProtectedRoute from "./pages/ProtectedRoute";
import CreatePost from "./components/CreatePost";
import Login from "./pages/Login";

const router =createBrowserRouter([
    {
        path:'/',
        element: <App />,
        errorElement:<NotFound />,
        children:[
            {
                index:true,
                element: <Home />
            },
            {
        path: 'posts/:postId',
        element: <PostDetail />,
      },
      {
        path: 'create',
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
        ]
    }
])

export default router