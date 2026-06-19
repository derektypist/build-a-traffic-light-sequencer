const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log(`No phases found`);
    return;
  }

  if (config.fault === true) {
    console.log(`Faulted phase!`);
    return;
  }
  for (let cycle = 1;cycle<=cycles;cycle++) {
  for (let i=0;i<config.phases.length;i++) {
    if (config.phases[i]['duration'] <=0) {console.log(`Invalid phase detected`);
    } else {
      console.log(`Switching to ${config.phases[i]['color']} for ${config.phases[i]['duration']} s`)
    }
  }
  }
}

function generateTimeline(config, cycles) {
  let arr = [];
  let runningTotal = 0;
  for (let cycle=1;cycle<=cycles;cycle++) {
    for (let i=0;i<config.phases.length;i++) {
      runningTotal += config.phases[i]['duration'];
      arr.push(runningTotal);
    }
  }
  return arr;
}
