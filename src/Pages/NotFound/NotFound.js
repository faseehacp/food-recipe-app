import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const NotFound = () => {

    return (
        <div className='not-found'>
            <Sidebar />
            <div className='main'>
                <div className='dummy'>
                    <h1>Page not found</h1>
                </div>
            </div>
        </div>
    );
}

export default NotFound;