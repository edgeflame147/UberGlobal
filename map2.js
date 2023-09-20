//im a little python baby why is this so hard
/*
xxxxx-xxxxxxxxxx-xxxxx
xxxxx-xxxxxxxxxx-xxxxx
xxxxx-xxxxxxxxxx-xxxxx
xxxxx-xxxxxxxxxx-xxxxx
----------------------
xxxxx-xxxxxxxxxx-xxxxx
xxxxx-xxxxxxxxxx-xxxxx
xxxxx-xxxxxxxxxx-xxxxx
xxxxx-xxxxxxxxxx-xxxxx
----------------------
xxxxx-xxxxxxxxxx-xxxxx
xxxxx-xxxxxxxxxx-xxxxx
xxxxx-xxxxxxxxxx-xxxxx
xxxxx-xxxxxxxxxx-xxxxx
*/

/*
xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;----------------------;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;----------------------;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;
*/

/*
---;-x-;---;*/

// defining some initial variables


// all the stuff for checking prints into console, bc i have no idea whats going on in Java

//define variables with no definition that will be used later

function pathFinding(dest) {
  var destinations, inp, line, map;
  map = [];
  //MAP VARIES ON INPUT, ; MEANS NEW LINE
  inp = "xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;----------------------;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;----------------------;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;xxxxx-xxxxxxxxxx-xxxxx;";
  line = [];


  destinations = [["park", 3, 2], ["library", 3, 11], ["smallHouses",3,17], ["waterfall", 5,3], ["barnhouse",5,7],["mediumHouses",5,12], ["apartments",8,1], ["largeHouse",8,17], ["lakeside",10,15]];


  //input the the value inp into the matrix map
  for (var i = 0, _pj_a = inp.length; i < _pj_a; i += 1) {
    if (inp[i] !== ";") {
      line.push(inp[i]);
    } else {
      map.push(line);
      line = [];
    }
  }

  //print out map into the console
  //also, on replit, it'll put the number of times the certain character will repeat, if it does
  for (var i = 0, _pj_a = map.length; i < _pj_a; i += 1) {
    for (var e = 0, _pj_b = map[i].length; e < _pj_b; e += 1) {
      //couldnt find out how to print the array in array format into the console, so its in character by character
      console.log(map[i][e]);
    }

    console.log("");
  }

  //more definitions yay!

  var destinationIndex, destinationName, userLocation;

  //collect user location as an input. This'll have to be modified later to collect user input

  userLocation = [0,0]
  /*
  userLocation[0] = Number.parseInt(userLocation[0]);
  userLocation[1] = Number.parseInt(userLocation[1]);
  */
  console.log("userLocation:")
  console.log(userLocation);
  //will need to modify to accept input at some point
  //destinationName is the input for the destinationName
  destinationName = "barnhouse"
  //destinationName = input("something like mcdonalds: ");
  destinationIndex = dest;

  //runs thru destinations, findds the destination index, so it can retrieve future information from the matrix
  //matrixes are like the only data structure i know im sure theres a better way to store these please no bully
  // for (var i = 0, _pj_a = destinations.length; i < _pj_a; i += 1) {
  //   if (destinations[i][0] === destinationName) {
  //     destinationIndex = i;
  //     break;
  //   }
  // }

  destinationName = destinations[destinationIndex][0];

  //finding the closest street in an incredibly inefficient way begins
  //there are probably too much variables
  var destinationCoordinates, distanceCounter, mapCoordinate, smallestDistanceValue, smallestDistanceValueIndex;
  mapCoordinate = [destinations[destinationIndex][1], destinations[destinationIndex][2]];
  console.log("mapCoordinate:")
  console.log(mapCoordinate);
  destinationCoordinates = [destinations[destinationIndex][1], destinations[destinationIndex][2]];
  //0 up, 1down, 2right,3left (for distance Counter)
  distanceCounter = [0, 0, 0, 0];
  //code checks in all 4 directions for closest street

  while (map[mapCoordinate[0]][mapCoordinate[1]] !== "-") {
    if (mapCoordinate[0] > 0) {
      console.log("mapCoordinate:")
      console.log(mapCoordinate);
      mapCoordinate[0] -= 1;
      distanceCounter[0] += 1;
    } else {
      console.log("hit limit");
      distanceCounter[0] = -1;
      break;
    }
  }
  mapCoordinate = [destinations[destinationIndex][1], destinations[destinationIndex][2]];
  while (map[mapCoordinate[0]][mapCoordinate[1]] !== "-") {
    if (mapCoordinate[0] < map.length - 1) {
      console.log("mapCoordinate:")
      console.log(mapCoordinate);
      mapCoordinate[0] += 1;
      distanceCounter[1] += 1;
    } else {
      console.log("hit limit");
      distanceCounter[1] = -1;
      break;
    }
  }

  mapCoordinate = [destinations[destinationIndex][1], destinations[destinationIndex][2]];

  while (map[mapCoordinate[0]][mapCoordinate[1]] !== "-") {
    if (mapCoordinate[1] < map[0].length - 1) {
      console.log("mapCoordinate:")
      console.log(mapCoordinate);
      mapCoordinate[1] += 1;
      distanceCounter[2] += 1;
    } else {
      console.log("hit limit");
      distanceCounter[2] = -1;
      break;
    }
  }

  mapCoordinate = [destinations[destinationIndex][1], destinations[destinationIndex][2]];

  while (map[mapCoordinate[0]][mapCoordinate[1]] !== "-") {
    console.log(distanceCounter);

    if (mapCoordinate[1] > 0) {
      console.log("mapCoordinate:")
      console.log(mapCoordinate);
      mapCoordinate[1] -= 1;
      distanceCounter[3] += 1;
    } else {
      console.log("hit limit");
      distanceCounter[3] = -1;
      break;
    }
  }

  mapCoordinate = [destinations[destinationIndex][1], destinations[destinationIndex][2]];

  console.log("distanceCounter:")
  console.log(distanceCounter)

  //actually find the closest street
  smallestDistanceValue = -1;
  smallestDistanceValueIndex = -1;

  //find smallest distance value in the list
  for (var i = 0, _pj_a = distanceCounter.length; i < _pj_a; i += 1) {
    if (distanceCounter[i] > 0) {
      if (smallestDistanceValue === -1 || distanceCounter[i] < smallestDistanceValue) {
        smallestDistanceValue = distanceCounter[i];
        smallestDistanceValueIndex = i;
      }
    }
  }

  finalDestination = [];
  //uses smallest distance value to output the closest street in finalDestination
  if (smallestDistanceValueIndex === 0) {
    finalDestination = [destinations[destinationIndex][1] - smallestDistanceValue, destinations[destinationIndex][2]];
  } else {
    if (smallestDistanceValueIndex === 1) {
      finalDestination = [destinations[destinationIndex][1] + smallestDistanceValue, destinations[destinationIndex][2]];
    } else {
      if (smallestDistanceValueIndex === 2) {
        finalDestination = [destinations[destinationIndex][1], destinations[destinationIndex][2] + smallestDistanceValue];
      } else {
        if (smallestDistanceValueIndex === 3) {
          finalDestination = [destinations[destinationIndex][1], destinations[destinationIndex][2] - smallestDistanceValue];
        }
      }
    }
  }

  console.log("Final destination:");
  console.log(finalDestination);

  //checking variable type just in case
  finalDestination[0] = Number.parseInt(finalDestination[0]);
  finalDestination[1] = Number.parseInt(finalDestination[1]);

  //find number of steps for travel, and estimated time for travel (guessing like 30 seconds per coordinate change?)

  //define final variables
  var stepsForTravel, timeForTravel;
  stepsForTravel = 0; //one coordinate = one mile?
  timeForTravel = 0; 

  //this is the easiest part since our map will follow the blocks format hahaha i love shortcuts

  stepsForTravel = finalDestination[0] - userLocation[0] + (finalDestination[1] - userLocation[1]);
  timeForTravel = stepsForTravel * 3; // in minutes

  console.log("stepsForTravel:");
  console.log(stepsForTravel);

  //document.getElementById("details5").innerHTML += stepsForTravel;
  console.log(document.getElementById("popup5").innerHTML);

  document.getElementById("popup5").innerHTML += "<br> Steps Needed: "+stepsForTravel.toString(10);
  document.getElementById("popup5").innerHTML += "<br> Time Needed: "+timeForTravel.toString(10)+" minutes";
  
}
  
