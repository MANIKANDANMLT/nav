/*  NAV is a free and opensource web framework used to build easy navigation bars (navbars) in website and web-applications written in "css" and "javascript" as a HTML tags
Designed and Developed with ❤ for the devlopers by MANIKANDAN SRINIVASALU ,co-developed by SNEHA.M */

class BASICNAV extends HTMLElement {
    connectedCallback() {
        const page = this.getAttribute('pages');
        var arraypagedata = page.split(',');
        var lenofpage = arraypagedata.length;
        var sec = '';
        const links = this.getAttribute('links');
        var arraylinksdata = links.split(',');
        var brand = this.getAttribute('brand');
        const brandlink = this.getAttribute('brandlink');
        var logo = this.getAttribute('logo');
        var transparent = this.getAttribute('transparent');
        var sticky = this.getAttribute('sticky');
        const root = document.querySelector(':root');
        const menubgcolor = this.getAttribute('menustyle');
        const menustyle = menubgcolor.split(',');
        root.style.setProperty('--menucolor',menustyle[0]);
        root.style.setProperty('--fontcolor',menustyle[1]);
        root.style.setProperty('--fonthovercolor',menustyle[2]);
        const logodim = this.getAttribute('logodim');
        const iconhw = logodim.split(',');
        root.style.setProperty('--h',iconhw[0]);
        root.style.setProperty('--w',iconhw[1]);
        for (var i = 0; i < lenofpage; i++) {
            sec += `<li><a href="${arraylinksdata[i]}">${arraypagedata[i]}</a></li>`;
        }
        let navHTML = `<div><nav>
                        ${logo ? `<img src="${logo}">` : ''}
                        ${brand ? `<a href="${brandlink}">${brand}</a>` : ''}
                        <ul>${sec}</ul>
                        <div class="hamburger hamburger-menu"></div>
                    </nav></div><br><br><br><br>`;
        this.innerHTML = navHTML;
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('basic-nav nav ul');
            const nav = document.querySelector('basic-nav nav');
            if (transparent === 'true') {
                nav.style.backgroundColor = 'transparent';
            }
            if (sticky === 'true') { 
                nav.style.position = 'fixed';
                nav.style.width='100%';
            }
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('hamburger-menu');
                hamburger.classList.toggle('exit-menu');
            });
        });
    }
}
customElements.define('basic-nav', BASICNAV);