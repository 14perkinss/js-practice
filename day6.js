function average(numbers_list) {
  //if number_list is empty, return undefined
  var length = numbers_list.length;
  if (length == 0) return undefined;

  //initialize sum to 0
  var sum = 0;

  //for each number x in number list
  for (var i = 0; i < length; i++)

    //add x to sum
    sum += numbers_list[i];

  //return sum / length of number list
  return sum / length;
}

function assignGrade(grade) {
  //If grade is at least 90, return A
  if (grade >= 90)
    return "A";

  //else if grade is greater than 80
  else if (grade >= 80)
    return "B";

  //else if grade is greater than 70
  else if (grade >= 70)
    return "C";

  //else if grade is greater than 60
  else if (grade >= 60)
    return "D";

  //else if grade is greater than 80
  else return "F";
}

function pluralize(num, noun) {
  // if num is 1, return "1 noun"
  if (num == 1)
    return "1 " + noun;

  //otherwise return "num nouns"
  else return num + " " + noun + "s";
}

function longestWord(sentence) {
  //if there are no words, return undefined
  if (longestWord.length == 0) return undefined;

  //split the sentence into separate words
  var words = sentence.split(" ");

  //define the maximum length to be the length
  //of the first word, and the champion index to 
  //be 1.
  var maxLength = words[0].length;
  var champion = 0;

  //loop through array
  for (var i = 1; i < words.length; i++) {
    //if the length of the current word is greater
    //than the maxLength, set maxLength to the new
    //max and make the current index the champion
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      champion = i;
    }
  }

  //return the champion
  return words[champion];

}

function palindrome(word) {
  //initialize an index to 0 and a second index to the
  //end of the word
  var starter = 0;
  var ender = word.length - 1;

  //while the first index is less than or equal to the second index
  while (starter <= ender) {

    //if the charAt the first index does not equal charAt the 
    //second index, return "no"
    if (word.charAt(starter) != word.charAt(ender))
      return "no";
    //otherwise increment the first index and decrement 
    //the second index
    starter++;
    ender--;

  }

  //return "yes"
  return "yes";
}

function letterCounter(phrase, letter) {
  //initialize a count to 0
  var count = 0;
  //for each character in the phrase
  for (var i = 0; i < phrase.length; i++) {
    //if the current character equals the letter,
    //increment the count
    if (phrase.charAt(i) == letter)
      count++;
  }

  //return the count
  return count;
}

function longestPalindrome(sentence) {  
  //find the longest word
  var longest = longestWord(sentence);

  //if its a palindrome, return the appropriate response
  if (palindrome(longest) == "yes") 
    return longest + " is a palindrome";
  //otherwise, return that it is not 
  else return longest + " is not a palindrome";
}

function doItTwice(f) {
  //call f twice
  return f() + f();
}

function objectFun(first, last, age, email, color) {
  //define a person object and give it the right properties
  var person = {};
  person.first_name = first;
  person.last_name = last;
  person.age = age;
  person.email = email;
  person.fav_color = color;

  //return the object
  return person;
}

function numChildren(obj) {
  //return the length of the children array
  return obj.children.length;
}

function greeting(name) {
  //return the greeting
  return "Hello, " + name + "!";
}

function sayHello(first, last, greet) {
  //call the greeting function 
  return greet(first + " " + last);
}

function goodnight(name) {
  //return the goodnight message
  return "Goodnight, " + name + "!";
}

function sayGoodnight(name, status, message) {
  //if status is night, return the goodnight message
  if (status == "Night")
    return message(name);

  //otherwise return the other message
  else return "It's not bedtime!";
}
