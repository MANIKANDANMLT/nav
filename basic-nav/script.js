class BASICNAV extends HTMLElement {
    connectedCallback() {
        const page = this.getAttribute('pages');
        const arraypagedata = page.split(',');
        const lenofpage = arraypagedata.length;
        let sec = '';
        const links = this.getAttribute('links');
        const arraylinksdata = links.split(',');
        const brand = this.getAttribute('brand');
        const brandlink = this.getAttribute('brandlink');
        const logo = this.getAttribute('logo');
        const transparent = this.getAttribute('transparent');
        const sticky = this.getAttribute('sticky');
        const mobileIcon = this.getAttribute('mobileicon').split(',');
        const root = document.querySelector(':root');
        const menubgcolor = this.getAttribute('menustyle');
        const menustyle = menubgcolor.split(',');
        root.style.setProperty('--menucolor', menustyle[0]);
        root.style.setProperty('--fontcolor', menustyle[1]);
        root.style.setProperty('--fonthovercolor', menustyle[2]);
        const logodim = this.getAttribute('logodim');
        const iconhw = logodim.split(',');
        root.style.setProperty('--h', iconhw[0]);
        root.style.setProperty('--w', iconhw[1]);
    
        for (let i = 0; i < lenofpage; i++) {
            sec += `<li><a href="${arraylinksdata[i]}">${arraypagedata[i]}</a></li>`;
        }
    
        let navHTML = `<div><nav>
                        ${logo ? `<img src="${logo}">` : ''}
                        ${brand ? `<a href="${brandlink}">${brand}</a>` : ''}
                        <ul>${sec}</ul>
                        <div class="hamburger">
                            <img src="${mobileIcon[0]}" class="open-icon">
                            <img src="${mobileIcon[1]}" class="close-icon" style="display: none;">
                        </div>
                    </nav></div><br><br><br><br>`;
        this.innerHTML = navHTML;
    
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('basic-nav nav ul');
            const nav = document.querySelector('basic-nav nav');
            const openIconElement = hamburger.querySelector('.open-icon');
            const closeIconElement = hamburger.querySelector('.close-icon');
    
            if (transparent === 'true') {
                nav.style.backgroundColor = 'transparent';
            }
            if (sticky === 'true') {
                nav.style.position = 'fixed';
                nav.style.width = '100%';
            }
    
            const handleResize = () => {
                if (window.innerWidth <= 768) {
                    hamburger.style.display = 'block';
                    openIconElement.style.display = 'block';
                    closeIconElement.style.display = 'none';
    
                    hamburger.onclick = () => {
                        const isMenuOpen = navMenu.classList.toggle('active');
                        openIconElement.style.display = isMenuOpen ? 'none' : 'block';
                        closeIconElement.style.display = isMenuOpen ? 'block' : 'none';
                    };
                } else {
                    hamburger.style.display = 'none';
                    navMenu.classList.remove('active');
                    openIconElement.style.display = 'block';
                    closeIconElement.style.display = 'none';
                }
            };
    
            window.addEventListener('resize', handleResize);
            handleResize(); 
        });
    }
    
    
}
customElements.define('basic-nav', BASICNAV);