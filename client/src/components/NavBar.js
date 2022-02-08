import React, { useState } from 'react';
import ButtonNavBar from './UI/ButtonNavBar/ButtonNavBar';
import MyNavBar from './UI/NavbarDesign/NavbarDesign';
import NavIcon from './UI/NavIcon/NavIcon';
import { publicRoutes } from '../utils/const' // поискать как правильно
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    return <div>
        <MyNavBar>
            <NavIcon onClick={() => { navigate('/') }} />
            {publicRoutes.map(item =>
                <ButtonNavBar
                    key={item.patch}
                    onClick={() => { navigate(item.patch) }}
                    activeButton={item.patch === location.pathname}
                >
                    {item.name}
                </ButtonNavBar>

            )}
            <p onClick={() => { navigate('/moder') }} className="test">Авторизация<br></br>для сотрудник</p>
        </MyNavBar>

    </div>;
}

export default Navbar;
