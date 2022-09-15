(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22dc12"],{f99b:function(t,e,n){"use strict";n.r(e);var l=n("7a23"),c={class:"content-section introduction"},u=Object(l["k"])("div",{class:"feature-intro"},[Object(l["k"])("h1",null,"InputSwitch"),Object(l["k"])("p",null,"InputSwitch is used to select a boolean value.")],-1),i={class:"content-section implementation"},b={class:"card"},o=Object(l["k"])("h5",null,"Basic",-1),d=Object(l["k"])("h5",null,"Preselection",-1);function a(t,e,n,a,s,r){var j=Object(l["P"])("AppDemoActions"),p=Object(l["P"])("InputSwitch"),k=Object(l["P"])("InputSwitchDoc");return Object(l["H"])(),Object(l["j"])("div",null,[Object(l["k"])("div",c,[u,Object(l["o"])(j)]),Object(l["k"])("div",i,[Object(l["k"])("div",b,[o,Object(l["o"])(p,{modelValue:s.checked1,"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.checked1=t})},null,8,["modelValue"]),d,Object(l["o"])(p,{modelValue:s.checked2,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.checked2=t})},null,8,["modelValue"])])]),Object(l["o"])(k)])}var s=Object(l["k"])("h5",null,"Import via Module",-1),r=Object(l["k"])("code",null,"\nimport InputSwitch from 'primevue/inputswitch';\n\n",-1),j=[r],p=Object(l["k"])("h5",null,"Import via CDN",-1),k=Object(l["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/inputswitch/inputswitch.min.js"><\/script>\n\n',-1),O=[k],h=Object(l["k"])("h5",null,"Getting Started",-1),m=Object(l["k"])("p",null,"Two-way binding to a boolean property is defined using the standard v-model directive.",-1),v=Object(l["k"])("code",null,'\n<InputSwitch v-model="checked" />\n\n',-1),w=[v],f=Object(l["k"])("code",null,"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tchecked: false\n\t\t}\n\t}\n}\n\n",-1),y=[f],S=Object(l["k"])("p",null,"As model is two-way binding enabled, setting the bound value as true displays the state as checked by default.",-1),g=Object(l["k"])("code",null,"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tchecked: true\n\t\t}\n\t}\n}\n\n",-1),I=[g],P=Object(l["k"])("h5",null,"Properties",-1),V=Object(l["k"])("p",null,"Any valid attribute is passed to the root element implicitly, extended properties are as follows;",-1),A=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Type"),Object(l["k"])("th",null,"Default"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"modelValue"),Object(l["k"])("td",null,"boolean"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Specifies whether a inputswitch should be checked or not.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"trueValue"),Object(l["k"])("td",null,"any"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Value in checked state.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"falseValue"),Object(l["k"])("td",null,"any"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Value in unchecked state.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"inputId"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Style class of the component input field.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"inputClass"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Style class of the input field.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"inputStyle"),Object(l["k"])("td",null,"any"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Inline style of the input field.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"inputProps"),Object(l["k"])("td",null,"object"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.")])])])],-1),D=Object(l["k"])("h5",null,"Events",-1),H=Object(l["k"])("p",null,"In addition to the following events, any other valid events such as focus and blur are passed implicitly.",-1),N=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Parameters"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"click"),Object(l["k"])("td",null,"event: Browser event"),Object(l["k"])("td",null,"Callback to invoke on click.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"change"),Object(l["k"])("td",null,"event: Browser event"),Object(l["k"])("td",null,"Callback to invoke on value change.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"input"),Object(l["k"])("td",null,"value: New value"),Object(l["k"])("td",null,"Callback to invoke on value change.")])])])],-1),C=Object(l["k"])("h5",null,"Styling",-1),B=Object(l["n"])("Following is the list of structural style classes, for theming classes visit "),x=Object(l["n"])("theming"),M=Object(l["n"])(" page."),R=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Element")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-inputswitch"),Object(l["k"])("td",null,"Container element.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-inputswitch-checked"),Object(l["k"])("td",null,"Container element in active state.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-inputswitch-slider"),Object(l["k"])("td",null,"Slider element behind the handle.")])])])],-1),T=Object(l["k"])("h5",null,"Accessibility",-1),E=Object(l["k"])("h6",null,"Screen Reader",-1),U=Object(l["k"])("p",null,[Object(l["n"])(" InputSwitch component uses a hidden native checkbox element with "),Object(l["k"])("i",null,"switch"),Object(l["n"])(" role internally that is only visible to screen readers. Value to describe the component can either be provided via "),Object(l["k"])("i",null,"label"),Object(l["n"])(" tag combined with "),Object(l["k"])("i",null,"id"),Object(l["n"])(" prop or using "),Object(l["k"])("i",null,"aria-labelledby"),Object(l["n"])(", "),Object(l["k"])("i",null,"aria-label"),Object(l["n"])(" props. ")],-1),F=Object(l["k"])("code",null,'\n<label for="switch1">Remember Me</label>\n<InputSwitch inputId="switch1" />\n\n<span id="switch2">Remember Me</span>\n<InputSwitch aria-labelledby="switch2" />\n\n<InputSwitch aria-label="Remember Me" />\n\n',-1),J=[F],K=Object(l["k"])("h6",null,"Keyboard Support",-1),Z=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Key"),Object(l["k"])("th",null,"Function")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,[Object(l["k"])("i",null,"tab")]),Object(l["k"])("td",null,"Moves focus to the switch.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,[Object(l["k"])("i",null,"space")]),Object(l["k"])("td",null,"Toggles the checked state.")])])])],-1),_=Object(l["k"])("h5",null,"Dependencies",-1),G=Object(l["k"])("p",null,"None.",-1);function L(t,e,n,c,u,i){var b=Object(l["P"])("router-link"),o=Object(l["P"])("AppDoc"),d=Object(l["Q"])("code");return Object(l["H"])(),Object(l["h"])(o,{name:"InputSwitchDemo",sources:u.sources,github:"inputswitch/InputSwitchDemo.vue"},{default:Object(l["Z"])((function(){return[s,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,j)),[[d,void 0,void 0,{script:!0}]]),p,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,O)),[[d]]),h,m,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,w)),[[d]]),Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,y)),[[d,void 0,void 0,{script:!0}]]),S,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,I)),[[d,void 0,void 0,{script:!0}]]),P,V,A,D,H,N,C,Object(l["k"])("p",null,[B,Object(l["o"])(b,{to:"/theming"},{default:Object(l["Z"])((function(){return[x]})),_:1}),M]),R,T,E,U,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,J)),[[d]]),K,Z,_,G]})),_:1},8,["sources"])}var Q={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Basic</h5>\n        <InputSwitch v-model="checked1" />\n\n        <h5>Preselection</h5>\n        <InputSwitch v-model="checked2" />\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            checked1: false,\n            checked2: true\n        }\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Basic</h5>\n        <InputSwitch v-model="checked1" />\n\n        <h5>Preselection</h5>\n        <InputSwitch v-model="checked2" />\n    </div>\n</template>\n\n<script>\nimport { ref } from \'vue\';\n\nexport default {\n    setup() {\n        const checked1 = ref(false);\n        const checked2 = ref(true);\n\n\t\treturn { checked1, checked2 }\n    }\n}\n<\\/script>\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/inputswitch/inputswitch.min.js"><\\/script>',content:'<div id="app">\n\t\t\t<h5>Basic</h5>\n\t\t\t<p-inputswitch v-model="checked1"></p-inputswitch>\n\n\t\t\t<h5>Preselection</h5>\n\t\t\t<p-inputswitch v-model="checked2"></p-inputswitch>\n\t\t</div>\n\n\t\t<script>\n\t\tconst { createApp, ref } = Vue;\n\n\t\tconst App = {\n\t\t\tsetup() {\n\t\t\t\tconst checked1 = ref(false);\n\t\t\t\tconst checked2 = ref(true);\n\n\t\t\t\treturn { checked1, checked2 }\n\t\t\t},\n\t\t\tcomponents: {\n\t\t\t\t"p-inputswitch": primevue.inputswitch\n\t\t\t}\n\t\t};\n\n\t\tcreateApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n\t\t<\\/script>\n'}}}}},q=n("6b0d"),z=n.n(q);const W=z()(Q,[["render",L]]);var X=W,Y={data:function(){return{checked1:!1,checked2:!0}},components:{InputSwitchDoc:X}};const $=z()(Y,[["render",a]]);e["default"]=$}}]);