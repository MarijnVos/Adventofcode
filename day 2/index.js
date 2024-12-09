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
        console.log(d);

        //set increase to -1 or +1
        increase = setIncrease(d);
        
        for (let j = 0; j < (d.length); j++) { 
            safeBool = false;
            dCopy = d.slice()
            d.splice(j,1);
            for (let i = 0; i < (d.length); i++) { 
                //get to the last level without problem it's safe
                if(i == d.length-1){ 
                    safeBool = true;  
                    safe ++
                    break;
                }
                // check if values correct
                if(checkDifference(d[i],d[i+1], increase)){
                    d = dCopy.slice()
                    safeBool = false;
                    break;
                }
            }
            if(safeBool){
                console.log("safe")
                break;}
            
        }
    })
    console.log(`safe: ${safe}`)
}

function checkDifference(v1,v2, increase){
        difference = (v2-v1)*increase;
        return(difference<1 || difference>3);

}

function setIncrease(d){
    averageIncrease = 0
    for (let i = 0; i < (d.length-1); i++) {
        if(d[i+1]>d[i]){
            averageIncrease ++
        }
        else if(d[i+1]<d[i]){
            averageIncrease --
        }
    }
    if (averageIncrease >0){
        console.log("increase")
        return 1
    }
    else{
        console.log("decrease")
        return -1
    }

}

