let btn = document.querySelector('.wrapper')
let bcg = document.querySelector('.cta')


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click' , ()=> {
    let color1 =  getRandomColor()
    let color2 =  getRandomColor()
    let deg = Math.trunc(Math.random() * 360)
    document.body.style.background  =  `linear-gradient(${deg}deg, ${color1} 0%, ${color2} 100%)`
    bcg.style.background = `linear-gradient(${deg}deg, ${color2} 0%, ${color1} 100%)`
    // console.log(deg);
})
