(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bacb50e"],{"1ced":function(e,n,t){"use strict";t.r(n);var c=t("7a23"),o={class:"content-section introduction"},r=Object(c["k"])("div",{class:"feature-intro"},[Object(c["k"])("h1",null,[Object(c["n"])("DataTable "),Object(c["k"])("span",null,"Dynamic Columns")]),Object(c["k"])("p",null,"Columns can be defined dynamically using the v-for directive.")],-1),a={class:"content-section implementation"},u={class:"card"};function d(e,n,t,d,l,i){var s=Object(c["P"])("AppDemoActions"),p=Object(c["P"])("Column"),m=Object(c["P"])("DataTable"),f=Object(c["P"])("AppDoc");return Object(c["H"])(),Object(c["j"])("div",null,[Object(c["k"])("div",o,[r,Object(c["o"])(s)]),Object(c["k"])("div",a,[Object(c["k"])("div",u,[Object(c["o"])(m,{value:l.products,responsiveLayout:"scroll"},{default:Object(c["Z"])((function(){return[(Object(c["H"])(!0),Object(c["j"])(c["a"],null,Object(c["N"])(l.columns,(function(e){return Object(c["H"])(),Object(c["h"])(p,{key:e.field,field:e.field,header:e.header},null,8,["field","header"])})),128))]})),_:1},8,["value"])])]),Object(c["o"])(f,{name:"DataTableDynamicColumnsDemo",sources:l.sources,service:["ProductService"],data:["products-small"],github:"datatable/DataTableDynamicColumnsDemo.vue"},null,8,["sources"])])}var l=t("e9c0"),i={data:function(){return{columns:null,products:null,sources:{"options-api":{tabName:"Options API Source",content:"\n<template>\n    <div>\n        <DataTable :value=\"products\" responsiveLayout=\"scroll\">\n            <Column v-for=\"col of columns\" :field=\"col.field\" :header=\"col.header\" :key=\"col.field\"></Column>\n        </DataTable>\n    </div>\n</template>\n\n<script>\nimport ProductService from './service/ProductService';\n\nexport default {\n    data() {\n        return {\n            columns: null,\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n\n        this.columns = [\n            {field: 'code', header: 'Code'},\n            {field: 'name', header: 'Name'},\n            {field: 'category', header: 'Category'},\n            {field: 'quantity', header: 'Quantity'}\n        ];\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    }\n}\n<\\/script>\n"},"composition-api":{tabName:"Composition API Source",content:"\n<template>\n    <div>\n        <DataTable :value=\"products\" responsiveLayout=\"scroll\">\n            <Column v-for=\"col of columns\" :field=\"col.field\" :header=\"col.header\" :key=\"col.field\"></Column>\n        </DataTable>\n    </div>\n</template>\n\n<script>\nimport { ref, onMounted } from 'vue';\nimport ProductService from './service/ProductService';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            productService.value.getProductsSmall().then(data => products.value = data);\n        })\n\n        const productService = ref(new ProductService());\n        const columns = ref([\n            {field: 'code', header: 'Code'},\n            {field: 'name', header: 'Name'},\n            {field: 'category', header: 'Category'},\n            {field: 'quantity', header: 'Quantity'}\n        ]);\n        const products = ref();\n\n        return { columns, products }\n    }\n}\n<\\/script>\n"},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="./ProductService.js"><\\/script>',content:'<div id="app">\n            <p-datatable :value="products" responsive-layout="scroll">\n                <p-column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></p-column>\n            </p-datatable>\n        </div>\n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    productService.value.getProductsSmall().then(data => products.value = data);\n                })\n\n                const productService = ref(new ProductService());\n                const columns = ref([\n                    {field: \'code\', header: \'Code\'},\n                    {field: \'name\', header: \'Name\'},\n                    {field: \'category\', header: \'Category\'},\n                    {field: \'quantity\', header: \'Quantity\'}\n                ]);\n                const products = ref();\n\n                return { columns, products }\n            },\n            components: {\n                "p-datatable": primevue.datatable,\n                "p-column": primevue.column\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n'}}}},productService:null,created:function(){this.productService=new l["a"],this.columns=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(n){return e.products=n}))}},s=t("6b0d"),p=t.n(s);const m=p()(i,[["render",d]]);n["default"]=m},e9c0:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var c=t("d4ec"),o=t("bee2"),r=(t("d3b7"),function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"getProductsSmall",value:function(){return fetch("demo/data/products-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch("demo/data/products.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("demo/data/products-orders-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}())}}]);