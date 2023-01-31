
// Declare variables
let gh1 = document.getElementsByClassName('green-hills')[0];
let gh2 = document.getElementsByClassName('green-hills')[1];
let bh1 = document.getElementsByClassName('brown-mountain')[0];
let bh2 = document.getElementsByClassName('brown-mountain')[1];
let v = document.getElementById('volcano');

// Scrolling Effects
window.addEventListener('scroll', function () {

    let value = window.scrollY;

    // All these next calculations and style transformations are 
    // for the moving animation as you scroll
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
        $('.name').fadeOut('fast');
    } else if (value >= 1500 && value < 2000) { // Begin fade in and fade out of text
        $('.name').fadeIn('slow');
        $('#volcano').fadeIn('fast');
        $('.content-display.first').fadeOut("fast");
    } else if (value >= 2000 && value < 2400) {
        $('#volcano').fadeOut('slow');
        $('.name').fadeOut('fast');
        $('.content-display.first').fadeIn('slow');
        $('.content-display.first').css('display', 'flex');
        $('.content-display.second').fadeOut('fast');
    } else if (value >= 2400 && value < 2800) {
        $('.content-display.first').fadeOut('fast');
        $('.content-display.second').fadeIn('slow');
        $('.content-display.second').css('display', 'flex');
        $('.content-display.third').fadeOut('fast');
    } else if (value >= 2800) {
        $('.content-display.second').fadeOut('fast');
        $('.content-display.third').fadeIn('slow');
        $('.content-display.third').css('display', 'flex');
    }
});