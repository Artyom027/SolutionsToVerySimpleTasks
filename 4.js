function getLongest(arr = [])
{
  let i = 0;
  let long = 0;
  let longStr;
  
  while(i < arr.length)
  {
    if(arr[i].length > long)
    {
      long = arr[i].length;
      longStr = arr[i];
    }
    i++;
  }
  console.log(longStr);
}

getLongest([]);
