

/** @jsx React.DOM */
// var React = require('react');
var ProcessView = require('./ProcessView.jsx');
var InfoView = require('./InfoView.jsx');

var MainApp = React.createClass({

    displayName: 'MainApp',

    mixins: [],

    // 這裏列出所有要用到的 property 與其預設值
    // 它在 getInitialState() 前執行，此時 this.state 還是空值
    getDefaultProps: function() {
    	console.log('getDefaultProps');
        return {
            foo: '__foo__',
            // bar: '__bar__'
        };
    },

    render: function () {
        return (
        	<div className="wrapper">
	        	<div className="title">
	        		<h1>存款計畫</h1>
	        	</div>
            	<div className="row">
            		<div className="col-md-5">
            			<ProcessView />
            		</div>
            		<div className="col-md-5 col-md-offset-1">
            			<InfoView />
            		</div>
            	</div>
            </div>
        );
    }
});

module.exports = MainApp;
