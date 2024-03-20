//Asignating hours pre day
const getSleepHours = day => {
    switch (day) {
      case "monday":
        return 9
        break;
      case "tuesday":
        return 9
        break;
      case "wednesday":
        return 8
        break;
      case "thursday":
        return 8
        break;
      case "friday":
        return 6
        break;
      case "saturday":
        return 10
        break;
      case "sunday":
        return 8
        break;
        default: 
         return "Error!";
    }
  };
  //test code
  /*console.log(getSleepHours('monday'))
  console.log(getSleepHours('friday'))*/
  
  // sleep addition
  
  const getActualSleepHours= () =>{
   let totalHours =
    getSleepHours("monday")+
    getSleepHours("tuesday")+
    getSleepHours("wednesday")+
    getSleepHours("thursday")+
    getSleepHours("friday")+
    getSleepHours("saturday")+
    getSleepHours("sunday");
    return totalHours
  };
  /*console.log(getActualSleepHours())*/
  //calculator
  const getIdealSleepHours =()=>{
    const idealHours= 8* 7;
    return idealHours;
  }
   //test console.log(getIdealSleepHours ());
  //debt calculator
  const calculateSleepDebt=()=>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    let sleepDiferens=actualSleepHours-idealSleepHours;
  
    if (actualSleepHours === idealSleepHours) { 
    console.log(`You got the perfect amount of sleep.`);
  }
   else if (actualSleepHours > idealSleepHours){
      console.log(`You over sleep ${sleepDiferens} hours.`)
      }
     else if (actualSleepHours < idealSleepHours){
    console.log(`You had ${sleepDiferens} hours of sleep. You need to slepp more`);
      }
  };
   

  //change the hours in getSleepHours to se different reults 
  calculateSleepDebt()