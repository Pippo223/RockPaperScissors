const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock'||userInput === 'paper'||userInput === 'scissors'||userInput === 'bomb') 
    {
      return userInput
    }
    else {
      console.log('Error. User input unacceptable')
    }
  } 
  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if(choice === 0) {
      return 'rock'
    }
    else if (choice === 1) {
      return 'paper'
    }
    else {
      return 'scissors'
    }
  }
  //console.log(getComputerChoice())
  function determineWinner(userChoice, computerChoice) {
    if (userChoice===computerChoice)
    {
      return 'The game is a tie!'
    } 
    if(userChoice === 'rock')
    {
      if(computerChoice === 'paper') 
      {
        return 'Computer won'
      }
      else {
        return 'User won'
      }
    }
    if(userChoice === 'paper')
    {
      if(computerChoice === 'scissors') 
      {
        return 'Computer won'
      }
      else {
        return 'User won'
      }
    }
    if(userChoice === 'scissors')
    {
      if(computerChoice === 'rock') 
      {
        return 'Computer won'
      }
      else {
        return 'User won'
      }
    }
    if (userChoice === 'bomb') {
      return 'User won'
    }
  }
  function playGame() {
    const userChoice = getUserChoice('bomb')
    const computerChoice = getComputerChoice()
    console.log('User chose: '+userChoice);
     console.log('Computer chose: '+computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  } 
  playGame()
  
  
  
  
  