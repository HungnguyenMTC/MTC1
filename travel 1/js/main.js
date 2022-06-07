var nav = document.querySelector('.header nav')

document.querySelector('#menu-bar').onclick =()=>{
    nav.classList.toggle('active')
}

document.querySelectorAll('.about .video-content .video-control .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-content .video').src = src;
    }
})