import React, { useState, useEffect } from 'react';
import './Staff.scss';
import API from '../../../common/API.js'

const StaffMembers = () => {
    
    //1. set up state to keep track data form rerver
    const [staffMembers, setStaffMembers] = useState([]);
    
    // only do this on mount.
    useEffect(() => {
        // 2. retrueve the data from the server 
        API.get('staff').then((result) => {
            // 3. updatye staffMember with date from servise
            console.log('Staff Sercer Response', result);
            setStaffMembers(result.data);
        });
    },[])
    
    return staffMembers.map((staffMembers, idx) => {
        return (
        <div  key={ idx } className={ 'StaffMemeber' }>
            <img src={ staffMembers.image } alt={staffMembers.title } />
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