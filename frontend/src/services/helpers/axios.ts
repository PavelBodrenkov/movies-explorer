import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER
});


instance.interceptors.request.use((config) => {
    if (!config?.headers) {
        throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
    }
    config.headers.Authorization = `Bearer ${localStorage.getItem('auth-token')}`;
    return config;
});


// instance.interceptors.request.use(function (config) {
//     return config;
// },
// function (error) {
//     return Promise.reject(error);
// }
// );

// instance.interceptors.response.use(function (dataResponse) {
//     return dataResponse;
// }, function (error) {
//     if (401 === error.response.status) {
//         // TODO: need find a solution
//         // @ts-ignore
//         //store.dispatch(AuthActionCreators.logout()).then();
//         console.log('tet')
//         // TODO: need find a solution
//         // @ts-ignore
//         //window.location = '/login';
        
//     }
//     if (403 === error.response.status) {
//         alert('У Вас недостаточно прав для выполнения данной операции');
//     }
//     return Promise.reject(error)
// }
// )

export default instance;