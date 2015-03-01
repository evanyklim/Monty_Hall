// Monthy Hall Problem

// This program accepts 1 command line argument - Number of trials
// Program will execute both strategies - change (s) or no change (n)

// determine prize door number

var game_init = function() {
  return Math.floor((Math.random() * 3) + 1);
}

// simulate choice by player

var choose = function() {
  return Math.floor((Math.random() * 3) + 1);
}

// round 2 - switching doors and sticking

var decide = function(p, c, strat) {
  var outcome = 0;
  if (strat) {        // strategy is to switch
    if (p != c) {
      outcome = 1;
    } 
  } else {            // strategy is to not switch
    if (p == c) {
      outcome = 1;
    }
  }
  return outcome;
}

//game simulation - take in no. of trials and strategy (true = change)

var game_simul = function(trials, strategy) {
  var wins = 0;
  var prize;
  var choice;
  
  for (var i = 0; i < trials; i++) {
    prize = game_init();
    choice = choose();
    wins += decide(prize, choice, strategy);
  }
  return (wins / trials) * 100;  
}

var t = process.argv[2];
console.log();
console.log('switching strategy: ' + game_simul(t, true) + '%');
console.log('sticking strategy: ' + game_simul(t, false) + '%');


