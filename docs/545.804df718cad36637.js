"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[545],{7545:(M,f,i)=>{i.r(f),i.d(f,{ClientModule:()=>vt});var r=i(9808),d=i(1083),l=i(3075),_=i(9525),t=i(5e3),g=i(3007),O=i(2290),p=i(7093),A=i(6928),h=i(7423);function Z(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"app-dynamic-form-field",5),t.BQk()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("formItem",e)}}let b=(()=>{class n{constructor(e,o,c,s,u){this.fb=e,this.clientService=o,this.activeRoute=c,this.toastr=s,this.router=u}ngOnInit(){this.createForm(),this.getIdFromUrl()}createDynamicFormFields(){this.dynamicFormFields=[{id:"name",label:"Name",type:"text",defaultValue:{value:"",disabled:!1},validators:[l.kI.required]},{id:"email",label:"Email",type:"text",defaultValue:{value:"",disabled:!1},validators:[l.kI.required,l.kI.email]},{id:"address",label:"Address",type:"text",defaultValue:{value:"",disabled:!1},validators:[l.kI.required]},{id:"phone",label:"Phone",type:"text",defaultValue:{value:"",disabled:!1}},{id:"isActive",label:"Is Active",type:"select",selectMenuOptions:[{key:!0,value:"True"},{key:!1,value:"False"}],defaultValue:{value:"",disabled:!1}}]}getIdFromUrl(){this.id=this.activeRoute.snapshot.paramMap.get("id"),this.id?(this.formMode=_.h.Edit,this.getItemById(this.id)):this.formMode=_.h.Add}createForm(){this.createDynamicFormFields(),this.myForm=this.fb.group({}),this.dynamicFormFields.forEach(e=>{const o=this.fb.control(Object.assign({},e.defaultValue),e.validators);this.myForm.addControl(e.id,o)})}getItemById(e){this.clientService.get(e).subscribe(o=>{this.myForm.patchValue(o)})}saveData(){if(this.myForm.invalid)return;let e=this.myForm.value;this.formMode===_.h.Add?this.addCertificate(e):(e=Object.assign(Object.assign({},e),{id:this.id}),this.updateCertificate(e))}addCertificate(e){this.clientService.add(e).subscribe(()=>{this.actionAfterAddOrUpdate("added")})}updateCertificate(e){this.clientService.update(e).subscribe(()=>{this.actionAfterAddOrUpdate("updated")})}actionAfterAddOrUpdate(e){this.myForm.reset(),this.toastr.success(`Client ${e} successfully`),this.router.navigate(["/client"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.qu),t.Y36(g.y),t.Y36(d.gz),t.Y36(O._W),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-control"]],decls:6,vars:4,consts:[[1,"wrap-form"],["fxLayout","column","fxLayoutGap","0px",1,"form",3,"formGroup"],[4,"ngFor","ngForOf"],[1,"form-buttons"],["mat-button","","type","button",3,"disabled","click"],[3,"formItem"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.YNc(2,Z,2,1,"ng-container",2),t.TgZ(3,"div",3)(4,"button",4),t.NdJ("click",function(){return o.saveData()}),t._uU(5),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",o.myForm),t.xp6(1),t.Q6J("ngForOf",o.dynamicFormFields),t.xp6(2),t.Q6J("disabled",o.myForm.invalid),t.xp6(1),t.hij(" ",o.formMode," "))},directives:[l._Y,l.JL,p.xw,p.SQ,l.sg,r.sg,A.q,h.lW],styles:[".wrap-form[_ngcontent-%COMP%]{margin-block:3rem}.wrap-form[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:80%;margin:0 auto}.wrap-form[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{padding:5px;border-radius:10px;background-color:#454545;color:#ffe5e5}.wrap-form[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%]   .mat-button[disabled][_ngcontent-%COMP%]{background-color:#707070}"]}),n})();var P=i(9382),L=i(8853),F=i(5981),k=i(1758),I=i(6059),J=i(5245),v=i(3322),x=i(7322),D=i(7531),m=i(4999),y=i(4847),N=i(7446),Q=i(7871),S=i(5618),U=i(2274);function Y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).createPage()}),t.TgZ(1,"mat-icon"),t._uU(2,"create_new_folder"),t.qZA(),t._uU(3),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(3),t.hij(" Create New ",e.name," ")}}function $(n,a){if(1&n&&(t.TgZ(0,"div",16),t.YNc(1,Y,4,1,"button",17),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.hasCreateButton)}}function j(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-icon",22),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).createPage()}),t._uU(1,"add"),t.qZA()}}function R(n,a){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,j,2,0,"mat-icon",21),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.hasIconAdd)}}const w=function(n){return[n]};function H(n,a){if(1&n&&(t.TgZ(0,"span",19),t._uU(1),t.YNc(2,R,2,1,"span",20),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("",e.name," "),t.xp6(1),t.Q6J("appHasRole",t.VKq(2,w,e.Roles.Admin))}}function B(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",23)(1,"mat-form-field",24)(2,"mat-icon",25),t._uU(3,"search"),t.qZA(),t.TgZ(4,"mat-label"),t._uU(5,"Search"),t.qZA(),t.TgZ(6,"input",26),t.NdJ("keyup",function(c){return t.CHM(e),t.oxw().applyFilter(c)}),t.qZA()()()}}function V(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-header-cell",30)(1,"mat-checkbox",31),t.NdJ("change",function(c){t.CHM(e);const s=t.oxw(2);return c?s.masterToggle():null}),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function E(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-cell",30)(1,"mat-checkbox",32),t.NdJ("click",function(c){return c.stopPropagation()})("change",function(c){const u=t.CHM(e).$implicit,yt=t.oxw(2);return c?yt.selection.toggle(u):null}),t.qZA()()}if(2&n){const e=a.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("checked",o.selection.isSelected(e))("aria-label",o.checkboxLabel(e))}}function q(n,a){1&n&&(t.ynx(0,27),t.YNc(1,V,2,3,"mat-header-cell",28),t.YNc(2,E,2,2,"mat-cell",29),t.BQk())}function G(n,a){if(1&n&&(t.TgZ(0,"mat-header-cell",36),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("fxFlex","ID"===e.header?"10%":"50%"),t.xp6(1),t.hij(" ",e.header," ")}}function z(n,a){if(1&n&&(t.TgZ(0,"span")(1,"span")(2,"mat-icon"),t._uU(3,"circle"),t.qZA()()()),2&n){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.Tol(o.cell(e))}}function W(n,a){if(1&n&&(t.TgZ(0,"span"),t._UZ(1,"app-avatar",41),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("avatar",null==e?null:e.avatar)}}function X(n,a){if(1&n&&(t.TgZ(0,"span")(1,"a",43)(2,"mat-icon"),t._uU(3,"attach_file"),t.qZA()()()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("href","http://mahmoud11prosmar-001-site1.itempurl.com"+e,t.LSH)}}function K(n,a){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,X,4,1,"span",42),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",o.cell(e))}}function tt(n,a){if(1&n&&(t.TgZ(0,"span")(1,"a",43)(2,"mat-icon"),t._uU(3,"attach_file"),t.qZA()()()),2&n){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.Q6J("href","http://mahmoud11prosmar-001-site1.itempurl.com"+o.cell(e),t.LSH)}}function et(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,o.cell(e),"d/M/yy, h:mm a")," ")}}function nt(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.hij(" ",o.cell(e)," ")}}const ot=function(n){return{cursor:n}};function at(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-cell",37),t.NdJ("click",function(){const s=t.CHM(e).$implicit,u=t.oxw(2);return u.rowClicked?u.getRecord(s):null}),t.TgZ(1,"span",38),t.YNc(2,z,4,2,"span",39),t.YNc(3,W,2,1,"span",39),t.YNc(4,K,2,1,"span",39),t.YNc(5,tt,4,1,"span",39),t.YNc(6,et,3,4,"span",39),t.YNc(7,nt,2,1,"span",40),t.qZA()()}if(2&n){const e=t.oxw().$implicit,o=t.oxw();t.Q6J("fxFlex","ID"===e.header?"10%":"50%")("ngStyle",t.VKq(8,ot,o.rowClicked?"pointer":"default")),t.xp6(1),t.Q6J("ngSwitch",e.type),t.xp6(1),t.Q6J("ngSwitchCase",o.typeColumn.icon),t.xp6(1),t.Q6J("ngSwitchCase",o.typeColumn.avatar),t.xp6(1),t.Q6J("ngSwitchCase",o.typeColumn.fileArray),t.xp6(1),t.Q6J("ngSwitchCase",o.typeColumn.file),t.xp6(1),t.Q6J("ngSwitchCase",o.typeColumn.date)}}function ct(n,a){1&n&&(t.ynx(0,33),t.YNc(1,G,2,2,"mat-header-cell",34),t.YNc(2,at,8,10,"mat-cell",35),t.BQk()),2&n&&t.Q6J("matColumnDef",a.$implicit.columnDef)}function it(n,a){1&n&&(t.TgZ(0,"mat-header-cell",47),t._uU(1,"Action"),t.qZA())}function rt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-cell",48),t.NdJ("buttonAction",function(c){return t.CHM(e),t.oxw(2).onTableAction(c)}),t.qZA()}if(2&n){const e=a.$implicit,o=t.oxw(2);t.Q6J("value",e)("actions",o.actionsBtn)}}function lt(n,a){1&n&&(t.ynx(0,44),t.YNc(1,it,2,0,"mat-header-cell",45),t.YNc(2,rt,1,2,"mat-cell",46),t.BQk())}function st(n,a){1&n&&t._UZ(0,"mat-header-row")}function mt(n,a){1&n&&t._UZ(0,"mat-row")}function pt(n,a){if(1&n&&(t.TgZ(0,"tr")(1,"td",49),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.hij("No ",e.name," Found!")}}const dt=function(n,a){return{width:n,"max-height":a}};let ut=(()=>{class n extends L.C{constructor(e,o){super(e),this.injector=e,this.datePipe=o,this.columns=[{columnDef:"id",header:"ID",cell:c=>`${c.id}`},{columnDef:"name",header:"Name",cell:c=>`${c.name}`},{columnDef:"email",header:"Email",cell:c=>`${c.email}`},{columnDef:"address",header:"Address",cell:c=>`${c.address}`},{columnDef:"phone",header:"Phone",cell:c=>`${c.phone}`},{columnDef:"creationDate",header:"Creation Date",cell:c=>this.datePipe.transform(c.creationDate,"dd/MM/yyyy")},{columnDef:"is Active",header:"Is Active",type:k.i.icon,cell:c=>c.isActive?"active":"not_active"}]}ngOnInit(){this.haveActions=!0,this.hasCreateButton=!0,this.name="Client",this.actionsBtn.push(P.B.actionButton.view),super.ngOnInitC()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.zs3),t.Y36(r.uU))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list"]],features:[t._Bn([r.uU,{provide:F.X,useExisting:g.y}]),t.qOj],decls:17,vars:18,consts:[["fxLayout","column","fxLayoutAlign","start",1,"wrap"],["class","create-btn",4,"appHasRole"],["fxLayout","column","ngClass.lt-md","table-wrap_xs",1,"table-wrap",3,"ngStyle"],["class","table-name",4,"ngIf"],[1,"table-actionbar"],["class","search-box",4,"ngIf"],[1,"table-data"],["matSort","","fxLayout","column",3,"dataSource"],["matColumnDef","select",4,"ngIf"],[3,"matColumnDef",4,"ngFor","ngForOf"],["matColumnDef","action",4,"ngIf"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[1,"no-record"],[4,"ngIf"],[3,"length","pagenatior"],[1,"create-btn"],["mat-button","",3,"click",4,"ngIf"],["mat-button","",3,"click"],[1,"table-name"],[4,"appHasRole"],[3,"click",4,"ngIf"],[3,"click"],[1,"search-box"],["appearance","outline",1,"example-form-field"],["matPrefix",""],["matInput","","type","text",3,"keyup"],["matColumnDef","select"],["fxFlex","10%",4,"matHeaderCellDef"],["fxFlex","10%",4,"matCellDef"],["fxFlex","10%"],[3,"checked","indeterminate","aria-label","change"],[3,"checked","aria-label","click","change"],[3,"matColumnDef"],["mat-sort-header","","fxLayoutAlign","start center",3,"fxFlex",4,"matHeaderCellDef"],["fxLayoutAlign","start center",3,"fxFlex","ngStyle","click",4,"matCellDef"],["mat-sort-header","","fxLayoutAlign","start center",3,"fxFlex"],["fxLayoutAlign","start center",3,"fxFlex","ngStyle","click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"avatar"],[4,"ngFor","ngForOf"],["target","_blank","rel","noopener noreferrer",3,"href"],["matColumnDef","action"],["fxFlex","7%",4,"matHeaderCellDef"],["action-buttons","","fxFlex","7%",3,"value","actions","buttonAction",4,"matCellDef"],["fxFlex","7%"],["action-buttons","","fxFlex","7%",3,"value","actions","buttonAction"],[2,"text-align","center"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,$,2,1,"div",1),t.TgZ(2,"div")(3,"div",2),t.YNc(4,H,3,4,"span",3),t.TgZ(5,"div",4),t.YNc(6,B,7,0,"div",5),t.qZA(),t.TgZ(7,"div",6)(8,"mat-table",7),t.YNc(9,q,3,0,"ng-container",8),t.YNc(10,ct,3,1,"ng-container",9),t.YNc(11,lt,3,0,"ng-container",10),t.YNc(12,st,1,0,"mat-header-row",11),t.YNc(13,mt,1,0,"mat-row",12),t.qZA(),t.TgZ(14,"table",13),t.YNc(15,pt,3,1,"tr",14),t.qZA()(),t.TgZ(16,"app-paginator",15),t.NdJ("pagenatior",function(s){return o.onPageChange(s)}),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("appHasRole",t.VKq(13,w,o.Roles.Admin)),t.xp6(2),t.Q6J("ngStyle",t.WLB(15,dt,o.width,o.height)),t.xp6(1),t.Q6J("ngIf",o.hasName),t.xp6(2),t.Q6J("ngIf",o.hasSearch),t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(1),t.Q6J("ngIf",o.haveSelect),t.xp6(1),t.Q6J("ngForOf",o.columns),t.xp6(1),t.Q6J("ngIf",o.haveActions),t.xp6(1),t.Q6J("matHeaderRowDef",o.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(2),t.Q6J("ngIf",!o.dataSource.data.length),t.xp6(1),t.Q6J("length",o.length))},directives:[p.xw,p.Wh,I.c,r.O5,h.lW,J.Hw,v.oO,r.PC,v.Zl,x.KE,x.qo,x.hX,D.Nt,m.BZ,y.YE,m.w1,m.fO,m.ge,p.yH,N.oG,m.Dz,m.ev,r.sg,y.nU,r.RF,r.n9,Q.A,r.ED,S.O,m.as,m.XQ,m.nj,m.Gk,U.J],pipes:[r.uU],styles:[".wrap[_ngcontent-%COMP%]{width:90%;margin:auto;margin-block:1rem}.wrap[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%]{margin-bottom:1rem}.wrap[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{border-radius:20px;background-color:#454545;padding:13px;color:#fff}.table-wrap_xs[_ngcontent-%COMP%]{width:100%}.table-name[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;color:#242424;text-transform:uppercase;margin-block:1rem;display:flex;align-items:flex-end}.table-name[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:2rem}.table-data[_ngcontent-%COMP%]{position:relative}.no-record[_ngcontent-%COMP%]{display:flex;justify-content:center;line-height:40px;font-size:2rem}.no-record[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-block:1rem}.mat-header-row[_ngcontent-%COMP%]{background-color:#242424;border-radius:15px}.mat-header-row[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{color:#fff}.mat-header-row[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]     .mat-sort-header-arrow{color:#fff}  .mat-checkbox-checked.mat-accent .mat-checkbox-background,   .mat-checkbox-checked.mat-accent .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#f4b027}  .mat-checkbox.mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#f4b027!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#f4b027}  .mat-checkbox-inner-container{height:25px!important;width:25px!important;border-radius:3px;background:white}  .mat-cell{cursor:pointer}.active[_ngcontent-%COMP%]{color:#31b965}.waiting[_ngcontent-%COMP%]{color:#f4b027}.not_active[_ngcontent-%COMP%]{color:#db1c1c}"]}),n})();var _t=i(1299),ft=i(8268),T=i(7994),C=i(9224);function gt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"mat-card",10),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().loadComponet(s.name)}),t.TgZ(1,"mat-card-subtitle"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-actions",11)(4,"button",12),t._uU(5),t.qZA()()()}if(2&n){const e=a.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(3),t.hij(" ",e.description," ")}}function ht(n,a){}const xt=[{path:"",component:ut},{path:"create",component:b},{path:"edit/:id",component:b},{path:"view/:id",component:(()=>{class n{constructor(e,o,c){this.activeRoute=e,this.clientService=o,this.scroller=c}ngOnInit(){this.getIdFromUrl()}scroll(e){this.scroller.scrollToAnchor(e)}getIdFromUrl(){this.id=this.activeRoute.snapshot.paramMap.get("id"),this.id&&(this.getDetails(),this.getTolalSummaries(),this.componentId="user",this.loadComponet())}getDetails(){this.clientService.get(this.id).subscribe(e=>{this.name=e.name,this.address=e.address})}getTolalSummaries(){this.clientService.getTotal(this.id).subscribe(e=>{this.prepareInfo(e)})}prepareInfo(e){this.info=[{name:"User",description:`${e.totalClientUsers} users`,scroll:"users"},{name:"Project",description:`${e.totalProjects} projects`,scroll:"projects"}]}loadComponet(e){if(this.componentId!==(null==e?void 0:e.toLowerCase()))switch(this.dynamicChild.clear(),e){case"User":this.componentId="user",this.loadClientUserComponent();break;case"Project":this.componentId="project",this.loadProjectComponent();break;default:this.loadClientUserComponent()}}loadClientUserComponent(){const e=this.dynamicChild.createComponent(_t.u);e.instance.id=this.id,e.instance.routerName="client-user",e.instance.apiToGetListById="GetListByClient"}loadProjectComponent(){const e=this.dynamicChild.createComponent(ft.N);e.instance.id=this.id,e.instance.routerName="project",e.instance.apiToGetListById="GetListByClient"}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.gz),t.Y36(g.y),t.Y36(r.EM))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-view"]],viewQuery:function(e,o){if(1&e&&t.Gf(T.$,7,t.s_b),2&e){let c;t.iGM(c=t.CRH())&&(o.dynamicChild=c.first)}},decls:12,vars:4,consts:[["fxLayout","column","fxLayoutAlign","start",1,"wrap"],[1,"header"],["fxLayout","column",1,"content"],[1,"title"],["fxLayout","row"],["fxFlex","60%"],["fxLayout","row wrap",1,"warp-card"],["class","card","fxFlex.sm","34%","fxFlex.xs","80%","fxLayout","column","fxLayoutAlign","space-between start",3,"click",4,"ngFor","ngForOf"],[3,"id"],["appLoader",""],["fxFlex.sm","34%","fxFlex.xs","80%","fxLayout","column","fxLayoutAlign","space-between start",1,"card",3,"click"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-button","",1,"disabled-btn"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4)(6,"span",5),t._uU(7),t.qZA()()()(),t.TgZ(8,"div",6),t.YNc(9,gt,6,2,"mat-card",7),t.qZA(),t.TgZ(10,"div",8),t.YNc(11,ht,0,0,"ng-template",9),t.qZA()()),2&e&&(t.xp6(4),t.Oqu(o.name||"Client Name"),t.xp6(3),t.hij(" ",o.address||"address"," "),t.xp6(2),t.Q6J("ngForOf",o.info),t.xp6(1),t.Q6J("id",o.componentId))},directives:[p.xw,p.Wh,p.yH,r.sg,C.a8,C.$j,C.hq,h.lW,T.$],styles:[".wrap[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{background-color:#d6d6d6;margin-bottom:10px}.wrap[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:90%;margin:auto;padding-block:2rem;padding-inline:1rem}.wrap[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}.wrap[_ngcontent-%COMP%]   .warp-card[_ngcontent-%COMP%]{justify-content:center}.wrap[_ngcontent-%COMP%]   .warp-card[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{min-width:200px;border-radius:10px;background-color:#d6d6d6;color:#242424;margin:5px;width:max-content;padding:20px 10px;cursor:pointer}.wrap[_ngcontent-%COMP%]   .warp-card[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]{display:flex}.wrap[_ngcontent-%COMP%]   .warp-card[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]   .disabled-btn[_ngcontent-%COMP%]{cursor:text}.wrap[_ngcontent-%COMP%]   .warp-card[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]   .continue[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px}"]}),n})()}];let Ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(xt)],d.Bz]}),n})();var bt=i(6213);let vt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,Ct,bt.m]]}),n})()},7994:(M,f,i)=>{i.d(f,{$:()=>d});var r=i(5e3);let d=(()=>{class l{constructor(t){this.viewContainerRef=t}ngOnInit(){}}return l.\u0275fac=function(t){return new(t||l)(r.Y36(r.s_b))},l.\u0275dir=r.lG2({type:l,selectors:[["","appLoader",""]]}),l})()}}]);