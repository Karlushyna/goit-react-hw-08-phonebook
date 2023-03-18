import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// in case of private route and user is logged in, rendering the component
//in other case rendering <Navigate> to redirectTo

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };