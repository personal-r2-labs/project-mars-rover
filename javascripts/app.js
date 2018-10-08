// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travellog: []
};
// ======================

// Map Object Goes Here
// ======================
var map = [
  [null, null, null, "X", null, null, null, null, "X", null],
  [null, null, null, "X", null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "X", "X", null, null, null, null],
  [null, null, null, null, "X", "X", null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "X", null, null, null, null, "X", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, "X", null, null, "X", null, null, null, null],
  [null, null, null, null, null, "X", null, null, "X", null]
];
// ======================

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("New Direction " + rover.direction);
      break;
    case "W":
      rover.direction = "S";
      console.log("New Direction " + rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log("New Direction " + rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log("New Direction " + rover.direction);
      break;
  }
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("New Direction " + rover.direction);
      break;
    case "E":
      rover.direction = "S";
      console.log("New Direction " + rover.direction);
      break;
    case "S":
      rover.direction = "W";
      console.log("New Direction " + rover.direction);
      break;
    case "W":
      rover.direction = "N";
      console.log("New Direction " + rover.direction);
      break;
  }
}

function moveForward(rover) {
  if (rover.direction === "N" && rover.y > 0) {
    if (map[rover.y - 1][rover.x] === null) {
      pushTravelLog(rover);
      rover.y -= 1;
    } else {
      console.log("Obstacle as found - nothing happens");
    }
  } else if (rover.direction === "W" && rover.x > 0) {
    if (map[rover.y][rover.x - 1] === null) {
      pushTravelLog(rover);
      rover.x -= 1;
    } else {
      console.log("Obstacle as found - nothing happens");
    }
  } else if (rover.direction === "S" && rover.y < 9) {
    if (map[rover.y + 1][rover.x] === null) {
      pushTravelLog(rover);
      rover.y += 1;
    } else {
      console.log("Obstacle as found - nothing happens");
    }
  } else if (rover.direction === "E" && rover.x < 9) {
    if (map[rover.y][rover.x + 1] === null) {
      pushTravelLog(rover);
      rover.x += 1;
    } else {
      console.log("Obstacle as found - nothing happens");
    }
  } else {
    console.log("Limit Boundaries - nothing happens");
  }
}

function moveBackward(rover) {
  if (rover.direction === "N") {
    pushTravelLog(rover);
    rover.y += 1;
    console.log("Rover Coordinate " + rover.y + " , " + rover.x);
  } else if (rover.direction === "W") {
    pushTravelLog(rover);
    rover.x += 1;
    console.log("Rover Coordinate " + rover.y + " , " + rover.x);
  } else if (rover.direction === "S") {
    pushTravelLog(rover);
    rover.y -= 1;
    console.log("Rover Coordinate " + rover.y + " , " + rover.x);
  } else if (rover.direction === "E") {
    pushTravelLog(rover);
    rover.x -= 1;
    console.log("Rover Coordinate " + rover.y + " , " + rover.x);
  }
}

function pushTravelLog(rover) {
  rover.travellog.push(rover.y + " , " + rover.x);
}

function getTravelLog(rover) {
  console.log("Travel Log");
  console.log("------------------------------");
  for (var i = 0; i < rover.travellog.length; i++) {
    console.log("Previous Rover Coordinate " + i + ": " + rover.travellog[i]);
  }
  console.log("Actual Rover Coordinate : " + rover.y + " , " + rover.x);
}

function roverCommands(rover, commands) {
  for (var i = 0; i < commands.length; i++) {
    if (commands[i] === "l") {
      turnLeft(rover);
    } else if (commands[i] === "r") {
      turnRight(rover);
    } else if (commands[i] === "f") {
      moveForward(rover);
    } else if (commands[i] === "b") {
      moveBackward(rover);
    } else {
      console.log("Command Error -- Nothing Happens");
    }
  }
  getTravelLog(rover);
}

roverCommands(rover, "lffffff");
