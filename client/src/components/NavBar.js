import React, { useState } from 'react';
import ButtonNavBar from './UI/ButtonNavBar/ButtonNavBar';
import MyNavBar from './UI/NavbarDesign/NavbarDesign';
import NavIcon from './UI/NavIcon/NavIcon';
import { publicRoutes } from '../utils/const' // поискать как правильно
import { useNavigate} from "react-router-dom";

function Navbar() {
    const [selectPage, setSelectedPage] = useState('/');
    let navigate = useNavigate();
    const changePage = (patch) => {
        setSelectedPage(patch)
        navigate(patch);
    }
    return <div>
        <MyNavBar>
            <NavIcon onClick={() => { setSelectedPage('/') }} />
            {publicRoutes.map(item =>

                <ButtonNavBar
                    key={item.patch}
                    onClick={() => { changePage(item.patch) }}
                    selectPage={selectPage}
                    urlPage={item.patch}
                >
                    {item.name}
                </ButtonNavBar>

            )}
        </MyNavBar>
    </div>;
}

export default Navbar;
