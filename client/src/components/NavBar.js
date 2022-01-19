import React, { useState } from 'react';
import ButtonNavBar from './UI/ButtonNavBar/ButtonNavBar';
import MyNavBar from './UI/NavbarDesign/NavbarDesign';
import NavIcon from './UI/NavIcon/NavIcon';
import pages from '../utils/pages' // поискать как правильно

function Navbar() {
    const [selectPage, setSelectedPage] = useState('main');
    return <div>
        <MyNavBar>
            <NavIcon onClick={() => { setSelectedPage('main') }} />
            {pages.map(page =>
                <ButtonNavBar
                    key={page.url}
                    onClick={() => { setSelectedPage(page.url) }}
                    selectPage={selectPage}
                    urlPage={page.url}
                >
                    {page.body}
                </ButtonNavBar>)}
        </MyNavBar>
    </div>;
}

export default Navbar;
