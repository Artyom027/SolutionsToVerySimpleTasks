function arrays(arr1 = [], arr2 = [])
{
    let x = 0;
    let y = 0;
    let len = arr1.length + arr2.length - 1;
    let arr3 = [];
    for(let i = 0; i < len; i++)
    {
        if(arr1[x] < arr2[y] || (arr2[y] == undefined))
        {
            arr3[i] = arr1[x];
            x++;
        }
        if(arr2[y] < arr1[x])
        {
            arr3[i] = arr2[y];
            y++;
        }
        
    }
    console.log(arr3);
}    
arrays([1,2,3,7,8,9],[4,5,6]);
