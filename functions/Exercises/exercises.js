function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

  console.log(makeLine(5));

  function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
      square += makeLine(size) + '\n';
    }
    return square.trim(); 
  }

  console.log(makeSquare(5));

  function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += makeLine(width) + '\n';
    }
    return rectangle.trim();  
  }

  console.log(makeRectangle(5, 3));

  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 1; i <= height; i++) {
      stairs += makeLine(i) + '\n';
    }
    return stairs.trim();
  }
  
  console.log(makeDownwardStairs(5));

  function makeSpaceLine(numSpaces, numChars) {
    let line = '';
    for (let i = 0; i < numSpaces; i++) {
      line += ' ';
    }
    for (let i = 0; i < numChars; i++) {
      line += '#';
    }
    for (let i = 0; i < numSpaces; i++) {
      line += ' ';
    }
    return line;
  }
  
  console.log(makeSpaceLine(3, 5));

  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      let numSpaces = height - i - 1;
      let numChars = 2 * i + 1;
      triangle += makeSpaceLine(numSpaces, numChars) + '\n';
    }
    return triangle.trim();
  }
  
  console.log(makeIsoscelesTriangle(5));

  function makeDiamond(height) {
    let diamond = '';
    for (let i = 0; i < height; i++) {
      let numSpaces = Math.abs(height / 2 - i);
      let numChars = height - 2 * numSpaces;
      diamond += makeSpaceLine(numSpaces, numChars) + '\n';
    }
    return diamond.trim();
  }
  
  console.log(makeDiamond(5));
  
  
  
  

  
  
