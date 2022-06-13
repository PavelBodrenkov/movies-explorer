import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { Context } from "../../..";


//@ts-ignore
const GuestRoute = observer(({ children, ...rest }) => {
    //@ts-ignore
    const { authStore } = useContext(Context);
    const auth = authStore
    const location = useLocation();
    const url = new URLSearchParams(location.search.slice(1));
  
    return authStore.user ? <Navigate to={url.get("redirect") || "/"} /> : children;
  })
  
  export default GuestRoute;