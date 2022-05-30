const util = require("util");
// const EventEmitter = require("node:events");
const events = require("events");

var Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("james");
var meryy = new Person("meryy");
var erin = new Person("erin");

var people = [james, meryy, erin];

people.forEach((person) => {
  person.on("speak", (msg) => {
    console.log(person.name + " speaks " + msg);
  });
});

james.emit("speak", "hi there");
meryy.emit("speak", "hi there merry");
erin.emit("speak", "hi there erin");
