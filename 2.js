//Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

const Find_Five = (N) => 
{
  let i = 0;
  let j=5;
	 while (N>0) {
	   if (N%10==j){
	     i++;
	   }
	   N=parseInt(N/10);
	 }
	 return i;
};