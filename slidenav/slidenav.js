// slide
/*  NAV is a free and opensource web framework used to build easy navigation bars (navbars) in website and web-applications written in "css" and "javascript" as a HTML tags
Designed and Developed with ❤ for the devlopers by MANIKANDAN SRINIVASALU ,co-developed by SNEHA.M */

class SLIDENAV extends HTMLElement {
    connectedCallback() {
      const page = this.getAttribute('page');
      const arraypagedata = page.split(',');
      const links = this.getAttribute('links').split(',');
      const direction = this.getAttribute('direction') || 'top'; // Default direction to top if not specified
      const slideicon = this.getAttribute('slideicon');
      const root = document.querySelector(':root');
      const barbg = this.getAttribute('barcolor');
      root.style.setProperty('--barbgcolor',barbg);
      const slidebg = this.getAttribute('slidecolor');
      root.style.setProperty('--slidebg',slidebg);
      const font = this.getAttribute('fontstyle');
      const fontstyle = font.split(',');
      root.style.setProperty('--fontcolor',fontstyle[0])
      root.style.setProperty('--fonthover',fontstyle[1])
      const mylogo = this.getAttribute('logo');
      const logodim = this.getAttribute('logodim');
const iconhw = logodim.split(',');
root.style.setProperty('--h',iconhw[0]);
root.style.setProperty('--w',iconhw[1]);
      let sec = '';
      for (let i = 0; i < arraypagedata.length; i++) {
        sec += `<a href="${links[i]}">${arraypagedata[i]}</a>`;
      }
      let content = `
        <div class="slide-nav ${direction}">
          <div id="myNav" class="overlay">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <div class="overlay-content">
              ${sec}
            </div>
          </div>
          <div class="slidemenu" onclick="openNav()"><img src="${slideicon}"/><center style="margin-top:-40px;" ><img src="${mylogo}"></center></div>
        </div>
      `;
  
      this.innerHTML = content;
  
      // Define the openNav and closeNav functions in the global scope
      window.openNav = function() {
        const overlay = document.getElementById("myNav");
        if (direction === 'top' || direction === 'bottom') {
          overlay.style.height = "100%";
        } else {
          overlay.style.width = "100%";
        }
      }
  
      window.closeNav = function() {
        const overlay = document.getElementById("myNav");
        if (direction === 'top' || direction === 'bottom') {
          overlay.style.height = "0";
        } else {
          overlay.style.width = "0";
        }
      }
    }
  }
  
  customElements.define('slide-nav', SLIDENAV);