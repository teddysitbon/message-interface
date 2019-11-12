import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { path } from './svgPath.js';
class Svg extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string,
        viewBox: PropTypes.string,
    };

    static defaultProps = {
        className: null,
        type: null,
        viewBox: '0 0 20 20',
    };

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

export default Svg;
