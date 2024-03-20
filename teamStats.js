const team = {
    _players: [
      {
        firstName:'Ross',
    lastName: 'Tovar',
    age: 25
    },
    {
      firstName:'Caro',
    lastName: 'Moreno',
    age: 23
    },
    {
      firstName:'Pao',
    lastName: 'Vargas',
    age: 21
    }
    ],
    _games:[
      {
      opponent:'Marianas',
      teamPoints: 50,
      opponentPoints: 30
    },
    {
      opponent:'Velemitas',
      teamPoints: 30,
      opponentPoints: 30
    },
    {
      opponent:'Salle',
      teamPoints: 60,
      opponentPoints: 20
    }
    ],
    get players(){
      return this._players;
    },
  
  get games(){
    return this._games;
  },
  addPlayer(newName,newLastName, newAge){
    let player= {
    firstName: newName,
    lastName: newLastName,
    age: newAge
    };
  this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game={
      opponent:newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game)
  }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Salle', 54, 23)
  console.log(team.players);
  console.log(team.games)