        
        
        let celsius =  
            document.getElementById('celsius'); 
        celsius.oninput = function () { 
            let f = (parseFloat(celsius.value) * 9) / 5 + 32; 
            fahrenheit.value = parseFloat(f.toFixed(2)); 
  
            
        } 
        
       