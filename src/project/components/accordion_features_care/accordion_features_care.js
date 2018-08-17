import './accordion_features_care.scss';

export class AccordionFC {
    constructor(targetEl) {
        this.target = targetEl;
        this.isEnabled = false;
        this.render();
        this.accordion.addEventListener('click', () => this.toggle());
    }

    accordionfcOpen() {
        this.target.classList.add('product_active');
        this.isEnabled = true;
    }

    accordionfcClosed() {
        this.target.classList.remove('product_active');
        this.isEnabled = false;
    }
    
    toggle() {
        if(this.isEnabled) {
            this.accordionfcClosed();
        }
        else {
            this.accordionfcOpen();
        }
    }
    render() {		
        this.accordion = document.createElement('button');
        this.line = document.createElement('span');
        this.plus = document.createElement('span');
        this.panel = document.createElement('div');
    
        this.accordion.classList.add('product__accordion');
        this.line.classList.add('product__line');
        this.plus.classList.add('product__plus');
        this.panel.classList.add('product__panel');
    
        this.accordion.textContent = 'Features';
        this.panel.textContent = 'A perfect place to peruse an insider perspective, long-form interviews and personal essays';
    
        this.target.appendChild(this.accordion);
        this.target.appendChild(this.panel);
        this.target.appendChild(this.line);
        this.target.appendChild(this.plus);
        this.target.classList.add('product');
          }
        }

export class AccordionFC2 {
    constructor(targetEl) {
        this.target = targetEl;
        this.isEnabled = false;
        this.render();
        this.accordion.addEventListener('click', () => this.toggle());
    }

    accordionfc2Open() {
        this.target.classList.add('product_active');
        this.isEnabled = true;
    }

    accordionfc2Closed() {
        this.target.classList.remove('product_active');
        this.isEnabled = false;
    }
    
    toggle() {
        if(this.isEnabled) {
            this.accordionfc2Closed();
        }
        else {
            this.accordionfc2Open();
        }
    }
    render() {
        this.accordion = document.createElement('button');
        this.line = document.createElement('span');
        this.plus = document.createElement('span');
        this.panel = document.createElement('div');
    
        this.accordion.classList.add('product__accordion');
        this.line.classList.add('product__line');
        this.plus.classList.add('product__plus');
        this.panel.classList.add('product__panel');
    
        this.accordion.textContent = 'Fabric Care';
        this.panel.textContent = 'Cotton is a natural fibre collected from the cotton plant and spun into thread';
    
        this.target.appendChild(this.accordion);
        this.target.appendChild(this.panel);
        this.target.appendChild(this.line);
        this.target.appendChild(this.plus);
        this.target.classList.add('product');
      }
}
