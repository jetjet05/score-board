let team1 = document.getElementById("score-team1");
let team2 = document.getElementById("score-team2");
let pointsTeam1 = 0;
let pointsTeam2 = 0;

function updatePoints(team, points) {
  if (team === 'team1') {
    pointsTeam1 += points;
    team1.innerText = pointsTeam1;
  } else if (team === 'team2') {
    pointsTeam2 += points;
    team2.innerText = pointsTeam2;
  }
}

function restart(){
  team1.innerText = 0
  team2.innerText = 0
 pointsTeam1 = 0;
 pointsTeam2 = 0;
 document.getElementById("game-lead").innerText =""
}

function highlightTheLeader(){

  if (pointsTeam1 > pointsTeam2){

    document.getElementById("game-lead").innerText = "team1 is in the lead"
  }
  else if(pointsTeam2 > pointsTeam1){
    document.getElementById("game-lead").innerText = "team2 is in the lead"
  }
  else{
    document.getElementById("game-lead").innerText = "draw"
  }
}





