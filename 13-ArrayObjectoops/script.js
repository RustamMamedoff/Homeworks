let users = [
    { name: "Rustem", age: 25 },
    { name: "Eli", age: 35 },
    { name: "Elvin", age: 28 },
    { name: "Salman", age: 40 },
    { name: "Nigar", age: 22 }
  ];
  
  users.forEach(user => {
    if (user.age > 30) {
      console.log(`${user.name} 30 yasdan yuxari`);
    } else {
      console.log(`${user.name} 30 yasdan asagi`);
    }
  });

  //////////////////////////////////////////////////////////////




//let numbers = [12, 45, 23, 67, 89, 34, 56, 78, 90, 41];

//let sum = 0;
//let i = 0;

//while (i < numbers.length) {
 // sum += numbers[i];
 // i++;
//}

//let average = sum / numbers.length;

///console.log(`ededlerin ortasi: ${average}`);




///////////////////////////////////////////////////////////////////////



//let numbers = [12, 45, 23, 67, 89, 34, 56, 78, 90, 41];

//let bolen = 7;

//let numberhg = [];
//let i = 0;

//while (i < numbers.length) {
  
 // let qaliq = numbers[i] % bolen;

  
 // let percentage = (qaliq / bolen) * 100;

  // Добавляем результат в массив
 // numberhg.push(percentage);
 // i++;
//}

// Выводим остатки в процентах
//console.log(`qalig faizi: ${bolen}: ${numberhg}`);



///////////////////////////////////////////////////////////////




let arr = [203, 19, 2, 13, 196, 86, 35, 77];
let maxNumber = arr[0]; 

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNumber) {
    maxNumber = arr[i]; 
  }
}

console.log(maxNumber);

/////////////////////////////////////


let arrw = [203, 19, 2, 13, 196, 86, 35, 77];
let result = [];


for (let i = 0; i < arrw.length; i++) {
  if (arrw[i] === 2) {
    result.unshift(arrw[i]); 
  } else if (arrw[i] === 203) {
    result.push(arrw[i]); 
  } else {
    result.push(arrw[i]);
  }
}

result.splice(2, 0, result.pop());

console.log(result); 


///////////////////////////////////////////////////



let arrp = [203, 19, 2, 13, 196, 86, 35, 77];

let maxNum = Math.max(...arrp);
let minNum = Math.min(...arrp);

let sum = 0;
for (let i = 0; i < arrp.length; i++) {
  if (arrp[i] !== maxNum && arrp[i] !== minNum) {
    sum += arrp[i];
  }
}

console.log(sum); 



//////////////////////////////////////////////////////////



let arrh = [203, 19, 2, 13, 196, 86, 35, 77]; 

function addNumberAndCheck(num) {
  arrh.push(num);
  console.log(`${num} elave olunub`);

  
  const found = arrh.find(element => element === num);
  if (found !== undefined) {
    console.log(`${num} var idi`);
  } else {
    console.log(`${num} daxilinde deyil`);
  }
}

addNumberAndCheck(50);  
addNumberAndCheck(203); 


////////////////////////////////////////////////////////////////



let arrv = [203, 19, 2, 13, 196, 86, 35, 77]; 

let oneDigit = 0, twoDigits = 0, threeDigits = 0;

for (let num of arrv) {
  let len = num.toString().length;
  if (len === 1) oneDigit++;
  if (len === 2) twoDigits++;
  if (len === 3) threeDigits++;
}

console.log(`bir reqemli: ${oneDigit}`);
console.log(`iki reqemli: ${twoDigits}`);
console.log(`uc reqemli: ${threeDigits}`);


////////////////////////////////////////////////////////////////////
