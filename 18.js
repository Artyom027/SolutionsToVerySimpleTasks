function user(str)
{
let i = 0;

if(str.length <= 20)
{
    var output = "";
    while(i < str.length)
    {
    if (i % 2 == 0) {
        output += str[i].toUpperCase();
    }
    else {
        output += str[i].toLowerCase();
    }
    i++;
    }
    
    console.log(output);
}
else{
    console.log(str);
}
};
user("barev");
