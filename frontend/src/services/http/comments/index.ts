import axios from "../../helpers/axios";



export const getComment = async (id:string) => {
    const comment = await axios.get(`comments/${id}`)
    return comment
}

export const getComments = async () => {
    const comment = await axios.get(`comments`)
    return comment
}

export const createComments = async (body:string, movie:string,  parent?:string) => {
    const comment = await axios.post(`comments`, {body, movie,  parent})
    return comment
}