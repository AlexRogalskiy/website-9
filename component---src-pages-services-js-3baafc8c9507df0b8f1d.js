(self.webpackChunkferdi_website=self.webpackChunkferdi_website||[]).push([[88],{6474:function(e,t){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},2953:function(e,t,n){"use strict";n.r(t);var r=n(3552),s=n(7294),a=n(6474),i=n.n(a),c=n(957),l=n(3751),o=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).state={services:[],search:""},t}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;i()("https://cdn.jsdelivr.net/gh/getferdi/recipes/all.json").then((function(e){return e.json()})).then((function(t){var n=t.sort((function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?-1:n>r?1:0}));e.setState({services:n})}))},n.updateSearch=function(e){this.setState({search:e})},n.render=function(){var e=this,t=this.state,n=t.services,r=t.search,a=r.toLowerCase().trim(),i=r?n.filter((function(e){return e.name.toLowerCase().includes(a)})):n;return s.createElement(c.Z,null,s.createElement(l.Z,{title:"Services"}),s.createElement("div",{className:"container services"},s.createElement("div",{className:"targets"},s.createElement("div",{className:"title"},s.createElement("h2",null,"Services"),s.createElement("p",null,"Ferdi is compatible with all your favorite services")),s.createElement("input",{type:"text",onChange:function(t){return e.updateSearch(t.target.value)},placeholder:"Search",className:"search-box"}),s.createElement("div",{className:"service-grid"},i.map((function(e){return s.createElement("div",{className:"service-item",key:e.key},s.createElement("div",{className:"item"},s.createElement("img",{src:e.icons.svg,alt:e.name+" logo"}),s.createElement("p",null,e.name)))}))),!i.length&&s.createElement("div",null,s.createElement("p",{style:{textAlign:"center"}},/^sig(n(al?)?)?/i.test(a)?s.createElement(s.Fragment,null,"Ferdi unfortunately doesn't support Signal at the moment as Signal doesn't offer a web version.",s.createElement("br",null),s.createElement("br",null),'However, if you want to use another service than Signal you can add it using the "Custom Website" option!'):'It looks like this service is not yet part of Ferdi - but you can still add it using the "Custom Website" option!'),s.createElement("div",{className:"service-not-found-service"},s.createElement("img",{src:"https://cdn.jsdelivr.net/gh/getferdi/recipes/uncompressed/franz-custom-website/icon.svg",alt:"Custom website logo"}),s.createElement("p",null,"Custom Website"))))))},t}(s.Component);t.default=o}}]);
//# sourceMappingURL=component---src-pages-services-js-3baafc8c9507df0b8f1d.js.map