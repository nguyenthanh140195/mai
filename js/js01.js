var james = $('#bond');

var right = function () {
    james.animate({ left: '5px' }, 600, left);
};

var left = function () {
    james.animate({ left: '0px' }, 600, right);
};

function show_date_time() {
    window.setTimeout("show_date_time()", 1000);

    BirthDay = new Date("01/31/2022 17:47:32");
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    daysold = Math.floor(e_daysold);
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = Math.floor(e_hrsold);
    hrsoldStr = hrsold > 9 ? hrsold : '0' + hrsold;
    e_minsold = (e_hrsold - hrsold) * 60;
    minsold = Math.floor((e_hrsold - hrsold) * 60);
    minsoldStr = minsold > 9 ? minsold : '0' + minsold;
    seconds = Math.floor((e_minsold - minsold) * 60);
    secondsStr = seconds > 9 ? seconds : '0' + seconds;

    span_dt_dt.innerHTML = daysold + " ngày " + hrsoldStr + " giờ " + minsoldStr + " phút " + secondsStr + " giây";
}

$(document).ready(function () {
    right();
    show_date_time();

    setTimeout(() => {
        $('#audio-card').load();
        $('#audio-card').play();
        $('#audio-card').click();
    }, 1000);

    setTimeout(() => {
        $('#img-card').click();
    }, 3000);

    setTimeout(() => {
        $('#img-card').click();
    }, 23000);
});
