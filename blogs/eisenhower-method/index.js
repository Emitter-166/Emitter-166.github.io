const urgent = document.getElementById('urgent');
const important = document.getElementById('important');

const button = document.getElementById('calculate')
const img = document.getElementById('result');

button.addEventListener('click', () => {
    const imp = important.checked;
    const urg = urgent.checked;

    switch (imp + "," + urg) {
        case "true,true":
            img.src = "./Images/do.png";
            break;
        case "true,false":
            img.src = "./Images/schedule.png";
            break;
        case "false,true":
            img.src = "./Images/outsource.png";
            break;
        case "false,false":
            img.src = "./Images/eliminate.png";
            break;
    }
})