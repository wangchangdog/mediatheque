(self.webpackChunkmediatheque=self.webpackChunkmediatheque||[]).push([[137],{9910:function(e,t,n){"use strict";var r=n(7294),o=n(9),i=o.ZP.div.withConfig({displayName:"PageIntro__TitleArea",componentId:"q8chj8-0"})(["@media (min-width:768px){grid-column:1 / 2;}"]),a=o.ZP.h1.withConfig({displayName:"PageIntro__Title",componentId:"q8chj8-1"})(["margin-top:0;margin-bottom:2.125rem;"]),l=o.ZP.div.withConfig({displayName:"PageIntro__ContentArea",componentId:"q8chj8-2"})(["grid-column:1/4;@media (min-width:768px){grid-column:2 / 4;h2,p{margin-top:0;}}"]);t.Z=function(e){var t=e.title,n=e.subTitle,o=e.paragraph;return r.createElement(r.Fragment,null,r.createElement(i,null,r.createElement(a,null,t)),r.createElement(l,null,r.createElement("h2",null,n),r.createElement("p",null,o)))}},5823:function(e,t,n){"use strict";var r=n(2347),o=n(8917),i=n(7294),a=n(9),l=a.ZP.article.withConfig({displayName:"Work__WorkItem",componentId:"sc-17ht0e0-0"})(["width:100%;padding:0 20px;"]),m=a.ZP.div.withConfig({displayName:"Work__WorkContent",componentId:"sc-17ht0e0-1"})(["background:var(--worksPanelBG);border-top:3px solid var(--primary);padding:2.5rem 1.25rem;&:last-child{margin-bottom:0;}@media (min-width:768px){margin-bottom:0;}h2{margin-top:0;}p{margin-bottom:0;}"]);t.Z=function(e){var t=e.work,n=t.name,a=t.price,s=t.slug,c=t.images,d=(0,r.d)(c[0]);return i.createElement(l,null,i.createElement(r.G,{image:d,alt:"single Work"}),i.createElement(m,null,i.createElement("h2",null,n||"Name not listed"),i.createElement("h3",null,"£ ",a||"Call"),i.createElement(o.Z,{className:"btn",cover:!0,bg:"#1d1d1d",to:"/works/"+s},"View Work")))}},5531:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5444),o=n(7294),i=n(3552),a=n(9),l=n(5823),m=a.ZP.section.withConfig({displayName:"WorkList__Section",componentId:"nl687i-0"})(["grid-column:1 / 4;margin-left:-20px;margin-right:-20px;"]),s=a.ZP.div.withConfig({displayName:"WorkList__FlexContainer",componentId:"nl687i-1"})(["display:flex;flex-wrap:wrap;"]),c=a.ZP.div.withConfig({displayName:"WorkList__FlexItem",componentId:"nl687i-2"})(["width:100%;margin-bottom:40px;&:last-child{margin-bottom:0;}@media (min-width:768px){flex:0 0 calc(100% / 3);}"]),d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={works:[],sortedWorks:[]},t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({works:this.props.works.edges,sortedWorks:this.props.works.edges})},n.render=function(){return o.createElement(m,null,o.createElement(s,null,this.state.sortedWorks.map((function(e){var t=e.node,n=e.index;return o.createElement(c,null,o.createElement(l.Z,{key:n,work:t}))}))))},t}(o.Component),u=function(){var e=(0,r.useStaticQuery)("2496986730").works;return o.createElement(d,{works:e})}},3518:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(7601),i=n(9910),a=n(2248),l=n(5531);t.default=function(){return r.createElement(r.Fragment,null,r.createElement(a.Z,{title:"Works"}),r.createElement("section",{className:"section-padding"},r.createElement(o.Z,null,r.createElement(i.Z,{title:"All Works",subTitle:"Every product you could ask for in one place. Easy to list new works and expand your line",paragraph:"When using Contentful you can add, remove, and edit you works as your business grows. Updating the content model is easy too. It's time to get started!"}),r.createElement(l.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-works-js-ab93481caa3fc4567287.js.map