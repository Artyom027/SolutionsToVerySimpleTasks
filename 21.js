function vowelCount(text)
{
    let vowel = [];
    let i;
    let i1 = 0;
    for(i = 0; i < text.length; i++)
    {
        if(text[i] == "ա" || text[i] == "է" || text[i] == "ե" || text[i] == "ի" || text[i] == "օ" || text[i] == "ո" || text[i] == "ու" ){
            vowel[i1] = text[i];
            i1++;
            
        }
    }
    console.log("There are " + vowel.length + " vowels in the text");

}
vowelCount("բարև");
