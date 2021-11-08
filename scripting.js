function RandomLetter()
{
    if(Math.round(Math.random() * 100) <= 15 && document.getElementById("username").innerHTML != username)
    {
        console.log(document.getElementById("username").innerHTML.length)
        return username.charAt(document.getElementById("username").innerHTML.length)
    }else
    {
        return String.fromCharCode(97 + Math.round(Math.random() * 25));
    }
    
}
let currentletter = "";
let currentnumberpass = -1;
let breakupdate = false;
let password = "reddit"
let username = "xavier"
const eventdays = [
new Date('December 25, 1776 00:00:00'), 
new Date(1941, 4, 8), 
new Date(2007, 4, 14),
new Date(1935, 8, 1),
new Date(1974, 0, 9),
new Date(1932, 10, 2),
new Date(1776, 7, 2),
new Date(1812, 5, 18),
new Date(1777, 6, 4),
new Date(1492, 7, 3)
];
const eventname = [
"Washingtong Crossing The Delaware", 
"The End Of The Holocaust", 
"Jeremy's Birthday",
"The Start World War 1",
"The Gombe Chimpanzee War",
"The Great Emu War",
"Signing of the Declaration of Independance",
"The War of 1812",
"Independance Day",
"The Start of Chistopher Columbus Voyage"
];
var selectedevent = Math.round(Math.random() * 9);
var date = new Date(2021, 7, 11);
var priorDate = new Date().setDate(date.getDate() - selectedevent);
var daysSinceEvent = Math.floor(Math.abs(eventdays[selectedevent] - date)/86400000);


function updatepassword()
{
    currentnumberpass += 1;
    document.getElementById("pass").innerHTML = String.fromCharCode(97 + currentnumberpass);
    if(currentnumberpass == 25)
    {
        currentnumberpass = -1;
    }
    if(document.getElementById("realpass").innerHTML.length <= password.length - 1)
    {
        setTimeout(() => {  updatepassword() }, 400);
    }else
    {
        if(document.getElementById("realpass").innerHTML == password)
        {
            document.getElementById("realpass").classList = ["geeb"];
        }
        document.getElementById("pass").innerHTML = "";
        currentnumberpass = -1;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updatepassword();
    document.getElementById("user-ans").innerHTML += username
    document.getElementById("password-ans").innerHTML += password
    document.getElementById("event").innerHTML = eventname[selectedevent];
    document.getElementById("event-ans").innerHTML += "First Day of school";
    console.log();
    document.getElementById("clear").addEventListener('click', function()
    {
        location.reload();
    });
    document.getElementById("submit").addEventListener('click', function()
    {
        console.log(document.getElementById("birthday").value)
        if(document.getElementById("username").innerHTML == username)
        {
            console.log("username passed")
            if(document.getElementById("realpass").innerHTML == password)
            {
                console.log("password passed")
                if(document.getElementById("birthday").value - daysSinceEvent <= 20)
                {
                    document.getElementById("prize").innerHTML = "<br> Here is your prize: <br> https://pastebin.com/Crd3my0b"
                }
            }
        }
    });
    document.getElementById("SelectPass").addEventListener('click', function()
    {
        console.log("1")
        if(currentnumberpass != -1)
        {
            document.getElementById("realpass").innerHTML += String.fromCharCode(97 + currentnumberpass);
        }
        console.log("2")
    });
});

//key:
//AIzaSyDQd1GjEg6-hO-h2Qryef1h7CiAIy-wxE4
//CSE
//f02b830ad8e8843fb
function getImages()
{ 
    const usr = document.getElementById("username");
    if(usr.innerHTML == username)
    {
        usr.classList = ["geeb"]
    }
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
    const usr = document.getElementById("username");
    usr.innerHTML += currentletter;
    if(usr.innerHTML == username)
    {
        usr.classList = ["geeb"]
    }

}
function ClearId(id)
{
    document.getElementById(id).innerHTML = "";
}