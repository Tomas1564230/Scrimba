const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let randomSymbol1 = " "   
let randomSymbol2 = " "   

let randomPasswordWindow1 = document.getElementById("randomPasswordWindow1")
let randomPasswordWindow2 = document.getElementById("randomPasswordWindow2") 


function generatePasswordsButton() {
    for(i=0; i < 8; i++) {
     
    let randomPasswordNumber1 = Math.floor(Math.random()* characters.length )
     randomSymbol1 += characters[randomPasswordNumber1]
        
    }
    randomPasswordWindow1.textContent = randomSymbol1
    randomSymbol1 = " "
    
    
    for(i=0; i < 8; i++) {
     
        let randomPasswordNumber2 = Math.floor(Math.random()* characters.length )
         randomSymbol2 += characters[randomPasswordNumber2]
            
        }
        randomPasswordWindow2.textContent = randomSymbol2
        randomSymbol2 = " "
        
    }


// function generatePassword() {
//     var length = 20,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }
// randomPasswordWindow1.textContent = generatePassword()