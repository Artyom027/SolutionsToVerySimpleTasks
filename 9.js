function SeyHi(a,b)
{
    let object = {
        Name:'', Age:''
    };
    if(typeof(a) == 'string')
    {
        object.Name = a;
        object.Age = b;
    }
    if(typeof(b) == 'string')
    {
        object.Name = b;
        object.Age = a;
    } 
    if(((typeof(object.Name) == 'string') && (typeof(object.Age) == 'string')) || ((typeof(object.Name) == 'number') && (typeof(object.Age) == 'number')) || (object.Name == undefined || object.Age == undefined))
    {
        console.log("Hi, what is your name?");
    }
    else
    {
        console.log("Hi, my name is " + object.Name + ", I am " + object.Age + " years old");
    }
    
   
}

SeyHi();
