import { Button, Input, Typography } from "antd";
import { StyledSendComment } from "./SendCommentStyle"
import {FC} from "react";

const { TextArea } = Input;
const { Title } = Typography;

const SendComment:FC<any> = ({handleValueComment, saveComment}) => {


    return(
        <StyledSendComment>
            <Title level={4}>Комментарии</Title>
            <TextArea 
            autoSize={{ minRows: 3, maxRows: 5 }} 
            placeholder="Напишите комментарий"
            onChange={(e:any) => handleValueComment(e.target.value)}
            />
            <Button type="primary" onClick={saveComment}>Оставить комментарий</Button>
        </StyledSendComment>
    )
}

export default SendComment