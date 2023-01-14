import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'

const Favourites = () => {

    return (
        <div className='favourites'>
            <Sidebar />
            <div className='main'>
                <div className='dummy'>
                    <h1>Favourites Page</h1>
                </div>
            </div>
        </div>
    );
}

export default Favourites;