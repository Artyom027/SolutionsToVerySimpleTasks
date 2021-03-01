const map = (arr = []) =>
{
    for(let i = 0; i < arr.length; i++)
    {
        arr[i] *= 2;
    } 
    return arr
}

console.log(map([5,2,3]));
