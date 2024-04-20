let num = 1;
const flag = document.querySelector(".container");
const stars = document.querySelector(".stars");
flag.addEventListener('click', changeTheme);

function changeTheme() {
        stars.style.display = 'block';

    switch (num) {
        case 1:
            stars.src = "img/2.jpg"
            num++;
            break;
        case 2:
            stars.src = "img/3.png"
            num++;
            break;
        case 3:
            stars.src = "img/4.png"
            num++;
            break;
        case 4:
            stars.src = "img/5.png"
            num++;
            break;
        case 5:
            stars.src = "img/6.png"
            num++;
            break;
        case 6:
            stars.src = "img/7.png"
            num++;
            break;
        case 7:
            stars.src = "img/8.png"
            num++;
            break;
        case 8:
            stars.src = "img/9.png"
            num++;
            break;
        case 9:
            stars.src = "img/10.png"
            num++;
            break;
        case 10:
            stars.src = "img/11.png"
            num++;
            break;
        case 11:
            stars.src = "img/12.png"
            num++;
            break;
        case 12:
        default:
            stars.style.display = 'none';
            num = 1;
            break;
    }
}