(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(1),o=(r(0),r(322));const a={title:"mlRecommend"},l={id:"batchpipeline/workflow/workspace/job-processing/ml-recommend",title:"mlRecommend",description:"### Definition\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\job-processing\\ml-recommend.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/ml-recommend",sidebar:"batchpipeline",previous:{title:"mlPredict",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/ml-predict"},next:{title:"mlTrain",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/ml-train"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],i={rightToc:c};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"ML Modeler\uc11c\ube44\uc2a4\uc5d0\uc11c \uae30 \uc800\uc7a5\ub41c \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucd94\ucc9c \uc791\uc5c5\uc744 \uc2e4\ud589\ud55c\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[mlRecommend]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow013_mlrecommend_property.png",alt:"flow013"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"master : mlRecommend \uc2e4\ud589\ud560 master \uc120\ud0dd (yarn-cluster, yarn-client, local \uc911 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"name : appName\uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"useTrainNodeModel : \uc5f0\uacb0\ub41c mlTrain \ub178\ub4dc\uc758 \ud559\uc2b5\uacb0\uacfc \ubaa8\ub378 \uc0ac\uc6a9 \uc5ec\ubd80"),Object(o.b)("li",{parentName:"ol"},"modelPath : \ubaa8\ub378 \uacbd\ub85c (\ud31d\uc5c5\uc5f4\uae30 : HDFS, S3 File browser \ud31d\uc5c5\uc5d0\uc11c \ubaa8\ub378 \uacbd\ub85c\ub97c \uc120\ud0dd, ml model \ubd88\ub7ec\uc624\uae30 : \uae30\uc874\uc5d0 \ub4f1\ub85d\ub41c model\uc744 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"modelPathcredential : modelPath\uac00 s3\uc778 \uacbd\uc6b0 credential \uc815\ubcf4 (modelPath \uc124\uc815 \uc2dc \uc790\ub3d9\uc14b\ud305\ub428)"),Object(o.b)("li",{parentName:"ol"},"savePath: \uc800\uc7a5\ud560 \uacbd\ub85c \uc120\ud0dd (HDFS, S3 File browser\uc744 \uc81c\uacf5-\ud31d\uc5c5\uc5d0\uc11c \ud574\ub2f9 \uacbd\ub85c\ub97c \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"savePathcredential : savePath\uac00 s3\uc778 \uacbd\uc6b0 credential \uc815\ubcf4 (savePath \uc124\uc815 \uc2dc \uc790\ub3d9\uc14b\ud305\ub428)"),Object(o.b)("li",{parentName:"ol"},"saveDataSetFormat : \uc800\uc7a5\ud560 \ub370\uc774\ud130\uc14b \ud3ec\ub9f7 \uc120\ud0dd (parquet, csv, orc \uc911 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"saveDataSetDelimiter : \uc800\uc7a5\ud560 \ub370\uc774\ud130\uc14b \uad6c\ubd84\uc790 \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"saveDataSetHeaderExists : \uc800\uc7a5\ud560 \ub370\uc774\ud130\uc14b header\uac00 \uc788\ub294\uc9c0 \uc5ec\ubd80 (TRUE, FALSE \uc911 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"recommendType : \ucd94\ucc9c \uc720\ud615 \uc120\ud0dd (recommendForAllUsers \uc0ac\uc6a9\uc790\ubcc4 \uc0c1\ud488 \ucd94\ucc9c, recommendForAllItems \uc0c1\ud488\ubcc4 \uc0ac\uc6a9\uc790 \ucd94\ucc9c \uc911 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"numRecommends : \ucd94\ucc9c\ud560 \ud56d\ubaa9 \uc218 \uc785\ub825 "),Object(o.b)("li",{parentName:"ol"},"userCol : user \uceec\ub7fc \uc124\uc815 (\uc800\uc7a5\ud560 \ub370\uc774\ud130\uc758 \uc0ac\uc6a9\uc790 id \uc800\uc7a5 \uceec\ub7fc\uba85 \uc785\ub825)"),Object(o.b)("li",{parentName:"ol"},"itemCol : item \uceec\ub7fc \uc124\uc815 (\uc800\uc7a5\ud560 \ub370\uc774\ud130\uc758 \uc0c1\ud488 id \uc800\uc7a5 \uceec\ub7fc\uba85 \uc785\ub825)"),Object(o.b)("li",{parentName:"ol"},"predRatingCol : \uc800\uc7a5\ud560 \ub370\uc774\ud130\uc758 rating \uc608\uce21 \uceec\ub7fc\uba85 \uc785\ub825 "),Object(o.b)("li",{parentName:"ol"},"sparkOpts : spark \uc635\uc158 \ub9ac\uc2a4\ud2b8 \uc785\ub825 (key : --executor-memory , value : 20G)"),Object(o.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328\uc2dc \uac15\uc81c OK \ucc98\ub9ac\uc5ec\ubd80")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("h4",{id:"property-1"},"Property"),Object(o.b)("p",null,"HDFS \ubd80\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\ub294 \uc608\uc2dc\uc785\ub2c8\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow013_mlrecommend_example.png",alt:"flow013"}))),Object(o.b)("h4",{id:"\uc2e4\ud589-\uacb0\uacfc"},"\uc2e4\ud589 \uacb0\uacfc"),Object(o.b)("p",null,"\ube0c\ub77c\uc6b0\uc800 > HDFS \ube0c\ub77c\uc6b0\uc800 \uc5d0\uc11c mlRecommend \uc2e4\ud589 \uacb0\uacfc\ub85c \uc800\uc7a5\ub41c \ub370\uc774\ud130\uc14b\uc744 \ud655\uc778 \ud560 \uc218 \uc788\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow013_mlrecommend_result.png",alt:"flow013"}))))}p.isMDXComponent=!0},322:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=m(r),d=n,u=b["".concat(l,".").concat(d)]||b[d]||s[d]||a;return r?o.a.createElement(u,c({ref:t},p,{components:r})):o.a.createElement(u,c({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);