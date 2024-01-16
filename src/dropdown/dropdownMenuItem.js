import './dropdown.css';

function CreateLink(link) {
  const element = document.createElement('a');
  element.href = link.href;
  element.innerText = link.innerText;
  element.onclick = link.onclick;
  return element;
}

export default class DropdownMenuItem {
  constructor(link) {
    this.element = document.createElement('div');
    this.element.classList.add('dropdown-menu-item');
    this.element.appendChild(CreateLink(link));
  }
}
