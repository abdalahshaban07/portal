"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[858],{5858:(M,r,s)=>{s.r(r),s.d(r,{CheckErrorsModule:()=>B});var u=s(9808),a=s(1083),h=s(5514),m=s(5981),o=s(5e3),p=s(9965),f=s(9382),c=s(7994),v=s(4872);function C(t,n){}let l=(()=>{class t{constructor(e,i){this.activeRoute=e,this.shareObsService=i}ngOnInit(){this.getIdFromUrl()}getIdFromUrl(){this.categoryId=this.activeRoute.snapshot.paramMap.get("id"),this.projectId=this.activeRoute.snapshot.queryParamMap.get("projectId"),this.categoryId&&this.loadQuestionsComponent()}loadQuestionsComponent(){const e=this.dynamicChild.createComponent(p.H);e.instance.id=this.categoryId,e.instance.routerName="question",e.instance.apiToGetListById="GetByCategoryId",e.instance.hasIconAdd=!1,e.instance.hasName=!1,e.instance.hasSearch=!1,e.instance.actionsBtn.push(f.B.actionButton.details)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(a.gz),o.Y36(v.$))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-list"]],viewQuery:function(e,i){if(1&e&&o.Gf(c.$,7,o.s_b),2&e){let d;o.iGM(d=o.CRH())&&(i.dynamicChild=d.first)}},features:[o._Bn([{provide:m.X,useExisting:h.$}])],decls:2,vars:0,consts:[["id","question"],["appLoader",""]],template:function(e,i){1&e&&(o.TgZ(0,"div",0),o.YNc(1,C,0,0,"ng-template",1),o.qZA())},directives:[c.$],styles:[""]}),t})();const y=[{path:"",component:l},{path:"list/:id",component:l}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.Bz.forChild(y)],a.Bz]}),t})();var I=s(6213);let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[u.ez,g,I.m]]}),t})()}}]);