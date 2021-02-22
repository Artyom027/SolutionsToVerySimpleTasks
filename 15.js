function chessboard(line, column)
{
    
    if(line % 2 == 0 && column % 2 == 0)
    {
        console.log("That box is white");
    }
    else if (line % 2 != 0 && column % 2 != 0)
    {
        console.log("That box is white");
    }
    else{
        console.log("That box is black");
    }
}
chessboard(3,5);
