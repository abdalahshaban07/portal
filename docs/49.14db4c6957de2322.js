"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[49],{6049:(x,f,s)=>{s.r(f),s.d(f,{ProjectModule:()=>V});var p=s(9808),l=s(1083),r=s(3075),c=s(9525),e=s(5e3),g=s(7230),C=s(7990),b=s(2290),h=s(7093),y=s(6928),F=s(7423);function j(o,i){if(1&o&&(e.ynx(0),e._UZ(1,"app-dynamic-form-field",5),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("formItem",t)}}let v=(()=>{class o{constructor(t,a,u,d,n,m){this.fb=t,this.projectService=a,this.listOfValuesService=u,this.activeRoute=d,this.toastr=n,this.router=m}ngOnInit(){this.getIdFromUrl(),this.createForm()}createDynamicFormFields(){this.dynamicFormFields=[{id:"clientId",label:"Company",type:"select",selectMenuOptions:this.Clients,defaultValue:{value:"",disabled:!1},validators:[r.kI.required]},{id:"certificateId",label:"Certificate",type:"select",selectMenuOptions:this.Certifcates,defaultValue:{value:"",disabled:!1},validators:[r.kI.required]},{id:"projectConsultans",label:"Consultants",type:"select",selectMenuOptions:this.Consultants,defaultValue:{value:"",disabled:!1},validators:[r.kI.required],multiple:!0},{id:"description",label:"Description",type:"text",defaultValue:{value:"",disabled:!1},validators:[r.kI.required]},{id:"projectCode",label:"Project Code",type:"text",defaultValue:{value:"",disabled:!1},validators:[r.kI.required]},{id:"startDate",label:"Start Date",type:"date",defaultValue:{value:"",disabled:!1},validators:[r.kI.required]},{id:"endDate",label:"End Date",type:"date",defaultValue:{value:"",disabled:!1},validators:[r.kI.required]}]}getIdFromUrl(){this.id=this.activeRoute.snapshot.paramMap.get("id"),this.id?(this.formMode=c.h.Edit,this.getItemById(this.id)):this.formMode=c.h.Add}get Clients(){let t=[];return this.listOfValuesService.getClients().subscribe(a=>{t.push(...a)}),t}get Certifcates(){let t=[];return this.listOfValuesService.getCertifcates().subscribe(a=>{t.push(...a)}),t}get Consultants(){let t=[];return this.listOfValuesService.getConsultants().subscribe(a=>{t.push(...a)}),t}createForm(){this.createDynamicFormFields(),this.myForm=this.fb.group({}),this.dynamicFormFields.forEach(t=>{const a=this.fb.control(Object.assign({},t.defaultValue),t.validators);this.myForm.addControl(t.id,a)})}getItemById(t){this.projectService.get(t).subscribe(a=>{this.myForm.patchValue(a)})}saveData(){var t,a;if(this.myForm.invalid)return;let d=(null===(t=this.myForm.get("projectConsultans"))||void 0===t?void 0:t.value).map(m=>({id:m,name:""}));console.log(d,""),null===(a=this.myForm.get("projectConsultans"))||void 0===a||a.setValue(d);let n=this.myForm.value;this.formMode===c.h.Add?this.addCertificate(n):(n=Object.assign(Object.assign({},n),{id:this.id}),this.updateCertificate(n))}addCertificate(t){this.projectService.add(t).subscribe(()=>{this.actionAfterAddOrUpdate("added")})}updateCertificate(t){this.projectService.update(t).subscribe(()=>{this.actionAfterAddOrUpdate("updated")})}actionAfterAddOrUpdate(t){this.myForm.reset(),this.toastr.success(`Project ${t} successfully`),this.router.navigate(["/project"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(g.Y),e.Y36(C.j),e.Y36(l.gz),e.Y36(b._W),e.Y36(l.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-control"]],decls:6,vars:4,consts:[[1,"wrap-form"],["fxLayout","column","fxLayoutGap","0px",1,"form",3,"formGroup"],[4,"ngFor","ngForOf"],[1,"form-buttons"],["mat-button","","type","button",3,"disabled","click"],[3,"formItem"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.YNc(2,j,2,1,"ng-container",2),e.TgZ(3,"div",3)(4,"button",4),e.NdJ("click",function(){return a.saveData()}),e._uU(5),e.qZA()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",a.myForm),e.xp6(1),e.Q6J("ngForOf",a.dynamicFormFields),e.xp6(2),e.Q6J("disabled",a.myForm.invalid),e.xp6(1),e.hij(" ",a.formMode," "))},directives:[r._Y,r.JL,h.xw,h.SQ,r.sg,p.sg,y.q,F.lW],styles:[".wrap-form[_ngcontent-%COMP%]{margin-block:3rem}.wrap-form[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:80%;margin:0 auto}.wrap-form[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{padding:5px;border-radius:10px;background-color:#454545;color:#ffe5e5}.wrap-form[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%]   .mat-button[disabled][_ngcontent-%COMP%]{background-color:#707070}"]}),o})();const O=[{path:"",component:s(8268).N,data:{breadcrumb:{label:"Projects"}}},{path:"create",component:v,data:{breadcrumb:{alias:"@Create"}}},{path:"edit/:id",component:v,data:{breadcrumb:{alias:"@Edit"}}},{path:"view/:id",loadChildren:()=>Promise.all([s.e(198),s.e(745)]).then(s.bind(s,5745)).then(o=>o.ViewModule),data:{breadcrumb:{alias:"View"}}}];let P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.Bz.forChild(O)],l.Bz]}),o})();var I=s(6213);let V=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.ez,P,I.m]]}),o})()}}]);