(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21aebc"],{be25:function(t,e,a){"use strict";a.r(e);var n=a("7a23");function r(t,e,a,r,d,o){var c=Object(n["P"])("ChartDoc");return Object(n["H"])(),Object(n["j"])("div",null,[Object(n["o"])(c)])}var d={class:"content-section documentation"},o=Object(n["k"])("h1",null,"ChartModel",-1),c=Object(n["k"])("p",null,[Object(n["n"])("Chart components are based on "),Object(n["k"])("a",{href:"https://www.chartjs.org/"},"Charts.js"),Object(n["n"])(", an open source HTML5 based charting library.")],-1),s=Object(n["k"])("h5",null,"Getting Started",-1),i=Object(n["k"])("p",null,[Object(n["n"])(" Chart component is a wrapper around on "),Object(n["k"])("a",{href:"https://www.chartjs.org/docs/3.3.2/"},"Chart.js 3.3.2+"),Object(n["n"])(" so chart.js needs to be included in your project. For a complete documentation and samples please refer to the "),Object(n["k"])("a",{href:"https://www.chartjs.org/"},"chart.js website"),Object(n["n"])(". ")],-1),l=Object(n["k"])("code",null,"\nnpm install chart.js --save\n\n",-1),h=[l],b=Object(n["k"])("h5",null,"Import via Module",-1),p=Object(n["k"])("code",null,"\nimport Chart from 'primevue/chart';\n\n",-1),j=[p],u=Object(n["k"])("h5",null,"Import via CDN",-1),O=Object(n["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/chart/chart.min.js"><\/script>\n\n',-1),m=[O],v=Object(n["m"])('<h5>Chart Types</h5><p>Chart type is defined using the <i>type</i> property. Currently there are 6 options available; <b>pie</b>, <b>doughnut</b>, <b>line</b>, <b>bar</b>, <b>radar</b> and <b>polarArea</b>.</p><h5>Data</h5><p> Data of a chart is provided using a binding to the <i>data</i> property, each type has its own format of data. Here is an example of a line chart. For more information refer to the <a href="https://www.chartjs.org/">charts.js</a> documentation. </p>',4),y=Object(n["k"])("code",null,'\n<Chart type="bar" :data="basicData" />\n\n',-1),g=[y],f=Object(n["k"])("code",null,"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tbasicData: {\n\t\t\t\tlabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n\t\t\t\tdatasets: [\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel: 'My First dataset',\n\t\t\t\t\t\tbackgroundColor: '#42A5F5',\n\t\t\t\t\t\tdata: [65, 59, 80, 81, 56, 55, 40]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel: 'My Second dataset',\n\t\t\t\t\t\tbackgroundColor: '#9CCC65',\n\t\t\t\t\t\tdata: [28, 48, 40, 19, 86, 27, 90]\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}\n}\n\n",-1),w=[f],k=Object(n["k"])("h5",null,"Options",-1),C=Object(n["k"])("p",null,[Object(n["n"])(" While a series can be customized per dataset, general chart options are defined with options property. Example below adds a title and customizes the legend position of the chart. For all available options refer to the "),Object(n["k"])("a",{href:"https://www.chartjs.org/"},"charts.js"),Object(n["n"])(" documentation. ")],-1),D=Object(n["k"])("code",null,'\n<Chart type="line" :data="data" :options="options" />\n\n',-1),H=[D],x=Object(n["k"])("code",null,"\noptions: {\n\tresponsive: true,\n\thoverMode: 'index',\n\tstacked: false,\n\tscales: {\n        yAxes: [{\n            type: 'linear',\n            display: true,\n            position: 'left',\n            id: 'y-axis-1',\n        },\n        {\n            type: 'linear',\n            display: true,\n            position: 'right',\n            id: 'y-axis-2',\n            gridLines: {\n                drawOnChartArea: false\n            }\n        }]\n\t}\n}\n\n",-1),M=[x],F=Object(n["m"])('<h5>Properties</h5><p>Any property as style and class are passed to the main container element. Following is the additional property to configure the component.</p><div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>null</td><td>Type of the chart.</td></tr><tr><td>data</td><td>any</td><td>null</td><td>Data to display.</td></tr><tr><td>options</td><td>any</td><td>null</td><td>Options to customize the chart.</td></tr><tr><td>plugins</td><td>any</td><td>null</td><td>Used to custom plugins of the chart.</td></tr><tr><td>width</td><td>number</td><td>300</td><td>Width of the chart in non-responsive mode.</td></tr><tr><td>height</td><td>number</td><td>150</td><td>Height of the chart in non-responsive mode.</td></tr></tbody></table></div><h5>Methods</h5><div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>refresh</td><td>-</td><td>Redraws the graph.</td></tr><tr><td>reinit</td><td>-</td><td>Destroys the graph first and then creates it again.</td></tr><tr><td>generateLegend</td><td>-</td><td>Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options.</td></tr></tbody></table></div><h5>Events</h5><div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>select</td><td> event: original event<br> event.dataset: Selected dataset<br> event.element: Selected element<br> event.element._datasetIndex = Index of the dataset in data<br> event.element._index = Index of the data in dataset </td><td>Callback to invoke when a tab gets expanded.</td></tr><tr><td>loaded</td><td>chart instance</td><td>Callback to invoke when chart is loaded.</td></tr></tbody></table></div><h5>Styling</h5><div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-chart</td><td>Container element.</td></tr></tbody></table></div>',9);function A(t,e){var a=Object(n["Q"])("code");return Object(n["H"])(),Object(n["j"])("div",d,[o,c,s,i,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,h)),[[a,void 0,void 0,{script:!0}]]),b,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,j)),[[a,void 0,void 0,{script:!0}]]),u,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,m)),[[a]]),v,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,g)),[[a]]),Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,w)),[[a,void 0,void 0,{script:!0}]]),k,C,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,H)),[[a]]),Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,M)),[[a,void 0,void 0,{script:!0}]]),F])}var T=a("6b0d"),I=a.n(T);const J={},N=I()(J,[["render",A]]);var S=N,L={components:{ChartDoc:S}};const P=I()(L,[["render",r]]);e["default"]=P}}]);