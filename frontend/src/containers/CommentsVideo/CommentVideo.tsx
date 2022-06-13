import {Avatar, Button, Comment, Input} from "antd"
import {observer} from "mobx-react-lite"
import React, {FC, useContext, useEffect, useState} from "react"
import {StyledCommentVideo} from "./CommentVideoStule"
import {CommentTypes} from "../../types/commentTypes";
import {UsersProps} from "../../types/userTypes";
import {Context} from "../../index";
import {getComments} from "../../services/http/comments";
import {getUsers} from "../../services/http/users";
import {toJS} from "mobx";

interface CommentVideoProps {
    children?: React.ReactNode
    comment: CommentTypes
    users: UsersProps[]

}

const CommentVideo: FC<CommentVideoProps> = observer(({
                                                          children,
                                                          comment,
                                                          users
                                                      }) => {
    const {showMovieStore, authStore} = useContext<any>(Context);

    const [openAnswer, setOpenAnswer] = useState<boolean>(false)
    useEffect(() => {
        getComments().then((res:{data:CommentTypes[]}) => {
            showMovieStore.setComments(res.data)
        });
    }, []);

    const handleOpenAnswer = () => {
        setOpenAnswer(true)
    }

    const handleAnswerSubmit = (id:string) => {
        showMovieStore.saveComment(id)
        setOpenAnswer(false)
    }

    return (
        <StyledCommentVideo>
            <Comment
                actions={[<span onClick={handleOpenAnswer} key="comment-nested-reply-to">Ответить</span>]}
                author={<a>{users?.find((item: UsersProps) => item._id === comment?.owner)?.name}</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
                content={
                    <p>
                        {comment?.body}
                    </p>
                }
            >
                <div className={openAnswer ? 'open-answer' : 'close-answer'}>
                    <Input onChange={(e) => showMovieStore.handleValueComment(e.target.value)}/>
                    <div className={'answer-comment-block'}>
                        <Button>Отмена</Button>
                        <Button onClick={() => handleAnswerSubmit(comment._id)}>Отправить</Button>
                    </div>
                </div>
                {showMovieStore?.comments?.map((item2: any) => {
                    // @ts-ignore
                    if (comment?.children && comment?.children?.includes(item2._id)) {
                        return <CommentVideo
                            key={item2._id}
                            comment={item2}
                            users={users}
                        />
                    }
                    return null
                })}
            </Comment>
        </StyledCommentVideo>
    )
})

export default CommentVideo