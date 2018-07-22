import {
    Ajax
  } from "../utils/ajax";
  
  export class Comments {
    constructor(target) {
      this.target = target;
      this.render();
      Ajax.get(
        (comments) => {
          this.renderList(comments);
        },
        (xhr) => {
          console.error(xhr.status);
        });
    }
  
    render() {
      this.ul = document.createElement('ul');
      this.target.appendChild(this.ul);
      this.span = document.createElement('span');
      this.target.appendChild(this.span);
    }
  
    renderList(comments) {
      comments.forEach((item) => {
        
        const li = document.createElement('li');
        li.textContent = item.title;

        const span = document.createElement('span');
        span.textContent = item.title;

        const authorEl = document.createElement('span');
        authorEl.textContent = item.author;

        const textEl = document.createElement('span');
        textEl.textContent = item.text;
      
        this.ul.appendChild(li);
        this.span.appendChild(span);
      })
    }
  }