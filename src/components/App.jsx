import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Intro from './header/intro/Intro';
import Form from './form/Form';
import List from './list/SiteList';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <div className="tapp">
                <Intro
                    intro="Finden Sie neue Sites oder fügen Sie ihre eigene hinzu."
                    headline="Sites"
                />
                <Form />
                <List />
            </div>
        );
    }
}

export default hot(module)(App);
