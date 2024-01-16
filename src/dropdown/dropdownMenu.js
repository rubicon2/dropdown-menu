import './dropdown.css';
import DropdownMenuItem from './dropdownMenuItem';

export default class DropdownMenu {
  static #mouseLeaveTimeoutMillis = 350;

  constructor(menuName, ...dropdownLinks) {
    this.element = document.createElement('div');
    this.element.classList.add('dropdown-menu');

    this.coverElement = this.#createMenuCover(menuName);
    this.menuItemElements = this.#createMenuItems(dropdownLinks);
    this.#hideMenu();

    this.timeout = null;

    // If function is triggered by element events, must wrap in arrow function.
    // Otherwise, 'this' will refer to html element and not the object created by this constructor/class.
    this.element.onmouseenter = () => this.#showMenu();
    // These nested arrow functions are ugly, but don't want to put the timeout in the #hideMenu function.
    // Also need to store a ref to the timeout so it can be cleared if onmouseenter is triggered before timeout goes off.
    this.element.onmouseleave = () => {
      this.timeout = setTimeout(() => {
        this.#hideMenu();
      }, DropdownMenu.#mouseLeaveTimeoutMillis);
    };
  }

  #createMenuCover(menuName) {
    const coverElement = document.createElement('div');
    coverElement.classList.add('dropdown-menu-item', 'dropdown-menu-cover');
    coverElement.innerText = menuName;
    this.element.appendChild(coverElement);
    return coverElement;
  }

  #createMenuItems(dropdownLinks) {
    const menuItemElements = [];
    for (let i = 0; i < dropdownLinks.length; i += 1) {
      const menuItem = new DropdownMenuItem(dropdownLinks[i]);
      menuItemElements.push(this.element.appendChild(menuItem.element));
    }
    return menuItemElements;
  }

  #showMenu() {
    clearTimeout(this.timeout);
    for (let i = 0; i < this.menuItemElements.length; i += 1) {
      this.menuItemElements[i].style.transform = `translate(0)`;
    }
  }

  #hideMenu() {
    for (let i = 0; i < this.menuItemElements.length; i += 1) {
      this.menuItemElements[i].style.transform =
        `translate(0, ${(i + 1) * -100}%)`;
    }
  }
}
