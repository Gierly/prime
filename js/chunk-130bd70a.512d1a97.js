(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-130bd70a"],{"7d35":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),l={class:"content-section introduction"},a=Object(o["k"])("div",{class:"feature-intro"},[Object(o["k"])("h1",null,[Object(o["n"])("DataTable "),Object(o["k"])("span",null,"Selection")]),Object(o["k"])("p",null,"DataTable provides single and multiple selection modes based on row click or using radio button and checkbox elements.")],-1),d={class:"content-section implementation"},c={class:"card"},u=Object(o["k"])("h5",null,"Single",-1),r=Object(o["k"])("p",null,"In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.",-1),s={class:"card"},i=Object(o["k"])("h5",null,"Multiple",-1),m=Object(o["k"])("p",null," In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required. Setting metaKeySelection property as false enables multiple selection without meta key. ",-1),p=Object(o["n"])(" Multiple Selection with MetaKey "),h=Object(o["n"])(" Multiple Selection without MetaKey "),y={class:"card"},v=Object(o["k"])("h5",null,"Events",-1),f=Object(o["k"])("p",null,"row-select and row-unselects are available as selection events.",-1),C={class:"card"},b=Object(o["k"])("h5",null,"RadioButton",-1),P=Object(o["k"])("p",null,'Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".',-1),g={class:"card"},j=Object(o["k"])("h5",null,"Checkbox",-1);function O(e,t,n,O,S,w){var M=Object(o["P"])("AppDemoActions"),k=Object(o["P"])("Column"),K=Object(o["P"])("DataTable"),N=Object(o["P"])("AppDoc");return Object(o["H"])(),Object(o["j"])("div",null,[Object(o["k"])("div",l,[a,Object(o["o"])(M)]),Object(o["k"])("div",d,[Object(o["k"])("div",c,[u,r,Object(o["o"])(K,{selection:S.selectedProduct1,"onUpdate:selection":t[0]||(t[0]=function(e){return S.selectedProduct1=e}),value:S.products,selectionMode:"single",dataKey:"id",responsiveLayout:"scroll"},{default:Object(o["Z"])((function(){return[Object(o["o"])(k,{field:"code",header:"Code"}),Object(o["o"])(k,{field:"name",header:"Name"}),Object(o["o"])(k,{field:"category",header:"Category"}),Object(o["o"])(k,{field:"quantity",header:"Quantity"})]})),_:1},8,["selection","value"])]),Object(o["k"])("div",s,[i,m,Object(o["o"])(K,{selection:S.selectedProducts1,"onUpdate:selection":t[1]||(t[1]=function(e){return S.selectedProducts1=e}),value:S.products,selectionMode:"multiple",dataKey:"id",responsiveLayout:"scroll"},{header:Object(o["Z"])((function(){return[p]})),default:Object(o["Z"])((function(){return[Object(o["o"])(k,{field:"code",header:"Code"}),Object(o["o"])(k,{field:"name",header:"Name"}),Object(o["o"])(k,{field:"category",header:"Category"}),Object(o["o"])(k,{field:"quantity",header:"Quantity"})]})),_:1},8,["selection","value"]),Object(o["o"])(K,{selection:S.selectedProducts2,"onUpdate:selection":t[2]||(t[2]=function(e){return S.selectedProducts2=e}),value:S.products,selectionMode:"multiple",dataKey:"id",metaKeySelection:!1,style:{"margin-top":"2em"},responsiveLayout:"scroll"},{header:Object(o["Z"])((function(){return[h]})),default:Object(o["Z"])((function(){return[Object(o["o"])(k,{field:"code",header:"Code"}),Object(o["o"])(k,{field:"name",header:"Name"}),Object(o["o"])(k,{field:"category",header:"Category"}),Object(o["o"])(k,{field:"quantity",header:"Quantity"})]})),_:1},8,["selection","value"])]),Object(o["k"])("div",y,[v,f,Object(o["o"])(K,{selection:S.selectedProduct2,"onUpdate:selection":t[3]||(t[3]=function(e){return S.selectedProduct2=e}),value:S.products,selectionMode:"single",dataKey:"id",onRowSelect:w.onRowSelect,onRowUnselect:w.onRowUnselect,responsiveLayout:"scroll"},{default:Object(o["Z"])((function(){return[Object(o["o"])(k,{field:"code",header:"Code"}),Object(o["o"])(k,{field:"name",header:"Name"}),Object(o["o"])(k,{field:"category",header:"Category"}),Object(o["o"])(k,{field:"quantity",header:"Quantity"})]})),_:1},8,["selection","value","onRowSelect","onRowUnselect"])]),Object(o["k"])("div",C,[b,P,Object(o["o"])(K,{selection:S.selectedProduct3,"onUpdate:selection":t[4]||(t[4]=function(e){return S.selectedProduct3=e}),value:S.products,dataKey:"id",responsiveLayout:"scroll"},{default:Object(o["Z"])((function(){return[Object(o["o"])(k,{selectionMode:"single",headerStyle:"width: 3em"}),Object(o["o"])(k,{field:"code",header:"Code"}),Object(o["o"])(k,{field:"name",header:"Name"}),Object(o["o"])(k,{field:"category",header:"Category"}),Object(o["o"])(k,{field:"quantity",header:"Quantity"})]})),_:1},8,["selection","value"])]),Object(o["k"])("div",g,[j,Object(o["o"])(K,{selection:S.selectedProducts3,"onUpdate:selection":t[5]||(t[5]=function(e){return S.selectedProducts3=e}),value:S.products,dataKey:"id",responsiveLayout:"scroll"},{default:Object(o["Z"])((function(){return[Object(o["o"])(k,{selectionMode:"multiple",headerStyle:"width: 3em"}),Object(o["o"])(k,{field:"code",header:"Code"}),Object(o["o"])(k,{field:"name",header:"Name"}),Object(o["o"])(k,{field:"category",header:"Category"}),Object(o["o"])(k,{field:"quantity",header:"Quantity"})]})),_:1},8,["selection","value"])])]),Object(o["o"])(N,{name:"DataTableSelectionDemo",sources:S.sources,service:["ProductService"],data:["products-small"],github:"datatable/DataTableSelectionDemo.vue"},null,8,["sources"])])}n("b0c0");var S=n("e9c0"),w={data:function(){return{products:null,selectedProduct1:null,selectedProduct2:null,selectedProduct3:null,selectedProducts1:null,selectedProducts2:null,selectedProducts3:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n\t<div>\n        <Toast />\n\n        <div class="card">\n            <h5>Single</h5>\n            <DataTable :value="products" v-model:selection="selectedProduct1" selectionMode="single" dataKey="id" responsiveLayout="scroll" >\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Multiple</h5>\n            <DataTable :value="products" v-model:selection="selectedProducts1" selectionMode="multiple" dataKey="id" responsiveLayout="scroll" >\n                <template #header>\n                    Multiple Selection with MetaKey\n                </template>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n\n            <DataTable :value="products" v-model:selection="selectedProducts2" selectionMode="multiple" dataKey="id" :metaKeySelection="false" style="margin-top: 2em" responsiveLayout="scroll" >\n                <template #header>\n                    Multiple Selection without MetaKey\n                </template>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Events</h5>\n            <DataTable :value="products" v-model:selection="selectedProduct2" selectionMode="single" dataKey="id"\n                @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" responsiveLayout="scroll">\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>RadioButton</h5>\n            <DataTable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsiveLayout="scroll" >\n                <Column selectionMode="single" headerStyle="width: 3em"></Column>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Checkbox</h5>\n\n            <DataTable :value="products" v-model:selection="selectedProducts3" dataKey="id" responsiveLayout="scroll" >\n                <Column selectionMode="multiple" headerStyle="width: 3em"></Column>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    data() {\n        return {\n            products: null,\n            selectedProduct1: null,\n            selectedProduct2: null,\n            selectedProduct3: null,\n            selectedProducts1: null,\n            selectedProducts2: null,\n            selectedProducts3: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    },\n    methods: {\n        onRowSelect(event) {\n            this.$toast.add({severity: \'info\', summary: \'Product Selected\', detail: \'Name: \' + event.data.name, life: 3000});\n        },\n        onRowUnselect(event) {\n            this.$toast.add({severity: \'warn\', summary: \'Product Unselected\', detail: \'Name: \' + event.data.name, life: 3000});\n        }\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n\t<div>\n        <Toast />\n\n        <div class="card">\n            <h5>Single</h5>\n            <DataTable :value="products" v-model:selection="selectedProduct1" selectionMode="single" dataKey="id" responsiveLayout="scroll" >\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Multiple</h5>\n            <DataTable :value="products" v-model:selection="selectedProducts1" selectionMode="multiple" dataKey="id" responsiveLayout="scroll" >\n                <template #header>\n                    Multiple Selection with MetaKey\n                </template>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n\n            <DataTable :value="products" v-model:selection="selectedProducts2" selectionMode="multiple" dataKey="id" :metaKeySelection="false" style="margin-top: 2em" responsiveLayout="scroll" >\n                <template #header>\n                    Multiple Selection without MetaKey\n                </template>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Events</h5>\n            <DataTable :value="products" v-model:selection="selectedProduct2" selectionMode="single" dataKey="id"\n                @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" responsiveLayout="scroll">\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>RadioButton</h5>\n            <DataTable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsiveLayout="scroll" >\n                <Column selectionMode="single" headerStyle="width: 3em"></Column>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Checkbox</h5>\n\n            <DataTable :value="products" v-model:selection="selectedProducts3" dataKey="id" responsiveLayout="scroll" >\n                <Column selectionMode="multiple" headerStyle="width: 3em"></Column>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport { useToast } from \'primevue/usetoast\';\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            productService.value.getProductsSmall().then(data => products.value = data);\n        })\n\n        const toast = useToast();\n        const products = ref();\n        const selectedProduct1 = ref();\n        const selectedProduct2 = ref();\n        const selectedProduct3 = ref();\n        const selectedProducts1 = ref();\n        const selectedProducts2 = ref();\n        const selectedProducts3 = ref();\n        const productService = ref(new ProductService());\n\n        const onRowSelect = (event) => {\n            toast.add({severity: \'info\', summary: \'Product Selected\', detail: \'Name: \' + event.data.name, life: 3000});\n        };\n\n        const onRowUnselect = (event) => {\n            toast.add({severity: \'warn\', summary: \'Product Unselected\', detail: \'Name: \' + event.data.name, life: 3000});\n        };\n\n        return { products, selectedProduct1, selectedProduct2, selectedProduct3, selectedProducts1, selectedProducts2, selectedProducts3, onRowSelect, onRowUnselect}\n    }\n}\n<\\/script>\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/usetoast/usetoast.min.js"><\\/script>\n        <script src="./ProductService.js"><\\/script>',content:'<div id="app">\n            <p-toast></p-toast>\n\n            <div class="card">\n                <h5>Single</h5>\n                <p-datatable :value="products" v-model:selection="selectedProduct1" selection-mode="single" dataKey="id" responsive-layout="scroll" >\n                    <p-column field="code" header="Code"></p-column>\n                    <p-column field="name" header="Name"></p-column>\n                    <p-column field="category" header="Category"></p-column>\n                    <p-column field="quantity" header="Quantity"></p-column>\n                </p-datatable>\n            </div>\n\n            <div class="card">\n                <h5>Multiple</h5>\n                <p-datatable :value="products" v-model:selection="selectedProducts1" selection-mode="multiple" dataKey="id" responsive-layout="scroll" >\n                    <template #header>\n                        Multiple Selection with MetaKey\n                    </template>\n                    <p-column field="code" header="Code"></p-column>\n                    <p-column field="name" header="Name"></p-column>\n                    <p-column field="category" header="Category"></p-column>\n                    <p-column field="quantity" header="Quantity"></p-column>\n                </p-datatable>\n\n                <p-datatable :value="products" v-model:selection="selectedProducts2" selection-mode="multiple" dataKey="id" :meta-key-selection="false" style="margin-top: 2em" responsive-layout="scroll" >\n                    <template #header>\n                        Multiple Selection without MetaKey\n                    </template>\n                    <p-column field="code" header="Code"></p-column>\n                    <p-column field="name" header="Name"></p-column>\n                    <p-column field="category" header="Category"></p-column>\n                    <p-column field="quantity" header="Quantity"></p-column>\n                </p-datatable>\n            </div>\n\n            <div class="card">\n                <h5>Events</h5>\n                <p-datatable :value="products" v-model:selection="selectedProduct2" selection-mode="single" dataKey="id"\n                    @row-select="onRowSelect" @row-unselect="onRowUnselect" responsive-layout="scroll">\n                    <p-column field="code" header="Code"></p-column>\n                    <p-column field="name" header="Name"></p-column>\n                    <p-column field="category" header="Category"></p-column>\n                    <p-column field="quantity" header="Quantity"></p-column>\n                </p-datatable>\n            </div>\n\n            <div class="card">\n                <h5>RadioButton</h5>\n                <p-datatable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsive-layout="scroll" >\n                    <p-column selection-mode="single" header-style="width: 3em"></p-column>\n                    <p-column field="code" header="Code"></p-column>\n                    <p-column field="name" header="Name"></p-column>\n                    <p-column field="category" header="Category"></p-column>\n                    <p-column field="quantity" header="Quantity"></p-column>\n                </p-datatable>\n            </div>\n\n            <div class="card">\n                <h5>Checkbox</h5>\n\n                <p-datatable :value="products" v-model:selection="selectedProducts3" dataKey="id" responsive-layout="scroll" >\n                    <p-column selection-mode="multiple" header-style="width: 3em"></p-column>\n                    <p-column field="code" header="Code"></p-column>\n                    <p-column field="name" header="Name"></p-column>\n                    <p-column field="category" header="Category"></p-column>\n                    <p-column field="quantity" header="Quantity"></p-column>\n                </p-datatable>\n            </div>\n        </div>\n\n    <script type="module">\n    const { createApp, ref, onMounted } = Vue;\n    const { useToast } = primevue.usetoast;\n\n    const App = {\n        setup() {\n            onMounted(() => {\n                productService.value.getProductsSmall().then(data => products.value = data);\n            })\n\n            const toast = useToast();\n            const products = ref();\n            const selectedProduct1 = ref();\n            const selectedProduct2 = ref();\n            const selectedProduct3 = ref();\n            const selectedProducts1 = ref();\n            const selectedProducts2 = ref();\n            const selectedProducts3 = ref();\n            const productService = ref(new ProductService());\n\n            const onRowSelect = (event) => {\n                toast.add({severity: \'info\', summary: \'Product Selected\', detail: \'Name: \' + event.data.name, life: 3000});\n            };\n\n            const onRowUnselect = (event) => {\n                toast.add({severity: \'warn\', summary: \'Product Unselected\', detail: \'Name: \' + event.data.name, life: 3000});\n            };\n\n            return { products, selectedProduct1, selectedProduct2, selectedProduct3, selectedProducts1, selectedProducts2, selectedProducts3, onRowSelect, onRowUnselect}\n        },\n        components: {\n            "p-datatable": primevue.datatable,\n            "p-column": primevue.column,\n            "p-toast": primevue.toast\n        }\n    };\n\n    createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n    <\\/script>\n'}}}},productService:null,created:function(){this.productService=new S["a"]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))},methods:{onRowSelect:function(e){this.$toast.add({severity:"info",summary:"Product Selected",detail:"Name: "+e.data.name,life:3e3})},onRowUnselect:function(e){this.$toast.add({severity:"warn",summary:"Product Unselected",detail:"Name: "+e.data.name,life:3e3})}}},M=n("6b0d"),k=n.n(M);const K=k()(w,[["render",O]]);t["default"]=K},e9c0:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("d4ec"),l=n("bee2"),a=(n("d3b7"),function(){function e(){Object(o["a"])(this,e)}return Object(l["a"])(e,[{key:"getProductsSmall",value:function(){return fetch("demo/data/products-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch("demo/data/products.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("demo/data/products-orders-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}())}}]);