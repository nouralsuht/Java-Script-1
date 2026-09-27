let names= ["Ben","Joel","Judy","Anne"];
let scores =[88,98,77,88];
const nameInput =document.querySelector("#name");
const scoreInput=document.querySelector("#score");
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const results =document.querySelector("#results");
const table =document.querySelector("#scores_table")

function addScore()
{
    if(nameInput.value !== "" && scoreInput.value>=0 && scoreInput.value<=100)
     {
        names.push(nameInput.value);
      scores.push(Number(scoreInput.value));
    }
    else{
        alert("You must enter a name and a valid score ");
    }
    nameInput.value="";
    scoreInput.value="";
    nameInput.focus();

}
btn1.addEventListener("click",addScore);

function displayResults()
{
    let avg =0;
    let sum=0;
    let max=scores[0];
    let index=0;
    for(let i =0;i<scores.length;i++)
    {
        sum +=scores[i];
        if(max<scores[i])
        {
            max=scores[i];
            index=i;
        }
        
    }
    avg=sum/scores.length;
    const h1=document.createElement("h1") ;
    const avgScore=document.createElement("P");
    const highScore =document.createElement("p");

    h1.textContent="Results";
    h1.style.color="blue";  

    avgScore.textContent="Average Score = " + avg; 

    highScore.textContent="High Score = "+names[index] +" with a score of "+max;

    results.innerHTML = "";
    results.append(h1,avgScore,highScore);


}
btn2.addEventListener("click" , displayResults);

 function displayScores()
{
    table.innerHTML = "";
    const h1=document.createElement("h1");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const tr = document.createElement("tr");

    th1.textContent = "Name";
    th2.textContent = "Score";
    h1.textContent="Scores";
    h1.style.color="blue";
    table.append(h1);
    tr.append(th1, th2);
    table.append(tr);
    
 
    for (let i = 0; i < names.length; i++) {

        const row = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdScore = document.createElement("td");

        tdName.textContent = names[i];
        tdScore.textContent = scores[i];

        row.append(tdName, tdScore);
        table.append(row);
    }
}
btn3.addEventListener("click" ,displayScores);