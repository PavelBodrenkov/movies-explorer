import Account from "../pages/Account/Account";
import Films from "../pages/Films/Films";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Register from "../pages/Register/Register";
import SaveFilms from "../pages/SaveFilms/SaveFilms";
import { ACCOUNT, FILMS, LOGIN, MAIN, REGISTER, SAVE_FILMS } from "../utils/const";


export const publicRouter = [
    {path:MAIN, Component:Main},
    {path:REGISTER, Component:Register},
    {path:LOGIN, Component:Login},
]

export const protectedRoute = [
    {path:FILMS, Component:Films},
    {path:SAVE_FILMS, Component:SaveFilms},
    {path:ACCOUNT, Component:Account},
]