import ModuleOne from './modules/ModuleOne.js';

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
