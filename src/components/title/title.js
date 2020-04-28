import React from 'react';

const Title = () => {
    const date = new Date();
    let dateFormat = {};

    if (+date.getDate() <= 9) {
        dateFormat.day = 0 + '' + date.getDate();
    } else {
        dateFormat.day = date.getDate();
    }

    if (+(date.getMonth() + 1) <= 9) {
        dateFormat.month = 0 + '' + (date.getMonth() + 1);
    } else {
        dateFormat.month = date.getMonth() + 1;
    }

    dateFormat.year = date.getFullYear();

    return (
        <div className="title">
            <h1>Курс валют европейского ЦБ на <span id="date">{`${dateFormat.day}-${dateFormat.month}-${dateFormat.year}`}</span></h1>
        </div>
    )
}

export default Title;