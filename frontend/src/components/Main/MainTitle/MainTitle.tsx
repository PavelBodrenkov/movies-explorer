import Container from "../../../elements/Container";
import MainLogo from '../../../assets/img/main/text__COLOR_landing-logo.svg'
import { StyledMainTitle } from './MainTitleStyles';
import { Anchor } from 'antd';
import { useEffect, useState } from "react";

const { Link } = Anchor;

const MainTitle = () => {
    const [anchorTarget, setAnchorTarget] = useState<any>(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById('project'));
      },[]);
   
    const handlerScroll = (e:any) => {
        e.preventDefault();
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <StyledMainTitle>
            <Container>
                <div className='content'>
                    <div className='info'>
                        <h1 className='title'>Учебный проект студента факультета<wbr/> Веб-разработки.</h1>
                        <p className='subtitle'>Листайте ниже, что бы узнать больше про этот<br/> проект и его создателя.</p>
                        <a href={'#project'} className='more' onClick={handlerScroll}>Узнайте больше</a>
                    </div>
                    <div className='img'>
                        <img src={MainLogo}/>
                    </div>
                </div>
            </Container>
        </StyledMainTitle>
    );
};

export default MainTitle;