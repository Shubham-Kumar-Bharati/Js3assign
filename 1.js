//Take a number from the user and print the count of digits in that number.
const Find_Digits = (N) => 
{
  let sum=0;
	 while(N!==0){
	   sum=sum+1;
	   N=parseInt(N/10);
	 }
	 return sum;
};