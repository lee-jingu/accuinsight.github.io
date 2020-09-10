(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),l=n(6),a=(n(0),n(378)),c={title:"AutoML"},o={id:"modeler/management/automl",isDocsHomePage:!1,title:"AutoML",description:"Accu.Tuning \uac1c\uc694",source:"@site/docs/modeler/management/automl.md",permalink:"/docs/modeler/management/automl",sidebar:"modeler",previous:{title:"\ubc30\ud3ec",permalink:"/docs/modeler/management/deploy"},next:{title:"AutoDL",permalink:"/docs/modeler/management/autodl"}},i=[{value:"Accu.Tuning \uac1c\uc694",id:"accutuning-\uac1c\uc694",children:[{value:"1. Accu.Tuning \uc18c\uac1c \ubc0f \uc8fc\uc694\uae30\ub2a5",id:"1-accutuning-\uc18c\uac1c-\ubc0f-\uc8fc\uc694\uae30\ub2a5",children:[]},{value:"2. \ucc38\uace0",id:"2-\ucc38\uace0",children:[]}]},{value:"Experimemts",id:"experimemts",children:[{value:"1. \uc0c8 Experiment \ub9cc\ub4e4\uae30",id:"1-\uc0c8-experiment-\ub9cc\ub4e4\uae30",children:[]}]},{value:"Overview",id:"overview",children:[{value:"1. AutoML \uc635\uc158 \uc124\uc815\ud558\uae30",id:"1-automl-\uc635\uc158-\uc124\uc815\ud558\uae30",children:[]},{value:"2. \ub370\uc774\ud130 \ubd84\ud3ec \ud655\uc778 \ud655\uc778\ud558\uae30",id:"2-\ub370\uc774\ud130-\ubd84\ud3ec-\ud655\uc778-\ud655\uc778\ud558\uae30",children:[]}]},{value:"Preprocess",id:"preprocess",children:[]},{value:"Leaderboard",id:"leaderboard",children:[]},{value:"Deployment",id:"deployment",children:[{value:"1. Model \uc815\ubcf4 \ud655\uc778\ud558\uae30",id:"1-model-\uc815\ubcf4-\ud655\uc778\ud558\uae30",children:[]},{value:"2. Model\uc744 \ub0b4\ub824\ubc1b\uc544 \uc0ac\uc6a9\ud558\uae30",id:"2-model\uc744-\ub0b4\ub824\ubc1b\uc544-\uc0ac\uc6a9\ud558\uae30",children:[]}]}],b={rightToc:i};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"accutuning-\uac1c\uc694"},"Accu.Tuning \uac1c\uc694"),Object(a.b)("h3",{id:"1-accutuning-\uc18c\uac1c-\ubc0f-\uc8fc\uc694\uae30\ub2a5"},"1. Accu.Tuning \uc18c\uac1c \ubc0f \uc8fc\uc694\uae30\ub2a5"),Object(a.b)("p",null,"Accu.Tuning\uc740 Parameter  \ud568\uaed8 \ucf54\ub529 \uc5c6\uc774\ub3c4 \uc790\ub3d9\uc73c\ub85c \ucd5c\uc801\uc758 \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc744 \ucc3e\uc544\ubcf4\uc138\uc694. \ub370\uc774\ud130 \ubd84\uc11d \uc804\ubb38\uac00\uac00 \uc544\ub2c8\ub354\ub77c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 Accu.Tuning\uc744 \ud1b5\ud574 \ub2e4\uc591\ud55c \uc54c\uace0\ub9ac\uc998\uacfc \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130\ub97c \ube60\ub974\uac8c \uc801\uc6a9\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubcf5\uc7a1\ud55c \ub370\uc774\ud130 \ubd84\uc11d\uc5d0 \uc18c\uc694\ub418\ub294 \uc2dc\uac04\uc740 \uc904\uc774\uace0, \ubd84\uc11d \uc131\ub2a5\uc740 \ub192\uc5ec\ubcf4\uc138\uc694. TPOT, Auto-sklearn \ub4f1 \ub2e4\uc591\ud55c \uc624\ud508\uc18c\uc2a4 AutoML \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uad50\ucc28 \ud65c\uc6a9\ud558\uc5ec \uadf8 \uc131\ub2a5\uc744 \ub192\uc774\uace0, \ub2e4\uc591\ud55c \uc0b0\uc5c5\uad70\uacfc \ud68c\uadc0\xb7\ubd84\ub958 \ub4f1 \uc5b4\ub290 \uc608\uce21 \ubaa9\uc801\uc5d0\ub3c4 \uc801\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ubd84\uc11d\uc774 \ub05d\ub09c \ubaa8\ub378\ub3c4 AccuInsight+\ub098 Scikit-Learn \ub4f1\uc73c\ub85c \ube60\ub974\uac8c \ubc30\ud3ec\ud558\uc5ec, \uc27d\uac8c \uac00\uacf5\ud558\uace0 \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,"(1) Preprocessor : \ub0b4 \ub370\uc774\ud130\uc5d0\uc11c \uacb0\uce21\uac12 \ucc98\ub9ac,\n\ub77c\ubca8\ub9c1 \ub4f1 \ubcf5\uc7a1\ud55c \uc804\ucc98\ub9ac \uacfc\uc815\uc744 \uac04\ud3b8\ud558\uac8c \ucc98\ub9ac\ud558\uace0 AutoML\uc5d0 \ub9de\ub294\n\ub370\uc774\ud130\uc14b\uc744 \uc790\ub3d9\uc73c\ub85c \uad6c\uc131\ud574\ubcf4\uc138\uc694."),Object(a.b)("p",null,"(2) Modeler : \uc815\uc758\ud55c \ubb38\uc81c\uc5d0 \ub530\ub77c TPOT, Auto-sklearn \ub4f1 \uc624\ud508\uc18c\uc2a4 AutoML\n\ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc774\uc6a9\ud55c \ucd5c\uc801\uc758 \ubaa8\ub378\uacfc \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130\ub97c \ucc3e\uace0,\nAPI\ub97c \ud1b5\ud574 AccuInsight+ \ub4f1\uc73c\ub85c \ubc14\ub85c \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,"(3) Deploy : \uad6c\uc131\ub41c \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\ub4e4\uc758 \uc131\ub2a5\uc744 \ub2e4\uc591\ud55c \uc9c0\ud45c\ub85c \ube44\uad50\ud558\uc5ec\n\ucd5c\uc801\uc758 \ubaa8\ub378\uc744 \uc120\uc815\ud558\uace0, \uc124\uba85 \uac00\ub2a5\ud55c AI \uae30\uc220\uc744 \ud1b5\ud574\n\ub0b4 \ubaa8\ub378\uc758 \uc758\ubbf8\uac00 \ubb34\uc5c7\uc778\uc9c0 \ud30c\uc545\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."),Object(a.b)("h3",{id:"2-\ucc38\uace0"},"2. \ucc38\uace0"),Object(a.b)("p",null,"Accu.Tuning\uc740 hyperparameter \ucd5c\uc801\ud654 \uc5d4\uc9c4\uc73c\ub85c Optuna\ub97c \uc0ac\uc6a9\ud558\uc600\uc73c\ubbc0\ub85c Optuna\uc5d0 \ub300\ud55c \uae30\ubcf8 \uc9c0\uc2dd\uc774 \uc788\uc73c\uba74 \ub9e4\ub274\uc5bc\uc744 \uc774\ud574\ud558\ub294\ub370 \ub9ce\uc740 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),Object(a.b)("p",null,"Optuna Document\ub294 \uc544\ub798\uc758 \uacbd\ub85c\ub97c \ucc38\uace0 \ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://optuna.org/"}),"https://optuna.org/")),Object(a.b)("h2",{id:"experimemts"},"Experimemts"),Object(a.b)("p",null,"Experiment\ub780, \uc0ac\uc6a9\uc790\uac00 \ubd84\uc11d\ud558\uace0 \uc2f6\uc740 \ud558\ub098\uc758 \uacfc\uc81c\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. \ud55c Experiment\uc5d0\ub294 \ud558\ub098\uc758 Data Source\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/modeler/management/AutoML/experiment.png",alt:"source"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\uc0c8\ub85c\uc6b4 \uc2e4\ud5d8\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ud604\uc7ac \uc0dd\uc131\ub418\uc5b4 \uc788\ub294 \uc2e4\ud5d8\ud56d\ubaa9\ub4e4\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uc0dd\uc131\ub41c \uc2e4\ud5d8\uc744 \uc2dc\uc791/\uc815\uc9c0/\uc0ad\uc81c \ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(a.b)("h3",{id:"1-\uc0c8-experiment-\ub9cc\ub4e4\uae30"},"1. \uc0c8 Experiment \ub9cc\ub4e4\uae30"),Object(a.b)("p",null,"\uc0ac\uc6a9\uc790\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \ub370\uc774\ud130 \ud30c\uc77c\uc744 Accu.Tuning\uc73c\ub85c \uc5c5\ub85c\ub4dc \ud799\ub2c8\ub2e4. \ub610\ud55c From the URL \ud56d\ubaa9\uc744 \ud1b5\ud574 AccuInsight+\uc758 \ub370\uc774\ud130\ub97c \uc5c5\ub85c\ub4dc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/modeler/management/AutoML/new_experiment.png",alt:"source"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\uc0c8\ub85c\uc6b4 \uc2e4\ud5d8\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uc0ac\uc804\uc5d0 \ub9cc\ub4e4\uc5c8\uc5c8\ub358 \ud30c\uc77c\ub4e4\ub85c \uc2e4\ud5d8\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uc0c8\ub85c\uc6b4 \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc \ud558\uc5ec \uc2e4\ud5d8\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Overview \ud0ed\uc5d0\uc11c Estimator type, target \ub4f1\uc758 \ubd84\uc11d \uc124\uc815\uc744 \uc218\ud589\ud558\uace0, Source Preview\uc640 Source Columns \uc5d0\uc11c \ub370\uc774\ud130 \ubd84\ud3ec\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),Object(a.b)("h3",{id:"1-automl-\uc635\uc158-\uc124\uc815\ud558\uae30"},"1. AutoML \uc635\uc158 \uc124\uc815\ud558\uae30"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/modeler/management/AutoML/overview_1.png",alt:"overview"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\uac01 \ud504\ub85c\uc138\uc2a4\uac00 \uc21c\uc11c\ub300\ub85c \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"Overview\uc5d0\uc11c \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc785\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uba54\uc778 \uc635\uc158\ub4e4\uc744 \uc124\uc815\ud55c \ud6c4 AutoML\uc744 \ubc14\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/modeler/management/AutoML/overview_1_1.png",alt:"overview"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\ubd84\ub958/\ud68c\uadc0 \ubb38\uc81c\uc640 \ud0c0\uac9f \ubcc0\uc218, \ub7f0\ud0c0\uc784 \uc81c\ud55c, Framework \uc120\ud0dd, \ucee8\ud14c\uc774\ub108 \uac1c\uc218\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ud3c9\uac00\ud568\uc218, \ucd5c\ub300\ud3c9\uac00\ud69f\uc218, \ub9ac\uc0d8\ud50c\ub9c1\uc804\ub7b5, \ud3f4\ub4dc \uac1c\uc218, Test \uc14b\uc758 \ube44\uc728\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ub370\uc774\ud130\uc758 \ubcc0\ud658 \ubc0f \ud53c\uccd0 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uc6d0\ud558\ub294 \ubaa8\ub378\uc744 \uc124\uc815\ud558\uc5ec Accu.Tuning\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ucd94\uac00 \uc2e4\ud5d8\uc744 \uc9c4\ud589\ud558\uac70\ub098 \ubaa8\ub4e0 \uc815\ubcf4\ub97c \ubbf8\ub9ac \uc0dd\uc131\ud569\ub2c8\ub2e4.")),Object(a.b)("h3",{id:"2-\ub370\uc774\ud130-\ubd84\ud3ec-\ud655\uc778-\ud655\uc778\ud558\uae30"},"2. \ub370\uc774\ud130 \ubd84\ud3ec \ud655\uc778 \ud655\uc778\ud558\uae30"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/modeler/management/AutoML/overview_2.png",alt:"overview"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\ud14c\uc774\ube14 \ubbf8\ub9ac\ubcf4\uae30\uc640 \ub370\uc774\ud130\uc758 \ubd84\ud3ec\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(a.b)("h2",{id:"preprocess"},"Preprocess"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/modeler/management/AutoML/preprocess.png",alt:"preprocess"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Preprocess\uc5d0\uc11c \uc9c4\ud589\ud55c \uc804\ucc98\ub9ac\ub97c \uc21c\ucc28\uc801\uc73c\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"Accu.Tuning\uc758 Preprocess \ucd94\ucc9c, \ubcc0\uc218\ub4e4\uac04\uc758 \uc0c1\uad00\ubd84\uc11d\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uac01 \ubcc0\uc218\ub97c \uc120\ud0dd\ud558\uace0, \ud0c0\uc785\ubcc0\ud658\uacfc \uc774\uc0c1\uce58\uc81c\uac70, \ubd84\ud3ec\ubcc0\ud658\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(a.b)("h2",{id:"leaderboard"},"Leaderboard"),Object(a.b)("p",null,"Accu.Tuning \ubaa8\ub378\uc758 \uc810\uc218\uc640 \ubcc0\uc218\uc758 \uc911\uc694\ub3c4 \ub4f1\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/modeler/management/AutoML/leaderboard.png",alt:"leaderboard"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\ubcc0\uc218\uc758 \uc911\uc694\ub3c4, Lime, \ud30c\ub77c\ubbf8\ud130 \uc815\ubcf4, \ub2e4\ub978 Metrics\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uc810\uc218\uac00 \uc720\uc0ac\ud558\uace0 \uac19\uc740 \ubaa8\ub378\uc744 \ud3bc\uccd0\uc11c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ud574\ub2f9\ubaa8\ub378\uc744 Deploy\ud558\uc5ec \ub2e4\uc6b4\ub85c\ub4dc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(a.b)("h2",{id:"deployment"},"Deployment"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/modeler/management/AutoML/deployment_1.png",alt:"deployment"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Deploy\ud55c \ubaa8\ub378\uc758 \uc815\ubcf4\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"Test data\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uc0dd\uc131\ub41c \ubaa8\ub378\ub85c Test data\ub97c \uc785\ub825\ud558\uc5ec \uc608\uce21\ud569\ub2c8\ub2e4.")),Object(a.b)("h3",{id:"1-model-\uc815\ubcf4-\ud655\uc778\ud558\uae30"},"1. Model \uc815\ubcf4 \ud655\uc778\ud558\uae30"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/modeler/management/AutoML/deployment_2.png",alt:"deployment"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Binary \ubaa8\ub378 \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uace0, \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc124\uba85\uc785\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ubaa8\ub378\uc758 PipeLine\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uc5ec\ub7ec\uac00\uc9c0 Metrics\ub4e4\uc744 \ubcf4\uace0 \ubaa8\ub378\uc744 \ud3c9\uac00 \ubc0f \ud574\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ubcc0\uc218 \uc911\uc694\ub3c4, \uc794\ucc28\ub3c4, \uc608\uce21\uc624\ub958\uc5d0 \ub300\ud574\uc11c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(a.b)("h3",{id:"2-model\uc744-\ub0b4\ub824\ubc1b\uc544-\uc0ac\uc6a9\ud558\uae30"},"2. Model\uc744 \ub0b4\ub824\ubc1b\uc544 \uc0ac\uc6a9\ud558\uae30"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/modeler/management/AutoML/deployment_3.png",alt:"deployment"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Binary \ubaa8\ub378 \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"autoinsight-helpsers package\ub97c \ub2e4\uc6b4\ud55c \ud6c4, \ubaa8\ub378 piepline\uc744 \ubd88\ub7ec\uc624\ub294 \uc18c\uc2a4\ucf54\ub4dc\uac00 \uc788\ub294 \ud3f4\ub354\uc5d0 \uc555\ucd95\uc744 \ud489\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uc544\ub798 \uc18c\uc2a4\ucf54\ub4dc\uc640 \uac19\uc774 \ubaa8\ub378 piepline\uc744 \ubcfc\ub7ec\uc635\ub2c8\ub2e4.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"import pickle\npipeline = pickle.load(open('dep.1.model', 'rb'))\n")))}p.isMDXComponent=!0},378:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=p(n),O=r,d=m["".concat(c,".").concat(O)]||m[O]||u[O]||a;return n?l.a.createElement(d,o(o({ref:t},b),{},{components:n})):l.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<a;b++)c[b]=n[b];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);