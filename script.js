const randomChoice = () =>{
    const movies = [
        {title: "RoboCop", year: 1987, description: "1987 American science fiction action film directed by Paul Verhoeven, with a screenplay by Edward Neumeier and Michael Miner. The film stars Peter Weller, Nancy Allen, Daniel O'Herlihy, Ronny Cox, Kurtwood Smith, and Miguel Ferrer. Set in a crime-ridden Detroit, in the near future, RoboCop centers on police officer Alex Murphy (Weller) who is murdered by a gang of criminals and subsequently revived by the megacorporation Omni Consumer Products as the cyborg law enforcer RoboCop. Unaware of his former life, RoboCop executes a brutal campaign against crime while coming to terms with the lingering fragments of his humanity."},
        {title: "Die Hard", year: 1988, description: "American action film directed by John McTiernan, with a screenplay by Jeb Stuart and Steven E. de Souza. It is based on the 1979 novel Nothing Lasts Forever by Roderick Thorp, and it stars Bruce Willis, Alan Rickman, Alexander Godunov, and Bonnie Bedelia. Die Hard follows New York City police detective John McClane (Willis) who is caught up in a terrorist takeover of a Los Angeles skyscraper while visiting his estranged wife. Reginald VelJohnson, William Atherton, Paul Gleason, and Hart Bochner feature in supporting roles."},
        {title: "The Shining", year: 1980 , description: "psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson. The film is based on Stephen King's 1977 novel of the same name and stars Jack Nicholson, Shelley Duvall, Scatman Crothers, and Danny Lloyd."},
        {title: "Fatal Attraction", year: 1987, description: "American psychological thriller film directed by Adrian Lyne from a screenplay by James Dearden, based on his 1980 short film Diversion. Starring Michael Douglas, Glenn Close, and Anne Archer, the film centers on a married man who has a weekend affair with a woman who refuses to allow it to end and becomes obsessed with him."},
        {title: "An American Werewolf in London", year: 1981, description:'Horror Comedy The film plot follows two American backpackers, David and Jack, who are attacked by a werewolf while travelling in England, causing David to question whether he will become a werewolf under the next full moon.'},
    ];
    
    let choice = Math.floor(Math.random() * movies.length);
    

    document.getElementById("title").innerHTML = movies[choice].title;
    document.getElementById("year").innerHTML = movies[choice].year;
    document.getElementById("description").innerHTML = movies[choice].description;
}

window.onload = function () {
    randomChoice();

    document.getElementById("generate").addEventListener('click', randomChoice);
}