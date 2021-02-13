let aboveDiv = document.querySelector("#abovediv");
let parentDiv = document.querySelector("#selectmetwo");


let count = 1;
aboveDiv.textContent = 0;


//function and eventlisteners

function create(){
    let inp = document.createElement("input");
    let firstDiv = document.createElement("div");
    let thirdDiv = document.createElement("div");
    console.log(count);

    //Set attr
    inp.setAttribute("id", "div2");
    firstDiv.setAttribute("id", "div1");
    firstDiv.setAttribute("class", "selected");
    thirdDiv.setAttribute("id", "div3");
    thirdDiv.setAttribute("class", "selected");

    //Add styles
    inp.classList.add("middiv");
    firstDiv.classList.add("selected");
    thirdDiv.classList.add("selected");

    //select divs

    firstDiv = parentDiv.childNodes[0]= firstDiv;
    inp = parentDiv.childNodes[1]= inp;
    inp.value = 1;
    thirdDiv = parentDiv.childNodes[2]= thirdDiv;
    parentDiv.append(firstDiv);
    parentDiv.append(inp);
    parentDiv.append(thirdDiv);

    firstDiv.textContent = "-";
    thirdDiv.textContent = "+";

    // listen to the DOM

    selectmetwo.addEventListener("click", (e)=>{
        if (e.target.id === "div1"){
            count -= parseInt(inp.value);
        aboveDiv.textContent = count;
        console.log(e)
        } else if (e.target.id === "div3"){
            thirdDiv.addEventListener("click", (e)=>{
                count += parseInt(inp.value);
                aboveDiv.textContent = count;
                console.log(e);
    })
    
        }
    }
    )

    
}
create();


