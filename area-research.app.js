(function(e){function i(i){for(var a,s,r=i[0],l=i[1],c=i[2],u=0,h=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(i);while(h.length)h.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,i=0;i<o.length;i++){for(var t=o[i],a=!0,r=1;r<t.length;r++){var l=t[r];0!==n[l]&&(a=!1)}a&&(o.splice(i--,1),e=s(s.s=t[0]))}return e}var a={},n={app:0},o=[];function s(i){if(a[i])return a[i].exports;var t=a[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=a,s.d=function(e,i,t){s.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,i){if(1&i&&(e=s(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var a in e)s.d(t,a,function(i){return e[i]}.bind(null,a));return t},s.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(i,"a",i),i},s.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=i,r=r.slice();for(var c=0;c<r.length;c++)i(r[c]);var d=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"02f6":function(e,i,t){},"18f6":function(e){e.exports=window.topicsData},"1fe7":function(e){e.exports=window.termsData},"29f9":function(e,i,t){},"33dd":function(e,i,t){"use strict";t("6828")},"426d":function(e){e.exports=window.mainData},"56d7":function(e,i,t){"use strict";t.r(i);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("router-view"),t("a",{staticStyle:{display:"flex","justify-content":"center"},attrs:{href:"/area-research/feedback-form"}},[e._v("We want your feedback")])],1)},o=[],s=t("2877"),r={},l=Object(s["a"])(r,n,o,!1,null,null,null),c=l.exports,d=t("8c4f"),u=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("p",[/*e._v(" Find AR is a searchable database of "+e._s(e.store.state.allArticles.length)+" articles pulled from ACM and IEEE databases since 2017. The articles have been categorized into "+e._s(e.store.state.midLevelTerms.length)+" main topic areas. AREA members can search through this database and access relevant URL links to research, abstracts, and graphical information about AR enterprise research. "),*/t("br"),t("br"),e._v(" Begin typing your term in the search field. As you type, suggested terms from the database will appear in a list. To complete your search, select one of the suggested terms from the list. "),t("br"),t("br"),e._v(" Database last updated on 04/15/2021 ")]),e.store.history.length>1?t("button",{staticClass:"btn back-button",on:{click:function(i){return e.store.loadPreviousSearch()}}},[e._v(" Previous Search ")]):e._e(),t("router-link",{staticClass:"btn top-link back-to-results",attrs:{to:"/topics",tag:"button"}},[e._v("Explore all main topics")]),t("vue-autosuggest",{ref:"searchInput",class:{searchDisabled:e.store.state.showResultsTable},attrs:{inputProps:e.inputProps,suggestions:e.getSuggestionsLowLevel(),getSuggestionValue:function(e){return e.item.label}},on:{selected:e.selectHandler},scopedSlots:e._u([{key:"default",fn:function(i){var a=i.suggestion;return[t("div",[t("span",{staticClass:"suggestion-item"},[e._v(e._s(a.item.label))])])]}}]),model:{value:e.store.state.lowLevelTerm,callback:function(i){e.$set(e.store.state,"lowLevelTerm",i)},expression:"store.state.lowLevelTerm"}},[t("template",{slot:"after-input"},[t("a",{staticClass:"clear-search-button",attrs:{for:e.inputProps.id},on:{click:e.resetSuggestions}},[e._v("✖")])])],2),e.store.state.showResultsTable?t("div",[t("Articles",{key:e.store.state.lowLevelTerm})],1):e._e(),e.store.state.selectedArticle?t("div",[t("Article",{key:e.store.state.selectedArticle.Title})],1):e._e()],1)},h=[],m=(t("4de4"),t("c975"),function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("strong",[e._v(e._s(e.store.state.filteredArticles.length))]),e._v(" Result[s] found matching "+e._s(""!=e.store.state.lowLevelTerm?e.store.state.lowLevelTerm:e.store.state.midLevelTerm)+" "),t("br"),t("div",{staticClass:"articles"},[t("Table",{key:e.store.state.filteredArticles.length,attrs:{articles:e.store.state.filteredArticles}})],1),t("p",[e._v(" * deemed most relevant to the AREA Research Agenda ")]),e.store.state.selectedArticle?e._e():t("Coocurences")],1)}),g=[],p=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"cooccurences"},[t("br"),e.store.state.lowLevelTerm?t("span",[e._v(" The following terms have been tagged along with the term: "+e._s(e.store.state.lowLevelTerm)+" in the database "),t("br")]):e._e(),e._l(e.filteredLowLevel,(function(i,a){return t("span",{key:a,staticClass:"term lowlevel",on:{click:function(t){return e.updateLowLevelSearch(i.label)}}},[e._v(" "+e._s(i.label)+" - "),t("span",{staticClass:"term-count"},[e._v(e._s(i.count))]),t("br")])})),t("br"),t("br"),""!=e.store.state.lowLevelTerm?t("span",{staticClass:"main-topic-suggestions"},[e._v(" The term: "+e._s(e.store.state.lowLevelTerm)+" is part of the Main Topic: "+e._s(e.store.state.midLevelTerm)+", which contains following terms: ")]):e._e(),t("br"),t("div",e._l(e.topics,(function(i,a){return t("span",{key:a},[i.term===e.store.state.midLevelTerm?t("div",[t("span",{staticClass:"tagsList"},e._l(i.lowLevel,(function(a,n){return t("li",{key:n},[t("a",{staticClass:"button tag-list",on:{click:function(t){return e.setMetaData(i.term,a)}}},[e._v(e._s(a)+" ")])])})),0)]):e._e()])})),0)],2)},f=[],y=(t("d81d"),t("7db0"),t("4160"),t("caad"),t("fb6a"),t("ac1f"),t("2532"),t("466d"),t("1276"),t("159b"),t("426d")),v=t("c8aa"),b=t("18f6"),w=t("1fe7"),A=t("158d"),I=t.n(A),T=new I.a,C={debug:!0,state:{allArticles:y,lowLevelTerm:"",midLevelTerm:null,showResultsTable:!1,lowLevelTerms:v,filteredArticles:[],suggestions:[],selectedArticle:null,relatedIds:null,searchLevel:null,midLevelTerms:b.map((function(e){return e.term})),associatedTerms:null},history:[],savedHistory:[],userInfo:{browser:T.getBrowser(),os:T.getOS(),device:T.getDevice(),searchHistory:[],articleHistory:[],email:null,id:null},getFilteredArticles:function(){var e=this;return this.getAssociatedTerms(C.state.lowLevelTerm),C.history.unshift({lowLevelTerm:C.state.lowLevelTerm,midLevelTerm:C.state.midLevelTerm,searchLevel:C.state.searchLevel}),this.state.filteredArticles=y.filter((function(i){if(""==e.state.lowLevelTerm){C.state.searchLevel="mid";var t,a=i["MidLevel"].match(e.state.midLevelTerm)[0],n=i.MidLevel.split(";");return n.forEach((function(e){e===a&&(t=i.Title)})),t}if(C.state.searchLevel="low",null!=i["LowLevel"].match(e.state.lowLevelTerm)){var o,s=i["LowLevel"].match(e.state.lowLevelTerm)[0],r=i.LowLevel.split(";");return r.forEach((function(e){e===s&&(o=i.Title)})),o}})).sort((function(e,i){return e["Publication year"]<i["Publication year"]}))},getArticleCountForTerm:function(e){var i=this;return y.filter((function(t){if("low"==i.state.searchLevel)return t["LowLevel"].match(e)})).length},getAssociatedTerms:function(e){this.state.lowLevelTerm=e,b.filter((function(i){if(typeof i.lowLevel !== 'undefined' && i.lowLevel.includes(e))return i.lowLevel}))},getRelatedArticles:function(){var e=this;this.state.relatedIds=this.state.selectedArticle["Top20AbsAndTags"],this.state.relatedArticles=y.filter((function(i){var t=e.state.relatedIds.includes(i["Index"]);return t})).sort((function(e,i){return e["Publication year"]<i["Publication year"]}))},setSelectedArticle:function(e){this.state.selectedArticle=e,this.state.showResultsTable=!1,this.state.relatedIds=e["Top20AbsAndTags"],C.userInfo.articleHistory.push(e["Index"]),this.getRelatedArticles(),window.scrollTo(0,0)},getFilteredArticlesOld:function(){var e=this;return this.getAssociatedTerms(this.state.lowLevelTerm),C.history.unshift({lowLevelTerm:C.state.lowLevelTerm,midLevelTerm:C.state.midLevelTerm,searchLevel:C.state.searchLevel}),this.state.filteredArticles=y.filter((function(i){return""!=e.state.lowLevelTerm?(C.state.searchLevel="low",i["LowLevel"].includes(e.state.lowLevelTerm)):(C.state.searchLevel="mid",i["MidLevel"].includes(e.state.midLevelTerm))})).sort((function(e,i){return e["Publication year"]<i["Publication year"]}))},getMidlevelTermFromLowlevel:function(e){this.state.lowLevelTerm=e,this.state.midLevelTerm=b.filter((function(i){return i.lowLevel.includes(e)}))[0].term,this.getFilteredArticles()},update_search:function(e){C.state.midLevelTerms.includes(e)?(C.state.midLevelTerm=e,C.state.lowLevelTerm="",C.state.searchLevel="mid"):(C.state.lowLevelTerm=e,C.state.searchLevel="low",C.history.searchLevel="low"),C.getFilteredArticles()},loadPreviousSearch:function(){C.history.shift();var e=C.history[0];C.state.lowLevelTerm=e.lowLevelTerm,C.state.midLevelTerm=e.midLevelTerm,C.state.searchLevel=e.searchLevel,C.getFilteredArticles()},getLowLevelOccurences:function(){var e=[],i=w.find((function(e){return e.category===C.state.lowLevelTerm}));for(var t in i)e.push([t,i[t]]);var a=e.sort((function(e,i){return e[1]-i[1]}));return a=a.reverse().slice(0,10),a.filter((function(e){return""!=e[1]}))},setMetaData:function(e,i){this.store.state.lowLevelTerm=i,this.store.state.midLevelTerm=e,this.store.getFilteredArticles(),this.store.state.showResultsTable=!0,this.$router.push("/")}},R={data:function(){return{topics:b,store:C,termsLowLevel:w}},components:{},methods:{updateLowLevelSearch:function(e){C.history.lowLevelTerm=C.state.lowLevelTerm,C.history.midLevelTerm=C.state.midLevelTerm,C.history.searchLevel=C.state.searchLevel,C.getMidlevelTermFromLowlevel(e),C.state.lowLevelTerm=e,C.state.searchLevel="low",window.scrollTo(0,0)},setMetaData:function(e,i){this.store.state.lowLevelTerm=i,this.store.state.midLevelTerm=e,this.store.getFilteredArticles(),this.store.state.showResultsTable=!0,this.store.getAssociatedTerms(this.store.state.lowLevelTerm),window.scrollTo(0,0)}},computed:{filteredLowLevel:function(){var e=[],i=C.getLowLevelOccurences();return i.map((function(i){console.log(i);var t=i[1];if("category"!=i[0]){var a={label:i[0],count:t};e.push(a)}})),e},filteredMidLevel:function(){var e=[],i=C.getMidLevelOccurences();return i.map((function(i){var t=C.getArticleCountForTerm(i[0]);if(0!=t){var a={label:i[0],count:t};e.push(a)}})),e}}},k=R,L=(t("fa4c"),Object(s["a"])(k,p,f,!1,null,"f5cfa08a",null)),E=L.exports,M=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("transition",{attrs:{appear:"",name:"fade"}},[0!=e.articles.length?t("table",{staticStyle:{width:"100%"}},[t("thead",[t("tr",[t("td",[e._v("Year")]),t("td",[e._v("Title")]),t("td",[e._v("Venue")]),t("td",[e._v("DOI/Publisher Link")])])]),t("tbody",e._l(e.store.state.filteredArticles,(function(i,a){return t("tr",{key:a},[t("td",[e._v(e._s(i["Publication year"]))]),t("td",{staticClass:"article-title"},[t("a",{on:{click:function(t){return e.store.setSelectedArticle(i)}}},[e._v(e._s(i["Title"]))])]),t("td",[e._v(e._s(i.Venue))]),t("td",[t("a",{attrs:{href:i.DOI,target:"_blank"}},[e._v("Article Link")])])])})),0)]):e._e()])},S=[],x={data:function(){return{store:C}},props:{articles:Array}},D=x,P=(t("76a5"),Object(s["a"])(D,M,S,!1,null,null,null)),H=P.exports,V={name:"Articles",components:{Coocurences:E,Table:H},data:function(){return{store:C}}},z=V,O=(t("33dd"),Object(s["a"])(z,m,g,!1,null,null,null)),j=O.exports,W=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"showImages",class:{hideImages:e.store.state.showResultsTable}},[t("button",{staticClass:"btn back-to-results",on:{click:function(i){e.store.state.selectedArticle=null,e.store.state.showResultsTable=!0}}},[e._v(" Back to Results ")]),t("div",{staticClass:"article-single"},[t("h3",[e._v(e._s(e.article.Title))]),t("p",[e._v(e._s(e.article.Citation)+". "),t("a",{attrs:{href:e.article.DOI,target:"_blank"}},[e._v(e._s(e.article.DOI))])]),t("br"),t("p",[e._v(e._s(e.article["Conference Name"]))]),t("hr",{staticClass:"mb-4"}),t("h4",{staticStyle:{"font-weight":"bold"}},[e._v("Abstract")]),t("p",[e._v(e._s(e.article.Abstract))]),t("p",[e._v("Terms: "+e._s(e.article.LowLevel))]),t("p",[e._v("Main Topics: "+e._s(e.article.MidLevel))]),t("div",{staticClass:"wp-block-buttons"},[t("div",{staticClass:"wp-block-button"},[t("a",{staticClass:"wp-block-button__link has-background",staticStyle:{"background-color":"#33a6b2","border-radius":"1px"},attrs:{href:e.article.DOI,target:"_blank"}},[e._v("Go to Article")])])])]),e.store.state.relatedArticles?t("div",[t("hr"),t("h4",[e._v("Related Articles")]),t("p",[e._v("The following listing represents the 20 most related articles based on how well their abstracts and keywords match this record.")]),t("RelatedArticles"),t("p",[e._v(" * deemed most relevant to the AREA Research Agenda ")])],1):e._e()])},q=[],G=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("transition",{attrs:{appear:"",name:"fade"}},[e._v(" Related "),0!=e.store.state.relatedArticles.length?t("table",{staticStyle:{width:"100%"}},[t("thead",[t("tr",[t("td",[e._v("Year")]),t("td",[e._v("Title")]),t("td",[e._v("Venue")]),t("td",[e._v("DOI/Publisher Link")])])]),t("tbody",e._l(e.store.state.relatedArticles,(function(i,a){return t("tr",{key:a},[t("td",[e._v(e._s(i["Publication year"]))]),t("td",{staticClass:"article-title"},[t("a",{on:{click:function(t){return e.store.setSelectedArticle(i)}}},[e._v(e._s(i["Title"]))])]),t("td",[e._v(e._s(i.Venue))]),t("td",[t("a",{attrs:{href:i.DOI}},[e._v("Article Link")])])])})),0)]):e._e()])},B=[],F={data:function(){return{store:C}},methods:{updateArticle:function(e){document.body.scrollTop=0,document.documentElement.scrollTop=0,C.setSelectedArticle(e)}}},N=F,K=(t("dc19"),Object(s["a"])(N,G,B,!1,null,null,null)),J=K.exports,U={name:"Article",components:{RelatedArticles:J},data:function(){return{store:C,article:C.state.selectedArticle,articles:C.state.allArticles}},methods:{refresh_article:function(){this.$forceUpdate()}}},Y=U,Z=(t("6f1e"),Object(s["a"])(Y,W,q,!1,null,"a933fbd2",null)),X=Z.exports,Q=t("2831"),_={name:"App",components:{Articles:j,VueAutosuggest:Q["a"],Article:X},data:function(){return{store:C,inputProps:{id:"autosuggest__input",placeholder:"Search Term",class:"ddd",onInputChange:this.onInputChange}}},methods:{selectHandler:function(e){e&&(C.state.lowLevelTerm=e.item.label,C.state.midLevelTerm=e.item.category,C.state.showResultsTable=!0,C.getFilteredArticles())},resetSuggestions:function(){C.state.lowLevelTerm="",C.state.filteredArticles=[],C.state.midLevelTerm="",C.state.showResultsTable=!1,C.state.selectedArticle=null,C.state.searchLevel=null},onInputChange:function(e){},getSuggestionsLowLevel:function(){var e=this;return[{data:this.store.state.lowLevelTerms.filter((function(i){return i.label.toLowerCase().indexOf(e.store.state.lowLevelTerm.toLowerCase())>-1})).sort((function(e,i){return e.label>i.label?1:-1}))}]}},mounted:function(){document.querySelector("#page .container h1.title").textContent&&(document.querySelector("#page .container h1.title").innerHTML="<span>FindAR</span>"),document.getElementById("currentLoggedInEmail")&&(C.userData.email=document.getElementById("currentLoggedInEmail").value),document.getElementById("currentLoggedInUserID")&&(C.userData.id=document.getElementById("currentLoggedInUserID").value)}},$=_,ee=(t("cccb"),Object(s["a"])($,u,h,!1,null,null,null)),ie=ee.exports,te=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("router-link",{staticClass:"btn top-right back-to-results",attrs:{to:"/",tag:"button"}},[e._v("Return To FindAR")]),e._l(e.topics,(function(i,a){return t("span",{key:a},[t("button",{staticClass:"accordion"},[t("div",[e._v(" "+e._s(i.term)+" ")]),t("div",[e._v(" ▼ ")])]),t("div",{staticClass:"panel"},[t("h5",[e._v("Search terms within this category:")]),t("span",{staticClass:"tagsList"},e._l(i.lowLevel,(function(a,n){return t("li",{key:n},[t("a",{staticClass:"button tag-list",on:{click:function(t){return e.setMetaData(i.term,a)}}},[e._v(e._s(a))])])})),0)])])}))],2)},ae=[],ne={data:function(){return{topics:b,store:C}},methods:{setMetaData:function(e,i){this.store.state.lowLevelTerm=i,this.store.state.midLevelTerm=e,this.store.getFilteredArticles(),this.store.state.showResultsTable=!0,this.$router.push("/")}},mounted:function(){var e,i=document.getElementsByClassName("accordion");for(e=0;e<i.length;e++)i[e].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"}));document.querySelector("#page .container h1.title").textContent&&(document.querySelector("#page .container h1.title").innerHTML="<span>FindAR</span>")}},oe=ne,se=(t("5e2a"),Object(s["a"])(oe,te,ae,!1,null,null,null)),re=se.exports;a["a"].use(d["a"]);var le=[{path:"/",name:"Home",component:ie},{path:"/topics",name:"Topics",component:re}],ce=new d["a"]({routes:le,scrollBehavior:function(){return{x:0,y:0}}}),de=ce;a["a"].config.productionTip=!1,new a["a"]({router:de,render:function(e){return e(c)}}).$mount("#app")},"57b9":function(e,i,t){},"5ced":function(e,i,t){},"5e2a":function(e,i,t){"use strict";t("c076")},6828:function(e,i,t){},"694f":function(e,i,t){},"6f1e":function(e,i,t){"use strict";t("02f6")},"76a5":function(e,i,t){"use strict";t("694f")},c076:function(e,i,t){},c8aa:function(e){e.exports=window.categoryData},cccb:function(e,i,t){"use strict";t("5ced")},dc19:function(e,i,t){"use strict";t("29f9")},fa4c:function(e,i,t){"use strict";t("57b9")}});
//# sourceMappingURL=area-research.app.js.map