// april 9th, in order to get away from online english lol

    function names() {
    
        var i0 = ["1K", "2K", "3K", "4K", "5K", "6K"]; //element id's
        
        var c1 = prompt("CUSTOMIZE 'MY TOP SIX U/M CALCULATOR' FOR YOUR COURSE LOAD!" + "\n"
                        + "WHAT COURSES ARE IN YOUR TOP SIX?" + "\n" + "ENTER COURSE #1: ").toUpperCase();

        var c2 = prompt("COURSE #2:").toUpperCase();

        var c3 = prompt("COURSE #3:").toUpperCase();

        var c4 = prompt("COURSE #4:").toUpperCase();
    
        var c5 = prompt("COURSE #5:").toUpperCase();
              
        var c6 = prompt("COURSE #6:").toUpperCase();
        
        var c0 = [c1, c2, c3, c4, c5, c6];   //prompts -> array
    
        var defalt = ["COURSE #1:", "COURSE #2:", "COURSE #3:", "COURSE #4:", "COURSE #5:", "COURSE #6:"]
    
        if (c1 === null || c2 === null || c3 === null || c4 === null || c5 === null || c6 === null) {
        
            for (var n=0;n<6;n++) {
            
                var y = document.getElementById(i0[n]);
                y.innerHTML = (defalt[n]);
            
            } 
        
        } else if (c1 == 0 || c2 == 0 || c3 == 0 || c4 == 0 || c5 == 0 || c6 == 0) {
        
            for (var n=0;n<6;n++) {
            
                var y = document.getElementById(i0[n]);
                y.innerHTML = (defalt[n]);
            
            }  
        
        } else {
        
            for (var n=0;n<6;n++) {
            
                var y = document.getElementById(i0[n]);
                y.innerHTML = (c0[n]);
            
            }    
        
        } 
        
    }

    function calculation() {
        
      //conversion to #'s, better way to do this, do it later
        
        var af = Number(document.getElementById("advfuncs").value);
        
        var cl = Number(document.getElementById("calc").value);
        
        var ec = Number(document.getElementById("econ").value);
        
        var en = Number(document.getElementById("english").value);
        
        var wd = Number(document.getElementById("wrld").value);
        
        var ib = Number(document.getElementById("ib").value);
        
        var avg = (af + cl + ec + en + wd + ib) / 6;
        
    //banner output here onwards
        
        if (isNaN(avg)){
            
            document.getElementById("calc0").innerHTML = ("INVALID INPUT");
            
        } else if (af === 0 || cl === 0 || ec === 0 || en === 0 || wd === 0 || ib === 0 || avg === 0){
            
            document.getElementById("calc0").innerHTML = ("MISSING INPUT");
            
        } else {
            
            document.getElementById("calc0").innerHTML = (avg + " %");
            
            document.getElementById("calc1").innerHTML = ("BLESSED");
        }
    }
