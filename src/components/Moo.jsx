import React from 'react';
import './Moo.css';

const Moo = (props) => (
    <div className="moo-container">
        <p>
            {props.currentCow.cow_description}
        </p>

        This is where Cow information will go
        {props.currentCow.cow_image}
    </div>
);

export default Moo;
