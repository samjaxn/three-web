(this["webpackJsonpthree-web"]=this["webpackJsonpthree-web"]||[]).push([[0],{13:function(e,n,t){e.exports=t(20)},18:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),i=t(9),r=t.n(i),c=(t(18),t(19),t(2)),l=t(10),d=t(5),s=t(3),u=t(4),w=t(11),h=t(12),m=t(0),p=t(7),f=t.n(p),g=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(d.a)(this,Object(s.a)(n).call(this,e))).state={loading:!0},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=new m.bb,t=new m.R(50,window.innerWidth/window.innerHeight,.1,1e4);t.position.set(0,0,2500);var o=new m.rb({antialias:!0});o.setSize(window.innerWidth,window.innerHeight);var a=new h.a(t,o.domElement);document.body.appendChild(o.domElement),(new m.C).onProgress=function(){};var i=new m.m(16777215,16777215,.8);i.color.setHSL(1,1,1),i.groundColor.setHSL(1,1,.75),i.position.set(1e3,2e3,0),n.add(i);var r,c=new m.n(i,10);n.add(c),console.log(f.a),(new w.a).load(f.a,(function(t){e.setState({loading:!1}),(r=t.scene).position.set(0,-400,0),n.add(r)}),(function(n){n.lengthComputable?(e.setState({loading:!0,percent:Math.floor(n.loaded/n.total*100)}),console.log("loaded: ".concat(n.loaded,", total: ").concat(n.total,", ").concat(n.loaded/n.total*100))):e.setState({loading:!0})}),(function(e){console.log(e)})),window.addEventListener("resize",(function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)}),!1);!function e(){requestAnimationFrame(e),r&&(r.rotation.y+=.01),a.update(),o.render(n,t)}()}},{key:"render",value:function(){var e;return e=this.state.loading?this.state.percent?a.a.createElement("h1",{className:"center"},"L O A D I N G - ",this.state.percent,"%"):a.a.createElement("h1",{className:"center"},"L O A D I N G"):null,a.a.createElement("div",null,e)}}]),n}(o.Component);var v=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,n,t){e.exports=t.p+"static/media/tvModelNoTexture.06c1705f.gltf"}},[[13,1,2]]]);
//# sourceMappingURL=main.35a2803c.chunk.js.map