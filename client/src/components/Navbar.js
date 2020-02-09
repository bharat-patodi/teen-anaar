// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Navbar.css';

// Create the component
class Navbar extends React.Component {
    render() {
        return(
            <ul>
                <li>This is where the navbar should reside.</li>
                <li>My beliefs</li>
                <li>This is</li>
                <li>a list for beliefs.</li>
            </ul>
        )
    }
}

// Export the component
export default Navbar;