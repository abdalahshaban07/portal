"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[860],{7860:(O,C,c)=>{c.r(C),c.d(C,{DashboardModule:()=>Ft});var m=c(9808),g=c(1083),u=c(9319),t=c(5e3),r=c(7093),v=c(6059),h=c(7725),d=c(3322),s=c(5245);function l(n,a){if(1&n&&(t.TgZ(0,"div",10)(1,"mat-icon"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.Q6J("routerLink",e.iconRouter),t.xp6(2),t.Oqu(e.icon)}}function f(n,a){if(1&n&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5),t._UZ(3,"img",6),t.YNc(4,l,3,2,"div",7),t.qZA(),t.TgZ(5,"div",8)(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"div",9)(9,"span"),t._uU(10),t.qZA()()()()),2&n){const e=a.$implicit;t.xp6(3),t.Q6J("src",e.img,t.LSH)("alt",e.title),t.xp6(1),t.Q6J("ngIf",e.iconRouter),t.xp6(3),t.Oqu(e.title),t.xp6(3),t.Oqu(e.count)}}let _=(()=>{class n{constructor(e){this.adminService=e}ngOnInit(){this.getTolalSummaries()}getTolalSummaries(){this.adminService.getTotal().subscribe(e=>{this.prepareInfo(e)})}prepareInfo(e){this.cards=[{title:"CLient Count",count:e.clientCount,img:"assets/images/user-count.png",icon:"list",iconRouter:"/client"},{title:"Project Count",count:e.projectCount,img:"assets/images/certificate.png",icon:"list",iconRouter:"/project"}]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-joined-count"]],decls:3,vars:1,consts:[[1,"wrap"],["fxLayout","row wrap","fxLayoutAlign","center",1,"card-wrap"],["fxFlex","33%","fxFlex.sm","50%","fxFlex.xs","100%","ngClass.lt-md","card-for-sm","fxLayoutAlign","center",4,"ngFor","ngForOf"],["fxFlex","33%","fxFlex.sm","50%","fxFlex.xs","100%","ngClass.lt-md","card-for-sm","fxLayoutAlign","center"],["fxLayout","column","fxLayoutGap","10px",1,"card"],["fxLayout","row","fxLayoutAlign","space-between",1,""],["width","195px","height","137px",3,"src","alt"],["class","icon",3,"routerLink",4,"ngIf"],[1,""],[1,"count"],[1,"icon",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,f,11,5,"div",2),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngForOf",o.cards))},directives:[r.xw,r.Wh,m.sg,r.yH,d.oO,r.SQ,m.O5,g.rH,s.Hw],styles:[".wrap[_ngcontent-%COMP%]{width:90%;margin:auto}.wrap[_ngcontent-%COMP%]   .card-wrap[_ngcontent-%COMP%]{margin-top:2rem}.wrap[_ngcontent-%COMP%]   .card-wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:1px solid #d6d6d6;border-radius:20px;color:#242424;background-color:#d6d6d6;padding:15px;height:35vh;margin-inline-start:20px}.wrap[_ngcontent-%COMP%]   .card-wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{text-align:center;font-size:1rem;font-weight:700}.wrap[_ngcontent-%COMP%]   .card-wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:100%;height:100%}.card-for-sm[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-bottom:10px}"]}),n})();var T=c(7994),y=c(7230),Z=c(5514),Q=c(8853),J=c(5981),A=c(1758),F=c(7423),w=c(7322),L=c(7531),x=c(4999),E=c(4847),j=c(7446),N=c(7871),U=c(5618),k=c(2274);function $(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).createPage()}),t.TgZ(1,"mat-icon"),t._uU(2,"create_new_folder"),t.qZA(),t._uU(3),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(3),t.hij(" Create New ",e.name," ")}}function Y(n,a){if(1&n&&(t.TgZ(0,"div",16),t.YNc(1,$,4,1,"button",17),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.hasCreateButton)}}function R(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-icon",22),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).createPage()}),t._uU(1,"add"),t.qZA()}}function H(n,a){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,R,2,0,"mat-icon",21),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.hasIconAdd)}}const D=function(n){return[n]};function B(n,a){if(1&n&&(t.TgZ(0,"span",19),t._uU(1),t.YNc(2,H,2,1,"span",20),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("",e.name," "),t.xp6(1),t.Q6J("appHasRole",t.VKq(2,D,e.Roles.Admin))}}function q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",23)(1,"mat-form-field",24)(2,"mat-icon",25),t._uU(3,"search"),t.qZA(),t.TgZ(4,"mat-label"),t._uU(5,"Search"),t.qZA(),t.TgZ(6,"input",26),t.NdJ("keyup",function(i){return t.CHM(e),t.oxw().applyFilter(i)}),t.qZA()()()}}function z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-header-cell",30)(1,"mat-checkbox",31),t.NdJ("change",function(i){t.CHM(e);const p=t.oxw(2);return i?p.masterToggle():null}),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function G(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-cell",30)(1,"mat-checkbox",32),t.NdJ("click",function(i){return i.stopPropagation()})("change",function(i){const b=t.CHM(e).$implicit,Et=t.oxw(2);return i?Et.selection.toggle(b):null}),t.qZA()()}if(2&n){const e=a.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("checked",o.selection.isSelected(e))("aria-label",o.checkboxLabel(e))}}function W(n,a){1&n&&(t.ynx(0,27),t.YNc(1,z,2,3,"mat-header-cell",28),t.YNc(2,G,2,2,"mat-cell",29),t.BQk())}function K(n,a){if(1&n&&(t.TgZ(0,"mat-header-cell",36),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("fxFlex","ID"===e.header?"10%":"50%"),t.xp6(1),t.hij(" ",e.header," ")}}function X(n,a){if(1&n&&(t.TgZ(0,"span")(1,"span")(2,"mat-icon"),t._uU(3,"circle"),t.qZA()()()),2&n){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.Tol(o.cell(e))}}function V(n,a){if(1&n&&(t.TgZ(0,"span"),t._UZ(1,"app-avatar",41),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("avatar",null==e?null:e.avatar)}}function tt(n,a){if(1&n&&(t.TgZ(0,"span")(1,"a",43)(2,"mat-icon"),t._uU(3,"attach_file"),t.qZA()()()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("href","http://mahmoud11prosmar-001-site1.itempurl.com"+e,t.LSH)}}function et(n,a){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,tt,4,1,"span",42),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",o.cell(e))}}function nt(n,a){if(1&n&&(t.TgZ(0,"span")(1,"a",43)(2,"mat-icon"),t._uU(3,"attach_file"),t.qZA()()()),2&n){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.Q6J("href","http://mahmoud11prosmar-001-site1.itempurl.com"+o.cell(e),t.LSH)}}function ot(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,o.cell(e),"d/M/yy, h:mm a")," ")}}function at(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.hij(" ",o.cell(e)," ")}}const ct=function(n){return{cursor:n}};function it(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-cell",37),t.NdJ("click",function(){const p=t.CHM(e).$implicit,b=t.oxw(2);return b.rowClicked?b.getRecord(p):null}),t.TgZ(1,"span",38),t.YNc(2,X,4,2,"span",39),t.YNc(3,V,2,1,"span",39),t.YNc(4,et,2,1,"span",39),t.YNc(5,nt,4,1,"span",39),t.YNc(6,ot,3,4,"span",39),t.YNc(7,at,2,1,"span",40),t.qZA()()}if(2&n){const e=t.oxw().$implicit,o=t.oxw();t.Q6J("fxFlex","ID"===e.header?"10%":"50%")("ngStyle",t.VKq(8,ct,o.rowClicked?"pointer":"default")),t.xp6(1),t.Q6J("ngSwitch",e.type),t.xp6(1),t.Q6J("ngSwitchCase",o.typeColumn.icon),t.xp6(1),t.Q6J("ngSwitchCase",o.typeColumn.avatar),t.xp6(1),t.Q6J("ngSwitchCase",o.typeColumn.fileArray),t.xp6(1),t.Q6J("ngSwitchCase",o.typeColumn.file),t.xp6(1),t.Q6J("ngSwitchCase",o.typeColumn.date)}}function rt(n,a){1&n&&(t.ynx(0,33),t.YNc(1,K,2,2,"mat-header-cell",34),t.YNc(2,it,8,10,"mat-cell",35),t.BQk()),2&n&&t.Q6J("matColumnDef",a.$implicit.columnDef)}function st(n,a){1&n&&(t.TgZ(0,"mat-header-cell",47),t._uU(1,"Action"),t.qZA())}function lt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-cell",48),t.NdJ("buttonAction",function(i){return t.CHM(e),t.oxw(2).onTableAction(i)}),t.qZA()}if(2&n){const e=a.$implicit,o=t.oxw(2);t.Q6J("value",e)("actions",o.actionsBtn)}}function mt(n,a){1&n&&(t.ynx(0,44),t.YNc(1,st,2,0,"mat-header-cell",45),t.YNc(2,lt,1,2,"mat-cell",46),t.BQk())}function pt(n,a){1&n&&t._UZ(0,"mat-header-row")}function dt(n,a){1&n&&t._UZ(0,"mat-row")}function gt(n,a){if(1&n&&(t.TgZ(0,"tr")(1,"td",49),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.hij("No ",e.name," Found!")}}const ut=function(n,a){return{width:n,"max-height":a}};let _t=(()=>{class n extends Q.C{constructor(e){super(e),this.injector=e,this.columns=[{columnDef:"id",header:"ID",cell:o=>`${o.id}`},{columnDef:"projectId",header:"Project",cell:o=>`${o.projectId}`},{columnDef:"quesation",header:"Question",cell:o=>{var i,p;return(null===(i=o.quesation)||void 0===i?void 0:i.length)>35?(null===(p=o.quesation)||void 0===p?void 0:p.substring(0,35))+"...":(null==o?void 0:o.quesation)||"question TEMP"}},{columnDef:"description",header:"Description",cell:o=>{var i,p;return(null===(i=o.description)||void 0===i?void 0:i.length)>30?o.description.substring(0,30).replace(/<[^>]*>/g,"")+"...":(null===(p=o.description)||void 0===p?void 0:p.replace(/<[^>]*>/g,""))||"description TEMP"}},{columnDef:"category",header:"Category",cell:o=>`${o.category}`},{columnDef:"status",header:"Status",cell:o=>`${o.status}`},{columnDef:"clientLastUpdateDate",header:"Client Update",type:A.i.date,cell:o=>`${(null==o?void 0:o.clientLastUpdateDate)||"16/Aug/2022"}`},{columnDef:"consultantLastUpdateDate",header:"Consultant Update",type:A.i.date,cell:o=>`${(null==o?void 0:o.consultantLastUpdateDate)||"16/Aug/2022"}`}],this.quesationService=this.injector.get(Z.$)}ngOnInit(){this.loadData()}loadData(){this.routerName="question",this.apiToGetListById="GetUserMisingProjectQues",this.hasSearch=!1,this.hasIconAdd=!1,this.hasCreateButton=!1,this.haveActions=!0,this.hasName=!0,this.name="Missing Evidences",super.ngOnInitC()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.zs3))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-missing-evidences-table"]],features:[t._Bn([{provide:J.X,useExisting:y.Y}]),t.qOj],decls:17,vars:18,consts:[["fxLayout","column","fxLayoutAlign","start",1,"wrap"],["class","create-btn",4,"appHasRole"],["fxLayout","column","ngClass.lt-md","table-wrap_xs",1,"table-wrap",3,"ngStyle"],["class","table-name",4,"ngIf"],[1,"table-actionbar"],["class","search-box",4,"ngIf"],[1,"table-data"],["matSort","","fxLayout","column",3,"dataSource"],["matColumnDef","select",4,"ngIf"],[3,"matColumnDef",4,"ngFor","ngForOf"],["matColumnDef","action",4,"ngIf"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[1,"no-record"],[4,"ngIf"],[3,"length","pagenatior"],[1,"create-btn"],["mat-button","",3,"click",4,"ngIf"],["mat-button","",3,"click"],[1,"table-name"],[4,"appHasRole"],[3,"click",4,"ngIf"],[3,"click"],[1,"search-box"],["appearance","outline",1,"example-form-field"],["matPrefix",""],["matInput","","type","text",3,"keyup"],["matColumnDef","select"],["fxFlex","10%",4,"matHeaderCellDef"],["fxFlex","10%",4,"matCellDef"],["fxFlex","10%"],[3,"checked","indeterminate","aria-label","change"],[3,"checked","aria-label","click","change"],[3,"matColumnDef"],["mat-sort-header","","fxLayoutAlign","start center",3,"fxFlex",4,"matHeaderCellDef"],["fxLayoutAlign","start center",3,"fxFlex","ngStyle","click",4,"matCellDef"],["mat-sort-header","","fxLayoutAlign","start center",3,"fxFlex"],["fxLayoutAlign","start center",3,"fxFlex","ngStyle","click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"avatar"],[4,"ngFor","ngForOf"],["target","_blank","rel","noopener noreferrer",3,"href"],["matColumnDef","action"],["fxFlex","7%",4,"matHeaderCellDef"],["action-buttons","","fxFlex","7%",3,"value","actions","buttonAction",4,"matCellDef"],["fxFlex","7%"],["action-buttons","","fxFlex","7%",3,"value","actions","buttonAction"],[2,"text-align","center"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Y,2,1,"div",1),t.TgZ(2,"div")(3,"div",2),t.YNc(4,B,3,4,"span",3),t.TgZ(5,"div",4),t.YNc(6,q,7,0,"div",5),t.qZA(),t.TgZ(7,"div",6)(8,"mat-table",7),t.YNc(9,W,3,0,"ng-container",8),t.YNc(10,rt,3,1,"ng-container",9),t.YNc(11,mt,3,0,"ng-container",10),t.YNc(12,pt,1,0,"mat-header-row",11),t.YNc(13,dt,1,0,"mat-row",12),t.qZA(),t.TgZ(14,"table",13),t.YNc(15,gt,3,1,"tr",14),t.qZA()(),t.TgZ(16,"app-paginator",15),t.NdJ("pagenatior",function(p){return o.onPageChange(p)}),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("appHasRole",t.VKq(13,D,o.Roles.Admin)),t.xp6(2),t.Q6J("ngStyle",t.WLB(15,ut,o.width,o.height)),t.xp6(1),t.Q6J("ngIf",o.hasName),t.xp6(2),t.Q6J("ngIf",o.hasSearch),t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(1),t.Q6J("ngIf",o.haveSelect),t.xp6(1),t.Q6J("ngForOf",o.columns),t.xp6(1),t.Q6J("ngIf",o.haveActions),t.xp6(1),t.Q6J("matHeaderRowDef",o.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(2),t.Q6J("ngIf",!o.dataSource.data.length),t.xp6(1),t.Q6J("length",o.length))},directives:[r.xw,r.Wh,v.c,m.O5,F.lW,s.Hw,d.oO,m.PC,d.Zl,w.KE,w.qo,w.hX,L.Nt,x.BZ,E.YE,x.w1,x.fO,x.ge,r.yH,j.oG,x.Dz,x.ev,m.sg,E.nU,m.RF,m.n9,N.A,m.ED,U.O,x.as,x.XQ,x.nj,x.Gk,k.J],pipes:[m.uU],styles:[".wrap[_ngcontent-%COMP%]{width:90%;margin:auto;margin-block:1rem}.wrap[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%]{margin-bottom:1rem}.wrap[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{border-radius:20px;background-color:#454545;padding:13px;color:#fff}.table-wrap_xs[_ngcontent-%COMP%]{width:100%}.table-name[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;color:#242424;text-transform:uppercase;margin-block:1rem;display:flex;align-items:flex-end}.table-name[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:2rem}.table-data[_ngcontent-%COMP%]{position:relative}.no-record[_ngcontent-%COMP%]{display:flex;justify-content:center;line-height:40px;font-size:2rem}.no-record[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-block:1rem}.mat-header-row[_ngcontent-%COMP%]{background-color:#242424;border-radius:15px}.mat-header-row[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{color:#fff}.mat-header-row[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]     .mat-sort-header-arrow{color:#fff}  .mat-checkbox-checked.mat-accent .mat-checkbox-background,   .mat-checkbox-checked.mat-accent .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#f4b027}  .mat-checkbox.mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#f4b027!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#f4b027}  .mat-checkbox-inner-container{height:25px!important;width:25px!important;border-radius:3px;background:white}  .mat-cell{cursor:pointer}.active[_ngcontent-%COMP%]{color:#31b965}.waiting[_ngcontent-%COMP%]{color:#f4b027}.not_active[_ngcontent-%COMP%]{color:#db1c1c}"]}),n})();var M=c(3075),ft=c(7990),S=c(4872),ht=c(6928),P=c(9224);const xt=function(n){return[n]};function Ct(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-card",2)(1,"mat-card-subtitle"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-actions",3)(4,"button",4),t._uU(5),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){const p=t.CHM(e).$implicit;return t.oxw().continue(p)}),t._uU(7," Continue "),t.qZA()()()}if(2&n){const e=a.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(3),t.Oqu(e.prcentage),t.xp6(1),t.Q6J("routerLink",t.VKq(3,xt,e.routerLink))}}let vt=(()=>{class n{constructor(e,o,i,p,b){this.activeRoute=e,this.projectService=o,this.quesationService=i,this.router=p,this.shareObsService=b}set id(e){this._id=e,this.getCategoryByProjectId()}ngOnInit(){this.getIdFromUrl()}getIdFromUrl(){this._id||(this._id=this.activeRoute.snapshot.paramMap.get("id"),this.getCategoryByProjectId())}getCategoryByProjectId(){this.projectService.getCategoryWithPercentageByProjectId(this._id).subscribe(({data:e})=>{e&&this.prepareCategoryCard(e)})}prepareCategoryCard(e){var o;this.categories=null===(o=e.projectPercentage)||void 0===o?void 0:o.map(i=>({id:i.id,name:i.category,prcentage:i.completed,routerLink:`/check-errors/list/${i.id}`}))}continue(e){this.router.navigate(["/check-errors/list",e.id],{queryParams:{projectId:this.shareObsService.projectId}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.gz),t.Y36(y.Y),t.Y36(Z.$),t.Y36(g.F0),t.Y36(S.$))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-category-card"]],inputs:{id:"id"},decls:2,vars:1,consts:[["fxLayout","row wrap",1,"warp-card"],["class","card","fxFlex.sm","34%","fxFlex.xs","80%","fxLayout","column",4,"ngFor","ngForOf"],["fxFlex.sm","34%","fxFlex.xs","80%","fxLayout","column",1,"card"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-button","","disabled",""],["mat-button","",1,"continue",3,"routerLink","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Ct,8,5,"mat-card",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.categories))},directives:[r.xw,m.sg,P.a8,r.yH,P.$j,P.hq,r.Wh,F.lW,g.rH],styles:[".warp-card[_ngcontent-%COMP%]{justify-content:center}.warp-card[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{border-radius:15px;padding:5px;background-color:#ebebeb;color:#888;margin:7px}.warp-card[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{padding-left:5px;margin-bottom:10px}.warp-card[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]{margin-bottom:2px;display:flex}.warp-card[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]   .mat-button[disabled][_ngcontent-%COMP%]{font-size:2rem;font-weight:bolder;background-color:transparent!important}.warp-card[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]   .continue[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px}"]}),n})();function bt(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"app-dynamic-form-field",8),t.BQk()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("formItem",e)}}function Tt(n,a){if(1&n&&(t.TgZ(0,"div",9),t._UZ(1,"app-category-card",10),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("id",e.shareObsService.projectId)}}function yt(n,a){}let Mt=(()=>{class n{constructor(e,o,i,p){this.fb=e,this.cdref=o,this.listOfValuesService=i,this.shareObsService=p}ngOnInit(){this.createForm(),this.tracProjectChange()}createDynamicFormFields(){this.dynamicFormFields=[{id:"projectId",label:"Select Project",type:"select",selectMenuOptions:this.Projects,defaultValue:{value:"",disabled:!1},multiple:!1}]}createForm(){this.createDynamicFormFields(),this.myForm=this.fb.group({}),this.dynamicFormFields.forEach(e=>{const o=this.fb.control(Object.assign({},e.defaultValue),e.validators);this.myForm.addControl(e.id,o)})}tracProjectChange(){var e;null===(e=this.myForm.get("projectId"))||void 0===e||e.valueChanges.subscribe(o=>{o&&(this.shareObsService.projectId=o,this.loadQuestionsComponent())})}get Projects(){let e=[];return this.listOfValuesService.getProjects().subscribe(o=>{e.push(...o)}),e}loadQuestionsComponent(){this.dynamicChild.clear(),this.dynamicChild.createComponent(_t).instance.id=this.shareObsService.projectId}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(M.qu),t.Y36(t.sBO),t.Y36(ft.j),t.Y36(S.$))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-missing-evidences"]],viewQuery:function(e,o){if(1&e&&t.Gf(T.$,7,t.s_b),2&e){let i;t.iGM(i=t.CRH())&&(o.dynamicChild=i.first)}},decls:8,vars:3,consts:[[1,"wrap"],["fxLayout","column"],[1,"dropDown"],["fxLayout","column","fxLayoutGap","0px",1,"form",3,"formGroup"],[4,"ngFor","ngForOf"],["class","categoryCard",4,"ngIf"],[1,"miss-evidence-table"],["appLoader",""],[3,"formItem"],[1,"categoryCard"],[3,"id"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),t.YNc(4,bt,2,1,"ng-container",4),t.qZA()(),t.YNc(5,Tt,2,1,"div",5),t.TgZ(6,"div",6),t.YNc(7,yt,0,0,"ng-template",7),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",o.myForm),t.xp6(1),t.Q6J("ngForOf",o.dynamicFormFields),t.xp6(1),t.Q6J("ngIf",o.shareObsService.projectId))},directives:[r.xw,M._Y,M.JL,r.SQ,M.sg,m.sg,ht.q,m.O5,vt,T.$],styles:[".wrap[_ngcontent-%COMP%]{width:90%;margin:auto;margin-top:1rem}.wrap[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%]{width:20%;margin:auto}"]}),n})();function Ot(n,a){1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-joined-count"),t.qZA())}function wt(n,a){1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-missing-evidences"),t.qZA())}const I=function(n){return[n]},Pt=[{path:"",component:(()=>{class n{constructor(){this.adminRole=u.G.Admin,this.userRole=u.G.User}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard"]],decls:3,vars:6,consts:[["fxLayout","column","fxLayoutGap","30px",1,"warp"],[4,"appHasRole"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Ot,2,0,"div",1),t.YNc(2,wt,2,0,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("appHasRole",t.VKq(2,I,o.adminRole)),t.xp6(1),t.Q6J("appHasRole",t.VKq(4,I,o.userRole)))},directives:[r.xw,r.SQ,v.c,_,Mt],styles:[".welcome[_ngcontent-%COMP%]{margin-top:1rem}"]}),n})()}];let Zt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(Pt)],g.Bz]}),n})();var At=c(6213);let Ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,Zt,At.m]]}),n})()},7230:(O,C,c)=>{c.d(C,{Y:()=>v});var m=c(520),g=c(9913),u=c(6739),t=c(4004),r=c(5e3);let v=(()=>{class h extends g.z{constructor(s,l){super(s),this.injector=s,this.http=l}getResourceUrl(){return"Project"}getItemBy(s=u.a.pageNumber,l=u.a.pageSize,f,_){let T=(new m.LE).set("id",f.toString()).set("pageNum",s.toString()).set("pagSize",l.toString());return this.injector.get(m.eN).get(`${this.APIUrl}/${_}?${T.toString()}`)}transform(s){return s.data}getTotal(s){return this.http.get(`${this.APIUrl}/GetTotalSummary?id=${s}`).pipe((0,t.U)(l=>this.transform(l)))}acceptQuestion(s){return this.http.post(`${this.APIUrl}/AcceptProjectQuesation?id=${s}`,s)}getCategoryWithPercentageByProjectId(s){return this.http.get(`${this.APIUrl}/GetProjectCategoryTotalSummary?id=${s}`)}}return h.\u0275fac=function(s){return new(s||h)(r.LFG(r.zs3),r.LFG(m.eN))},h.\u0275prov=r.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},5514:(O,C,c)=>{c.d(C,{$:()=>h});var m=c(2340),g=c(520),u=c(9913),t=c(6739),v=c(5e3);let h=(()=>{class d extends u.z{constructor(l){super(l),this.injector=l}getResourceUrl(){return"Quesation"}getItemBy(l=t.a.pageNumber,f=t.a.pageSize,_,T){let y=(new g.LE).set("id",_.toString()).set("pageNum",l.toString()).set("pagSize",f.toString());return this.injector.get(g.eN).get(`${this.APIUrl}/${T}?${y.toString()}`)}addCommentToQuestion(l){let f=new g.WM;f.set("Content-Type",null),f.set("Accept","multipart/form-data");const _=function r(d){const s=new FormData;for(const l of Object.keys(d)){if(d[l]instanceof Array)for(let _=0;_<d[l].length;_++)s.append(l,d[l][_],d[l][_].name);s.append(l,d[l])}return s}(l);return this.injector.get(g.eN).post(`${m.N.APIUrl}QuesationAnswer/Create`,_,{headers:f,reportProgress:!0,observe:"events"})}}return d.\u0275fac=function(l){return new(l||d)(v.LFG(v.zs3))},d.\u0275prov=v.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},7994:(O,C,c)=>{c.d(C,{$:()=>g});var m=c(5e3);let g=(()=>{class u{constructor(r){this.viewContainerRef=r}ngOnInit(){}}return u.\u0275fac=function(r){return new(r||u)(m.Y36(m.s_b))},u.\u0275dir=m.lG2({type:u,selectors:[["","appLoader",""]]}),u})()}}]);