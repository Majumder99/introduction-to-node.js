//Regular function

const sayHi = () => {
  console.log("hi");
};

sayHi();

let sayBye = () => {
  console.log("bye");
};

// sayBye();

const newFunc = (func) => {
  func();
};

newFunc(sayBye);
