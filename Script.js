/* =========================================
   TYPING EFFECT
========================================= */

const text =
    "We create beautiful digital experiences with creativity and passion.";

let textIndex = 0;


function typeWriter() {

    // اضافه کردن شرط برای جلوگیری از خطا در صورتی که المان پیدا نشود
    const typingElement = document.getElementById("typing-text");
    if (typingElement && textIndex < text.length) {
        typingElement.innerHTML += text.charAt(textIndex);
        textIndex++;
        setTimeout(typeWriter, 60);
    }

}

// اجرای افکت تایپ بعد از لود شدن کامل صفحه
window.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});



/* =========================================
   COUNTDOWN
========================================= */

/*
   Countdown will finish on:
   January 1, 2027
*/

const targetDate =
    new Date("January 1, 2027 00:00:00").getTime();


function updateCountdown() {


    const now =
        new Date().getTime();


    const difference =
        targetDate - now;



    if (difference <= 0) {

        if(document.getElementById("days")) document.getElementById("days").innerHTML = "00";
        if(document.getElementById("hours")) document.getElementById("hours").innerHTML = "00";
        if(document.getElementById("minutes")) document.getElementById("minutes").innerHTML = "00";
        if(document.getElementById("seconds")) document.getElementById("seconds").innerHTML = "00";

        return;

    }



    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );


    if(document.getElementById("days")) document.getElementById("days").innerHTML = String(days).padStart(2, "0");
    if(document.getElementById("hours")) document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
    if(document.getElementById("minutes")) document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
    if(document.getElementById("seconds")) document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(updateCountdown, 1000);



/* =========================================
   TOGGLE DARK MODE (FIXED & SECURE)
========================================= */

// بررسی وضعیت ذخیره شده از قبل
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// گوش دادن به کلیک روی دکمه حالت شب
document.addEventListener('click', function (e) {
    // پیدا کردن دکمه چه با کلاس و چه با تگ
    if (e.target && (e.target.classList.contains('theme-button') || e.target.closest('.theme-button'))) {
        document.body.classList.toggle('dark-mode');
        
        // ذخیره وضعیت برای دفعات بعدی
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }
});
