document.querySelector('#night-icon').onclick = turnOff;

document.querySelector('#day-icon').onclick = turnOn;

function turnOff(){
    document.querySelector('body').style.backgroundColor = "#1a1a1a";
    document.querySelector('.text-intro').style.color = "#CCCCCC";

    document.querySelector('body').classList.add('night-mode');
    document.querySelector('body').classList.remove('day-mode');
    
    document.querySelector('#night-icon').style.display ="none"
    document.querySelector('#day-icon').style.display ="inline"
    document.querySelector('#day-icon').style.color ="white"
}

function turnOn(){
    document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('.text-intro').style.color = "#333227";

    document.querySelector('#night-icon').style.display ="inline"
    document.querySelector('#day-icon').style.display ="none"

    document.querySelector('body').classList.add('day-mode');
    document.querySelector('body').classList.remove('night-mode');


}