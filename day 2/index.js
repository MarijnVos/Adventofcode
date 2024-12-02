fetch("data.txt")
    .then(response => {return response.text()})
    .then(processData)
    .catch(error =>console.error(error));

function processData(strData){
    data = strData.split("\r\n")
    data = data.map((element, index, array)=>array[index] = element.split(" " ));
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i].map((element, index, array)=>array[index] = Number(element));
    }

    let safe = 0
    data.forEach((d)=>{
        DampererFirstValue = true;
        Dampener = true;
        dCopy = d.slice();
        //set increase to -1 or +1
        let increase = setIncrease(d[0],d[1]);
        
        console.log(d);
        for (let i = 0; i < (d.length); i++) {
            //get to the last level without problem it's safe
            if(i == d.length-1){
                console.log("safe")
                safe ++
                break;
            }
            difference = (d[i+1]-d[i])*increase;
            if(difference<1 || difference>3){
                if(Dampener){
                    Dampener =false;
                    console.log("level: "+ (i+2) + " difference: " + difference);
                    d.splice(i+1,1);
                    i=-1;
                }
                else if(DampererFirstValue){
                    console.log("level: "+ (i+3) + " difference: " + difference);
                    d = dCopy
                    DampererFirstValue =false;
                    increase = setIncrease(d[1],d[2]);
                    i=0
                }
                
                else{
                    console.log("unsafe");
                    break;

                } 
            }
        }
    })
    console.log(`safe: ${safe}`)
}

function setIncrease(v1,v2){
    if(v2>v1){
        return 1;
    }
    else{
        return -1;
    }
}

