// hover
/*  NAV is a free and opensource web framework used to build easy navigation bars (navbars) in website and web-applications written in "css" and "javascript" as a HTML tags
Designed and Developed with ❤ for the devlopers by MANIKANDAN SRINIVASALU ,co-developed by SNEHA.M */

class HOVERNAV extends HTMLElement {
    connectedCallback() {
        const pages = this.getAttribute('pages').split(',');
        const links = this.getAttribute('links').split(',');
        const imagesicons = this.getAttribute('imageicons').split(',');
        const openicon = this.getAttribute('openicon');
        const root = document.querySelector(':root');
        const menubtncolor = this.getAttribute('menubtncolor')
        root.style.setProperty('--menubtncolor',menubtncolor);
        const menubtnborder = this.getAttribute('menubtnborder')
        root.style.setProperty('--menubtnborder',menubtnborder);
        const menu = this.getAttribute('menustyle');
        const menustyle = menu.split(',');
        root.style.setProperty('--menucolor',menustyle[0]);
        root.style.setProperty('--menuhover',menustyle[1]);
        const icon = this.getAttribute('iconstyle');
        const iconstyle = icon.split(',');
        root.style.setProperty('--iconcolor',iconstyle[0]);
        root.style.setProperty('--iconhover',iconstyle[1]);
        const font = this.getAttribute('fontstyle');
        const fontstyle = font.split(',');
        root.style.setProperty('--fontcolor',fontstyle[0]);
        root.style.setProperty('--fonthover',fontstyle[1]);
        const iconborder = this.getAttribute('iconborder')
        root.style.setProperty('--iconborder',iconborder);
        let menuItems = '';
        for (let i = 0; i < pages.length; i++) {
            menuItems += `<div class="imgbx">
                <a href="${links[i]}"><img src="${imagesicons[i]}" width="40px" height="40px"/>${pages[i]}</a>
            </div>`;
        }

        const content = `
            <div class="hoverbtn">
                <div id="hoverbtnscreen" class="hoverbtntab">
                    <div class="hoverbtn-content">
                        <div class="hoverbtnimages">
                            ${menuItems}
                        </div>
                    </div>
                </div>
                <div class="hoverbtnicon" onmouseover="togglehoverNav()">
                    <img id="togglehoverImage" src="${openicon}" />
                </div>
            </div>
        `;

        this.innerHTML = content;
    }
}

customElements.define('hover-nav', HOVERNAV);

function togglehoverNav() {
    const upContent = document.querySelector('.hoverbtn .hoverbtntab .hoverbtn-content');
    const toggleImage = document.getElementById('togglehoverImage');
    const hoverBtn = document.querySelector('hover-nav');
    if (!hoverBtn) return; // Ensure hover-nav is found before accessing attributes
    const openicon = hoverBtn.getAttribute('openicon');
    const closeicon = hoverBtn.getAttribute('closeicon');
    
    const isHidden = upContent.style.display === 'none' || upContent.style.display === '';
    
    upContent.style.display = isHidden ? 'block' : 'none';
    toggleImage.src = isHidden ? closeicon : openicon;
}

document.addEventListener('DOMContentLoaded', () => {
    const upContent = document.querySelector('.hoverbtn .hoverbtntab .hoverbtn-content');
    const toggleImage = document.getElementById('togglehoverImage');
    const hoverBtn = document.querySelector('hover-nav');
    if (!hoverBtn) return; // Ensure hover-nav is found before accessing attributes
    const openicon = hoverBtn.getAttribute('openicon');
    
    upContent.style.display = 'none';
    toggleImage.src = openicon;
});
