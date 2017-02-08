

 var parent = document.getElementById('timer');

 function format(digits) {
    var msc, sec, min, hour;

    msc = Math.floor(digits % 1000);
    if (msc > 99) {
        msc = ':' + msc;
    } else if (msc > 9) {
        msc = ':' + '0' + msc;
    } else {
        msc = ':' + '00' + msc;
    }

    sec = Math.floor((digits / 1000) % 60);
    if (sec > 9) {
        sec = ':' + sec;
    } else {
        sec = ':' + '0' + sec;
    }

    min = Math.floor((digits / 60000) % 60);
    if (min > 9) {
        min = ':' + min;
    } else {
        min = ':' + '0' + min;
    }

    hour = Math.floor((digits / 3600000) % 60);
    if (hour <= 9) {
        hour = '0' + hour;
    }

    return hour + min + sec + msc;
};

function setTime(digits) {
    var el = document.getElementById('clock');
    el.innerHTML = format(digits);
};

function initSplit(p) {
    var el = document.createElement('ul');
    el.id = 'list-split';
    p.appendChild(el);
};

function addSplit() {
    var parent = document.getElementById('list-split');
    var elem = document.createElement('li');
    elem.className = 'li-split';
    elem.innerHTML = format(tempo.get());
    parent.appendChild(elem);
};

function deleteSplit() {
    var elem = document.getElementById('list-split');
    elem.remove();
    initSplit(parent);
};
