const display=()=>{
    let alpa =document.getElementById("Alphabet").value;
    alpa= alpa.toLowerCase();
    switch(alpa){
        case "a":
            result= "A for Apple";
            image="<img src='apple.jfif' width='355' height='300'>";
            break;
        case "b":
            result= "B for Ball";
            image="<img src='ball.jfif' width='300'>";
            break;
        case "c":
            result= "C for Cow";
            image="<img src='cow.jfif' width='355'>";
            break;
        case "d":
            result= "D for Dog";
            image="<img src='dog.jfif' width='355'>";
            break;
        case "e":
            result= "E for Elephant";
            image="<img src='elephant.jfif' width='355'>";
            break;
        case "f":
            result= "F for Fish";
            image="<img src='fish.jfif' width='355'>";
            break;
        case "g":
            result= "G for Giraffe";
            image="<img src='giraffe.jfif' width='355'>";
            break;
        case "h":
            result= "H for Horse";
            image="<img src='horse.jfif' width='355'>";
            break;
        case "i":
            result= "I for Icecream";
            image="<img src='icecream.jfif' width='355'>";
            break;
        case "j":
            result= "J for Jackal";
            image="<img src='jackal.jfif' width='355'>";
            break; 
        case "k":
            result= "K for Kangaroo";
            image="<img src='kangaroo.jfif' width='355'>";
            break; 
        case "l":
            result= "L for Lion";
            image="<img src='lion.jfif' width='355'>";
            break;
        case "m":
            result= "M for Mango";
            image="<img src='mango.jfif' width='355' height='350'>";
            break;  
        case "n":
            result= "N for Nest";
            image="<img src='nest.jfif' width='355'>";
            break; 
        case "o":
            result= "O for Octopus";
            image="<img src='octopus.jfif' width='355'>";
            break;  
        case "p":
            result= "P for Peacock";
            image="<img src='peacock.jfif' width='355'>";
            break;
        case "q":
            result= "Q for Queen";
            image="<img src='queen.jfif' width='355'>";
            break; 
        case "r":
            result= "R for Rat";
            image="<img src='rat.jfif' width='355'>";
            break;
        case "s":
            result= "S for Snake";
            image="<img src='snake.jfif' width='355'>";
            break;
        case "t":
            result= "T for Tree";
            image="<img src='tree.jfif' width='355' height='250'>";
            break;
        case "u":
            result= "U for Umbrella";
            image="<img src='umbrella.jfif' width='355'>";
            break;
        case "v":
            result= "V for Vulture";
            image="<img src='vulture.jfif' width='355' height='250'>";
            break;
        case "w":
            result= "W for Watch";
            image="<img src='watch.jfif' width='355'>";
            break; 
        case "x":
            result= "X for Xylophone";
            image="<img src='xylophone.jfif' width='355'>";
            break; 
        case "y":
            result= "Y for Yak";
            image="<img src='yak.jfif' width='355' height='300'>";
            break; 
        case "z":
            result= "Z for Zebra";
            image="<img src='zebra.jfif' width='355' height='300'>";
            break;   
        default:
            result= "Sorry! You have typed an invalid input!";
            image="<img src='sorry.jfif' width='300'>";
    }
    document.getElementById("text").innerHTML=result;
    document.getElementById("img").innerHTML=image;
}