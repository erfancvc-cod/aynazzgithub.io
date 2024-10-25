let noClickCount = 0;

document.getElementById('continue-button').addEventListener('click', () => {
    showPopup("دوست داری باهام بیای دیت؟ 🙄🧎💍");
});

document.getElementById('yes-button').addEventListener('click', () => {
    alert("مطمئن باش درست انتخاب کردی و یکی از بهترین روزای زندگیمون میشه! 🎃");
    document.body.classList.add("halloween-theme"); // افزودن حالت هالووین به صفحه
    hidePopup();
});

document.getElementById('no-button').addEventListener('click', () => {
    noClickCount++; // افزایش شمارنده با هر بار کلیک روی "نه"
    
    // تغییر پیام بر اساس تعداد کلیک
    if (noClickCount === 1) {
        showPopup("بهتره که قبول کنی این قرار رو، خانوم محترم! 😏💍");
    } else if (noClickCount === 2) {
        showPopup("خانوم محترم، پیشنهاد رو جدی بگیر! 💼💍");
    } else if (noClickCount === 3) {
        showPopup("این آخرین باره که می‌پرسم. موافقی یا نه؟ 😠💍");
    } else {
        alert("به نظر می‌رسه که خیلی اصرار کردم! دیگه سوالی نمی‌پرسم.");
        hidePopup(); // پنهان کردن پاپ‌آپ در صورتی که بیشتر از ۳ بار "نه" گفته شود
    }
});

function showPopup(message) {
    document.getElementById('popup').style.display = 'flex';
    document.querySelector('.popup-content p').textContent = message;
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    noClickCount = 0; // بازنشانی شمارنده پس از بستن پاپ‌آپ
}