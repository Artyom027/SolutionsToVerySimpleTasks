function isFib(arr = [])
{
    let x = 0;
    for(let i = 2; i < arr.length; i++)
    {
        if( arr[i-2] + arr[i - 1] == arr[i])
        {
            x = i;
        }
    }
    console.log(arr[x] === (arr[x-2] + arr[x-1]));
}
isFib();
