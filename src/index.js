import timer from './modules/timer';
import menu from './modules/menu';
import modal from '/modules/modal';
import validation from '/modules/validation';
import tabs from '/modules/tabs';
import slider from '/modules/slider';
import calc from '/modules/calc';
import sendForm from './modules/sendForm';


timer('22 october 6:50:00 2022');
menu();
modal();
validation();
tabs();
slider();
calc();
sendForm({ formId: 'form1',
           someElem: [
           {
            type: 'block',
            id: 'total'
           } 
        ]
});
