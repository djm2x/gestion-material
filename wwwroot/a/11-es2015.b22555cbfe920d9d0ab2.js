(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{jcIZ:function(t,e,i){"use strict";i.r(e),i.d(e,"CategorieModule",(function(){return _}));var c=i("ofXK"),n=i("tyNb"),o=i("mrSG"),a=i("fXoL"),s=i("VRyK"),r=i("3Pt+"),l=i("0IaG"),b=i("V2kc"),d=i("7q3A"),u=i("/t3+"),h=i("f0Cb"),m=i("kmnG"),p=i("qFsG"),f=i("bTqV");let g=(()=>{class t{constructor(t,e,i,c){this.dialogRef=t,this.data=e,this.fb=i,this.uow=c,this.subs=[],this.title="",this.folderToSaveInServer="categories"}ngOnInit(){this.o=this.data.model,this.title=this.data.title,this.createForm(),setTimeout(()=>{},100)}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.categories.post(t).subscribe(e=>{this.dialogRef.close(t)}):this.uow.categories.put(t.id,t).subscribe(e=>{this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[r.q.required]],nom:[this.o.nom,[r.q.required]],description:[this.o.description,[r.q.required]]})}resetForm(){this.o=new b.b,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(l.g),a.Pb(l.a),a.Pb(r.c),a.Pb(d.a))},t.\u0275cmp=a.Jb({type:t,selectors:[["app-update"]],decls:22,vars:3,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["appearance","fill",1,"col-md-12"],["matInput","","rows","6","formControlName","description","required",""],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(a.Vb(0,"div",0),a.Vb(1,"h1",1),a.Vb(2,"mat-toolbar",2),a.Vb(3,"span"),a.Cc(4),a.Ub(),a.Ub(),a.Qb(5,"mat-divider"),a.Ub(),a.Vb(6,"div",3),a.Vb(7,"mat-dialog-content"),a.Vb(8,"form",4),a.Vb(9,"mat-form-field",5),a.Vb(10,"mat-label"),a.Cc(11,"nom"),a.Ub(),a.Qb(12,"input",6),a.Ub(),a.Vb(13,"mat-form-field",7),a.Vb(14,"mat-label"),a.Cc(15,"description"),a.Ub(),a.Qb(16,"textarea",8),a.Ub(),a.Ub(),a.Ub(),a.Vb(17,"mat-dialog-actions",9),a.Vb(18,"button",10),a.dc("click",(function(){return e.onNoClick()})),a.Cc(19,"Annuler"),a.Ub(),a.Vb(20,"button",11),a.dc("click",(function(){return e.onOkClick(e.myForm.value)})),a.Cc(21,"Enregistre"),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&t&&(a.Cb(4),a.Dc(e.title),a.Cb(4),a.nc("formGroup",e.myForm),a.Cb(12),a.nc("disabled",e.myForm.invalid))},directives:[l.h,u.a,h.a,l.e,r.r,r.m,r.g,m.c,m.f,p.b,r.b,r.l,r.f,r.p,l.c,f.a],styles:[""]}),t})();var C=i("M9IT"),V=i("Dh3D"),U=i("JX91"),w=i("qQ+2"),k=i("hUFt"),v=i("bwXy"),x=i("NFeN"),S=i("7EHt"),y=i("+0xr"),L=i("Xa2L"),D=i("bSwM");function R(t,e){1&t&&a.Qb(0,"mat-spinner")}function I(t,e){if(1&t&&(a.Vb(0,"div",27),a.Bc(1,R,1,0,"mat-spinner",28),a.Ub()),2&t){const t=a.hc();a.Cb(1),a.nc("ngIf",t.isLoadingResults)}}function O(t,e){if(1&t){const t=a.Wb();a.Vb(0,"th",29),a.Vb(1,"mat-checkbox",30),a.dc("change",(function(e){a.uc(t);const i=a.hc();return e?i.masterToggle():null})),a.Ub(),a.Ub()}if(2&t){const t=a.hc();a.Cb(1),a.nc("checked",0!==t.selectedList.length&&t.isAllSelected())("indeterminate",0!==t.selectedList.length&&!t.isAllSelected())}}function P(t,e){if(1&t){const t=a.Wb();a.Vb(0,"td",31),a.Vb(1,"mat-checkbox",32),a.dc("click",(function(e){return a.uc(t),e.stopPropagation()}))("change",(function(i){a.uc(t);const c=e.$implicit,n=a.hc();return i?n.check(c):null})),a.Ub(),a.Ub()}if(2&t){const t=e.$implicit,i=a.hc();a.Cb(1),a.nc("checked",i.isSelected(t))}}function F(t,e){1&t&&(a.Vb(0,"th",33),a.Cc(1,"Nom"),a.Ub())}function Q(t,e){if(1&t&&(a.Vb(0,"td",31),a.Cc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Dc(t.nom)}}function q(t,e){if(1&t){const t=a.Wb();a.Vb(0,"th",29),a.Vb(1,"button",34),a.dc("click",(function(){return a.uc(t),a.hc().deleteList()})),a.Vb(2,"mat-icon"),a.Cc(3,"delete_sweep"),a.Ub(),a.Ub(),a.Ub()}if(2&t){const t=a.hc();a.Cb(1),a.nc("disabled",0===t.selectedList.length)}}function j(t,e){if(1&t){const t=a.Wb();a.Vb(0,"td",31),a.Vb(1,"div",35),a.Vb(2,"button",36),a.dc("click",(function(){a.uc(t);const i=e.$implicit;return a.hc().edit(i)})),a.Vb(3,"mat-icon"),a.Cc(4,"create"),a.Ub(),a.Ub(),a.Vb(5,"button",37),a.dc("click",(function(){a.uc(t);const i=e.$implicit;return a.hc().delete(i.id)})),a.Vb(6,"mat-icon"),a.Cc(7,"delete_sweep"),a.Ub(),a.Ub(),a.Ub(),a.Ub()}}function B(t,e){1&t&&a.Qb(0,"tr",38)}function A(t,e){1&t&&a.Qb(0,"tr",39)}const T=function(){return[10,25,50,100,250]},z=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,c,n){this.uow=t,this.dialog=e,this.excel=i,this.mydialog=c,this.url=n,this.update=new a.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["select","nom","option"],this.panelOpenState=!1,this.nom=new r.d("")}ngOnInit(){const t=Object(s.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(U.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"asc",""===this.nom.value?"*":this.nom.value)});this.subs.push(t)}reset(){this.nom.setValue(""),this.update.next(!0)}generateExcel(){this.excel.json_to_sheet(this.dataSource)}search(){this.update.next(!0)}getPage(t,e,i,c,n){const o=this.uow.categories.getAll(t,e,i,c,n).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(o)}openDialog(t,e){return this.dialog.open(g,{width:"750px",disableClose:!0,data:{model:t,title:e}}).afterClosed()}add(){this.openDialog(new b.b,"Ajouter categorie").subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier categorie").subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(o.a)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("categorie").toPromise())){const e=this.uow.categories.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}}))}displayImage(t){return t?t&&t.startsWith("http")?t:`${this.url}/categories/${t.replace(";","")}`:"assets/404.jpg"}imgError(t){t.src="assets/404.jpg"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(o.a)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("Categorie").toPromise())){const t=this.uow.categories.deleteRange(this.selectedList.map(t=>t.id)).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}}))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(d.a),a.Pb(l.b),a.Pb(w.a),a.Pb(k.a),a.Pb("BASE_URL"))},t.\u0275cmp=a.Jb({type:t,selectors:[["app-categorie"]],viewQuery:function(t,e){var i;1&t&&(a.zc(C.a,!0),a.zc(V.a,!0)),2&t&&(a.rc(i=a.ec())&&(e.paginator=i.first),a.rc(i=a.ec())&&(e.sort=i.first))},decls:54,vars:8,consts:[["title","Categories"],[1,"d-flex","flex-row-reverse","mt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-3"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell",""],[3,"checked","indeterminate","change"],["mat-cell",""],[3,"checked","click","change"],["mat-header-cell","","mat-sort-header",""],["mat-icon-button","","color","warn",3,"disabled","click"],[1,"button-row"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(a.Qb(0,"app-title",0),a.Vb(1,"div",1),a.Vb(2,"button",2),a.dc("click",(function(){return e.add()})),a.Vb(3,"mat-icon"),a.Cc(4,"add"),a.Ub(),a.Cc(5," Categorie "),a.Ub(),a.Cc(6," \xa0 "),a.Vb(7,"button",3),a.dc("click",(function(){return e.generateExcel()})),a.Vb(8,"mat-icon"),a.Cc(9,"cloud_download"),a.Ub(),a.Cc(10," Excel "),a.Ub(),a.Ub(),a.Vb(11,"mat-accordion"),a.Vb(12,"mat-expansion-panel",4),a.dc("opened",(function(){return e.panelOpenState=!0}))("closed",(function(){return e.panelOpenState=!1})),a.Vb(13,"mat-expansion-panel-header"),a.Vb(14,"mat-panel-title",5),a.Vb(15,"mat-icon"),a.Cc(16,"search"),a.Ub(),a.Vb(17,"p",6),a.Cc(18,"Recherche"),a.Ub(),a.Ub(),a.Qb(19,"mat-panel-description"),a.Ub(),a.Qb(20,"mat-divider"),a.Vb(21,"div",7),a.Vb(22,"mat-form-field",8),a.Vb(23,"mat-label"),a.Cc(24,"nom"),a.Ub(),a.Qb(25,"input",9),a.Ub(),a.Ub(),a.Vb(26,"div",10),a.Vb(27,"button",11),a.dc("click",(function(){return e.reset()})),a.Vb(28,"mat-icon"),a.Cc(29,"refresh"),a.Ub(),a.Cc(30," R\xe9initialiser "),a.Ub(),a.Cc(31," \xa0\xa0 "),a.Vb(32,"button",2),a.dc("click",(function(){return e.search()})),a.Vb(33,"mat-icon"),a.Cc(34,"search"),a.Ub(),a.Cc(35," Rechercher "),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(36,"div",12),a.Bc(37,I,2,1,"div",13),a.Vb(38,"div",14),a.Vb(39,"table",15,16),a.Tb(41,17),a.Bc(42,O,2,2,"th",18),a.Bc(43,P,2,1,"td",19),a.Sb(),a.Tb(44,20),a.Bc(45,F,2,0,"th",21),a.Bc(46,Q,2,1,"td",19),a.Sb(),a.Tb(47,22),a.Bc(48,q,4,1,"th",18),a.Bc(49,j,8,0,"td",19),a.Sb(),a.Bc(50,B,1,0,"tr",23),a.Bc(51,A,1,0,"tr",24),a.Ub(),a.Ub(),a.Qb(52,"mat-paginator",25,26),a.Ub()),2&t&&(a.Cb(25),a.nc("formControl",e.nom),a.Cb(12),a.nc("ngIf",e.isLoadingResults),a.Cb(2),a.nc("dataSource",e.dataSource),a.Cb(11),a.nc("matHeaderRowDef",e.displayedColumns),a.Cb(1),a.nc("matRowDefColumns",e.displayedColumns),a.Cb(1),a.nc("length",e.resultsLength)("pageSizeOptions",a.oc(7,T)))},directives:[v.a,f.a,x.a,S.a,S.c,S.e,S.f,S.d,h.a,m.c,m.f,p.b,r.b,r.p,r.l,r.e,c.l,y.j,V.a,y.c,y.e,y.b,y.g,y.i,C.a,L.b,y.d,D.a,y.a,V.b,y.f,y.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()}];let E=(()=>{class t{}return t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({factory:function(e){return new(e||t)},imports:[[n.g.forChild(z)],n.g]}),t})();var N=i("tk/3"),M=i("2thQ"),G=i("lOAm"),$=i("Fr4G");let _=(()=>{class t{}return t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({factory:function(e){return new(e||t)},imports:[[c.c,E,N.c,M.a,r.h,r.o,G.a,$.a]]}),t})()}}]);