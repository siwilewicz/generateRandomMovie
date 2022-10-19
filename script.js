const randomChoice = () =>{
    const movies = [ 'Die Hard', 'RoboCop', 'The Shining', 'Fatal Attraction', 'The Terminator'];
    let choice = Math.floor(Math.random() * movies.length);
    
    switch (choice){
        case 'Die Hard':
            console.log(' xxx');
            break;

        case 'RoboCop':
            console.log('ccccc');
            break;

        case 'The Shining':
            console.log ('omg');
            break;

        case 'Fatal Attraction':
            console.log('pop')
            break;

        case 'The Terminator':
            console.log('tadatata')
            break;

        default:
            console.log('error');
            break;

    };

    document.getElementById("movieDisplay").innerHTML = movies[choice];

}

window.onload = function (){
    randomChoice();
    document.getElementById("generate").addEventListener('click', randomChoice);
}