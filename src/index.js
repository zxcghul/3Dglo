import timer from './modules/timer';
import menu from './modules/menu';
import modal from '/modules/modal';
import validation from '/modules/validation';
import tabs from '/modules/tabs';
import slider from '/modules/slider';
import calc from '/modules/calc';
import sendForm from './modules/sendForm';
import slowScrollLink from './modules/slowScroll';
import jumpElement from './modules/jumpElement';


timer('22 october 6:50:00 2022');
menu();
modal();
validation();
tabs();
slider();
calc();
jumpElement();
slowScrollLink();
sendForm({ formId: 'form1',
           someElem: [
           {
            type: 'block',
            id: 'total'
           } 
        ]
});
sendForm({ formId: 'form3',
           someElem: [
           {
            type: 'block',
            id: 'total'
           } 
        ]
});
sendForm({ formId: 'form2',
           someElem: [
           {
            type: 'block',
            id: 'total'
           } 
        ]
});
