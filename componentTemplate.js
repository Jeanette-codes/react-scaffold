'use strict';

var React = require('react');
require('./styles/{{displayName}}.scss');

class {{displayName}} extends React.Component {
    displayName : '{{displayName}}',

    getInitialState(){
        return {
            exampleState: 'initial state'
        };
    },

    propTypes: {
        example: React.PropTypes.string
    },

    componentWillMount() {
    },

    componentDidMount() {
    },

    componentWillUpdate() {
    },

    componentDidUpdate() {
    },

    componentWillUnmount() {
    },

    render() {
        return (
            <div></div>
        );
    }
}

{{displayName}}.defaultProps = {
    defaultPropGoesHere: 'default prop'
};
