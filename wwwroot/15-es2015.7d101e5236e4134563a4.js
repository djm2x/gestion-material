(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"o+ew":function(t,e,i){"use strict";i.r(e),i.d(e,"EquipementInfoModule",(function(){return K}));var n=i("ofXK"),c=i("tyNb"),s=i("mrSG"),o=i("fXoL"),a=i("VRyK"),r=i("3Pt+"),l=i("0IaG"),b=i("V2kc"),d=i("7q3A"),u=i("/t3+"),h=i("f0Cb"),m=i("kmnG"),p=i("qFsG"),f=i("iadO"),g=i("bTqV");let C=(()=>{class t{constructor(t,e,i,n){this.dialogRef=t,this.data=e,this.fb=i,this.uow=n,this.subs=[],this.title="",this.folderToSaveInServer="equipementInfos"}ngOnInit(){this.o=this.data.model,this.title=this.data.title,this.createForm(),setTimeout(()=>{},100)}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.equipementInfos.post(t).subscribe(e=>{this.dialogRef.close(t)}):this.uow.equipementInfos.put(t.id,t).subscribe(e=>{this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[r.q.required]],nSerie:[this.o.nSerie,[r.q.required]],date:[this.o.date,[r.q.required]],stringInfo:[this.o.stringInfo,[r.q.required]]})}resetForm(){this.o=new b.h,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(l.g),o.Pb(l.a),o.Pb(r.c),o.Pb(d.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-update"]],decls:29,vars:5,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nSerie","required",""],["matInput","","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker2",""],["matInput","","formControlName","stringInfo","required",""],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){if(1&t&&(o.Vb(0,"div",0),o.Vb(1,"h1",1),o.Vb(2,"mat-toolbar",2),o.Vb(3,"span"),o.Cc(4),o.Ub(),o.Ub(),o.Qb(5,"mat-divider"),o.Ub(),o.Vb(6,"div",3),o.Vb(7,"mat-dialog-content"),o.Vb(8,"form",4),o.Vb(9,"mat-form-field",5),o.Vb(10,"mat-label"),o.Cc(11,"nSerie"),o.Ub(),o.Qb(12,"input",6),o.Ub(),o.Vb(13,"mat-form-field",5),o.Vb(14,"mat-label"),o.Cc(15,"date"),o.Ub(),o.Qb(16,"input",7),o.Qb(17,"mat-datepicker-toggle",8),o.Qb(18,"mat-datepicker",null,9),o.Ub(),o.Vb(20,"mat-form-field",5),o.Vb(21,"mat-label"),o.Cc(22,"stringInfo"),o.Ub(),o.Qb(23,"input",10),o.Ub(),o.Ub(),o.Ub(),o.Vb(24,"mat-dialog-actions",11),o.Vb(25,"button",12),o.dc("click",(function(){return e.onNoClick()})),o.Cc(26,"Annuler"),o.Ub(),o.Vb(27,"button",13),o.dc("click",(function(){return e.onOkClick(e.myForm.value)})),o.Cc(28,"Enregistre"),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&t){const t=o.sc(19);o.Cb(4),o.Dc(e.title),o.Cb(4),o.nc("formGroup",e.myForm),o.Cb(8),o.nc("matDatepicker",t),o.Cb(1),o.nc("for",t),o.Cb(10),o.nc("disabled",e.myForm.invalid)}},directives:[l.h,u.a,h.a,l.e,r.r,r.m,r.g,m.c,m.f,p.b,r.b,r.l,r.f,r.p,f.b,f.d,m.g,f.a,l.c,g.a],styles:[""]}),t})();var V=i("M9IT"),U=i("Dh3D"),S=i("JX91"),k=i("qQ+2"),w=i("hUFt"),I=i("bwXy"),v=i("NFeN"),x=i("7EHt"),y=i("+0xr"),D=i("Xa2L"),q=i("bSwM");function L(t,e){1&t&&o.Qb(0,"mat-spinner")}function R(t,e){if(1&t&&(o.Vb(0,"div",29),o.Bc(1,L,1,0,"mat-spinner",30),o.Ub()),2&t){const t=o.hc();o.Cb(1),o.nc("ngIf",t.isLoadingResults)}}function O(t,e){if(1&t){const t=o.Wb();o.Vb(0,"th",31),o.Vb(1,"mat-checkbox",32),o.dc("change",(function(e){o.uc(t);const i=o.hc();return e?i.masterToggle():null})),o.Ub(),o.Ub()}if(2&t){const t=o.hc();o.Cb(1),o.nc("checked",0!==t.selectedList.length&&t.isAllSelected())("indeterminate",0!==t.selectedList.length&&!t.isAllSelected())}}function Q(t,e){if(1&t){const t=o.Wb();o.Vb(0,"td",33),o.Vb(1,"mat-checkbox",34),o.dc("click",(function(e){return o.uc(t),e.stopPropagation()}))("change",(function(i){o.uc(t);const n=e.$implicit,c=o.hc();return i?c.check(n):null})),o.Ub(),o.Ub()}if(2&t){const t=e.$implicit,i=o.hc();o.Cb(1),o.nc("checked",i.isSelected(t))}}function B(t,e){1&t&&(o.Vb(0,"th",35),o.Cc(1,"N Serie"),o.Ub())}function P(t,e){if(1&t&&(o.Vb(0,"td",33),o.Cc(1),o.Ub()),2&t){const t=e.$implicit;o.Cb(1),o.Dc(t.nSerie)}}function F(t,e){1&t&&(o.Vb(0,"th",35),o.Cc(1,"Date"),o.Ub())}function E(t,e){if(1&t&&(o.Vb(0,"td",33),o.Cc(1),o.ic(2,"date"),o.Ub()),2&t){const t=e.$implicit;o.Cb(1),o.Dc(o.kc(2,1,t.date,"dd/MM/yyyy"))}}function T(t,e){1&t&&(o.Vb(0,"th",35),o.Cc(1,"String Info"),o.Ub())}function j(t,e){if(1&t&&(o.Vb(0,"td",33),o.Cc(1),o.Ub()),2&t){const t=e.$implicit;o.Cb(1),o.Dc(t.stringInfo)}}function A(t,e){if(1&t){const t=o.Wb();o.Vb(0,"th",31),o.Vb(1,"button",36),o.dc("click",(function(){return o.uc(t),o.hc().deleteList()})),o.Vb(2,"mat-icon"),o.Cc(3,"delete_sweep"),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=o.hc();o.Cb(1),o.nc("disabled",0===t.selectedList.length)}}function N(t,e){if(1&t){const t=o.Wb();o.Vb(0,"td",33),o.Vb(1,"div",37),o.Vb(2,"button",38),o.dc("click",(function(){o.uc(t);const i=e.$implicit;return o.hc().edit(i)})),o.Vb(3,"mat-icon"),o.Cc(4,"create"),o.Ub(),o.Ub(),o.Vb(5,"button",39),o.dc("click",(function(){o.uc(t);const i=e.$implicit;return o.hc().delete(i.id)})),o.Vb(6,"mat-icon"),o.Cc(7,"delete_sweep"),o.Ub(),o.Ub(),o.Ub(),o.Ub()}}function z(t,e){1&t&&o.Qb(0,"tr",40)}function M(t,e){1&t&&o.Qb(0,"tr",41)}const $=function(){return[10,25,50,100,250]},G=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,n,c){this.uow=t,this.dialog=e,this.excel=i,this.mydialog=n,this.url=c,this.update=new o.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["select","nSerie","date","stringInfo","option"],this.panelOpenState=!1,this.nSerie=new r.d(""),this.stringInfo=new r.d("")}ngOnInit(){const t=Object(a.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(S.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.nSerie.value?"*":this.nSerie.value,""===this.stringInfo.value?"*":this.stringInfo.value)});this.subs.push(t)}reset(){this.nSerie.setValue(""),this.stringInfo.setValue(""),this.update.next(!0)}generateExcel(){this.excel.json_to_sheet(this.dataSource)}search(){this.update.next(!0)}getPage(t,e,i,n,c,s){const o=this.uow.equipementInfos.getAll(t,e,i,n,c,s).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(o)}openDialog(t,e){return this.dialog.open(C,{width:"750px",disableClose:!0,data:{model:t,title:e}}).afterClosed()}add(){this.openDialog(new b.h,"Ajouter equipementInfo").subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier equipementInfo").subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(s.a)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("equipementInfo").toPromise())){const e=this.uow.equipementInfos.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}}))}displayImage(t){return t?t&&t.startsWith("http")?t:`${this.url}/equipementInfos/${t.replace(";","")}`:"assets/404.jpg"}imgError(t){t.src="assets/404.jpg"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(s.a)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.equipementInfos.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}}))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(d.a),o.Pb(l.b),o.Pb(k.a),o.Pb(w.a),o.Pb("BASE_URL"))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-equipementInfo"]],viewQuery:function(t,e){var i;1&t&&(o.zc(V.a,!0),o.zc(U.a,!0)),2&t&&(o.rc(i=o.ec())&&(e.paginator=i.first),o.rc(i=o.ec())&&(e.sort=i.first))},decls:64,vars:9,consts:[["title","EquipementInfos"],[1,"d-flex","flex-row-reverse","mt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-3"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nSerie"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","date"],["matColumnDef","stringInfo"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell",""],[3,"checked","indeterminate","change"],["mat-cell",""],[3,"checked","click","change"],["mat-header-cell","","mat-sort-header",""],["mat-icon-button","","color","warn",3,"disabled","click"],[1,"button-row"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(o.Qb(0,"app-title",0),o.Vb(1,"div",1),o.Vb(2,"button",2),o.dc("click",(function(){return e.add()})),o.Vb(3,"mat-icon"),o.Cc(4,"add"),o.Ub(),o.Cc(5," EquipementInfo "),o.Ub(),o.Cc(6," \xa0 "),o.Vb(7,"button",3),o.dc("click",(function(){return e.generateExcel()})),o.Vb(8,"mat-icon"),o.Cc(9,"cloud_download"),o.Ub(),o.Cc(10," Excel "),o.Ub(),o.Ub(),o.Vb(11,"mat-accordion"),o.Vb(12,"mat-expansion-panel",4),o.dc("opened",(function(){return e.panelOpenState=!0}))("closed",(function(){return e.panelOpenState=!1})),o.Vb(13,"mat-expansion-panel-header"),o.Vb(14,"mat-panel-title",5),o.Vb(15,"mat-icon"),o.Cc(16,"search"),o.Ub(),o.Vb(17,"p",6),o.Cc(18,"Recherche"),o.Ub(),o.Ub(),o.Qb(19,"mat-panel-description"),o.Ub(),o.Qb(20,"mat-divider"),o.Vb(21,"div",7),o.Vb(22,"mat-form-field",8),o.Vb(23,"mat-label"),o.Cc(24,"nSerie"),o.Ub(),o.Qb(25,"input",9),o.Ub(),o.Vb(26,"mat-form-field",8),o.Vb(27,"mat-label"),o.Cc(28,"stringInfo"),o.Ub(),o.Qb(29,"input",9),o.Ub(),o.Ub(),o.Vb(30,"div",10),o.Vb(31,"button",11),o.dc("click",(function(){return e.reset()})),o.Vb(32,"mat-icon"),o.Cc(33,"refresh"),o.Ub(),o.Cc(34," R\xe9initialiser "),o.Ub(),o.Cc(35," \xa0\xa0 "),o.Vb(36,"button",2),o.dc("click",(function(){return e.search()})),o.Vb(37,"mat-icon"),o.Cc(38,"search"),o.Ub(),o.Cc(39," Rechercher "),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(40,"div",12),o.Bc(41,R,2,1,"div",13),o.Vb(42,"div",14),o.Vb(43,"table",15,16),o.Tb(45,17),o.Bc(46,O,2,2,"th",18),o.Bc(47,Q,2,1,"td",19),o.Sb(),o.Tb(48,20),o.Bc(49,B,2,0,"th",21),o.Bc(50,P,2,1,"td",19),o.Sb(),o.Tb(51,22),o.Bc(52,F,2,0,"th",21),o.Bc(53,E,3,4,"td",19),o.Sb(),o.Tb(54,23),o.Bc(55,T,2,0,"th",21),o.Bc(56,j,2,1,"td",19),o.Sb(),o.Tb(57,24),o.Bc(58,A,4,1,"th",18),o.Bc(59,N,8,0,"td",19),o.Sb(),o.Bc(60,z,1,0,"tr",25),o.Bc(61,M,1,0,"tr",26),o.Ub(),o.Ub(),o.Qb(62,"mat-paginator",27,28),o.Ub()),2&t&&(o.Cb(25),o.nc("formControl",e.nSerie),o.Cb(4),o.nc("formControl",e.stringInfo),o.Cb(12),o.nc("ngIf",e.isLoadingResults),o.Cb(2),o.nc("dataSource",e.dataSource),o.Cb(17),o.nc("matHeaderRowDef",e.displayedColumns),o.Cb(1),o.nc("matRowDefColumns",e.displayedColumns),o.Cb(1),o.nc("length",e.resultsLength)("pageSizeOptions",o.oc(8,$)))},directives:[I.a,g.a,v.a,x.a,x.c,x.e,x.f,x.d,h.a,m.c,m.f,p.b,r.b,r.p,r.l,r.e,n.l,y.j,U.a,y.c,y.e,y.b,y.g,y.i,V.a,D.b,y.d,q.a,y.a,U.b,y.f,y.h],pipes:[n.e],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()}];let _=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[c.g.forChild(G)],c.g]}),t})();var H=i("tk/3"),J=i("2thQ"),W=i("lOAm"),X=i("Fr4G");let K=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[n.c,_,H.c,J.a,r.h,r.o,W.a,X.a]]}),t})()}}]);