function countSubstring()
{
    var string=document.getElementById("userString").value;
    var length=string.length;
    var substring=document.getElementById("userSubstring").value;
    var sublength=substring.length;
    var count=0;
    var firstLetter=substring.charAt(0);
    for(var i=0;i<length;i++)
    {
        if(string.charAt(i)==firstLetter)
        {
            if(string.substring(i,i+sublength)==substring)
            {
                count++;
            }
            else
            {
                console.log("substring not found");
            }
        }
       
    }
    document.getElementById("count").innerHTML=count;
}