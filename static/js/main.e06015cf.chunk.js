(this["webpackJsonpproject-barabom"]=this["webpackJsonpproject-barabom"]||[]).push([[0],{59:function(n,e,t){},95:function(n,e){},97:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"injectPlayer",(function(){return Ln})),t.d(r,"getTracks",(function(){return Cn})),t.d(r,"appendTracks",(function(){return Nn})),t.d(r,"play",(function(){return An}));var a=t(1),c=t(24),i=t.n(c),o=(t(59),t(11)),s=t.n(o),l=t(47),b=t(48),d=t(14),p=t(34),u=t.n(p).a.create();u.defaults.headers.Authorization="Bearer ".concat("BQAg4zz-7vsucBWI9tqwA_qvKQZsvlQzlr6gfeKV6EaXp-_obRKRJrxzokTRoH6lKu2kULzkFPrtUAfRoLCpFGJryFZnV24ecsu3H7z7gaNunX00swiLFct_Y4r2o_ZjvHD-cthCeEZocuij4ERuNRhp8b9Bc7WQZx6DzFpjnyp9kUcRg1Nhl9kQA9EE3g");var j=u,f=t(49),x=t.n(f)()({apikey:"85630c3b7613261a33b769967c59621b"});console.log();var h,g,O,m,v,y,k,w,z,S,R,_,Z,L,C,N,A,E,F=function(n,e){return x.matcherLyrics({q_artist:n,q_track:e})},P=t(5),B=t(6),Q=t.p+"static/media/Spotify_Icon.0e932c0a.png",T=Object(B.c)(h||(h=Object(P.a)(["\n    from {\n        transform: rotateZ(0deg) translateZ(3px);\n    } to {\n        transform: rotateZ(720deg) translateZ(3px);\n    }\n"]))),D=Object(B.c)(g||(g=Object(P.a)(["\n    from {\n        transform: translateX(300%);\n    } to {\n        transform: translateX(-200%);\n    }\n"]))),I={getMusicAritst:function(n){return"".concat(n.artists[0].name," - ").concat(n.name)}},K=t(2);var q=B.b.div(O||(O=Object(P.a)(["\n  position: absolute;\n  top: 0;\n  left: calc(50% - 40px);\n  width: 80px;\n  overflow-x: hidden;\n\n  transform: translateY(-15px);\n\n  transform-style: preserve-3d;\n"]))),X=B.b.h1(m||(m=Object(P.a)(["\n  font-size: 10px;\n  animation: "," 10.5s infinite linear;\n  text-align: end;\n\n  white-space: nowrap;\n"])),D),H=B.b.img(v||(v=Object(P.a)(["\n  width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n"]))),U=B.b.div(y||(y=Object(P.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 10px;\n  width: 1000px;\n\n  border: 1px solid #999;\n  transform: rotateY(-90deg);\n  transform-origin: 0% 50%;\n\n  background: #999;\n"]))),Y=B.b.div(k||(k=Object(P.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1000px;\n  width: 10px;\n\n  border: 1px solid #999;\n\n  transform: rotateX(90deg);\n  transform-origin: 50% 0%;\n\n  background: #ccc;\n"]))),W=B.b.div(w||(w=Object(P.a)(["\n  position: relative;\n\n  width: 10px;\n  height: 10px;\n\n  transform-style: preserve-3d;\n"]))),J=B.b.div(z||(z=Object(P.a)(["\n  perspective: 1000px;\n"]))),M=B.b.div(S||(S=Object(P.a)(["\n  position: relative;\n\n  width: 100px;\n  height: 100px;\n\n  & div {\n    box-sizing: border-box;\n  }\n\n  & > div {\n    position: absolute;\n  }\n\n  & > .top {\n    top: 0;\n    left: 0;\n  }\n\n  & > .realtop {\n    top: 0;\n    right: calc(50% - 45px);\n  }\n\n  & > .bottom {\n    bottom: 0;\n    right: calc(50% - 45px);\n  }\n  transform: rotateY(20deg);\n\n  transform-style: preserve-3d;\n"]))),V=B.b.div(R||(R=Object(P.a)(["\n  width: 90px;\n  height: 30px;\n\n  transform-origin: 50% 50%;\n  transform: rotateX(-90deg) translateZ(-15px);\n\n  background-color: #333;\n"]))),G=B.b.div(_||(_=Object(P.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 90px;\n  height: 30px;\n\n  transform-origin: 50% 50%;\n  transform: rotateX(-90deg) translateZ(15px);\n\n  background-color: #333;\n\n  transform-style: preserve-3d;\n"]))),$=B.b.div(Z||(Z=Object(P.a)(["\n  top: calc(50% - 5px);\n  left: calc(50% - 5px);\n\n  width: 10px;\n  height: 10px;\n\n  background-color: black;\n  border-radius: 100%;\n  box-sizing: border-box;\n\n  transform: translateZ(5px);\n"]))),nn=B.b.div(L||(L=Object(P.a)(["\n  top: calc(50% - 37.5px);\n  left: calc(50% - 37.5px);\n\n  width: 75px;\n  height: 75px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  transform: translateZ(3px);\n\n  background: white;\n\n  overflow: hidden;\n\n  &.play {\n    animation: "," 1.5s infinite linear;\n  }\n"])),T),en=B.b.div(C||(C=Object(P.a)(["\n  top: calc(50% - 37.5px);\n  left: calc(50% - 37.5px);\n\n  width: 75px;\n  height: 75px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  background: black;\n"]))),tn=B.b.div(N||(N=Object(P.a)(["\n  cursor: pointer;\n  position: relative;\n\n  width: 80px;\n  height: 80px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  transform-style: preserve-3d;\n  background: radial-gradient(circle at 100%, #fff 75%, #333 100%);\n\n  & > div {\n    position: absolute;\n  }\n"]))),rn=B.b.div(A||(A=Object(P.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  background-color: white;\n\n  transform: translateZ(15px);\n\n  transform-style: preserve-3d;\n"]))),an=B.b.div(E||(E=Object(P.a)(["\n  width: 100%;\n  height: 100%;\n\n  border: 1px solid #333;\n  border-radius: 0.5rem;\n\n  transform: translateZ(-15px);\n\n  background: #333;\n"]))),cn=function(n){return Object(K.jsx)(J,{className:"cdp",children:Object(K.jsxs)(M,{children:[n.item&&Object(K.jsx)(q,{children:Object(K.jsx)(X,{children:I.getMusicAritst(n.item)})}),Object(K.jsx)(V,{className:"realtop"}),Object(K.jsx)(rn,{className:"top",children:Object(K.jsxs)(tn,{onClick:function(){return n.changeSearchState(!0)},children:[Object(K.jsx)($,{}),Object(K.jsx)(nn,{ref:n.refCD,children:Object(K.jsx)(H,{src:n.item?n.item.album.images[0].url:Q,alt:"AlbumArt"})}),Object(K.jsx)(en,{})]})}),Object(K.jsx)(an,{className:"top"}),Object(K.jsx)(G,{className:"bottom",children:Object(K.jsxs)(W,{children:[Object(K.jsx)(Y,{}),Object(K.jsx)(U,{})]})})]})})},on=t.p+"static/media/keonu.12f6d4e1.jpg",sn=t(28),ln=t.p+"static/media/Spotify_Logo_RGB_Black.0d1e5545.png",bn=t(9),dn=t(26),pn=t(99);function un(n){return["".concat(n),"".concat(n,"/success"),"".concat(n,"/failure")]}var jn,fn,xn=un("spotify/inject_player"),hn=Object(d.a)(xn,1)[0],gn=un("spotify/gettracks"),On=Object(d.a)(gn,3),mn=On[0],vn=On[1],yn=On[2],kn=un("spotify/gettracks/append"),wn=Object(d.a)(kn,3),zn=wn[0],Sn=wn[1],Rn=(wn[2],un("spotify/play")),_n=Object(d.a)(Rn,3),Zn=_n[0],Ln=(_n[1],_n[2],Object(pn.a)(hn,(function(n){return n}))),Cn=Object(pn.a)(mn,(function(n){return{q:n}})),Nn=Object(pn.a)(zn,(function(n){var e=Object.assign({},n);return Object(bn.a)({},e)})),An=Object(pn.a)(Zn,(function(n){return Object.assign({},n)})),En=Object(dn.b)((function(n){var e=n.SpotifyReducer,t=n.LoadingReducer;return Object(bn.a)(Object(bn.a)({},e),{},{loading:t})}),r);var Fn,Pn=B.b.input(jn||(jn=Object(P.a)(["\n  ","\n\n  font-size: 2rem;\n  padding: 0.5rem;\n\n  color: #666;\n  box-sizing: border-box;\n  border-radius: 2rem;\n  border: 1px solid #ccc;\n  outline: none;\n\n  &::placeholder {\n    color: #eee;\n  }\n"])),(function(n){return n.block&&Object(B.a)(fn||(fn=Object(P.a)(["\n      width: 100%;\n      display: block;\n    "])))})),Bn=function(n){return Object(K.jsx)(Pn,Object(bn.a)({},n))},Qn=(t(85),{msToString:function(n){"string"===typeof n&&(n=parseInt(n));var e=Math.floor(n/1e3/60),t=Math.floor(n/1e3%60);return t<10&&(t="0"+t),"".concat(e,":").concat(t)}});var Tn,Dn,In=B.b.div(Fn||(Fn=Object(P.a)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n\n  padding: 0.75rem 0;\n  cursor: pointer;\n\n  & > img {\n    width: 64px;\n    height: 64px;\n    margin: 0 0.75rem 0 0;\n  }\n\n  & > .track {\n    flex: 1;\n\n    & > .title {\n      font-size: 16px;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-height: 24px;\n      text-transform: none;\n\n      color: #333;\n    }\n\n    & > .artist {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-height: 16px;\n      text-transform: none;\n\n      color: #555;\n    }\n  }\n\n  & > .duration {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: normal;\n    line-height: 16px;\n    text-transform: none;\n\n    color: #777;\n  }\n"]))),Kn=function(n){var e=n.item,t=n.selectPlayItem;return Object(K.jsxs)(In,{onClick:function(){return t(e)},children:[Object(K.jsx)("img",{className:"albumart",src:e.album.images[0].url,alt:"albumarts"}),Object(K.jsx)("span",{}),Object(K.jsxs)("span",{className:"track",children:[Object(K.jsx)("h1",{className:"title",children:e.name}),Object(K.jsx)("h5",{className:"artist",children:e.artists[0].name})]}),Object(K.jsx)("span",{className:"duration",children:Qn.msToString(e.duration_ms)})]})};var qn,Xn,Hn=Object(B.c)(Tn||(Tn=Object(P.a)(["\n    from {\n        transform: rotateZ(0deg);\n    } to {\n        transform: rotateZ(360deg);\n    }\n"]))),Un=B.b.div(Dn||(Dn=Object(P.a)(["\n  margin: 0 auto;\n  width: 30px;\n  height: 30px;\n\n  border: 5px solid #fff;\n  border-top: 5px solid #333;\n\n  border-radius: 100%;\n  animation: "," 1s infinite linear;\n"])),Hn),Yn=function(){return Object(K.jsx)(Un,{})};var Wn,Jn,Mn,Vn,Gn=B.b.div(qn||(qn=Object(P.a)(["\n  flex: 1;\n\n  box-sizing: border-box;\n  padding: 0 1.75rem;\n\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    display: none; /* Chrome, Safari, Opera*/\n  }\n"]))),$n=B.b.div(Xn||(Xn=Object(P.a)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: center;\n\n  padding: 0.75rem 0;\n  box-sizing: border-box;\n"]))),ne=function(n){var e=n.items,t=n.selectPlayItem,r=n.loading,a=n.refList;return Object(K.jsxs)(Gn,{ref:a,children:[null===e||void 0===e?void 0:e.map((function(n,e){return Object(K.jsx)(Kn,{item:n,selectPlayItem:t},e)})),r&&Object(K.jsx)($n,{children:Object(K.jsx)(Yn,{})})]})},ee=t(22),te=t.n(ee);var re,ae,ce,ie,oe,se,le,be,de,pe,ue,je=B.b.div(Wn||(Wn=Object(P.a)(["\n  display: flex;\n  flex-flow: column;\n\n  position: absolute;\n  bottom: 0;\n  left: calc(50% - 235px);\n\n  width: 470px;\n  height: 470px;\n  border-radius: 1rem 1rem 0 0;\n\n  background: white;\n  transform: translateY(500px);\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n  transition: cubic-bezier(0.24, 0.65, 0.38, 0.88) 0.7s;\n\n  ","\n"])),(function(n){return n.isOn&&Object(B.a)(Jn||(Jn=Object(P.a)(["\n      transform: translateY(10px);\n    "])))})),fe=B.b.div(Mn||(Mn=Object(P.a)(["\n  width: 100%;\n\n  padding: 0 1.25rem;\n  box-sizing: border-box;\n"]))),xe=B.b.div(Vn||(Vn=Object(P.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  width: 100%;\n\n  padding: 1rem 1.25rem;\n  box-sizing: border-box;\n\n  & > img {\n    width: 200px;\n    height: auto;\n  }\n\n  & > span {\n    cursor: pointer;\n\n    font-style: normal;\n    font-weight: 300;\n    font-size: 24px;\n    line-height: 29px;\n    text-transform: uppercase;\n\n    color: #666;\n\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);\n  }\n\n  & > span:hover {\n    color: #333;\n  }\n"]))),he=En((function(n){var e=n.onSearch,t=n.changeSearchState,r=n.getTracks,c=n.appendTracks,i=n.tracks,o=n.selectPlayItem,s=n.loading,l=Object(a.useState)(""),b=Object(d.a)(l,2),p=b[0],u=b[1],j=Object(a.useRef)(null),f=Object(a.useRef)(Object(sn.a)((function(n){""!==n?(console.log("".concat(n,"\ub85c \uc9c0\uae08\uc694\uccad")),r(n),j.current&&j.current.scrollTo({top:0})):console.log("\uc694\uccad \uc548\ud569\ub2c8\ub2e4.")}),1e3)),x=Object(a.useCallback)((function(n){var e=n.target.value;u(e),f.current(e)}),[]),h=Object(a.useCallback)((function(){u(""),t(!1)}),[t]),g=Object(a.useCallback)((function(){if(console.log("next Query",i),this.scrollTop>=this.scrollHeight-this.offsetHeight&&(null===i||void 0===i?void 0:i.next)){var n=te.a.parse(i.next.split("?")[1]);c({q:n.query,offset:n.offset})}}),[i,c]),O=Object(a.useRef)(Object(sn.a)(g,500)),m=Object(a.useCallback)((function(){j.current&&j.current.removeEventListener("scroll",O.current),j.current&&(O.current=Object(sn.a)(g,500),j.current.addEventListener("scroll",O.current))}),[g]);return Object(a.useEffect)((function(){m()}),[m]),Object(K.jsxs)(je,{isOn:e,children:[Object(K.jsxs)(xe,{children:[Object(K.jsx)("img",{src:ln,alt:"Spotify Logo"}),Object(K.jsx)("span",{onClick:h,children:"X"})]}),Object(K.jsx)(fe,{children:Object(K.jsx)(Bn,{value:p,onChange:x,placeholder:"Music",block:!0})}),Object(K.jsx)(ne,{items:null===i||void 0===i?void 0:i.items,selectPlayItem:o,loading:s[mn]||s[zn],refList:j})]})}));var ge=B.b.div(re||(re=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),Oe=B.b.div(ae||(ae=Object(P.a)(["\n  width: 100%;\n  height: 2px;\n\n  background-color: #000;\n"]))),me=B.b.h2(ce||(ce=Object(P.a)(["\n  font-style: normal;\n  font-weight: normal;\n\n  text-transform: uppercase;\n"]))),ve=B.b.div(ie||(ie=Object(P.a)(["\n  width: 500px;\n  height: 500px;\n\n  padding: 1rem 0;\n\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n\n  &.left {\n    justify-content: flex-start;\n\n    & > h2 {\n      font-size: 64px;\n      line-height: 78px;\n      text-align: right;\n    }\n  }\n\n  &.right {\n    justify-content: flex-end;\n\n    & > h2 {\n      font-size: 48px;\n      line-height: 59px;\n    }\n  }\n"]))),ye=B.b.div(oe||(oe=Object(P.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  z-index: 1;\n\n  transform: translateX(-100px) translateY(-36px);\n\n  & > * {\n    text-align: right;\n  }\n"]))),ke=B.b.h6(se||(se=Object(P.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 10px;\n  /* identical to box height */\n\n  text-transform: lowercase;\n"]))),we=B.b.h1(le||(le=Object(P.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 48px;\n  line-height: 59px;\n  /* identical to box height */\n\n  text-transform: uppercase;\n\n  color: #000000;\n"]))),ze=B.b.div(be||(be=Object(P.a)(["\n  position: relative;\n\n  width: 500px;\n  height: 500px;\n"]))),Se=B.b.div(de||(de=Object(P.a)(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 500px;\n  height: 500px;\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  overflow: hidden;\n"])),on),Re=B.b.div(pe||(pe=Object(P.a)(["\n  position: absolute;\n  top: 0;\n  height: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background: rgba(196, 196, 196, 0.4);\n"]))),_e=B.b.div(ue||(ue=Object(P.a)(["\n  position: relative;\n\n  width: 210px;\n  height: 500px;\n\n  background: white;\n\n  & > .cdp {\n    position: absolute;\n    top: 125px;\n    left: calc(50% - 70px);\n  }\n"]))),Ze=function(n){return Object(K.jsxs)(ge,{children:[Object(K.jsxs)(ve,{className:"left",children:[Object(K.jsx)(Oe,{}),Object(K.jsx)(me,{children:"LOOK"})]}),Object(K.jsxs)(ze,{children:[Object(K.jsxs)(ye,{children:[Object(K.jsx)(we,{children:"Barabom"}),Object(K.jsx)(ke,{children:"copyright \xa9 iamformegusto"})]}),Object(K.jsxs)(Se,{children:[Object(K.jsx)(Re,{}),Object(K.jsx)(_e,{children:Object(K.jsx)(cn,{changeSearchState:n.changeSearchState,item:n.item,refCD:n.refCD})}),Object(K.jsx)(he,{onSearch:n.onSearch,changeSearchState:n.changeSearchState,selectPlayItem:n.selectPlayItem})]})]}),Object(K.jsxs)(ve,{className:"right",children:[Object(K.jsx)(me,{children:"ONLY BEAUTY"}),Object(K.jsx)(Oe,{})]})]})};var Le=En((function(n){var e=n.play,t=n.player,r=n.injectPlayer,c=Object(a.useState)(!1),i=Object(d.a)(c,2),o=i[0],p=i[1],u=Object(a.useState)(null),f=Object(d.a)(u,2),x=f[0],h=f[1],g=Object(a.useRef)(null);Object(a.useEffect)((function(){window.onSpotifyWebPlaybackSDKReady=function(){var n="".concat("BQAg4zz-7vsucBWI9tqwA_qvKQZsvlQzlr6gfeKV6EaXp-_obRKRJrxzokTRoH6lKu2kULzkFPrtUAfRoLCpFGJryFZnV24ecsu3H7z7gaNunX00swiLFct_Y4r2o_ZjvHD-cthCeEZocuij4ERuNRhp8b9Bc7WQZx6DzFpjnyp9kUcRg1Nhl9kQA9EE3g"),e=new window.Spotify.Player({name:"Web Playback SDK Quick Start Player",getOAuthToken:function(e){e(n)}});e.addListener("player_state_changed",(function(n){console.log(n),g.current&&(n.paused?(g.current.classList.remove("play"),h(null)):g.current.classList.add("play"))})),e.addListener("ready",(function(n){var t=n.device_id;console.log("Ready with Device ID",t),e.device_id=t,r(e)})),e.connect()}}),[r]);var O=Object(a.useCallback)((function(n){p(n)}),[]),m=Object(a.useCallback)(function(){var n=Object(b.a)(s.a.mark((function n(r){var a,c,i,o,b,d,u;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!1),h(r),n.next=4,F(r.artists[0].name,r.name);case 4:if(a=n.sent,console.log(a),0!==a.length){n.next=31;break}return n.next=9,s=r.artists[0].name,j.get("".concat("https://musicbrainz.org/ws/2","/artist?query=alias:").concat(s,"&fmt=json"));case 9:c=n.sent,console.log(c.data.artists[0].aliases),i=c.data.artists[0].aliases,o=Object(l.a)(i),n.prev=13,o.s();case 15:if((b=o.n()).done){n.next=23;break}return d=b.value,n.next=19,F(d["sort-name"],r.name);case 19:u=n.sent,console.log(u);case 21:n.next=15;break;case 23:n.next=28;break;case 25:n.prev=25,n.t0=n.catch(13),o.e(n.t0);case 28:return n.prev=28,o.f(),n.finish(28);case 31:e({spotify_uri:r.uri,device_id:t.device_id});case 32:case"end":return n.stop()}var s}),n,null,[[13,25,28,31]])})));return function(e){return n.apply(this,arguments)}}(),[e,t]);return Object(K.jsx)(Ze,{onSearch:o,changeSearchState:O,item:x,selectPlayItem:m,refCD:g})}));var Ce,Ne,Ae=function(){return Object(K.jsx)(Le,{})},Ee=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,100)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))},Fe=t(16),Pe=t(12),Be=t(98),Qe=t(23),Te=Object(Be.a)((Ce={},Object(Pe.a)(Ce,hn,(function(n,e){return Object(Qe.a)(n,(function(n){n.player=e.payload}))})),Object(Pe.a)(Ce,Sn,(function(n,e){return Object(Qe.a)(n,(function(n){var t;n.tracks=Object(bn.a)(Object(bn.a)({},e.payload.tracks),{},{items:null===(t=n.tracks)||void 0===t?void 0:t.items.concat(e.payload.tracks.items)})}))})),Object(Pe.a)(Ce,vn,(function(n,e){return Object(Qe.a)(n,(function(n){n.tracks=e.payload.tracks}))})),Object(Pe.a)(Ce,yn,(function(n){return Object(Qe.a)(n,(function(n){n.tracks=null}))})),Ce),{tracks:null,player:null}),De="loading/start",Ie="loading/finish",Ke=Object(Be.a)((Ne={},Object(Pe.a)(Ne,De,(function(n,e){return Object(bn.a)(Object(bn.a)({},n),{},Object(Pe.a)({},e.payload,!0))})),Object(Pe.a)(Ne,Ie,(function(n,e){return Object(bn.a)(Object(bn.a)({},n),{},Object(Pe.a)({},e.payload,!1))})),Ne),{}),qe=Object(Fe.combineReducers)({SpotifyReducer:Te,LoadingReducer:Ke}),Xe=t(53),He=t(54),Ue=t(13),Ye=Object(pn.a)(De,(function(n){return n})),We=Object(pn.a)(Ie,(function(n){return n}));function Je(n,e){var t="".concat(n,"/success"),r="".concat(n,"/failure");return s.a.mark((function a(c){var i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Ue.c)(Ye(n));case 2:return a.prev=2,a.next=5,Object(Ue.b)(e,c.payload);case 5:return i=a.sent,a.next=8,Object(Ue.c)({type:t,payload:i.data});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(2),a.next=14,Object(Ue.c)({type:r,payload:a.t0,error:!0});case 14:return a.next=16,Object(Ue.c)(We(n));case 16:case"end":return a.stop()}}),a,null,[[2,10]])}))}var Me="BQAg4zz-7vsucBWI9tqwA_qvKQZsvlQzlr6gfeKV6EaXp-_obRKRJrxzokTRoH6lKu2kULzkFPrtUAfRoLCpFGJryFZnV24ecsu3H7z7gaNunX00swiLFct_Y4r2o_ZjvHD-cthCeEZocuij4ERuNRhp8b9Bc7WQZx6DzFpjnyp9kUcRg1Nhl9kQA9EE3g",Ve="https://api.spotify.com",Ge=function(n){var e=n.q,t=n.offset,r=void 0===t?1:t;return j.get("".concat(Ve,"/v1/search?").concat(te.a.stringify({query:e,type:"track",market:"US",limit:10,offset:r})),{headers:{Authorization:"Bearer ".concat(Me)}})},$e=s.a.mark(rt),nt=Je(mn,Ge),et=Je(zn,Ge),tt=Je(Zn,(function(n){var e=n.spotify_uri,t=n.device_id;return j.put("".concat(Ve,"/v1/me/player/play?").concat(te.a.stringify({device_id:t})),{uris:[e]},{headers:{Authorization:"Bearer ".concat(Me),"Content-Type":"application/json"}})}));function rt(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Ue.d)(mn,nt);case 2:return n.next=4,Object(Ue.d)(Zn,tt);case 4:return n.next=6,Object(Ue.d)(zn,et);case 6:case"end":return n.stop()}}),$e)}var at=s.a.mark(ct);function ct(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Ue.a)([rt()]);case 2:case"end":return n.stop()}}),at)}var it=Object(He.a)(),ot=Object(Fe.createStore)(qe,Object(Xe.composeWithDevTools)(Object(Fe.applyMiddleware)(it)));it.run(ct),i.a.render(Object(K.jsx)(dn.a,{store:ot,children:Object(K.jsx)(Ae,{})}),document.getElementById("root")),Ee()}},[[97,1,2]]]);
//# sourceMappingURL=main.e06015cf.chunk.js.map