function getSymbolsCount(str,sample)
{
    let numbers = 0;

    for(let i = 0; i < str.length; i++)
    {
        if(str[i] == sample)
        {
            numbers++;
        }
    }
    console.log(numbers);
}
getSymbolsCount();
