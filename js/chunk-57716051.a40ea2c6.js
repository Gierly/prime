(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57716051"],{"1a7c":function(e,t,l){var n=l("24fb");t=n(!1),t.push([e.i,".p-inputtext[data-v-4b6d8581],.p-slider-horizontal[data-v-4b6d8581]{width:14rem}.p-slider-vertical[data-v-4b6d8581]{height:14rem}",""]),e.exports=t},"3aed":function(e,t,l){var n=l("1a7c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var u=l("499e").default;u("515b2263",n,!0,{sourceMap:!1,shadowMode:!1})},9144:function(e,t,l){"use strict";l("3aed")},"9b66":function(e,t,l){"use strict";l.r(t);var n=l("7a23"),u=function(e){return Object(n["K"])("data-v-4b6d8581"),e=e(),Object(n["I"])(),e},c={class:"content-section introduction"},a=u((function(){return Object(n["k"])("div",{class:"feature-intro"},[Object(n["k"])("h1",null,"Slider"),Object(n["k"])("p",null,"Slider is an input component to provide a numerical input.")],-1)})),r={class:"content-section implementation"},i={class:"card"};function b(e,t,l,u,b,d){var o=Object(n["P"])("AppDemoActions"),j=Object(n["P"])("Slider"),O=Object(n["P"])("InputText"),s=Object(n["P"])("SliderDoc");return Object(n["H"])(),Object(n["j"])("div",null,[Object(n["k"])("div",c,[a,Object(n["o"])(o)]),Object(n["k"])("div",r,[Object(n["k"])("div",i,[Object(n["k"])("h5",null,"Basic: "+Object(n["T"])(b.value1),1),Object(n["o"])(j,{modelValue:b.value1,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b.value1=e})},null,8,["modelValue"]),Object(n["k"])("h5",null,"Input: "+Object(n["T"])(b.value2),1),Object(n["o"])(O,{modelValue:b.value2,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.value2=e}),modelModifiers:{number:!0}},null,8,["modelValue"]),Object(n["o"])(j,{modelValue:b.value2,"onUpdate:modelValue":t[2]||(t[2]=function(e){return b.value2=e})},null,8,["modelValue"]),Object(n["k"])("h5",null,"Step: "+Object(n["T"])(b.value3),1),Object(n["o"])(j,{modelValue:b.value3,"onUpdate:modelValue":t[3]||(t[3]=function(e){return b.value3=e}),step:20},null,8,["modelValue"]),Object(n["k"])("h5",null,"Decimal Step: "+Object(n["T"])(b.value4),1),Object(n["o"])(j,{modelValue:b.value4,"onUpdate:modelValue":t[4]||(t[4]=function(e){return b.value4=e}),step:.5},null,8,["modelValue","step"]),Object(n["k"])("h5",null,"Range: "+Object(n["T"])(b.value5),1),Object(n["o"])(j,{modelValue:b.value5,"onUpdate:modelValue":t[5]||(t[5]=function(e){return b.value5=e}),range:!0},null,8,["modelValue"]),Object(n["k"])("h5",null,"Vertical: "+Object(n["T"])(b.value6),1),Object(n["o"])(j,{modelValue:b.value6,"onUpdate:modelValue":t[6]||(t[6]=function(e){return b.value6=e}),orientation:"vertical"},null,8,["modelValue"])])]),Object(n["o"])(s)])}var d=Object(n["k"])("h5",null,"Import via Module",-1),o=Object(n["k"])("code",null,"\nimport Slider from 'primevue/slider';\n\n",-1),j=[o],O=Object(n["k"])("h5",null,"Import via CDN",-1),s=Object(n["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/slider/slider.min.js"><\/script>\n\n',-1),p=[s],v=Object(n["k"])("h5",null,"Getting Started",-1),k=Object(n["k"])("p",null,"Two-way binding is defined using the standard v-model directive.",-1),m=Object(n["k"])("code",null,'\n<Slider v-model="value" />\n\n',-1),h=[m],f=Object(n["k"])("h5",null,"Range",-1),S=Object(n["k"])("p",null,[Object(n["n"])("Range slider provides two handles to define two values. Enable "),Object(n["k"])("i",null,"range"),Object(n["n"])(" property and bind an array to implement a range slider.")],-1),g=Object(n["k"])("code",null,'\n<Slider v-model="value" :range="true" />\n\n',-1),w=[g],y=Object(n["k"])("code",null,"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tvalue: [20,80]\n\t\t}\n\t}\n}\n\n",-1),x=[y],V=Object(n["k"])("h5",null,"Orientation",-1),D=Object(n["k"])("p",null,[Object(n["n"])("Default layout of slider is horizontal, use "),Object(n["k"])("i",null,"orientation"),Object(n["n"])(" property for the alternative vertical mode.")],-1),I=Object(n["k"])("code",null,'\n<Slider v-model="value" orientation="vertical" />\n\n',-1),H=[I],A=Object(n["k"])("h5",null,"Step",-1),N=Object(n["k"])("p",null,[Object(n["n"])("Step factor is 1 by default and can be customized with "),Object(n["k"])("i",null,"step"),Object(n["n"])(" option.")],-1),T=Object(n["k"])("code",null,'\n<Slider v-model="value" :step="20" />\n\n',-1),M=[T],P=Object(n["k"])("h5",null,"Min-Max",-1),z=Object(n["k"])("p",null,"Boundaries are specified with min and max attributes.",-1),_=Object(n["k"])("code",null,'\n<Slider v-model="value" :step="20" :min="50" :max="200" />\n\n',-1),R=[_],U=Object(n["k"])("h5",null,"Properties",-1),B=Object(n["k"])("p",null,"Any valid attribute is passed to the root element implicitly, extended properties are as follows;",-1),C=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Type"),Object(n["k"])("th",null,"Default"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"modelValue"),Object(n["k"])("td",null,"number"),Object(n["k"])("td",null,"0"),Object(n["k"])("td",null,"Value of the component.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"min"),Object(n["k"])("td",null,"number"),Object(n["k"])("td",null,"0"),Object(n["k"])("td",null,"Mininum boundary value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"max"),Object(n["k"])("td",null,"number"),Object(n["k"])("td",null,"100"),Object(n["k"])("td",null,"Maximum boundary value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"orientation"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"horizontal"),Object(n["k"])("td",null,"Orientation of the slider, valid values are horizontal and vertical.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"step"),Object(n["k"])("td",null,"number"),Object(n["k"])("td",null,"1"),Object(n["k"])("td",null,"Step factor to increment/decrement the value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"range"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"false"),Object(n["k"])("td",null,"When speficed, allows two boundary values to be picked.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"disabled"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"false"),Object(n["k"])("td",null,"When present, it specifies that the component should be disabled.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"tabindex"),Object(n["k"])("td",null,"number"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Index of the element in tabbing order.")])])])],-1),E=Object(n["k"])("h5",null,"Events",-1),K=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Parameters"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"change"),Object(n["k"])("td",null,"value: Selected option value"),Object(n["k"])("td",null,"Callback to invoke on value change.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"slideend"),Object(n["k"])("td",null,[Object(n["n"])(" event.originalEvent: Original event "),Object(n["k"])("br"),Object(n["n"])(" event.value: New value. ")]),Object(n["k"])("td",null,"Callback to invoke when slide ends.")])])])],-1),F=Object(n["k"])("h5",null,"Styling",-1),J=Object(n["n"])("Following is the list of structural style classes, for theming classes visit "),W=Object(n["n"])("theming"),Z=Object(n["n"])(" page."),G=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Element")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-slider"),Object(n["k"])("td",null,"Container element")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-slider-handle"),Object(n["k"])("td",null,"Handle element.")])])])],-1),Q=Object(n["k"])("h5",null,"Accessibility",-1),q=Object(n["k"])("h6",null,"Screen Reader",-1),L=Object(n["k"])("p",null,[Object(n["n"])(" Slider element component uses "),Object(n["k"])("i",null,"slider"),Object(n["n"])(" role on the handle in addition to the "),Object(n["k"])("i",null,"aria-orientation"),Object(n["n"])(", "),Object(n["k"])("i",null,"aria-valuemin"),Object(n["n"])(", "),Object(n["k"])("i",null,"aria-valuemax"),Object(n["n"])(" and "),Object(n["k"])("i",null,"aria-valuenow"),Object(n["n"])(" attributes. Value to describe the component can be defined using "),Object(n["k"])("i",null,"aria-labelledby"),Object(n["n"])(" and "),Object(n["k"])("i",null,"aria-label"),Object(n["n"])(" props. ")],-1),X=Object(n["k"])("code",null,'\n<span id="label_number">Number</span>\n<Slider aria-labelledby="label_number" />\n\n<Slider aria-label="Number" />\n\n',-1),Y=[X],$=Object(n["k"])("h6",null,"Keyboard Support",-1),ee=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Key"),Object(n["k"])("th",null,"Function")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,[Object(n["k"])("i",null,"tab")]),Object(n["k"])("td",null,"Moves focus to the slider.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,[Object(n["k"])("span",{class:"inline-flex flex-column"},[Object(n["k"])("i",{class:"mb-1"},"left arrow"),Object(n["k"])("i",null,"up arrow")])]),Object(n["k"])("td",null,"Decrements the value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,[Object(n["k"])("span",{class:"inline-flex flex-column"},[Object(n["k"])("i",{class:"mb-1"},"right arrow"),Object(n["k"])("i",null,"down arrow")])]),Object(n["k"])("td",null,"Increments the value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,[Object(n["k"])("i",null,"home")]),Object(n["k"])("td",null,"Set the minimum value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,[Object(n["k"])("i",null,"end")]),Object(n["k"])("td",null,"Set the maximum value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,[Object(n["k"])("i",null,"page up")]),Object(n["k"])("td",null,"Increments the value by 10 steps.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,[Object(n["k"])("i",null,"page down")]),Object(n["k"])("td",null,"Decrements the value by 10 steps.")])])])],-1),te=Object(n["k"])("h5",null,"Dependencies",-1),le=Object(n["k"])("p",null,"None.",-1);function ne(e,t,l,u,c,a){var r=Object(n["P"])("router-link"),i=Object(n["P"])("AppDoc"),b=Object(n["Q"])("code");return Object(n["H"])(),Object(n["h"])(i,{name:"SliderDemo",sources:c.sources,github:"slider/SliderDemo.vue"},{default:Object(n["Z"])((function(){return[d,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,j)),[[b,void 0,void 0,{script:!0}]]),O,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,p)),[[b]]),v,k,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,h)),[[b]]),f,S,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,w)),[[b]]),Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,x)),[[b,void 0,void 0,{script:!0}]]),V,D,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,H)),[[b]]),A,N,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,M)),[[b]]),P,z,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,R)),[[b]]),U,B,C,E,K,F,Object(n["k"])("p",null,[J,Object(n["o"])(r,{to:"/theming"},{default:Object(n["Z"])((function(){return[W]})),_:1}),Z]),G,Q,q,L,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,Y)),[[b]]),$,ee,te,le]})),_:1},8,["sources"])}var ue={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Basic: {{value1}}</h5>\n        <Slider v-model="value1" />\n\n        <h5>Input: {{value2}}</h5>\n        <InputText v-model.number="value2" />\n        <Slider v-model="value2" />\n\n        <h5>Step: {{value3}}</h5>\n        <Slider v-model="value3" :step="20" />\n\n        <h5>Decimal Step: {{value4}}</h5>\n        <Slider v-model="value4" :step="0.5" />\n\n        <h5>Range: {{value5}}</h5>\n        <Slider v-model="value5" :range="true" />\n\n        <h5>Vertical: {{value6}}</h5>\n        <Slider v-model="value6" orientation="vertical" />\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            value1: null,\n            value2: 50,\n            value3: 20,\n            value4: 30.5,\n            value5: [20,80],\n            value6: 50\n        }\n    }\n}\n<\\/script>\n\n<style scoped>\n.p-slider-horizontal, .p-inputtext {\n    width: 14rem;\n}\n.p-slider-vertical {\n     height: 14rem;\n}\n</style>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Basic: {{value1}}</h5>\n        <Slider v-model="value1" />\n\n        <h5>Input: {{value2}}</h5>\n        <InputText v-model.number="value2" />\n        <Slider v-model="value2" />\n\n        <h5>Step: {{value3}}</h5>\n        <Slider v-model="value3" :step="20" />\n\n        <h5>Decimal Step: {{value4}}</h5>\n        <Slider v-model="value4" :step="0.5" />\n\n        <h5>Range: {{value5}}</h5>\n        <Slider v-model="value5" :range="true" />\n\n        <h5>Vertical: {{value6}}</h5>\n        <Slider v-model="value6" orientation="vertical" />\n    </div>\n</template>\n\n<script>\nimport { ref } from \'vue\';\n\nexport default {\n    setup() {\n        const value1 = ref(null);\n        const value2 = ref(50);\n        const value3 = ref(20);\n        const value4 = ref(30.5);\n        const value5 = ref([20,80]);\n        const value6 = ref(50);\n\n        return { value1, value2, value3, value4, value5, value6 }\n    }\n}\n<\\/script>\n\n<style scoped>\n.p-slider-horizontal, .p-inputtext {\n    width: 14rem;\n}\n.p-slider-vertical {\n     height: 14rem;\n}\n</style>'},"browser-source":{imports:'<script src="https://unpkg.com/primevue@^3/slider/slider.min.js"><\\/script>',tabName:"Browser Source",content:'<div id="app">\n            <h5>Basic: {{value1}}</h5>\n            <p-slider v-model="value1"></p-slider>\n\n            <h5>Input: {{value2}}</h5>\n            <p-inputtext v-model.number="value2"></p-inputtext>\n            <p-slider v-model="value2"></p-slider>\n\n            <h5>Step: {{value3}}</h5>\n            <p-slider v-model="value3" :step="20"></p-slider>\n\n            <h5>Decimal Step: {{value4}}</h5>\n            <p-slider v-model="value4" :step="0.5"></p-slider>\n\n            <h5>Range: {{value5}}</h5>\n            <p-slider v-model="value5" :range="true"></p-slider>\n\n            <h5>Vertical: {{value6}}</h5>\n            <p-slider v-model="value6" orientation="vertical"></p-slider>\n        </div>\n\n        <script type="module">\n        const { createApp, ref } = Vue;\n\n        const App = {\n            setup() {\n                const value1 = ref(null);\n                const value2 = ref(50);\n                const value3 = ref(20);\n                const value4 = ref(30.5);\n                const value5 = ref([20,80]);\n                const value6 = ref(50);\n\n                return { value1, value2, value3, value4, value5, value6 }\n            },\n            components: {\n                "p-slider": primevue.slider,\n                "p-inputtext": primevue.inputtext\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n\n        <style scoped>\n        .p-slider-horizontal, .p-inputtext {\n            width: 14rem;\n        }\n        .p-slider-vertical {\n            height: 14rem;\n        }\n        </style>'}}}}},ce=l("6b0d"),ae=l.n(ce);const re=ae()(ue,[["render",ne]]);var ie=re,be={data:function(){return{value1:null,value2:50,value3:20,value4:30.5,value5:[20,80],value6:50}},components:{SliderDoc:ie}};l("9144");const de=ae()(be,[["render",b],["__scopeId","data-v-4b6d8581"]]);t["default"]=de}}]);