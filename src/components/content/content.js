import React from 'react';

import Valute from '../valute/valute'

const Content = ({ checkValute, valuteInfo }) => {
    return (
        <div>
            <Valute
                checkValute={checkValute}
                valuteInfo={valuteInfo} />
        </div>
    )
}

export default Content;