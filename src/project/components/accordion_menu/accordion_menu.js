import './accordion_menu.scss';

export class AccordionMenu {
    constructor(targetElement) {
        this.target = targetElement;
        this.render();
        this.attachEvents();
    }

    MenuActive(menu, styleName) {
        menu.classList.add(styleName); 
    }

    resetMenuActive() {
        this.headershop.classList.remove('headershop__link_active');
        this.headershopfabric.classList.remove('headershop__link_active');
        this.headershopjournal.classList.remove('headershop__link_active');
        this.headershopabout.classList.remove('headershop__link_active');
    }

    attachEvents() {
        this.headershop.addEventListener('click', () => {
            this.resetMenuActive();
            this.MenuActive(this.headershop, 'headershop__link_active');
        });
        this.headershopfabric.addEventListener('click', () => {
            this.resetMenuActive();
            this.MenuActive(this.headershopfabric, 'headershop__link_active');
        });
        this.headershopjournal.addEventListener('click', () => {
            this.resetMenuActive();
            this.MenuActive(this.headershopjournal, 'headershop__link_active');
        });
        this.headershopabout.addEventListener('click', () => {
            this.resetMenuActive();
            this.MenuActive(this.headershopabout, 'headershop__link_active');
        });
        
    }
    render() {
        this.item = document.createElement('a');
		this.item.textContent = 'SHOP';
        this.item.classList.add('headershop__link_item');
        
        this.arrow = document.createElement('span');
        this.arrow.classList.add('headershop__link_arrow');
         
		this.panel = document.createElement('div');
		this.panel.textContent = 'Jeans Jackets Pants';
		this.panel.classList.add('headershop__link_panel');
		
		this.link = document.createElement('li');
       
        this.link.appendChild(this.item);
        this.link.appendChild(this.arrow);
        this.link.appendChild(this.panel);
        
		this.headershop = document.createElement('ul');
        this.headershop.classList.add('headershop__link');
        this.headershop.classList.add('headershop__link_ctive');
        this.headershop.appendChild(this.link);



        this.itemfabric = document.createElement('a');
		this.itemfabric.textContent = 'FABRIC';
        this.itemfabric.classList.add('headershop__link_item');
        
        this.arrowfabric = document.createElement('span');
        this.arrowfabric.classList.add('headershop__link_arrow');
         
		this.panelfabric = document.createElement('div');
		this.panelfabric.textContent = 'Cotton Silk Linen Wool';
		this.panelfabric.classList.add('headershop__link_panel');
		
		this.linkfabric = document.createElement('li');
       
        this.linkfabric.appendChild(this.itemfabric);
        this.linkfabric.appendChild(this.arrowfabric);
        this.linkfabric.appendChild(this.panelfabric);
        
		this.headershopfabric = document.createElement('ul');
        this.headershopfabric.classList.add('headershop__link');
        this.headershopfabric.appendChild(this.linkfabric);


        this.itemjournal = document.createElement('a');
		this.itemjournal.textContent = 'JOURNAL';
        this.itemjournal.classList.add('headershop__link_item');
        
        this.arrowjournal = document.createElement('span');
        this.arrowjournal.classList.add('headershop__link_arrow');
         
		this.paneljournal = document.createElement('div');
		this.paneljournal.textContent = 'Jeans Jackets Pants';
		this.paneljournal.classList.add('headershop__link_panel');
		
		this.linkjournal = document.createElement('li');
       
        this.linkjournal.appendChild(this.itemjournal);
        this.linkjournal.appendChild(this.arrowjournal);
        this.linkjournal.appendChild(this.paneljournal);
        
		this.headershopjournal = document.createElement('ul');
        this.headershopjournal.classList.add('headershop__link');
        this.headershopjournal.appendChild(this.linkjournal);

        
        this.itemabout = document.createElement('a');
		this.itemabout.textContent = 'ABOUT';
        this.itemabout.classList.add('headershop__link_item');
        
        this.arrowabout = document.createElement('span');
        this.arrowabout.classList.add('headershop__link_arrow');
         
		this.panelabout = document.createElement('div');
		this.panelabout.textContent = 'Matter is Matter';
		this.panelabout.classList.add('headershop__link_panel');
		
		this.linkabout= document.createElement('li');
       
        this.linkabout.appendChild(this.itemabout);
        this.linkabout.appendChild(this.arrowabout);
        this.linkabout.appendChild(this.panelabout);
        
		this.headershopabout = document.createElement('ul');
        this.headershopabout.classList.add('headershop__link');
        this.headershopabout.appendChild(this.linkabout);
		
        
        this.target.appendChild(this.headershop);
        this.target.appendChild(this.headershopfabric);
        this.target.appendChild(this.headershopjournal);
        this.target.appendChild(this.headershopabout);

    }
}