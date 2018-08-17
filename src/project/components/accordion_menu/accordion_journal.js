import './accordion_menu.scss';

export class AccordionJournal {
    constructor(targetEl) {
        this.target = targetEl;
        this.isEnabled = false;
        this.render();
        this.link.addEventListener('click', () => this.toggle());
    }

    accordionjournalOpen() {
        this.target.classList.add('headershop_active');
        this.isEnabled = true;
    }

    accordionjournalClosed() {
        this.target.classList.remove('headershop_active');
        this.isEnabled = false;
    }
    
    toggle() {
        if(this.isEnabled) {
            this.accordionjournalClosed();
        }
        else {
            this.accordionjournalOpen();
        }
    }
    render() {
        this.item = document.createElement('a');
		this.item.textContent = 'JOURNAL';
        this.item.classList.add('headershop__link_item');
        
        
		this.arrow = document.createElement('span');
        this.arrow.classList.add('headershop__link_arrow');
        
        
		this.panel = document.createElement('div');
		this.panel.textContent = 'Jeans Jackets Pants';
        this.panel.classList.add('headershop__link_panel');  
    
        
		this.link = document.createElement('li');
        this.link.classList.add('headershop__link');
        
        this.link.appendChild(this.item);
        this.link.appendChild(this.arrow);
        this.link.appendChild(this.panel);
        
        
		this.headershop = document.createElement('ul');
		this.headershop.classList.add('headershop');
        this.headershop.appendChild(this.link);
        
        this.target.appendChild(this.headershop);
        this.target.classList.add('headershop');
      
    }
}