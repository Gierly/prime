(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc9cb"],{"4f58":function(e,t,n){"use strict";n.r(t);var l=n("7a23"),c={class:"content-section introduction"},a=Object(l["k"])("div",{class:"feature-intro"},[Object(l["k"])("h1",null,"Rating"),Object(l["k"])("p",null,"Rating component is a star based selection input.")],-1),o={class:"content-section implementation"},i={class:"card"},r=Object(l["k"])("h5",null,"Without Cancel",-1),s=Object(l["k"])("h5",null,"ReadOnly",-1),u=Object(l["k"])("h5",null,"Disabled",-1),b=Object(l["k"])("h5",null,"Custom Icons",-1),p=Object(l["k"])("h5",null,"Templating",-1),d=Object(l["k"])("img",{src:"demo/images/rating/cancel.png",height:"24",width:"24"},null,-1),j=Object(l["k"])("img",{src:"demo/images/rating/custom-onicon.png",height:"24",width:"24"},null,-1),O=Object(l["k"])("img",{src:"demo/images/rating/custom-officon.png",height:"24",width:"24"},null,-1);function m(e,t,n,m,h,k){var g=Object(l["P"])("AppDemoActions"),v=Object(l["P"])("Rating"),f=Object(l["P"])("RatingDoc");return Object(l["H"])(),Object(l["j"])("div",null,[Object(l["k"])("div",c,[a,Object(l["o"])(g)]),Object(l["k"])("div",o,[Object(l["k"])("div",i,[Object(l["k"])("h5",null,"Basic "+Object(l["T"])(h.val1),1),Object(l["o"])(v,{modelValue:h.val1,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.val1=e})},null,8,["modelValue"]),r,Object(l["o"])(v,{modelValue:h.val2,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.val2=e}),cancel:!1},null,8,["modelValue"]),s,Object(l["o"])(v,{modelValue:5,readonly:!0,stars:10,cancel:!1}),u,Object(l["o"])(v,{modelValue:8,disabled:!0,stars:10}),b,Object(l["o"])(v,{modelValue:h.val3,"onUpdate:modelValue":t[2]||(t[2]=function(e){return h.val3=e}),stars:5,onIcon:"pi pi-heart-fill",offIcon:"pi pi-heart",cancelIcon:"pi pi-times"},null,8,["modelValue"]),p,Object(l["o"])(v,{modelValue:h.val4,"onUpdate:modelValue":t[3]||(t[3]=function(e){return h.val4=e})},{cancelicon:Object(l["Z"])((function(){return[d]})),onicon:Object(l["Z"])((function(){return[j]})),officon:Object(l["Z"])((function(){return[O]})),_:1},8,["modelValue"])])]),Object(l["o"])(f)])}var h=Object(l["k"])("h5",null,"Import via Module",-1),k=Object(l["k"])("code",null,"\nimport Rating from 'primevue/rating';\n\n",-1),g=[k],v=Object(l["k"])("h5",null,"Import via CDN",-1),f=Object(l["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/rating/rating.min.js"><\/script>\n\n',-1),w=[f],y=Object(l["k"])("h5",null,"Getting Started",-1),R=Object(l["k"])("p",null,"Two-way value binding is defined using v-model.",-1),I=Object(l["k"])("code",null,'\n<Rating v-model="val" />\n\n',-1),V=[I],C=Object(l["k"])("h5",null,"Number of Stars",-1),D=Object(l["k"])("p",null,[Object(l["n"])("Number of stars to display is defined with "),Object(l["k"])("i",null,"stars"),Object(l["n"])(" property, default is 5.")],-1),A=Object(l["k"])("code",null,'\n<Rating v-model="val" :stars="7"/>\n\n',-1),N=[A],P=Object(l["k"])("h5",null,"Cancel",-1),S=Object(l["k"])("p",null,[Object(l["n"])("A cancel icon is displayed to reset the value by default, set "),Object(l["k"])("i",null,"cancel"),Object(l["n"])(" as false to remove this option.")],-1),T=Object(l["k"])("code",null,'\n<Rating v-model="val" :cancel="false" />\n\n',-1),H=[T],x=Object(l["k"])("h5",null,"Templating",-1),W=Object(l["k"])("p",null,"Templating allows customizing the content where the icon instance is available as the implicit variable.",-1),Z=Object(l["k"])("code",null,[Object(l["k"])("template",null,[Object(l["n"])('\n<Rating :modelValue="3">\n    <template #cancelicon>\n        <img src="demo/images/rating/cancel.png" height="24" width="24">\n    </template>\n    <template #onicon>\n        <img src="demo/images/rating/custom-onicon.png" height="24" width="24">\n    </template>\n    <template #officon>\n        <img src="demo/images/rating/custom-officon.png" height="24" width="24">\n    </template>\n</Rating>\n\n')]),Object(l["n"])("\n")],-1),B=[Z],E=Object(l["k"])("h5",null,"Properties",-1),M=Object(l["k"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),U=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Type"),Object(l["k"])("th",null,"Default"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"modelValue"),Object(l["k"])("td",null,"number"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Value of the rating.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"disabled"),Object(l["k"])("td",null,"boolean"),Object(l["k"])("td",null,"false"),Object(l["k"])("td",null,"When present, it specifies that the element should be disabled.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"readonly"),Object(l["k"])("td",null,"boolean"),Object(l["k"])("td",null,"false"),Object(l["k"])("td",null,"When present, it specifies that component is read-only.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"stars"),Object(l["k"])("td",null,"number"),Object(l["k"])("td",null,"5"),Object(l["k"])("td",null,"Number of stars.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"cancel"),Object(l["k"])("td",null,"boolean"),Object(l["k"])("td",null,"true"),Object(l["k"])("td",null,"When specified a cancel icon is displayed to allow clearing the value.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"onIcon"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"pi pi-star"),Object(l["k"])("td",null,"Icon for the on state.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"offIcon"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"pi pi-star-fill"),Object(l["k"])("td",null,"Icon for the off state.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"cancelIcon"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"pi pi-ban"),Object(l["k"])("td",null,"Icon for the cancelable state.")])])])],-1),_=Object(l["k"])("h5",null,"Events",-1),F=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Parameters"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"change"),Object(l["k"])("td",null,[Object(l["n"])(" event.originalEvent: Original event "),Object(l["k"])("br"),Object(l["n"])(" event.value: Selected option value ")]),Object(l["k"])("td",null,"Callback to invoke on value change.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"focus"),Object(l["k"])("td",null,"event"),Object(l["k"])("td",null,"Callback to invoke when the component receives focus.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"blur"),Object(l["k"])("td",null,"event"),Object(l["k"])("td",null,"Callback to invoke when the component loses focus.")])])])],-1),K=Object(l["k"])("h5",null,"Slots",-1),J=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Parameters")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"cancelicon"),Object(l["k"])("td",null,"-")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"onicon"),Object(l["k"])("td",null,"value: Item value")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"officon"),Object(l["k"])("td",null,"value: Item value")])])])],-1),z=Object(l["k"])("h5",null,"Styling",-1),G=Object(l["n"])("Following is the list of structural style classes, for theming classes visit "),Q=Object(l["n"])("theming"),q=Object(l["n"])(" page."),L=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Element")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-rating"),Object(l["k"])("td",null,"Container element")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-rating-item"),Object(l["k"])("td",null,"Each item element")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-rating-item-active"),Object(l["k"])("td",null,"Selected item elements.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-rating-cancel-item"),Object(l["k"])("td",null,"Cancel item element.")])])])],-1),X=Object(l["k"])("h5",null,"Accessibility",-1),Y=Object(l["k"])("h6",null,"Screen Reader",-1),$=Object(l["n"])(" Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the "),ee=Object(l["n"])("locale"),te=Object(l["n"])(" API via "),ne=Object(l["k"])("i",null,"star",-1),le=Object(l["n"])(" and "),ce=Object(l["k"])("i",null,"stars",-1),ae=Object(l["n"])(" of the "),oe=Object(l["k"])("i",null,"aria",-1),ie=Object(l["n"])(" property. "),re=Object(l["k"])("h6",null,"Keyboard Support",-1),se=Object(l["k"])("p",null,"Keyboard interaction is derived from the native browser handling of radio buttons in a group.",-1),ue=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Key"),Object(l["k"])("th",null,"Function")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,[Object(l["k"])("i",null,"tab")]),Object(l["k"])("td",null,"Moves focus to the star representing the value, if there is none then first star receives the focus.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,[Object(l["k"])("span",{class:"inline-flex flex-column"},[Object(l["k"])("i",{class:"mb-1"},"left arrow"),Object(l["k"])("i",null,"up arrow")])]),Object(l["k"])("td",null,"Moves focus to the previous star, if there is none then last radio button receives the focus.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,[Object(l["k"])("span",{class:"inline-flex flex-column"},[Object(l["k"])("i",{class:"mb-1"},"right arrow"),Object(l["k"])("i",null,"down arrow")])]),Object(l["k"])("td",null,"Moves focus to the next star, if there is none then first star receives the focus.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,[Object(l["k"])("i",null,"space")]),Object(l["k"])("td",null,"If the focused star does not represent the value, changes the value to the star value.")])])])],-1),be=Object(l["k"])("h5",null,"Dependencies",-1),pe=Object(l["k"])("p",null,"None.",-1);function de(e,t,n,c,a,o){var i=Object(l["P"])("router-link"),r=Object(l["P"])("AppDoc"),s=Object(l["Q"])("code");return Object(l["H"])(),Object(l["h"])(r,{name:"RatingDemo",sources:a.sources,github:"rating/RatingDemo.vue"},{default:Object(l["Z"])((function(){return[h,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,g)),[[s,void 0,void 0,{script:!0}]]),v,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,w)),[[s]]),y,R,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,V)),[[s]]),C,D,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,N)),[[s]]),P,S,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,H)),[[s]]),x,W,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,B)),[[s]]),E,M,U,_,F,K,J,z,Object(l["k"])("p",null,[G,Object(l["o"])(i,{to:"/theming"},{default:Object(l["Z"])((function(){return[Q]})),_:1}),q]),L,X,Y,Object(l["k"])("p",null,[$,Object(l["o"])(i,{to:"/locale"},{default:Object(l["Z"])((function(){return[ee]})),_:1}),te,ne,le,ce,ae,oe,ie]),re,se,ue,be,pe]})),_:1},8,["sources"])}var je={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Basic {{val1}}</h5>\n        <Rating v-model="val1" />\n\n        <h5>Without Cancel</h5>\n        <Rating v-model="val2" :cancel="false" />\n\n        <h5>ReadOnly</h5>\n        <Rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" />\n\n        <h5>Disabled</h5>\n        <Rating :modelValue="8" :disabled="true" :stars="10" />\n\n        <h5>Custom Icons</h5>\n        <Rating v-model="val3" :stars="5" onIcon="pi pi-heart-fill" offIcon="pi pi-heart" cancelIcon="pi pi-times" />\n\n        <h5>Templating</h5>\n        <Rating v-model="val4">\n            <template #cancelicon>\n                <img src="demo/images/rating/cancel.png" @error="(e) => e.target.src = \'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\'" height="24" width="24"/>\n            </template>\n            <template #onicon>\n                <img src="demo/images/rating/custom-onicon.png" @error="(e) => e.target.src = \'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\'" height="24" width="24"  />\n            </template>\n            <template #officon>\n                <img src="demo/images/rating/custom-officon.png" @error="(e) => e.target.src = \'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\'" height="24" width="24"  />\n            </template>\n        </Rating>\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            val1: null,\n            val2: 3,\n            val3: 2,\n            val4: 2\n        }\n    }\n}\n<\\/script>\n\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Basic {{val1}}</h5>\n        <Rating v-model="val1" />\n\n        <h5>Without Cancel</h5>\n        <Rating v-model="val2" :cancel="false" />\n\n        <h5>ReadOnly</h5>\n        <Rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" />\n\n        <h5>Disabled</h5>\n        <Rating :modelValue="8" :disabled="true" :stars="10" />\n\n        <h5>Custom Icons</h5>\n        <Rating v-model="val3" :stars="5" onIcon="pi pi-heart-fill" offIcon="pi pi-heart" cancelIcon="pi pi-times" />\n\n        <h5>Templating</h5>\n        <Rating v-model="val4">\n            <template #cancelicon>\n                <img src="demo/images/rating/cancel.png" @error="(e) => e.target.src = \'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\'" height="24" width="24"/>\n            </template>\n            <template #onicon>\n                <img src="demo/images/rating/custom-onicon.png" @error="(e) => e.target.src = \'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\'" height="24" width="24"  />\n            </template>\n            <template #officon>\n                <img src="demo/images/rating/custom-officon.png" @error="(e) => e.target.src = \'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\'" height="24" width="24"  />\n            </template>\n        </Rating>\n    </div>\n</template>\n\n<script>\nimport { ref } from \'vue\';\n\nexport default {\n    setup() {\n        const val1 = ref();\n        const val2 = ref(3);\n        const val3 = ref(2);\n        const val4 = ref(2);\n\n        return { val1, val2 }\n    }\n}\n<\\/script>\n\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/rating/rating.min.js"><\\/script>',content:'<div id="app">\n            <h5>Basic {{val1}}</h5>\n            <p-rating v-model="val1"></p-rating>\n\n            <h5>Without Cancel</h5>\n            <p-rating v-model="val2" :cancel="false"></p-rating>\n\n            <h5>ReadOnly</h5>\n            <p-rating :modelValue="5" :readonly="true" :stars="10" :cancel="false"></p-rating>\n\n            <h5>Disabled</h5>\n            <p-rating :modelValue="8" :disabled="true" :stars="10"></p-rating>\n\n            <h5>Custom Icons</h5>\n            <p-rating v-model="val3" :stars="5" on-icon="pi pi-heart-fill" off-icon="pi pi-heart" cancel-icon="pi pi-times"></p-rating>\n\n            <h5>Templating</h5>\n            <p-rating v-model="val4">\n                <template #cancelicon>\n                    <img src="demo/images/rating/cancel.png" @error="(e) => e.target.src = \'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\'" height="24" width="24"/>\n                </template>\n                <template #onicon>\n                    <img src="demo/images/rating/custom-onicon.png" @error="(e) => e.target.src = \'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\'" height="24" width="24"  />\n                </template>\n                <template #officon>\n                    <img src="demo/images/rating/custom-officon.png" @error="(e) => e.target.src = \'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\'" height="24" width="24"  />\n                </template>\n            </p-rating>\n        </div>\n\n        <script type="module">\n        const { createApp, ref } = Vue;\n\n        const App = {\n            setup() {\n                const val1 = ref();\n                const val2 = ref(3);\n                const val3 = ref(2);\n                const val4 = ref(2);\n\n                return { val1, val2 }\n            },\n            components: {\n                "p-rating": primevue.rating\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n\n'}}}}},Oe=n("6b0d"),me=n.n(Oe);const he=me()(je,[["render",de]]);var ke=he,ge={data:function(){return{val1:null,val2:3,val3:2,val4:2}},components:{RatingDoc:ke}};const ve=me()(ge,[["render",m]]);t["default"]=ve}}]);