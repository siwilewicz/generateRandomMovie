const movies = [
    {title: "RoboCop", year: 1987, description: "1987 American science fiction action film directed by Paul Verhoeven, with a screenplay by Edward Neumeier and Michael Miner. The film stars Peter Weller, Nancy Allen, Daniel O'Herlihy, Ronny Cox, Kurtwood Smith, and Miguel Ferrer. Set in a crime-ridden Detroit, in the near future, RoboCop centers on police officer Alex Murphy (Weller) who is murdered by a gang of criminals and subsequently revived by the megacorporation Omni Consumer Products as the cyborg law enforcer RoboCop. Unaware of his former life, RoboCop executes a brutal campaign against crime while coming to terms with the lingering fragments of his humanity.", img="https://upload.wikimedia.org/wikipedia/en/1/16/RoboCop_%281987%29_theatrical_poster.jpg"},
    {title: "Die Hard", year: 1988, description: "American action film directed by John McTiernan, with a screenplay by Jeb Stuart and Steven E. de Souza. It is based on the 1979 novel Nothing Lasts Forever by Roderick Thorp, and it stars Bruce Willis, Alan Rickman, Alexander Godunov, and Bonnie Bedelia. Die Hard follows New York City police detective John McClane (Willis) who is caught up in a terrorist takeover of a Los Angeles skyscraper while visiting his estranged wife. Reginald VelJohnson, William Atherton, Paul Gleason, and Hart Bochner feature in supporting roles.", img = "https://upload.wikimedia.org/wikipedia/en/c/ca/Die_Hard_%281988_film%29_poster.jpg"},
    {title: "The Shining", year: 1980 , description: "psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson. The film is based on Stephen King's 1977 novel of the same name and stars Jack Nicholson, Shelley Duvall, Scatman Crothers, and Danny Lloyd." , img="https://en.wikipedia.org/wiki/The_Shining_(film)#/media/File:The_Shining_(1980)_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg"},
    {title: "Fatal Attraction", year: 1987, description: "American psychological thriller film directed by Adrian Lyne from a screenplay by James Dearden, based on his 1980 short film Diversion. Starring Michael Douglas, Glenn Close, and Anne Archer, the film centers on a married man who has a weekend affair with a woman who refuses to allow it to end and becomes obsessed with him.", img ="https://en.wikipedia.org/wiki/Fatal_Attraction#/media/File:Fatal_Attraction_poster.png"},
    {title: "The Terminator", year: 1984, description:"American science fiction action film directed by James Cameron. It stars Arnold Schwarzenegger as the Terminator, a cyborg assassin sent back in time from 2029 to 1984 to kill Sarah Connor (Linda Hamilton), whose unborn son will one day save mankind from extinction by Skynet, a hostile artificial intelligence in a post-apocalyptic future. Kyle Reese (Michael Biehn) is a soldier sent back in time to protect Sarah.", img="https://en.wikipedia.org/w/index.php?go=Go&search=terminator+film&title=Special%3ASearch&ns0=1#/media/File:Terminator1984movieposter.jpg"},
    {title: "An American Werewolf in London", year: 1981, description:'Horror Comedy The film plot follows two American backpackers, David and Jack, who are attacked by a werewolf while travelling in England, causing David to question whether he will become a werewolf under the next full moon.' , img="https://en.wikipedia.org/wiki/An_American_Werewolf_in_London#/media/File:An_American_Werewolf_in_London_poster.jpg"},
];


function randomMovie() {

    const randomChoice = Math.floor(Math.random() * movies.length);
    return document.getElementById('movieDisplay').innerHTML = movies[randomChoice];
    

};







