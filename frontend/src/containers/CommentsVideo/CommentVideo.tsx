import { Avatar, Button, Comment, Input, Typography } from "antd"
import { observer } from "mobx-react-lite"
import { FC, useContext, useEffect, useState } from "react"
import { Context } from "../.."
import { getComment, getComments } from "../../services/http/comments"
import { StyledCommentVideo } from "./CommentVideoStule"



interface CommentVideoProps {
    children?:React.ReactNode
    comment:any
    comments:any
    users:any
}

const CommentVideo: FC<CommentVideoProps> = observer(({
                                                          children,
                                                          comment,
                                                          comments,
                                                          users
}) => {
    //@ts-ignore
    const { authStore } = useContext(Context);
    const [data, setData] = useState<any>([])

    useEffect(() => {
        comments.map((item:any) => {
            let arr:any[] = []
                if(comment?.children && comment?.children.includes(item._id)) {
                    arr.push(item)
                }
                setData(arr)
            })
    }, [comment, comments])


    return (
        <StyledCommentVideo>
            <Comment
                actions={[<span key="comment-nested-reply-to">Ответить</span>]}
                author={<a>{users.find((item:any) => item._id === comment?.owner)?.name}</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <p>
                        {comment?.body}
                    </p>
                }
            >
                {children}
                {/*{data.map((item:any) => {*/}
                {/*    return(*/}
                {/*        <CommentVideo comment={item} comments={comments} users={users}/>*/}
                {/*    )*/}
                {/*})}*/}
            </Comment>
        </StyledCommentVideo>
    )
})

export default CommentVideo