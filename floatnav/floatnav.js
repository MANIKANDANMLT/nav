/*  NAV is a free and opensource web framework used to build easy navigation bars (navbars) in website and web-applications written in "css" and "javascript" as a HTML tags
Designed and Developed with ❤ for the devlopers by MANIKANDAN SRINIVASALU ,co-developed by SNEHA.M */

class floatnav extends HTMLElement {
    connectedCallback() {
      const pages = this.getAttribute('pages').split(',');
      const links = this.getAttribute('links').split(',');
      const openicon = this.getAttribute('openicon');
      const right = this.getAttribute('right') === 'true'; // Convert to boolean
      const root = document.querySelector(':root');
      const menustyle = this.getAttribute('menustyle');
      const menu = menustyle.split(',');
      root.style.setProperty('--menubgcolor',menu[0]);
      root.style.setProperty('--menubghover',menu[1]);
      root.style.setProperty('--menubgactive',menu[2]);
      root.style.setProperty('--menuradius',menu[3]);
      const fontstyle = this.getAttribute('fontstyle');
      const posx = this.getAttribute('posx');
      root.style.setProperty('--x',posx);
      const posy = this.getAttribute('posy');
      root.style.setProperty('--y',posy);
      const posxpc = this.getAttribute('posxpc');
      root.style.setProperty('--xpc',posxpc);
      const posypc = this.getAttribute('posypc');
      root.style.setProperty('--ypc',posypc);
      const font = fontstyle.split(',');
      root.style.setProperty('--fontcolor',font[0]);
      root.style.setProperty('--fonthover',font[1]);
      const menubtnstyle = this.getAttribute('menubtnstyle');
      const menubtn = menubtnstyle.split(',');
      root.style.setProperty('--menubtncolor',menubtn[0]);
      root.style.setProperty('--menubtnborder',menubtn[1]);
      root.style.setProperty('--menubtnradius',menubtn[2]);
      let menuItems = '';
      for (let i = 0; i < pages.length; i++) {
        menuItems += `<a href="${links[i]}">${pages[i]}</a>`;
      }
  
      const content = `
        <div class="floatnav ${right ? 'right-side' : ''}">
          <div id="floatnavscreen" class="downtab">
            <div class="up-content">
              ${menuItems}
            </div>
          </div>
          <div class="circleicon" onclick="toggleNav()">
            <img id="toggleImage" src="${openicon}" />
          </div>
        </div>
      `;
  
      this.innerHTML = content;
    }
  }
  
  customElements.define('float-nav', floatnav);
  
  function toggleNav() {
    const upContent = document.querySelector('.floatnav .downtab .up-content');
    const toggleImage = document.getElementById('toggleImage');
    const openicon = document.querySelector('float-nav').getAttribute('openicon');
    const closeicon = document.querySelector('float-nav').getAttribute('closeicon');
    
    const isHidden = upContent.style.display === 'none' || upContent.style.display === '';
    
    upContent.style.display = isHidden ? 'block' : 'none';
    toggleImage.src = isHidden ? closeicon : openicon;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const upContent = document.querySelector('.floatnav .downtab .up-content');
    const toggleImage = document.getElementById('toggleImage');
    const openicon = document.querySelector('float-nav').getAttribute('openicon');
    
    // Ensure initial state is set correctly
    upContent.style.display = 'none';
    toggleImage.src = openicon;
  });
  