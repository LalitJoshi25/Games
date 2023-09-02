let playersList = [['avani', 'devika'], ['avani', 'venkat'], ['avani', 'lalit'], ['devika', 'venkat'], ['devika', 'lalit'], ['venkat', 'lalit']];

let len = playersList.length;

const getRandomNo = (len) => {
    return Math.floor(Math.random() * len);
}

const playersCombination = () => {
    let randomInd = getRandomNo(6);
    let playerNames = playersList[randomInd];
    let index = playersList.indexOf(playerNames);
    let team1, team2;
    switch (index) {
        case 0:
            team1 = 'avani, devika';
            team2 = 'venkat, lalit';
            break;

        case 1:
            team1 = 'avani, venkat';
            team2 = 'devika, lalit';
            break;
        case 2:
            team1 = 'avani, lalit';
            team2 = 'devika, venkat';
            break;
        case 3:
            team1 = 'devika, venkat';
            team2 = 'avani, lalit';
            break;
        case 4:
            team1 = 'devika, lalit';
            team2 = 'avani, venkat';
            break;
        case 5:
            team1 = 'venkat, lalit';
            team2 = 'avani, devika';
            break;
            
        default:
            console.log("Index missmatch")
    }

    document.getElementById('t1').innerHTML = 'Team 1';
    document.getElementById('t2').innerHTML = 'Team 2';
    // document.getElementById('s1').innerHTML = '';
    document.getElementById('pnames1').innerHTML = team1;
    document.getElementById('vs').innerHTML = " VS ";
    document.getElementById('pnames2').innerHTML = team2;
    // console.log(playerNames);
}