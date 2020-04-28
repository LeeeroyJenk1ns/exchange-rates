import React from 'react';

import Nav from '../nav/nav';
import Logo from '../logo/logo';
import Title from '../title/title';
import GetStarted from '../get-started/get-started';

const Header = ({ getValute, checkValute, valuteInfo, offThrow }) => {
    return (
        <header>
            <Nav />
            <Logo />
            <Title />
            <GetStarted
                getValute={getValute}
                checkValute={checkValute}
                valuteInfo={valuteInfo}
                offThrow={offThrow} />
        </header>
    )
}

export default Header;