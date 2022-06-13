import axios from '../../helpers/axios';

interface AuthProps {
    name:string
    email:string
    password:string
}

export const registration = async ({name, email, password}:AuthProps) => {
    const user = await axios.post('auth/registration', {name, email, password})
    return user
}

export const login = async ({name, email, password}:AuthProps) => {
    console.log(email)
    const user = await axios.post('auth/login', {name, email, password})
    return user
}

export const verifyAuth = async() => {
    const user = await axios.get('users/user')
    return user
}

