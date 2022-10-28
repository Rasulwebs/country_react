import React from 'react';
import "./styleLoader.scss"

const Loader = () => {
    return (
        <>
            <div className="lds-roller mt-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </>
    );
};

export default Loader;