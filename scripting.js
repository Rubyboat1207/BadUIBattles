function RandomLetter()
{
    return String.fromCharCode(97 + Math.round(Math.random() * 25));
}
let currentletter = "";

document.addEventListener("DOMContentLoaded", function() {
    console.log("before")
    document.getElementById("clear").addEventListener('click', function()
    {
        ClearId("username");
    });
    document.getElementById("submit").addEventListener('click', function()
    {
        console.log("test")
        if(document.getElementById("username").innerHTML == "rubyboat")
        {
            document.getElementById("username").innerHTML = "THE SECRET PASSCODE IS: Jrv1000 "
        }
    });
    console.log("after")    
});

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
function ClearId(id)
{
    document.getElementById(id).innerHTML = "";
    console.log("test");
}