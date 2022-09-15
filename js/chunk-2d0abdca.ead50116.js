(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abdca"],{"16a0":function(e,n,o){"use strict";o.r(n);var t=o("7a23"),d={class:"content-section introduction"},r=Object(t["k"])("div",{class:"feature-intro"},[Object(t["k"])("h1",null,[Object(t["n"])("TreeTable "),Object(t["k"])("span",null,"Column Resize")]),Object(t["k"])("p",null,' Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized. In "expand" mode, table width also changes along with the column width. ')],-1),i={class:"content-section implementation"},l={class:"card"},a=Object(t["k"])("h5",null,"Fit Mode",-1),s={class:"card"},c=Object(t["k"])("h5",null,"Expand Mode",-1);function u(e,n,o,u,m,p){var b=Object(t["P"])("AppDemoActions"),h=Object(t["P"])("Column"),v=Object(t["P"])("TreeTable"),f=Object(t["P"])("AppDoc");return Object(t["H"])(),Object(t["j"])("div",null,[Object(t["k"])("div",d,[r,Object(t["o"])(b)]),Object(t["k"])("div",i,[Object(t["k"])("div",l,[a,Object(t["o"])(v,{value:m.nodes,resizableColumns:!0,columnResizeMode:"fit",showGridlines:""},{default:Object(t["Z"])((function(){return[Object(t["o"])(h,{field:"name",header:"Name",expander:!0}),Object(t["o"])(h,{field:"size",header:"Size"}),Object(t["o"])(h,{field:"type",header:"Type"})]})),_:1},8,["value"])]),Object(t["k"])("div",s,[c,Object(t["o"])(v,{value:m.nodes,resizableColumns:!0,columnResizeMode:"expand",showGridlines:""},{default:Object(t["Z"])((function(){return[Object(t["o"])(h,{field:"name",header:"Name",expander:!0}),Object(t["o"])(h,{field:"size",header:"Size"}),Object(t["o"])(h,{field:"type",header:"Type"})]})),_:1},8,["value"])])]),Object(t["o"])(f,{name:"TreeTableColResizeDemo",sources:m.sources,service:["NodeService"],data:["treetablenodes"],github:"treetable/TreeTableColResizeDemo.vue"},null,8,["sources"])])}var m=o("82f4"),p={data:function(){return{nodes:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Fit Mode</h5>\n            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="fit" showGridlines>\n                <Column field="name" header="Name" :expander="true"></Column>\n                <Column field="size" header="Size"></Column>\n                <Column field="type" header="Type"></Column>\n            </TreeTable>\n        </div>\n\n        <div class="card">\n            <h5>Expand Mode</h5>\n            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand" showGridlines>\n                <Column field="name" header="Name" :expander="true"></Column>\n                <Column field="size" header="Size"></Column>\n                <Column field="type" header="Type"></Column>\n            </TreeTable>\n        </div>\n    </div>                    \n</template>\n\n<script>\nimport NodeService from \'./service/NodeService\';\n\nexport default {\n    data() {\n        return {\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Fit Mode</h5>\n            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="fit" showGridlines>\n                <Column field="name" header="Name" :expander="true"></Column>\n                <Column field="size" header="Size"></Column>\n                <Column field="type" header="Type"></Column>\n            </TreeTable>\n        </div>\n\n        <div class="card">\n            <h5>Expand Mode</h5>\n            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand" showGridlines>\n                <Column field="name" header="Name" :expander="true"></Column>\n                <Column field="size" header="Size"></Column>\n                <Column field="type" header="Type"></Column>\n            </TreeTable>\n        </div>\n    </div>                    \n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport NodeService from \'./service/NodeService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            nodeService.value.getTreeTableNodes().then(data => nodes.value = data);\n        })\n\n        const nodes = ref(null);\n        const nodeService = ref(new NodeService());\n\n        return { nodes, nodeService }\n    }\n}\n<\\/script>\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="./NodeService.js"><\\/script>',content:'<div id="app">\n            <div class="card">\n                <h5>Fit Mode</h5>\n                <p-treetable :value="nodes" :resizable-columns="true" column-resize-mode="fit" show-gridlines>\n                    <p-column field="name" header="Name" :expander="true"></p-column>\n                    <p-column field="size" header="Size"></p-column>\n                    <p-column field="type" header="Type"></p-column>\n                </p-treetable>\n            </div>\n\n            <div class="card">\n                <h5>Expand Mode</h5>\n                <p-treetable :value="nodes" :resizable-columns="true" column-resize-mode="expand" show-gridlines>\n                    <p-column field="name" header="Name" :expander="true"></p-column>\n                    <p-column field="size" header="Size"></p-column>\n                    <p-column field="type" header="Type"></p-column>\n                </p-treetable>\n            </div>\n        </div>\n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    nodeService.value.getTreeTableNodes().then(data => nodes.value = data);\n                })\n\n                const nodes = ref(null);\n                const nodeService = ref(new NodeService());\n\n                return { nodes, nodeService }\n            },\n            components: {\n                "p-treetable": primevue.treetable,\n                "p-column": primevue.column\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n'}}}},nodeService:null,created:function(){this.nodeService=new m["a"]},mounted:function(){var e=this;this.nodeService.getTreeTableNodes().then((function(n){return e.nodes=n}))}},b=o("6b0d"),h=o.n(b);const v=h()(p,[["render",u]]);n["default"]=v}}]);