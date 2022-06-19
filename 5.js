//Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

const Print_Odd = (N) => 
{
	 console.log("2");
	 for(var i=3; i<=N; i++){
	   if (i%2!=0 )
	   {
	     console.log(i)
	     }
	 }
};