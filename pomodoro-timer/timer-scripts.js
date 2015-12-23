var Timer = function() {
  var breakTime = 5;
  var workTime = 25;
  var ticking = false;
  var working = true;
  var timeLeft;
  var intervalID;

  this.getBreakTime = function() {
    return breakTime;
  };

  this.getWorkTime = function() {
    return workTime;
  };

  this.incBreakTime = function() {
    breakTime = ++breakTime;
  };

  this.decBreakTime = function() {
    breakTime = --breakTime;
  };

  this.incWorkTime = function() {
    workTime = ++workTime;
  };

  this.decWorkTime = function() {
    workTime = --workTime;
  };

  this.startTimer = function() {
    ticking = true;
  };

  this.stopTimer = function() {
    ticking = false;
  };

  this.updateTimer = function() {
    // Are we working or breaking?
    if (working && !ticking) {
      var timeLeft = workTime;
    } else if (!working && !ticking) {
      var timeLeft = breakTime;
    } else {

    }
  };
  
};

var timer = new Timer();
