import './hw_14.scss';
import { Accordion } from './components/accordion';
import { AddAccordion } from './components/add-accordion/add-accordion';

const accordion = new Accordion(document.querySelector('#accordion1'));
const addaccordion = new AddAccordion(document.querySelector('#add-accordion1'));