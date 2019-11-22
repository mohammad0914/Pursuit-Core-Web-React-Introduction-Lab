import React from 'react';
import './UserProfile.css';

class UserProfile extends React.Component {
    render() {
        return (
            <div className='UserProfile'>
                <img 
                    src='https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg'
                    width='200'
                    height='200'
                >
                </img>
                <div className='Description'>
                    <h2>Jordan Walke</h2>
                    <h3>React Creator</h3>
                    <p>Lorem Ipsem</p>
                </div>
            </div>
        );
    }
}

export default UserProfile;