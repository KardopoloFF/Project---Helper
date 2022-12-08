import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../redux/slices/userSlice';
import { setOnePost } from '../redux/slices/onePostSlice';
import { IUser } from '../types/users';
import { ITask } from '../types/task';
import { ICategories } from '../types/categories';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const [yes, setYes] = useState(true)

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >

            <Link to="/user/profile/inprogress"><MenuItem onClick={handleMenuClose}>Заявки в работе</MenuItem></Link>
            <Link to="/user/profile"><MenuItem onClick={handleMenuClose}>Мой профиль</MenuItem></Link>
            <Link to="/user/profile/applications" state={{ yes }}><MenuItem onClick={handleMenuClose}>Мои заявки</MenuItem></Link>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Мой профиль</p>
            </MenuItem>
        </Menu>
    );

    interface Istore {
        store: {};
        categories: Array<ICategories>;
        newTaskObj: ITask;
        user: IUser
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store: any) => store.user)
    const newTaskObj = useSelector((store: Istore) => store.newTaskObj)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#209fd9', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px' }}>
                <Toolbar>
                    {/* <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Button style={{
                            color: 'white', fontSize: '20px', backgroundColor: '#145f8c', height: '40px',
                            width: '160px', border: 'solid 1.5px black', marginLeft: '10px'
                        }} component={Link} to="/">Помогатор</Button>
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Button style={{ color: 'white', marginLeft: '10px' }}
                            onClick={() => {
                                dispatch(setOnePost(newTaskObj))
                                setTimeout(() => {
                                    navigate('/task/newgeo')
                                }, 100)
                            }}
                            component={Link} to="/task/newgeo">
                            Создать задание</Button>
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Button style={{ color: 'white' }} component={Link} to="/task/find">Найти задания</Button>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    {!user?.id ? (
                        <>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                <Button style={{ color: 'white' }} component={Link} to="/user/auth">Вход</Button>
                            </Typography>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                <Button style={{ color: 'white' }} component={Link} to="/user/reg">Регистрация</Button>
                            </Typography>
                        </>
                    )
                        : (
                            <>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' } }}
                                >
                                    <Button style={{ color: 'white' }} component={Link} onClick={() => dispatch(logoutUserThunk())} to="/">Выход</Button>
                                </Typography>
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <IconButton

                                        size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </Box>
                            </>
                        )}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box >
    );
}