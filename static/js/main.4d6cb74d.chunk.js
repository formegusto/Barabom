(this["webpackJsonpproject-barabom"]=this["webpackJsonpproject-barabom"]||[]).push([[0],{103:function(n,e){},106:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"injectPlayer",(function(){return Bn})),t.d(r,"getTracks",(function(){return Dn})),t.d(r,"appendTracks",(function(){return qn})),t.d(r,"play",(function(){return Fn}));var a,c,o,i,s,l=t(0),b=t(30),d=t.n(b),u=(t(68),t(9)),p=t(10),f=t.n(p),j=t(56),h=t(32),x=t(11),O=t(42),m=t.n(O).a.create(),g=t(57),v=t.n(g)()({apikey:"85630c3b7613261a33b769967c59621b"}),y=function(n,e){return v.matcherLyrics({q_artist:n,q_track:e})},k=t(3),w=t(4),S=t(2);var _,z,C,N,L,I,T,P,Z,Y,R,A,X,E,B,D,q,F,M=w.b.div(a||(a=Object(k.a)(["\n  z-index: 255;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #fff;\n\n  padding: 3rem;\n  box-sizing: border-box;\n\n  overflow-x: hidden;\n\n  transition: 0.7s;\n"]))),H=Object(w.c)(c||(c=Object(k.a)(["\n    50% {\n      transform: translateY(-30px) scale(0.5);\n    } 90% {\n      transform: translateY(0) scale(0.5);  \n    } 100% {\n        transform: translateY(0) scale(1);  \n    }\n"]))),J=Object(w.c)(o||(o=Object(k.a)(["\n    from {\n        transform: rotateZ(0);\n    } to {\n        transform: rotateZ(-20deg);\n    }\n"]))),K=w.b.h1(i||(i=Object(k.a)(["\n  font-style: normal;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n\n  & > em {\n    display: inline-block;\n  }\n\n  & > em.hi {\n    transform-origin: 50% 100%;\n  }\n\n  & > em:not(.hi) {\n    animation: "," 3s forwards;\n  }\n\n  & > .first {\n    transform: translateY(-30px) translateX(-100px) scale(0.5);\n  }\n\n  & > .second {\n    transform: translateY(-30px) translateX(600px) scale(0.5);\n  }\n\n  & > .third {\n    transform: translateY(-30px) translateX(-800px) scale(0.5);\n  }\n\n  & > .fourth {\n    transform: translateY(-30px) translateX(100px) scale(0.5);\n  }\n\n  ","\n"])),H,(function(n){return n.hiAni&&Object(w.a)(s||(s=Object(k.a)(["\n      & > .hi {\n        animation: "," 0.7s 4 linear alternate forwards;\n      }\n    "])),J)})),Q=function(n){var e=Object(l.useState)(!1),t=Object(x.a)(e,2),r=t[0],a=t[1],c=Object(l.useRef)(null),o=Object(l.useRef)(null),i=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e,t;null===(e=c.current)||void 0===e||e.addEventListener("animationend",(function(){setTimeout((function(){return a(!0)}),300)})),null===(t=o.current)||void 0===t||t.addEventListener("animationend",(function(){console.log("refText animation end"),i.current&&(i.current.style.transform="translateY(100vh)",n.okaySplash())}))}),[n]),Object(S.jsx)(M,{ref:i,children:Object(S.jsxs)(K,{hiAni:r,children:[Object(S.jsx)("em",{className:"hi",ref:o,children:"f"}),Object(S.jsx)("em",{className:"first",ref:c,children:"o"}),"rmegust",Object(S.jsx)("em",{className:"second",children:"o"}),"\u2019s ",Object(S.jsx)("em",{className:"hi",children:"T"}),Object(S.jsx)("em",{className:"third",children:"O"}),"Y ",Object(S.jsx)("em",{className:"hi",children:"B"}),Object(S.jsx)("em",{className:"fourth",children:"O"}),"X"]})})},U=t.p+"static/media/Spotify_icon.0e932c0a.png",W=Object(w.c)(_||(_=Object(k.a)(["\n    from {\n        transform: rotateZ(0deg) translateZ(3px);\n    } to {\n        transform: rotateZ(720deg) translateZ(3px);\n    }\n"]))),G=Object(w.c)(z||(z=Object(k.a)(["\n    from {\n        transform: translateX(300%);\n    } to {\n        transform: translateX(-200%);\n    }\n"]))),V={getMusicAritst:function(n){return"".concat(n.artists[0].name," - ").concat(n.name)}};var $=w.b.div(C||(C=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  left: calc(50% - 40px);\n  width: 80px;\n  overflow-x: hidden;\n\n  transform: translateY(-15px);\n\n  transform-style: preserve-3d;\n"]))),nn=w.b.h1(N||(N=Object(k.a)(["\n  font-size: 10px;\n  animation: "," 10.5s infinite linear;\n  text-align: end;\n\n  white-space: nowrap;\n"])),G),en=w.b.img(L||(L=Object(k.a)(["\n  width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n"]))),tn=w.b.div(I||(I=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 10px;\n  width: 1000px;\n\n  border: 1px solid #999;\n  transform: rotateY(-90deg);\n  transform-origin: 0% 50%;\n\n  background: #999;\n"]))),rn=w.b.div(T||(T=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1000px;\n  width: 10px;\n\n  border: 1px solid #999;\n\n  transform: rotateX(90deg);\n  transform-origin: 50% 0%;\n\n  background: #ccc;\n"]))),an=w.b.div(P||(P=Object(k.a)(["\n  position: relative;\n\n  width: 10px;\n  height: 10px;\n\n  transform-style: preserve-3d;\n"]))),cn=w.b.div(Z||(Z=Object(k.a)(["\n  position: relative;\n  z-index: 13;\n  perspective: 1000px;\n"]))),on=w.b.div(Y||(Y=Object(k.a)(["\n  position: relative;\n\n  width: 100px;\n  height: 100px;\n\n  & div {\n    box-sizing: border-box;\n  }\n\n  & > div {\n    position: absolute;\n  }\n\n  & > .top {\n    top: 0;\n    left: 0;\n  }\n\n  & > .realtop {\n    top: 0;\n    right: calc(50% - 45px);\n  }\n\n  & > .bottom {\n    bottom: 0;\n    right: calc(50% - 45px);\n  }\n  transform: rotateY(20deg);\n\n  transform-style: preserve-3d;\n"]))),sn=w.b.div(R||(R=Object(k.a)(["\n  width: 90px;\n  height: 30px;\n\n  transform-origin: 50% 50%;\n  transform: rotateX(-90deg) translateZ(-15px);\n\n  background-color: #333;\n"]))),ln=w.b.div(A||(A=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 90px;\n  height: 30px;\n\n  transform-origin: 50% 50%;\n  transform: rotateX(-90deg) translateZ(15px);\n\n  background-color: #333;\n\n  transform-style: preserve-3d;\n"]))),bn=w.b.div(X||(X=Object(k.a)(["\n  top: calc(50% - 5px);\n  left: calc(50% - 5px);\n\n  width: 10px;\n  height: 10px;\n\n  background-color: black;\n  border-radius: 100%;\n  box-sizing: border-box;\n\n  transform: translateZ(5px);\n"]))),dn=w.b.div(E||(E=Object(k.a)(["\n  top: calc(50% - 37.5px);\n  left: calc(50% - 37.5px);\n\n  width: 75px;\n  height: 75px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  transform: translateZ(3px);\n\n  background: white;\n\n  overflow: hidden;\n\n  &.play {\n    animation: "," 1.5s infinite linear;\n  }\n"])),W),un=w.b.div(B||(B=Object(k.a)(["\n  top: calc(50% - 37.5px);\n  left: calc(50% - 37.5px);\n\n  width: 75px;\n  height: 75px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  background: black;\n"]))),pn=w.b.div(D||(D=Object(k.a)(["\n  cursor: pointer;\n  position: relative;\n\n  width: 80px;\n  height: 80px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  transform-style: preserve-3d;\n  background: radial-gradient(circle at 100%, #fff 75%, #333 100%);\n\n  & > div {\n    position: absolute;\n  }\n"]))),fn=w.b.div(q||(q=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  background-color: white;\n\n  transform: translateZ(15px);\n\n  transform-style: preserve-3d;\n"]))),jn=w.b.div(F||(F=Object(k.a)(["\n  width: 100%;\n  height: 100%;\n\n  border: 1px solid #333;\n  border-radius: 0.5rem;\n\n  transform: translateZ(-15px);\n\n  background: #333;\n"]))),hn=function(n){return Object(S.jsx)(cn,{className:"cdp",children:Object(S.jsxs)(on,{children:[n.item&&Object(S.jsx)($,{children:Object(S.jsx)(nn,{children:V.getMusicAritst(n.item)})}),Object(S.jsx)(sn,{className:"realtop"}),Object(S.jsx)(fn,{className:"top",children:Object(S.jsxs)(pn,{onClick:function(){return n.changeSearchState(!0)},children:[Object(S.jsx)(bn,{}),Object(S.jsx)(dn,{ref:n.refCD,children:Object(S.jsx)(en,{src:n.item?n.item.album.images[0].url:U,alt:"AlbumArt"})}),Object(S.jsx)(un,{})]})}),Object(S.jsx)(jn,{className:"top"}),Object(S.jsx)(ln,{className:"bottom",children:Object(S.jsxs)(an,{children:[Object(S.jsx)(rn,{}),Object(S.jsx)(tn,{})]})})]})})},xn=t.p+"static/media/keonu.12f6d4e1.jpg",On=t(35),mn=t.p+"static/media/Spotify_Logo_RGB_Black.0d1e5545.png",gn=t(13),vn=t(33),yn=t(108);function kn(n){return["".concat(n),"".concat(n,"/success"),"".concat(n,"/failure")]}var wn,Sn,_n=kn("spotify/inject_player"),zn=Object(x.a)(_n,1)[0],Cn=kn("spotify/gettracks"),Nn=Object(x.a)(Cn,3),Ln=Nn[0],In=Nn[1],Tn=Nn[2],Pn=kn("spotify/gettracks/append"),Zn=Object(x.a)(Pn,3),Yn=Zn[0],Rn=Zn[1],An=(Zn[2],kn("spotify/play")),Xn=Object(x.a)(An,3),En=Xn[0],Bn=(Xn[1],Xn[2],Object(yn.a)(zn,(function(n){return n}))),Dn=Object(yn.a)(Ln,(function(n){return{q:n}})),qn=Object(yn.a)(Yn,(function(n){var e=Object.assign({},n);return Object(gn.a)({},e)})),Fn=Object(yn.a)(En,(function(n){return Object.assign({},n)})),Mn=Object(vn.b)((function(n){var e=n.SpotifyReducer,t=n.LoadingReducer;return Object(gn.a)(Object(gn.a)({},e),{},{loading:t})}),r);var Hn,Jn=w.b.input(wn||(wn=Object(k.a)(["\n  ","\n\n  font-size: 2rem;\n  padding: 0.5rem;\n\n  color: #666;\n  box-sizing: border-box;\n  border-radius: 2rem;\n  border: 1px solid #ccc;\n  outline: none;\n\n  &::placeholder {\n    color: #eee;\n  }\n"])),(function(n){return n.block&&Object(w.a)(Sn||(Sn=Object(k.a)(["\n      width: 100%;\n      display: block;\n    "])))})),Kn=function(n){return Object(S.jsx)(Jn,Object(gn.a)({},n))},Qn=(t(93),{msToString:function(n){"string"===typeof n&&(n=parseInt(n));var e=Math.floor(n/1e3/60),t=Math.floor(n/1e3%60);return t<10&&(t="0"+t),"".concat(e,":").concat(t)}});var Un,Wn,Gn=w.b.div(Hn||(Hn=Object(k.a)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n\n  padding: 0.75rem 0;\n  cursor: pointer;\n\n  & > img {\n    width: 64px;\n    height: 64px;\n    margin: 0 0.75rem 0 0;\n  }\n\n  & > .track {\n    flex: 1;\n\n    & > .title {\n      font-size: 16px;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-height: 24px;\n      text-transform: none;\n\n      color: #333;\n    }\n\n    & > .artist {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-height: 16px;\n      text-transform: none;\n\n      color: #555;\n    }\n  }\n\n  & > .duration {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: normal;\n    line-height: 16px;\n    text-transform: none;\n\n    color: #777;\n  }\n"]))),Vn=function(n){var e=n.item,t=n.selectPlayItem;return Object(S.jsxs)(Gn,{onClick:function(){return t(e)},children:[Object(S.jsx)("img",{className:"albumart",src:e.album.images[0].url,alt:"albumarts"}),Object(S.jsx)("span",{}),Object(S.jsxs)("span",{className:"track",children:[Object(S.jsx)("h1",{className:"title",children:e.name}),Object(S.jsx)("h5",{className:"artist",children:e.artists[0].name})]}),Object(S.jsx)("span",{className:"duration",children:Qn.msToString(e.duration_ms)})]})};var $n,ne,ee=Object(w.c)(Un||(Un=Object(k.a)(["\n    from {\n        transform: rotateZ(0deg);\n    } to {\n        transform: rotateZ(360deg);\n    }\n"]))),te=w.b.div(Wn||(Wn=Object(k.a)(["\n  margin: 0 auto;\n  width: 30px;\n  height: 30px;\n\n  border: 5px solid #fff;\n  border-top: 5px solid #333;\n\n  border-radius: 100%;\n  animation: "," 1s infinite linear;\n"])),ee),re=function(){return Object(S.jsx)(te,{})};var ae,ce,oe,ie,se=w.b.div($n||($n=Object(k.a)(["\n  flex: 1;\n\n  box-sizing: border-box;\n  padding: 0 1.75rem;\n\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    display: none; /* Chrome, Safari, Opera*/\n  }\n"]))),le=w.b.div(ne||(ne=Object(k.a)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: center;\n\n  padding: 0.75rem 0;\n  box-sizing: border-box;\n"]))),be=function(n){var e=n.items,t=n.selectPlayItem,r=n.loading,a=n.refList;return Object(S.jsxs)(se,{ref:a,children:[null===e||void 0===e?void 0:e.map((function(n,e){return Object(S.jsx)(Vn,{item:n,selectPlayItem:t},e)})),r&&Object(S.jsx)(le,{children:Object(S.jsx)(re,{})})]})},de=t(20),ue=t.n(de);var pe,fe,je,he=w.b.div(ae||(ae=Object(k.a)(["\n  display: flex;\n  flex-flow: column;\n\n  position: absolute;\n  bottom: 0;\n  left: calc(50% - 235px);\n\n  z-index: 255;\n\n  width: 470px;\n  height: 470px;\n  border-radius: 1rem 1rem 0 0;\n\n  background: white;\n  transform: translateY(500px);\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n  transition: cubic-bezier(0.24, 0.65, 0.38, 0.88) 0.7s;\n\n  ","\n"])),(function(n){return n.isOn&&Object(w.a)(ce||(ce=Object(k.a)(["\n      transform: translateY(10px);\n    "])))})),xe=w.b.div(oe||(oe=Object(k.a)(["\n  width: 100%;\n\n  padding: 0 1.25rem;\n  box-sizing: border-box;\n"]))),Oe=w.b.div(ie||(ie=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  width: 100%;\n\n  padding: 1rem 1.25rem;\n  box-sizing: border-box;\n\n  & > img {\n    width: 200px;\n    height: 59.95px;\n  }\n\n  & > span {\n    cursor: pointer;\n\n    font-style: normal;\n    font-weight: 300;\n    font-size: 24px;\n    line-height: 29px;\n    text-transform: uppercase;\n\n    color: #666;\n\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);\n  }\n\n  & > span:hover {\n    color: #333;\n  }\n"]))),me=Mn((function(n){var e=n.onSearch,t=n.changeSearchState,r=n.getTracks,a=n.appendTracks,c=n.tracks,o=n.selectPlayItem,i=n.loading,s=Object(l.useState)(""),b=Object(x.a)(s,2),d=b[0],u=b[1],p=Object(l.useRef)(null),f=Object(l.useRef)(Object(On.a)((function(n){""!==n?(console.log("".concat(n,"\ub85c \uc9c0\uae08\uc694\uccad")),r(n),p.current&&p.current.scrollTo({top:0})):console.log("\uc694\uccad \uc548\ud569\ub2c8\ub2e4.")}),1e3)),j=Object(l.useCallback)((function(n){var e=n.target.value;u(e),f.current(e)}),[]),h=Object(l.useCallback)((function(){u(""),t(!1)}),[t]),O=Object(l.useCallback)((function(){if(console.log("next Query",c),this.scrollTop>=this.scrollHeight-this.offsetHeight&&(null===c||void 0===c?void 0:c.next)){var n=ue.a.parse(c.next.split("?")[1]);a({q:n.query,offset:n.offset})}}),[c,a]),m=Object(l.useRef)(Object(On.a)(O,500)),g=Object(l.useCallback)((function(){p.current&&p.current.removeEventListener("scroll",m.current),p.current&&(m.current=Object(On.a)(O,500),p.current.addEventListener("scroll",m.current))}),[O]);return Object(l.useEffect)((function(){g()}),[g]),Object(S.jsxs)(he,{isOn:e,children:[Object(S.jsxs)(Oe,{children:[Object(S.jsx)("img",{src:mn,alt:"Spotify Logo"}),Object(S.jsx)("span",{onClick:h,children:"X"})]}),Object(S.jsx)(xe,{children:Object(S.jsx)(Kn,{value:d,onChange:j,placeholder:"Music",block:!0})}),Object(S.jsx)(be,{items:null===c||void 0===c?void 0:c.items,selectPlayItem:o,loading:i[Ln]||i[Yn],refList:p})]})}));var ge,ve,ye,ke,we,Se,_e,ze,Ce,Ne,Le,Ie,Te,Pe,Ze,Ye=w.b.div(pe||(pe=Object(k.a)(["\n  position: relative;\n  z-index: 13;\n\n  flex: 1;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Re=w.b.div(fe||(fe=Object(k.a)(["\n  ","\n\n  width: 240px;\n  height: 100px;\n\n  overflow-y: scroll;\n  text-align: center;\n\n  font-size: 12px;\n  line-height: 16px;\n  color: #fff;\n\n  text-shadow: 1px 1px 10px #333;\n  &::-webkit-scrollbar {\n    display: none; /* Chrome, Safari, Opera*/\n  }\n"])),(function(n){return"on"===n.loading&&Object(w.a)(je||(je=Object(k.a)(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    "])))})),Ae=function(n){return Object(S.jsx)(Ye,{children:n.loading?Object(S.jsx)(re,{}):""!==n.lyrics&&Object(S.jsx)(Re,{dangerouslySetInnerHTML:{__html:n.lyrics},loading:n.loading?"on":"off"})})};var Xe=Object(w.c)(ge||(ge=Object(k.a)(["\n  from {\n    opacity:0;\n    /* transform: rotateZ(-90deg); */\n  } to {\n    opacity:1;\n    transform: translateX(484px);\n    /* transform: rotateZ(0deg); */\n  }\n"]))),Ee=Object(w.c)(ve||(ve=Object(k.a)(["\n  from {\n    opacity:0;\n    transform: rotateZ(0deg);\n  } to {\n    opacity: 1;\n    transform: rotateZ(-90deg);\n  }\n"]))),Be=w.b.div(ye||(ye=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),De=w.b.div(ke||(ke=Object(k.a)(["\n  width: 100%;\n  height: 2px;\n\n  background-color: #000;\n"]))),qe=w.b.h2(we||(we=Object(k.a)(["\n  font-style: normal;\n  font-weight: normal;\n\n  text-transform: uppercase;\n"]))),Fe=w.b.div(Se||(Se=Object(k.a)(["\n  position: relative;\n  z-index: 10;\n  width: 500px;\n  height: 500px;\n\n  padding: 1rem 0;\n\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n\n  &.left {\n    justify-content: flex-start;\n\n    & > h2 {\n      padding: 0 1rem 0 0;\n      font-size: 64px;\n      line-height: 78px;\n      text-align: right;\n    }\n\n    ","\n  }\n\n  &.right {\n    justify-content: flex-end;\n\n    & > h2 {\n      font-size: 48px;\n      line-height: 59px;\n\n      padding: 0.5rem;\n      color: #999999;\n    }\n\n    ","\n  }\n"])),(function(n){return n.splashOkay&&Object(w.a)(_e||(_e=Object(k.a)(["\n        transform-origin: 100% 0%;\n\n        animation: "," 0.7s linear forwards;\n      "])),Xe)}),(function(n){return n.splashOkay&&Object(w.a)(ze||(ze=Object(k.a)(["\n        transform-origin: 0% 100%;\n        animation: "," 0.7s linear forwards;\n      "])),Ee)})),Me=w.b.div(Ce||(Ce=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  z-index: 1;\n\n  transform: translateX(-100px) translateY(-56px);\n\n  & > * {\n    text-align: right;\n  }\n"]))),He=w.b.h6(Ne||(Ne=Object(k.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 10px;\n  /* identical to box height */\n\n  text-transform: lowercase;\n"]))),Je=w.b.h1(Le||(Le=Object(k.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 48px;\n  line-height: 59px;\n  /* identical to box height */\n\n  text-transform: uppercase;\n\n  color: #000000;\n"]))),Ke=w.b.div(Ie||(Ie=Object(k.a)(["\n  position: relative;\n\n  width: 500px;\n  height: 500px;\n"]))),Qe=w.b.div(Te||(Te=Object(k.a)(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 500px;\n  height: 500px;\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  overflow: hidden;\n"])),xn),Ue=w.b.div(Pe||(Pe=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  height: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background: rgba(196, 196, 196, 0.4);\n"]))),We=w.b.div(Ze||(Ze=Object(k.a)(["\n  position: relative;\n\n  width: 210px;\n  height: 500px;\n\n  background: white;\n\n  & > .cdp {\n    position: absolute;\n    top: 125px;\n    left: calc(50% - 70px);\n  }\n"]))),Ge=function(n){return Object(S.jsxs)(Be,{children:[Object(S.jsxs)(Fe,{className:"left",splashOkay:n.splashOkay,children:[Object(S.jsx)(De,{}),Object(S.jsx)(qe,{children:"LOOK"})]}),Object(S.jsxs)(Ke,{children:[Object(S.jsxs)(Me,{children:[Object(S.jsx)(Je,{children:"Barabom"}),Object(S.jsx)(He,{children:"copyright \xa9 iamformegusto"})]}),Object(S.jsxs)(Qe,{children:[Object(S.jsx)(Ue,{}),Object(S.jsx)(We,{children:Object(S.jsx)(hn,{changeSearchState:n.changeSearchState,item:n.item,refCD:n.refCD})}),Object(S.jsx)(me,{onSearch:n.onSearch,changeSearchState:n.changeSearchState,selectPlayItem:n.selectPlayItem}),Object(S.jsx)(Ae,{loading:n.loading,lyrics:n.lyrics})]})]}),Object(S.jsxs)(Fe,{className:"right",splashOkay:n.splashOkay,children:[Object(S.jsx)(qe,{children:"ONLY BEAUTY"}),Object(S.jsx)(De,{})]}),Object(S.jsx)("a",{href:"https://accounts.spotify.com/authorize?client_id=2ec8e7e1e63c4ce699bddec974f14e54&response_type=code&redirect_uri=http://localhost:3000/project-barabom%23/auth&scope=user-read-private%20user-read-email%20streaming%20app-remote-control%20user-read-playback-state%20user-modify-playback-state",children:"spotify auth"})]})};var Ve=Mn((function(n){var e=n.play,t=n.player,r=n.injectPlayer,a=Object(l.useState)(!1),c=Object(x.a)(a,2),o=c[0],i=c[1],s=Object(l.useState)(null),b=Object(x.a)(s,2),d=b[0],u=b[1],p=Object(l.useState)(!1),O=Object(x.a)(p,2),g=O[0],v=O[1],k=Object(l.useState)(""),w=Object(x.a)(k,2),_=w[0],z=w[1],C=Object(l.useRef)(null),N=Object(l.useState)(!1),L=Object(x.a)(N,2),I=L[0],T=L[1],P=Object(l.useCallback)((function(){T(!0)}),[]);Object(l.useEffect)((function(){window.onSpotifyWebPlaybackSDKReady=function(){var n="".concat(localStorage.getItem("access_token")),e=new window.Spotify.Player({name:"Web Playback SDK Quick Start Player",getOAuthToken:function(e){e(n)}});e.addListener("player_state_changed",(function(n){console.log(JSON.stringify(n)),C.current&&(n.paused?(C.current.classList.remove("play"),u(null)):C.current.classList.add("play"))})),e.addListener("ready",(function(n){var t=n.device_id;console.log("Ready with Device ID",t),e.device_id=t,r(e)})),e.connect()}}),[r]);var Z=Object(l.useCallback)((function(n){i(n)}),[]),Y=Object(l.useCallback)((function(n){v(n)}),[]),R=Object(l.useCallback)(function(){var n=Object(h.a)(f.a.mark((function n(r){var a,c,o,s,l,b;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!1),u(r),Y(!0),n.next=5,y(r.artists[0].name,r.name);case 5:if(a=n.sent,console.log(a),0!==a.length){n.next=38;break}return n.next=10,d=r.artists[0].name,m.get("".concat("https://musicbrainz.org/ws/2","/artist?query=alias:").concat(d,"&fmt=json"));case 10:if(0===(c=n.sent).data.artists.length){n.next=36;break}console.log(c.data.artists[0].aliases),o=c.data.artists[0].aliases,s=Object(j.a)(o),n.prev=15,s.s();case 17:if((l=s.n()).done){n.next=28;break}return b=l.value,n.next=21,y(b["sort-name"],r.name);case 21:if(a=n.sent,console.log(a),!a.hasOwnProperty("lyrics")){n.next=26;break}return z(a.lyrics.lyrics_body.replaceAll("\n","<br/>")),n.abrupt("break",28);case 26:n.next=17;break;case 28:n.next=33;break;case 30:n.prev=30,n.t0=n.catch(15),s.e(n.t0);case 33:return n.prev=33,s.f(),n.finish(33);case 36:n.next=39;break;case 38:z(a.lyrics.lyrics_body.replaceAll("\n","<br/>"));case 39:Y(!1),e({spotify_uri:r.uri,device_id:t.device_id});case 41:case"end":return n.stop()}var d}),n,null,[[15,30,33,36]])})));return function(e){return n.apply(this,arguments)}}(),[e,t,Y]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Q,{okaySplash:P}),Object(S.jsx)(Ge,{onSearch:o,changeSearchState:Z,item:d,selectPlayItem:R,refCD:C,lyrics:_,splashOkay:I,loading:g})]})}));var $e,nt=function(){return Object(S.jsx)(Ve,{})};var et=w.b.div($e||($e=Object(k.a)(["\n  width: 100vw;\n  height: 100vh;\n\n  justify-content: center;\n  align-items: center;\n"]))),tt=function(){return Object(S.jsx)(et,{children:Object(S.jsx)(re,{})})};var rt=function(){return Object(S.jsx)(tt,{})},at=function(n){return m.post("".concat("https://accounts.spotify.com","/api/token"),ue.a.stringify({code:n,grant_type:"authorization_code",redirect_uri:"http://localhost:3000/project-barabom#/auth"}),{headers:{"Content-Type":"application/x-www-form-urlencoded"},auth:{username:"2ec8e7e1e63c4ce699bddec974f14e54",password:"1e89df8c7cd743bc9c3727f0ab779c5b"}})};var ct=function(n){return Object(l.useEffect)((function(){Object(h.a)(f.a.mark((function e(){var t,r,a,c,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ue.a.parse(n.location.search,{ignoreQueryPrefix:!0}),r=t.code,e.prev=1,e.next=4,at(r);case 4:a=e.sent,console.log(a),c=a.data,o=c.access_token,i=c.refresh_token,localStorage.setItem("access_token",o),localStorage.setItem("refresh_token",i),n.history.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()})),Object(S.jsx)(rt,{})};var ot=function(n){return Object(l.useEffect)((function(){var e=n.location.pathname;console.log(n),"/%2Fauth"===e&&(window.location.href="".concat("http://localhost:3000/project-barabom#/auth").concat(window.location.search))})),Object(S.jsx)(S.Fragment,{})};var it,st,lt,bt=function(){return Object(S.jsxs)(u.c,{children:[Object(S.jsx)(u.a,{path:"/",component:nt,exact:!0}),Object(S.jsx)(u.a,{path:"/auth",component:ct,exact:!0}),Object(S.jsx)(u.a,{component:ot})]})},dt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,109)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),c(n),o(n)}))},ut=t(21),pt=t(14),ft=t(107),jt=t(23),ht=Object(ft.a)((it={},Object(pt.a)(it,zn,(function(n,e){return Object(jt.a)(n,(function(n){n.player=e.payload}))})),Object(pt.a)(it,Rn,(function(n,e){return Object(jt.a)(n,(function(n){var t;n.tracks=Object(gn.a)(Object(gn.a)({},e.payload.tracks),{},{items:null===(t=n.tracks)||void 0===t?void 0:t.items.concat(e.payload.tracks.items)})}))})),Object(pt.a)(it,In,(function(n,e){return Object(jt.a)(n,(function(n){n.tracks=e.payload.tracks}))})),Object(pt.a)(it,Tn,(function(n){return Object(jt.a)(n,(function(n){n.tracks=null}))})),it),{tracks:null,player:null}),xt="loading/start",Ot="loading/finish",mt=Object(ft.a)((st={},Object(pt.a)(st,xt,(function(n,e){return Object(gn.a)(Object(gn.a)({},n),{},Object(pt.a)({},e.payload,!0))})),Object(pt.a)(st,Ot,(function(n,e){return Object(gn.a)(Object(gn.a)({},n),{},Object(pt.a)({},e.payload,!1))})),st),{}),gt=kn("users/get"),vt=Object(x.a)(gt,3),yt=vt[0],kt=vt[1],wt=vt[2],St=Object(ft.a)((lt={},Object(pt.a)(lt,kt,(function(n,e){return Object(jt.a)(n,(function(n){n.user=e.payload}))})),Object(pt.a)(lt,wt,(function(n,e){return Object(jt.a)(n,(function(n){n.error=e.payload}))})),lt),{user:null,error:null}),_t=Object(ut.combineReducers)({SpotifyReducer:ht,LoadingReducer:mt,UserReducer:St}),zt=t(61),Ct=t(63),Nt=t(15),Lt=Object(yn.a)(xt,(function(n){return n})),It=Object(yn.a)(Ot,(function(n){return n}));function Tt(n,e){var t="".concat(n,"/success"),r="".concat(n,"/failure");return f.a.mark((function a(c){var o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Nt.c)(Lt(n));case 2:return a.prev=2,a.next=5,Object(Nt.b)(e,c.payload);case 5:return o=a.sent,a.next=8,Object(Nt.c)({type:t,payload:o.data});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(2),a.next=14,Object(Nt.c)({type:r,payload:a.t0,error:!0});case 14:return a.next=16,Object(Nt.c)(It(n));case 16:case"end":return a.stop()}}),a,null,[[2,10]])}))}var Pt="https://api.spotify.com",Zt=function(n){var e=n.q,t=n.offset,r=void 0===t?1:t;return m.get("".concat(Pt,"/v1/search?").concat(ue.a.stringify({query:e,type:"track",market:"US",limit:10,offset:r})),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}})},Yt=f.a.mark(Et),Rt=Tt(Ln,Zt),At=Tt(Yn,Zt),Xt=Tt(En,(function(n){var e=n.spotify_uri,t=n.device_id;return m.put("".concat(Pt,"/v1/me/player/play?").concat(ue.a.stringify({device_id:t})),{uris:[e]},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token")),"Content-Type":"application/json"}})}));function Et(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Nt.d)(Ln,Rt);case 2:return n.next=4,Object(Nt.d)(En,Xt);case 4:return n.next=6,Object(Nt.d)(Yn,At);case 6:case"end":return n.stop()}}),Yt)}var Bt=f.a.mark(qt),Dt=Tt(yt,(function(n){return m.get("".concat("https://api.spotify.com","/v1/me"),{headers:{Authorization:"Bearer ".concat(n)}})}));function qt(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Nt.d)(yt,Dt);case 2:case"end":return n.stop()}}),Bt)}var Ft=f.a.mark(Mt);function Mt(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Nt.a)([Et(),qt()]);case 2:case"end":return n.stop()}}),Ft)}var Ht=Object(yn.a)(yt,(function(n){return n})),Jt=t(62),Kt=Object(Ct.a)(),Qt=Object(ut.createStore)(_t,Object(zt.composeWithDevTools)(Object(ut.applyMiddleware)(Kt)));Kt.run(Mt);!function(){var n=localStorage.getItem("access_token");n&&Qt.dispatch(Ht(n))}(),d.a.render(Object(S.jsx)(vn.a,{store:Qt,children:Object(S.jsx)(Jt.a,{children:Object(S.jsx)(bt,{})})}),document.getElementById("root")),dt()},68:function(n,e,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.4d6cb74d.chunk.js.map