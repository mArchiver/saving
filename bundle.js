(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * 這裏是整支程式的進入點，它負責建立 root view，
 * 也就是 MainApp 元件，將它建立起來放到畫面上
 *
 * boot.js 存在的目地，是因為通常 app 啟動時有許多先期工作要完成，
 * 例如預載資料到 store 內、檢查本地端 db 狀態、切換不同語系字串、
 * 這些工作都先在 boot.js 內做完，再啟動 root view 是比較理想的流程
 *
 */

// v0.12 開始要用 createFactory 包一次才能使用元件
// 如果不希望這麼麻煩，只要在每份 js 裏都加下面這句即可，但它有缺點
// var React = require('react');
//
// 因為 require('...') 只是拿到一份元件定義檔，無法直接使用
// 要用它建立一個 factory，之後才能產出 instance，下面 createFactory() 就是在建立工廠
var MainApp = React.createFactory(require('./views/MainApp.jsx'));

$(function(){

	//
	React.render( MainApp(), document.getElementById('container') );

})

},{"./views/MainApp.jsx":3}],2:[function(require,module,exports){


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
            React.createElement("div", {className: "text-side"}, 
                React.createElement("div", {className: "box"}, 
                    React.createElement("h2", null, React.createElement("span", {className: "glyphicon glyphicon-usd"}), " 每月存款"), 
                    React.createElement("input", {type: "text", placeholder: "10000"})
                ), 
                React.createElement("div", {className: "box"}, 
                    React.createElement("h2", null, React.createElement("span", {className: "glyphicon glyphicon-flag"}), " 目標"), 
                    React.createElement("input", {type: "text", placeholder: "100000"})
                ), 
                React.createElement("div", {className: "box"}, 
                    React.createElement("h2", null, React.createElement("span", {className: "glyphicon glyphicon-gift"}), " 已達成"), 
                    React.createElement("input", {type: "text", placeholder: "50000"})
                ), 
                React.createElement("div", {className: "box end"}, 
                    "預計還有", React.createElement("span", {className: "final-day"}, "6 年 8 個月"), "達成目標"
                )
            )
        );
    }
});

module.exports = InfoView;

},{}],3:[function(require,module,exports){


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
        	React.createElement("div", {className: "wrapper"}, 
	        	React.createElement("div", {className: "title"}, 
	        		React.createElement("h1", null, "存款計畫")
	        	), 
            	React.createElement("div", {className: "row"}, 
            		React.createElement("div", {className: "col-md-5"}, 
            			React.createElement(ProcessView, null)
            		), 
            		React.createElement("div", {className: "col-md-5 col-md-offset-1"}, 
            			React.createElement(InfoView, null)
            		)
            	)
            )
        );
    }
});

module.exports = MainApp;

},{"./InfoView.jsx":2,"./ProcessView.jsx":4}],4:[function(require,module,exports){


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
        	React.createElement("div", {className: "target-bar"}, 
                React.createElement("progress", {className: "bar-1", max: "100", value: "50"}
                )
            )
        );
    }
});

module.exports = ProcessView;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kY2EvY29kZS9wcm9qZWN0L3NhdmluZy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2RjYS9jb2RlL3Byb2plY3Qvc2F2aW5nL2FwcC9qcy9ib290LmpzIiwiL1VzZXJzL2RjYS9jb2RlL3Byb2plY3Qvc2F2aW5nL2FwcC9qcy92aWV3cy9JbmZvVmlldy5qc3giLCIvVXNlcnMvZGNhL2NvZGUvcHJvamVjdC9zYXZpbmcvYXBwL2pzL3ZpZXdzL01haW5BcHAuanN4IiwiL1VzZXJzL2RjYS9jb2RlL3Byb2plY3Qvc2F2aW5nL2FwcC9qcy92aWV3cy9Qcm9jZXNzVmlldy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICog6YCZ6KOP5piv5pW05pSv56iL5byP55qE6YCy5YWl6bue77yM5a6D6LKg6LKs5bu656uLIHJvb3Qgdmlld++8jFxuICog5Lmf5bCx5pivIE1haW5BcHAg5YWD5Lu277yM5bCH5a6D5bu656uL6LW35L6G5pS+5Yiw55Wr6Z2i5LiKXG4gKlxuICogYm9vdC5qcyDlrZjlnKjnmoTnm67lnLDvvIzmmK/lm6DngrrpgJrluLggYXBwIOWVn+WLleaZguacieioseWkmuWFiOacn+W3peS9nOimgeWujOaIkO+8jFxuICog5L6L5aaC6aCQ6LyJ6LOH5paZ5YiwIHN0b3JlIOWFp+OAgeaqouafpeacrOWcsOerryBkYiDni4DmhYvjgIHliIfmj5vkuI3lkIzoqp7ns7vlrZfkuLLjgIFcbiAqIOmAmeS6m+W3peS9nOmDveWFiOWcqCBib290LmpzIOWFp+WBmuWujO+8jOWGjeWVn+WLlSByb290IHZpZXcg5piv5q+U6LyD55CG5oOz55qE5rWB56iLXG4gKlxuICovXG5cbi8vIHYwLjEyIOmWi+Wni+imgeeUqCBjcmVhdGVGYWN0b3J5IOWMheS4gOasoeaJjeiDveS9v+eUqOWFg+S7tlxuLy8g5aaC5p6c5LiN5biM5pyb6YCZ6bq86bq754Wp77yM5Y+q6KaB5Zyo5q+P5Lu9IGpzIOijj+mDveWKoOS4i+mdoumAmeWPpeWNs+WPr++8jOS9huWug+aciee8uum7nlxuLy8gdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vXG4vLyDlm6DngrogcmVxdWlyZSgnLi4uJykg5Y+q5piv5ou/5Yiw5LiA5Lu95YWD5Lu25a6a576p5qqU77yM54Sh5rOV55u05o6l5L2/55SoXG4vLyDopoHnlKjlroPlu7rnq4vkuIDlgIsgZmFjdG9yee+8jOS5i+W+jOaJjeiDveeUouWHuiBpbnN0YW5jZe+8jOS4i+mdoiBjcmVhdGVGYWN0b3J5KCkg5bCx5piv5Zyo5bu656uL5bel5bugXG52YXIgTWFpbkFwcCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkocmVxdWlyZSgnLi92aWV3cy9NYWluQXBwLmpzeCcpKTtcblxuJChmdW5jdGlvbigpe1xuXG5cdC8vXG5cdFJlYWN0LnJlbmRlciggTWFpbkFwcCgpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykgKTtcblxufSlcbiIsIlxuXG4vKiogQGpzeCBSZWFjdC5ET00gKi9cbi8vIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBJbmZvVmlldyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGRpc3BsYXlOYW1lOiAnSW5mb1ZpZXcnLFxuXG4gICAgbWl4aW5zOiBbXSxcblxuICAgIC8vIOmAmeijj+WIl+WHuuaJgOacieimgeeUqOWIsOeahCBwcm9wZXJ0eSDoiIflhbbpoJDoqK3lgLxcbiAgICAvLyDlroPlnKggZ2V0SW5pdGlhbFN0YXRlKCkg5YmN5Z+36KGM77yM5q2k5pmCIHRoaXMuc3RhdGUg6YKE5piv56m65YC8XG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldERlZmF1bHRQcm9wcycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gZm9vOiAnX19mb29fXycsXG4gICAgICAgICAgICAvLyBiYXI6ICdfX2Jhcl9fJ1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ0ZXh0LXNpZGVcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib3hcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZFwifSksIFwiIOavj+aciOWtmOasvlwiKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIjEwMDAwXCJ9KVxuICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib3hcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsYWdcIn0pLCBcIiDnm67mqJlcIiksIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCIxMDAwMDBcIn0pXG4gICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJveFwifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImdseXBoaWNvbiBnbHlwaGljb24tZ2lmdFwifSksIFwiIOW3sumBlOaIkFwiKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIjUwMDAwXCJ9KVxuICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib3ggZW5kXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgXCLpoJDoqIjpgoTmnIlcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJmaW5hbC1kYXlcIn0sIFwiNiDlubQgOCDlgIvmnIhcIiksIFwi6YGU5oiQ55uu5qiZXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5mb1ZpZXc7XG4iLCJcblxuLyoqIEBqc3ggUmVhY3QuRE9NICovXG4vLyB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFByb2Nlc3NWaWV3ID0gcmVxdWlyZSgnLi9Qcm9jZXNzVmlldy5qc3gnKTtcbnZhciBJbmZvVmlldyA9IHJlcXVpcmUoJy4vSW5mb1ZpZXcuanN4Jyk7XG5cbnZhciBNYWluQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZGlzcGxheU5hbWU6ICdNYWluQXBwJyxcblxuICAgIG1peGluczogW10sXG5cbiAgICAvLyDpgJnoo4/liJflh7rmiYDmnInopoHnlKjliLDnmoQgcHJvcGVydHkg6IiH5YW26aCQ6Kit5YC8XG4gICAgLy8g5a6D5ZyoIGdldEluaXRpYWxTdGF0ZSgpIOWJjeWft+ihjO+8jOatpOaZgiB0aGlzLnN0YXRlIOmChOaYr+epuuWAvFxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgXHRjb25zb2xlLmxvZygnZ2V0RGVmYXVsdFByb3BzJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb286ICdfX2Zvb19fJyxcbiAgICAgICAgICAgIC8vIGJhcjogJ19fYmFyX18nXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICBcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ3cmFwcGVyXCJ9LCBcblx0ICAgICAgICBcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ0aXRsZVwifSwgXG5cdCAgICAgICAgXHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIuWtmOasvuioiOeVq1wiKVxuXHQgICAgICAgIFx0KSwgXG4gICAgICAgICAgICBcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuICAgICAgICAgICAgXHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtNVwifSwgXG4gICAgICAgICAgICBcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFByb2Nlc3NWaWV3LCBudWxsKVxuICAgICAgICAgICAgXHRcdCksIFxuICAgICAgICAgICAgXHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtNSBjb2wtbWQtb2Zmc2V0LTFcIn0sIFxuICAgICAgICAgICAgXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChJbmZvVmlldywgbnVsbClcbiAgICAgICAgICAgIFx0XHQpXG4gICAgICAgICAgICBcdClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYWluQXBwO1xuIiwiXG5cbi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuLy8gdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFByb2Nlc3NWaWV3ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZGlzcGxheU5hbWU6ICdQcm9jZXNzVmlldycsXG5cbiAgICBtaXhpbnM6IFtdLFxuXG4gICAgLy8g6YCZ6KOP5YiX5Ye65omA5pyJ6KaB55So5Yiw55qEIHByb3BlcnR5IOiIh+WFtumgkOioreWAvFxuICAgIC8vIOWug+WcqCBnZXRJbml0aWFsU3RhdGUoKSDliY3ln7fooYzvvIzmraTmmYIgdGhpcy5zdGF0ZSDpgoTmmK/nqbrlgLxcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIFx0Y29uc29sZS5sb2coJ2dldERlZmF1bHRQcm9wcycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gZm9vOiAnX19mb29fXycsXG4gICAgICAgICAgICAvLyBiYXI6ICdfX2Jhcl9fJ1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgXHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidGFyZ2V0LWJhclwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInByb2dyZXNzXCIsIHtjbGFzc05hbWU6IFwiYmFyLTFcIiwgbWF4OiBcIjEwMFwiLCB2YWx1ZTogXCI1MFwifVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9jZXNzVmlldztcbiJdfQ==
