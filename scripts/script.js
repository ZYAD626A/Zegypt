function StopSlider(){
document.querySelector('.sliderImage').style.animationPlayState='paused';
}

function StartSlider(){
    document.querySelector('.sliderImage').style.animationPlayState='running';
    }
       
       document.getElementById('menuToggle').addEventListener('click', function() {
        document.getElementById('navLinks').classList.toggle('active');
    });