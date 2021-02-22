function Pyramid(height)
{   let i,j; 
    for(i =  0; i <= height; i++)
    {
        let currentString = '';
        for(j = 0; j <= i; j++)
        {
            currentString += '* ';
        }
        console.log(currentString);
       
    }
    
}
Pyramid(5);
