import {Button, Input, Typography} from "antd";
import {StyledSendComment} from "./SendCommentStyle"
import {FC, useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const {TextArea} = Input;
const {Title} = Typography;

const SendComment: FC = observer(() => {

    const {showMovieStore} = useContext<any>(Context);

    return (
        <StyledSendComment>
            <Title level={4}>Комментарии</Title>
            <TextArea
                autoSize={{minRows: 3, maxRows: 5}}
                placeholder="Напишите комментарий"
                onChange={(e: any) => showMovieStore.handleValueComment(e.target.value)}
            />
            <Button type="primary" onClick={() => showMovieStore.saveComment()}>Оставить комментарий</Button>
        </StyledSendComment>
    )
})

export default SendComment