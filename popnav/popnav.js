/*  NAV is a free and opensource web framework used to build easy navigation bars (navbars) in website and web-applications written in "css" and "javascript" as a HTML tags
Designed and Developed with ❤ for the devlopers by MANIKANDAN SRINIVASALU ,co-developed by SNEHA.M */

class popnav extends HTMLElement {
    connectedCallback() {
      const pages = this.getAttribute('pages').split(',');
      const links = this.getAttribute('links').split(',');
      const openicon = this.getAttribute('openicon');
      const root = document.querySelector(':root');
      const menubtn = this.getAttribute('btncolor');
      root.style.setProperty('--menubtncolor',menubtn)
      const btnborder = this.getAttribute('btnborder');
      root.style.setProperty('--menubtnborder',btnborder)
      const menucolor = this.getAttribute('menustyle');
      const menustyle = menucolor.split(',');
      root.style.setProperty('--menubgcolor',menustyle[0]);
      root.style.setProperty('--fontbgcolor',menustyle[1]);
      root.style.setProperty('--menuhovercolor',menustyle[2]);
      root.style.setProperty('--menuactivecolor',menustyle[3]);
      const fontcolor = this.getAttribute('fontstyle');
      const fontstyle = fontcolor.split(',');
      root.style.setProperty('--fontcolor',fontstyle[0]);
      root.style.setProperty('--fonthovercolor',fontstyle[1]);
      let menuItems = '';
      for (let i = 0; i < pages.length; i++) {
        menuItems += `<a href="${links[i]}">${pages[i]}</a>`;
      }
      
      const content = `
        <div class="popnav">
          <div id="popnavscreen" class="popnavtab">
            <div class="middle-content">
              ${menuItems}
            </div>
          </div>
  
          <div class="middleicon" onclick="togglemiddleNav()">
            <img id="togglemiddleImage" src="${openicon}" />
          </div>
        </div>
      `;
  
      this.innerHTML = content;
    }
  }
  customElements.define('pop-nav', popnav);
  function togglemiddleNav() {
    const upContent = document.querySelector('.popnav .popnavtab .middle-content');
    const toggleImage = document.getElementById('togglemiddleImage');
    const openicon = document.querySelector('pop-nav').getAttribute('openicon');
    const closeicon = document.querySelector('pop-nav').getAttribute('closeicon');
    
    const isHidden = upContent.style.display === 'none' || upContent.style.display === '';
    
    upContent.style.display = isHidden ? 'block' : 'none';
    toggleImage.src = isHidden ? closeicon : openicon;
  }
  // Ensure the initial state is set correctly when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const upContent = document.querySelector('.popnav .popnavtab .middle-content');
    const toggleImage = document.getElementById('togglemiddleImage');
    const openicon = document.querySelector('pop-nav').getAttribute('openicon');
    upContent.style.display = 'none';
    toggleImage.src = openicon;
  });
  
  