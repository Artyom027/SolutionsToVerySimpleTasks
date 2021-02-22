function Add(Number)
{
 let result = 0;
    if (Number > 0)
    {
        for(let i = 1; i <= Number; i++)
        {
            if(Number % i == 0)
            {
                result += i;
            }
        }
    }

    console.log(result);    
}
Add(10);
