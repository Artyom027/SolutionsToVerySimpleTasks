function getStrings(arr = [])
{
    let arr1 = [];
    let i = 0;
    let i1 = 0;

    while(i < arr.length)
    {
        if(typeof(arr[i]) === 'string')
        {
            arr1[i1] = arr[i];   
            i1++;
        }
        i++;
    }
    console.log(arr1);
}
getStrings();
