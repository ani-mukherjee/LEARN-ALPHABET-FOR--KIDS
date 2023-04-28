const display=()=>{
    let alpa =document.getElementById("Alphabet").value;
    switch(alpa){
        case "A":
            result= "A for Apple";
            image="<img src='apple.jfif' width='355' height='300'>";
            break;
        case "B":
            result= "B for Ball";
            image="<img src='ball.jfif' width='300'>";
            break;
        case "C":
            result= "C for Cow";
            image="<img src='cow.jfif' width='355'>";
            break;
        case "D":
            result= "D for Dog";
            image="<img src='dog.jfif' width='355'>";
            break;
        case "E":
            result= "E for Elephant";
            image="<img src='elephant.jfif' width='355'>";
            break;
        case "F":
            result= "F for Fish";
            image="<img src='fish.jfif' width='355'>";
            break;
        case "G":
            result= "G for Giraffe";
            image="<img src='giraffe.jfif' width='355'>";
            break;
        case "H":
            result= "H for Horse";
            image="<img src='horse.jfif' width='355'>";
            break;
        case "I":
            result= "I for Icecream";
            image="<img src='icecream.jfif' width='355'>";
            break;
        case "J":
            result= "J for Jackal";
            image="<img src='jackal.jfif' width='355'>";
            break; 
        case "K":
            result= "K for Kangaroo";
            image="<img src='kangaroo.jfif' width='355'>";
            break; 
        case "L":
            result= "L for Lion";
            image="<img src='lion.jfif' width='355'>";
            break;
        case "M":
            result= "M for Mango";
            image="<img src='mango.jfif' width='355' height='350'>";
            break;  
        case "N":
            result= "N for Nest";
            image="<img src='nest.jfif' width='355'>";
            break; 
        case "O":
            result= "O for Octopus";
            image="<img src='octopus.jfif' width='355'>";
            break;  
        case "P":
            result= "P for Peacock";
            image="<img src='peacock.jfif' width='355'>";
            break;
        case "Q":
            result= "Q for Queen";
            image="<img src='queen.jfif' width='355'>";
            break; 
        case "R":
            result= "R for Rat";
            image="<img src='rat.jfif' width='355'>";
            break;
        case "S":
            result= "S for Snake";
            image="<img src='snake.jfif' width='355'>";
            break;
        case "T":
            result= "T for Tree";
            image="<img src='tree.jfif' width='355' height='250'>";
            break;
        case "U":
            result= "U for Umbrella";
            image="<img src='umbrella.jfif' width='355'>";
            break;
        case "V":
            result= "V for Vulture";
            image="<img src='vulture.jfif' width='355' height='250'>";
            break;
        case "W":
            result= "W for Watch";
            image="<img src='watch.jfif' width='355'>";
            break; 
        case "X":
            result= "X for Xylophone";
            image="<img src='xylophone.jfif' width='355'>";
            break; 
        case "Y":
            result= "Y for Yak";
            image="<img src='yak.jfif' width='355' height='300'>";
            break; 
        case "Z":
            result= "Z for Zebra";
            image="<img src='zebra.jfif' width='355' height='300'>";
            break;   
        default:
            result= "Sorry!! Either You have typed an alphabet<br>in small letter or a wrong alphabet";
            image="<img src='sorry.jfif' width='300'>";
    }
    document.getElementById("text").innerHTML=result;
    document.getElementById("img").innerHTML=image;
}