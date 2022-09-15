(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b92cc3a"],{"0c80":function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i=n("5484"),r=n.n(i),o=n("6ac1"),c=n.n(o),a=n("a0e7"),l=n.n(a),p=n("2c13"),u=n.n(p),m=n("842c"),h=n.n(m),d=Object(s["k"])("div",{class:"content-section introduction"},[Object(s["k"])("div",{class:"feature-intro"},[Object(s["k"])("h1",null,"Setup"),Object(s["k"])("p",null,"PrimeVue is a rich set of open source native components for Vue.")])],-1),b={class:"content-section documentation"},v=Object(s["k"])("h3",null,"Module Loader",-1),j=Object(s["k"])("p",null,[Object(s["n"])(" This is the recommended way if your application uses "),Object(s["k"])("a",{href:"https://cli.vuejs.org"},"Vue CLI"),Object(s["n"])(", "),Object(s["k"])("a",{href:"https://vitejs.dev"},"Vite"),Object(s["n"])(" or has a webpack based build with "),Object(s["k"])("a",{href:"https://github.com/vuejs/vue-loader"},"vue-loader"),Object(s["n"])(" configured. ")],-1),f=Object(s["k"])("p",null,[Object(s["n"])("PrimeVue is available at "),Object(s["k"])("a",{href:"https://www.npmjs.com/package/primevue"},"npm"),Object(s["n"])(", if you have an existing application run the following commands to download PrimeVue and PrimeIcons to your project.")],-1),O=Object(s["k"])("code",null,"\nnpm install primevue@^3.17.1-SNAPSHOT --save\nnpm install primeicons --save\n\n",-1),g=[O],k=Object(s["k"])("p",null,"Next step is setting up PrimeVue configuration.",-1),y=Object(s["k"])("code",null,"\nimport {createApp} from 'vue';\nimport App from './App.vue';\nimport PrimeVue from 'primevue/config';\nconst app = createApp(App);\n\napp.use(PrimeVue);\n\n",-1),w=[y],x=Object(s["k"])("p",null,"Then import and register a component from the library. Import path is available in the documentation of the corresponding component.",-1),P=Object(s["k"])("code",null,"\nimport {createApp} from 'vue';\nimport App from './App.vue';\nimport PrimeVue from 'primevue/config';\nimport Dialog from 'primevue/dialog';\nconst app = createApp(App);\n\napp.use(PrimeVue);\n\napp.component('Dialog', Dialog);\n\n",-1),A=[P],V=Object(s["k"])("p",null,[Object(s["n"])("Finally you'll be able to utilize the component in your application. See the "),Object(s["k"])("b",null,"Styles"),Object(s["n"])(" section to apply styling.")],-1),I=Object(s["k"])("code",null,"\n<Dialog></Dialog>\n\n",-1),S=[I],H=Object(s["k"])("p",null,"Watch the video tutorial that goes through these steps.",-1),C=Object(s["k"])("div",{class:"video-container"},[Object(s["k"])("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cGTXuyqIwMA",frameborder:"0",allowfullscreen:""})],-1),D=Object(s["k"])("h5",null,"Single File Components",-1),L=Object(s["k"])("p",null,[Object(s["n"])(" SFC files are available in the npm distribution and if you'd like to use SFCs directly, add "),Object(s["k"])("i",null,"/sfc"),Object(s["n"])(" as a suffix when referencing an import path. This will instruct your bundler to process the *.vue files in your local build instead of using the compiled output. One use case for this approach is optimizing for SSR by removing whitespaces. ")],-1),N=Object(s["k"])("code",null,"\nimport Dialog from 'primevue/dialog/sfc';\n\n",-1),F=[N],T=Object(s["k"])("h3",null,"Script Tag",-1),q=Object(s["k"])("p",null,[Object(s["n"])("Other alternative is utilizing the components directly within the browser with the "),Object(s["k"])("i",null,"iife"),Object(s["n"])(" build. Note that PrimeVue does not provide a "),Object(s["k"])("i",null,"umd"),Object(s["n"])(" build.")],-1),z=Object(s["k"])("code",null,[Object(s["k"])("template",null,[Object(s["n"])('\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>PrimeVue Demo</title>\n        <link href="https://unpkg.com/primevue/resources/themes/lara-light-indigo/theme.css" rel="stylesheet">\n        <link href="https://unpkg.com/primevue/resources/primevue.min.css" rel="stylesheet">\n        <link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet">\n\n        <script src="https://unpkg.com/vue@next"><\/script>\n        <script src="https://unpkg.com/primevue/core/core.min.js"><\/script>\n        <script src="https://unpkg.com/primevue/slider/slider.min.js"><\/script>\n    </head>\n\n    <body>\n        <div id="app">\n            <p-slider v-model="val"></p-slider>\n            <h6>{{val}}</h6>\n        </div>\n\n        <script>\n            const {createApp, ref} = Vue;\n\n            const App = {\n                setup() {\n                    const val = ref(null);\n\n                    return {\n                        val\n                    };\n                },\n                components: {\n                    \'p-slider\': primevue.slider\n                }\n            };\n\n            createApp(App).use(primevue.config.default).mount("#app");\n        <\/script>\n    </body>\n</html>\n')]),Object(s["n"])("\n")],-1),Q=[z],E=Object(s["k"])("h3",null,"Styles",-1),B=Object(s["k"])("p",null,"The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you may import them to your main application component.",-1),M=Object(s["k"])("code",null,"\nprimevue/resources/themes/saga-blue/theme.css       //theme\nprimevue/resources/primevue.min.css                 //core css\nprimeicons/primeicons.css                           //icons\n\n",-1),R=[M],Z=Object(s["k"])("h5",null,"Free Themes",-1),J=Object(s["k"])("p",null,"PrimeVue ships with various free themes to choose from.",-1),G=Object(s["k"])("code",null,"\nprimevue/resources/themes/bootstrap4-light-blue/theme.css\nprimevue/resources/themes/bootstrap4-light-purple/theme.css\nprimevue/resources/themes/bootstrap4-dark-blue/theme.css\nprimevue/resources/themes/bootstrap4-dark-purple/theme.css\nprimevue/resources/themes/md-light-indigo/theme.css\nprimevue/resources/themes/md-light-deeppurple/theme.css\nprimevue/resources/themes/md-dark-indigo/theme.css\nprimevue/resources/themes/md-dark-deeppurple/theme.css\nprimevue/resources/themes/mdc-light-indigo/theme.css\nprimevue/resources/themes/mdc-light-deeppurple/theme.css\nprimevue/resources/themes/mdc-dark-indigo/theme.css\nprimevue/resources/themes/mdc-dark-deeppurple/theme.css\nprimevue/resources/themes/tailwind-light/theme.css\nprimevue/resources/themes/fluent-light/theme.css\nprimevue/resources/themes/lara-light-indigo/theme.css\nprimevue/resources/themes/lara-dark-indigo/theme.css\nprimevue/resources/themes/lara-light-purple/theme.css\nprimevue/resources/themes/lara-dark-purple/theme.css\nprimevue/resources/themes/lara-light-blue/theme.css\nprimevue/resources/themes/lara-dark-blue/theme.css\nprimevue/resources/themes/lara-light-teal/theme.css\nprimevue/resources/themes/lara-dark-teal/theme.css\nprimevue/resources/themes/saga-blue/theme.css\nprimevue/resources/themes/saga-green/theme.css\nprimevue/resources/themes/saga-orange/theme.css\nprimevue/resources/themes/saga-purple/theme.css\nprimevue/resources/themes/vela-blue/theme.css\nprimevue/resources/themes/vela-green/theme.css\nprimevue/resources/themes/vela-orange/theme.css\nprimevue/resources/themes/vela-purple/theme.css\nprimevue/resources/themes/arya-blue/theme.css\nprimevue/resources/themes/arya-green/theme.css\nprimevue/resources/themes/arya-orange/theme.css\nprimevue/resources/themes/arya-purple/theme.css\nprimevue/resources/themes/nova/theme.css\nprimevue/resources/themes/nova-alt/theme.css\nprimevue/resources/themes/nova-accent/theme.css\nprimevue/resources/themes/nova-vue/theme.css\nprimevue/resources/themes/luna-amber/theme.css\nprimevue/resources/themes/luna-blue/theme.css\nprimevue/resources/themes/luna-green/theme.css\nprimevue/resources/themes/luna-pink/theme.css\nprimevue/resources/themes/rhea/theme.css\n\n",-1),W=[G],X=Object(s["k"])("h5",null,"PrimeFlex",-1),_=Object(s["k"])("p",null,[Object(s["n"])(" PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more. Although it is not required, it is highly recommended to add PrimeFlex as it is likely to need such utilities when developing applications. View the "),Object(s["k"])("a",{href:"https://www.primefaces.org/primeflex"},"PrimeFlex"),Object(s["n"])(" homepage for the more information. ")],-1),K=Object(s["k"])("h3",null,"Nuxt Integration",-1),U=Object(s["k"])("p",null,"Nuxt 3 is currently in beta and an official module is planned after the final release. At the moment, PrimeVue can easily be used with Nuxt 3 using a custom plugin.",-1),Y=Object(s["k"])("h6",null,"nuxt.config.js",-1),$=Object(s["k"])("p",null,"Open the nuxt configuration file and add the css dependencies.",-1),ee=Object(s["k"])("code",null,"\nimport { defineNuxtConfig } from 'nuxt3'\n\nexport default defineNuxtConfig({\n    css: [\n        'primevue/resources/themes/saga-blue/theme.css',\n        'primevue/resources/primevue.css',\n        'primeicons/primeicons.css'\n    ]\n})\n\n",-1),te=[ee],ne=Object(s["k"])("h6",null,"primevue.js",-1),se=Object(s["k"])("p",null,[Object(s["n"])("Create a file like "),Object(s["k"])("i",null,"primevue.js"),Object(s["n"])(" under the plugins directory for the configuration.")],-1),ie=Object(s["k"])("code",null,'\nimport { defineNuxtPlugin } from "#app";\nimport PrimeVue from "primevue/config";\nimport Button from "primevue/button";\n\nexport default defineNuxtPlugin((nuxtApp) => {\n    nuxtApp.vueApp.use(PrimeVue, {ripple: true});\n    nuxtApp.vueApp.component(\'Button\', Button);\n    //other components that you need\n});\n\n',-1),re=[ie],oe=Object(s["k"])("h3",null,"Configuration",-1),ce=Object(s["k"])("h5",null,"Dependencies",-1),ae=Object(s["k"])("p",null,"PrimeVue components are not wrappers and implemented natively with the Vue APIs. There are some exceptions having 3rd party dependencies such as Quill for Editor.",-1),le=Object(s["k"])("p",null,"In addition, components require PrimeIcons library for icons.",-1),pe=Object(s["k"])("h6",null,"Mandatory",-1),ue=Object(s["k"])("code",null,'\ndependencies: {\n    "vue": "^3.0.0",\n    "primeicons": "^5.0.0"\n}\n\n',-1),me=[ue],he=Object(s["m"])('<h6>Optional</h6><p>Here is the list of components with 3rd party dependencies. Documentation of each component has a dependencies section as well.</p><div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Component</th><th>Dependency</th></tr></thead><tbody><tr><td>Charts</td><td>Charts.js 3.3.2+</td></tr><tr><td>Editor</td><td>Quill.js 1.3.3+</td></tr><tr><td>PrimeFlex</td><td>DataView</td></tr></tbody></table></div><h5>Prop Cases</h5><p>Component prop names are described as camel case throughout the documentation however camel-case is also fully supported. Events on the other hand should always be camel-case.</p>',5),de=Object(s["k"])("code",null,'\n<Dialog :showHeader="false"></Dialog>\n\n\x3c!-- can be written as --\x3e\n\n<Dialog :show-header="false"></Dialog>\n\n',-1),be=[de],ve=Object(s["k"])("h5",null,"Ripple",-1),je=Object(s["k"])("p",null,"Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at your app's entry file (e.g. main.js) during the PrimeVue setup.",-1),fe=Object(s["k"])("code",null,"\nimport {createApp} from 'vue';\nimport PrimeVue from 'primevue/config';\nconst app = createApp(App);\n\napp.use(PrimeVue, {ripple: true});\n\n",-1),Oe=[fe],ge=Object(s["k"])("h5",null,"Outlined vs Filled Input Styles",-1),ke=Object(s["k"])("p",null,[Object(s["n"])(" Input fields come in two styles, default is "),Object(s["k"])("i",null,"outlined"),Object(s["n"])(" with borders around the field whereas "),Object(s["k"])("i",null,"filled"),Object(s["n"])(" alternative adds a background color to the field. Applying "),Object(s["k"])("i",null,"p-input-filled"),Object(s["n"])(" to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application, use a global container such as the document body or the application element to apply the style class. Note that in case you add it to the application element, components that are teleported to the document body such as Dialog will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree, to resolve this case set inputStyle to 'filled' at PrimeVue configuration as well. ")],-1),ye=Object(s["k"])("code",null,"\nimport {createApp} from 'vue';\nimport PrimeVue from 'primevue/config';\nconst app = createApp(App);\n\napp.use(PrimeVue, {inputStyle: 'filled'});\n\n",-1),we=[ye],xe=Object(s["k"])("h5",null,"ZIndex Layering",-1),Pe=Object(s["k"])("p",null,[Object(s["n"])(" ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure the configure default values such as a custom layout where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. PrimeVue configuration offers the "),Object(s["k"])("i",null,"zIndex"),Object(s["n"])(" property to customize the default values for components categories. Default values are described below and can be customized when setting up PrimeVue. ")],-1),Ae=Object(s["k"])("code",null,"\nimport {createApp} from 'vue';\nimport PrimeVue from 'primevue/config';\nconst app = createApp(App);\n\napp.use(PrimeVue, {\n    zIndex: {\n        modal: 1100,        //dialog, sidebar\n        overlay: 1000,      //dropdown, overlaypanel\n        menu: 1000,         //overlay menus\n        tooltip: 1100       //tooltip\n    }\n});\n\n",-1),Ve=[Ae],Ie=Object(s["k"])("h5",null,"Locale",-1),Se=Object(s["n"])("PrimeVue provides a Locale API to support i18n and l7n, visit the "),He=Object(s["n"])("Locale"),Ce=Object(s["n"])(" documentation for more information."),De=Object(s["m"])('<h5>Browser Support</h5><div class="doc-tablewrapper"><table class="doc-table browsers"><thead><tr><th><div class="flex align-items-center"><img src="'+r.a+'" alt="edge" style="width:1.5rem;" class="mr-2"> Edge </div></th><th><div class="flex align-items-center"><img src="'+c.a+'" alt="firefox" style="width:1.5rem;" class="mr-2"> Firefox </div></th><th><div class="flex align-items-center"><img src="'+l.a+'" alt="chrome" style="width:1.5rem;" class="mr-2"> Chrome </div></th><th><div class="flex align-items-center"><img src="'+u.a+'" alt="safari" style="width:1.5rem;" class="mr-2"> Safari </div></th><th><div class="flex align-items-center"><img src="'+h.a+'" alt="opera" style="width:1.5rem;" class="mr-2"> Opera </div></th></tr></thead><tbody><tr><td>Edge</td><td>Last 2 versions</td><td>Last 2 versions</td><td>Last 2 versions</td><td>Last 2 versions</td></tr></tbody></table></div><h3>Samples</h3><h5>Typescript</h5><p> Typescript is fully supported as type definition files are provided in the npm package of PrimeVue. A sample <a href="https://github.com/primefaces/primevue-typescript-quickstart">typescript-primevue</a> application with Vue CLI is available as at github. </p><h5>Quickstart with Vue CLI</h5><p>An <a href="https://github.com/primefaces/primevue-quickstart">example application</a> based on Vue CLI is available at github.</p><h5>Quickstart with Vite</h5><p>A <a href="https://github.com/primefaces/primevue-quickstart-vite">starter application</a> is also provided for Vite users.</p><h5>Quickstart with Nuxt</h5><p>A <a href="https://github.com/primefaces/primevue-quickstart-nuxt3">sample application</a> is created for Nuxt 3 users.</p>',11);function Le(e,t){var n=Object(s["P"])("router-link"),i=Object(s["Q"])("code");return Object(s["H"])(),Object(s["j"])("div",null,[d,Object(s["k"])("div",b,[v,j,f,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,g)),[[i,void 0,void 0,{script:!0}]]),k,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,w)),[[i,void 0,void 0,{script:!0}]]),x,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,A)),[[i,void 0,void 0,{script:!0}]]),V,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,S)),[[i]]),H,C,D,L,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,F)),[[i,void 0,void 0,{script:!0}]]),T,q,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,Q)),[[i]]),E,B,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,R)),[[i,void 0,void 0,{script:!0}]]),Z,J,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,W)),[[i,void 0,void 0,{css:!0}]]),X,_,K,U,Y,$,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,te)),[[i,void 0,void 0,{script:!0}]]),ne,se,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,re)),[[i,void 0,void 0,{script:!0}]]),oe,ce,ae,le,pe,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,me)),[[i,void 0,void 0,{script:!0}]]),he,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,be)),[[i]]),ve,je,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,Oe)),[[i,void 0,void 0,{script:!0}]]),ge,ke,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,we)),[[i,void 0,void 0,{script:!0}]]),xe,Pe,Object(s["ab"])((Object(s["H"])(),Object(s["j"])("pre",null,Ve)),[[i,void 0,void 0,{script:!0}]]),Ie,Object(s["k"])("p",null,[Se,Object(s["o"])(n,{to:"/locale"},{default:Object(s["Z"])((function(){return[He]})),_:1}),Ce]),De])])}var Ne=n("6b0d"),Fe=n.n(Ne);const Te={},qe=Fe()(Te,[["render",Le]]);t["default"]=qe},"2c13":function(e,t,n){e.exports=n.p+"img/safari.237a7f3b.svg"},5484:function(e,t,n){e.exports=n.p+"img/edge.4640fb10.svg"},"6ac1":function(e,t,n){e.exports=n.p+"img/firefox.d85dc16d.svg"},"842c":function(e,t,n){e.exports=n.p+"img/opera.f82b3d4a.svg"},a0e7:function(e,t,n){e.exports=n.p+"img/chrome.d60a042e.svg"}}]);