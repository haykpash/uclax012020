import React from 'react';
import './Staff.scss';
import { staffMembers } from './staff.js';

const StaffMembers = () => {
    return staffMembers.map((staffMembers, idx) => {
        return (
        <div  key={ idx } className={ 'StaffMemeber' }>
            <img src={ staffMembers.img } alt={staffMembers.name } />
            <h3>{ staffMembers.name }</h3>
        </div>
        );
    });
}


const Staff = () => {
    return (
        <div className='Staff'>
          <h2>Staff</h2>
          <div className='container'>
                <StaffMembers />
          </div>
        </div>
    )
}

export default Staff;