import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Intro extends PureComponent {
    render() {
        const { intro, headline } = this.props;

        return (
            <div className="tapp__intro">
                <h1>{headline}</h1>
                {intro}
            </div>
        );
    }
}

Intro.propTypes = {
    intro: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
};

export default Intro;
