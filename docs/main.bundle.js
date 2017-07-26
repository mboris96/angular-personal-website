webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container [class.m2app-dark]=\"isDarkTheme\">\n\n\t<md-sidenav #sidenav mode=\"over\" class=\"app-sidenav\" color=\"primary\">\n\t\t<md-toolbar>\n\t\t\t<span>Settings</span>\n\t\t\t<span class=\"app-toolbar-filler\"></span>\n\t\t\t<md-icon class=\"example-icon\">build</md-icon>\n\n\n\t\t\t<md-toolbar-row>\n\t\t\t\t<button md-button (click)=\"isDarkTheme = !isDarkTheme\" class=\"app-sidebar-button\">TOGGLE THEME</button>\n\t\t\t</md-toolbar-row>\n\n\t\t\t<md-toolbar-row>\n\t\t\t\t<span>Account</span>\n\t\t\t\t<span class=\"app-toolbar-filler\"></span>\n\t\t\t\t<md-icon class=\"example-icon\">account_circle</md-icon>\n\t\t\t</md-toolbar-row>\n\n\t\t\t<md-toolbar-row>\n\t\t\t\t<button md-raised-button color=\"accent\" class=\"app-sidebar-button\">\n            <md-icon class=\"example-icon\">verified_user</md-icon>\n            Login            \n           </button>\n\t\t\t</md-toolbar-row>\n\n\t\t\t<md-toolbar-row>\n\t\t\t\t<span>Favorites</span>\n\t\t\t\t<span class=\"app-toolbar-filler\"></span>\n\t\t\t\t<md-icon class=\"example-icon\">favorite</md-icon>\n\t\t\t</md-toolbar-row>\n\n\t\t\t<md-toolbar-row>\n\t\t\t\t<button md-raised-button color=\"warn\" class=\"app-sidebar-button\">\n             <md-icon class=\"example-icon\">delete</md-icon>\n             Delete\n           </button>\n\t\t\t</md-toolbar-row>\n\n\t\t</md-toolbar>\n\t</md-sidenav>\n\n\t<md-toolbar color=\"primary\">\n\t\t<button md-button class=\"app-menu-button\" (click)=\"sidenav.toggle()\">\n      <i class=\"material-icons\">menu</i>\n    </button>\n\t\t<span class=\"title\">Matthew Boris</span>\n\t</md-toolbar>\n\n\t<div class=\"app-content\">\n\n\t\t<!-- Material Button -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Button</h2>\n\t\t\t\t<button class=\"app-button\" md-button>FLAT</button>\n\t\t\t\t<button class=\"app-button\" md-raised-button md-tooltip=\"This is a tooltip!\">RAISED</button>\n\t\t\t\t<button class=\"app-button\" md-raised-button color=\"primary\">PRIMARY RAISED</button>\n\t\t\t\t<button class=\"app-button\" md-raised-button color=\"accent\">ACCENT RAISED</button>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Button -->\n\n\t\t<!-- Material Chip List -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Chips</h2>\n\t\t\t\t<md-chip-list>\n\t\t\t\t\t<md-chip *ngFor=\"let chipColor of availableColors\" selected=\"true\" color=\"{{chipColor.color}}\">\n\t\t\t\t\t\t{{chipColor.name}}\n\t\t\t\t\t</md-chip>\n\t\t\t\t</md-chip-list>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Chip List -->\n\n\t\t<!-- Material Checkbox -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Checkbox</h2>\n\t\t\t\t<md-checkbox color=\"warn\">Unchecked</md-checkbox>\n\t\t\t\t<md-checkbox [checked]=\"true\">Checked</md-checkbox>\n\t\t\t\t<md-checkbox [indeterminate]=\"true\">Indeterminate</md-checkbox>\n\t\t\t\t<md-checkbox [disabled]=\"true\">Disabled</md-checkbox>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Checkbox -->\n\n\t\t<!-- Material Radio Button -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Radio Button</h2>\n\t\t\t\t<md-radio-button name=\"symbol\">Alpha</md-radio-button>\n\t\t\t\t<md-radio-button name=\"symbol\">Beta</md-radio-button>\n\t\t\t\t<md-radio-button name=\"symbol\" disabled>Disabled</md-radio-button>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Radio Button -->\n\n\t\t<!-- Material Input -->\n\t\t<md-card class=\"app-input-section\">\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Input</h2>\n\t\t\t\t<md-input-container>\n\t\t\t\t\t<input mdInput placeholder=\"First name\" />\n\t\t\t\t</md-input-container>\n\t\t\t\t<md-input-container>\n\t\t\t\t\t<input mdInput #nickname placeholder=\"Nickname\" maxlength=\"50\" />\n\t\t\t\t\t<md-hint align=\"end\">\n\t\t\t\t\t\t{{nickname.value.length}} / 50\n\t\t\t\t\t</md-hint>\n\t\t\t\t</md-input-container>\n\t\t\t\t<md-input-container>\n\t\t\t\t\t<input mdInput placeholder=\"Favorite phone\">\n\t\t\t\t\t<span md-prefix>\n        <i class=\"material-icons app-input-icon\">android</i>\n        &nbsp;\n        </span>\n\t\t\t\t</md-input-container>\n\t\t\t\t<md-input-container>\n\t\t\t\t\t<input mdInput placeholder=\"Motorcycle model\">\n\t\t\t\t\t<span md-prefix>\n          <i class=\"material-icons app-input-icon\">motorcycle</i>\n          &nbsp;\n        </span>\n\t\t\t\t</md-input-container>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Input -->\n\n\t\t<!-- Material Select -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Select</h2>\n\t\t\t\t<md-select placeholder=\"Favorite game\" [(ngModel)]=\"selectedValue\" name=\"game\">\n\t\t\t\t\t<md-option *ngFor=\"let game of games\" [value]=\"game.value\">\n\t\t\t\t\t\t{{game.viewValue}}\n\t\t\t\t\t</md-option>\n\t\t\t\t</md-select>\n\t\t\t\t<p> Selected value: {{selectedValue}} </p>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Select -->\n\n\t\t<!-- Material List -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material List</h2>\n\t\t\t\t<md-list class=\"app-list\">\n\t\t\t\t\t<md-list-item *ngFor=\"let food of foods\">\n\t\t\t\t\t\t<h3 md-line>{{food.name}}</h3>\n\t\t\t\t\t\t<p md-line class=\"demo-secondary-text\">{{food.rating}}</p>\n\t\t\t\t\t</md-list-item>\n\t\t\t\t</md-list>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material List -->\n\n\t\t<!-- Material Grid List -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Grid List</h2>\n\t\t\t\t<md-grid-list cols=\"4\" rowHeight=\"100px\">\n\t\t\t\t\t<md-grid-tile class=\"grid-test-1\" *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\n\t\t\t\t\t\t{{tile.text}}\n\t\t\t\t\t</md-grid-tile>\n\t\t\t\t</md-grid-list>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Grid List -->\n\n\t\t<!-- Material Spinner -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Spinner</h2>\n\t\t\t\t<md-spinner class=\"app-spinner\"></md-spinner>\n\t\t\t\t<md-spinner color=\"accent\" class=\"app-spinner\"></md-spinner>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Spinner -->\n\n\t\t<!-- Material Progress Bar -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Progress Bar</h2>\n\t\t\t\t<label>\n        Indeterminate progress-bar\n        <md-progress-bar\n            class=\"app-progress\"\n            mode=\"indeterminate\"\n            aria-label=\"Indeterminate progress-bar example\"></md-progress-bar>\n      </label>\n\t\t\t\t<label>\n        Determinate progress bar - {{progress}}%\n        <md-progress-bar\n            class=\"app-progress\"\n            color=\"accent\"\n            mode=\"determinate\"\n            [value]=\"progress\"\n            aria-label=\"Determinate progress-bar example\"></md-progress-bar>\n      </label>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Progress Bar -->\n\n\t\t<!-- Material Tab -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Tab</h2>\n\t\t\t\t<md-tab-group>\n\t\t\t\t\t<md-tab label=\"Air Nomads\">\n\t\t\t\t\t\t<p>The Air Nomads were a civilization composed of people who practiced the art of airbending. While nomadic, Air Nomads\n\t\t\t\t\t\t\tdid inhabit four major air temples, each built on remote locations, only easily reachable with flying bison. The Air\n\t\t\t\t\t\t\tNomads were a highly spiritual group of people.</p>\n\t\t\t\t\t</md-tab>\n\t\t\t\t\t<md-tab label=\"Water Tribe\">\n\t\t\t\t\t\t<p>The Water Tribe is a collective term for people, some of whom practice the art of waterbending, who follow a government\n\t\t\t\t\t\t\tsystem in the form of a tribal chiefdom. Although members of the Water Tribe typically inhabit the polar regions,\n\t\t\t\t\t\t\tthe North Pole and the South Pole, there is a small population of waterbenders who inhabit the Foggy Swamp in Earth\n\t\t\t\t\t\t\tKingdom territory. The two main tribes are the Northern Water Tribe at the North Pole and the Southern Water Tribe\n\t\t\t\t\t\t\tat the South Pole.</p>\n\t\t\t\t\t</md-tab>\n\t\t\t\t\t<md-tab label=\"Earth Kingdom\">\n\t\t\t\t\t\t<p>The Earth Kingdom is a massive continent led by an earth monarch and is home to people who practice the art of earthbending.\n\t\t\t\t\t\t\tBeing the largest of the four nations, it is ethnically diverse with a variance of customs and cultural traditions.\n\t\t\t\t\t\t\tThe people of the Earth Kingdom are strong and persistent. The geography of the Earth Kingdom varies tremendously,\n\t\t\t\t\t\t\tranging from wooded forests to blazing deserts, mountainous terrain, and grassy plains.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</md-tab>\n\t\t\t\t\t<md-tab label=\"Fire Nation\">\n\t\t\t\t\t\t<p>The Fire Nation is home to people who practice the art of firebending and is an absolute monarchy led by the Fire Lord.\n\t\t\t\t\t\t\tBeing composed of several major islands and located on the equator, the nation is considered to be an archipelago.\n\t\t\t\t\t\t\tIts economy is the largest and most powerful in the world with a strong industrial sector and advanced technological\n\t\t\t\t\t\t\tdevelopments. The climate is normally humid and warm which allows for a diversity of flora and fauna to thrive.</p>\n\t\t\t\t\t</md-tab>\n\t\t\t\t</md-tab-group>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Tab -->\n\n\t\t<md-card>\n\t\t\t<md-icon>build</md-icon>\n\t\t</md-card>\n\n\t\t<!-- Material Slider -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Slider :: Configuration</h2>\n\n\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t<md-input-container class=\"example-margin\">\n\t\t\t\t\t\t<input mdInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"slider.value\">\n\t\t\t\t\t</md-input-container>\n\t\t\t\t\t<md-input-container class=\"example-margin\">\n\t\t\t\t\t\t<input mdInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"slider.min\">\n\t\t\t\t\t</md-input-container>\n\t\t\t\t\t<md-input-container class=\"example-margin\">\n\t\t\t\t\t\t<input mdInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"slider.max\">\n\t\t\t\t\t</md-input-container>\n\t\t\t\t\t<md-input-container class=\"example-margin\">\n\t\t\t\t\t\t<input mdInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"slider.step\">\n\t\t\t\t\t</md-input-container>\n\t\t\t\t</section>\n\n\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t<md-checkbox class=\"example-margin\" [(ngModel)]=\"slider.showTicks\">Show ticks</md-checkbox>\n\t\t\t\t\t<md-checkbox class=\"example-margin\" [(ngModel)]=\"slider.autoTicks\" *ngIf=\"slider.showTicks\">\n\t\t\t\t\t\tAuto ticks\n\t\t\t\t\t</md-checkbox>\n\t\t\t\t\t<md-input-container class=\"example-margin\" *ngIf=\"slider.showTicks && !slider.autoTicks\">\n\t\t\t\t\t\t<input mdInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"slider.tickInterval\">\n\t\t\t\t\t</md-input-container>\n\t\t\t\t</section>\n\n\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t<md-checkbox class=\"example-margin\" [(ngModel)]=\"slider.thumbLabel\">Show thumb label</md-checkbox>\n\t\t\t\t</section>\n\n\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t<md-checkbox class=\"example-margin\" [(ngModel)]=\"slider.checked\">Checked</md-checkbox>\n\t\t\t\t</section>\n\n\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t<md-checkbox class=\"example-margin\" [(ngModel)]=\"slider.vertical\">Vertical</md-checkbox>\n\t\t\t\t\t<md-checkbox class=\"example-margin\" [(ngModel)]=\"slider.invert\">Inverted</md-checkbox>\n\t\t\t\t</section>\n\n\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t<md-checkbox class=\"example-margin\" [(ngModel)]=\"slider.disabled\">Disabled</md-checkbox>\n\t\t\t\t</section>\n\t\t\t</md-card-content>\n\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Slider Result</h2>\n\t\t\t\t<md-slider class=\"example-margin\" [disabled]=\"slider.disabled\" [invert]=\"slider.invert\" [max]=\"slider.max\" [min]=\"slider.min\"\n\t\t\t\t [step]=\"slider.step\" [thumb-label]=\"slider.thumbLabel\" [tick-interval]=\"slider.tickInterval\" [value]=\"slider.value\" [vertical]=\"slider.vertical\">\n\t\t\t\t</md-slider>\n\t\t\t</md-card-content>\n\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Slider Toggle Result</h2>\n\t\t\t\t<md-slide-toggle [disabled]=\"slider.disabled\" [checked]=\"slider.checked\" (change)=\"slider.checked = !slider.checked\">Slide me!</md-slide-toggle>\n\t\t\t</md-card-content>\n\n\t\t</md-card>\n\t\t<!-- /Material Slider -->\n\n\t\t<!-- Material Menu -->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Menu</h2>\n\t\t\t\t<button md-icon-button [mdMenuTriggerFor]=\"menu\">\n        <md-icon>more_vert</md-icon>\n      </button>\n\t\t\t\t<md-menu #menu=\"mdMenu\">\n\t\t\t\t\t<button md-menu-item>\n          <md-icon>dialpad</md-icon>\n          <span>Redial</span>\n        </button>\n\t\t\t\t\t<button md-menu-item disabled>\n          <md-icon>voicemail</md-icon>\n          <span>Check voicemail</span>\n        </button>\n\t\t\t\t\t<button md-menu-item>\n          <md-icon>notifications_off</md-icon>\n          <span>Disable alerts</span>\n        </button>\n\t\t\t\t</md-menu>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Menu-->\n\n\t\t<!-- Material Dialog-->\n\t\t<md-card>\n\t\t\t<md-card-content>\n\t\t\t\t<h2 class=\"example-h2\">Material Dialog</h2>\n\t\t\t\t<p>Last dialog result: {{lastDialogResult}}</p>\n\t\t\t\t<button md-raised-button (click)=\"openDialog()\">DIALOG</button>\n\t\t\t\t<button md-raised-button (click)=\"showSnackbar()\">SNACKBAR</button>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<!-- /Material Dialog-->\n\t</div>\n</md-sidenav-container>\n\n<!-- Material Fab-->\n<span class=\"app-action\" [class.m2app-dark]=\"isDarkTheme\">\n  <button md-fab><md-icon>check circle</md-icon></button>\n</span>\n<!-- /Material Fab-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-sidenav-container.m2app-dark {\n  background: black; }\n\n.app-content {\n  padding: 5px; }\n\n.app-content md-card {\n  margin: 5px; }\n\n.app-sidenav {\n  min-width: 200px; }\n\n.app-content md-checkbox {\n  margin: 10px; }\n\n.app-toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px; }\n\n.app-spinner {\n  height: 30px;\n  width: 30px;\n  display: inline-block; }\n\n.app-input-icon {\n  font-size: 16px; }\n\n.app-menu-button {\n  padding: 0;\n  min-width: 50px; }\n\n.app-button {\n  margin: 5px; }\n\n.app-list {\n  border: 1px solid rgba(0, 0, 0, 0.12); }\n\n.app-progress {\n  margin: 5px; }\n\n.example-h2 {\n  margin: 10px 0;\n  color: rgba(0, 0, 0, 0.54); }\n\n.example-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 10px; }\n\n.mat-slider-horizontal {\n  width: 300px; }\n\n.mat-slider-vertical {\n  height: 300px; }\n\nmd-chip {\n  max-width: 200px; }\n\n.app-sidebar-button {\n  width: inherit; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppComponent = (function () {
    function AppComponent(_dialog, _snackbar) {
        var _this = this;
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.isDarkTheme = false;
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.games = [
            { value: 'rts-0', viewValue: 'Starcraft' },
            { value: 'rpg-1', viewValue: 'Baldur\'s Gate' },
            { value: 'fps-2', viewValue: 'Doom' }
        ];
        this.progress = 0;
        this.slider = {
            'autoTicks': false,
            'disabled': false,
            'invert': false,
            'max': 100,
            'min': 0,
            'showTicks': false,
            'step': 1,
            'thumbLabel': false,
            'value': 0,
            'vertical': false,
            'tickInterval': 1,
            'checked': true
        };
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
        // Update the value for the progress-bar on an interval.
        setInterval(function () {
            _this.progress = (_this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this._dialog.open(DialogContentComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.lastDialogResult = result;
        });
    };
    AppComponent.prototype.showSnackbar = function () {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    };
    Object.defineProperty(AppComponent.prototype, "tickInterval", {
        get: function () {
            return this.slider.showTicks ? (this.slider.autoTicks ? 'auto' : this.slider.tickInterval) : null;
        },
        set: function (v) {
            this.slider.tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

var DialogContentComponent = (function () {
    function DialogContentComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            template: "\n    <p>This is a dialog</p>\n    <p>\n      <label>\n        This is a text box inside of a dialog.\n        <input #dialogInput>\n      </label>\n    </p>\n    <p> <button md-button (click)=\"dialogRef.close(dialogInput.value)\">CLOSE</button> </p>\n  ",
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Optional */])()),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object])
    ], DialogContentComponent);
    return DialogContentComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* DialogContentComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* DialogContentComponent */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map