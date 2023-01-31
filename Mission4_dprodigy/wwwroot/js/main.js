let gh1 = document.getElementsByClassName('green-hills')[0];
let gh2 = document.getElementsByClassName('green-hills')[1];
let bh1 = document.getElementsByClassName('brown-mountain')[0];
let bh2 = document.getElementsByClassName('brown-mountain')[1];
let v = document.getElementById('volcano');

window.addEventListener('scroll', function () {

    let value = window.scrollY;
    let descriptionSections = document.getElementsByClassName('content-display');
    console.log(descriptionSections);

    gh1.style.left = -100 - value + 'px';
    gh2.style.right = -200 - value + 'px';
    if (value >= 300) {
        bh1.style.left = 800 - value + 'px';
        bh2.style.right = 500 - value + 'px';
        if (value > 5) {
            $('#scroll').fadeOut("fast");
        }
    }
    if (value >= 300 && value < 700) {
        bh1.style.transform = 'scale(' + value / 600 + ')';
        bh2.style.transform = 'scale(' + value / 600 + ')';
        if (value > 555) {
            v.style.display = 'block';
        } else {
            v.style.display = 'none';
        }
        if (value < 600) {
            bh1.style.transform += 'translateY(' + (300 - value / 2) + 'px)';
            bh2.style.transform += 'translateY(' + (300 - value / 2) + 'px)';
        }

    } else if (value >= 700 && value < 1500) {
        bh1.style.transform = 'scale(' + 700 / 600 + ')';
        bh2.style.transform = 'scale(' + 700 / 600 + ')';
        v.style.transform = 'scale(' + value / 1400 + ')';
        v.style.transform += 'translateX(' + (165 - (value / 20)) + 'px)';
        v.style.transform += 'translateY(' + (200 - value / 4 + 700 / 4) + 'px)';
        $('.final').fadeOut("fast");
    } else if (value >= 1500) {
        $('.final').fadeIn("slow");
        if (value >= 2000) {
            $('#volcano').fadeOut("slow");
            descriptionSections.fadeIn("slow");
        } else {
            $('#volcano').fadeIn("fast");
            descriptionSections.fadeOut("fast");
        }
    } else {}
});