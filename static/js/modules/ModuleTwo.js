import ModuleOne from 'ModuleOne';

require('../../less/second.less');

class ModuleTwo extends ModuleOne {
    init () {
        console.log('Hello, i\'m module two!');
    }
}

export default ModuleTwo;
