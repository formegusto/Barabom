(this["webpackJsonpproject-barabom"]=this["webpackJsonpproject-barabom"]||[]).push([[0],{103:function(n,e){},106:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"injectPlayer",(function(){return Hn})),t.d(r,"getTracks",(function(){return Jn})),t.d(r,"appendTracks",(function(){return Kn})),t.d(r,"play",(function(){return Qn}));var a,c,o,i,s,l=t(0),b=t(31),d=t.n(b),p=(t(68),t(9)),u=t(10),f=t.n(u),j=t(56),h=t(33),x=t(13),m=t(42),O=t.n(m).a.create(),g=t(57),v=t.n(g)()({apikey:"85630c3b7613261a33b769967c59621b"}),y=function(n,e){return v.matcherLyrics({q_artist:n,q_track:e})},k=t(3),w=t(4),S=t(1);var _,z,C,I,N,L,T,P,R,Z,Y,A,E,X,D,B,F,q,M,U,W,H=w.b.div(a||(a=Object(k.a)(["\n  z-index: 255;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #fff;\n\n  padding: 3rem;\n  box-sizing: border-box;\n\n  overflow-x: hidden;\n\n  transition: 0.7s;\n"]))),J=Object(w.c)(c||(c=Object(k.a)(["\n    50% {\n      transform: translateY(-30px) scale(0.5);\n    } 90% {\n      transform: translateY(0) scale(0.5);  \n    } 100% {\n        transform: translateY(0) scale(1);  \n    }\n"]))),K=Object(w.c)(o||(o=Object(k.a)(["\n    from {\n        transform: rotateZ(0);\n    } to {\n        transform: rotateZ(-20deg);\n    }\n"]))),Q=w.b.h1(i||(i=Object(k.a)(["\n  font-style: normal;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n\n  & > em {\n    display: inline-block;\n  }\n\n  & > em.hi {\n    transform-origin: 50% 100%;\n  }\n\n  & > em:not(.hi) {\n    animation: "," 3s forwards;\n  }\n\n  & > .first {\n    transform: translateY(-30px) translateX(-100px) scale(0.5);\n  }\n\n  & > .second {\n    transform: translateY(-30px) translateX(600px) scale(0.5);\n  }\n\n  & > .third {\n    transform: translateY(-30px) translateX(-800px) scale(0.5);\n  }\n\n  & > .fourth {\n    transform: translateY(-30px) translateX(100px) scale(0.5);\n  }\n\n  ","\n"])),J,(function(n){return n.hiAni&&Object(w.a)(s||(s=Object(k.a)(["\n      & > .hi {\n        animation: "," 0.7s 4 linear alternate forwards;\n      }\n    "])),K)})),G=function(n){var e=Object(l.useState)(!1),t=Object(x.a)(e,2),r=t[0],a=t[1],c=Object(l.useRef)(null),o=Object(l.useRef)(null),i=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e,t;null===(e=c.current)||void 0===e||e.addEventListener("animationend",(function(){setTimeout((function(){return a(!0)}),300)})),null===(t=o.current)||void 0===t||t.addEventListener("animationend",(function(){console.log("refText animation end"),i.current&&(i.current.style.transform="translateY(100vh)",n.okaySplash())}))}),[n]),Object(S.jsx)(H,{ref:i,children:Object(S.jsxs)(Q,{hiAni:r,children:[Object(S.jsx)("em",{className:"hi",ref:o,children:"f"}),Object(S.jsx)("em",{className:"first",ref:c,children:"o"}),"rmegust",Object(S.jsx)("em",{className:"second",children:"o"}),"\u2019s ",Object(S.jsx)("em",{className:"hi",children:"T"}),Object(S.jsx)("em",{className:"third",children:"O"}),"Y ",Object(S.jsx)("em",{className:"hi",children:"B"}),Object(S.jsx)("em",{className:"fourth",children:"O"}),"X"]})})},V=t(28),$=t.p+"static/media/Spotify_icon.0e932c0a.png",nn=Object(w.c)(_||(_=Object(k.a)(["\n    from {\n        transform: rotateZ(0deg) translateZ(3px);\n    } to {\n        transform: rotateZ(720deg) translateZ(3px);\n    }\n"]))),en=Object(w.c)(z||(z=Object(k.a)(["\n    from {\n        transform: translateX(300%);\n    } to {\n        transform: translateX(-200%);\n    }\n"]))),tn={getMusicAritst:function(n){return"".concat(n.artists[0].name," - ").concat(n.name)}},rn=t.p+"static/media/Spotify_Logo_RGB_White.f48fb565.png";var an=w.b.h6(C||(C=Object(k.a)(["\n  margin: 6px 0 0;\n  font-size: 12px;\n\n  color: #999;\n"]))),cn=w.b.div(I||(I=Object(k.a)(["\n  & > img {\n    display: block;\n\n    width: 150px;\n    height: 44.96px;\n    background-color: black;\n    padding: 8px;\n    border-radius: 2rem;\n\n    cursor: pointer;\n  }\n\n  &:hover {\n    & > img {\n      background-color: #666;\n    }\n  }\n"]))),on=w.b.div(N||(N=Object(k.a)(["\n  position: relative;\n  z-index: 13;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n"]))),sn=w.b.div(L||(L=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  left: calc(50% - 40px);\n  width: 80px;\n  overflow-x: hidden;\n\n  transform: translateY(-15px);\n\n  transform-style: preserve-3d;\n"]))),ln=w.b.h1(T||(T=Object(k.a)(["\n  font-size: 10px;\n  animation: "," 10.5s infinite linear;\n  text-align: end;\n\n  white-space: nowrap;\n"])),en),bn=w.b.img(P||(P=Object(k.a)(["\n  width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n"]))),dn=w.b.div(R||(R=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 10px;\n  width: 1000px;\n\n  border: 1px solid #999;\n  transform: rotateY(-90deg);\n  transform-origin: 0% 50%;\n\n  background: #999;\n"]))),pn=w.b.div(Z||(Z=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1000px;\n  width: 10px;\n\n  border: 1px solid #999;\n\n  transform: rotateX(90deg);\n  transform-origin: 50% 0%;\n\n  background: #ccc;\n"]))),un=w.b.div(Y||(Y=Object(k.a)(["\n  position: relative;\n\n  width: 10px;\n  height: 10px;\n\n  transform-style: preserve-3d;\n"]))),fn=w.b.div(A||(A=Object(k.a)(["\n  position: relative;\n  z-index: 13;\n  perspective: 1000px;\n"]))),jn=w.b.div(E||(E=Object(k.a)(["\n  position: relative;\n\n  width: 100px;\n  height: 100px;\n\n  & div {\n    box-sizing: border-box;\n  }\n\n  & > div {\n    position: absolute;\n  }\n\n  & > .top {\n    top: 0;\n    left: 0;\n  }\n\n  & > .realtop {\n    top: 0;\n    right: calc(50% - 45px);\n  }\n\n  & > .bottom {\n    bottom: 0;\n    right: calc(50% - 45px);\n  }\n  transform: rotateY(20deg);\n\n  transform-style: preserve-3d;\n"]))),hn=w.b.div(X||(X=Object(k.a)(["\n  width: 90px;\n  height: 30px;\n\n  transform-origin: 50% 50%;\n  transform: rotateX(-90deg) translateZ(-15px);\n\n  background-color: #333;\n"]))),xn=w.b.div(D||(D=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 90px;\n  height: 30px;\n\n  transform-origin: 50% 50%;\n  transform: rotateX(-90deg) translateZ(15px);\n\n  background-color: #333;\n\n  transform-style: preserve-3d;\n"]))),mn=w.b.div(B||(B=Object(k.a)(["\n  top: calc(50% - 5px);\n  left: calc(50% - 5px);\n\n  width: 10px;\n  height: 10px;\n\n  background-color: black;\n  border-radius: 100%;\n  box-sizing: border-box;\n\n  transform: translateZ(5px);\n"]))),On=w.b.div(F||(F=Object(k.a)(["\n  top: calc(50% - 37.5px);\n  left: calc(50% - 37.5px);\n\n  width: 75px;\n  height: 75px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  transform: translateZ(3px);\n\n  background: white;\n\n  overflow: hidden;\n\n  &.play {\n    animation: "," 1.5s infinite linear;\n  }\n"])),nn),gn=w.b.div(q||(q=Object(k.a)(["\n  top: calc(50% - 37.5px);\n  left: calc(50% - 37.5px);\n\n  width: 75px;\n  height: 75px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  background: black;\n"]))),vn=w.b.div(M||(M=Object(k.a)(["\n  cursor: pointer;\n  position: relative;\n\n  width: 80px;\n  height: 80px;\n\n  border: 1px solid black;\n  border-radius: 100%;\n\n  transform-style: preserve-3d;\n  background: radial-gradient(circle at 100%, #fff 75%, #333 100%);\n\n  & > div {\n    position: absolute;\n  }\n"]))),yn=w.b.div(U||(U=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  background-color: white;\n\n  transform: translateZ(15px);\n\n  transform-style: preserve-3d;\n"]))),kn=w.b.div(W||(W=Object(k.a)(["\n  width: 100%;\n  height: 100%;\n\n  border: 1px solid #333;\n  border-radius: 0.5rem;\n\n  transform: translateZ(-15px);\n\n  background: #333;\n"]))),wn=function(n){return Object(V.c)((function(n){return n.UserReducer})).user?Object(S.jsx)(fn,{className:"cdp",children:Object(S.jsxs)(jn,{children:[n.item&&Object(S.jsx)(sn,{children:Object(S.jsx)(ln,{children:tn.getMusicAritst(n.item)})}),Object(S.jsx)(hn,{className:"realtop"}),Object(S.jsx)(yn,{className:"top",children:Object(S.jsxs)(vn,{onClick:function(){return n.changeSearchState(!0)},children:[Object(S.jsx)(mn,{}),Object(S.jsx)(On,{ref:n.refCD,children:Object(S.jsx)(bn,{src:n.item?n.item.album.images[0].url:$,alt:"AlbumArt"})}),Object(S.jsx)(gn,{})]})}),Object(S.jsx)(kn,{className:"top"}),Object(S.jsx)(xn,{className:"bottom",children:Object(S.jsxs)(un,{children:[Object(S.jsx)(pn,{}),Object(S.jsx)(dn,{})]})})]})}):Object(S.jsxs)(on,{children:[Object(S.jsx)("a",{href:"https://accounts.spotify.com/authorize?client_id=2ec8e7e1e63c4ce699bddec974f14e54&response_type=code&redirect_uri=https://formegusto.github.io/project-barabom/%23/auth&scope=user-read-private%20user-read-email%20streaming%20app-remote-control%20user-read-playback-state%20user-modify-playback-state",children:Object(S.jsx)(cn,{children:Object(S.jsx)("img",{src:rn,alt:"logo"})})}),Object(S.jsx)(an,{children:"Please Spotify Login"})]})},Sn=t.p+"static/media/keonu.12f6d4e1.jpg",_n=t(35),zn=t.p+"static/media/Spotify_Logo_RGB_Black.0d1e5545.png",Cn=t(12),In=t(108);function Nn(n){return["".concat(n),"".concat(n,"/success"),"".concat(n,"/failure")]}var Ln,Tn,Pn=Nn("spotify/inject_player"),Rn=Object(x.a)(Pn,1)[0],Zn=Nn("spotify/gettracks"),Yn=Object(x.a)(Zn,3),An=Yn[0],En=Yn[1],Xn=Yn[2],Dn=Nn("spotify/gettracks/append"),Bn=Object(x.a)(Dn,3),Fn=Bn[0],qn=Bn[1],Mn=(Bn[2],Nn("spotify/play")),Un=Object(x.a)(Mn,3),Wn=Un[0],Hn=(Un[1],Un[2],Object(In.a)(Rn,(function(n){return n}))),Jn=Object(In.a)(An,(function(n){return{q:n}})),Kn=Object(In.a)(Fn,(function(n){var e=Object.assign({},n);return Object(Cn.a)({},e)})),Qn=Object(In.a)(Wn,(function(n){return Object.assign({},n)})),Gn=Object(V.b)((function(n){var e=n.SpotifyReducer,t=n.LoadingReducer,r=n.UserReducer;return Object(Cn.a)(Object(Cn.a)(Object(Cn.a)({},e),r),{},{loading:t})}),r);var Vn,$n=w.b.input(Ln||(Ln=Object(k.a)(["\n  ","\n\n  font-size: 1.75rem;\n  padding: 0.75rem 1rem;\n\n  color: #666;\n  box-sizing: border-box;\n  border-radius: 2rem;\n  border: none;\n  outline: none;\n\n  box-shadow: 2px 2px 10px #ccc;\n\n  &::placeholder {\n    color: #eee;\n  }\n"])),(function(n){return n.block&&Object(w.a)(Tn||(Tn=Object(k.a)(["\n      width: 100%;\n      display: block;\n    "])))})),ne=function(n){return Object(S.jsx)($n,Object(Cn.a)({},n))},ee=(t(93),{msToString:function(n){"string"===typeof n&&(n=parseInt(n));var e=Math.floor(n/1e3/60),t=Math.floor(n/1e3%60);return t<10&&(t="0"+t),"".concat(e,":").concat(t)}});var te,re,ae=w.b.div(Vn||(Vn=Object(k.a)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n\n  padding: 0.75rem 0;\n  cursor: pointer;\n\n  & > .albumart-block {\n    position: relative;\n  }\n\n  & > .albumart-block > .shadow {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 72px;\n    height: 72px;\n\n    background-color: rgba(33, 33, 33, 0.1);\n  }\n\n  & img {\n    width: 72px;\n    height: 72px;\n    margin: 0 1rem 0 0;\n    object-fit: cover;\n  }\n\n  & > .track {\n    flex: 1;\n\n    & > .title {\n      font-size: 16px;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-height: 24px;\n      text-transform: none;\n\n      color: #333;\n    }\n\n    & > .artist {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-height: 16px;\n      text-transform: none;\n\n      color: #555;\n    }\n  }\n\n  & > .duration {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: normal;\n    line-height: 16px;\n    text-transform: none;\n\n    color: #777;\n  }\n"]))),ce=function(n){var e=n.item,t=n.selectPlayItem;return Object(S.jsxs)(ae,{onClick:function(){return t(e)},children:[Object(S.jsxs)("div",{className:"albumart-block",children:[Object(S.jsx)("img",{className:"albumart",src:e.album.images[0].url,alt:"albumarts"}),Object(S.jsx)("div",{className:"shadow"})]}),Object(S.jsx)("span",{}),Object(S.jsxs)("span",{className:"track",children:[Object(S.jsx)("h1",{className:"title",children:e.name}),Object(S.jsx)("h5",{className:"artist",children:e.artists[0].name})]}),Object(S.jsx)("span",{className:"duration",children:ee.msToString(e.duration_ms)})]})};var oe,ie,se=Object(w.c)(te||(te=Object(k.a)(["\n    from {\n        transform: rotateZ(0deg);\n    } to {\n        transform: rotateZ(360deg);\n    }\n"]))),le=w.b.div(re||(re=Object(k.a)(["\n  margin: 0 auto;\n  width: 30px;\n  height: 30px;\n\n  border: 5px solid transparent;\n  border-top: 5px solid ",";\n\n  border-radius: 100%;\n  animation: "," 1s infinite linear;\n"])),(function(n){return n.color?n.color:"#333"}),se),be=function(n){return Object(S.jsx)(le,Object(Cn.a)({},n))};var de,pe,ue,fe,je=w.b.div(oe||(oe=Object(k.a)(["\n  flex: 1;\n\n  box-sizing: border-box;\n  padding: 0 1.75rem;\n\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    display: none; /* Chrome, Safari, Opera*/\n  }\n"]))),he=w.b.div(ie||(ie=Object(k.a)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: center;\n\n  padding: 0.75rem 0;\n  box-sizing: border-box;\n"]))),xe=function(n){var e=n.items,t=n.selectPlayItem,r=n.loading,a=n.refList;return Object(S.jsxs)(je,{ref:a,children:[null===e||void 0===e?void 0:e.map((function(n,e){return Object(S.jsx)(ce,{item:n,selectPlayItem:t},e)})),r&&Object(S.jsx)(he,{children:Object(S.jsx)(be,{})})]})},me=t(20),Oe=t.n(me);var ge,ve,ye,ke=w.b.div(de||(de=Object(k.a)(["\n  display: flex;\n  flex-flow: column;\n\n  position: absolute;\n  bottom: 0;\n  left: calc(50% - 235px);\n\n  z-index: 255;\n\n  width: 470px;\n  height: 470px;\n  border-radius: 1rem 1rem 0 0;\n\n  background: white;\n  transform: translateY(500px);\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n  transition: cubic-bezier(0.24, 0.65, 0.38, 0.88) 0.7s;\n\n  ","\n"])),(function(n){return n.isOn&&Object(w.a)(pe||(pe=Object(k.a)(["\n      transform: translateY(10px);\n    "])))})),we=w.b.div(ue||(ue=Object(k.a)(["\n  width: 100%;\n\n  padding: 0 1.25rem;\n  box-sizing: border-box;\n"]))),Se=w.b.div(fe||(fe=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  width: 100%;\n\n  padding: 1rem 1.25rem;\n  box-sizing: border-box;\n\n  & > img {\n    width: 200px;\n    height: 59.95px;\n  }\n\n  & > span {\n    cursor: pointer;\n\n    font-style: normal;\n    font-weight: 300;\n    font-size: 24px;\n    line-height: 29px;\n    text-transform: uppercase;\n\n    color: #666;\n\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);\n  }\n\n  & > span:hover {\n    color: #333;\n  }\n"]))),_e=Gn((function(n){var e=n.onSearch,t=n.changeSearchState,r=n.getTracks,a=n.appendTracks,c=n.tracks,o=n.selectPlayItem,i=n.loading,s=Object(l.useState)(""),b=Object(x.a)(s,2),d=b[0],p=b[1],u=Object(l.useRef)(null),f=Object(l.useRef)(Object(_n.a)((function(n){""!==n?(console.log("".concat(n,"\ub85c \uc9c0\uae08\uc694\uccad")),r(n),u.current&&u.current.scrollTo({top:0})):console.log("\uc694\uccad \uc548\ud569\ub2c8\ub2e4.")}),1e3)),j=Object(l.useCallback)((function(n){var e=n.target.value;p(e),f.current(e)}),[]),h=Object(l.useCallback)((function(){p(""),t(!1)}),[t]),m=Object(l.useCallback)((function(){if(this.scrollTop>=this.scrollHeight-this.offsetHeight-80&&(console.log("next Query",c),(null===c||void 0===c?void 0:c.next)&&!i[An]&&!i[Fn])){var n=Oe.a.parse(c.next.split("?")[1]);a({q:n.query,offset:n.offset})}}),[c,a,i]),O=Object(l.useRef)(Object(_n.a)(m,300)),g=Object(l.useCallback)((function(){u.current&&u.current.removeEventListener("scroll",O.current),u.current&&(O.current=Object(_n.a)(m,300),u.current.addEventListener("scroll",O.current))}),[m]);return Object(l.useEffect)((function(){g()}),[g]),Object(S.jsxs)(ke,{isOn:e,children:[Object(S.jsxs)(Se,{children:[Object(S.jsx)("img",{src:zn,alt:"Spotify Logo"}),Object(S.jsx)("span",{onClick:h,children:"X"})]}),Object(S.jsx)(we,{children:Object(S.jsx)(ne,{value:d,onChange:j,placeholder:"Search Music",block:!0})}),Object(S.jsx)(xe,{items:null===c||void 0===c?void 0:c.items,selectPlayItem:o,loading:i[An]||i[Fn],refList:u})]})}));var ze,Ce,Ie,Ne,Le,Te,Pe,Re,Ze,Ye,Ae,Ee,Xe,De,Be,Fe=w.b.div(ge||(ge=Object(k.a)(["\n  position: relative;\n  z-index: 13;\n\n  flex: 1;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),qe=w.b.div(ve||(ve=Object(k.a)(["\n  ","\n\n  width: 240px;\n  height: 100px;\n\n  overflow-y: scroll;\n  text-align: center;\n\n  font-size: 12px;\n  line-height: 16px;\n  color: #fff;\n\n  text-shadow: 1px 1px 10px #333;\n  &::-webkit-scrollbar {\n    display: none; /* Chrome, Safari, Opera*/\n  }\n"])),(function(n){return"on"===n.loading&&Object(w.a)(ye||(ye=Object(k.a)(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    "])))})),Me=function(n){return Object(S.jsx)(Fe,{children:n.loading?Object(S.jsx)(be,{}):""!==n.lyrics&&Object(S.jsx)(qe,{dangerouslySetInnerHTML:{__html:n.lyrics},loading:n.loading?"on":"off"})})};var Ue=Object(w.c)(ze||(ze=Object(k.a)(["\n  from {\n    opacity:0;\n    /* transform: rotateZ(-90deg); */\n  } to {\n    opacity:1;\n    transform: translateX(484px);\n    /* transform: rotateZ(0deg); */\n  }\n"]))),We=Object(w.c)(Ce||(Ce=Object(k.a)(["\n  from {\n    opacity:0;\n    transform: rotateZ(0deg);\n  } to {\n    opacity: 1;\n    transform: rotateZ(-90deg);\n  }\n"]))),He=w.b.div(Ie||(Ie=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),Je=w.b.div(Ne||(Ne=Object(k.a)(["\n  width: 100%;\n  height: 2px;\n\n  background-color: #000;\n"]))),Ke=w.b.h2(Le||(Le=Object(k.a)(["\n  font-style: normal;\n  font-weight: normal;\n\n  text-transform: uppercase;\n"]))),Qe=w.b.div(Te||(Te=Object(k.a)(["\n  position: relative;\n  z-index: 10;\n  width: 500px;\n  height: 500px;\n\n  padding: 1rem 0;\n\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n\n  &.left {\n    justify-content: flex-start;\n\n    & > h2 {\n      padding: 0 1rem 0 0;\n      font-size: 64px;\n      line-height: 78px;\n      text-align: right;\n    }\n\n    ","\n  }\n\n  &.right {\n    justify-content: flex-end;\n\n    & > h2 {\n      font-size: 48px;\n      line-height: 59px;\n\n      padding: 0.5rem;\n      color: #999999;\n    }\n\n    ","\n  }\n"])),(function(n){return n.splashOkay&&Object(w.a)(Pe||(Pe=Object(k.a)(["\n        transform-origin: 100% 0%;\n\n        animation: "," 0.7s linear forwards;\n      "])),Ue)}),(function(n){return n.splashOkay&&Object(w.a)(Re||(Re=Object(k.a)(["\n        transform-origin: 0% 100%;\n        animation: "," 0.7s linear forwards;\n      "])),We)})),Ge=w.b.div(Ze||(Ze=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  z-index: 1;\n\n  transform: translateX(-100px) translateY(-56px);\n\n  & > * {\n    text-align: right;\n  }\n"]))),Ve=w.b.h6(Ye||(Ye=Object(k.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 10px;\n  /* identical to box height */\n\n  text-transform: lowercase;\n"]))),$e=w.b.h1(Ae||(Ae=Object(k.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 48px;\n  line-height: 59px;\n  /* identical to box height */\n\n  text-transform: uppercase;\n\n  color: #000000;\n"]))),nt=w.b.div(Ee||(Ee=Object(k.a)(["\n  position: relative;\n\n  width: 500px;\n  height: 500px;\n"]))),et=w.b.div(Xe||(Xe=Object(k.a)(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 500px;\n  height: 500px;\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  overflow: hidden;\n"])),Sn),tt=w.b.div(De||(De=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  height: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background: rgba(196, 196, 196, 0.4);\n"]))),rt=w.b.div(Be||(Be=Object(k.a)(["\n  position: relative;\n\n  width: 210px;\n  height: 500px;\n\n  background: white;\n\n  & > .cdp {\n    position: absolute;\n    top: 125px;\n    left: calc(50% - 70px);\n  }\n"]))),at=function(n){return Object(S.jsxs)(He,{children:[Object(S.jsxs)(Qe,{className:"left",splashOkay:n.splashOkay,children:[Object(S.jsx)(Je,{}),Object(S.jsx)(Ke,{children:"LOOK"})]}),Object(S.jsxs)(nt,{children:[Object(S.jsxs)(Ge,{children:[Object(S.jsx)($e,{children:"Barabom"}),Object(S.jsx)(Ve,{children:"copyright \xa9 iamformegusto"})]}),Object(S.jsxs)(et,{children:[Object(S.jsx)(tt,{}),Object(S.jsx)(rt,{children:Object(S.jsx)(wn,{changeSearchState:n.changeSearchState,item:n.item,refCD:n.refCD})}),Object(S.jsx)(_e,{onSearch:n.onSearch,changeSearchState:n.changeSearchState,selectPlayItem:n.selectPlayItem}),Object(S.jsx)(Me,{loading:n.loading,lyrics:n.lyrics})]})]}),Object(S.jsxs)(Qe,{className:"right",splashOkay:n.splashOkay,children:[Object(S.jsx)(Ke,{children:"ONLY BEAUTY"}),Object(S.jsx)(Je,{})]})]})};var ct=Gn((function(n){var e=n.play,t=n.player,r=n.injectPlayer,a=n.user,c=Object(l.useState)(!1),o=Object(x.a)(c,2),i=o[0],s=o[1],b=Object(l.useState)(null),d=Object(x.a)(b,2),p=d[0],u=d[1],m=Object(l.useState)(!1),g=Object(x.a)(m,2),v=g[0],k=g[1],w=Object(l.useState)(""),_=Object(x.a)(w,2),z=_[0],C=_[1],I=Object(l.useRef)(null),N=Object(l.useState)(!1),L=Object(x.a)(N,2),T=L[0],P=L[1],R=Object(l.useCallback)((function(){P(!0)}),[]);Object(l.useEffect)((function(){if(a){window.onSpotifyWebPlaybackSDKReady=function(){var n="".concat(localStorage.getItem("access_token")),e=new window.Spotify.Player({name:"Web Playback SDK Quick Start Player",getOAuthToken:function(e){e(n)}});e.addListener("player_state_changed",(function(n){console.log(JSON.stringify(n)),I.current&&(n.paused?(I.current.classList.remove("play"),u(null)):I.current.classList.add("play"))})),e.addListener("ready",(function(n){var t=n.device_id;console.log("Ready with Device ID",t),e.device_id=t,r(e)})),e.addListener("not_ready",(function(n){var e=n.device_id;console.log("Device ID is not ready for playback",e)})),e.connect(),e.on("initialization_error",(function(n){var e=n.message;console.error("Failed to initialize",e)})),e.on("authentication_error",(function(n){var e=n.message;console.error("Failed to authenticate",e)})),e.on("account_error",(function(n){var e=n.message;console.error("Failed to validate Spotify account",e)})),e.on("playback_error",(function(n){var e=n.message;console.error("Failed to perform playback",e)}))};var n=document.createElement("script");n.src="https://sdk.scdn.co/spotify-player.js",n.async=!0,document.body.appendChild(n)}}),[r,a]);var Z=Object(l.useCallback)((function(n){s(n)}),[]),Y=Object(l.useCallback)((function(n){k(n)}),[]),A=Object(l.useCallback)(function(){var n=Object(h.a)(f.a.mark((function n(r){var a,c,o,i,l,b;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!1),u(r),Y(!0),n.prev=3,n.next=6,y(r.artists[0].name,r.name);case 6:if(a=n.sent,console.log(a),0!==a.length){n.next=39;break}return n.next=11,d=r.artists[0].name,O.get("".concat("https://musicbrainz.org/ws/2","/artist?query=alias:").concat(d,"&fmt=json"));case 11:if(0===(c=n.sent).data.artists.length){n.next=37;break}console.log(c.data.artists[0].aliases),o=c.data.artists[0].aliases,i=Object(j.a)(o),n.prev=16,i.s();case 18:if((l=i.n()).done){n.next=29;break}return b=l.value,n.next=22,y(b["sort-name"],r.name);case 22:if(a=n.sent,console.log(a),!a.hasOwnProperty("lyrics")){n.next=27;break}return C(a.lyrics.lyrics_body.replaceAll("\n","<br/>")),n.abrupt("break",29);case 27:n.next=18;break;case 29:n.next=34;break;case 31:n.prev=31,n.t0=n.catch(16),i.e(n.t0);case 34:return n.prev=34,i.f(),n.finish(34);case 37:n.next=40;break;case 39:C(a.lyrics.lyrics_body.replaceAll("\n","<br/>"));case 40:n.next=45;break;case 42:n.prev=42,n.t1=n.catch(3),console.error(n.t1);case 45:Y(!1),e({spotify_uri:r.uri,device_id:t.device_id});case 47:case"end":return n.stop()}var d}),n,null,[[3,42],[16,31,34,37]])})));return function(e){return n.apply(this,arguments)}}(),[e,t,Y]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(G,{okaySplash:R}),Object(S.jsx)(at,{onSearch:i,changeSearchState:Z,item:p,selectPlayItem:A,refCD:I,lyrics:z,splashOkay:T,loading:v})]})}));var ot,it=function(){return Object(S.jsx)(ct,{})};var st=w.b.div(ot||(ot=Object(k.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),lt=function(){return Object(S.jsx)(st,{children:Object(S.jsx)(be,{})})};var bt=function(){return Object(S.jsx)(lt,{})},dt="https://accounts.spotify.com",pt=function(n){return O.get("".concat("https://api.spotify.com","/v1/me"),{headers:{Authorization:"Bearer ".concat(n)}})},ut=function(n){return O.post("".concat(dt,"/api/token"),Oe.a.stringify({code:n,grant_type:"authorization_code",redirect_uri:"https://formegusto.github.io/project-barabom/#/auth"}),{headers:{"Content-Type":"application/x-www-form-urlencoded"},auth:{username:"2ec8e7e1e63c4ce699bddec974f14e54",password:"1e89df8c7cd743bc9c3727f0ab779c5b"}})};var ft=function(n){return Object(l.useEffect)((function(){Object(h.a)(f.a.mark((function e(){var t,r,a,c,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Oe.a.parse(n.location.search,{ignoreQueryPrefix:!0}),r=t.code,e.prev=1,e.next=4,ut(r);case 4:a=e.sent,console.log(a),c=a.data,o=c.access_token,i=c.refresh_token,localStorage.setItem("access_token",o),localStorage.setItem("refresh_token",i),setTimeout((function(){window.location.href="/project-barabom"}),3e3),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()})),Object(S.jsx)(bt,{})};var jt=function(n){return console.log(),Object(l.useEffect)((function(){"/%2Fauth"===n.location.pathname&&(window.location.href="".concat("https://formegusto.github.io/project-barabom/#/auth").concat(window.location.search))})),Object(S.jsx)(S.Fragment,{})};var ht,xt,mt,Ot=function(){return Object(S.jsxs)(p.c,{children:[Object(S.jsx)(p.a,{path:"/",component:it,exact:!0}),Object(S.jsx)(p.a,{path:"/auth",component:ft,exact:!0}),Object(S.jsx)(p.a,{component:jt})]})},gt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,109)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),c(n),o(n)}))},vt=t(21),yt=t(15),kt=t(107),wt=t(23),St=Object(kt.a)((ht={},Object(yt.a)(ht,Rn,(function(n,e){return Object(wt.a)(n,(function(n){n.player=e.payload}))})),Object(yt.a)(ht,qn,(function(n,e){return Object(wt.a)(n,(function(n){var t;n.tracks=Object(Cn.a)(Object(Cn.a)({},e.payload.tracks),{},{items:null===(t=n.tracks)||void 0===t?void 0:t.items.concat(e.payload.tracks.items)})}))})),Object(yt.a)(ht,En,(function(n,e){return Object(wt.a)(n,(function(n){n.tracks=e.payload.tracks}))})),Object(yt.a)(ht,Xn,(function(n){return Object(wt.a)(n,(function(n){n.tracks=null}))})),ht),{tracks:null,player:null}),_t="loading/start",zt="loading/finish",Ct=Object(kt.a)((xt={},Object(yt.a)(xt,_t,(function(n,e){return Object(Cn.a)(Object(Cn.a)({},n),{},Object(yt.a)({},e.payload,!0))})),Object(yt.a)(xt,zt,(function(n,e){return Object(Cn.a)(Object(Cn.a)({},n),{},Object(yt.a)({},e.payload,!1))})),xt),{}),It=Nn("users/get"),Nt=Object(x.a)(It,3),Lt=Nt[0],Tt=Nt[1],Pt=Nt[2],Rt=Object(kt.a)((mt={},Object(yt.a)(mt,Tt,(function(n,e){return Object(wt.a)(n,(function(n){n.user=e.payload}))})),Object(yt.a)(mt,Pt,(function(n,e){return Object(wt.a)(n,(function(n){n.error=e.payload}))})),mt),{user:null,error:null}),Zt=Object(vt.combineReducers)({SpotifyReducer:St,LoadingReducer:Ct,UserReducer:Rt}),Yt=t(61),At=t(63),Et=t(11),Xt=Object(In.a)(_t,(function(n){return n})),Dt=Object(In.a)(zt,(function(n){return n}));function Bt(n,e){var t="".concat(n,"/success"),r="".concat(n,"/failure");return f.a.mark((function a(c){var o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Et.c)(Xt(n));case 2:return a.prev=2,a.next=5,Object(Et.b)(e,c.payload);case 5:return o=a.sent,a.next=8,Object(Et.c)({type:t,payload:o.data});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(2),a.next=14,Object(Et.c)({type:r,payload:a.t0,error:!0});case 14:return a.next=16,Object(Et.c)(Dt(n));case 16:case"end":return a.stop()}}),a,null,[[2,10]])}))}var Ft="https://api.spotify.com",qt=function(n){var e=n.q,t=n.offset,r=void 0===t?1:t;return O.get("".concat(Ft,"/v1/search?").concat(Oe.a.stringify({query:e,type:"track",market:"US",limit:10,offset:r})),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}})},Mt=f.a.mark(Jt),Ut=Bt(An,qt),Wt=Bt(Fn,qt),Ht=Bt(Wn,(function(n){var e=n.spotify_uri,t=n.device_id;return O.put("".concat(Ft,"/v1/me/player/play?").concat(Oe.a.stringify({device_id:t})),{uris:[e]},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token")),"Content-Type":"application/json"}})}));function Jt(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Et.d)(An,Ut);case 2:return n.next=4,Object(Et.d)(Wn,Ht);case 4:return n.next=6,Object(Et.d)(Fn,Wt);case 6:case"end":return n.stop()}}),Mt)}var Kt=f.a.mark(Gt),Qt=f.a.mark(Vt);function Gt(n){var e,t,r,a,c;return f.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(Et.c)(Xt(Lt));case 2:return o.prev=2,o.next=5,pt(n.payload.access_token);case 5:return e=o.sent,o.next=8,Object(Et.c)({type:Tt,payload:e.data});case 8:o.next=36;break;case 10:if(o.prev=10,o.t0=o.catch(2),"The access token expired"!==o.t0.response.data.error.message){o.next=36;break}if(o.prev=14,"undefined"!==n.payload.refresh_token){o.next=17;break}throw new Error("Need a New Login");case 17:return o.next=19,i=n.payload.refresh_token,O.post("".concat(dt,"/api/token"),Oe.a.stringify({grant_type:"refresh_token",refresh_token:i,client_id:"2ec8e7e1e63c4ce699bddec974f14e54"}),{headers:{"Content-Type":"application/x-www-form-urlencoded"},auth:{username:"2ec8e7e1e63c4ce699bddec974f14e54",password:"1e89df8c7cd743bc9c3727f0ab779c5b"}});case 19:return t=o.sent,r=t.data,a=r.access_token,c=r.refresh_token,localStorage.setItem("access_token",a),localStorage.setItem("refresh_token",c),o.next=25,pt(a);case 25:return t=o.sent,o.next=28,Object(Et.c)({type:Tt,payload:t.data});case 28:o.next=36;break;case 30:return o.prev=30,o.t1=o.catch(14),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),o.next=36,Object(Et.c)({type:Pt,payload:o.t1,error:!0});case 36:return o.prev=36,o.next=39,Object(Et.c)(Dt(Lt));case 39:return o.finish(36);case 40:case"end":return o.stop()}var i}),Kt,null,[[2,10,36,40],[14,30]])}function Vt(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Et.d)(Lt,Gt);case 2:case"end":return n.stop()}}),Qt)}var $t=f.a.mark(nr);function nr(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Et.a)([Jt(),Vt()]);case 2:case"end":return n.stop()}}),$t)}var er=Object(In.a)(Lt,(function(n){return n})),tr=t(62),rr=Object(At.a)(),ar=Object(vt.createStore)(Zt,Object(Yt.composeWithDevTools)(Object(vt.applyMiddleware)(rr)));rr.run(nr);!function(){var n=localStorage.getItem("access_token"),e=localStorage.getItem("refresh_token");n&&e&&ar.dispatch(er({access_token:n,refresh_token:e}))}(),d.a.render(Object(S.jsx)(V.a,{store:ar,children:Object(S.jsx)(tr.a,{children:Object(S.jsx)(Ot,{})})}),document.getElementById("root")),gt()},68:function(n,e,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.8103e7f7.chunk.js.map