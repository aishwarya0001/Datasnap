const toggle_button = document.getElementById("toggle")
const root = document.querySelector(':root');
var rs = getComputedStyle(root);
const write = document.getElementById('write')

var contentbg = '#0e1a24'
var bg = 'black'
var t1 = 'white'

var temp = 'white'

toggle_button.addEventListener("click", () => {
    if(toggle_button.className === "day")
    {
        root.style.setProperty('--verydarkblue', 'white');
        root.style.setProperty('--black', '#f2f8fb');
        root.style.setProperty('--white', 'black');
        temp = 'black'
        toggle_button.className = "night"
        write.style.content = "url('rsc/write-black.png')"
    }
    else
    {
        root.style.setProperty('--verydarkblue', contentbg);
        root.style.setProperty('--black', bg);
        root.style.setProperty('--white', t1);
        toggle_button.className = "day"
        write.style.content = "url('rsc/write-big.png')"
    }
})

const myfeed_btn = document.getElementById('myfeed')
const featured_btn = document.getElementById('featured')
const recent_btn = document.getElementById('recent')

const myfeed_content = document.getElementsByClassName('my-feed')[0]
const featured_content = document.getElementsByClassName('featured')[0]
const recent_content = document.getElementsByClassName('recent')[0]

const myfeed_text = document.getElementById("myfeed-text")
const featured_text = document.getElementById("featured-text")
const recent_text = document.getElementById("recent-text")

const myfeed_img = document.getElementById("myfeed-img")
const featured_img = document.getElementById("featured-img")
const recent_img = document.getElementById("recent-img")

featured_btn.addEventListener("click", () => {
    myfeed_content.style.display = "none"
    featured_content.style.display = "block"
    recent_content.style.display = "none"
    featured_btn.style.borderBottom = "4px solid #0072FF"
    featured_text.style.color = "#0072FF"
    myfeed_btn.style.borderBottom = "none"
    myfeed_text.style.color = "#7f848b"
    recent_btn.style.borderBottom = "none"
    recent_text.style.color = "#7f848b"
    featured_img.style.filter = "none"
    myfeed_img.style.filter = "grayscale(80%)"
    recent_img.style.filter = "grayscale(80%)"
})
recent_btn.addEventListener("click", () => {
    myfeed_content.style.display = "none"
    featured_content.style.display = "none"
    recent_content.style.display = "block"
    featured_btn.style.borderBottom = "none"
    featured_text.style.color = "#7f848b"
    myfeed_btn.style.borderBottom = "none"
    myfeed_text.style.color = "#7f848b"
    recent_btn.style.borderBottom = "4px solid #0072FF"
    recent_text.style.color = "#0072FF"
    featured_img.style.filter = "grayscale(80%)"
    myfeed_img.style.filter = "grayscale(80%)"
    recent_img.style.filter = "none"
})
myfeed_btn.addEventListener("click", () => {
    myfeed_content.style.display = "block"
    featured_content.style.display = "none"
    recent_content.style.display = "none"
    featured_btn.style.borderBottom = "none"
    featured_text.style.color = "#7f848b"
    myfeed_btn.style.borderBottom = "4px solid #0072FF"
    myfeed_text.style.color = "#0072FF"
    recent_btn.style.borderBottom = "none"
    recent_text.style.color = "#7f848b"
    featured_img.style.filter = "grayscale(80%)"
    myfeed_img.style.filter = "none"
    recent_img.style.filter = "grayscale(80%)"
})

const menu_btn = document.getElementsByClassName("menu-icon")[0]
const close_btn = document.getElementsByClassName("close")[0]
const side_panel = document.getElementById("side-panel")
const container = document.getElementsByClassName('outer-container')[0]

menu_btn.addEventListener("click", () => {
    side_panel.style.display = "block"
    side_panel.style.transition = "0.1s"
    container.style.filter = "blur(5px)"
    container.style.position = "fixed"
})

close_btn.addEventListener("click", () => {
    side_panel.style.display = "none"
    container.style.filter = "none"
    container.style.position = "relative"
})