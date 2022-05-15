import { format } from 'date-fns';
import React from 'react';

const Appoinment = ({ date }) => {
    return (
        <div>
            <p>You picked {format(date, 'PP')}.</p>
        </div>
    );
};

export default Appoinment;