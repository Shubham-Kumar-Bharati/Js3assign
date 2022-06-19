//Write a program that takes a number from the user and get the sum of the digits present in the number.

const Number_Sum = (N) => 
{
	let sum=0;
	while (N !=0 ) {
	  sum=sum+(N%10);
	  N=parseInt(N/10);
	}
	  return sum;
};