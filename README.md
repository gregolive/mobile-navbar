# Mobile Navbar

A set of 3 mobile-friendly navbars: an expandable dropdown nav, a side drawer, and a tabbed nav.

At screen sizes above 768px the dropdown and side drawer navs behave like a typical header nav with menu links appearing on the right side of the navbar.

[Live demo](https://gregolive.github.io/dynamic-ui-design/#mobile-menu-demo) 👈

[npm package](https://www.npmjs.com/package/@gregolive/mobile-navbar) 📦

## Prerequisites

For icons to display, please install [font-awesome](https://www.npmjs.com/package/font-awesome).

## Installation

On the command line run:

```
npm i @gregolive/mobile-navbar
```

Import the function(s) in your Javascript file with:

```
import { navbarExpand, navbarSide, navbarTabs } from '@gregolive/mobile-navbar';
```

## Usage

Pass 1 or 2 arguments into the selected function depending on the navbar being used:

1. <code>navbarExpand</code> and <code>navbarSide</code> are first passed a <code>title</code> object for the text that appears on the left side of the navbar and the link that opens when it is clicked

```
const myTitle = { text: 'My Navbar', href: '#' };
```

2. All 3 navbars require a <code>links</code> object containing the text, href and font-awesome icon class for each menu item

```
const myLinks = [
  { text: 'News', href: '#', icon: 'fa-solid fa-newspaper' },
  { text: 'Contact', href: '#', icon: 'fa-solid fa-address-card' },
  { text: 'About', href: '#', icon: 'fa-solid fa-circle-info' },
];
```

Append to the DOM.

Examples:

```
// 1) Expandable dropdown nav
const nav1 = navbarExpand(myTitle, myLinks);
document.body.appendChild(nav1);

// 2) Side drawer nav
const nav2 = navbarSide(myTitle, myLinks);
document.body.appendChild(nav2);

// 3) Tabbed nav
const nav3 = navbarTabs(myLinks);
document.body.appendChild(nav3);
```

Default styling (colors, padding, etc.) can be overridden by overriding the CSS variables in:

```
:root {
  ...
}
```

## License

ISC