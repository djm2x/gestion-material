(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"ns/K":function(t,e,i){"use strict";i.r(e),i.d(e,"ConstucteurModule",(function(){return _}));var c=i("ofXK"),n=i("tyNb"),s=i("mrSG"),o=i("fXoL"),a=i("VRyK"),r=i("3Pt+"),l=i("0IaG"),b=i("V2kc"),d=i("7q3A"),u=i("/t3+"),h=i("f0Cb"),m=i("kmnG"),p=i("qFsG"),f=i("bTqV");let g=(()=>{class t{constructor(t,e,i,c){this.dialogRef=t,this.data=e,this.fb=i,this.uow=c,this.subs=[],this.title="",this.folderToSaveInServer="constucteurs"}ngOnInit(){this.o=this.data.model,this.title=this.data.title,this.createForm(),setTimeout(()=>{},100)}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.constucteurs.post(t).subscribe(e=>{this.dialogRef.close(t)}):this.uow.constucteurs.put(t.id,t).subscribe(e=>{this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[r.q.required]],nom:[this.o.nom,[r.q.required]],description:[this.o.description,[r.q.required]]})}resetForm(){this.o=new b.d,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(l.g),o.Pb(l.a),o.Pb(r.c),o.Pb(d.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-update"]],decls:22,vars:3,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["appearance","fill",1,"col-md-12"],["matInput","","rows","6","formControlName","description","required",""],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Vb(1,"h1",1),o.Vb(2,"mat-toolbar",2),o.Vb(3,"span"),o.Cc(4),o.Ub(),o.Ub(),o.Qb(5,"mat-divider"),o.Ub(),o.Vb(6,"div",3),o.Vb(7,"mat-dialog-content"),o.Vb(8,"form",4),o.Vb(9,"mat-form-field",5),o.Vb(10,"mat-label"),o.Cc(11,"nom"),o.Ub(),o.Qb(12,"input",6),o.Ub(),o.Vb(13,"mat-form-field",7),o.Vb(14,"mat-label"),o.Cc(15,"description"),o.Ub(),o.Qb(16,"textarea",8),o.Ub(),o.Ub(),o.Ub(),o.Vb(17,"mat-dialog-actions",9),o.Vb(18,"button",10),o.dc("click",(function(){return e.onNoClick()})),o.Cc(19,"Annuler"),o.Ub(),o.Vb(20,"button",11),o.dc("click",(function(){return e.onOkClick(e.myForm.value)})),o.Cc(21,"Enregistre"),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&t&&(o.Cb(4),o.Dc(e.title),o.Cb(4),o.nc("formGroup",e.myForm),o.Cb(12),o.nc("disabled",e.myForm.invalid))},directives:[l.h,u.a,h.a,l.e,r.r,r.m,r.g,m.c,m.f,p.b,r.b,r.l,r.f,r.p,l.c,f.a],styles:[""]}),t})();var C=i("M9IT"),V=i("Dh3D"),U=i("JX91"),w=i("qQ+2"),k=i("hUFt"),v=i("bwXy"),x=i("NFeN"),S=i("7EHt"),y=i("+0xr"),L=i("Xa2L"),D=i("bSwM");function R(t,e){1&t&&o.Qb(0,"mat-spinner")}function I(t,e){if(1&t&&(o.Vb(0,"div",27),o.Bc(1,R,1,0,"mat-spinner",28),o.Ub()),2&t){const t=o.hc();o.Cb(1),o.nc("ngIf",t.isLoadingResults)}}function O(t,e){if(1&t){const t=o.Wb();o.Vb(0,"th",29),o.Vb(1,"mat-checkbox",30),o.dc("change",(function(e){o.uc(t);const i=o.hc();return e?i.masterToggle():null})),o.Ub(),o.Ub()}if(2&t){const t=o.hc();o.Cb(1),o.nc("checked",0!==t.selectedList.length&&t.isAllSelected())("indeterminate",0!==t.selectedList.length&&!t.isAllSelected())}}function P(t,e){if(1&t){const t=o.Wb();o.Vb(0,"td",31),o.Vb(1,"mat-checkbox",32),o.dc("click",(function(e){return o.uc(t),e.stopPropagation()}))("change",(function(i){o.uc(t);const c=e.$implicit,n=o.hc();return i?n.check(c):null})),o.Ub(),o.Ub()}if(2&t){const t=e.$implicit,i=o.hc();o.Cb(1),o.nc("checked",i.isSelected(t))}}function F(t,e){1&t&&(o.Vb(0,"th",33),o.Cc(1,"Nom"),o.Ub())}function Q(t,e){if(1&t&&(o.Vb(0,"td",31),o.Cc(1),o.Ub()),2&t){const t=e.$implicit;o.Cb(1),o.Dc(t.nom)}}function q(t,e){if(1&t){const t=o.Wb();o.Vb(0,"th",29),o.Vb(1,"button",34),o.dc("click",(function(){return o.uc(t),o.hc().deleteList()})),o.Vb(2,"mat-icon"),o.Cc(3,"delete_sweep"),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=o.hc();o.Cb(1),o.nc("disabled",0===t.selectedList.length)}}function B(t,e){if(1&t){const t=o.Wb();o.Vb(0,"td",31),o.Vb(1,"div",35),o.Vb(2,"button",36),o.dc("click",(function(){o.uc(t);const i=e.$implicit;return o.hc().edit(i)})),o.Vb(3,"mat-icon"),o.Cc(4,"create"),o.Ub(),o.Ub(),o.Vb(5,"button",37),o.dc("click",(function(){o.uc(t);const i=e.$implicit;return o.hc().delete(i.id)})),o.Vb(6,"mat-icon"),o.Cc(7,"delete_sweep"),o.Ub(),o.Ub(),o.Ub(),o.Ub()}}function j(t,e){1&t&&o.Qb(0,"tr",38)}function A(t,e){1&t&&o.Qb(0,"tr",39)}const T=function(){return[10,25,50,100,250]},z=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,c,n){this.uow=t,this.dialog=e,this.excel=i,this.mydialog=c,this.url=n,this.update=new o.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["select","nom","option"],this.panelOpenState=!1,this.nom=new r.d("")}ngOnInit(){const t=Object(a.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(U.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.nom.value?"*":this.nom.value)});this.subs.push(t)}reset(){this.nom.setValue(""),this.update.next(!0)}generateExcel(){this.excel.json_to_sheet(this.dataSource)}search(){this.update.next(!0)}getPage(t,e,i,c,n){const s=this.uow.constucteurs.getAll(t,e,i,c,n).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(s)}openDialog(t,e){return this.dialog.open(g,{width:"750px",disableClose:!0,data:{model:t,title:e}}).afterClosed()}add(){this.openDialog(new b.d,"Ajouter constucteur").subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier constucteur").subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(s.a)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("constucteur").toPromise())){const e=this.uow.constucteurs.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}}))}displayImage(t){return t?t&&t.startsWith("http")?t:`${this.url}/constucteurs/${t.replace(";","")}`:"assets/404.jpg"}imgError(t){t.src="assets/404.jpg"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(s.a)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.constucteurs.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}}))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(d.a),o.Pb(l.b),o.Pb(w.a),o.Pb(k.a),o.Pb("BASE_URL"))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-constucteur"]],viewQuery:function(t,e){var i;1&t&&(o.zc(C.a,!0),o.zc(V.a,!0)),2&t&&(o.rc(i=o.ec())&&(e.paginator=i.first),o.rc(i=o.ec())&&(e.sort=i.first))},decls:54,vars:8,consts:[["title","Constucteurs"],[1,"d-flex","flex-row-reverse","mt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-3"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell",""],[3,"checked","indeterminate","change"],["mat-cell",""],[3,"checked","click","change"],["mat-header-cell","","mat-sort-header",""],["mat-icon-button","","color","warn",3,"disabled","click"],[1,"button-row"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(o.Qb(0,"app-title",0),o.Vb(1,"div",1),o.Vb(2,"button",2),o.dc("click",(function(){return e.add()})),o.Vb(3,"mat-icon"),o.Cc(4,"add"),o.Ub(),o.Cc(5," Constucteur "),o.Ub(),o.Cc(6," \xa0 "),o.Vb(7,"button",3),o.dc("click",(function(){return e.generateExcel()})),o.Vb(8,"mat-icon"),o.Cc(9,"cloud_download"),o.Ub(),o.Cc(10," Excel "),o.Ub(),o.Ub(),o.Vb(11,"mat-accordion"),o.Vb(12,"mat-expansion-panel",4),o.dc("opened",(function(){return e.panelOpenState=!0}))("closed",(function(){return e.panelOpenState=!1})),o.Vb(13,"mat-expansion-panel-header"),o.Vb(14,"mat-panel-title",5),o.Vb(15,"mat-icon"),o.Cc(16,"search"),o.Ub(),o.Vb(17,"p",6),o.Cc(18,"Recherche"),o.Ub(),o.Ub(),o.Qb(19,"mat-panel-description"),o.Ub(),o.Qb(20,"mat-divider"),o.Vb(21,"div",7),o.Vb(22,"mat-form-field",8),o.Vb(23,"mat-label"),o.Cc(24,"nom"),o.Ub(),o.Qb(25,"input",9),o.Ub(),o.Ub(),o.Vb(26,"div",10),o.Vb(27,"button",11),o.dc("click",(function(){return e.reset()})),o.Vb(28,"mat-icon"),o.Cc(29,"refresh"),o.Ub(),o.Cc(30," R\xe9initialiser "),o.Ub(),o.Cc(31," \xa0\xa0 "),o.Vb(32,"button",2),o.dc("click",(function(){return e.search()})),o.Vb(33,"mat-icon"),o.Cc(34,"search"),o.Ub(),o.Cc(35," Rechercher "),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(36,"div",12),o.Bc(37,I,2,1,"div",13),o.Vb(38,"div",14),o.Vb(39,"table",15,16),o.Tb(41,17),o.Bc(42,O,2,2,"th",18),o.Bc(43,P,2,1,"td",19),o.Sb(),o.Tb(44,20),o.Bc(45,F,2,0,"th",21),o.Bc(46,Q,2,1,"td",19),o.Sb(),o.Tb(47,22),o.Bc(48,q,4,1,"th",18),o.Bc(49,B,8,0,"td",19),o.Sb(),o.Bc(50,j,1,0,"tr",23),o.Bc(51,A,1,0,"tr",24),o.Ub(),o.Ub(),o.Qb(52,"mat-paginator",25,26),o.Ub()),2&t&&(o.Cb(25),o.nc("formControl",e.nom),o.Cb(12),o.nc("ngIf",e.isLoadingResults),o.Cb(2),o.nc("dataSource",e.dataSource),o.Cb(11),o.nc("matHeaderRowDef",e.displayedColumns),o.Cb(1),o.nc("matRowDefColumns",e.displayedColumns),o.Cb(1),o.nc("length",e.resultsLength)("pageSizeOptions",o.oc(7,T)))},directives:[v.a,f.a,x.a,S.a,S.c,S.e,S.f,S.d,h.a,m.c,m.f,p.b,r.b,r.p,r.l,r.e,c.l,y.j,V.a,y.c,y.e,y.b,y.g,y.i,C.a,L.b,y.d,D.a,y.a,V.b,y.f,y.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()}];let E=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[n.g.forChild(z)],n.g]}),t})();var N=i("tk/3"),M=i("2thQ"),G=i("lOAm"),$=i("Fr4G");let _=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[c.c,E,N.c,M.a,r.h,r.o,G.a,$.a]]}),t})()}}]);