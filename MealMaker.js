const menu={
    _meal:'',
    _price: 0,
  
  set meal(mealToChek){
  if (typeof mealToCheck ==='string'){
    return this._meal = mealToCheck;
  }
  },
  set price(priceToCheck){
    if (typeof priceToCheck === 'number'){
      return this._price = priceToCheck;
    }
  },
   get todaysSpetial(){
  if (this._meal && this._price){
    return `Today's Spetial is ${this.meal} for ${this._price}!`
  } else {
    return `'Meal or price was not set correctly!'`
  }
   }
  };
  
  
  menu._meal= 'chiken';
  menu._price= 8 ;
  
  console.log(menu.todaysSpetial); 