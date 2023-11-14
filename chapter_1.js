/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~CHAPTER ONE~~~~~~~~~~~~~~~~~~~~~~~~~~~

***********TASK ONE***********
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

let str = "#";
for (let i = 0; i < 7; i++) {
  console.log(str);
  str += "#";
}

/*

***********TASK ONE***********

FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

*/

for (num = 1; num < 100; num++) {
  let str = "";

  if (num % 3 === 0) str += "Fizz";
  if (num % 5 === 0) str += "Buzz";
  if (!str) str = num;
  console.log(str);
}
