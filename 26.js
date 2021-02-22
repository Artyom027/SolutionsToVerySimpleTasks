function getGCD(a,b)
{
    
    if(a % b == 0)
    {
        console.log(a / b); 
    }
    else if(b % a == 0)
    {
        console.log(b / a);
    }


    if(a > b)
    {
        for(let i = a / 2; i > 0; i--)
        {
            if((a % i == 0) && (b % i == 0))
            {
                console.log(i);
                break;
            } 
        }
    }
    else
    {
        for(let j = b / 2; j > 0; j--)
        {
            if((a % j == 0) && (b % j == 0))
            {
                console.log(j);
                break;
            }
        }
    }    
}
getGCD( , );
