import axios from '../../helpers/axios';

interface userPropsUpdate {
    name:string
    email:string
   
}

export const updateUser = async ({name, email}:userPropsUpdate) => {
    const user = await axios.put('users/user', {name, email})
    return user
}

export const getUsers = async () => {
    const user = await axios.get('users')
    return user
}

