var input = "()())(".split("");

var level = 0;

for (var key in input) {
    var rawInstruction = input[key];

    var instruction = ({ '(': 1, ')': -1 })[rawInstruction];

    level += instruction;
}

console.log(level);
