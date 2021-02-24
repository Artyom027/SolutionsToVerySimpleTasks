function allLongestStrings(arr = [])
{
    let arr1 = [];
    let i1 = 0;
    let long = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].length > long)
        {
            long = arr[i].length;
        }
    }
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].length == long)
        {
            arr1[i1] = arr[i];
            i1++;
        }
    }
    console.log(arr1);
}
allLongestStrings();
