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

},{"./views/MainApp.jsx":4}],2:[function(require,module,exports){


/** @jsx React.DOM */
// var React = require('react');
var InputBox = require('./InputBox.jsx');

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
                React.createElement(InputBox, {inputName: "每月存款", inputVal: "10000", iconName: "usd"}), 
                React.createElement(InputBox, {inputName: "存款目標", inputVal: "1000000", iconName: "flag"}), 
                React.createElement(InputBox, {inputName: "已達成", inputVal: "25600", iconName: "gift"}), 

                React.createElement("div", {className: "box end"}, 
                    "預計還有", React.createElement("span", {className: "final-day"}, "6 年 8 個月"), "達成目標"
                )
            )
        );
    }
});

module.exports = InfoView;

},{"./InputBox.jsx":3}],3:[function(require,module,exports){


/** @jsx React.DOM */
// var React = require('react');

var InputBox = React.createClass({

    displayName: 'InputBox',

    render: function () {
        return (
            React.createElement("div", {className: "box"}, 
                React.createElement("h2", null, 
                    React.createElement("span", {className: 'glyphicon glyphicon-' + this.props.iconName}), 

                    this.props.inputName
                ), 
                React.createElement("input", {type: "text", 
                        value: this.props.inputVal})
            )
        );
    }
});

module.exports = InputBox;

},{}],4:[function(require,module,exports){


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

},{"./InfoView.jsx":2,"./ProcessView.jsx":5}],5:[function(require,module,exports){


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kY2EvY29kZS9wcm9qZWN0L3NhdmluZy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2RjYS9jb2RlL3Byb2plY3Qvc2F2aW5nL2FwcC9qcy9ib290LmpzIiwiL1VzZXJzL2RjYS9jb2RlL3Byb2plY3Qvc2F2aW5nL2FwcC9qcy92aWV3cy9JbmZvVmlldy5qc3giLCIvVXNlcnMvZGNhL2NvZGUvcHJvamVjdC9zYXZpbmcvYXBwL2pzL3ZpZXdzL0lucHV0Qm94LmpzeCIsIi9Vc2Vycy9kY2EvY29kZS9wcm9qZWN0L3NhdmluZy9hcHAvanMvdmlld3MvTWFpbkFwcC5qc3giLCIvVXNlcnMvZGNhL2NvZGUvcHJvamVjdC9zYXZpbmcvYXBwL2pzL3ZpZXdzL1Byb2Nlc3NWaWV3LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICog6YCZ6KOP5piv5pW05pSv56iL5byP55qE6YCy5YWl6bue77yM5a6D6LKg6LKs5bu656uLIHJvb3Qgdmlld++8jFxuICog5Lmf5bCx5pivIE1haW5BcHAg5YWD5Lu277yM5bCH5a6D5bu656uL6LW35L6G5pS+5Yiw55Wr6Z2i5LiKXG4gKlxuICogYm9vdC5qcyDlrZjlnKjnmoTnm67lnLDvvIzmmK/lm6DngrrpgJrluLggYXBwIOWVn+WLleaZguacieioseWkmuWFiOacn+W3peS9nOimgeWujOaIkO+8jFxuICog5L6L5aaC6aCQ6LyJ6LOH5paZ5YiwIHN0b3JlIOWFp+OAgeaqouafpeacrOWcsOerryBkYiDni4DmhYvjgIHliIfmj5vkuI3lkIzoqp7ns7vlrZfkuLLjgIFcbiAqIOmAmeS6m+W3peS9nOmDveWFiOWcqCBib290LmpzIOWFp+WBmuWujO+8jOWGjeWVn+WLlSByb290IHZpZXcg5piv5q+U6LyD55CG5oOz55qE5rWB56iLXG4gKlxuICovXG5cbi8vIHYwLjEyIOmWi+Wni+imgeeUqCBjcmVhdGVGYWN0b3J5IOWMheS4gOasoeaJjeiDveS9v+eUqOWFg+S7tlxuLy8g5aaC5p6c5LiN5biM5pyb6YCZ6bq86bq754Wp77yM5Y+q6KaB5Zyo5q+P5Lu9IGpzIOijj+mDveWKoOS4i+mdoumAmeWPpeWNs+WPr++8jOS9huWug+aciee8uum7nlxuLy8gdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vXG4vLyDlm6DngrogcmVxdWlyZSgnLi4uJykg5Y+q5piv5ou/5Yiw5LiA5Lu95YWD5Lu25a6a576p5qqU77yM54Sh5rOV55u05o6l5L2/55SoXG4vLyDopoHnlKjlroPlu7rnq4vkuIDlgIsgZmFjdG9yee+8jOS5i+W+jOaJjeiDveeUouWHuiBpbnN0YW5jZe+8jOS4i+mdoiBjcmVhdGVGYWN0b3J5KCkg5bCx5piv5Zyo5bu656uL5bel5bugXG52YXIgTWFpbkFwcCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkocmVxdWlyZSgnLi92aWV3cy9NYWluQXBwLmpzeCcpKTtcblxuJChmdW5jdGlvbigpe1xuXG5cdC8vXG5cdFJlYWN0LnJlbmRlciggTWFpbkFwcCgpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykgKTtcblxufSlcbiIsIlxuXG4vKiogQGpzeCBSZWFjdC5ET00gKi9cbi8vIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgSW5wdXRCb3ggPSByZXF1aXJlKCcuL0lucHV0Qm94LmpzeCcpO1xuXG52YXIgSW5mb1ZpZXcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBkaXNwbGF5TmFtZTogJ0luZm9WaWV3JyxcblxuICAgIG1peGluczogW10sXG5cbiAgICAvLyDpgJnoo4/liJflh7rmiYDmnInopoHnlKjliLDnmoQgcHJvcGVydHkg6IiH5YW26aCQ6Kit5YC8XG4gICAgLy8g5a6D5ZyoIGdldEluaXRpYWxTdGF0ZSgpIOWJjeWft+ihjO+8jOatpOaZgiB0aGlzLnN0YXRlIOmChOaYr+epuuWAvFxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXREZWZhdWx0UHJvcHMnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIGZvbzogJ19fZm9vX18nLFxuICAgICAgICAgICAgLy8gYmFyOiAnX19iYXJfXydcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidGV4dC1zaWRlXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0Qm94LCB7aW5wdXROYW1lOiBcIuavj+aciOWtmOasvlwiLCBpbnB1dFZhbDogXCIxMDAwMFwiLCBpY29uTmFtZTogXCJ1c2RcIn0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0Qm94LCB7aW5wdXROYW1lOiBcIuWtmOasvuebruaomVwiLCBpbnB1dFZhbDogXCIxMDAwMDAwXCIsIGljb25OYW1lOiBcImZsYWdcIn0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0Qm94LCB7aW5wdXROYW1lOiBcIuW3sumBlOaIkFwiLCBpbnB1dFZhbDogXCIyNTYwMFwiLCBpY29uTmFtZTogXCJnaWZ0XCJ9KSwgXG5cbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYm94IGVuZFwifSwgXG4gICAgICAgICAgICAgICAgICAgIFwi6aCQ6KiI6YKE5pyJXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiZmluYWwtZGF5XCJ9LCBcIjYg5bm0IDgg5YCL5pyIXCIpLCBcIumBlOaIkOebruaomVwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluZm9WaWV3O1xuIiwiXG5cbi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuLy8gdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIElucHV0Qm94ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZGlzcGxheU5hbWU6ICdJbnB1dEJveCcsXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib3hcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogJ2dseXBoaWNvbiBnbHlwaGljb24tJyArIHRoaXMucHJvcHMuaWNvbk5hbWV9KSwgXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbnB1dE5hbWVcbiAgICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwidGV4dFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLmlucHV0VmFsfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEJveDtcbiIsIlxuXG4vKiogQGpzeCBSZWFjdC5ET00gKi9cbi8vIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHJvY2Vzc1ZpZXcgPSByZXF1aXJlKCcuL1Byb2Nlc3NWaWV3LmpzeCcpO1xudmFyIEluZm9WaWV3ID0gcmVxdWlyZSgnLi9JbmZvVmlldy5qc3gnKTtcblxudmFyIE1haW5BcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBkaXNwbGF5TmFtZTogJ01haW5BcHAnLFxuXG4gICAgbWl4aW5zOiBbXSxcblxuICAgIC8vIOmAmeijj+WIl+WHuuaJgOacieimgeeUqOWIsOeahCBwcm9wZXJ0eSDoiIflhbbpoJDoqK3lgLxcbiAgICAvLyDlroPlnKggZ2V0SW5pdGlhbFN0YXRlKCkg5YmN5Z+36KGM77yM5q2k5pmCIHRoaXMuc3RhdGUg6YKE5piv56m65YC8XG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICBcdGNvbnNvbGUubG9nKCdnZXREZWZhdWx0UHJvcHMnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbzogJ19fZm9vX18nLFxuICAgICAgICAgICAgLy8gYmFyOiAnX19iYXJfXydcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIndyYXBwZXJcIn0sIFxuXHQgICAgICAgIFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRpdGxlXCJ9LCBcblx0ICAgICAgICBcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwi5a2Y5qy+6KiI55WrXCIpXG5cdCAgICAgICAgXHQpLCBcbiAgICAgICAgICAgIFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJvd1wifSwgXG4gICAgICAgICAgICBcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC01XCJ9LCBcbiAgICAgICAgICAgIFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvY2Vzc1ZpZXcsIG51bGwpXG4gICAgICAgICAgICBcdFx0KSwgXG4gICAgICAgICAgICBcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC01IGNvbC1tZC1vZmZzZXQtMVwifSwgXG4gICAgICAgICAgICBcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEluZm9WaWV3LCBudWxsKVxuICAgICAgICAgICAgXHRcdClcbiAgICAgICAgICAgIFx0KVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5BcHA7XG4iLCJcblxuLyoqIEBqc3ggUmVhY3QuRE9NICovXG4vLyB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUHJvY2Vzc1ZpZXcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBkaXNwbGF5TmFtZTogJ1Byb2Nlc3NWaWV3JyxcblxuICAgIG1peGluczogW10sXG5cbiAgICAvLyDpgJnoo4/liJflh7rmiYDmnInopoHnlKjliLDnmoQgcHJvcGVydHkg6IiH5YW26aCQ6Kit5YC8XG4gICAgLy8g5a6D5ZyoIGdldEluaXRpYWxTdGF0ZSgpIOWJjeWft+ihjO+8jOatpOaZgiB0aGlzLnN0YXRlIOmChOaYr+epuuWAvFxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgXHRjb25zb2xlLmxvZygnZ2V0RGVmYXVsdFByb3BzJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBmb286ICdfX2Zvb19fJyxcbiAgICAgICAgICAgIC8vIGJhcjogJ19fYmFyX18nXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICBcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ0YXJnZXQtYmFyXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIiwge2NsYXNzTmFtZTogXCJiYXItMVwiLCBtYXg6IFwiMTAwXCIsIHZhbHVlOiBcIjUwXCJ9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2Nlc3NWaWV3O1xuIl19
