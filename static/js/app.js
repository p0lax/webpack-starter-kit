var ModuleOne = require('./modules/ModuleOne.es6');
require('../templates/index.html');
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