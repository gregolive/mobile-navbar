// Load CSS
import './navbar-expand.css';

// Navbar functionality

const expandMenu = (e) => {
  const menuClass = e.currentTarget.parentNode.nextSibling.classList;
  if (menuClass.contains('show')) {
    menuClass.remove('show');
    menuClass.add('close');
  } else {
    menuClass.add('show');
    menuClass.remove('close');
  }
};

// Build nabvar elements

const navbarTitle = (title) => {
  const navTitle = document.createElement('a');
  navTitle.className = 'navbar-title';
  navTitle.href = title.href;
  navTitle.textContent = title.text;

  return navTitle;
};

const navbarBtn = () => {
  const button = document.createElement('button');
  const icon = document.createElement('i');

  icon.className = 'fa-solid fa-bars';

  button.className = 'navbar-btn';
  button.setAttribute('type', 'button');
  button.appendChild(icon);
  button.addEventListener('click', expandMenu);

  return button;
};

const navbarLink = (link) => {
  const navLink = document.createElement('a');
  navLink.className = 'navbar-link';
  navLink.href = link.href;
  navLink.textContent = link.text;

  if (typeof link.icon !== 'undefined') {
    const icon = document.createElement('i');
    icon.className = link.icon;
    navLink.insertBefore(icon, navLink.firstChild);
  }

  return navLink;
};

const navbarMenu = (links) => {
  const menu = document.createElement('div');
  menu.className = 'navbar-menu menu-expand close';
  links.forEach((link) => menu.appendChild(navbarLink(link)));

  return menu;
};

const navbarExpand = (title, menuLinks) => {
  const nav = document.createElement('nav');
  const navMain = document.createElement('div');

  navMain.className = 'navbar-top';
  navMain.appendChild(navbarTitle(title));
  navMain.appendChild(navbarBtn());

  nav.className = 'navbar';
  nav.appendChild(navMain);
  nav.appendChild(navbarMenu(menuLinks));

  return nav;
};

export default navbarExpand;
