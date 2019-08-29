(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rpweb_articles_rpweb_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rpweb-articles/rpweb-articles.component */ "./src/app/rpweb-articles/rpweb-articles.component.ts");
/* harmony import */ var _rpforum_posts_rpforum_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rpforum-posts/rpforum-posts.component */ "./src/app/rpforum-posts/rpforum-posts.component.ts");
/* harmony import */ var _rpvideos_rpvideos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rpvideos/rpvideos.component */ "./src/app/rpvideos/rpvideos.component.ts");
/* harmony import */ var _web_info_div_web_info_div_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-info-div/web-info-div.component */ "./src/app/web-info-div/web-info-div.component.ts");
/* harmony import */ var _vid_info_div_vid_info_div_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vid-info-div/vid-info-div.component */ "./src/app/vid-info-div/vid-info-div.component.ts");
/* harmony import */ var _reddit_info_div_reddit_info_div_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reddit-info-div/reddit-info-div.component */ "./src/app/reddit-info-div/reddit-info-div.component.ts");
/* harmony import */ var _resourcelist_resourcelist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resourcelist/resourcelist.component */ "./src/app/resourcelist/resourcelist.component.ts");
/* harmony import */ var _resourcepage_resourcepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resourcepage/resourcepage.component */ "./src/app/resourcepage/resourcepage.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");












var routes = [
    {
        path: 'resource', component: _resourcepage_resourcepage_component__WEBPACK_IMPORTED_MODULE_10__["ResourcepageComponent"],
        children: [
            { path: 'webInfo',
                children: [
                    { path: 'resource', redirectTo: '/resource' },
                    { path: '', component: _web_info_div_web_info_div_component__WEBPACK_IMPORTED_MODULE_6__["WebInfoDivComponent"] }
                ] },
            { path: '', component: _rpweb_articles_rpweb_articles_component__WEBPACK_IMPORTED_MODULE_3__["RPWebArticlesComponent"] }
        ]
    },
    {
        path: 'videoresource', component: _resourcepage_resourcepage_component__WEBPACK_IMPORTED_MODULE_10__["ResourcepageComponent"],
        children: [
            { path: 'vidInfo',
                children: [
                    { path: 'videoresource', redirectTo: '/videoresource' },
                    { path: '', component: _vid_info_div_vid_info_div_component__WEBPACK_IMPORTED_MODULE_7__["VidInfoDivComponent"] }
                ] },
            { path: '', component: _rpvideos_rpvideos_component__WEBPACK_IMPORTED_MODULE_5__["RPVideosComponent"] }
        ]
    },
    {
        path: 'redditresource', component: _resourcepage_resourcepage_component__WEBPACK_IMPORTED_MODULE_10__["ResourcepageComponent"],
        children: [
            { path: 'redditInfo',
                children: [
                    { path: 'redditresource', redirectTo: '/redditresource' },
                    { path: '', component: _reddit_info_div_reddit_info_div_component__WEBPACK_IMPORTED_MODULE_8__["RedditInfoDivComponent"] }
                ] },
            { path: '', component: _rpforum_posts_rpforum_posts_component__WEBPACK_IMPORTED_MODULE_4__["RPForumPostsComponent"] }
        ]
    },
    {
        //path: 'resourceList', component: ResourcelistComponent
        path: 'resourceList', component: _resourcepage_resourcepage_component__WEBPACK_IMPORTED_MODULE_10__["ResourcepageComponent"],
        children: [
            { path: '', component: _resourcelist_resourcelist_component__WEBPACK_IMPORTED_MODULE_9__["ResourcelistComponent"] }
        ]
    },
    {
        path: 'resourcePage', component: _resourcepage_resourcepage_component__WEBPACK_IMPORTED_MODULE_10__["ResourcepageComponent"]
    },
    {
        path: 'goalHome', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"]
    },
    {
        path: 'homePage', redirectTo: '/'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n body{\r\n  background-color:  #ffff96;\r\n  width:100%;\r\n\r\n\r\n}\r\n\r\n#Person {\r\n    text-align: center;\r\n    color: blue;\r\n    width: 100%;\r\n}\r\n\r\n#DivHead {\r\n     align: center;\r\n     top: 0;\r\n     width: 100%;\r\n     text-align: center;\r\n     background-color: gray;\r\n\r\n}\r\n\r\n#sidebarcontainer{\r\n  width: 100%;\r\n  align: center;\r\n}\r\n\r\n#Choice{\r\n  position: relative;\r\n  align: center;\r\n  width: 100%;\r\n  margin-top: 80px;\r\n  margin-left: -130px;\r\n  align: center;\r\n  width: 100%;\r\n}\r\n\r\n#content {\r\n  margin-top: 150px;\r\n  text-align: center;\r\n  word-wrap: break-word;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  z-index: 6;\r\n\r\n\r\n}\r\n\r\n#inplace{\r\n  position: relative;\r\n  align: center;\r\n  width: 100%;\r\n  z-index: 5;\r\n  bottom: 0px;\r\n\r\n\r\n}\r\n\r\n#GoalHead{\r\n  background-color: yellow;\r\n  padding-left: 20px;\r\n  align: center;\r\n  border-bottom-left-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n}\r\n\r\n#settleDown{\r\n  position: absolute;\r\n  align: center;\r\n  width: 100%;\r\n  z-index: 5;\r\n  margin-left: 0px;\r\n  top: 50px;\r\n\r\n}\r\n\r\n#ResourceHead{\r\n  background-color: gray;\r\n  border-top-right-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n#GI{\r\n  background-color: #3cb371;\r\n  padding-left: 50px;\r\n}\r\n\r\n#PP{\r\n  background-color: #59be86;\r\n}\r\n\r\n#LP{\r\n  background-color: #80cea3;\r\n  padding-right:50px;\r\n}\r\n\r\n#bottomheader{\r\n  text-align: center;\r\n  margin-top: 160px;\r\n  background-color: #3cb371;\r\n}\r\n\r\nheader {\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n\r\n}\r\n\r\nheader div {\r\n  display: inline;\r\n  padding: 10px;\r\n\r\n}\r\n\r\nul{\r\n  list-style-type: none;\r\n}\r\n\r\nul li{\r\n  padding-bottom: 20px;\r\n\r\n}\r\n\r\n#opt1{\r\n  background-color: #ff6600;\r\n  text-align: center;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  margin-right: 30px;\r\n  height: 30px;\r\n}\r\n\r\n#opt2{\r\n  background-color: #ff6600;\r\n  text-align: center;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  margin-right: 30px;\r\n  height: 30px;\r\n\r\n\r\n}\r\n\r\n#opt3{\r\n  background-color:  #ff6600;\r\n  text-align: center;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  margin-right: 30px;\r\n  height: 30px;\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0VBQ0MsMkJBQTJCO0VBQzNCLFdBQVc7OztDQUdaOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0NBQ2Y7O0FBQ0Q7S0FDSyxjQUFjO0tBQ2QsT0FBTztLQUNQLFlBQVk7S0FDWixtQkFBbUI7S0FDbkIsdUJBQXVCOztDQUUzQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixjQUFjO0NBQ2Y7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXOzs7Q0FHWjs7QUFJRDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZOzs7Q0FHYjs7QUFHRDtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyw2QkFBNkI7Q0FDOUI7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7O0NBRVg7O0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGlDQUFpQztDQUNsQzs7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7O0NBRWpCOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7O0NBRWY7O0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBQ0Q7RUFDRSxxQkFBcUI7O0NBRXRCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhOzs7Q0FHZDs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhOzs7Q0FHZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiBib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjZmZmZjk2O1xyXG4gIHdpZHRoOjEwMCU7XHJcblxyXG5cclxufVxyXG5cclxuI1BlcnNvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNEaXZIZWFkIHtcclxuICAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgIHRvcDogMDtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuXHJcbn1cclxuXHJcbiNzaWRlYmFyY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduOiBjZW50ZXI7XHJcbn1cclxuI0Nob2ljZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTMwcHg7XHJcbiAgYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA2O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuI2lucGxhY2V7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogNTtcclxuICBib3R0b206IDBweDtcclxuXHJcblxyXG59XHJcblxyXG5cclxuI0dvYWxIZWFke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuI3NldHRsZURvd257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogNTtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHRvcDogNTBweDtcclxuXHJcbn1cclxuI1Jlc291cmNlSGVhZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbiNHSXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2NiMzcxO1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG4jUFB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5YmU4NjtcclxufVxyXG4jTFB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwY2VhMztcclxuICBwYWRkaW5nLXJpZ2h0OjUwcHg7XHJcbn1cclxuXHJcbiNib3R0b21oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzY2IzNzE7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxufVxyXG5oZWFkZXIgZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxudWx7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbnVsIGxpe1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG5cclxuI29wdDF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNvcHQye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbiNvcHQze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjZmY2NjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<body>\n\n<div class=\"container\">\n<div id=\"Person\">  <i class=\"material-icons\">face</i></div>\n<div id=\"DivHead\">Hello, Jordan</div>\n\n\n<div id=\"content\">\n   <router-outlet></router-outlet>\n</div>\n\n<div id=\"inplace\">\n<header id=\"bottomheader\">  CREATE </header>\n<ul id = \"options\">\n  <li>\n      <a routerLink=\"resourcePage\" [class.activated]=\"currentUrl == '/resourcePage'\">\n          <div id=\"opt1\">To-Do Resource List</div>\n      </a>\n  </li>\n  <li>\n      <a routerLink=\"goalHome\" [class.activated]=\"currentUrl == '/goalHome'\">\n          <div id=\"opt1\">User Goal Home Page</div>\n      </a>\n  </li>\n</ul>\n</div>\n</div>\n\n</body>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GoalForIt';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _rpvideos_rpvideos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rpvideos/rpvideos.component */ "./src/app/rpvideos/rpvideos.component.ts");
/* harmony import */ var _rpweb_articles_rpweb_articles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rpweb-articles/rpweb-articles.component */ "./src/app/rpweb-articles/rpweb-articles.component.ts");
/* harmony import */ var _rpforum_posts_rpforum_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rpforum-posts/rpforum-posts.component */ "./src/app/rpforum-posts/rpforum-posts.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resource.service */ "./src/app/resource.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _web_info_div_web_info_div_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web-info-div/web-info-div.component */ "./src/app/web-info-div/web-info-div.component.ts");
/* harmony import */ var _vid_info_div_vid_info_div_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vid-info-div/vid-info-div.component */ "./src/app/vid-info-div/vid-info-div.component.ts");
/* harmony import */ var _reddit_info_div_reddit_info_div_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reddit-info-div/reddit-info-div.component */ "./src/app/reddit-info-div/reddit-info-div.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _resourcelist_resourcelist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resourcelist/resourcelist.component */ "./src/app/resourcelist/resourcelist.component.ts");
/* harmony import */ var _resourcepage_resourcepage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resourcepage/resourcepage.component */ "./src/app/resourcepage/resourcepage.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _rpvideos_rpvideos_component__WEBPACK_IMPORTED_MODULE_5__["RPVideosComponent"],
                _rpweb_articles_rpweb_articles_component__WEBPACK_IMPORTED_MODULE_6__["RPWebArticlesComponent"],
                _rpforum_posts_rpforum_posts_component__WEBPACK_IMPORTED_MODULE_7__["RPForumPostsComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _web_info_div_web_info_div_component__WEBPACK_IMPORTED_MODULE_13__["WebInfoDivComponent"],
                _vid_info_div_vid_info_div_component__WEBPACK_IMPORTED_MODULE_14__["VidInfoDivComponent"],
                _reddit_info_div_reddit_info_div_component__WEBPACK_IMPORTED_MODULE_15__["RedditInfoDivComponent"],
                _resourcelist_resourcelist_component__WEBPACK_IMPORTED_MODULE_17__["ResourcelistComponent"],
                _resourcepage_resourcepage_component__WEBPACK_IMPORTED_MODULE_18__["ResourcepageComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__["HomepageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"],
            ],
            providers: [_resource_service__WEBPACK_IMPORTED_MODULE_9__["ResourceService"], _data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.resource);
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.passIndex = function (message) {
        if (message >= 0) {
            this.messageSource.next(message);
            console.log("Message Received!");
            console.log(message);
        }
        else {
            console.log("Uh-oh!");
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#left{\r\n\r\n  background-color: purple;\r\n  width: 100vh;\r\n  height: 100vh;\r\n}\r\n#middle{\r\n  background-color: yellow;\r\n  width: 100vh;\r\n  height: 100vh;\r\n}\r\n#right{\r\n  background-color: orange;\r\n  width: 100vh;\r\n  height: 100vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGNBQWM7Q0FDZjtBQUNEO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixjQUFjO0NBQ2Y7QUFDRDtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsZWZ0e1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgd2lkdGg6IDEwMHZoO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuI21pZGRsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgd2lkdGg6IDEwMHZoO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuI3JpZ2h0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICB3aWR0aDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "< div id = \"decision\">\n  <div id = \"left\"> LEFT GOALS </div>\n  <div id = \"middle\"> MIDDLE RESOURCES </div>\n  <div id = \"right\"> RIGHT GOALDISPLAY</div>\n</div>\n\n<button (click)=\"changeScreen('L')\"> See Goals </button>\n<button (click)=\"changeScreen('M')\"> See Resources </button>\n<button (click)=\"changeScreen('R')\"> See Goal Display </button>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.changeScreen = function (letter) {
        if (letter === 'L') {
            this.isLeft = true;
            this.isMiddle = false;
            this.isRight = false;
            this.decision = "isLeft ? 'left' ";
        }
        else if (letter === 'M') {
            this.isLeft = false;
            this.isMiddle = true;
            this.isRight = false;
            this.decision = "isMiddle ? 'middle'";
        }
        else {
            this.isLeft = false;
            this.isMiddle = false;
            this.isRight = true;
            this.decision = "isRight ? 'right'";
        }
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        })
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/reddit-info-div/reddit-info-div.component.css":
/*!***************************************************************!*\
  !*** ./src/app/reddit-info-div/reddit-info-div.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#RedditDetail{\r\n  margin-top: 200px;\r\n  background-color: gray;\r\n  padding-left: 50px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkZGl0LWluZm8tZGl2L3JlZGRpdC1pbmZvLWRpdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVkZGl0LWluZm8tZGl2L3JlZGRpdC1pbmZvLWRpdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1JlZGRpdERldGFpbHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/reddit-info-div/reddit-info-div.component.html":
/*!****************************************************************!*\
  !*** ./src/app/reddit-info-div/reddit-info-div.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"RedditDetail\">\n  <h4> Web Article </h4>\n  <button mat-stroked-button routerLink=\"redditresource\" [class.activated]=\"currentUrl == 'redditInfo/redditresource'\">Back to Reddit Resources</button>\n\n  <p>Title: </p>\n  <div id=\"RedditTitle\">{{oneuser$.RedditTitle}}</div>\n\n  <p>URL: </p>\n  <div id=\"RedditAuthor\">{{oneuser$.RedditAuthor}}</div>\n\n  <p>Snippet: </p>\n  <div id=\"RedditResponse\">{{oneuser$.AuthorResponse}}</div>\n\n  <button id=\"Saver\" (click)=\"sendItBack(oneuser$.RedditTitle,oneuser$.RedditAuthor, oneuser$.AuthorResponse)\"> Save Post </button>\n  </div>\n"

/***/ }),

/***/ "./src/app/reddit-info-div/reddit-info-div.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/reddit-info-div/reddit-info-div.component.ts ***!
  \**************************************************************/
/*! exports provided: RedditInfoDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditInfoDivComponent", function() { return RedditInfoDivComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource.service */ "./src/app/resource.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");





var RedditInfoDivComponent = /** @class */ (function () {
    //var: title
    //  var: author
    //  var: response
    function RedditInfoDivComponent(router, data, resourceservice) {
        var _this = this;
        this.router = router;
        this.data = data;
        this.resourceservice = resourceservice;
        router.events.subscribe(function (_) { return _this.currentUrl = _.url; });
    }
    RedditInfoDivComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (res) {
            console.log("Here is the index");
            console.log(res);
            _this.index = res;
        });
        this.resourceservice
            .getRedditResources()
            .subscribe(function (data) {
            _this.moreusers$ = data;
            console.log('Web Data requested ...');
            console.log(_this.moreusers$);
            console.log(_this.moreusers$[_this.index + 1]);
            console.log("Index");
            console.log(_this.index);
            _this.oneuser$ = _this.moreusers$[_this.index];
            console.log("Check again");
            console.log(_this.oneuser$);
            //     console.log(this.message)
            // console.log(this.users$[0])
        });
        //  getIndex(this.iD){
        //  this.index = this.iD
        //  console.log("Here is the appropriate index")
        //    console.log(this.index)
        //  }
    };
    RedditInfoDivComponent.prototype.sendItBack = function (title, author, response) {
        this.resourceservice
            .insertRedditResource(title, author, response);
    };
    RedditInfoDivComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reddit-info-div',
            template: __webpack_require__(/*! ./reddit-info-div.component.html */ "./src/app/reddit-info-div/reddit-info-div.component.html"),
            styles: [__webpack_require__(/*! ./reddit-info-div.component.css */ "./src/app/reddit-info-div/reddit-info-div.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]])
    ], RedditInfoDivComponent);
    return RedditInfoDivComponent;
}());



/***/ }),

/***/ "./src/app/resource.service.ts":
/*!*************************************!*\
  !*** ./src/app/resource.service.ts ***!
  \*************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ResourceService = /** @class */ (function () {
    function ResourceService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    ResourceService.prototype.getResources = function () {
        return this.http.get(this.uri + "/mydb");
        //  Herewith we’re sending an HTTP GET request to the /issues end point of back-end server. The list of issues is retrieved from the MongoDB database and then returned in JSON format.
    };
    ResourceService.prototype.getVideoResources = function () {
        return this.http.get(this.uri + "/mydb/vidresources");
    };
    ResourceService.prototype.getRedditResources = function () {
        return this.http.get(this.uri + "/mydb/forumresources");
    };
    ResourceService.prototype.getRedditResourceList = function () {
        return this.http.get(this.uri + "/mydb/getRedditPosts");
    };
    ResourceService.prototype.getVideoResourceList = function () {
        return this.http.get(this.uri + "/mydb/getVidResources");
    };
    ResourceService.prototype.getWebResourceList = function () {
        return this.http.get(this.uri + "/mydb/getWebResources");
    };
    ResourceService.prototype.insertRedditResource = function (title, author, response) {
        this.title = title;
        this.author = author;
        this.response = response;
        var obj = {
            RedditTitle: this.title,
            RedditAuthor: this.author,
            AuthorResponse: this.response
        };
        this.http.post(this.uri + "/mydb/saveRedditPosts", obj)
            .subscribe(function (res) { return console.log("Reddit Post saved in Resource List."); });
    };
    ResourceService.prototype.insertResource = function (webtitle, weburl, websummary) {
        this.webtitle = webtitle;
        this.weburl = weburl;
        this.websummary = websummary;
        var obj = {
            title: this.webtitle,
            URL: this.weburl,
            Summary: this.websummary
        };
        this.http.post(this.uri + "/mydb/saveWebResources", obj)
            .subscribe(function (res) { return console.log("Web Resource saved in Resource List"); });
    };
    ResourceService.prototype.insertVidResource = function (vidtitle, vidchanneltitle, vidurl, viddescription) {
        this.vidtitle = vidtitle;
        this.vidchanneltitle = vidchanneltitle;
        this.vidurl = vidurl;
        this.viddescription = viddescription;
        var obj = {
            title: this.vidtitle,
            channelTitle: this.vidchanneltitle,
            URL: this.vidurl,
            description: this.viddescription
        };
        this.http.post(this.uri + "/mydb/saveVidResources", obj)
            .subscribe(function (res) { return console.log("Video Resource saved in Resource List"); });
    };
    // The three methods for saving priority lists can be refactored //
    ResourceService.prototype.insertHighPriority = function (highpriority) {
        this.highpriority = highpriority;
        if (this.highpriority.hasOwnProperty('RedditTitle')) {
            this.altObj = {
                Title: this.highpriority['RedditTitle'],
                AuthorURL: this.highpriority['RedditAuthor'],
                Content: this.highpriority['AuthorResponse'],
            };
        }
        else if (this.highpriority.hasOwnProperty('channelTitle')) {
            this.altObj = {
                Title: this.highpriority['title'],
                AuthorURL: this.highpriority['URL'],
                Content: this.highpriority['description'],
            };
        }
        else if (this.highpriority.hasOwnProperty('Summary')) {
            this.altObj = {
                Title: this.highpriority['title'],
                AuthorURL: this.highpriority['URL'],
                Content: this.highpriority['Summary'],
            };
        }
        else {
            this.altObj = {
                Title: this.highpriority['Title'],
                AuthorURL: this.highpriority['AuthorURL'],
                Content: this.highpriority['Content'],
            };
        }
        console.log("Check High: ");
        console.log(this.altObj);
        this.http.post(this.uri + "/mydb/saveHighPriority", this.altObj)
            .subscribe(function (res) { return console.log("High Priority List saved"); });
    };
    ResourceService.prototype.insertMediumPriority = function (mediumpriority) {
        this.mediumpriority = mediumpriority;
        if (this.mediumpriority.hasOwnProperty('RedditTitle')) {
            this.altObj = {
                Title: this.mediumpriority['RedditTitle'],
                AuthorURL: this.mediumpriority['RedditAuthor'],
                Content: this.mediumpriority['AuthorResponse'],
            };
        }
        else if (this.mediumpriority.hasOwnProperty('channelTitle')) {
            this.altObj = {
                Title: this.mediumpriority['title'],
                AuthorURL: this.mediumpriority['URL'],
                Content: this.mediumpriority['description'],
            };
        }
        else if (this.mediumpriority.hasOwnProperty('Summary')) {
            this.altObj = {
                Title: this.mediumpriority['title'],
                AuthorURL: this.mediumpriority['URL'],
                Content: this.mediumpriority['Summary'],
            };
        }
        else {
            this.altObj = {
                Title: this.mediumpriority['Title'],
                AuthorURL: this.mediumpriority['AuthorURL'],
                Content: this.mediumpriority['Content'],
            };
        }
        console.log("Check Medium: ");
        console.log(this.altObj);
        this.http.post(this.uri + "/mydb/saveMediumPriority", this.altObj)
            .subscribe(function (res) { return console.log("Medium Priority List saved"); });
    };
    ResourceService.prototype.insertLowPriority = function (lowpriority) {
        this.lowpriority = lowpriority;
        if (this.lowpriority.hasOwnProperty('RedditTitle')) {
            this.altObj = {
                Title: this.lowpriority['RedditTitle'],
                AuthorURL: this.lowpriority['RedditAuthor'],
                Content: this.lowpriority['AuthorResponse'],
            };
        }
        else if (this.lowpriority.hasOwnProperty('channelTitle')) {
            this.altObj = {
                Title: this.lowpriority['title'],
                AuthorURL: this.lowpriority['URL'],
                Content: this.lowpriority['description'],
            };
        }
        else if (this.lowpriority.hasOwnProperty('Summary')) {
            this.altObj = {
                Title: this.lowpriority['title'],
                AuthorURL: this.lowpriority['URL'],
                Content: this.lowpriority['Summary'],
            };
        }
        else {
            this.altObj = {
                Title: this.lowpriority['Title'],
                AuthorURL: this.lowpriority['AuthorURL'],
                Content: this.lowpriority['Content'],
            };
        }
        console.log("Check Low: ");
        console.log(this.altObj);
        this.http.post(this.uri + "/mydb/saveLowPriority", this.altObj)
            .subscribe(function (res) { return console.log("Low Priority List saved"); });
    };
    ResourceService.prototype.retrieveHighPriority = function () {
        return this.http.get(this.uri + "/mydb/findHighPriority");
    };
    ResourceService.prototype.retrieveMediumPriority = function () {
        return this.http.get(this.uri + "/mydb/findMediumPriority");
    };
    ResourceService.prototype.retrieveLowPriority = function () {
        return this.http.get(this.uri + "/mydb/findLowPriority");
    };
    ResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ResourceService);
    return ResourceService;
}());



/***/ }),

/***/ "./src/app/resourcelist/resourcelist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/resourcelist/resourcelist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#setter{\r\n  width: 80vh;\r\n  height: 80vh;\r\n  margin-left: 0;\r\n\r\n}\r\n#overseer{\r\n  width: 60vh;\r\n  height: 50vh;\r\n  position: absolute;\r\n}\r\n#saveLists{\r\n  width: 70vh;\r\n  height: 5vh;\r\n  background-color: #3cb371;\r\n\r\n}\r\n#sister{\r\n  background-color: orange;\r\n  position: absolute;\r\n  width: 40vh;\r\n  height: 75vh;\r\n  margin-left: 30vh;\r\n  overflow-y: scroll;\r\n\r\n}\r\n#practice{\r\n  overflow-y: scroll;\r\n  background-color: green;\r\n}\r\n#makes{\r\n  background-color: blue;\r\n  overflow-y: scroll;\r\n\r\n}\r\n#perfect{\r\n  background-color: turquoise;\r\n  overflow-y: scroll;\r\n\r\n}\r\n.counter{\r\n  margin-left: 0;\r\n  background-color: red;\r\n  text-align: center;\r\n}\r\n.shared{\r\n  width: 50%;\r\n  height: 50%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.pop{\r\n    height: 50px;\r\n    margin-left: 0px;\r\n    background-color: #ff751a;\r\n    overflow-x: scroll;\r\n    overflow-y: scroll;\r\n    border: 1px solid saddlebrown;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n.lock{\r\n    height: 40px;\r\n    margin-left: 0px;\r\n    background-color: red;\r\n    overflow-x: scroll;\r\n    overflow-y: scroll;\r\n    border: 1px solid saddlebrown;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n.medium{\r\n    height: 40px;\r\n    margin-left: 0px;\r\n    background-color: orange;\r\n    overflow-x: scroll;\r\n    overflow-y: scroll;\r\n    border: 1px solid saddlebrown;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n.low{\r\n    height: 40px;\r\n    margin-left: 0px;\r\n    background-color: #ffcc80;\r\n    overflow-x: scroll;\r\n    overflow-y: scroll;\r\n    border: 1px solid saddlebrown;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n.cdk-drop-list-dragging .cdk-drag {\r\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n.cdk-drag-animating {\r\n    transition: -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2VsaXN0L3Jlc291cmNlbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTs7Q0FFaEI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQjs7Q0FFM0I7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1COztDQUVwQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtDQUN6QjtBQUdEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7Q0FFcEI7QUFDRDtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7O0NBRXBCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtDQUNUO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG9CQUFvQjs7Q0FFdkI7QUFDRDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9COztDQUV2QjtBQUVEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG9CQUFvQjs7Q0FFdkI7QUFDRDtJQUNJLCtEQUF1RDtJQUF2RCx1REFBdUQ7SUFBdkQsMkdBQXVEO0dBQ3hEO0FBRUQ7SUFDRSwrREFBdUQ7SUFBdkQsdURBQXVEO0lBQXZELDJHQUF1RDtHQUN4RCIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlbGlzdC9yZXNvdXJjZWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jc2V0dGVye1xyXG4gIHdpZHRoOiA4MHZoO1xyXG4gIGhlaWdodDogODB2aDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuXHJcbn1cclxuI292ZXJzZWVye1xyXG4gIHdpZHRoOiA2MHZoO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiNzYXZlTGlzdHN7XHJcbiAgd2lkdGg6IDcwdmg7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjYjM3MTtcclxuXHJcbn1cclxuXHJcbiNzaXN0ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNDB2aDtcclxuICBoZWlnaHQ6IDc1dmg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwdmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxufVxyXG4jcHJhY3RpY2V7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5cclxuI21ha2Vze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxufVxyXG4jcGVyZmVjdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxufVxyXG4uY291bnRlcntcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaGFyZWR7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG4ucG9we1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc1MWE7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzYWRkbGVicm93bjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5sb2Nre1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNhZGRsZWJyb3duO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5tZWRpdW17XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2FkZGxlYnJvd247XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4ubG93e1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjODA7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzYWRkbGVicm93bjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jZGstZHJhZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG5cclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/resourcelist/resourcelist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/resourcelist/resourcelist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"setter\">\n\n<div id=\"overseer\" >\n\n<div id =\"practice\" class='shared'cdkDropList  [cdkDropListData]=\"highpriority\"\n[cdkDropListConnectedTo]= \"[firstList, thirdList, fourthList]\" #secondList= \"cdkDropList\"\n(cdkDropListDropped)= \"drop($event)\">\n<h5>High Priority</h5>\n<div *ngFor= \"let high of highpriority; index as i\" class= \"lock\" cdkDrag>{{high.AuthorURL}}{{high.URL}}{{high.RedditTitle}}</div>\n</div>\n\n<div id =\"makes\" class=\"shared\" cdkDropList  [cdkDropListData]=\"mediumpriority\"\n[cdkDropListConnectedTo]= \"[firstList, secondList, fourthList]\" #thirdList= \"cdkDropList\"\n(cdkDropListDropped)= \"drop($event)\">\n<h5>Medium Priority</h5>\n<div *ngFor= \"let med of mediumpriority; index as i\" class= \"medium\" cdkDrag>{{med.AuthorURL}}{{med.URL}}{{med.RedditTitle}}</div>\n</div>\n\n<div id =\"perfect\" class=\"shared\" cdkDropList  [cdkDropListData]=\"lowpriority\"\n[cdkDropListConnectedTo]= \"[firstList, secondList, thirdList]\" #fourthList= \"cdkDropList\"\n(cdkDropListDropped)= \"drop($event)\">\n<h5>Low Priority</h5>\n<div *ngFor= \"let low of lowpriority; index as i\" class= \"low\" cdkDrag>{{low.AuthorURL}}{{low.URL}}{{low.RedditTitle}}</div>\n</div>\n\n\n<div id= \"sister\" class=\"shared\" cdkDropList  [cdkDropListData]=\"totalpriority\"\n[cdkDropListConnectedTo]= \"[secondList, thirdList, fourthList]\" #firstList= \"cdkDropList\"\n(cdkDropListDropped)= \"drop($event)\">\n<h5 id=\"goalhead\">Goal Resources</h5>\n<div *ngFor= \"let total of totalpriority; index as i\" class= \"pop\" cdkDrag>{{total.URL}}{{total.RedditTitle}}</div>\n</div>\n\n<div>\n<button id=\"saveLists\" (click)=\"sendTheLists()\"> Save Lists </button>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/resourcelist/resourcelist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/resourcelist/resourcelist.component.ts ***!
  \********************************************************/
/*! exports provided: ResourcelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcelistComponent", function() { return ResourcelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource.service */ "./src/app/resource.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");







//import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
var ResourcelistComponent = /** @class */ (function () {
    function ResourcelistComponent(resourceservice, router, data) {
        this.resourceservice = resourceservice;
        this.router = router;
        this.data = data;
        this.obj = {
            Title: 'High Priority',
            AuthorURL: 'High Priority',
            Content: 'High Priority'
        };
        this.medobj = {
            Title: 'Medium Priority',
            AuthorURL: 'Medium Priority',
            Content: 'Medium Priority'
        };
        this.lowobj = {
            Title: 'Low Priority',
            AuthorURL: 'Low Priority',
            Content: 'Low Priority'
        };
        this.highpriority = [this.obj];
        this.mediumpriority = [this.medobj];
        this.lowpriority = [this.lowobj];
    }
    ResourcelistComponent.prototype.ngOnInit = function () {
        this.getItDone();
        this.fetchTheLists();
        //  this.createTotal()
    };
    ResourcelistComponent.prototype.getItDone = function () {
        var _this = this;
        this.resourceservice
            .getRedditResourceList()
            .subscribe(function (data) {
            console.log('Here is the proof');
            console.log(data);
            _this.redditResource = data;
            console.log('Data requested Reddit...');
            console.log(_this.redditResource);
            console.log('This is the first concat');
            _this.totalpriority = _this.redditResource;
            console.log(_this.totalpriority);
            //     console.log(this.message)
            // console.log(this.users$[0])
        });
        this.resourceservice
            .getVideoResourceList()
            .subscribe(function (data) {
            console.log('Here is the proof');
            console.log(data);
            _this.videoResource = data;
            console.log('Data requested Videos...');
            console.log(_this.videoResource);
            console.log('This is the second concat');
            _this.totalpriority = _this.totalpriority.concat(_this.videoResource);
            console.log(_this.totalpriority);
            //     console.log(this.message)
            // console.log(this.users$[0])
        });
        this.resourceservice
            .getWebResourceList()
            .subscribe(function (data) {
            console.log('Here is the proof');
            console.log(data);
            _this.webResource = data;
            console.log('Data requested Web...');
            console.log(_this.webResource);
            console.log('This is the third concat');
            _this.totalpriority = _this.totalpriority.concat(_this.webResource);
            console.log(_this.totalpriority);
            //     console.log(this.message)
            // console.log(this.users$[0])
        });
    };
    ResourcelistComponent.prototype.createTotal = function () {
        console.log("check total priority");
        this.totalpriority = this.webResource;
        console.log(this.totalpriority);
    };
    ResourcelistComponent.prototype.drop = function (event) {
        if (event.previousContainer !== event.container) {
            console.log(event.previousContainer.data);
            console.log(event.container.data);
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(this.webResource, event.previousIndex, event.currentIndex);
        }
    };
    ResourcelistComponent.prototype.sendTheLists = function () {
        for (var i = 0; i < this.highpriority.length; i++) {
            this.resourceservice
                .insertHighPriority(this.highpriority[i]);
            console.log("Objects High: ");
            console.log(this.highpriority[i]);
        }
        for (var j = 0; j < this.mediumpriority.length; j++) {
            this.resourceservice
                .insertMediumPriority(this.mediumpriority[j]);
            console.log("Objects Med: ");
            console.log(this.mediumpriority[j]);
        }
        for (var k = 0; k < this.lowpriority.length; k++) {
            this.resourceservice
                .insertLowPriority(this.lowpriority[k]);
            console.log("Objects Low: ");
            console.log(this.lowpriority[k]);
        }
    };
    ResourcelistComponent.prototype.fetchTheLists = function () {
        var _this = this;
        this.resourceservice
            .retrieveHighPriority()
            .subscribe(function (data) {
            console.log('Here is the proof');
            console.log(data);
            _this.highPriResource = data;
            console.log('Data requested High Pri...');
            console.log(_this.highPriResource);
            _this.highpriority = _this.highPriResource; //this.highpriority.concat(this.highPriResource)
            console.log('Data requested High Priority...');
            console.log(_this.highpriority);
        });
        this.resourceservice
            .retrieveMediumPriority()
            .subscribe(function (data) {
            console.log('Here is the proof');
            console.log(data);
            _this.mediumPriResource = data;
            console.log('Data requested Medium Pri...');
            console.log(_this.mediumPriResource);
            _this.mediumpriority = _this.mediumPriResource; //this.mediumpriority.concat(this.mediumPriResource)
            console.log('Data requested Medium Priority...');
            console.log(_this.mediumpriority);
        });
        this.resourceservice
            .retrieveLowPriority()
            .subscribe(function (data) {
            console.log('Here is the proof');
            console.log(data);
            _this.lowPriResource = data;
            console.log('Data requested Low Pri...');
            console.log(_this.lowPriResource);
            _this.lowpriority = _this.lowPriResource; //this.lowpriority.concat(this.lowPriResource)
            console.log('Data requested Low Priority...');
            console.log(_this.lowpriority);
        });
        //   this.resourceservice
        //   .retrieveMediumPriority()
        //     .subscribe((data : any[])=>{
        //      console.log('Here is the proof')
        //      console.log(data)
        //      this.mediumpriority = data
        //      console.log('Data requested Medium Priority...')
        //      console.log(this.mediumpriority)
        //    })
        //    this.resourceservice
        //      .retrieveLowPriority()
        //      .subscribe((data : any[])=>{
        //         console.log('Here is the proof')
        //         console.log(data)
        //         this.lowpriority = data
        //         console.log('Data requested Low Priority...')
        //         console.log(this.lowpriority)
        //       })
    };
    ResourcelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resourcelist',
            template: __webpack_require__(/*! ./resourcelist.component.html */ "./src/app/resourcelist/resourcelist.component.html"),
            styles: [__webpack_require__(/*! ./resourcelist.component.css */ "./src/app/resourcelist/resourcelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ResourcelistComponent);
    return ResourcelistComponent;
}());



/***/ }),

/***/ "./src/app/resourcepage/resourcepage.component.css":
/*!*********************************************************!*\
  !*** ./src/app/resourcepage/resourcepage.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n#Person {\r\n    text-align: center;\r\n    color: blue;\r\n    width: 100%;\r\n}\r\n#DivHead {\r\n     align: center;\r\n     position: absolute;\r\n     width: 100%;\r\n     text-align: center;\r\n     background-color: gray;\r\n\r\n}\r\n#sidebarcontainer{\r\n  margin-top: -13vh;\r\n  width: 100%;\r\n  align: center;\r\n}\r\n#Choice{\r\n  position: relative;\r\n  align: center;\r\n  width: 100%;\r\n  margin-top: 80px;\r\n  margin-left: -130px;\r\n  align: center;\r\n  width: 100%;\r\n}\r\n#content {\r\n  margin-top: 150px;\r\n  margin-bottom: 150px;\r\n  text-align: center;\r\n  word-wrap: break-word;\r\n  width: 100%;\r\n  position: relative;\r\n  z-index: 6;\r\n\r\n\r\n}\r\n#inplace{\r\n  position: relative;\r\n  align: center;\r\n  width: 100%;\r\n  z-index: 5;\r\n  bottom: 0px;\r\n\r\n\r\n}\r\n#GoalHead{\r\n  background-color: yellow;\r\n  padding-left: 20px;\r\n  align: center;\r\n  border-bottom-left-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n}\r\n#settleDown{\r\n  position: absolute;\r\n  align: center;\r\n  width: 100%;\r\n  z-index: 5;\r\n  margin-left: 0px;\r\n  top: 50px;\r\n\r\n}\r\n#firstdiv{\r\n  top: -20vh;\r\n  position: relative;\r\n}\r\n#seconddiv{\r\n  top: -25vh;\r\n  position: relative;\r\n  align: center;\r\n}\r\n#ResourceHead{\r\n  background-color: gray;\r\n  border-top-right-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n#GI{\r\n  background-color: #3cb371;\r\n  padding-left: 50px;\r\n}\r\n#PP{\r\n  background-color: #59be86;\r\n}\r\n#LP{\r\n  background-color: #80cea3;\r\n  padding-right:50px;\r\n}\r\n#bottomheader{\r\n  text-align: center;\r\n  margin-top: 160px;\r\n  background-color: #3cb371;\r\n}\r\nheader {\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n\r\n}\r\nheader div {\r\n  display: inline;\r\n  padding: 10px;\r\n\r\n}\r\nul{\r\n  list-style-type: none;\r\n}\r\nul li{\r\n  padding-bottom: 20px;\r\n\r\n}\r\n#opt1{\r\n  background-color: #ff6600;\r\n  text-align: center;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  margin-right: 30px;\r\n  height: 30px;\r\n}\r\n#opt2{\r\n  background-color: #ff6600;\r\n  text-align: center;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  margin-right: 30px;\r\n  height: 30px;\r\n\r\n\r\n}\r\n#opt3{\r\n  background-color:  #ff6600;\r\n  text-align: center;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  margin-right: 30px;\r\n  height: 30px;\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2VwYWdlL3Jlc291cmNlcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0NBQ2Y7QUFDRDtLQUNLLGNBQWM7S0FDZCxtQkFBbUI7S0FDbkIsWUFBWTtLQUNaLG1CQUFtQjtLQUNuQix1QkFBdUI7O0NBRTNCO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsWUFBWTtDQUNiO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXOzs7Q0FHWjtBQUlEO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7OztDQUdiO0FBR0Q7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7O0NBRVg7QUFFRDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztDQUNmO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCOztDQUVqQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7O0NBRWY7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UscUJBQXFCOztDQUV0QjtBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7OztDQUdkO0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTs7O0NBR2QiLCJmaWxlIjoic3JjL2FwcC9yZXNvdXJjZXBhZ2UvcmVzb3VyY2VwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4jUGVyc29uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI0RpdkhlYWQge1xyXG4gICAgIGFsaWduOiBjZW50ZXI7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG5cclxufVxyXG5cclxuI3NpZGViYXJjb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogLTEzdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ246IGNlbnRlcjtcclxufVxyXG4jQ2hvaWNle1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMzBweDtcclxuICBhbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogNjtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiNpbnBsYWNle1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgYm90dG9tOiAwcHg7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiNHb2FsSGVhZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbiNzZXR0bGVEb3due1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBhbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB0b3A6IDUwcHg7XHJcblxyXG59XHJcblxyXG4jZmlyc3RkaXZ7XHJcbiAgdG9wOiAtMjB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI3NlY29uZGRpdntcclxuICB0b3A6IC0yNXZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbGlnbjogY2VudGVyO1xyXG59XHJcbiNSZXNvdXJjZUhlYWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4jR0l7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjYjM3MTtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuI1BQe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OWJlODY7XHJcbn1cclxuI0xQe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MGNlYTM7XHJcbiAgcGFkZGluZy1yaWdodDo1MHB4O1xyXG59XHJcblxyXG4jYm90dG9taGVhZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2NiMzcxO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbn1cclxuaGVhZGVyIGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG59XHJcbnVse1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG51bCBsaXtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuXHJcbiNvcHQxe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4jb3B0MntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuXHJcblxyXG59XHJcblxyXG4jb3B0M3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmNjYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/resourcepage/resourcepage.component.html":
/*!**********************************************************!*\
  !*** ./src/app/resourcepage/resourcepage.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n\n<div id = \"firstdiv\">\n<header id=\"Choice\">\n  <div id =\"GI\">Goal Info</div>\n\n<a routerLink=\"/homePage\" [class.activated]=\"currentUrl == '/homePage'\">\n   <div id =\"PP\">Personal Page</div>\n</a>\n\n  <div id =\"LP\">Landing Page</div>\n</header>\n</div>\n\n<div id=\"seconddiv\">\n<header id=\"settleDown\">\n<div id=\"GoalHead\">Goal Info</div>\n<div id=\"ResourceHead\">Resources to Get You Started</div>\n</header>\n</div>\n\n\n\n\n <div id=\"sidebarcontainer\">\n    <app-sidebar></app-sidebar>\n  </div>\n\n<div id=\"content\">\n   <router-outlet></router-outlet>\n</div>\n\n<div id=\"inplace\">\n<header id=\"bottomheader\">  CREATE </header>\n<ul id = \"options\">\n  <li>\n      <a routerLink=\"/resourceList\" [class.activated]=\"currentUrl == '/resourceList'\">\n          <div id=\"opt1\">To-Do Resource List</div>\n      </a>\n  </li>\n  <li>\n      <a routerLink=\"posts\" [class.activated]=\"currentUrl == '/'\">\n          <div id=\"opt2\">Make Resource List a Goal!</div>\n      </a>\n  </li>\n  <li>\n      <a routerLink=\"posts\" [class.activated]=\"currentUrl == '/'\">\n          <div id=\"opt3\">Skip Resources</div>\n      </a>\n  </li>\n</ul>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/resourcepage/resourcepage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/resourcepage/resourcepage.component.ts ***!
  \********************************************************/
/*! exports provided: ResourcepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcepageComponent", function() { return ResourcepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResourcepageComponent = /** @class */ (function () {
    function ResourcepageComponent() {
    }
    ResourcepageComponent.prototype.ngOnInit = function () {
    };
    ResourcepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resourcepage',
            template: __webpack_require__(/*! ./resourcepage.component.html */ "./src/app/resourcepage/resourcepage.component.html"),
            styles: [__webpack_require__(/*! ./resourcepage.component.css */ "./src/app/resourcepage/resourcepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResourcepageComponent);
    return ResourcepageComponent;
}());



/***/ }),

/***/ "./src/app/rpforum-posts/rpforum-posts.component.css":
/*!***********************************************************!*\
  !*** ./src/app/rpforum-posts/rpforum-posts.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  width: 100%;\r\n  height: 250px;\r\n  margin-left:20px;\r\n  margin-top: 40px;\r\n  margin-bottom: 80px;\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  white-space: nowrap;\r\n\r\n}\r\n\r\ndiv div{\r\n  width: 40%;\r\n  height: 80%;\r\n  align: center;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  display: inline-block;\r\n  word-break: break-all;\r\n  background-color: #ff751a;\r\n  overflow: auto;\r\n  text-align: center;\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px;\r\n  box-shadow: 5px 5px 5px grey;\r\n\r\n}\r\n\r\ndiv div h5{\r\ntext-align: center;\r\n}\r\n\r\ndiv div h5 button {\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnBmb3J1bS1wb3N0cy9ycGZvcnVtLXBvc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9COztDQUVyQjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsNkJBQTZCOztDQUU5Qjs7QUFDRDtBQUNBLG1CQUFtQjtDQUNsQjs7QUFFRDtFQUNFLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDZCQUE2QjtDQUM5QiIsImZpbGUiOiJzcmMvYXBwL3JwZm9ydW0tcG9zdHMvcnBmb3J1bS1wb3N0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbn1cclxuXHJcbmRpdiBkaXZ7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBhbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzUxYTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyZXk7XHJcblxyXG59XHJcbmRpdiBkaXYgaDV7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2IGRpdiBoNSBidXR0b24ge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/rpforum-posts/rpforum-posts.component.html":
/*!************************************************************!*\
  !*** ./src/app/rpforum-posts/rpforum-posts.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@listStagger]=\"users$\">\n    <div *ngFor=\"let user of users$; index as i\">\n        <h5>\n        <button mat-stroked-button routerLink=\"redditInfo\" (click)=\"getIndex(i)\" [class.activated]=\"currentUrl == 'redditresource/redditInfo'\"><p><strong>Reddit Resource: {{i}}</strong></p></button>\n        <p><strong>Reddit Title:</strong>{{user.RedditTitle}}</p>\n        <p><strong>Reddit Author:</strong>{{user.RedditAuthor}}</p>\n        <p><strong>Reddit Response:</strong>{{user.AuthorResponse}}</p>\n        </h5>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rpforum-posts/rpforum-posts.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/rpforum-posts/rpforum-posts.component.ts ***!
  \**********************************************************/
/*! exports provided: RPForumPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPForumPostsComponent", function() { return RPForumPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource.service */ "./src/app/resource.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






//[routerLink]="['/product/',product.id]"  routerLink="webInfo"
var RPForumPostsComponent = /** @class */ (function () {
    function RPForumPostsComponent(resourceservice, router, data) {
        this.resourceservice = resourceservice;
        this.router = router;
        this.data = data;
    }
    RPForumPostsComponent.prototype.ngOnInit = function () {
        this.getItDone();
        //  this.data.currentMessage.subscribe(message => this.message = message)
    };
    RPForumPostsComponent.prototype.getItDone = function () {
        var _this = this;
        this.resourceservice
            .getRedditResources()
            .subscribe(function (data) {
            console.log('Here is the proof');
            console.log(data);
            _this.users$ = data;
            console.log('Data requested ...');
            console.log(_this.users$);
            console.log('This is the other stuff');
            //     console.log(this.message)
            // console.log(this.users$[0])
        });
    };
    RPForumPostsComponent.prototype.getIndex = function (digit) {
        this.digit = digit;
        console.log("Here is the number I need");
        console.log(this.digit);
        this.data.passIndex(this.digit);
    };
    RPForumPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rpforum-posts',
            template: __webpack_require__(/*! ./rpforum-posts.component.html */ "./src/app/rpforum-posts/rpforum-posts.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('listStagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', //only defined elements being added, and where they are going from and to
                        [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })), {
                            optional: true
                        })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./rpforum-posts.component.css */ "./src/app/rpforum-posts/rpforum-posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], RPForumPostsComponent);
    return RPForumPostsComponent;
}());

//    resourceservice => this.users$ = resourceservice
//    console.log(this.users$)


/***/ }),

/***/ "./src/app/rpvideos/rpvideos.component.css":
/*!*************************************************!*\
  !*** ./src/app/rpvideos/rpvideos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  width: 100%;\r\n  height: 250px;\r\n  margin-left:20px;\r\n  margin-top: 40px;\r\n  margin-bottom: 80px;\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  white-space: nowrap;\r\n\r\n}\r\n\r\ndiv div{\r\n  width: 40%;\r\n  height: 80%;\r\n  align: center;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  display: inline-block;\r\n  word-break: break-all;\r\n  background-color: #ff751a;\r\n  overflow: auto;\r\n  text-align: center;\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px;\r\n  box-shadow: 5px 5px 5px grey;\r\n\r\n}\r\n\r\ndiv div h5{\r\ntext-align: center;\r\n}\r\n\r\ndiv div h5 button {\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnB2aWRlb3MvcnB2aWRlb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7O0NBRXJCOztBQUVEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7O0NBRTlCOztBQUNEO0FBQ0EsbUJBQW1CO0NBQ2xCOztBQUVEO0VBQ0UsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvcnB2aWRlb3MvcnB2aWRlb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG59XHJcblxyXG5kaXYgZGl2e1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc1MWE7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmV5O1xyXG5cclxufVxyXG5kaXYgZGl2IGg1e1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdiBkaXYgaDUgYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/rpvideos/rpvideos.component.html":
/*!**************************************************!*\
  !*** ./src/app/rpvideos/rpvideos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@listStagger]=\"users$\">\n    <div *ngFor=\"let user of users$; index as i\">\n        <h5>\n        <button mat-stroked-button routerLink=\"vidInfo\" (click)=\"getIndex(i)\" [class.activated]=\"currentUrl == 'videoresource/vidInfo'\"><p><strong>Video Resource: {{i}}</strong></p></button>\n        <p><strong>Title:</strong>{{user.title}}</p>\n        <p><strong>Channel Title:</strong>{{user.channelTitle}}</p>\n        <p><strong>URL:</strong>{{user.URL}}</p>\n        <p><strong>Description:</strong>{{user.description}}</p>\n        </h5>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rpvideos/rpvideos.component.ts":
/*!************************************************!*\
  !*** ./src/app/rpvideos/rpvideos.component.ts ***!
  \************************************************/
/*! exports provided: RPVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPVideosComponent", function() { return RPVideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource.service */ "./src/app/resource.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






var RPVideosComponent = /** @class */ (function () {
    function RPVideosComponent(resourceservice, router, data) {
        this.resourceservice = resourceservice;
        this.router = router;
        this.data = data;
    }
    RPVideosComponent.prototype.ngOnInit = function () {
        this.getItDone();
    };
    RPVideosComponent.prototype.getItDone = function () {
        var _this = this;
        this.resourceservice
            .getVideoResources()
            .subscribe(function (data) {
            console.log('Here is the proof');
            console.log(data);
            _this.users$ = data;
            console.log('Data requested ...');
            console.log(_this.users$);
            console.log('This is the other stuff');
            //     console.log(this.message)
            // console.log(this.users$[0])
        });
    };
    RPVideosComponent.prototype.getIndex = function (digit) {
        this.digit = digit;
        console.log("Here is the number I need");
        console.log(this.digit);
        this.data.passIndex(this.digit);
    };
    RPVideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rpvideos',
            template: __webpack_require__(/*! ./rpvideos.component.html */ "./src/app/rpvideos/rpvideos.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('listStagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', //only defined elements being added, and where they are going from and to
                        [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })), {
                            optional: true
                        })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./rpvideos.component.css */ "./src/app/rpvideos/rpvideos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], RPVideosComponent);
    return RPVideosComponent;
}());



/***/ }),

/***/ "./src/app/rpweb-articles/rpweb-articles.component.css":
/*!*************************************************************!*\
  !*** ./src/app/rpweb-articles/rpweb-articles.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  width: 100%;\r\n  height: 250px;\r\n  margin-left:20px;\r\n  margin-top: 40px;\r\n  margin-bottom: 80px;\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  white-space: nowrap;\r\n\r\n}\r\n\r\ndiv div{\r\n  width: 40%;\r\n  height: 80%;\r\n  align: center;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  display: inline-block;\r\n  word-break: break-all;\r\n  background-color: #ff6600;\r\n  overflow: auto;\r\n  text-align: center;\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px;\r\n  box-shadow: 5px 5px 5px grey;\r\n\r\n}\r\n\r\ndiv div h5{\r\ntext-align: center;\r\n}\r\n\r\ndiv div h5 button {\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnB3ZWItYXJ0aWNsZXMvcnB3ZWItYXJ0aWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7O0NBRXJCOztBQUVEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7O0NBRTlCOztBQUNEO0FBQ0EsbUJBQW1CO0NBQ2xCOztBQUVEO0VBQ0UsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvcnB3ZWItYXJ0aWNsZXMvcnB3ZWItYXJ0aWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG59XHJcblxyXG5kaXYgZGl2e1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmV5O1xyXG5cclxufVxyXG5kaXYgZGl2IGg1e1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdiBkaXYgaDUgYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/rpweb-articles/rpweb-articles.component.html":
/*!**************************************************************!*\
  !*** ./src/app/rpweb-articles/rpweb-articles.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div [@listStagger]=\"users$\">\r\n    <div *ngFor=\"let user of users$; index as i\">\r\n        <h5>\r\n        <button mat-stroked-button routerLink=\"webInfo\" (click)=\"getIndex(i)\" [class.activated]=\"currentUrl == 'resource/webInfo'\"><p><strong>Web Resource: {{i}}</strong></p></button>\r\n        <p><strong>Title:</strong>{{user.title}}</p>\r\n        <p><strong>URL:</strong>{{user.URL}}</p>\r\n        <p><strong>Snippet:</strong>{{user.Summary}}</p>\r\n        </h5>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rpweb-articles/rpweb-articles.component.ts":
/*!************************************************************!*\
  !*** ./src/app/rpweb-articles/rpweb-articles.component.ts ***!
  \************************************************************/
/*! exports provided: RPWebArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPWebArticlesComponent", function() { return RPWebArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource.service */ "./src/app/resource.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






//[routerLink]="['/product/',product.id]"  routerLink="webInfo"
var RPWebArticlesComponent = /** @class */ (function () {
    function RPWebArticlesComponent(resourceservice, router, data) {
        this.resourceservice = resourceservice;
        this.router = router;
        this.data = data;
    }
    RPWebArticlesComponent.prototype.ngOnInit = function () {
        this.getItDone();
        //  this.data.currentMessage.subscribe(message => this.message = message)
    };
    RPWebArticlesComponent.prototype.getItDone = function () {
        var _this = this;
        this.resourceservice
            .getResources()
            .subscribe(function (data) {
            console.log('Here is the proof');
            console.log(data);
            _this.users$ = data;
            console.log('Data requested ...');
            console.log(_this.users$);
            console.log('This is the other stuff');
            //     console.log(this.message)
            // console.log(this.users$[0])
        });
    };
    RPWebArticlesComponent.prototype.getIndex = function (digit) {
        this.digit = digit;
        console.log("Here is the number I need");
        console.log(this.digit);
        this.data.passIndex(this.digit);
    };
    RPWebArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rpweb-articles',
            template: __webpack_require__(/*! ./rpweb-articles.component.html */ "./src/app/rpweb-articles/rpweb-articles.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('listStagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', //only defined elements being added, and where they are going from and to
                        [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })), {
                            optional: true
                        })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./rpweb-articles.component.css */ "./src/app/rpweb-articles/rpweb-articles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], RPWebArticlesComponent);
    return RPWebArticlesComponent;
}());

//    resourceservice => this.users$ = resourceservice
//    console.log(this.users$)


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav ul li a div{\r\n\r\n      padding: 20px;\r\n      margin-left: 0px;\r\n      text-align: center;\r\n\r\n}\r\n\r\nnav ul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nnav{\r\nmargin-top: 10px;\r\nmargin-left: 5px;\r\nmargin-right: 5px;\r\nalign: center;\r\nwidth: 100%;\r\n}\r\n\r\nnav ul li a{\r\n  align: center;\r\n}\r\n\r\nnav ul li{\r\n  float: left;\r\n  padding: 20px;\r\n}\r\n\r\n#Vid{\r\n  background-color: #cc9900;\r\n  position: relative;\r\n  width: 100px;\r\n  height: 85px;\r\n  margin-left: 0;\r\n  padding-right: 40px;\r\n\r\n\r\n\r\n}\r\n\r\n#Web{\r\n  background-color: #8bc811;\r\n  position: relative;\r\n  width: 100px;\r\n  margin-left: 0;\r\n  padding-right: 40px;\r\n\r\n\r\n\r\n}\r\n\r\n#Forum{\r\n  background-color: #3cb371;\r\n  position: relative;\r\n  width: 100px;\r\n  margin-left: 0;\r\n  padding-right: 40px;\r\n\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O01BRU0sY0FBYztNQUNkLGlCQUFpQjtNQUNqQixtQkFBbUI7O0NBRXhCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0NBQ1g7O0FBQ0Q7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsWUFBWTtDQUNYOztBQUNEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQW9COzs7O0NBSXJCOztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjs7OztDQUlyQjs7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixvQkFBb0I7Ozs7Q0FJckIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB1bCBsaSBhIGRpdntcclxuXHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbm5hdiB1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbm5hdntcclxubWFyZ2luLXRvcDogMTBweDtcclxubWFyZ2luLWxlZnQ6IDVweDtcclxubWFyZ2luLXJpZ2h0OiA1cHg7XHJcbmFsaWduOiBjZW50ZXI7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbm5hdiB1bCBsaSBhe1xyXG4gIGFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBsaXtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jVmlke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzk5MDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuXHJcblxyXG5cclxufVxyXG4jV2Vie1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmM4MTE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cclxuXHJcblxyXG59XHJcbiNGb3J1bXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2NiMzcxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuXHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li>\n        <a routerLink=\"/videoresource\" [class.activated]=\"currentUrl == '/videoresource'\">\n            <div id=\"Vid\">Videos</div>\n        </a>\n    </li>\n    <li>\n          <a routerLink=\"/resource\" [class.activated]=\"currentUrl == '/resource'\">\n            <div id=\"Web\">Web Articles</div>\n        </a>\n    </li>\n    <li>\n        <a routerLink=\"/redditresource\" [class.activated]=\"currentUrl == '/redditresource'\">\n            <div id=\"Forum\">Forum Posts</div>\n        </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (_) { return _this.currentUrl = _.url; });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/vid-info-div/vid-info-div.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vid-info-div/vid-info-div.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#VidDetail{\r\n  margin-top: 200px;\r\n  background-color: gray;\r\n  padding-left: 50px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkLWluZm8tZGl2L3ZpZC1pbmZvLWRpdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlkLWluZm8tZGl2L3ZpZC1pbmZvLWRpdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1ZpZERldGFpbHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/vid-info-div/vid-info-div.component.html":
/*!**********************************************************!*\
  !*** ./src/app/vid-info-div/vid-info-div.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"VidDetail\">\n  <h4> Web Article </h4>\n  <button mat-stroked-button routerLink=\"videoresource\" [class.activated]=\"currentUrl == 'vidInfo/videoresource'\">Back to Web Resources</button>\n\n  <p>Title: </p>\n  <div id=\"vidTitle\">{{oneuser$.title}}</div>\n\n  <p>Channel Title: </p>\n  <div id=\"vidChannelTitle\">{{oneuser$.channelTitle}}</div>\n\n  <p>URL: </p>\n  <div id=\"vidURL\">{{oneuser$.URL}}</div>\n\n  <p>Snippet: </p>\n  <div id=\"vidDescription\">{{oneuser$.description}}</div>\n  <button id=\"Saver\" (click)=\"sendItBack(oneuser$.title,oneuser$.channelTitle, oneuser$.URL, oneuser$.description)\"> Save Video Resource </button>\n\n\n  </div>\n"

/***/ }),

/***/ "./src/app/vid-info-div/vid-info-div.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vid-info-div/vid-info-div.component.ts ***!
  \********************************************************/
/*! exports provided: VidInfoDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VidInfoDivComponent", function() { return VidInfoDivComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource.service */ "./src/app/resource.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");





var VidInfoDivComponent = /** @class */ (function () {
    function VidInfoDivComponent(router, data, resourceservice) {
        var _this = this;
        this.router = router;
        this.data = data;
        this.resourceservice = resourceservice;
        router.events.subscribe(function (_) { return _this.currentUrl = _.url; });
    }
    VidInfoDivComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (res) {
            console.log("Here is the index");
            console.log(res);
            _this.index = res;
        });
        this.resourceservice
            .getVideoResources()
            .subscribe(function (data) {
            _this.moreusers$ = data;
            console.log('Web Data requested ...');
            console.log(_this.moreusers$);
            console.log(_this.moreusers$[_this.index + 1]);
            console.log("Index");
            console.log(_this.index);
            _this.oneuser$ = _this.moreusers$[_this.index];
            console.log("Check again");
            console.log(_this.oneuser$);
            //     console.log(this.message)
            // console.log(this.users$[0])
        });
        //  getIndex(this.iD){
        //  this.index = this.iD
        //  console.log("Here is the appropriate index")
        //    console.log(this.index)
        //  }
    };
    VidInfoDivComponent.prototype.sendItBack = function (vidtitle, vidchanneltitle, vidurl, viddescription) {
        this.resourceservice
            .insertVidResource(vidtitle, vidchanneltitle, vidurl, viddescription);
    };
    VidInfoDivComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vid-info-div',
            template: __webpack_require__(/*! ./vid-info-div.component.html */ "./src/app/vid-info-div/vid-info-div.component.html"),
            styles: [__webpack_require__(/*! ./vid-info-div.component.css */ "./src/app/vid-info-div/vid-info-div.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]])
    ], VidInfoDivComponent);
    return VidInfoDivComponent;
}());



/***/ }),

/***/ "./src/app/web-info-div/web-info-div.component.css":
/*!*********************************************************!*\
  !*** ./src/app/web-info-div/web-info-div.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#WebDetail{\r\n  margin-top: 200px;\r\n  background-color: gray;\r\n  padding-left: 50px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWluZm8tZGl2L3dlYi1pbmZvLWRpdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvd2ViLWluZm8tZGl2L3dlYi1pbmZvLWRpdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1dlYkRldGFpbHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/web-info-div/web-info-div.component.html":
/*!**********************************************************!*\
  !*** ./src/app/web-info-div/web-info-div.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"WebDetail\">\n  <h4> Web Article </h4>\n  <button mat-stroked-button routerLink=\"resource\" [class.activated]=\"currentUrl == 'webInfo/resource'\">Back to Web Resources</button>\n\n  <p>Title: </p>\n  <div id=\"webTitle\">{{oneuser$.title}}</div>\n\n  <p>URL: </p>\n  <div id=\"webURL\">{{oneuser$.URL}}</div>\n\n  <p>Snippet: </p>\n  <div id=\"webSnippet\">{{oneuser$.Summary}}</div>\n\n  <button id=\"Saver\" (click)=\"sendItBack(oneuser$.title, oneuser$.URL, oneuser$.Summary)\"> Save Web Resource </button>\n\n\n  </div>\n"

/***/ }),

/***/ "./src/app/web-info-div/web-info-div.component.ts":
/*!********************************************************!*\
  !*** ./src/app/web-info-div/web-info-div.component.ts ***!
  \********************************************************/
/*! exports provided: WebInfoDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebInfoDivComponent", function() { return WebInfoDivComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource.service */ "./src/app/resource.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");





var WebInfoDivComponent = /** @class */ (function () {
    function WebInfoDivComponent(router, data, resourceservice) {
        var _this = this;
        this.router = router;
        this.data = data;
        this.resourceservice = resourceservice;
        router.events.subscribe(function (_) { return _this.currentUrl = _.url; });
    }
    WebInfoDivComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (res) {
            console.log("Here is the index");
            console.log(res);
            _this.index = res;
        });
        this.resourceservice
            .getResources()
            .subscribe(function (data) {
            _this.moreusers$ = data;
            console.log('Web Data requested ...');
            console.log(_this.moreusers$);
            console.log(_this.moreusers$[_this.index + 1]);
            console.log("Index");
            console.log(_this.index);
            _this.oneuser$ = _this.moreusers$[_this.index];
            console.log("Check again");
            console.log(_this.oneuser$);
            //     console.log(this.message)
            // console.log(this.users$[0])
        });
        //  getIndex(this.iD){
        //  this.index = this.iD
        //  console.log("Here is the appropriate index")
        //    console.log(this.index)
        //  }
    };
    WebInfoDivComponent.prototype.sendItBack = function (webtitle, weburl, websummary) {
        this.resourceservice
            .insertResource(webtitle, weburl, websummary);
    };
    WebInfoDivComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-web-info-div',
            template: __webpack_require__(/*! ./web-info-div.component.html */ "./src/app/web-info-div/web-info-div.component.html"),
            styles: [__webpack_require__(/*! ./web-info-div.component.css */ "./src/app/web-info-div/web-info-div.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]])
    ], WebInfoDivComponent);
    return WebInfoDivComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Owner\Desktop\GoalForIt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map