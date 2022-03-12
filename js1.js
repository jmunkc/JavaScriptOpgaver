// 1

const add = function(n1, n2) {
    return n1 + n2;
}

const sub = function(n1, n2) {
    return n1 - n2
}


const cb = function(n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

// 2

console.log(add(1, 2))
console.log(add)
console.log(add(1, 2, 3));
console.log(add(1));
console.log(cb(3, 3, add));
console.log(cb(4, 3, sub));
console.log(cb(3, 3, add));
console.log(cb(3, "hh", add));

// 4

const mul = function(n1, n2) {
    return n1 * n2
};

console.log(cb(2, 4, mul));

// 5 

console.log(cb(2, 4, function(n1, n2) { return n1 / n2; }));

// Filter, map and forEach

// 1

const names = ['Lars', 'Peter', 'Bo', 'Frederik', 'Kim'];

var namesFiltered = names.filter(function(name) {
    return name.length <= 3;
});

console.log(namesFiltered)

// 2

var namesUpped = names.map(function(name) {
    return name.toUpperCase();
});

console.log(namesUpped)

// 3
function namesHtmlUl(names) {

    var li = names.map(function(name) {
        return name = '<li>' + name + '</li>'
    }).join('');

    return '<ul>' + li + '</ul>';

};

console.log(namesHtmlUl(names))

// 4

const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var cars1 = cars.filter(function(car) {
    return car.year >= 1999;
});

var cars2 = cars.filter(function(car) {
    return car.make == 'Volvo';
});

var cars3 = cars.filter(function(car) {
    return car.price < 5000;
});

console.log(cars1);
console.log(cars2);
console.log(cars3);

// Asynchronous callbacks

const msgPrinter = function(msg, delay) {
    setTimeout(() => console.log(msg), delay); //Observe an arrow-function
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");

// JS Objects

const aBook = {
    author: 'some dude',
    publisher: 'some company',
    year: 2022,
    genre: 'Horror'
}

for (info in aBook) {
    console.log(info, aBook[info])
}



// Closure

// 1

var makeCounter = function() {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() { changeBy(1); },
        decrement: function() { changeBy(-1); },
        value: function() { return privateCounter; }
    }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.decrement)
console.log(counter1.increment)
console.log(counter1.value())

// 2

var person = function() {
    var name = "";
    var age = 0;

    var setAge = function(newAge) {
        this.age = newAge;
    }

    var setName = function(newName) {
        this.name = newName;
    }

    var getInfo = function() {
        return `${this.name}, ${this.age}`
    }

    return {
        name: name,
        age: age,

        setAge: setAge,
        setName: setName,
        getInfo: getInfo
    }
}

var john = person();
john.setName('john');
john.setAge(20)
console.log(john.getInfo())