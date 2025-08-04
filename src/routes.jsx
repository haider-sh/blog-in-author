import App from "./App.jsx";
import Home from "./components/Home.jsx";
import LoginForm from "./components/LoginForm.jsx";
import PostForm from "./components/PostForm.jsx";
import PostPage from "./components/PostPage.jsx";
import SignupForm from "./components/SignupForm.jsx";
import PrivateRoutes from "./ProtectedRoutes.jsx";

const routes = [
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: "/",
                element: <App />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        path: "/posts/:id",
                        element: <PostPage />
                    }, 
                    {
                        path: "/posts/create",
                        element: <PostForm />
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        element: <LoginForm />
    },
    {
        path: "/signup",
        element: <SignupForm />
    }
];

export default routes;