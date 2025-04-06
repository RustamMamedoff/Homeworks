//function findVowels(str) {
  //  const vowels = "aeiouAEIOU  ";
   // let result = [];
  
   // for (let i = 0; i < str.length; i++) {
    //  if (vowels.includes(str[i])) {
    //    result.push(str[i]);
    //  }
   // }
  
  //  return result;
 // }

  //const inputString = "I am frontend DEVELOPER I LEARN Javascript";
 // const vowelsInString = findVowels(inputString);
  //console.log(vowelsInString);

///////////////////////////////////////////////////////////////////////////////////////////

//function countWords(str) {
  //  let wordCount = 0;
   // let inWord = false;
  
   // for (let i = 0; i < str.length; i++) {
     // const char = str[i];
  
    //  if (char !== ' ' && !inWord) {
      //  wordCount++;  
      //  inWord = true;  
    //  } else if (char === ' ') {
     //   inWord = false;  
     // }
  // }
  
   // return wordCount;
 // }
  
  //const inputString = "I am frontend DEVELOPER I LEARN Javascript";
  //const wordCount = countWords(inputString);
 // console.log(wordCount);

 /////////////////////////////////////////////////////////////////////////////////////////////////


 //function findLongestWord(str) {
   // const words = str.split(' ').filter(word => word.length > 0);
    
   // let longestWord = '';
  
   // for (let i = 0; i < words.length; i++) {
    //  if (words[i].length > longestWord.length) {
      //  longestWord = words[i];
    //  }
  //  }
  
   // return longestWord;
 // }
  
  //const inputString = "I am frontend DEVELOPER I LEARN Javascript";
  //const longestWord = findLongestWord(inputString);
  //console.log(longestWord);

///////////////////////////////////////////////////////////////////////////////////////////////


//function findAllUppercaseWords(str) {
    
    //const words = str.split(' ').filter(word => word.length > 0);
  
   // const uppercaseWords = [];
  
    //for (let i = 0; i < words.length; i++) {
      
     // if (words[i] === words[i].toUpperCase()) {
      //  uppercaseWords.push(words[i]); 
    //  }
   // }
  
    
  //  if (uppercaseWords.length > 0) {
   //   console.log('bütün hərfləri böyük olan sözler:', uppercaseWords.join(', '));
  //  } else {
   //   console.log('Tapilmadi');
   // }

//}
  
  //const inputString = "I am frontend DEVELOPER I LEARN Javascript";
 // findAllUppercaseWords(inputString);


 ///////////////////////////////////////////////////////////////////////////////////////////////////


 //function wordwith2uppercase(str) {
    //let words = str.split(' ').filter(function(word) {
     // return word.length > 0;
   // });
  
    //let result = words.filter(function(word) {
    //  let uppercaseCount = 0;
    //  for (let i = 0; i < word.length; i++) {
     //   if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
      //    uppercaseCount++;
     //   }
    //  }
    //  return uppercaseCount >= 2;
  //  });
  
   //// result.forEach(function(word) {
      //console.log('2-dən artiq böyük hərfi olan elementlər:', word);
   // });
 // }
  
 // let inputString = "I am frontend DEVELOPER I LEARN Javascript";
 // wordwith2uppercase(inputString);

///////////////////////////////////////////////////////////////////////////////////////////////////



//function wordwithuppercase(str) {
   // let words = str.split(' ').filter(function(word) {
     // return word.length > 0;
   // });
  
   // let result = words.filter(function(word) {
     // for (let i = 0; i < word.length; i++) {
       // if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
       //   return true;
       // }
     // }
     // return false;
    //});
  
   // let joinedWords = result.join(' ');

    
   // console.log(joinedWords);
  //}

  //let inputString = "I am frontend DEVELOPER I LEARN Javascript";
  //wordwithuppercase (inputString);

///////////////////////////////////////////////////////////////////////////////////////////////////


//Array Methods:

//function checkPalindromes() {
   // let arr = [121, 123, 343, 454, 567, 676, 787];
   // arr.forEach(function(num) {
    //  let numStr = num.toString(); 
    //  let reversedStr = numStr.split('').reverse().join(''); 
  
     // if (numStr === reversedStr) {
     //  console.log(num + " - polindrom");
     // } else {
     //   console.log(num + " - polindrom deyil");
     // }
   // });
 // }
 // checkPalindromes();

///////////////////////////////////////////////////////////////////////////////////////////

//function checknumber () {
    
    //let arr = [15, 25, 30, 50, 100, 200, 5, 10];
    //let givenNumber = 30;  
   // let count = 0;
    //arr.forEach(function(num) {
   //   if (num < givenNumber) {
    //    count++; 
   //   }
   // });
  //  console.log(`sayi ${givenNumber}:`, count);
  //}
 // checknumber();

 ///////////////////////////////////////////////////////////////////////////////////////////////


 //function createclientandhobbies() {
    //let hobbies = ['reading', 'traveling', 'designer', 'sport', 'painting', 'music', 'sweaming'];

   // let client1 = {
   //   name: 'Alex',
   //   age: 25,
   //   hobby: 'reading'  
   // };
  
   // let client2 = {
   //   name: 'Rustam',
   //   age: 30,
    //  hobby: 'Sport'  
   // };
  
   // let client3 = {
    //  name: 'Ali',
    //  age: 40,
   //   hobby: 'music' 
   // };
   // console.log(`${client1.name}, ${client1.age} age, hobby: ${client1.hobby}`);
  //  console.log(`${client2.name}, ${client2.age} age, hobby: ${client2.hobby}`);
   // console.log(`${client3.name}, ${client3.age} age, hobby: ${client3.hobby}`);
  //}
 // createclientandhobbies();


 ////////////////////////////////////////////////////////////////////////////////////////////////////




 //function arrayOperations() {
   // let arr = Array.from({ length: 10 }, function() { return Math.floor(Math.random() * 100) + 1; });
    //let maxNumber = Math.max.apply(null, arr);  
   // let minNumber = Math.min.apply(null, arr); 
  
   
   // let sum = arr.reduce(function(acc, num) {
   //   return acc + num;
   // }, 0);  
   // let average = sum / arr.length;  
  
    
   // let randomNumber = arr[Math.floor(Math.random() * arr.length)]; 
    //let squareOfRandomNumber = Math.pow(randomNumber, 2);  
  
   // console.log('Random reqemler:', arr);
   // console.log('en boyuk reqem:', maxNumber);
   // console.log('en balaca reqem:', minNumber);
   // console.log('reqemlerin ortalamasi:', average);
   //console.log('reqemlerin toplami:', sum);
   //console.log('random secilmis reqem:', randomNumber);
   // console.log('random secilmis reqemin kvadrati:', squareOfRandomNumber);
 // }
 // arrayOperations();

 ///////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  