import React from 'react';
import './TopBar.css';

class TopBar extends React.Component {
    render() {
        return (
            <div className='TopBar'>
                <button>What is Pursuit?</button>
                <button>Create an account</button>
                <button>Sign in</button>
            </div>
        );
    }
}

export default TopBar;
