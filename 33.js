function inputArray(inArr = [])
{
    let outArr = [];
    for(let i = 1; i < inArr.length -1; i++)
    {
        
        outArr[i] = (inArr[i - 1] + inArr[i + 1]);
    }
    outArr[0] = inArr[1];
    outArr[inArr.length-1] = inArr[inArr.length - 2];
    console.log("inputArray = " + inArr + "  => outputArray = " + outArr);
}
inputArray();
