(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,,,,,function(e,t,s){e.exports=s(18)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(3),r=s.n(c),i=s(4),o=s(5),u=s(1),h=s(7),l=s(6);s(13);var d=function(e){var t={cursor:e.paused?"pointer":"default",opacity:e.paused?"100%":"0%"};return a.a.createElement("div",{className:"setting"},a.a.createElement("div",null,e.category," Length"),a.a.createElement("div",{className:"dials"},a.a.createElement("img",{src:"arrow-up-solid.svg",alt:"Increase ".concat(e.category),onClick:function(){return e.changeLength(e.category,1)},style:t}),a.a.createElement("div",null,e.length),a.a.createElement("img",{src:"arrow-down-solid.svg",alt:"Decrease ".concat(e.category),onClick:function(){return e.changeLength(e.category,-1)},style:t})))};s(14);var m=function(e){return a.a.createElement("div",{className:"clock"},a.a.createElement("div",{className:"mode"},e.mode),a.a.createElement("div",{className:"time"},function(e){var t=("0"+Math.floor(e/60)).slice(-2),s=("0"+e%60).slice(-2);return"".concat(t,":").concat(s)}(e.seconds)))};s(15);var g=function(e){return a.a.createElement("img",{src:e.src,alt:e.alt,onClick:e.activateButton})},v=(s(16),s(17),function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).state={breakLength:5,sessionLength:25,mode:"Session",seconds:1500,paused:!0},e.changeLength=e.changeLength.bind(Object(u.a)(e)),e.changeModes=e.changeModes.bind(Object(u.a)(e)),e.decrementTimer=e.decrementTimer.bind(Object(u.a)(e)),e.pauseTimer=e.pauseTimer.bind(Object(u.a)(e)),e.resumeTimer=e.resumeTimer.bind(Object(u.a)(e)),e.resetClock=e.resetClock.bind(Object(u.a)(e)),e}return Object(o.a)(s,[{key:"changeLength",value:function(e,t){this.state.paused&&("Break"===e&&this.state.breakLength+t>=0&&this.state.breakLength+t<=60?this.setState((function(e){var s=e.breakLength+t;return{breakLength:s,seconds:"Break"===e.mode?60*s:e.seconds}})):"Session"===e&&this.state.sessionLength+t>=0&&this.state.sessionLength+t<=60&&this.setState((function(e){var s=e.sessionLength+t;return{sessionLength:s,seconds:"Session"===e.mode?60*s:e.seconds}})))}},{key:"changeModes",value:function(){this.setState((function(e){return{mode:"Session"===e.mode?"Break":"Session",seconds:"Session"===e.mode?60*e.breakLength:60*e.sessionLength}}))}},{key:"decrementTimer",value:function(){0===this.state.seconds?this.changeModes():this.setState((function(e){return{seconds:e.seconds-1}}))}},{key:"pauseTimer",value:function(){clearInterval(this.timer),this.setState({paused:!0})}},{key:"resumeTimer",value:function(){this.timer=setInterval(this.decrementTimer,1e3),this.setState({paused:!1})}},{key:"resetClock",value:function(){this.setState({breakLength:5,sessionLength:25,mode:"Session",seconds:1500,paused:!0}),this.timer&&clearInterval(this.timer)}},{key:"render",value:function(){var e="Session"===this.state.mode?"white-stuff red-background":"red-stuff white-background";return a.a.createElement("div",{className:"app-container ".concat(e)},a.a.createElement("h1",null,"Pomodoro Clock"),a.a.createElement("div",{className:"settings"},a.a.createElement(d,{category:"Break",length:this.state.breakLength,paused:this.state.paused,changeLength:this.changeLength}),a.a.createElement(d,{category:"Session",length:this.state.sessionLength,paused:this.state.paused,changeLength:this.changeLength})),a.a.createElement(m,{mode:this.state.mode,seconds:this.state.seconds}),a.a.createElement("div",{className:"buttons"},a.a.createElement(g,{src:this.state.paused?"play-solid.svg":"pause-solid.svg",alt:"".concat(this.state.paused?"Resume":"Pause"," Timer"),activateButton:this.state.paused?this.resumeTimer:this.pauseTimer}),a.a.createElement(g,{src:"sync-solid.svg",alt:"Reset Timer",activateButton:this.resetClock})))}}]),s}(a.a.Component));r.a.render(a.a.createElement(v,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.4066b781.chunk.js.map