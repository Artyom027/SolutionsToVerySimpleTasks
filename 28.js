function isPowerOfTwo(numb)
{
   if(numb  > 1)
   {
    while((numb > 1) && (numb % 2 == 0) )
    {
        numb /= 2;
        
    }
    return numb === 1;
   } 
}

console.log(isPowerOfTwo());
