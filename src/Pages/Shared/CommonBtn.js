import React from 'react';

const CommonBtn = ({children}) => {
    return (
        <button className="btn rounded-md text-white border-none bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary transition"> {children}</button>
    );
};

export default CommonBtn;