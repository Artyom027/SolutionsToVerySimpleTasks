function replaceNums(x = [],text)
{
    for(let i = 0; i < x.length; i++)
    {
        if(x[i] % 3 == 0)
        {
            x[i] = text;
        }
    }
    console.log(x);
}
replaceNums([1,2,3,4,5,6,7,8,9],'barv');
