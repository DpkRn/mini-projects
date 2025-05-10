const map = {
    '0': [true,true,true,false,true,true,true],
    '1': [false,false,false,false,false,true,true],
    '2': [false,true,true,true,true,true,false],
    '3': [false,false,true,true,true,true,true],
    '4': [true,false,false,true,false,true,true],
    '5': [true,false,true,true,true,false,true],
    '6': [true,true,true,true,true,false,true],
    '7': [false,false,true,false,false,true,true],
    '8': [true,true,true,true,true,true,true],
    '9': [true,false,true,true,true,true,true],
  };
  
  export const convertToDigitArray = (number = null) => {
    return map[String(number)] || [false, false, false, false, false, false, false];
  };