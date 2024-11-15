let n = 5;
for(let i =0; i <=n; i++){
  let y = "";
  if (i===0){
    y+="*";
  }
  let x ="$";
  for(let j =1; j<=i; j++){
    y += "*"+ x ;

  }
   console.log(y);
}