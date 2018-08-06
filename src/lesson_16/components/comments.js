import {
  Ajax
} from "../utils/ajax";

export class TaskList {
  constructor(target) {
    this.target = target;
    this.render();
    Ajax.get(
      'http://localhost:4001/list',
      (list) => {
        this.renderList(list);
      },
      (xhr) => {
        console.error(xhr.status);
      }
    );

    Ajax.post(
      'http://localhost:4001/list', 
      {
        title: 'HELLO WORLD'
      },
      (resp) => {
        console.log(resp);
      },
      (e) => {
        console.error(e);
      }
    )
  }

  render() {
    this.ul = document.createElement('ul');
    this.target.appendChild(this.ul);
  }

  renderList(list) {
    list.forEach((item) => {
      const li = document.createElement('li');

      li.textContent = item.title;

      this.ul.appendChild(li);
    })
  }
}