var tempo = timerCounter();
var tmr = switchTimer();

function timerCounter() {
    // var temp = 0;
    //
    // function counter() {
    //    return ++temp;
    // }
    //
    // counter.set = function(value) {
    //     temp = value;
    // };
    //
    // counter.reset = function() {
    //     temp = 0;
    // };
    //
    // counter.get = function() {
    //     return temp;
    // };
    //
    // return counter;
    //
    var beginning = Date.now();
    var delta;

    function metronom() {
        var current = Date.now();
        delta = current - beginning;
    }

    metronom.get = function() {
        return delta;
    };

    metronom.set = function(value) {
        beginning = Date.now() - value;
    };

    metronom.reset = function() {
        beginning = Date.now();
        delta = 0;
    };

    return metronom;
};

function switchTimer() {
    var init = '',
        tmp = '';

    function timer() {
        init = setInterval(function() {
          tempo();
          setTime(tempo.get());
        }, 41);
    }

    timer.stop = function() {
        tmp = tempo.get();
        clearInterval(init);
    };

    timer.start = function() {
        tmp = '';
        tempo.set(tmp);
        clearInterval(init);
        timer();
    };

    timer.continue = function() {
        timer();
        tempo.set(tmp);
    };

    timer.reset = function() {
        tmp = '';
        tempo.reset();
        clearInterval(init);
        setTime(0);
    };
    return timer;
};
