(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3343"],{"00d1":function(e,t,n){"use strict";n.r(t);var l=n("7a23"),c={class:"content-section introduction"},a={class:"feature-intro"},i=Object(l["k"])("h1",null,"Image",-1),r=Object(l["n"])("Displays an image with preview and tranformation options. For multiple image, see "),o=Object(l["n"])("Galleria"),b=Object(l["n"])("."),u={class:"content-section implementation"},p={class:"card"},s=Object(l["k"])("h5",null,"Basic",-1),j=Object(l["k"])("h5",null,"Preview",-1);function d(e,t,n,d,O,m){var k=Object(l["P"])("router-link"),g=Object(l["P"])("AppDemoActions"),h=Object(l["P"])("Image"),w=Object(l["P"])("ImageDoc");return Object(l["H"])(),Object(l["j"])("div",null,[Object(l["k"])("div",c,[Object(l["k"])("div",a,[i,Object(l["k"])("p",null,[r,Object(l["o"])(k,{to:"galleria"},{default:Object(l["Z"])((function(){return[o]})),_:1}),b])]),Object(l["o"])(g)]),Object(l["k"])("div",u,[Object(l["k"])("div",p,[s,Object(l["o"])(h,{src:"demo/images/galleria/galleria1.jpg",alt:"Image",width:"250"}),j,Object(l["o"])(h,{src:"demo/images/galleria/galleria11.jpg",alt:"Image",width:"250",preview:""})])]),Object(l["o"])(w)])}var O=Object(l["k"])("h5",null,"Import via Module",-1),m=Object(l["k"])("code",null,"\nimport Image from 'primevue/image';\n\n",-1),k=[m],g=Object(l["k"])("h5",null,"Import via CDN",-1),h=Object(l["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/image/image.min.js"><\/script>\n\n',-1),w=[h],v=Object(l["k"])("h5",null,"Getting Started",-1),f=Object(l["k"])("p",null,[Object(l["n"])("Image is used as the native "),Object(l["k"])("i",null,"img"),Object(l["n"])(" element and supports all properties that the native element has.")],-1),I=Object(l["k"])("code",null,'\n<Image src="image1.png" alt="Image Text" />\n\n',-1),y=[I],P=Object(l["k"])("h5",null,"Preview",-1),A=Object(l["k"])("p",null,"Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming.",-1),D=Object(l["k"])("h5",null,"Indicator Templating",-1),N=Object(l["k"])("p",null,[Object(l["n"])("An eye icon is displayed by default when the image is hovered in preview mode. Use the "),Object(l["k"])("i",null,"indicator"),Object(l["n"])(" template for custom content.")],-1),S=Object(l["k"])("code",null,'\n<Image src="image1.png" alt="Image Text">\n    <template #indicator>\n        Preview Content\n    </template>\n</Image>\n\n',-1),T=[S],C=Object(l["k"])("h5",null,"Properties",-1),H=Object(l["k"])("p",null,"Image passes any valid attribute to the underlying img element, additional attribute is the following.",-1),B=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Type"),Object(l["k"])("th",null,"Default"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"preview"),Object(l["k"])("td",null,"boolean"),Object(l["k"])("td",null,"false"),Object(l["k"])("td",null,"Controls the preview functionality.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"imageStyle"),Object(l["k"])("td",null,"any"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Inline style of the image element.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"imageClass"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Style class of the image element.")])])])],-1),x=Object(l["k"])("h5",null,"Events",-1),E=Object(l["k"])("p",null,"Any valid event like click and mouseover are passed to the underlying input element. Events below are the additional ones related to the preview functionality.",-1),Z=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Parameters"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"show"),Object(l["k"])("td",null,"-"),Object(l["k"])("td",null,"Triggered when the preview overlay is shown.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"hide"),Object(l["k"])("td",null,"-"),Object(l["k"])("td",null,"Triggered when the preview overlay is hidden.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"error"),Object(l["k"])("td",null,"-"),Object(l["k"])("td",null,"Triggered when an error occurs while loading an image file.")])])])],-1),_=Object(l["k"])("h5",null,"Slots",-1),F=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Parameters")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"indicator"),Object(l["k"])("td",null,"-")])])])],-1),G=Object(l["k"])("h5",null,"Styling",-1),J=Object(l["n"])("Following is the list of structural style classes, for theming classes visit "),M=Object(l["n"])("theming"),z=Object(l["n"])(" page."),Q=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Element")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-image"),Object(l["k"])("td",null,"Container element.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-image-preview-container"),Object(l["k"])("td",null,"Container element with preview enabled.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-image-preview-indicator"),Object(l["k"])("td",null,"Mask layer over the image when hovered.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-image-preview-icon"),Object(l["k"])("td",null,"Icon of the preview indicator.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-image-mask"),Object(l["k"])("td",null,"Preview overlay container.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-image-toolbar"),Object(l["k"])("td",null,"Transformation options container.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-image-action"),Object(l["k"])("td",null,"An element inside the toolbar.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-image-preview"),Object(l["k"])("td",null,"Image element inside the preview overlay.")])])])],-1),U=Object(l["k"])("h5",null,"Dependencies",-1),V=Object(l["k"])("p",null,"None.",-1);function q(e,t,n,c,a,i){var r=Object(l["P"])("router-link"),o=Object(l["P"])("AppDoc"),b=Object(l["Q"])("code");return Object(l["H"])(),Object(l["h"])(o,{name:"ImageDemo",sources:a.sources,github:"image/ImageDemo.vue"},{default:Object(l["Z"])((function(){return[O,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,k)),[[b,void 0,void 0,{script:!0}]]),g,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,w)),[[b]]),v,f,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,y)),[[b]]),P,A,D,N,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,T)),[[b]]),C,H,B,x,E,Z,_,F,G,Object(l["k"])("p",null,[J,Object(l["o"])(r,{to:"/theming"},{default:Object(l["Z"])((function(){return[M]})),_:1}),z]),Q,U,V]})),_:1},8,["sources"])}var K={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Basic</h5>\n        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />\n\n        <h5>Preview</h5>\n        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />\n    </div>\n</template>\n\n<script>\nexport default {\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Basic</h5>\n        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />\n\n        <h5>Preview</h5>\n        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />\n    </div>\n</template>\n\n<script>\nexport default {\n}\n<\\/script>'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/image/image.min.js"><\\/script>',content:'<div id="app">\n            <h5>Basic</h5>\n            <p-image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250"></p-image>\n\n            <h5>Preview</h5>\n            <p-image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview></p-image>\n        </div>\n\n        <script type="module">\n        const { createApp } = Vue;\n\n        const App = {\n            components: {\n                "p-image": primevue.image\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>'}}}}},L=n("6b0d"),R=n.n(L);const W=R()(K,[["render",q]]);var X=W,Y={components:{ImageDoc:X}};const $=R()(Y,[["render",d]]);t["default"]=$}}]);