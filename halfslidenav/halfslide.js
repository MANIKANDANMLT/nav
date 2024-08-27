/*  NAV is a free and opensource web framework used to build easy navigation bars (navbars) in website and web-applications written in "css" and "javascript" as a HTML tags
Designed and Developed with ❤ for the devlopers by MANIKANDAN SRINIVASALU ,co-developed by SNEHA.M */

class HALFSLIDENAV extends HTMLElement {
    connectedCallback() {
      const page = this.getAttribute('page');
      const arraypagedata = page.split(',');
      const lenofpage = arraypagedata.length;
      const rightslide = this.getAttribute('right') === 'true';
      const links = this.getAttribute('links');
      const arraylinksdata = links.split(',');
      const lenoflinks = arraylinksdata.length;
      const slideicon = this.getAttribute('slideicon');
      const mylogo = this.getAttribute('icon');
      const root = document.querySelector(':root');
      const font = this.getAttribute('fontstyle');
      const fontstyle = font.split(',');
      root.style.setProperty('--fontcolor',fontstyle[0]);
      root.style.setProperty('--fonthovercolor',fontstyle[1]);
      const slidecolor = this.getAttribute('slidecolor');
      root.style.setProperty('--slidebg',slidecolor);
      const barcolor = this.getAttribute('barcolor');
      root.style.setProperty('--barbg',barcolor);
      const logodim = this.getAttribute('logodim');
      const iconhw = logodim.split(',');
      root.style.setProperty('--h',iconhw[0]);
      root.style.setProperty('--w',iconhw[1]);
      let sec = '';
      for (let i = 0; i < lenofpage; i++) {
        sec += `<a href="${arraylinksdata[i]}">${arraypagedata[i]}</a>`;
      }
      let content = `
        <div class="slideanim ${rightslide ? 'right-slide' : ''}">
          <div id="myslidenav" class="slidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            ${sec}
          </div>
          <div class="slidemenu" onclick="openNav()">
            <img src="${slideicon}"/>
            <center style="margin-top:-40px;">
            <img src="${mylogo}">
            </center>
          </div>
        </div>
      `;
      this.innerHTML = content;
      // Define the openNav and closeNav functions in the global scope
      window.openNav = function() {
        document.getElementById("myslidenav").style.width = "250px";
      }
      window.closeNav = function() {
        document.getElementById("myslidenav").style.width = "0";
      }
    }
  }
customElements.define('halfslide-nav', HALFSLIDENAV);