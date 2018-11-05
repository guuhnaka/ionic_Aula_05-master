webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filme_filme__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 -copyright
  Aluno:Gustavo Nakaura RA:816253667
 */
var CadastrarPage = /** @class */ (function () {
    function CadastrarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilmePage');
    };
    CadastrarPage.prototype.filme = function () {
        //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a cadastroContaPage
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__filme_filme__["a" /* FilmePage */]);
    };
    CadastrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar',template:/*ion-inline-start:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\cadastrar\cadastrar.html"*/'<!--\n -copyright\n  Aluno:Gustavo Nakaura RA:816253667\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastrar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-list>\n        <ion-item>\n          <ion-label color="primary">Titulo</ion-label>\n          <ion-input placeholder="Digite o titulo do filme"></ion-input>\n        </ion-item>\n        \n            <ion-item>\n              <ion-label color="primary">Direção</ion-label>\n              <ion-input placeholder="Digite o nome do Diretor(a)"></ion-input>\n            </ion-item>\n            \n                <ion-item>\n                  <ion-label color="primary">Popularidade</ion-label>\n                  <ion-input placeholder="Popularidade(0-100%)"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label color="primary">Genero</ion-label>\n                  <ion-input placeholder="Qual o genero do filme"></ion-input>\n                </ion-item>\n                \n                <ion-item>\n                    <ion-label color="primary">Data de Lançamento</ion-label>\n                    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="myDate">\n                    </ion-datetime>\n                  </ion-item>\n\n                    <ion-item>\n                        <ion-label color="primary">Descrição</ion-label>\n                        <ion-textarea placeholder="Descrição"></ion-textarea>\n                    </ion-item>\n      </ion-list>\n\n<button ion-button round  (click)="filme()">Cadastrar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\cadastrar\cadastrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CadastrarPage);
    return CadastrarPage;
}());

//# sourceMappingURL=cadastrar.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LancamentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
   -copyright
  Aluno:Gustavo Nakaura RA:816253667
 */
var LancamentosPage = /** @class */ (function () {
    function LancamentosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LancamentosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LancamentosPage');
    };
    LancamentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lancamentos',template:/*ion-inline-start:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\lancamentos\lancamentos.html"*/'<!--\n   -copyright\n  Aluno:Gustavo Nakaura RA:816253667\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lancamentos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label color="black">Minha vida</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="black">The Avengers</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="black">Deadpool 2</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="black">Black Panthers</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="black">hotel transilvânia 3: férias monstruosas</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\lancamentos\lancamentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LancamentosPage);
    return LancamentosPage;
}());

//# sourceMappingURL=lancamentos.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
   -copyright
  Aluno:Gustavo Nakaura RA:816253667
 */
var PopularidadePage = /** @class */ (function () {
    function PopularidadePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopularidadePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopularidadePage');
    };
    PopularidadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popularidade',template:/*ion-inline-start:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\popularidade\popularidade.html"*/'<!--\n   -copyright\n  Aluno:Gustavo Nakaura RA:816253667\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Popularidade</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-list>\n    <ion-item>\n      <ion-label color="black">Minha vida</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="black">The Avengers</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="black">Deadpool 2</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="black">Black Panthers</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="black">Hotel transilvânia 3: férias monstruosas</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\popularidade\popularidade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PopularidadePage);
    return PopularidadePage;
}());

//# sourceMappingURL=popularidade.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastrar/cadastrar.module": [
		279,
		3
	],
	"../pages/filme/filme.module": [
		154
	],
	"../pages/genero/genero.module": [
		276,
		2
	],
	"../pages/intro/intro.module": [
		156
	],
	"../pages/lancamentos/lancamentos.module": [
		277,
		1
	],
	"../pages/popularidade/popularidade.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmePageModule", function() { return FilmePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filme__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilmePageModule = /** @class */ (function () {
    function FilmePageModule() {
    }
    FilmePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filme__["a" /* FilmePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filme__["a" /* FilmePage */]),
            ],
        })
    ], FilmePageModule);
    return FilmePageModule;
}());

//# sourceMappingURL=filme.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 -copyright
  Aluno:Gustavo Nakaura RA:816253667
 */
var FilmePage = /** @class */ (function () {
    function FilmePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilmePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filme',template:/*ion-inline-start:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\filme\filme.html"*/'<!--\n -copyright\n  Aluno:Gustavo Nakaura RA:816253667\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Filme</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n  <ion-list >\n      <ion-item>\n          <ion-label color="black">Minha vida</ion-label>\n          <ion-label color="primary">Terror</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label color="black">The Avengers</ion-label>\n          <ion-label color="primary">Ação</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label color="black">A Noite do Jogo</ion-label>\n          <ion-label color="primary">Comedia</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label color="black">Black Panthers</ion-label>\n          <ion-label color="primary">Herois</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label color="black">Hotel Transilvânia 3: Férias Monstruosas</ion-label>\n          <ion-label color="primary">Infantil</ion-label>\n        </ion-item>\n  </ion-list>\n  <button ion-button round >Editar</button>\n  <button ion-button round >Excluir</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\filme\filme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FilmePage);
    return FilmePage;
}());

//# sourceMappingURL=filme.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 -copyright
  Aluno:Gustavo Nakaura RA:816253667
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.goToTabsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\intro\intro.html"*/'<!--\n  -copyright\n  Aluno:Gustavo Nakaura RA:816253667\n-->\n<ion-navbar>\n    <ion-title>Intro</ion-title>\n  </ion-navbar>\n\n<ion-content >\n    <ion-slides pager>\n        <ion-slide class="slide_image">\n          <img src="assets/imgs/slideintro-1.jpg">\n        <h2>Slide 1</h2>\n        <div>\n            <p>Esse App é destinado para pessoas que</p>\n            <p>gostam de acompanhar as informações sobre os filmes</p>\n        </div>\n        </ion-slide>\n\n        <ion-slide class="slide_image">\n            <img src="assets/imgs/slideintro-2.jpg">\n        <h2>Slide 2</h2>\n        <div>\n            <p>Permitindo com que o usuario tambem adicione os filmes que ele goste</p>\n            <p>tudo em anonimo, com direito a filtros como, lançamento,popularidade e genero</p>\n        </div>\n        </ion-slide>\n\n\n        <ion-slide class="slide_image">\n            <img src="assets/imgs/slideintro-3.jpg">\n        <h2>Slide 3</h2>\n        <a (click)="goToTabsPage()">Continuar</a>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cadastrar_cadastrar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__genero_genero__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lancamentos_lancamentos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popularidade_popularidade__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__cadastrar_cadastrar__["a" /* CadastrarPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__genero_genero__["a" /* GeneroPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__lancamentos_lancamentos__["a" /* LancamentosPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__popularidade_popularidade__["a" /* PopularidadePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\tabs\tabs.html"*/'<!--\n   -copyright\n  Aluno:Gustavo Nakaura RA:816253667\n-->\n\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Cadastrar" tabIcon="add"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Genero" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Lancamentos" tabIcon="jet"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Popularidade" tabIcon="podium"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cadastrar_cadastrar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_genero_genero__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_lancamentos_lancamentos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_popularidade_popularidade__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_filme_filme_module__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_cadastrar_cadastrar__["a" /* CadastrarPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_genero_genero__["a" /* GeneroPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lancamentos_lancamentos__["a" /* LancamentosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_popularidade_popularidade__["a" /* PopularidadePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/filme/filme.module#FilmePageModule', name: 'FilmePage', segment: 'filme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/genero/genero.module#GeneroPageModule', name: 'GeneroPage', segment: 'genero', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lancamentos/lancamentos.module#LancamentosPageModule', name: 'LancamentosPage', segment: 'lancamentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popularidade/popularidade.module#PopularidadePageModule', name: 'PopularidadePage', segment: 'popularidade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar/cadastrar.module#CadastrarPageModule', name: 'CadastrarPage', segment: 'cadastrar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro_module__["IntroPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_filme_filme_module__["FilmePageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_cadastrar_cadastrar__["a" /* CadastrarPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_genero_genero__["a" /* GeneroPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lancamentos_lancamentos__["a" /* LancamentosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_popularidade_popularidade__["a" /* PopularidadePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__["a" /* IntroPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 -copyright
  Aluno:Gustavo Nakaura RA:816253667
 */
var GeneroPage = /** @class */ (function () {
    function GeneroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GeneroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeneroPage');
    };
    GeneroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-genero',template:/*ion-inline-start:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\genero\genero.html"*/'<!--\n -copyright\n  Aluno:Gustavo Nakaura RA:816253667\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Genero</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n      <ion-item>\n        <ion-label color="primary">Terror</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Suspense</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Ação</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Aventura</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary">Comedia</ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\NakZ\Desktop\exercicios\ionic-Bonato\ionic_aula_05-master\Aula5\src\pages\genero\genero.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GeneroPage);
    return GeneroPage;
}());

//# sourceMappingURL=genero.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map