import React from 'react';
import './Tiles.styles.css';

const Tile = (props) => (
    <div className="cow-tile">
        <p onClick={() => props.clickHandler(props.idx)}>
            {props.cow.cow_name}
        </p>
        <button onClick={() => props.butcher(props.idx)}>Delete Cow</button>
    </div>
);

export default Tile;
