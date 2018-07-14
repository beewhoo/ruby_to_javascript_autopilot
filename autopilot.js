
function getNewCar() {
  var car = {
    city: 'Toronto',
    passengers: 0,
    gas: 100,
  }
  return car
}

//test
// console.log(getNewCar());





function addCar(cars, new_car){
  cars.push(new_car)
return "Adding new car to fleet. Fleet size is now " + cars.length + ".";
}

//test
// addCar(cars,getNewCar());
// addCar(cars,getNewCar());
var cars = [];
var new_car = getNewCar();

// console.log(addCar(cars, new_car));
// console.log(addCar(cars, new_car));
// console.log(cars.length);

function pickUpPassenger(car)  {
  car.passengers += 1
  car.gas -= 10
  return "Picked up passenger. Car now has " + car.passengers + " passengers";

}

//test
// var car = getNewCar();
// pickUpPassenger(car);
// pickUpPassenger(car);
// pickUpPassenger(car);
// console.log(car);


function getDestination(car) {
  if (car.city === 'Toronto') {
    return 'Mississauga'
  } else if (car.city === 'Mississauga') {
    return 'London'
  } else if (car.city === 'London') {
    return 'Toronto'
  }
}

// test
// var car = getNewCar();
// console.log(getDestination(car));
// car.city = 'Mississauga'
// console.log(getDestination(car));
// car.city = 'London'
// console.log(getDestination(car));
function fillUpGas(car) {
  oldGas = car.gas
  car.gas = 100
  return "Filled up to " + getGasDisplay(car.gas) + " on gas from " + getGasDisplay(oldGas) + ".";
}

function getGasDisplay(gasAmount) {
  return gasAmount + "%";
}
// test fillUpGas and getGasDisplay
var car = getNewCar();
car.gas = 50
console.log(getGasDisplay(car.gas));
fillUpGas(car);
console.log(getGasDisplay(car.gas));


function drive(car, cityDistance) {
  if (car.gas < cityDistance) {
    return fillUpGas(car);
  }
  car.city = getDestination(car)
  car.gas -= cityDistance
  return "Drove to " + car.city + ". Remaining gas: " + getGasDisplay(car.gas) + " .";
}

function dropOffPassengers(car) {
  previousPassengers = car.passengers
  car.passengers = 0
  return "Dropped off " + previousPassengers + " passengers.";

}

function act(car) {
  var distanceBetweenCities = 50;

  if (car.gas < 20) {
    return fillUpGas(car);
  }
  else if (car.passengers < 3) {
    return pickUpPassenger(car);
  } else {

  if (car.gas < distanceBetweenCities) {
    return fillUpGas(car);
  }
  droveTo = drive(car, distanceBetweenCities);
  passengerDropped = dropOffPassengers(car);
  return droveTo + ' ' + passengerDropped;
  }
}


function commandFleet(cars) {
  cars.forEach(function(car, index) {
    var action = act(car);
    console.log('Car ' + (index + 1) + ': ' + action);
  });
  console.log('------');
}


function addOneCarPerDay(cars, numDays){
  for (var i = 0; i < numDays; i++) {
    var newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars);
  }
}

cars = [];
addOneCarPerDay(cars, 10);
