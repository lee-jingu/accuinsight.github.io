(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{315:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return p})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(2),i=r(6),o=(r(0),r(378)),a={title:"PCA"},p={id:"pipeline/workflow/workspace/feature-engineering/PCA",isDocsHomePage:!1,title:"PCA",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/feature-engineering/PCA.md",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/PCA",sidebar:"pipeline",previous:{title:"bucketizer",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/bucketizer"},next:{title:"ICOS \ub0b4\ubcf4\ub0b4\uae30",permalink:"/docs/pipeline/workflow/workspace/export-data/icos"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function u(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"\uace0\ucc28\uc6d0\uc758 \ub370\uc774\ud130\ub97c \uc800\ucc28\uc6d0\uc758 \ub370\uc774\ud130\ub85c \ud658\uc6d0(principal component analysis)\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4. \uc88c\uce21 ","[\ud53c\ucc98\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1]","\uc5d0\uc11c ","[PCA]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. "),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"Property"),Object(o.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.  "),Object(o.b)("p",null,Object(o.b)("img",Object(t.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/feature-engineering/PCA001.png",alt:"PCA001"}))),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"col : \uc801\uc6a9\ud560 column \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"prefixNewColumns : PCA \uacb0\uacfc \uceec\ub7fc\ub4e4 \uba85 \uc55e\uc5d0 \ubd99\uc744 prefix ex) pca_1, pca_2 .."),Object(o.b)("li",{parentName:"ol"},"\uc8fc\uc131\ubd84\uc758 \ucc28\uc6d0\uc218 (col\uc758 \ucc28\uc6d0\uc218\ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc740 \uc218)")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"[ICOS\ubd88\ub7ec\uc624\uae30]",", ","[PCA]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131"),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/PCA002.png"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"PCA\ub97c \uc801\uc6a9\ud560 \ub300\uc0c1 \uceec\ub7fc(Col)\uc744 \ub9e8 \uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc774 \uc22b\uc790\ud615\ub370\uc774\ud130 \uceec\ub7fc\uc744 \uc120\ud0dd, 'prefixNewColumns'\ub97c 'pca_1, pca_2, pca_3' \uc73c\ub85c \uc785\ub825 \ud6c4 k\ub97c '3'\uc73c\ub85c \uc785\ub825(5\uac1c\uc758 feature\ub97c 3\ucc28\uc6d0\uc73c\ub85c \ucd95\uc18c)\ud6c4, \uc2e4\ud589 \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc74c -> \uc0c8 \uceec\ub7fc \ucd95\uc18c\ub41c \ucc28\uc6d0 'pca_1, pca_2, pca_3'\uac00 \ucd94\uac00"))),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/PCA003.png"}),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/PCA004.png",width:"300px",height:"400px"}))}u.isMDXComponent=!0},378:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return m}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},b=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),s=t,m=b["".concat(a,".").concat(s)]||b[s]||f[s]||o;return r?i.a.createElement(m,p(p({ref:n},l),{},{components:r})):i.a.createElement(m,p({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);