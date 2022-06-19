//Write a program which ask user for no of lines and print a pattern using an asterik .

const Print_pattern = (N) => 
{
   let i,j
   for(i=0; i<N; i++) {
     let multiple=""
     for(j=0; j<=i; j++) {
       multiple=multiple+'*'
     }
     console.log(multiple)
   }
};