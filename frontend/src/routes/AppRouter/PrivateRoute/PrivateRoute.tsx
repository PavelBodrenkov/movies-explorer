import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../../..";

//@ts-ignore
const PrivateRoute = observer(({ children }) => {
    //const auth = useAuth();
    //@ts-ignore
    const { authStore } = useContext(Context);
    const auth = authStore
    const location = useLocation();
    const url = new URLSearchParams();
    url.set("redirect", location.pathname + location.search);
  
    return auth.user ? (
      children
    ) : (
      <Navigate
        to={{
          pathname: "/login",
          search: url.toString(),
        }}
      />
    );
  })

  export default PrivateRoute