const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => {
    const date = new Date();
    hrs.innerText = String(date.getHours()).padStart(2, '0');  // Format hours as 2 digits
    min.innerText = String(date.getMinutes()).padStart(2, '0'); // Format minutes as 2 digits
    sec.innerText = String(date.getSeconds()).padStart(2, '0'); // Format seconds as 2 digits
}, 1000);
