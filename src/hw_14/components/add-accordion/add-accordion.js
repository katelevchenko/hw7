import { Accordion } from "../accordion";
import './add-accordion.scss';

export class AddAccordion {
  constructor(targetEl) {
    this.targetEl = targetEl;
    this.accordions = [];
    this.render();
  }

  render() {
    this.out = document.createElement('div');
    this.out.classList.add('accordionadd__out');

    this.targetEl.appendChild(this.out);
    this.targetEl.classList.add('accordionadd')
    this.renderControls();
  }
  renderControls() {
    this.accordionAdd = document.createElement('button');
    this.accordionAdd.classList.add('accordionadd__btn');
    this.accordionAdd.textContent = 'Add Accordion';
    this.accordionAdd.addEventListener('click', () => this.add());
    this.targetEl.appendChild(this.accordionAdd);
  }

  add() {
    const accordionContainer = document.createElement('div');
    const accordion = new Accordion(accordionContainer);

    this.accordions.push(accordion);
    this.out.appendChild(accordionContainer);
  }
}