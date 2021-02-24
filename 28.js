function isPowerOfTwo(numb)
{
   if(numb  > 1)
   {
    while((numb > 1) && (numb % 2 == 0) )
    {
        numb /= 2;
        
    }
    console.log( numb === 1);
    
   } 
}
isPowerOfTwo();
