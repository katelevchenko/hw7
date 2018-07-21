import './accordion.scss';

export class Accordion {
    constructor(targetEl) {
        this.target = targetEl;
        this.isEnabled = false;
        this.render();
        this.button.addEventListener('click', () => this.toggle());
    }

    accordionOpen() {
        this.target.classList.add('accordion_active');
        this.isEnabled = true;
    }

    accordionClosed() {
        this.target.classList.remove('accordion_active');
        this.isEnabled = false;
    }
    
    toggle() {
        if(this.isEnabled) {
            this.accordionClosed();
        }
        else {
            this.accordionOpen();
        }
    }
    render() {
        this.button = document.createElement('button');
        this.panel = document.createElement('div');
    
        this.button.classList.add('accordion__button');
        this.panel.classList.add('accordion__panel');
    
        this.button.textContent = 'ACCORDION';
        this.panel.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore';
    
        this.target.appendChild(this.button);
        this.target.appendChild(this.panel);
        this.target.classList.add('accordion');
      }
}
