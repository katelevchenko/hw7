import './hamburger_menu.scss';

export class Hamburger {
    constructor(targetEl) {
        this.target = targetEl;
        this.isEnabled = false;
        this.render();
        this.menuicon.addEventListener('click', () => this.toggle());
    }

    hamburgermenuOpen() {
        this.menuicon.classList.add('hamburger_panel_active');
        this.isEnabled = true;
    }

    hamburgermenuClosed() {
        this.menuicon.classList.remove('hamburger_panel_active');
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
        this.hamburger = document.createElement('div');
        this.menuicon = document.createElement('div');
        this.panel = document.createElement('div');
        this.menubar = document.createElement('ul');
        this.menushop = document.createElement('li');
        this.elementshop = document.createElement('a');
        this.menufabric = document.createElement('li');
        this.elementfabric = document.createElement('a');
        this.menujournal = document.createElement('li');
        this.elementjournal = document.createElement('a');
        this.menuabout = document.createElement('li');
        this.elementabout = document.createElement('a');

        this.hamburger.classList.add('hamburger');
        this.menuicon.classList.add('hamburger__panel-icon');
        this.panel.classList.add('hamburger__panel');
        this.menubar.classList.add('hamburger__panel');
        this.menushop.classList.add('hamburger__panel-icon');
        this.elementshop.classList.add('hamburger__panel-icon_shop');
        this.menufabric.classList.add('hamburger__panel-icon');
        this.elementfabric.classList.add('hamburger__panel-icon_fabric');
        this.menujournal.classList.add('hamburger__panel-icon');
        this.elementjournal.classList.add('hamburger__panel-icon_journal');
        this.menuabout.classList.add('hamburger__panel-icon');
        this.elementabout.classList.add('hamburger__panel-icon_about');
      
        this.hamburger.appendChild(this.panel);
        this.panel.appendChild(this.menuicon);
        this.menuicon.appendChild(this.menubar);
        this.menubar.appendChild(this.menushop);
        this.menubar.appendChild(this.menufabric);
        this.menubar.appendChild(this.menujournal);
        this.menubar.appendChild(this.menuabout);
        this.menushop.appendChild(this.elementshop);
        this.menufabric.appendChild(this.elementfabric);
        this.menujournal.appendChild(this.elementjournal);
        this.menuabout.appendChild(this.elementabout);

        this.target.appendChild(this.hamburger);
      }
}