import './hamburger_menu.scss';

export class Hamburger {
    constructor(targetEl) {
        this.target = targetEl;
        this.isEnabled = false;
        this.render();
        this.menuicon.addEventListener('click', () => this.toggle());
    }

    hamburgermenuOpen() {
        this.target.classList.add('hamburger_active');
        this.isEnabled = true;
    }

    hamburgermenuClosed() {
        this.target.classList.remove('hamburger_active');
        this.isEnabled = false;
    }
    
    toggle() {
        if(this.isEnabled) {
            this.hamburgermenuClosed();
        }
        else {
            this.hamburgermenuOpen();
        }
    }
    render() {

        this.menuicon = document.createElement('div');
        this.menuicon.classList.add('hamburger__panel-icon');
        this.target.appendChild(this.menuicon);
       
        this.panel = document.createElement('div');
        this.panel.classList.add('hamburger__panel');
        this.target.appendChild(this.panel);

        this.menubar = document.createElement('ul');
        this.menubar.classList.add('hamburger__panel-lista');
        this.panel.appendChild(this.menubar);
        

        this.menushop = document.createElement('li');
        this.menushop.classList.add('hamburger__panel-list');
        this.menubar.appendChild(this.menushop);

        this.elementshop = document.createElement('a');
        this.elementshop.classList.add('hamburger__panel-list_shop');
        this.elementshop.textContent = 'SHOP';
        this.menushop.appendChild(this.elementshop);

        this.menufabric = document.createElement('li');
        this.menufabric.classList.add('hamburger__panel-list');
        this.menubar.appendChild(this.menufabric);

        this.elementfabric = document.createElement('a');
        this.elementfabric.classList.add('hamburger__panel-list_fabric');
        this.elementfabric.textContent = 'FABRIC';
        this.menufabric.appendChild(this.elementfabric);

        this.menujournal = document.createElement('li');
        this.menujournal.classList.add('hamburger__panel-list');
        this.menubar.appendChild(this.menujournal);

        this.elementjournal = document.createElement('a');
        this.elementjournal.classList.add('hamburger__panel-list_journal');
        this.elementjournal.textContent = 'JOURNAL';
        this.menujournal.appendChild(this.elementjournal);

        this.menuabout = document.createElement('li');
        this.menuabout.classList.add('hamburger__panel-list');
        this.menubar.appendChild(this.menuabout);

        this.elementabout = document.createElement('a');
        this.elementabout.classList.add('hamburger__panel-list_about');
        this.elementabout.textContent = 'ABOUT';
        this.menuabout.appendChild(this.elementabout);

        this.target.classList.add('hamburger');
    }
}      
        
        
       

        
        
        
        
        
        
        
       
        
        
        
      
        
       
        
        
        
        
       
       
       