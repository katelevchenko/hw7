import './accordion_menu.scss';

export class AccordionMenu {
    constructor(targetEl) {
        this.target = targetEl;
        this.isEnabled = false;
        this.render();
        this.headershop.addEventListener('click', () => this.toggle());
    }

    accordionmenuOpen() {
        this.headershop.classList.add('headershop__link_active');
        this.isEnabled = true;
    }

    accordionmenuClosed() {
        this.headershop.classList.remove('headershop__link_active');
        this.isEnabled = false;
    }
    
    toggle() {
        if(this.isEnabled) {
            this.accordionmenuClosed();
        }
        else {
            this.accordionmenuOpen();
        }
    }
    render() {
        this.item = document.createElement('a');
		this.item.textContent = 'SHOP';
        this.item.classList.add('headershop__link_item');
        
        this.arrow = document.createElement('span');
        this.arrow.classList.add('headershop__link_arrow');
         
		this.panel = document.createElement('div');
		this.panel.textContent = 'Matter is Matter';
		this.panel.classList.add('headershop__link_panel');
		
		this.link = document.createElement('li');
       
    
        this.link.appendChild(this.item);
        this.link.appendChild(this.arrow);
        this.link.appendChild(this.panel);
        
		this.headershop = document.createElement('ul');
        this.headershop.classList.add('headershop__link');
        this.headershop.appendChild(this.link);
        
        this.target.appendChild(this.headershop);

        this.itema = document.createElement('a');
		this.itema.textContent = 'ABOUT';
        this.itema.classList.add('headershop__linka_itema');
        
        this.arrowa = document.createElement('span');
        this.arrowa.classList.add('headershop__linka_arrowa');
        
		this.panela = document.createElement('div');
		this.panela.textContent = 'Matter is Matter';
		this.panela.classList.add('headershop__linka_panela');
		
		this.linka = document.createElement('li');
        this.linka.classList.add('headershop__linka');
    
        this.linka.appendChild(this.itema);
        this.linka.appendChild(this.arrowa);
        this.linka.appendChild(this.panela);

        this.headershopa = document.createElement('ul');
        this.headershopa.classList.add('headershopa__linka');
        this.headershopa.appendChild(this.linka);

        this.target.appendChild(this.headershopa);
        

    }
}