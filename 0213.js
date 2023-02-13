let reuslt;
function findYear(year){
  if(year % 4 == 0 && year % 100 !==0 || year % 400 == 0){
    result = 1;
  }
  else result = 0;

  return result;
}

console.log(findYear(2000));
