(this.webpackJsonpuntitled6=this.webpackJsonpuntitled6||[]).push([[0],{266:function(e,t,a){e.exports=a(473)},473:function(e,t,a){"use strict";a.r(t);var n,r,o,i,l=a(0),c=a.n(l),s=a(35),u=a.n(s),m=a(26),p=a(27),d=a(29),h=a(28),g=a(30),b=a(166),y=a(167),f=a(165),v=(a(271),a(81),a(272),a(232)),E=a.n(v),C=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(E.a,{type:"Oval",color:"deepskyblue",height:300,width:300})}}]),t}(c.a.Component),k=a(484),O=a(485),S=a(486),P=a(71),D=a.n(P),w=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t;return"Car"===this.props.method?(e=1,t=c.a.createElement(k.a,{inverted:!0,style:{background:"rgba(36,54,101,0.7)",height:"100%",width:"24vw"}},c.a.createElement(O.a,{inverted:!0},c.a.createElement(O.a.Content,{style:{color:"deepskyblue"}},"Travel times in minutes")),c.a.createElement(S.a,{columns:"equal",style:{width:"22vw",height:"100%"},padded:!0},c.a.createElement(S.a.Column,{style:{background:"navy"}},"0 - ",e),c.a.createElement(S.a.Column,{style:{background:"royalblue"}},e," - ",2*e),c.a.createElement(S.a.Column,{style:{background:"seagreen"}},2*e," - ",3*e),c.a.createElement(S.a.Column,{color:"yellow"},3*e," - ",4*e),c.a.createElement(S.a.Column,{style:{background:"darkorange"}},4*e," - ",5*e),c.a.createElement(S.a.Column,{style:{background:"maroon"}},5*e,"+")))):(e=3,t=c.a.createElement(k.a,{inverted:!0,style:{background:"rgba(36,54,101,0.7)",height:"100%",width:"26.5vw"}},c.a.createElement(O.a,{inverted:!0},c.a.createElement(O.a.Content,{style:{color:"deepskyblue"}},"Travel times in minutes")),c.a.createElement(S.a,{style:{height:"100%"},padded:!0},c.a.createElement(S.a.Column,{style:{background:"navy",width:"3.75vw"}},"0 - ",e),c.a.createElement(S.a.Column,{style:{background:"royalblue",width:"3.75vw"}},e," - ",2*e),c.a.createElement(S.a.Column,{style:{background:"seagreen",width:"3.75vw"}},2*e," - ",3*e),c.a.createElement(S.a.Column,{style:{width:"4.5vw"},color:"yellow"},3*e," - ",4*e),c.a.createElement(S.a.Column,{style:{background:"darkorange",width:"5vw"}},4*e," - ",5*e),c.a.createElement(S.a.Column,{style:{background:"maroon",width:"3.75vw"}},5*e,"+")))),c.a.createElement(D.a,{position:"bottomright"},t)}}]),t}(c.a.Component),T=a(236),j=a(92),F=a.n(j),N=a(479),Z=a(483),G=a(78),z=a(481),x=a(75),_=a.n(x),A=a(157),M=a.n(A),I=a(90),R=[{key:"GP",text:"GP",value:"GP",style:{color:"deepskyblue",background:"#243665",borderColor:"deepskyblue"}},{key:"Primary School",text:"Primary School",value:"PrimarySchool",style:{color:"deepskyblue",background:"#243665",borderColor:"deepskyblue"}},{key:"Secondary School",text:"Secondary School",value:"SecondarySchool",style:{color:"deepskyblue",background:"#243665",borderColor:"deepskyblue"}},{key:"Post Office",text:"Post Office",value:"PostOffice",style:{color:"deepskyblue",background:"#243665",borderColor:"deepskyblue"}},{key:"Shopping Facility",text:"Shopping Facility",value:"ShoppingFacilities",style:{color:"deepskyblue",background:"#243665",borderColor:"deepskyblue"}}],L=[],U={},X=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleOpen=function(){return a.setState({modalOpen:!0})},a.handleFacilityChange=function(e,t){console.log(t.value),a.setState({addFacility:t.value})},a.handleDataZoneChange=function(e,t){a.setState({addDataZone:t.value})},a.handleClose=function(){a.setState({modalOpen:!1})},a.handleSubmit=function(e){var t,n,r,o,i,l;return F.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:a.setState({modalOpen:!1}),a.state.addDataZone&&a.state.addFacility&&(t=parseInt(a.state.addDataZone.substr(1)),(n=[]).push(U[t]),console.log(n),r=I.multiPolygon([n]),o=M()(r),console.log(o),i=a.getNeighbours(),l=a.getCoordinates(i),a.calculateTravelTimes(o,l,e));case 2:case"end":return c.stop()}}))},a.getNeighbours=function(){var e,t=new Set,n=parseInt(a.state.addDataZone.substr(1));e=U[n];for(var r=-100;r<100;r++){var o=n+r;if(o in U&&"S0"+o!=a.state.addDataZone)for(var i=0;i<e.length;i++)JSON.stringify(U[o]).includes(JSON.stringify(e[i]))&&t.add("S0"+o)}return Array.from(t)},a.getCoordinates=function(e){for(var t,a,n,r=[],o={},i=0;i<e.length;i++){t=e[i];var l=parseInt(t.substr(1));r.push(U[l]),a=I.multiPolygon([r]),n=M()(a),o[t]=n}return o},a.calculateTravelTimes=function(e,t,n){var r,o,i,l,c,s;return F.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:for(s in r=[],i={Car:1,PT:3},(o={})[a.state.addDataZone]=i,l={headers:{"Content-Type":"application/json",Accept:"application/json","X-Application-Id":"cd8dab5e","X-Api-Key":"3b67e6f052bc7121e2f6bcb917024443"}},c=function(a){o[a]={};var n={locations:[{id:"Facility",coords:{lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]}},{id:"DataZone centroid",coords:{lat:t[a].geometry.coordinates[1],lng:t[a].geometry.coordinates[0]}}],departure_searches:[{id:"departure search example",departure_location_id:"Facility",arrival_location_ids:["DataZone centroid"],transportation:{type:"driving"},departure_time:"2020-03-20T10:00:00Z",properties:["travel_time","distance","route"]}]};r.push(_.a.post("https://api.traveltimeapp.com/v4/routes",n,l).then((function(e){var t=e.data.results[0].locations[0].properties[0].travel_time/60,n=Math.round(10*t)/10;o[a].Car=n})).catch((function(e){console.log("AXIOS ERROR: ",e.respond)})))},t)c(s);console.log(o),Promise.all(r).then((function(){return a.calculatePTravelTimes(e,t,o,n)}));case 9:case"end":return u.stop()}}))},a.calculatePTravelTimes=function(e,t,n,r){var o,i,l,c;return F.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if("PrimarySchool"!==a.state.addFacility||"SecondarySchool"!==a.state.addFacility){for(c in o=[],i={headers:{"Content-Type":"application/json",Accept:"application/json","X-Application-Id":"cd8dab5e","X-Api-Key":"3b67e6f052bc7121e2f6bcb917024443"}},l=function(a){var r={locations:[{id:"Facility",coords:{lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]}},{id:"DataZone centroid",coords:{lat:t[a].geometry.coordinates[1],lng:t[a].geometry.coordinates[0]}}],departure_searches:[{id:"departure search example",departure_location_id:"Facility",arrival_location_ids:["DataZone centroid"],transportation:{type:"public_transport"},departure_time:"2020-03-20T10:00:00Z",properties:["travel_time","distance","route"]}]};o.push(_.a.post("https://api.traveltimeapp.com/v4/routes",r,i).then((function(e){var t=e.data.results[0].locations[0].properties[0].travel_time/60,r=Math.round(10*t)/10;n[a].PT=r})).catch((function(e){console.log("AXIOS ERROR: ",e.response)})))},t)l(c);Promise.all(o).then((function(){return a.checkChanges(n,r)}))}case 1:case"end":return s.stop()}}))},a.checkChanges=function(e,t){var n,r,o,i,l,c,s;return F.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:for(r in console.log("most leptem be"),n={DataZone:a.translateToName(a.state.addDataZone,t),Facility:a.parseToString(a.state.addFacility),NeighbouringDataZones:[]},e){for(o={},i="",l=0;l<t.features.length;l++)[],t.features[l].properties.DataZone===r&&(t.features[l].properties.CarTravelTimes[a.state.addFacility]>e[r].Car&&(i=t.features[l].properties.CarTravelTimes[a.state.addFacility]+" => "+e[r].Car,o.CarChanges=i,t.features[l].properties.CarTravelTimes[a.state.addFacility]=e[r].Car),t.features[l].properties.PublicTransportTravelTimes[a.state.addFacility]>e[r].PT&&(i=t.features[l].properties.PublicTransportTravelTimes[a.state.addFacility]+" => "+e[r].PT,o.PTChanges=i,t.features[l].properties.PublicTransportTravelTimes[a.state.addFacility]=e[r].PT));c=a.translateToName(r,t),s=Object(T.a)({},c,o),Object.keys(s[c]).length>0&&n.NeighbouringDataZones.push(s)}a.setState({listitems:a.state.listitems.concat(n)}),a.props.parentCallback(t),a.props.parentCallbackSumbit(a.state.listitems);case 6:case"end":return u.stop()}}))},a.translateToName=function(e,t){console.log(e);for(var a=0;a<t.features.length;a++)if(t.features[a].properties.DataZone===e)return t.features[a].properties.Name},a.parseToString=function(e){switch(console.log(e),e){case"GP":return"GP";case"PrimarySchool":return"Primary School";case"SecondarySchool":return"Secondary School";case"PostOffice":return"Post Office";case"ShoppingFacilities":return"Shopping Facility"}},a.populateDropdown=function(e){var t,a;L=[],console.log(e);for(var o=0;o<e.features.length;o++)n=e.features[o].properties,r=n.Name+" ("+n.DataZone+")",L[o]={key:r,text:r,value:n.DataZone,style:{color:"deepskyblue",background:"#243665",borderColor:"deepskyblue"}},t=parseInt(n.DataZone.substr(1)),a=e.features[o].geometry.coordinates[0],U[t]=a;return L},a.state={modalOpen:!1,addFacility:"",addDataZone:"",listitems:[]},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.geo;return c.a.createElement(D.a,{position:"topright"},c.a.createElement(N.a,{size:"tiny",trigger:c.a.createElement(Z.a,{onClick:this.handleOpen,style:{color:"deepskyblue",background:"#243665"},circular:!0,icon:!0}," ",c.a.createElement(G.a,{name:"plus",size:"large"}),"   "),onClose:this.handleClose,open:this.state.modalOpen},c.a.createElement(N.a.Header,{className:"modalHeader"},c.a.createElement("p",null,"Adding facility")),c.a.createElement(N.a.Content,{className:"modalContent"},c.a.createElement(c.a.Fragment,null,c.a.createElement(z.a,{className:"modalDropdown",placeholder:"Select Facility",fluid:!0,selection:!0,onChange:this.handleFacilityChange,options:R}),c.a.createElement("br",null),c.a.createElement(z.a,{className:"modalDropdown",placeholder:"Select Data Zone",fluid:!0,search:!0,selection:!0,onChange:this.handleDataZoneChange,options:this.populateDropdown(t)}))),c.a.createElement(N.a.Actions,{className:"modalAction"},c.a.createElement(Z.a,{className:"modalButton",onClick:function(){return e.handleSubmit(t)},positive:!0,labelPosition:"right",icon:"checkmark",content:"Done"}))))}}]),t}(c.a.Component),B=a(254),J=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.activeDomains;return e="Car"===this.props.method,c.a.createElement(B.a,null,c.a.createElement("div",{className:"side-bar-container"},e?c.a.createElement("div",null,c.a.createElement(Z.a.Group,{inverted:!0,vertical:!0,icon:!0,color:"blue",size:"big",className:"side-bar"},c.a.createElement(Z.a,{active:a.City,icon:!0,onClick:function(){return t.props.changeDomain("City")}},c.a.createElement(G.a,{name:"globe",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"City",c.a.createElement("br",null),"Map"),c.a.createElement(Z.a,{active:a.GP,icon:!0,onClick:function(){return t.props.changeDomain("GP")}},c.a.createElement(G.a,{name:"doctor",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"GPs"),c.a.createElement(Z.a,{active:a.PrimarySchool,icon:!0,onClick:function(){return t.props.changeDomain("PrimarySchool")}},c.a.createElement(G.a,{name:"building",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"Primary",c.a.createElement("br",null)," Schools"),c.a.createElement(Z.a,{active:a.SecondarySchool,icon:!0,onClick:function(){return t.props.changeDomain("SecondarySchool")}},c.a.createElement(G.a,{name:"building",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"Secondary",c.a.createElement("br",null),"Schools"),c.a.createElement(Z.a,{active:a.PostOffice,icon:!0,onClick:function(){return t.props.changeDomain("PostOffice")}},c.a.createElement(G.a,{name:"envelope",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"Post",c.a.createElement("br",null)," Offices"),c.a.createElement(Z.a,{active:a.ShoppingFacilities,icon:!0,onClick:function(){return t.props.changeDomain("ShoppingFacilities")}},c.a.createElement(G.a,{name:"shop",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"Shopping",c.a.createElement("br",null)," Facilities")),c.a.createElement("div",{className:"restnormal"},c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"Leonard Magyar - University of Strathcylde 2019/2020")))):c.a.createElement("div",null,c.a.createElement(Z.a.Group,{inverted:!0,vertical:!0,icon:!0,color:"blue",size:"big",className:"side-bar"},c.a.createElement(Z.a,{active:a.City,icon:!0,onClick:function(){return t.props.changeDomain("City")}},c.a.createElement(G.a,{name:"globe",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"City",c.a.createElement("br",null),"Map"),c.a.createElement(Z.a,{active:a.GP,icon:!0,onClick:function(){return t.props.changeDomain("GP")}},c.a.createElement(G.a,{name:"doctor",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"GPs"),c.a.createElement(Z.a,{active:a.PostOffice,icon:!0,onClick:function(){return t.props.changeDomain("PostOffice")}},c.a.createElement(G.a,{name:"envelope",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"Post",c.a.createElement("br",null)," Offices"),c.a.createElement(Z.a,{active:a.ShoppingFacilities,icon:!0,onClick:function(){return t.props.changeDomain("ShoppingFacilities")}},c.a.createElement(G.a,{name:"shop",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"Shopping",c.a.createElement("br",null)," Facilities")),c.a.createElement("div",{className:"rest"},c.a.createElement("div",{className:"footerrest"},c.a.createElement("p",null,"Leonard Magyar - University of Strathcylde 2019/2020"))))))}}]),t}(c.a.Component),q=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(S.a.Column,{textAlign:"center",className:"title"},c.a.createElement("div",{className:"header-text"},c.a.createElement("p",null,"City Planner")),c.a.createElement("div",{className:"header-icon"},c.a.createElement(G.a,{inverted:!0,name:"pen square",color:"blue",size:"huge"})))}}]),t}(c.a.Component),H=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t,a=this;return e="Glasgow"===this.props.city,t="Car"===this.props.method,c.a.createElement("div",{className:"header"},c.a.createElement(S.a,{columns:"equal"},c.a.createElement(S.a.Column,null,c.a.createElement("div",{className:"methodButtons"},c.a.createElement(Z.a.Group,{inverted:!0,size:"medium",color:"blue"},c.a.createElement(Z.a,{active:t,icon:!0,onClick:function(){return a.props.changeMethod("Car")}},c.a.createElement(G.a,{name:"car",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null)," Car"),c.a.createElement(Z.a.Or,null),c.a.createElement(Z.a,{active:!t,icon:!0,onClick:function(){return a.props.changeMethod("PublicTransport")}},c.a.createElement(G.a,{name:"bus",size:"big"}),c.a.createElement("br",null),c.a.createElement("br",null),"Public Transport")))),c.a.createElement(q,null),c.a.createElement(S.a.Column,{textAlign:"right"},c.a.createElement("div",{className:"cityButtons"},c.a.createElement(Z.a.Group,{inverted:!0,size:"huge",color:"blue"},c.a.createElement(Z.a,{active:e,onClick:function(){return a.props.changeCity("Glasgow")}},"Glasgow"),c.a.createElement(Z.a.Or,null),c.a.createElement(Z.a,{active:!e,onClick:function(){return a.props.changeCity("Edinburgh")}},"Edinburgh"))))))}}]),t}(c.a.Component),K=a(482),Y=a(253),Q=a.n(Y),V=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).populateContents=function(e){console.log(e);for(var t=[],a=0;a<e.length;a++){for(var n="",r=0;r<Object.keys(e[a].NeighbouringDataZones).length;r++){var o=void 0,i=void 0,l=Object.keys(e[a].NeighbouringDataZones[r]);"CarChanges"in e[a].NeighbouringDataZones[r][l]&&(o="Car: "+e[a].NeighbouringDataZones[r][l].CarChanges),"PTChanges"in e[a].NeighbouringDataZones[r][l]&&(i="Public Transport: "+e[a].NeighbouringDataZones[r][l].PTChanges);var c=l+"\n";n+=c,o&&(n+=c=o+"\n"),i&&(n+=c=i+"\n"),console.log(n)}t.push(n)}return t},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.changes,t=this.populateContents(e),a=Q.a.times(e.length,(function(a){return{key:"panel-".concat(a),title:e[a].Facility.concat(" in "+e[a].DataZone),content:{content:t[a]}}}));return c.a.createElement(D.a,null,c.a.createElement(k.a,{inverted:!0,style:{background:"rgba(36,54,101,0.7)",height:"57vh",width:"14vw"}},"Facilites recently added:",c.a.createElement(K.a,{style:{overflow:"auto",maxHeight:375},className:"accordion",exclusive:!1,panels:a,styled:!0,fluid:!0})))}}]),t}(c.a.Component),W=(a(469),a(9)),$=a.n(W);delete $.a.Icon.Default.prototype._getIconUrl,$.a.Icon.Default.mergeOptions({iconRetinaUrl:a(470),iconUrl:a(471),shadowUrl:a(472)});var ee=0,te=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).callbackFunction=function(e){a.setState({geo:e})},a.callbackFunctionSubmit=function(e){a.setState({changesList:e})},a.getGlasgow=function(){a.setState({isFetching:!0}),_.a.get("https://api.npoint.io/aa3a9094c684db09d0f8").then((function(e){a.setState({isFetching:!1,geo:e.data,domain:"City"})}))},a.changeMethod=function(e){"PublicTransport"!==e||"PrimarySchool"!==a.state.domain&&"SecondarySchool"!==a.state.domain||a.changeDomain("City"),a.setState({method:e})},a.changeDomain=function(e){var t=Object.assign({},a.state);t.activeDomains[a.state.domain]=!1,t.domain=e,t.activeDomains[t.domain]=!0,a.setState(t)},a.changeCity=function(e){var t="";t="Glasgow"===e?"https://api.npoint.io/aa3a9094c684db09d0f8":"https://api.npoint.io/f7c3649ae02eea7f5e92",a.setState({isFetching:!0}),_.a.get(t).then((function(t){a.setState({isFetching:!1,geo:t.data,city:e})})),!0},a.state={isFetching:!0,geo:[],domain:"City",method:"Car",city:"Glasgow",changesList:[],activeDomains:{City:!0,GP:!1,PrimarySchool:!1,SecondarySchool:!1,PostOffice:!1,ShoppingFacilities:!1}},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){document.title="CTYPLNR",this.getGlasgow()}},{key:"render",value:function(){console.log("re-rendering...");var e,t=this.state,a=t.isFetching,n=t.geo,r=t.domain,l=t.method;return"Glasgow"===t.city?(o=[55.8595,-4.2518],i=12):(o=[55.933251,-3.268267],i=12),e=a?c.a.createElement("div",{className:"spinner-container"},c.a.createElement(C,null)):c.a.createElement(b.a,{className:"map",minZoom:i,center:o,zoom:i},c.a.createElement(y.a,{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),c.a.createElement(X,{geo:this.state.geo,parentCallback:this.callbackFunction,parentCallbackSumbit:this.callbackFunctionSubmit}),c.a.createElement(V,{changes:this.state.changesList}),c.a.createElement(w,{method:this.state.method}),c.a.createElement(f.a,{data:n,style:function(e){var t;if("City"===r)return{color:"black",weight:1.5,fillOpacity:.4};"Car"===l?(ee=e.properties.CarTravelTimes[r],t=1):(ee=e.properties.PublicTransportTravelTimes[r],t=3);return ee>=0&&ee<t?{color:"navy",weight:1.5}:ee>=t&&ee<2*t?{color:"royalblue",weight:1.5,fillOpacity:.5}:ee>=2*t&&ee<3*t?{color:"seagreen",weight:1.5,fillOpacity:.5}:ee>=3*t&&ee<4*t?{color:"yellow",weight:1.5,fillOpacity:.5}:ee>=4*t&&ee<5*t?{color:"orange",weight:1.5,fillOpacity:.5}:ee>=5*t?{color:"maroon",weight:1.5,fillOpacity:.5}:{color:"white",weight:1.5,fillOpacity:.75}},onEachFeature:function(e,t){t.bindPopup("Name: "+e.properties.Name+"<br>DataCode: "+e.properties.DataZone)}})),c.a.createElement("div",{className:"main"},c.a.createElement(H,{city:this.state.city,method:this.state.method,changeMethod:this.changeMethod,changeCity:this.changeCity}),e,c.a.createElement(J,{method:this.state.method,changeDomain:this.changeDomain,activeDomains:this.state.activeDomains}))}}]),t}(c.a.Component);u.a.render(c.a.createElement(te,null),document.getElementById("root"))},81:function(e,t,a){}},[[266,1,2]]]);
//# sourceMappingURL=main.d3682063.chunk.js.map