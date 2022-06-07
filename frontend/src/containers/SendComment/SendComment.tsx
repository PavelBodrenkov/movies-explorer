import { Button, Input, Typography } from "antd";
import { StyledSendComment } from "./SendCommentStyle"

const { TextArea } = Input;
const { Title } = Typography;

const SendComment = () => {
    return(
        <StyledSendComment>
            <Title level={4}>Комментарии</Title>
            <TextArea 
            autoSize={{ minRows: 3, maxRows: 5 }} 
            placeholder="Напишите комментарий"
            />
            <Button type="primary">Оставить комментарий</Button>
        </StyledSendComment>
    )
}

export default SendComment