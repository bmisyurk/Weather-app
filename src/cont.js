import React from 'react';

const Content = props => ( <div>
    { props.temp &&
    <div>
        <p>Location: {props.city}, {props.country}</p>
        <p> Temperature: {props.temp}</p>
    </div>
    }
    </div>
);

export default Content;

