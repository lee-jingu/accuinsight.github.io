(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{273:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(1),r=(a(0),a(364));const i={title:"dataJoin"},c={id:"pipeline/workflow/workspace/data-processing-basic/data-join",title:"dataJoin",description:"### Definition\r",source:"@site/docs\\pipeline\\workflow\\workspace\\data-processing-basic\\data-join.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/data-join",sidebar:"pipeline",previous:{title:"crosstab",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/crosstab"},next:{title:"distinct",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/distinct"}},o=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],b={rightToc:o};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"definition"},"Definition"),Object(r.b)("p",null,"2\uac1c \uc774\uc0c1\uc758 \ub178\ub4dc\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c Join\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4.",Object(r.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[dataJoin]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4. "),Object(r.b)("h3",{id:"set"},"Set"),Object(r.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(r.b)("h4",{id:"property"},"Property"),Object(r.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic014_datajoin_property.png",alt:"prebasic014"}))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"col1 : \uccab \ubc88\uc9f8 \ub178\ub4dc \uae30\uc900 \uceec\ub7fc \uc120\ud0dd ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"col2 : \ub450 \ubc88\uc9f8 \ub178\ub4dc \uae30\uc900 \uceec\ub7fc \uc120\ud0dd  ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"how : join \uc720\ud615 \uc120\ud0dd  "),Object(r.b)("table",{parentName:"li"},Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"join\uc720\ud615"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\uc124\uba85"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"inner"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\uc870\uc778 \uc870\uac74\uc5d0 \ub9de\ub294 \ud589\ub9cc \uac80\uc0c9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"outer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\uc870\uc778 \ud0a4\uc5d0 \ub300\uc751\ub418\ub294 row\uac00 \uc5c6\ub294 \uacbd\uc6b0 null\ub85c \ucd94\ucd9c")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"left_outer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"col1\uc5d0\uc11c \uc120\ud0dd\ud55c \uc870\uc778 \ud0a4\uc5d0 \ub300\uc751\ub418\ub294 row\uac00 \uc5c6\ub294 \uacbd\uc6b0 null\ub85c \ucd94\ucd9c")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"right_outer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"col2\uc5d0\uc11c \uc120\ud0dd\ud55c \uc870\uc778 \ud0a4\uc5d0 \ub300\uc751\ub418\ub294 row\uac00 \uc5c6\ub294 \uacbd\uc6b0 null\ub85c \ucd94\ucd9c")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"left_semi"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\uc791\uc131\ud544\uc694")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"left_anti"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\uc791\uc131\ud544\uc694")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cross"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ub450 \ub178\ub4dc\uc758 \uce74\ud2f0\uc158 \ud504\ub85c\ub355\ud2b8(\uacf1\uc9d1\ud569)\uacb0\uacfc\ub97c \ucd94\ucd9c"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"cleanColumns : \uc18c\uc2a4\ud14c\uc774\ube14 \uad6c\ubd84\uc744 \uc704\ud55c \ud0dc\uadf8\uc81c\uac70 \ubc0f \uc911\ubcf5 key \uceec\ub7fc \uc81c\uac70"))),Object(r.b)("h4",{id:"suggestion"},"Suggestion"),Object(r.b)("p",null,"\ub370\uc774\ud130 Join\uc5d0 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \uceec\ub7fc\uc744 Pipeline\uc5d0\uc11c \uc81c\uc2dc\ud569\ub2c8\ub2e4. \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uad6c\uc131 \ud6c4 Property \ud56d\ubaa9\uc758 ","[Suggestion]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec, \uceec\ub7fc\uac04 \uc720\uc0ac\ub3c4\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic015_datajoin_suggestion.png",alt:"prebasic015"})),"\n1. Similarity : \uc0d8\ud50c\ub9c1\ud55c \ub370\uc774\ud130\uc758 \uc720\uc0ac\ub3c4. \uc801\uc6a9\uc2dc \uc804\uccb4 \ub370\uc774\ud130 \uc720\uc0ac\ub3c4 \ud655\uc778\uac00\ub2a5",Object(r.b)("br",{parentName:"p"}),"\n","2. \uc801\uc6a9 : Join\ub300\uc0c1 \uceec\ub7fc \ud655\uc778 \ud6c4 \uc801\uc6a9\ubc84\ud2bc \ud074\ub9ad\uc2dc Property \ud56d\ubaa9\uc758 col1, col2\uc5d0 \uc790\ub3d9\uc785\ub825"),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("p",null,"\uc0c1\ud488\uc815\ubcf4\uc640 \uc8fc\ubb38\uc815\ubcf4 \ub370\uc774\ud130\ub97c goods_id \uceec\ub7fc\uc73c\ub85c \uc870\uc778\ud569\ub2c8\ub2e4. \ubd84\uc11d\uac00\uac00 \uc9c1\uc811 \uc9c0\uc815\ud560 \uc218\ub3c4 \uc788\uace0, ","[suggestion]","\uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.  "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[select]",", ","[dataJoin]","\ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(r.b)("br",{parentName:"li"}),Object(r.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic016_datajoin_exampleworkflow.png",alt:"prebasic016"}))," "),Object(r.b)("li",{parentName:"ol"},"[dataJoin]","\ub178\ub4dc col1, col2\uc5d0\uc11c goods_id \uc120\ud0dd. \ub610\ub294 ","[Suggest]"," \ud074\ub9ad \ud6c4 goods_id \ud56d\ubaa9 ","[\uc801\uc6a9]",Object(r.b)("br",{parentName:"li"}),Object(r.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic017_datajoin_exampleworkflow_similarity.png",alt:"prebasic017"}))," "),Object(r.b)("li",{parentName:"ol"},"[dataJoin]","\ub178\ub4dc how\uc5d0\uc11c inner \uc120\ud0dd \ud6c4 snapshot\ubc84\ud2bc \uc120\ud0dd\ud558\uc5ec \uc870\uc778\uacb0\uacfc \ud655\uc778\n",Object(r.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic018_datajoin_exampleworkflow_%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"prebasic018"})))))}l.isMDXComponent=!0},364:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(a),j=n,d=s["".concat(c,".").concat(j)]||s[j]||O[j]||i;return a?r.a.createElement(d,o({ref:t},l,{components:a})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=j;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);