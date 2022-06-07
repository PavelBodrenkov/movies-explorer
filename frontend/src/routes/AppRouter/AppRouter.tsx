import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom"
import { Context } from "../..";
import Error404 from "../../containers/Error/Error404";
import Account from "../../pages/Account/Account";
import Films from "../../pages/Films/Films";
import Login from "../../pages/Login/Login";
import Main from "../../pages/Main/Main";
import Register from "../../pages/Register/Register";
import SaveFilms from "../../pages/SaveFilms/SaveFilms";
import ShowFilm from "../../pages/ShowFilm/ShowFilm";
import { ACCOUNT, FILMS, LOGIN, MAIN, REGISTER, SAVE_FILMS, SHOW_FILM } from "../../utils/const";
import GuestRoute from "./GuestRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const AppRouter = observer(() => {
    //@ts-ignore
    const { authStore } = useContext(Context);
    const auth = authStore

    return auth.isLoaded ? (
        <Routes>
            <Route path={MAIN} element={ <Main />}/>
            <Route
                path={FILMS}
                element={
                    <PrivateRoute>
                        <Films />
                    </PrivateRoute>
                }
            />
            <Route path={LOGIN} element={
                <GuestRoute>
                    <Login />
                </GuestRoute>
            }/>
            <Route path={REGISTER} element={
                <GuestRoute>
                    <Register />
                </GuestRoute>
            }/>
            <Route
                path={SAVE_FILMS}
                element={
                    <PrivateRoute>
                        <SaveFilms />
                    </PrivateRoute>
                }
            />
            <Route
                path={ACCOUNT}
                element={
                    <PrivateRoute>
                        <Account />
                    </PrivateRoute>
                }
            />
            <Route
                path={SHOW_FILM+'/:id'}
                element={
                    <PrivateRoute>
                        <ShowFilm />
                    </PrivateRoute>
                }
            />
            <Route path={'*'} element={<Error404 />} />
        </Routes>
    )
        :
        (<div>ЗАГРУЗКА...</div>)
})

export default AppRouter