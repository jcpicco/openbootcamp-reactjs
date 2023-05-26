import React, { useState } from 'react';


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


const MouseComponent = () => {
    let red = 0;
    let green = 0;
    let blue = 0;

    const [enabled, setenabled] = useState(true);
    const [style, setstyle] = useState({ height: '255px', width: '255px', cursor: 'pointer', backgroundColor: 'black' });

    function randomColorSquare () {
        red = randomIntFromInterval(0, 255);
        green = randomIntFromInterval(0, 255);
        blue = randomIntFromInterval(0, 255);

        setstyle({
            ...style,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
        });
    }

    function resetSquareColor () {
        setstyle({
            ...style,
            backgroundColor: 'black'
        });
    }

    function stopColorChange () {
        setenabled(!enabled);

        setstyle({
            ...style,
            cursor: enabled ? 'not-allowed' : 'pointer'
        });
    }

    return (
        <div onMouseOver={ enabled ? randomColorSquare : null } onMouseLeave={ enabled ? resetSquareColor : null } onDoubleClick={ stopColorChange } style={ style }></div>
    );
}


export default MouseComponent;
