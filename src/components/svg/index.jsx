import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { path } from './svgPath.js';

const propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    viewBox: PropTypes.string,
};

const defaultProps = {
    className: null,
    type: null,
    viewBox: '0 0 20 20',
};

class Svg extends PureComponent {
    getPath () {
        return path[this.props.type];
    }

    render () {
        return (
            <svg
                className={this.props.className}
                dangerouslySetInnerHTML={{ __html: this.getPath() }}
                viewBox={this.props.viewBox}
            />
        );
    }
}

Svg.propTypes = propTypes;
Svg.defaultProps = defaultProps;

export default Svg;
