import './hamburger_menu.scss';

export class Hamburger {
    constructor(targetEl) {
        this.target = targetEl;
        this.isEnabled = false;
        this.render();
        this.hamburger.addEventListener('click', () => this.toggle());
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
        this.hamburger = document.createElement('div');
        this.menu = document.getElementById('hm');

        this.panel = document.createElement('div');

        this.hamburger.classList.add('hamburger');
        this.menu.classList.add('hamburger_menu')
        this.panel.classList.add('hamburger_panel');
    
        this.panel.textContent = 'Explore the latest fashion trends and fashion news on Vogue';  

        this.target.appendChild(this.menu);
        this.target.appendChild(this.panel);
        this.target.classList.add('hamburger');
      }
}