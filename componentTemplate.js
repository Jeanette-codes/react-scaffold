var React = require('react');
require('./styles/{{displayName}}.less');

module.exports = React.createClass({
    displayName : '{{displayName}}',

    getInitialState: function(){
        return {
            example: 'erase this'
        };
    },

    propTypes: {
        example: React.PropTypes.string
    },

    componentWillMount: function(){
    },

    componentDidMount: function(){
    },

    componentWillUpdate: function(){
    },

    componentDidUpdate: function(){
    },

    componentWillUnmount: function(){
    },

    render: function(){
        return (
            <div></div>
        );
    }
});
