export const checkBot = (data) => {
  var botData = null;
  if (data.toLowerCase() === "hello") {
    botData = "Hai How are You";
  } else if (data.toLowerCase() === "hai") {
    botData = "Hello";
  }
  else if(data.toLowerCase()==='hey'){
    botData='Hai How are you?'
  }
  return botData;
};


