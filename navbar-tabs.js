// Load CSS
import './navbar-tabs.css';

// Navbar functionality

const activateTab = (e) => {
  const clickedTab = e.currentTarget;
  const activeTab = document.querySelector('.active-tab');
  if (clickedTab !== activeTab) {
    clickedTab.classList.add('active-tab');
    activeTab.classList.remove('active-tab');
  }
};

// Build nabvar elements

const menuTab = (link, index) => {
  const tab = document.createElement('a');
  tab.className = 'navtab-link';
  tab.href = link.href;
  tab.addEventListener('click', activateTab);

  if (index === 0) {
    tab.classList.add('active-tab');
  }

  if (typeof link.icon !== 'undefined') {
    const icon = document.createElement('icon');
    icon.className = `${link.icon} navtab-icon`;
    tab.appendChild(icon);
  }

  if (typeof link.text !== 'undefined') {
    tab.innerHTML += link.text;
  }

  return tab;
};

const navbarTabs = (menuLinks) => {
  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-tabs';
  menuLinks.forEach((link, index) => nav.appendChild(menuTab(link, index)));

  return nav;
};

export default navbarTabs;
