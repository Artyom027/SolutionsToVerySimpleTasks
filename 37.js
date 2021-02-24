function repeatString(a,b)
{
    let str,numb;
    let currentString = '';
    if(typeof(a) == 'string')
    {
        str = a;
        numb = b;
    }
    if(typeof(a) == 'number')
    {
        str = b;
        numb = a;
    }
    for(let i = 0; i < numb; i++)
    {
       currentString += str;
    }
    console.log(currentString);
}
repeatString();
