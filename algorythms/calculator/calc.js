const getPriority = (operator) => {
  switch (operator) {
    case "(":
      return "0";
    case "+":
      return "1";
    case "-":
      return "1";
    case "*":
      return "2";
    case "/":
      return "2";
  }
  throw new Error("Unknown operator");
};

const isNumber = (char) => {
  return !isNaN(parseInt(char));
};

const convertToRPN = (input) => {
  //remove spacebars
  const chars = [...input].filter((char) => char !== " ");
  //stack structure
  const stack = [];
  //output structure
  const output = [];

  chars.forEach((char, index) => {
    if (isNumber(char)) {
      if (index > 0 && isNumber(chars[index - 1])) {
        output[output.length - 1] += char;
      } else {
        output.push(char);
      }
    } else if (char === "(" || stack.length === 0) {
      stack.push(char);
    } else if (char === ")") {
      let popped = stack.pop();
      while (popped && popped !== "(") {
        output.push(popped);
        popped = stack.pop();
      }
    } else {
      let last = stack[stack.length - 1];
      let currentPriority = getPriority(char);
      let lastPriority = getPriority(last);

      while (lastPriority >= currentPriority) {
        output.push(last);
        stack.pop();
        last = stack[stack.length - 1];
        lastPriority = getPriority(last);
      }
      stack.push(char);
    }
  });

  return output.join(" ");
};

console.log(convertToRPN("1 + 232 * (2 + 421) - 5"));
console.log(convertToRPN("(2+3)*51"));
