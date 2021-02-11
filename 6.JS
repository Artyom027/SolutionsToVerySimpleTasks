
 
    var array1 = [4,5,6];
    var array2 = [1,2,3,7,8,9];

    var size;
     size = array1.length + array2.length;
     
     var array3 = [];
    
     let x = 0;
     x < array1.length;
     let z = 0;
     z < array2.length;
     if(array1[x] < array2[z])
     {
        
        for( let i = 0; i < size; i++)
        {
            if(array1[x] <= array2[z])
            {
                array3.push(array1[x]);
                x++;
            } 
            else
            {
                array3.push(array2[z]);
                z++;
            }
        }
     }
     else
        {
           for( let i = 0; i < size; i++)
            {
               if(array2[z] <= array1[x])
                {
                 array3.push(array2[z]);
                  z++;
                } 
                else
                {
                array3.push(array1[x]);
                x++;
                }
            }

        }


     console.log(array3);
  

 
    

