import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state ={

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://github.com/dhanushka90" className="navbar-brand margin-tb-h">Service Ticket Management System</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
