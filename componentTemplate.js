var React = require('react');
require('./styles/{{displayName}}.scss');

module.exports = React.createClass({
    displayName : '{{displayName}}',

    getInitialState(){
        return {
            exampleState: 'initial state'
        };
    },

    getDefaultProps(){
        return {
            exampleProp: 'default prop'
        };
    },

    propTypes: {
        example: React.PropTypes.string
    },

    componentWillMount(){
    },

    componentDidMount(){
    },

    componentWillUpdate(){
    },

    componentDidUpdate(){
    },

    componentWillUnmount(){
    },

    render(){
        return (
            <div></div>
        );
    }
});
