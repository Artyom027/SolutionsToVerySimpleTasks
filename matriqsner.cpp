#include <iostream>
using namespace std;

/*const int COLUMNS = 11;
const int LINES = 11;

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
  int v1;
  int v2;
  v1 = 1;

    for(int line = 0; line <= LINES; line++)
    {
        for(int column = 0; column <= COLUMNS; column++)
        {
            if (line % 2 == 0)
            {
                matrix[line][column] = v1;
                v1++;
                v2 = v1 + COLUMNS - 2;
            }
            if (line %2 == 1)
            {
                
                matrix[line][column] = v2;
                v2--;
                v1 = v2 + COLUMNS + 2;
                
            }
        }
    }
}

void verticalSnakeInit() 
{
    int v1;
  int v2;
  v1 = 1;

    for(int line = 0; line <= LINES; line++)
    {
        for(int column = 0; column <= COLUMNS; column++)
        {
            
        }
    }
}

void spiralInit() {

}

int main() {
    verticalSnakeInit() ;
    print();
    return 0;
}*/

int main()
{

}
