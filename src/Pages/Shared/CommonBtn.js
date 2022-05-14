import React from 'react';

const CommonBtn = ({children}) => {
    return (
        <button class="btn rounded-md text-white border-none bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default CommonBtn;