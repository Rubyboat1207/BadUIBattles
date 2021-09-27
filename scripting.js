function RandomLetter()
{
    return String.fromCharCode(97 + Math.round(Math.random() * 25));
}
let currentletter = "";
//key:
//AIzaSyDQd1GjEg6-hO-h2Qryef1h7CiAIy-wxE4
//CSE
//f02b830ad8e8843fb
function getImages()
{    
    currentletter = RandomLetter();
    var image = document.getElementById("textimg");

    console.log("letters/" + currentletter + ".png")
    if(image != null)
    {
        image.src = "letters/" + currentletter + ".png";
    }
    else{
        var img = document.createElement("img");
        img.src = "letters/" + currentletter + ".png";
        var src = document.getElementById("img-area");
        img.id = "textimg";
        img.className = "googleimg"
        src.appendChild(img);
    }
}
function SelectLetter()
{
    document.getElementById("username").innerHTML += currentletter;
}
function ClearUsername()
{
    document.getElementById("username").innerHTML = "Username: ";
}