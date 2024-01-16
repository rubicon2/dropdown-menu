import './style.css';
import DropdownMenu from './dropdown/dropdownMenu';

const navBar = document.createElement('div');
navBar.classList.add('nav-bar');
document.body.appendChild(navBar);

const dropdownMenu = new DropdownMenu(
  'My Menu',
  {
    href: '#',
    innerText: 'Link 1',
    onclick: () => alert('Link 1 clicked!'),
  },
  {
    href: '#',
    innerText: 'Link 2',
    onclick: () => alert('Link 2 clicked!'),
  },
  {
    href: '#',
    innerText: 'Link 3',
    onclick: () => alert('Link 3 clicked!'),
  },
);

navBar.appendChild(dropdownMenu.element);

const dropdownMenu2 = new DropdownMenu(
  'Cream Menu',
  {
    href: '#',
    innerText: 'Ice Cream',
    onclick: () => alert('Link 1 clicked!'),
  },
  {
    href: '#',
    innerText: 'Really Nice Ice Cream',
    onclick: () => alert('Link 2 clicked!'),
  },
  {
    href: '#',
    innerText: 'Delicious Ice Cream',
    onclick: () => alert('Link 3 clicked!'),
  },
);

navBar.appendChild(dropdownMenu2.element);
