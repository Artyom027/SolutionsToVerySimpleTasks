function isPrime(a)
{
    let i;
    if(a == 1)
    {
        console.log(a + " is neither prime nor composite");
        
    }

    if(a > 1000)
    {
        console.log(a + " is too big number");
        
    }
    if (a > 1 && a < 1000)
    {
        for(i = 2; i < (a/2); i++)
        {
            if(a % i == 0 )
            {
                console.log(a + " is prime");
                break;
                   
            }
        }
    }
}  
isPrime(10001);
   
    

    
    
   
    


