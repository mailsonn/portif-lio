document.querySelector('#night-icon').onclick = turnOff;

document.querySelector('#day-icon').onclick = turnOn;

function turnOff(){
    document.querySelector('body').style.backgroundColor = "#1a1a1a";
    document.querySelector('.text-intro').style.color = "#CCCCCC";
    
    // Define a função nomeada
    function mudarCorLink(link) {
        link.style.color = "#CCCCCC";
    }

    // Passa a função nomeada para forEach
    document.querySelectorAll('a').forEach(mudarCorLink);
    
    

    document.querySelector('#night-icon').style.display ="none"
    document.querySelector('#day-icon').style.display ="inline"
    document.querySelector('#day-icon').style.color ="white"
}

function turnOn(){
    document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('body').style.color = "#333227";
    document.querySelector('.text-intro').style.color = "#333227";

    document.querySelector('#night-icon').style.display ="inline"
    document.querySelector('#day-icon').style.display ="none"

        // Define a função nomeada
        function mudarCorLink(link) {
            link.style.color = "#333227";
        }
    
        // Passa a função nomeada para forEach
        document.querySelectorAll('a').forEach(mudarCorLink);

}
