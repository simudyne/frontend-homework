import React from 'react';

const Loader = () => {
    return (
        <div className="ui segment" style={{marginTop: "5em"}}>
            <div className="ui active inverted dimmer" style={{height: "225px"}}>
                <div className="ui massive text loader">Loading...</div>
            </div>
        </div>
    );
};

export default Loader;