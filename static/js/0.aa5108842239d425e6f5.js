webpackJsonp([0],{EhtJ:function(e,t,r){"use strict";var a=r("HzJ8"),n=r.n(a),o=r("aA9S"),s=r.n(o),i={name:"SearchBox",props:{searchOptions:{type:Array,default:function(){return[]}},listQuery:{type:Object,default:function(){return{}}},orderUpdate:{type:Function}},data:function(){return{searchQuery:"",loginLoading:null}},created:function(){for(var e in this.searchQuery=s()({},this.listQuery),this.searchQuery)this.searchQuery.hasOwnProperty(e)&&(this.searchQuery[e]="")},methods:{tick:function(){this.$message({message:"请选择任务下次触发时间",type:"warning",duration:2e3})},onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var r=JSON.parse(sessionStorage.getItem("userCode")).userCode,a={data:s()({},t.searchQuery),userCode:r};t.loginLoading=t.$loading({lock:!0,text:"订单刷新中,请稍后。。。",spinner:"el-icon-loading"}),t.orderUpdateHandle(a)})},orderUpdateHandle:function(e){var t=this;this.orderUpdate(e).then(function(e){0==e.data.code?(t.loginLoading.close(),t.$message({message:"订单刷新成功",type:"success",duration:2e3})):(t.loginLoading.close(),t.$message({message:"操作失败",type:"error",duration:2e3}))}).catch(function(e){console.log(e),t.loginLoading.close()}).finally(function(){t.loginLoading.close()})},handleReset:function(){for(var e in this.searchQuery)this.searchQuery.hasOwnProperty(e)&&(this.searchQuery[e]="")},deleteTrim:function(e){var t=e.replace(/，/g,",").split(","),r=[],a=!0,o=!1,s=void 0;try{for(var i,l=n()(t);!(a=(i=l.next()).done);a=!0){var c=i.value;(c=c.replace(/[\r\n\s]/g,"").trim())&&r.push(c)}}catch(e){o=!0,s=e}finally{try{!a&&l.return&&l.return()}finally{if(o)throw s}}return r}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card"},[r("el-container",[r("el-header",{staticClass:"elHeader",attrs:{height:""}},[r("div",{staticClass:"searchBox",staticStyle:{"margin-top":"10px"}},[r("el-row",[r("el-col",[r("el-form",{ref:"form",attrs:{model:e.searchQuery,inline:!0,size:"small"}},e._l(e.searchOptions,function(t){return r("div",{key:t.label,staticStyle:{display:"inline-block"}},["input"===t.proptype?r("el-form-item",{attrs:{label:t.label,rules:t.rules,prop:t.prop}},[r("el-input",{attrs:{placeholder:t.placeholder,type:t.type},model:{value:e.searchQuery[t.name],callback:function(r){e.$set(e.searchQuery,t.name,r)},expression:"searchQuery[option.name]"}})],1):e._e(),e._v(" "),"select"===t.proptype?r("el-form-item",{attrs:{label:t.label,rules:t.rules,prop:t.prop}},[r("el-select",{attrs:{placeholder:t.placeholder},model:{value:e.searchQuery[t.name],callback:function(r){e.$set(e.searchQuery,t.name,r)},expression:"searchQuery[option.name]"}},e._l(e.listQuery[t.name],function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e._v(" "),"date"===t.proptype?r("el-form-item",{attrs:{label:t.label}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"timestamp"},model:{value:e.searchQuery[t.name],callback:function(r){e.$set(e.searchQuery,t.name,r)},expression:"searchQuery[option.name]"}})],1)]):e._e()],1)}),0)],1)],1)],1)]),e._v(" "),r("el-main",{staticClass:"btn",staticStyle:{"text-align":"center"},attrs:{height:""}},[r("div",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("更新订单")]),e._v(" "),r("el-button",{on:{click:e.handleReset}},[e._v("重置")])],1)])],1)],1)],1)},staticRenderFns:[]};var c=r("C7Lr")(i,l,!1,function(e){r("s6KJ")},"data-v-292770e4",null);t.a=c.exports},FWz8:function(e,t,r){"use strict";t.e=function(e){return Object(a.a)({url:"/bff/api/v1/operation/order/update",method:"post",data:e})},t.d=function(e){return Object(a.a)({url:"/bff/api/v1/operation/task/update",method:"post",data:e})},t.c=function(e){return Object(a.a)({url:"/bff/api/v1/operation/return_order/update",method:"post",data:e})},t.a=function(e){return Object(a.a)({url:"/bff/api/v1/operation/order/item/update",method:"post",data:e})},t.b=function(e){return Object(a.a)({url:"/bff/api/v1/operation/return_order/item/update",method:"post",data:e})};var a=r("vLgD")},s6KJ:function(e,t){}});
//# sourceMappingURL=0.aa5108842239d425e6f5.js.map