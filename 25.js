function articles(arr)
{
    var len = arr.length;
    for (var i = 0; i < len ; i++)
    {
        for(var j = 0 ; j < len - i - 1; j++)
        {
            if (arr[j].year > arr[j + 1].year)
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
articles([{title:"Veganism",author:"Poghos",year:1993},{title:"Modern Philosophy",author:"Petros",year:1991}]);
