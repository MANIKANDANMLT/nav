/* bubble-nav */
/*  NAV is a free and opensource web framework used to build easy navigation bars (navbars) in website and web-applications written in "css" and "javascript" as a HTML tags
Designed and Developed with ❤ for the devlopers by MANIKANDAN SRINIVASALU ,co-developed by SNEHA.M */

class BUBBLENAV extends HTMLElement {
    connectedCallback() {
      const pages = this.getAttribute('pages').split(',');
      const links = this.getAttribute('links').split(',');
      const color = this.getAttribute('color');
      const root = document.querySelector(':root');
      root.style.setProperty('--mycolor',color)
      const hovercolor = this.getAttribute('hovercolor');
      root.style.setProperty('--hovercolor',hovercolor)
      const font = this.getAttribute('font');
      root.style.setProperty('--font',font)
      const bubble1_x = this.getAttribute('bubble1-x');
      root.style.setProperty('--bubble1-x',bubble1_x);
      const bubble1_y = this.getAttribute('bubble1-y');
      root.style.setProperty('--bubble1-y',bubble1_y);
      const bubble2_x = this.getAttribute('bubble2-x');
      root.style.setProperty('--bubble2-x',bubble2_x);
      const bubble2_y = this.getAttribute('bubble2-y');
      root.style.setProperty('--bubble2-y',bubble2_y);
      const bubble3_x = this.getAttribute('bubble3-x');
      root.style.setProperty('--bubble3-x',bubble3_x);
      const bubble3_y = this.getAttribute('bubble3-y');
      root.style.setProperty('--bubble3-y',bubble3_y);
      const bubble4_x = this.getAttribute('bubble4-x');
      root.style.setProperty('--bubble4-x',bubble4_x)
      const bubble4_y = this.getAttribute('bubble4-y');
      root.style.setProperty('--bubble4-y',bubble4_y)
      const menucolor = this.getAttribute('menucolor');
      root.style.setProperty('--menucolor',menucolor)
      const menutextcolor = this.getAttribute('menutext-color');
      root.style.setProperty('--menutext-color',menutextcolor)
      const bubbletextcolor = this.getAttribute('bubbletext-color');
      root.style.setProperty('--bubbletext-color',bubbletextcolor)
      const menuborder = this.getAttribute('menuborder');
      root.style.setProperty('--menuborder',menuborder)
      const bubbleborder = this.getAttribute('bubbleborder');
      root.style.setProperty('--bubbleborder',bubbleborder)
      let menuItems = '';
      const classes = ['bubble-first', 'bubble-second', 'bubble-third', 'bubble-fourth'];
      for (let i = 0; i < pages.length; i++) {
        menuItems += `<li class="${classes[i]}"><a href="${links[i]}">${pages[i]}</a></li>`;
      }
      const content = `
        <div class="bubble">
          <div class="bubble-menu-button" id="bubble-menuBtn">
            <span id="bubble-menu" style="padding-left:6px !important;">Menu</span>
          </div>
          <div class="bubble-menu-items" id="menuItems">
            <ul>
              ${menuItems}
            </ul>
          </div>
        </div>
      `;
      this.innerHTML = content;
      document.getElementById('bubble-menuBtn').addEventListener('click', function () {
        const menuItems = document.querySelectorAll('.bubble .bubble-menu-items ul li');
        const menuname = document.getElementById('bubble-menu');
        menuItems.forEach(item => {
            if (item.style.display === 'flex') {
                menuname.innerHTML = "Menu"
                item.style.display = 'none';
            } else {
              menuname.innerHTML = "Close"
                item.style.display = 'flex';
            }
        });
      });
    } 
  } customElements.define('bubble-nav', BUBBLENAV);