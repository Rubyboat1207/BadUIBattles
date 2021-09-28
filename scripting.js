function RandomLetter()
{
    return String.fromCharCode(97 + Math.round(Math.random() * 25));
}
let currentletter = "";
let currentnumberpass = -1;
let breakupdate = false;

function updatepassword()
{
    currentnumberpass += 1;
    document.getElementById("pass").innerHTML = String.fromCharCode(97 + currentnumberpass);
    if(currentnumberpass == 25)
    {
        currentnumberpass = -1;
    }
    if(document.getElementById("realpass").innerHTML.length <= 7)
    {
        setTimeout(() => {  updatepassword() }, 400);
    }else
    {
        document.getElementById("pass").innerHTML = "";
        currentnumberpass = -1;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updatepassword();
    document.getElementById("clear").addEventListener('click', function()
    {
        location.reload();
    });
    document.getElementById("submit").addEventListener('click', function()
    {
        if(document.getElementById("username").innerHTML == "rubyboat")
        {
            if(document.getElementById("realpass").innerHTML == "password")
            {
                document.getElementById("prize").innerHTML = "Here is your prize: <br> https://pastebin.com/Crd3my0b"
            }
        }
    });
    document.getElementById("SelectPass").addEventListener('click', function()
    {
        if(currentnumberpass != -1)
        {
            document.getElementById("realpass").innerHTML += String.fromCharCode(97 + currentnumberpass);
        }
    });
});

//key:
//AIzaSyDQd1GjEg6-hO-h2Qryef1h7CiAIy-wxE4
//CSE
//f02b830ad8e8843fb
function getImages()
{    
    currentletter = RandomLetter();
    var image = document.getElementById("textimg");

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
}