(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Cm04:function(t,e,i){"use strict";i.r(e),i.d(e,"RoleModule",(function(){return _}));var s=i("ofXK"),n=i("tyNb"),a=i("mrSG"),c=i("fXoL"),o=i("VRyK"),r=i("3Pt+"),l=i("0IaG"),b=i("V2kc"),d=i("7q3A"),u=i("/t3+"),h=i("f0Cb"),m=i("kmnG"),p=i("qFsG"),f=i("bTqV");let g=(()=>{class t{constructor(t,e,i,s){this.dialogRef=t,this.data=e,this.fb=i,this.uow=s,this.subs=[],this.title="",this.folderToSaveInServer="roles"}ngOnInit(){this.o=this.data.model,this.title=this.data.title,this.createForm(),setTimeout(()=>{},100)}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.roles.post(t).subscribe(e=>{this.dialogRef.close(t)}):this.uow.roles.put(t.id,t).subscribe(e=>{this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[r.q.required]],name:[this.o.name,[r.q.required]]})}resetForm(){this.o=new b.k,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(l.g),c.Pb(l.a),c.Pb(r.c),c.Pb(d.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-update"]],decls:18,vars:3,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","name","required",""],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.Vb(1,"h1",1),c.Vb(2,"mat-toolbar",2),c.Vb(3,"span"),c.Cc(4),c.Ub(),c.Ub(),c.Qb(5,"mat-divider"),c.Ub(),c.Vb(6,"div",3),c.Vb(7,"mat-dialog-content"),c.Vb(8,"form",4),c.Vb(9,"mat-form-field",5),c.Vb(10,"mat-label"),c.Cc(11,"name"),c.Ub(),c.Qb(12,"input",6),c.Ub(),c.Ub(),c.Ub(),c.Vb(13,"mat-dialog-actions",7),c.Vb(14,"button",8),c.dc("click",(function(){return e.onNoClick()})),c.Cc(15,"Annuler"),c.Ub(),c.Vb(16,"button",9),c.dc("click",(function(){return e.onOkClick(e.myForm.value)})),c.Cc(17,"Enregistre"),c.Ub(),c.Ub(),c.Ub(),c.Ub()),2&t&&(c.Cb(4),c.Dc(e.title),c.Cb(4),c.nc("formGroup",e.myForm),c.Cb(8),c.nc("disabled",e.myForm.invalid))},directives:[l.h,u.a,h.a,l.e,r.r,r.m,r.g,m.c,m.f,p.b,r.b,r.l,r.f,r.p,l.c,f.a],styles:[""]}),t})();var C=i("M9IT"),V=i("Dh3D"),U=i("JX91"),w=i("qQ+2"),k=i("hUFt"),v=i("bwXy"),x=i("NFeN"),S=i("7EHt"),y=i("+0xr"),L=i("Xa2L"),R=i("bSwM");function D(t,e){1&t&&c.Qb(0,"mat-spinner")}function I(t,e){if(1&t&&(c.Vb(0,"div",26),c.Bc(1,D,1,0,"mat-spinner",27),c.Ub()),2&t){const t=c.hc();c.Cb(1),c.nc("ngIf",t.isLoadingResults)}}function O(t,e){if(1&t){const t=c.Wb();c.Vb(0,"th",28),c.Vb(1,"mat-checkbox",29),c.dc("change",(function(e){c.uc(t);const i=c.hc();return e?i.masterToggle():null})),c.Ub(),c.Ub()}if(2&t){const t=c.hc();c.Cb(1),c.nc("checked",0!==t.selectedList.length&&t.isAllSelected())("indeterminate",0!==t.selectedList.length&&!t.isAllSelected())}}function P(t,e){if(1&t){const t=c.Wb();c.Vb(0,"td",30),c.Vb(1,"mat-checkbox",31),c.dc("click",(function(e){return c.uc(t),e.stopPropagation()}))("change",(function(i){c.uc(t);const s=e.$implicit,n=c.hc();return i?n.check(s):null})),c.Ub(),c.Ub()}if(2&t){const t=e.$implicit,i=c.hc();c.Cb(1),c.nc("checked",i.isSelected(t))}}function F(t,e){1&t&&(c.Vb(0,"th",32),c.Cc(1,"Name"),c.Ub())}function Q(t,e){if(1&t&&(c.Vb(0,"td",30),c.Cc(1),c.Ub()),2&t){const t=e.$implicit;c.Cb(1),c.Dc(t.name)}}function B(t,e){if(1&t){const t=c.Wb();c.Vb(0,"th",28),c.Vb(1,"button",33),c.dc("click",(function(){return c.uc(t),c.hc().deleteList()})),c.Vb(2,"mat-icon"),c.Cc(3,"delete_sweep"),c.Ub(),c.Ub(),c.Ub()}if(2&t){const t=c.hc();c.Cb(1),c.nc("disabled",0===t.selectedList.length)}}function j(t,e){if(1&t){const t=c.Wb();c.Vb(0,"td",30),c.Vb(1,"div",34),c.Vb(2,"button",35),c.dc("click",(function(){c.uc(t);const i=e.$implicit;return c.hc().edit(i)})),c.Vb(3,"mat-icon"),c.Cc(4,"create"),c.Ub(),c.Ub(),c.Vb(5,"button",36),c.dc("click",(function(){c.uc(t);const i=e.$implicit;return c.hc().delete(i.id)})),c.Vb(6,"mat-icon"),c.Cc(7,"delete_sweep"),c.Ub(),c.Ub(),c.Ub(),c.Ub()}}function A(t,e){1&t&&c.Qb(0,"tr",37)}function T(t,e){1&t&&c.Qb(0,"tr",38)}const q=function(){return[10,25,50,100,250]},z=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,s,n){this.uow=t,this.dialog=e,this.excel=i,this.mydialog=s,this.url=n,this.update=new c.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["select","name","option"],this.panelOpenState=!1,this.name=new r.d("")}ngOnInit(){const t=Object(o.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(U.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.name.value?"*":this.name.value)});this.subs.push(t)}reset(){this.name.setValue(""),this.update.next(!0)}generateExcel(){this.excel.json_to_sheet(this.dataSource)}search(){this.update.next(!0)}getPage(t,e,i,s,n){const a=this.uow.roles.getAll(t,e,i,s,n).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(a)}openDialog(t,e){return this.dialog.open(g,{width:"750px",disableClose:!0,data:{model:t,title:e}}).afterClosed()}add(){this.openDialog(new b.k,"Ajouter role").subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier role").subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(a.a)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const e=this.uow.roles.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}}))}displayImage(t){return t?t&&t.startsWith("http")?t:`${this.url}/roles/${t.replace(";","")}`:"assets/404.jpg"}imgError(t){t.src="assets/404.jpg"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(a.a)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.roles.deleteRange(this.selectedList.map(t=>t.id)).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}}))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(d.a),c.Pb(l.b),c.Pb(w.a),c.Pb(k.a),c.Pb("BASE_URL"))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-role"]],viewQuery:function(t,e){var i;1&t&&(c.zc(C.a,!0),c.zc(V.a,!0)),2&t&&(c.rc(i=c.ec())&&(e.paginator=i.first),c.rc(i=c.ec())&&(e.sort=i.first))},decls:49,vars:8,consts:[["title","Roles"],[1,"d-flex","flex-row-reverse","mt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-3"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell",""],[3,"checked","indeterminate","change"],["mat-cell",""],[3,"checked","click","change"],["mat-header-cell","","mat-sort-header",""],["mat-icon-button","","color","warn",3,"disabled","click"],[1,"button-row"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Qb(0,"app-title",0),c.Vb(1,"div",1),c.Vb(2,"button",2),c.dc("click",(function(){return e.add()})),c.Vb(3,"mat-icon"),c.Cc(4,"add"),c.Ub(),c.Cc(5," Role "),c.Ub(),c.Ub(),c.Vb(6,"mat-accordion"),c.Vb(7,"mat-expansion-panel",3),c.dc("opened",(function(){return e.panelOpenState=!0}))("closed",(function(){return e.panelOpenState=!1})),c.Vb(8,"mat-expansion-panel-header"),c.Vb(9,"mat-panel-title",4),c.Vb(10,"mat-icon"),c.Cc(11,"search"),c.Ub(),c.Vb(12,"p",5),c.Cc(13,"Recherche"),c.Ub(),c.Ub(),c.Qb(14,"mat-panel-description"),c.Ub(),c.Qb(15,"mat-divider"),c.Vb(16,"div",6),c.Vb(17,"mat-form-field",7),c.Vb(18,"mat-label"),c.Cc(19,"name"),c.Ub(),c.Qb(20,"input",8),c.Ub(),c.Ub(),c.Vb(21,"div",9),c.Vb(22,"button",10),c.dc("click",(function(){return e.reset()})),c.Vb(23,"mat-icon"),c.Cc(24,"refresh"),c.Ub(),c.Cc(25," R\xe9initialiser "),c.Ub(),c.Cc(26," \xa0\xa0 "),c.Vb(27,"button",2),c.dc("click",(function(){return e.search()})),c.Vb(28,"mat-icon"),c.Cc(29,"search"),c.Ub(),c.Cc(30," Rechercher "),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Vb(31,"div",11),c.Bc(32,I,2,1,"div",12),c.Vb(33,"div",13),c.Vb(34,"table",14,15),c.Tb(36,16),c.Bc(37,O,2,2,"th",17),c.Bc(38,P,2,1,"td",18),c.Sb(),c.Tb(39,19),c.Bc(40,F,2,0,"th",20),c.Bc(41,Q,2,1,"td",18),c.Sb(),c.Tb(42,21),c.Bc(43,B,4,1,"th",17),c.Bc(44,j,8,0,"td",18),c.Sb(),c.Bc(45,A,1,0,"tr",22),c.Bc(46,T,1,0,"tr",23),c.Ub(),c.Ub(),c.Qb(47,"mat-paginator",24,25),c.Ub()),2&t&&(c.Cb(20),c.nc("formControl",e.name),c.Cb(12),c.nc("ngIf",e.isLoadingResults),c.Cb(2),c.nc("dataSource",e.dataSource),c.Cb(11),c.nc("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.nc("matRowDefColumns",e.displayedColumns),c.Cb(1),c.nc("length",e.resultsLength)("pageSizeOptions",c.oc(7,q)))},directives:[v.a,f.a,x.a,S.a,S.c,S.e,S.f,S.d,h.a,m.c,m.f,p.b,r.b,r.p,r.l,r.e,s.l,y.j,V.a,y.c,y.e,y.b,y.g,y.i,C.a,L.b,y.d,R.a,y.a,V.b,y.f,y.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()}];let N=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[n.g.forChild(z)],n.g]}),t})();var E=i("tk/3"),M=i("2thQ"),G=i("lOAm"),$=i("Fr4G");let _=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[s.c,N,E.c,M.a,r.h,r.o,G.a,$.a]]}),t})()}}]);