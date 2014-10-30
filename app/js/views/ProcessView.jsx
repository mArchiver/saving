

/** @jsx React.DOM */
// var React = require('react');

var ProcessView = React.createClass({

    displayName: 'ProcessView',

    mixins: [],

    // 這裏列出所有要用到的 property 與其預設值
    // 它在 getInitialState() 前執行，此時 this.state 還是空值
    getDefaultProps: function() {
    	console.log('getDefaultProps');
        return {
            // foo: '__foo__',
            // bar: '__bar__'
        };
    },

    render: function () {
        return (
        	<div className="target-bar">
                <progress className="bar-1" max="100" value="50">
                </progress>
            </div>
        );
    }
});

module.exports = ProcessView;
