

/** @jsx React.DOM */
// var React = require('react');

var InfoView = React.createClass({

    displayName: 'InfoView',

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
            <div className="text-side">
                <div className="box">
                    <h2><span className="glyphicon glyphicon-usd"></span> 每月存款</h2>
                    <input type="text" placeholder="10000" />
                </div>
                <div className="box">
                    <h2><span className="glyphicon glyphicon-flag"></span> 目標</h2>
                    <input type="text" placeholder="100000" />
                </div>
                <div className="box">
                    <h2><span className="glyphicon glyphicon-gift"></span> 已達成</h2>
                    <input type="text" placeholder="50000" />
                </div>
                <div className="box end">
                    預計還有<span className="final-day">6 年 8 個月</span>達成目標
                </div>
            </div>
        );
    }
});

module.exports = InfoView;
