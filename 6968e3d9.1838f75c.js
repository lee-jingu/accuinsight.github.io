(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{204:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return l})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return u}));var t=n(2),i=n(6),o=(n(0),n(378)),a={title:"normalizer"},l={id:"pipeline/workflow/workspace/feature-engineering/normalizer",isDocsHomePage:!1,title:"normalizer",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/feature-engineering/normalizer.md",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/normalizer",sidebar:"pipeline",previous:{title:"robustScaler",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/robustScaler"},next:{title:"treeSelector",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/treeSelector"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:c};function u(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"\uc120\ud0dd\ub41c \uceec\ub7fc(\ub4e4)\uc744 \uc815\uaddc\ud654\ud558\ub294 \ub178\ub4dc\uc774\uace0 \uac01\ud589\uc774 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2dc\ud589\ub429\ub2c8\ub2e4. (each vector(row) indivisually) \uc88c\uce21 ","[\ud53c\ucc98\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1]","\uc5d0\uc11c ","[normalizer]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.\nComponents \ud328\ub110\uc758 \ud0ed\ubcc4 \ud56d\ubaa9\uc5d0\uc11c ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"Property"),Object(o.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.  "),Object(o.b)("p",null,Object(o.b)("img",Object(t.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/feature-engineering/normalizer001.png",alt:"normalizer001"}))),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"col : \uc801\uc6a9\ud560 column \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"newColumn : output \uceec\ub7fc \uba85"),Object(o.b)("li",{parentName:"ol"},"norm : Unit Norm \uc885\ub958 \uc120\ud0dd",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"L1 : L1 norm"),Object(o.b)("li",{parentName:"ul"},"L2 : L2 norm"),Object(o.b)("li",{parentName:"ul"},"L infinity : L infinity norm")))),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"[ICOS\ubd88\ub7ec\uc624\uae30]",", ","[normalizer]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131"),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/normalizer002.png"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"normalizer\ub97c \uc801\uc6a9\ud560 \ub300\uc0c1 \uceec\ub7fc(col)\uc744 'price'\ub85c \uc120\ud0dd, 'newColumn'\uba85\uc744 \uc785\ub825 \ud6c4 norm\uc744 L2 norm\uc73c\ub85c \uc124\uc815 \ud6c4 \uc2e4\ud589 \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc74c -> price\uceec\ub7fc\uc758 \uac12\uc744 normal\ud654 \ud558\uc5ec 'normal_price' \uceec\ub7fc\uc5d0 \ucd94\uac00\ud55c\ub2e4."),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/normalizer003.png"}))))}u.isMDXComponent=!0},378:function(e,r,n){"use strict";n.d(r,"a",(function(){return m})),n.d(r,"b",(function(){return s}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var r=i.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},m=function(e){var r=u(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},f=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=t,s=m["".concat(a,".").concat(f)]||m[f]||b[f]||o;return n?i.a.createElement(s,l(l({ref:r},p),{},{components:n})):i.a.createElement(s,l({ref:r},p))}));function s(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);