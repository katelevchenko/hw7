import './counter.scss';

export class Counter {
    constructor(targetEl) {
        this.target = targetEl;
        this.isEnabled = false;
        this.render();
        this.down.addEventListener('click', () => this.counter());
        this.up.addEventListener('click', () => this.counter());
    }

    counterup() {
        this.number.innerHTML = +this.number.innerHTML + 1;
    }

    counterdown() {
        this.number.innerHTML = +this.number.innerHTML - 1;
    }

    counter() {
        if (event.target.classList('.counter__up')) {
            counterup();
          } else if (event.target.classList('.counter__down')) {
            counterdown();
          }
    }
    

    render() {
        this.counter = document.createElement('div');
        this.counter.classList.add('counter');
        
        this.down = document.createElement('span');
        this.down.classList.add('counter__down');
        this.counter.appendChild(this.down);

        this.number = document.createElement('span');
        this.number.classList.add('counter__number');
        this.number.textContent = '0';
        this.counter.appendChild(this.number);

        this.up = document.createElement('span');
        this.up.classList.add('counter__up');
        this.counter.appendChild(this.up);
        
        this.target.classList.add('counter__down');
        this.target.classList.add('counter__up');
    }
}