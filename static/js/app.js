var ModuleOne = require('./modules/ModuleOne.es6');
var app = {
    modules: [],

    init: function () {
        console.log('I\'m started!!!');
        this.modules.push(new ModuleOne());
    }
};

$(function () {
    app.init();
});