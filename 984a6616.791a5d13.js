(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{263:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(1),i=(t(0),t(364));const o={title:"standardScaler"},a={id:"pipeline/workflow/workspace/feature-engineering/standardScaler",title:"standardScaler",description:"### Definition\r",source:"@site/docs\\pipeline\\workflow\\workspace\\feature-engineering\\standardScaler.md",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/standardScaler",sidebar:"pipeline",previous:{title:"outlierRemover",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/outlierRemover"},next:{title:"maxAbsScaler",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/maxAbsScaler"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]}],p={rightToc:c};function l({components:e,...r}){return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"\uac01 Feature\uc758 \ud3c9\uade0\uc744 0 \ubd84\uc0b0\uc744 1\ub85c\ub9cc\ub4dc\ub294 \uc2a4\ud0e0\ub2e4\ub4dc \uc2a4\ucf00\uc77c\ub7ec \ub178\ub4dc\uc785\ub2c8\ub2e4. \uc88c\uce21 ","[\ud53c\ucc98\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1]","\uc5d0\uc11c ","[standardScaler]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. "),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"Property"),Object(i.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.  "),Object(i.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/standardScaler001.png",width:"300px",height:"400px"}),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"col : \ub300\uc0c1 \uceec\ub7fc\ub4e4 \uc120\ud0dd(\uc22b\uc790\ud615 \uceec\ub7fc\ub9cc \uc9c0\uc6d0)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"withMean : \ud3c9\uade0\uac12\uc774 0\uc73c\ub85c \ub418\ub3c4\ub85d \uc2a4\ucf00\uc77c\ub9c1")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"withStandard : \ud45c\uc900\ud3b8\ucc28\ub85c \uc2a4\ucf00\uc77c\ub9c1"))))}l.isMDXComponent=!0},364:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return d}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var r=i.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},f=function(e){var r=u(e.components);return i.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=u(t),b=n,d=f["".concat(a,".").concat(b)]||f[b]||s[b]||o;return t?i.a.createElement(d,c({ref:r},l,{components:t})):i.a.createElement(d,c({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=b;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);