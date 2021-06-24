#include <iostream>
using namespace std;

const int COLUMNS = 10;
const int LINES = 10;

int matrix[LINES][COLUMNS];

void simpleInit() {
    int value = 1;
    for(int line = 0; line < LINES; ++line) {
        for(int column = 0; column < COLUMNS; ++column ) {
            matrix[line][column] = value;
            ++value;
        }
    }
}

void printFormattedNumber(int value) {
    if(value < 10) {
        cout << ' ';
    }
    if(value < 100) {
        cout << ' ';
    }
    if(value < 1000) {
        cout << ' ';
    }
    cout << value << ' ';
}

void print() {
    for(int line = 0; line < LINES; ++line) 
    {
        for(int column = 0; column < COLUMNS; ++column ) 
        {
            printFormattedNumber(matrix[line][column]);
        }
        cout << endl;
    }
}

void horizontalSnakeInit()
{ 
  int value1;
  int value2;
  value1 = 1;

    for(int line = 0; line <= LINES; line++)
    {
        for(int column = 0; column <= COLUMNS; column++)
        {
            if (line % 2 == 0)
            {
                matrix[line][column] = value1;
                value1++;
                value2 = value1 + COLUMNS - 2;
            }
            if (line %2 == 1)
            {
                
                matrix[line][column] = value2;
                value2--;
                value1 = value2 + COLUMNS + 2;
                
            }
        }
    }
}

void verticalSnakeInit() 
{ int value = 1;
  int i;
  int j;
  int line = LINES;
  int column = 0;
    while (value <= COLUMNS*LINES)
    {
        for( i = 0; i < line; i++)
        {
            matrix[i][column] = value++;
        }
            for( i = line-1; i >= 0; i--)
        {
            matrix[i][column+1] = value++;
        }
        column+=1;
        
    }
}

void spiralInit() 
{
    int value = 1;
    int column = COLUMNS;
    int line = 0;
    int i;

    while (value <= COLUMNS*LINES)
    {

        for(i = line; i < column; i++)
        {
            matrix[line][i] = value++;
        }
        for(i = line + 1; i < column; i++)
        {
            matrix[i][column - 1] = value++;
        }
        for(i = column-2; i >= line; i--)
        {
            matrix[column-1][i] = value++;
        }
        for(i = column - 2; i > line; i--)
        {
            matrix[i][line] = value++;
        }

        line++, column = column - 1;
            
        
    }
    
    
}

int main() 
{
    verticalSnakeInit();
    print();
    return 0;
}
