(this["webpackJsonpproject-barabom"]=this["webpackJsonpproject-barabom"]||[]).push([[0],{59:function(n,e,t){},95:function(n,e){},97:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"injectPlayer",(function(){return Tn})),t.d(r,"getTracks",(function(){return An})),t.d(r,"appendTracks",(function(){return Bn})),t.d(r,"play",(function(){return In}));var a=t(1),c=t(24),i=t.n(c),o=(t(59),t(11)),s=t.n(o),l=t(47),b=t(48),d=t(14),u=t(34),p=t.n(u).a.create();p.defaults.headers.Authorization="Bearer ".concat("BQCnk68Br62qIjgumo0bpxiWmuqjIPcEAacNe74-nn1-eN673nlaTwhCu4jl6nCpakNJ5Tl71mbcRekjLAlW2o5JGOCNDk5WDOhbu763iFB9VhU6ak9KHvMiKb1fvX71AYQHFWxX9gYT7kobW9CR9Etrb-CD79I5S_qvQ-ki6uWi09s8txbxmGc_AByFMg");var j,f,x,h,O,g,m,v,y,k,w,S,C,z,N,_,T,A,B=p,I=t(49),W=t.n(I)()({apikey:"85630c3b7613261a33b769967c59621b"}),L=function(n,e){return W.matcherLyrics({q_artist:n,q_track:e})},D=t(5),P=t(6),R=t.p+"static/media/Spotify_icon.0e932c0a.png",q=Object(P.c)(j||(j=Object(D.a)(["\n    from {\n        transform: rotateZ(0deg) translateZ(3px);\n    } to {\n        transform: rotateZ(720deg) translateZ(3px);\n    }\n"]))),Y=Object(P.c)(f||(f=Object(D.a)(["\n    from {\n        transform: translateX(300%);\n    } to {\n        transform: translateX(-200%);\n    }\n"]))),F={getMusicAritst:function(n){return"".concat(n.artists[0].name," - ").concat(n.name)}},X=t(2);var E=P.b.div(x||(x=Object(D.a)(["\n  position: absolute;\n  top: 0;\n  left: calc(50% - 40px);\n  width: 80px;\n  overflow-x: hidden;\n\n  transform: translateY(-15px);\n\n  transform-style: preserve-3d;\n"]))),M=P.b.h1(h||(h=Object(D.a)(["\n  font-size: 10px;\n  animation: "," 10.5s infinite linear;\n  text-align: end;\n\n  white-space: nowrap;\n"])),Y),Z=P.b.img(O||(O=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n"]))),Q=P.b.div(g||(g=Object(D.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 10px;\n  width: 1000px;\n\n  border: 1px solid #999;\n  transform: rotateY(-90deg);\n  transform-origin: 0% 50%;\n\n  background: #999;\n"]))),K=P.b.div(m||(m=Object(D.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1000px;\n  width: 10px;\n\n  border: 1px solid #999;\n\n  transform: rotateX(90deg);\n  transform-origin: 50% 0%;\n\n  background: #ccc;\n"]))),H=P.b.div(v||(v=Object(D.a)(["\n  position: relative;\n\n  width: 10px;\n  height: 10px;\n\n  transform-style: preserve-3d;\n"]))),J=P.b.div(y||(y=Object(D.a)(["\n  perspective: 1000px;\n"]))),G=P.b.div(k||(k=Object(D.a)(["\n  position: relative;\n\n  width: 100px;\n  height: 100px;\n\n  & div {\n    box-sizing: border-box;\n  }\n\n  & > div {\n    position: absolute;\n  }\n\n  & > .top {\n    top: 0;\n    left: 0;\n  }\n\n  & > .realtop {\n    top: 0;\n    right: calc(50% - 45px);\n  }\n\n  & > .bottom {\n    bottom: 0;\n    right: calc(50% - 45px);\n  }\n  transform: rotateY(20deg);\n\n  transform-style: preserve-3d;\n"]))),U=P.b.div(w||(w=Object(D.a)(["\n  width: 90px;\n  height: 30px;\n\n  transform-origin: 50% 50%;\n  transform: rotateX(-90deg) translateZ(-15px);\n\n  background-color: #333;\n"]))),V=P.b.div(S||(S=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 90px;\n  height: 30px;\n\n  transform-origin: 50% 50%;\n  transform: rotateX(-90deg) translateZ(15px);\n\n  background-color: #333;\n\n  transform-style: preserve-3d;\n"]))),$=P.b.div(C||(C=Object(D.a)(["\n  top: calc(50% - 5px);\n  left: calc(50% - 5px);\n\n  width: 10px;\n  height: 10px;\n\n  background-color: black;\n  border-radius: 100%;\n  box-sizing: border-box;\n\n  transform: translateZ(5px);\n"]))),nn=P.b.div(z||(z=Object(D.a)(["\n  top: calc(50% - 37.5px);\n  left: calc(50% - 37.5px);\n\n  width: 75px;\n  height: 75px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  transform: translateZ(3px);\n\n  background: white;\n\n  overflow: hidden;\n\n  &.play {\n    animation: "," 1.5s infinite linear;\n  }\n"])),q),en=P.b.div(N||(N=Object(D.a)(["\n  top: calc(50% - 37.5px);\n  left: calc(50% - 37.5px);\n\n  width: 75px;\n  height: 75px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  background: black;\n"]))),tn=P.b.div(_||(_=Object(D.a)(["\n  cursor: pointer;\n  position: relative;\n\n  width: 80px;\n  height: 80px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  transform-style: preserve-3d;\n  background: radial-gradient(circle at 100%, #fff 75%, #333 100%);\n\n  & > div {\n    position: absolute;\n  }\n"]))),rn=P.b.div(T||(T=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  background-color: white;\n\n  transform: translateZ(15px);\n\n  transform-style: preserve-3d;\n"]))),an=P.b.div(A||(A=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n\n  border: 1px solid #333;\n  border-radius: 0.5rem;\n\n  transform: translateZ(-15px);\n\n  background: #333;\n"]))),cn=function(n){return Object(X.jsx)(J,{className:"cdp",children:Object(X.jsxs)(G,{children:[n.item&&Object(X.jsx)(E,{children:Object(X.jsx)(M,{children:F.getMusicAritst(n.item)})}),Object(X.jsx)(U,{className:"realtop"}),Object(X.jsx)(rn,{className:"top",children:Object(X.jsxs)(tn,{onClick:function(){return n.changeSearchState(!0)},children:[Object(X.jsx)($,{}),Object(X.jsx)(nn,{ref:n.refCD,children:Object(X.jsx)(Z,{src:n.item?n.item.album.images[0].url:R,alt:"AlbumArt"})}),Object(X.jsx)(en,{})]})}),Object(X.jsx)(an,{className:"top"}),Object(X.jsx)(V,{className:"bottom",children:Object(X.jsxs)(H,{children:[Object(X.jsx)(K,{}),Object(X.jsx)(Q,{})]})})]})})},on=t.p+"static/media/keonu.12f6d4e1.jpg",sn=t(28),ln=t.p+"static/media/Spotify_Logo_RGB_Black.0d1e5545.png",bn=t(9),dn=t(26),un=t(99);function pn(n){return["".concat(n),"".concat(n,"/success"),"".concat(n,"/failure")]}var jn,fn,xn=pn("spotify/inject_player"),hn=Object(d.a)(xn,1)[0],On=pn("spotify/gettracks"),gn=Object(d.a)(On,3),mn=gn[0],vn=gn[1],yn=gn[2],kn=pn("spotify/gettracks/append"),wn=Object(d.a)(kn,3),Sn=wn[0],Cn=wn[1],zn=(wn[2],pn("spotify/play")),Nn=Object(d.a)(zn,3),_n=Nn[0],Tn=(Nn[1],Nn[2],Object(un.a)(hn,(function(n){return n}))),An=Object(un.a)(mn,(function(n){return{q:n}})),Bn=Object(un.a)(Sn,(function(n){var e=Object.assign({},n);return Object(bn.a)({},e)})),In=Object(un.a)(_n,(function(n){return Object.assign({},n)})),Wn=Object(dn.b)((function(n){var e=n.SpotifyReducer,t=n.LoadingReducer;return Object(bn.a)(Object(bn.a)({},e),{},{loading:t})}),r);var Ln,Dn=P.b.input(jn||(jn=Object(D.a)(["\n  ","\n\n  font-size: 2rem;\n  padding: 0.5rem;\n\n  color: #666;\n  box-sizing: border-box;\n  border-radius: 2rem;\n  border: 1px solid #ccc;\n  outline: none;\n\n  &::placeholder {\n    color: #eee;\n  }\n"])),(function(n){return n.block&&Object(P.a)(fn||(fn=Object(D.a)(["\n      width: 100%;\n      display: block;\n    "])))})),Pn=function(n){return Object(X.jsx)(Dn,Object(bn.a)({},n))},Rn=(t(85),{msToString:function(n){"string"===typeof n&&(n=parseInt(n));var e=Math.floor(n/1e3/60),t=Math.floor(n/1e3%60);return t<10&&(t="0"+t),"".concat(e,":").concat(t)}});var qn,Yn,Fn=P.b.div(Ln||(Ln=Object(D.a)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n\n  padding: 0.75rem 0;\n  cursor: pointer;\n\n  & > img {\n    width: 64px;\n    height: 64px;\n    margin: 0 0.75rem 0 0;\n  }\n\n  & > .track {\n    flex: 1;\n\n    & > .title {\n      font-size: 16px;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-height: 24px;\n      text-transform: none;\n\n      color: #333;\n    }\n\n    & > .artist {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-height: 16px;\n      text-transform: none;\n\n      color: #555;\n    }\n  }\n\n  & > .duration {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: normal;\n    line-height: 16px;\n    text-transform: none;\n\n    color: #777;\n  }\n"]))),Xn=function(n){var e=n.item,t=n.selectPlayItem;return Object(X.jsxs)(Fn,{onClick:function(){return t(e)},children:[Object(X.jsx)("img",{className:"albumart",src:e.album.images[0].url,alt:"albumarts"}),Object(X.jsx)("span",{}),Object(X.jsxs)("span",{className:"track",children:[Object(X.jsx)("h1",{className:"title",children:e.name}),Object(X.jsx)("h5",{className:"artist",children:e.artists[0].name})]}),Object(X.jsx)("span",{className:"duration",children:Rn.msToString(e.duration_ms)})]})};var En,Mn,Zn=Object(P.c)(qn||(qn=Object(D.a)(["\n    from {\n        transform: rotateZ(0deg);\n    } to {\n        transform: rotateZ(360deg);\n    }\n"]))),Qn=P.b.div(Yn||(Yn=Object(D.a)(["\n  margin: 0 auto;\n  width: 30px;\n  height: 30px;\n\n  border: 5px solid #fff;\n  border-top: 5px solid #333;\n\n  border-radius: 100%;\n  animation: "," 1s infinite linear;\n"])),Zn),Kn=function(){return Object(X.jsx)(Qn,{})};var Hn,Jn,Gn,Un,Vn=P.b.div(En||(En=Object(D.a)(["\n  flex: 1;\n\n  box-sizing: border-box;\n  padding: 0 1.75rem;\n\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    display: none; /* Chrome, Safari, Opera*/\n  }\n"]))),$n=P.b.div(Mn||(Mn=Object(D.a)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: center;\n\n  padding: 0.75rem 0;\n  box-sizing: border-box;\n"]))),ne=function(n){var e=n.items,t=n.selectPlayItem,r=n.loading,a=n.refList;return Object(X.jsxs)(Vn,{ref:a,children:[null===e||void 0===e?void 0:e.map((function(n,e){return Object(X.jsx)(Xn,{item:n,selectPlayItem:t},e)})),r&&Object(X.jsx)($n,{children:Object(X.jsx)(Kn,{})})]})},ee=t(22),te=t.n(ee);var re,ae,ce,ie,oe,se,le,be,de,ue,pe,je=P.b.div(Hn||(Hn=Object(D.a)(["\n  display: flex;\n  flex-flow: column;\n\n  position: absolute;\n  bottom: 0;\n  left: calc(50% - 235px);\n\n  width: 470px;\n  height: 470px;\n  border-radius: 1rem 1rem 0 0;\n\n  background: white;\n  transform: translateY(500px);\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n  transition: cubic-bezier(0.24, 0.65, 0.38, 0.88) 0.7s;\n\n  ","\n"])),(function(n){return n.isOn&&Object(P.a)(Jn||(Jn=Object(D.a)(["\n      transform: translateY(10px);\n    "])))})),fe=P.b.div(Gn||(Gn=Object(D.a)(["\n  width: 100%;\n\n  padding: 0 1.25rem;\n  box-sizing: border-box;\n"]))),xe=P.b.div(Un||(Un=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  width: 100%;\n\n  padding: 1rem 1.25rem;\n  box-sizing: border-box;\n\n  & > img {\n    width: 200px;\n    height: auto;\n  }\n\n  & > span {\n    cursor: pointer;\n\n    font-style: normal;\n    font-weight: 300;\n    font-size: 24px;\n    line-height: 29px;\n    text-transform: uppercase;\n\n    color: #666;\n\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);\n  }\n\n  & > span:hover {\n    color: #333;\n  }\n"]))),he=Wn((function(n){var e=n.onSearch,t=n.changeSearchState,r=n.getTracks,c=n.appendTracks,i=n.tracks,o=n.selectPlayItem,s=n.loading,l=Object(a.useState)(""),b=Object(d.a)(l,2),u=b[0],p=b[1],j=Object(a.useRef)(null),f=Object(a.useRef)(Object(sn.a)((function(n){""!==n?(console.log("".concat(n,"\ub85c \uc9c0\uae08\uc694\uccad")),r(n),j.current&&j.current.scrollTo({top:0})):console.log("\uc694\uccad \uc548\ud569\ub2c8\ub2e4.")}),1e3)),x=Object(a.useCallback)((function(n){var e=n.target.value;p(e),f.current(e)}),[]),h=Object(a.useCallback)((function(){p(""),t(!1)}),[t]),O=Object(a.useCallback)((function(){if(console.log("next Query",i),this.scrollTop>=this.scrollHeight-this.offsetHeight&&(null===i||void 0===i?void 0:i.next)){var n=te.a.parse(i.next.split("?")[1]);c({q:n.query,offset:n.offset})}}),[i,c]),g=Object(a.useRef)(Object(sn.a)(O,500)),m=Object(a.useCallback)((function(){j.current&&j.current.removeEventListener("scroll",g.current),j.current&&(g.current=Object(sn.a)(O,500),j.current.addEventListener("scroll",g.current))}),[O]);return Object(a.useEffect)((function(){m()}),[m]),Object(X.jsxs)(je,{isOn:e,children:[Object(X.jsxs)(xe,{children:[Object(X.jsx)("img",{src:ln,alt:"Spotify Logo"}),Object(X.jsx)("span",{onClick:h,children:"X"})]}),Object(X.jsx)(fe,{children:Object(X.jsx)(Pn,{value:u,onChange:x,placeholder:"Music",block:!0})}),Object(X.jsx)(ne,{items:null===i||void 0===i?void 0:i.items,selectPlayItem:o,loading:s[mn]||s[Sn],refList:j})]})}));var Oe=P.b.div(re||(re=Object(D.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),ge=P.b.div(ae||(ae=Object(D.a)(["\n  width: 100%;\n  height: 2px;\n\n  background-color: #000;\n"]))),me=P.b.h2(ce||(ce=Object(D.a)(["\n  font-style: normal;\n  font-weight: normal;\n\n  text-transform: uppercase;\n"]))),ve=P.b.div(ie||(ie=Object(D.a)(["\n  width: 500px;\n  height: 500px;\n\n  padding: 1rem 0;\n\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n\n  &.left {\n    justify-content: flex-start;\n\n    & > h2 {\n      font-size: 64px;\n      line-height: 78px;\n      text-align: right;\n    }\n  }\n\n  &.right {\n    justify-content: flex-end;\n\n    & > h2 {\n      font-size: 48px;\n      line-height: 59px;\n    }\n  }\n"]))),ye=P.b.div(oe||(oe=Object(D.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  z-index: 1;\n\n  transform: translateX(-100px) translateY(-36px);\n\n  & > * {\n    text-align: right;\n  }\n"]))),ke=P.b.h6(se||(se=Object(D.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 10px;\n  /* identical to box height */\n\n  text-transform: lowercase;\n"]))),we=P.b.h1(le||(le=Object(D.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 48px;\n  line-height: 59px;\n  /* identical to box height */\n\n  text-transform: uppercase;\n\n  color: #000000;\n"]))),Se=P.b.div(be||(be=Object(D.a)(["\n  position: relative;\n\n  width: 500px;\n  height: 500px;\n"]))),Ce=P.b.div(de||(de=Object(D.a)(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 500px;\n  height: 500px;\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  overflow: hidden;\n"])),on),ze=P.b.div(ue||(ue=Object(D.a)(["\n  position: absolute;\n  top: 0;\n  height: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background: rgba(196, 196, 196, 0.4);\n"]))),Ne=P.b.div(pe||(pe=Object(D.a)(["\n  position: relative;\n\n  width: 210px;\n  height: 500px;\n\n  background: white;\n\n  & > .cdp {\n    position: absolute;\n    top: 125px;\n    left: calc(50% - 70px);\n  }\n"]))),_e=function(n){return Object(X.jsxs)(Oe,{children:[Object(X.jsxs)(ve,{className:"left",children:[Object(X.jsx)(ge,{}),Object(X.jsx)(me,{children:"LOOK"})]}),Object(X.jsxs)(Se,{children:[Object(X.jsxs)(ye,{children:[Object(X.jsx)(we,{children:"Barabom"}),Object(X.jsx)(ke,{children:"copyright \xa9 iamformegusto"})]}),Object(X.jsxs)(Ce,{children:[Object(X.jsx)(ze,{}),Object(X.jsx)(Ne,{children:Object(X.jsx)(cn,{changeSearchState:n.changeSearchState,item:n.item,refCD:n.refCD})}),Object(X.jsx)(he,{onSearch:n.onSearch,changeSearchState:n.changeSearchState,selectPlayItem:n.selectPlayItem})]})]}),Object(X.jsxs)(ve,{className:"right",children:[Object(X.jsx)(me,{children:"ONLY BEAUTY"}),Object(X.jsx)(ge,{})]})]})};var Te=Wn((function(n){var e=n.play,t=n.player,r=n.injectPlayer,c=Object(a.useState)(!1),i=Object(d.a)(c,2),o=i[0],u=i[1],p=Object(a.useState)(null),j=Object(d.a)(p,2),f=j[0],x=j[1],h=Object(a.useRef)(null);Object(a.useEffect)((function(){window.onSpotifyWebPlaybackSDKReady=function(){var n="".concat("BQCnk68Br62qIjgumo0bpxiWmuqjIPcEAacNe74-nn1-eN673nlaTwhCu4jl6nCpakNJ5Tl71mbcRekjLAlW2o5JGOCNDk5WDOhbu763iFB9VhU6ak9KHvMiKb1fvX71AYQHFWxX9gYT7kobW9CR9Etrb-CD79I5S_qvQ-ki6uWi09s8txbxmGc_AByFMg"),e=new window.Spotify.Player({name:"Web Playback SDK Quick Start Player",getOAuthToken:function(e){e(n)}});e.addListener("player_state_changed",(function(n){console.log(n),h.current&&(n.paused?(h.current.classList.remove("play"),x(null)):h.current.classList.add("play"))})),e.addListener("ready",(function(n){var t=n.device_id;console.log("Ready with Device ID",t),e.device_id=t,r(e)})),e.connect()}}),[r]);var O=Object(a.useCallback)((function(n){u(n)}),[]),g=Object(a.useCallback)(function(){var n=Object(b.a)(s.a.mark((function n(r){var a,c,i,o,b,d,p;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!1),x(r),n.next=4,L(r.artists[0].name,r.name);case 4:if(a=n.sent,console.log(a),0!==a.length){n.next=31;break}return n.next=9,s=r.artists[0].name,B.get("".concat("https://musicbrainz.org/ws/2","/artist?query=alias:").concat(s,"&fmt=json"));case 9:c=n.sent,console.log(c.data.artists[0].aliases),i=c.data.artists[0].aliases,o=Object(l.a)(i),n.prev=13,o.s();case 15:if((b=o.n()).done){n.next=23;break}return d=b.value,n.next=19,L(d["sort-name"],r.name);case 19:p=n.sent,console.log(p);case 21:n.next=15;break;case 23:n.next=28;break;case 25:n.prev=25,n.t0=n.catch(13),o.e(n.t0);case 28:return n.prev=28,o.f(),n.finish(28);case 31:e({spotify_uri:r.uri,device_id:t.device_id});case 32:case"end":return n.stop()}var s}),n,null,[[13,25,28,31]])})));return function(e){return n.apply(this,arguments)}}(),[e,t]);return Object(X.jsx)(_e,{onSearch:o,changeSearchState:O,item:f,selectPlayItem:g,refCD:h})}));var Ae,Be,Ie=function(){return Object(X.jsx)(Te,{})},We=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,100)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))},Le=t(16),De=t(12),Pe=t(98),Re=t(23),qe=Object(Pe.a)((Ae={},Object(De.a)(Ae,hn,(function(n,e){return Object(Re.a)(n,(function(n){n.player=e.payload}))})),Object(De.a)(Ae,Cn,(function(n,e){return Object(Re.a)(n,(function(n){var t;n.tracks=Object(bn.a)(Object(bn.a)({},e.payload.tracks),{},{items:null===(t=n.tracks)||void 0===t?void 0:t.items.concat(e.payload.tracks.items)})}))})),Object(De.a)(Ae,vn,(function(n,e){return Object(Re.a)(n,(function(n){n.tracks=e.payload.tracks}))})),Object(De.a)(Ae,yn,(function(n){return Object(Re.a)(n,(function(n){n.tracks=null}))})),Ae),{tracks:null,player:null}),Ye="loading/start",Fe="loading/finish",Xe=Object(Pe.a)((Be={},Object(De.a)(Be,Ye,(function(n,e){return Object(bn.a)(Object(bn.a)({},n),{},Object(De.a)({},e.payload,!0))})),Object(De.a)(Be,Fe,(function(n,e){return Object(bn.a)(Object(bn.a)({},n),{},Object(De.a)({},e.payload,!1))})),Be),{}),Ee=Object(Le.combineReducers)({SpotifyReducer:qe,LoadingReducer:Xe}),Me=t(53),Ze=t(54),Qe=t(13),Ke=Object(un.a)(Ye,(function(n){return n})),He=Object(un.a)(Fe,(function(n){return n}));function Je(n,e){var t="".concat(n,"/success"),r="".concat(n,"/failure");return s.a.mark((function a(c){var i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Qe.c)(Ke(n));case 2:return a.prev=2,a.next=5,Object(Qe.b)(e,c.payload);case 5:return i=a.sent,a.next=8,Object(Qe.c)({type:t,payload:i.data});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(2),a.next=14,Object(Qe.c)({type:r,payload:a.t0,error:!0});case 14:return a.next=16,Object(Qe.c)(He(n));case 16:case"end":return a.stop()}}),a,null,[[2,10]])}))}var Ge="BQCnk68Br62qIjgumo0bpxiWmuqjIPcEAacNe74-nn1-eN673nlaTwhCu4jl6nCpakNJ5Tl71mbcRekjLAlW2o5JGOCNDk5WDOhbu763iFB9VhU6ak9KHvMiKb1fvX71AYQHFWxX9gYT7kobW9CR9Etrb-CD79I5S_qvQ-ki6uWi09s8txbxmGc_AByFMg",Ue="https://api.spotify.com",Ve=function(n){var e=n.q,t=n.offset,r=void 0===t?1:t;return B.get("".concat(Ue,"/v1/search?").concat(te.a.stringify({query:e,type:"track",market:"US",limit:10,offset:r})),{headers:{Authorization:"Bearer ".concat(Ge)}})},$e=s.a.mark(rt),nt=Je(mn,Ve),et=Je(Sn,Ve),tt=Je(_n,(function(n){var e=n.spotify_uri,t=n.device_id;return B.put("".concat(Ue,"/v1/me/player/play?").concat(te.a.stringify({device_id:t})),{uris:[e]},{headers:{Authorization:"Bearer ".concat(Ge),"Content-Type":"application/json"}})}));function rt(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Qe.d)(mn,nt);case 2:return n.next=4,Object(Qe.d)(_n,tt);case 4:return n.next=6,Object(Qe.d)(Sn,et);case 6:case"end":return n.stop()}}),$e)}var at=s.a.mark(ct);function ct(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Qe.a)([rt()]);case 2:case"end":return n.stop()}}),at)}var it=Object(Ze.a)(),ot=Object(Le.createStore)(Ee,Object(Me.composeWithDevTools)(Object(Le.applyMiddleware)(it)));it.run(ct),i.a.render(Object(X.jsx)(dn.a,{store:ot,children:Object(X.jsx)(Ie,{})}),document.getElementById("root")),We()}},[[97,1,2]]]);
//# sourceMappingURL=main.dc6ecd26.chunk.js.map