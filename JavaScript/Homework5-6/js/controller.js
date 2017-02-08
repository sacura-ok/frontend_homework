var elemStart = document.getElementById('start');
var elemSplit = document.getElementById('split');
var elemReset = document.getElementById('reset');

elemStart.addEventListener('click', function() {
    var className = elemStart.getAttribute('class');
    var isClassStop = className.indexOf('stop');
    var isClassContinue = className.indexOf('continue');

    if (isClassStop === -1) {
        if (isClassContinue === -1) {
          elemStart.className = 'btn stop';
          elemStart.innerHTML = 'stop';
          tmr.start();
        }

        else {
          elemStart.className = 'btn stop';
          elemStart.innerHTML = 'stop';
          tmr.continue();
        }
    }

    else {
      elemStart.className = 'btn continue';
      elemStart.innerHTML = 'continue';
      tmr.stop();
    }

});

elemSplit.addEventListener('click', function() {
    addSplit();
});

elemReset.addEventListener('click', function() {
    deleteSplit();
    elemStart.className = 'btn';
    elemStart.innerHTML = 'start';
    tmr.reset();
});
