import Logo from './../../assets/img/main/logo__COLOR_main-1.svg'
import Container from "../../elements/Container";
import { DrawerStyled, StyledHeader } from './HeaderStyles';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import Burger from '../../assets/img/main/burger.svg';
import { observer } from 'mobx-react-lite';
import { Context } from '../../';

const Header = observer(() => {

    //@ts-ignore
    const { authStore } = useContext(Context);

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <StyledHeader>
            <Container>
                <div className='content'>
                    <Link to={'/'}><img src={Logo} /></Link>
                    <div className='auth-nav'>
                        {!authStore.user ?
                            <>
                                <Link to={'/register'} className='registration link'>Регистрация</Link>
                                <Link to={'/login'} className='entrance link'>Вход</Link>
                            </>
                            :
                            <>
                                <div className='auth-link'>
                                    <div className='movies'>
                                        <Link
                                            to={'/films'}
                                            className={window.location.pathname === '/' && authStore.user ? 'color-white':'link'}>
                                            Фильмы
                                        </Link>
                                        <Link 
                                            to={'/save-films'} 
                                            className={window.location.pathname === '/' && authStore.user ? 'color-white':'link'}>
                                                Сохраненные фильмы
                                        </Link>
                                    </div>
                                    <div className='account'>
                                        <Link to={'/account'} className='link'>Аккаунт</Link>
                                    </div>
                                </div>
                                <div className='auth-link__mobile'>
                                    <div className='burger-menu'>
                                        <img className={window.location.pathname === '/' ? 'svg-white' : 'svg-black'} src={Burger} onClick={showDrawer} />
                                    </div>
                                    <DrawerStyled
                                        placement="right"
                                        onClose={onClose}
                                        visible={visible}
                                        width={window.innerWidth < 375 ? '100%' : 375}
                                    >
                                        <div className='drawer-link'>
                                            <Link to={'/'} className='link'>Главная</Link>
                                            <Link to={'/films'} className='link'>Фильмы</Link>
                                            <Link to={'/save-films'} className='link'>Сохраненные фильмы</Link>
                                        </div>
                                        <div className='account'>
                                            <Link to={'/account'} className='link'>Аккаунт</Link>
                                        </div>
                                    </DrawerStyled>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </Container>
        </StyledHeader>
    );
});

export default Header;