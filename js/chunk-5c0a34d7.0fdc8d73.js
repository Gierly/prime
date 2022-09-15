(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c0a34d7"],{"025f":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c={class:"content-section introduction"},r=Object(o["k"])("div",{class:"feature-intro"},[Object(o["k"])("h1",null,[Object(o["n"])("DataTable "),Object(o["k"])("span",null,"Basic")]),Object(o["k"])("p",null,"DataTable requires a collection to display along with column components for the representation of the data.")],-1),a={class:"content-section implementation"},u={class:"card"};function d(e,t,n,d,i,l){var s=Object(o["P"])("AppDemoActions"),p=Object(o["P"])("Column"),m=Object(o["P"])("DataTable"),v=Object(o["P"])("DataTableBasicDoc");return Object(o["H"])(),Object(o["j"])("div",null,[Object(o["k"])("div",c,[r,Object(o["o"])(s)]),Object(o["k"])("div",a,[Object(o["k"])("div",u,[Object(o["o"])(m,{value:i.products,responsiveLayout:"scroll"},{default:Object(o["Z"])((function(){return[Object(o["o"])(p,{field:"code",header:"Code"}),Object(o["o"])(p,{field:"name",header:"Name"}),Object(o["o"])(p,{field:"category",header:"Category"}),Object(o["o"])(p,{field:"quantity",header:"Quantity"})]})),_:1},8,["value"])])]),Object(o["o"])(v)])}var i=n("e9c0");function l(e,t,n,c,r,a){var u=Object(o["P"])("AppDoc");return Object(o["H"])(),Object(o["h"])(u,{name:"DataTableBasicDemo",sources:r.sources,service:["ProductService"],data:["products-small"],github:"datatable/DataTableBasicDemo.vue"},null,8,["sources"])}var s={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <DataTable :value="products" responsiveLayout="scroll">\n            <Column field="code" header="Code"></Column>\n            <Column field="name" header="Name"></Column>\n            <Column field="category" header="Category"></Column>\n            <Column field="quantity" header="Quantity"></Column>\n        </DataTable>\n    </div>\n</template>\n\n<script>\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    data() {\n        return {\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    }\n}\n<\\/script>\n                    '},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n\t<div>\n        <DataTable :value="products" responsiveLayout="scroll">\n            <Column field="code" header="Code"></Column>\n            <Column field="name" header="Name"></Column>\n            <Column field="category" header="Category"></Column>\n            <Column field="quantity" header="Quantity"></Column>\n        </DataTable>\n\t</div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            productService.value.getProductsSmall().then(data => products.value = data);\n        })\n\n        const products = ref();\n        const productService = ref(new ProductService());\n\n        return { products, productService }\n    }\n}\n<\\/script>         \n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="./ProductService.js"><\\/script>',content:'<div id="app">\n            <div class="card">\n                <p-datatable :value="products" responsive-layout="scroll">\n                    <p-column field="code" header="Code"></p-column>\n                    <p-column field="name" header="Name"></p-column>\n                    <p-column field="category" header="Category"></p-column>\n                    <p-column field="quantity" header="Quantity"></p-column>\n                </p-datatable>\n            </div>\n        </div>\n\n        <script type="module">\n            const { createApp, onMounted, ref } = Vue;\n\n            const App = {\n                setup() {\n                    onMounted(() => {\n                        productService.value.getProductsSmall().then(data => products.value = data);\n                    })\n\n                    const products = ref();\n                    const productService = ref(new ProductService());\n\n                    return { products }\n                },\n                components: {\n                    "p-datatable": primevue.datatable,\n                    "p-column": primevue.column\n                }\n            };\n\n            const app = createApp(App);\n            app.use(primevue.config.default);\n            app.mount("#app");\n        <\\/script>\n        '}}}}},p=n("6b0d"),m=n.n(p);const v=m()(s,[["render",l]]);var f=v,b={data:function(){return{products:null}},productService:null,created:function(){this.productService=new i["a"]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))},components:{DataTableBasicDoc:f}};const h=m()(b,[["render",d]]);t["default"]=h},e9c0:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("d4ec"),c=n("bee2"),r=(n("d3b7"),function(){function e(){Object(o["a"])(this,e)}return Object(c["a"])(e,[{key:"getProductsSmall",value:function(){return fetch("demo/data/products-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch("demo/data/products.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("demo/data/products-orders-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}())}}]);