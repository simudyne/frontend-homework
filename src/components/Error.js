import React from 'react';

const Error = ({error}) => {
    return (
        <div className="ui center aligned segment negative message">
            <i className="medkit massive icon" />
            <p className="ui header large">{error}</p>
        </div>
        
    );
};

export default Error;