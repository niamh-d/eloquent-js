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
