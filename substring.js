function countSubstring() {
    var string = document.getElementById("userString").value;
    var length = string.length;
    var substring = document.getElementById("userSubstring").value;
    var sublength = substring.length;
    //console.log(string[0]);
    var count = 0;
    var temp = "";
    var firstLetter = substring[0];
    for (var i = 0; i < length; i++) {
        if (string[i] == firstLetter) {
            temp = "";

            for (var j = i; j <= (i + sublength - 1); j++) {

                temp = temp + string[j];

            }
            if (temp == substring) {
                count++;
            }


        }

    }
    if (count == 0) {
        document.getElementById("count").innerHTML = "substring not found";
    }
    else
    document.getElementById("count").innerHTML = count;
}