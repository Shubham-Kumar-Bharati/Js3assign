//You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).

const findSum = (n) => {
    let sum=0;
    let a=2;
    while (a<=n){
      sum=sum+a;
      a=a+2;
      
    }
    return sum;
};