//You are given an integer N, and your task is to print all the integers starting from 1 till N (N inclusive).
const printNumbers = (n) => {
    var result=''
    for(let i=1;i<=n;i++){
      result=result+i+' ';
    }
    console.log(result)
};