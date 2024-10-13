const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
    let password1 = '';
    let password2 = '';

    for (let i = 0; i < 15; i++) {
        const randomIndexOne= Math.floor(Math.random() * characters.length);
        const randomIndexTwo= Math.floor(Math.random() * characters.length);
        password1 += characters[randomIndexOne];
        password2 += characters[randomIndexTwo];

        let button1= document.getElementById('button1').textContent =password1;
        let button2= document.getElementById('button2').textContent =password2;
    }
    
}

function copyPassword() {
    let copiedText = document.getElementById('button1').textContent
    

   
    navigator.clipboard.writeText(copiedText)
    .then(() => {
        message.textContent = "Password copied to clipboard!";
        
      setTimeout(() => {
        message.textContent = "";
      }, 1000); 
    })
    .catch(err => {
        console.error("Failed to copy: ", err);
        
      message.textContent = "Failed to copy content.";
      setTimeout(() => {
        message.textContent = "";
      }, 1000); 
    });

}
function copyPassword2() {
    let copiedText2 = document.getElementById('button2').textContent
    

   
    navigator.clipboard.writeText(copiedText2)
    .then(() => {
        message.textContent = "Password copied to clipboard!";
         setTimeout(() => {
           message.textContent = "";
         }, 1000); 
        })
    .catch(err => {
            console.error("Failed to copy: ", err);
        message.textContent = "Failed to copy content.";
         setTimeout(() => {
           message.textContent = "";
         }, 1000); 
        });

}


