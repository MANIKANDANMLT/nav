/* simple-nav */
/*  NAV is a free and opensource web framework used to build easy navigation bars (navbars) in website and web-applications written in "css" and "javascript" as a HTML tags
Designed and Developed with ❤ for the devlopers by MANIKANDAN SRINIVASALU ,co-developed by SNEHA.M */

class simple extends HTMLElement {
connectedCallback() {
const msg = this.getAttribute('msg');
const root = document.querySelector(':root');
const msgcolor = this.getAttribute('msgcolor');
const colorsplit = msgcolor.split(',');
root.style.setProperty('--msgcolor',colorsplit[0]);
root.style.setProperty('--msgfontcolor',colorsplit[1]);
const navbarcolor = this.getAttribute('navbarcolor');
const colorsplitnav = navbarcolor.split(',');
root.style.setProperty('--navbarcolor',colorsplitnav[0]);
root.style.setProperty('--navbarfontcolor',colorsplitnav[1]);
root.style.setProperty('--navbarhovercolor',colorsplitnav[2]);
root.style.setProperty('--fonthover',colorsplitnav[3])
const page = this.getAttribute('pages');
const arraypagedata = page.split(',');
const lenofpage = arraypagedata.length;  
const ihcolor = this.getAttribute('iconhovercolor')
root.style.setProperty('--iconhovercolor',ihcolor);
const links = this.getAttribute('links');
const arraylinksdata = links.split(',');
const logo = this.getAttribute('logo');
const dlicons = this.getAttribute('icons');
const dliconslink = this.getAttribute('iconlinks');
const logodim = this.getAttribute('logodim');
const iconhw = logodim.split(',');
root.style.setProperty('--h',iconhw[0]);
root.style.setProperty('--w',iconhw[1]);
if(dlicons != null && dliconslink != null){
const arrayiconsdata = dlicons.split(',');
const lenoficons = arrayiconsdata.length;
const arrayiconlinkdata = dliconslink.split(',');
let menuItems = '';
for (let i = 0; i < lenofpage; i++) {menuItems += `<p><a href="${arraylinksdata[i]}">${arraypagedata[i]}</a></p>`;}
let iconItems = '';
for (let j = 0; j < lenoficons; j++) {iconItems += `<a href="${arrayiconlinkdata[j]}"><img src="${arrayiconsdata[j]}"/></a>`;}
if(msg !=null){
const content = `<div class="simple">
  <div class="uppersimple">
    <p>${msg}</p>
  </div>
  <div class="lowersimple">
    <div class="linkitemsdl">
${menuItems}
    </div>
    <div class="logodl">
<img src="${logo}"/>
    </div>
    <div class="iconsdl">
${iconItems}
    </div>
  </div>
</div>`;
this.innerHTML = content;}
else{
const content = `<div class="simple">
  <div class="lowersimple">
    <div class="linkitemsdl">
${menuItems}
    </div>
    <div class="logodl">
<img src="${logo}"/>
    </div>
    <div class="iconsdl">
${iconItems}
    </div>
  </div>
</div>`;
this.innerHTML = content;}
}
else{
let menuItems = '';
for (let i = 0; i < lenofpage; i++){menuItems += `<p><a href="${arraylinksdata[i]}">${arraypagedata[i]}</a></p>`;}
if(msg != null){
const content = `<div class="simple">
    <div class="uppersimple">
<p>${msg}</p>
    </div>
    <div class="lowersimple">
<div class="linkitemsdl">
  ${menuItems}
</div>
<div class="logodl">
  <img src="${logo}"/>
</div>
    </div>
  </div>`;
  this.innerHTML = content;}
else{
if(msg != null){
const content = `<div class="simple">
<div class="uppersimple">
  <p>${msg}</p>
</div>
<div class="lowersimple">
  <div class="linkitemsdl">
    ${menuItems}
  </div>
  <div class="logodl">
    <img src="${logo}"/>
  </div>
</div>
</div>`;
this.innerHTML = content;}
else{
const content = `<div class="simple">
<div class="lowersimple">
  <div class="linkitemsdl">
    ${menuItems}
  </div>
  <div class="logodl">
    <img src="${logo}"/>
  </div>
</div>
    </div>`;
this.innerHTML = content;}
}}}}
customElements.define('simple-nav', simple);