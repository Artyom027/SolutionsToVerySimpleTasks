function factorial(a)
{ 
    let result = 1;
    let x = 1;
  
    if (a > 0 && a <= 20)
    {
        while(x <= a)
        {
            result *= x;
            x ++;
        }
        console.log(a + " factorial = " + result);
    }

    else if (a > 20)
    console.log(a + " factorial = -1");
    
    else if ( a == 0)
    console.log( a + " factorial = 1")

    
   
   
}
factorial(5);
