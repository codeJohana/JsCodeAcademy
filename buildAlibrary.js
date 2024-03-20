class Media{
    constructor(title){
  this._isCheckOut = false;
  this._ratings=[] ;
   }
  get title(){
    return this._title;
  }
  get ischeckOut(){
    return this._isCheckOut;
  }
  get ratings(){
    return this._ratings;
  }
  
  set ischeckOut(value){
  this._ischekOut =value;
  }
  
  toggleCheckOutStatus(){
    this.isCheckOut = !this.isCheckOut;
  }
  
  getAvarageRating (){ 
    let ratingsSum= this.ratings.reduce((currentSum,rating)=>currentSum + rating);
  return ratingsSum/this.ratings.length;}
  
  addRating(value){
    this.ratings.push(value);
  }
  }
  
  
  class Book extends Media{
  constructor(author,title,pages){
    super(title);
    this._author= author;
    this._page= pages;
  }
  get author(){
    return this._author;
  }
  
  get pages(){
    return this._pages;
  }
  }
  
  class Movie extends Media{
    constructor(director, title,runTime){
    super(title);
    this._director = director;
    this._runTime= runTime;
    }
  
    get director(){
      return this._director;
    }
    get runTime(){
      return this.runTime;
    }
  }
  
  //extra CD
  
  class CD extends Media{
    constructor(singer, title,runTime){
    super(title);
    this._singer = singer;
    this._runTime= runTime;
    }
  
    get director(){
      return this._singer;
    }
    get runTime(){
      return this.runTime;
    }
  }
  
  const historyOfEverything= new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAvarageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116)
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAvarageRating());
  
  // CD extra
  
  const album = new CD('CafetaCuba', 'Eres' , 5 )
  album.toggleCheckOutStatus();
  console.log(album.isCheckOut);
  
  album.addRating(5);
  album.addRating(5);
  album.addRating(5);
  console.log(album.getAvarageRating());