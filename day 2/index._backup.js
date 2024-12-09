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
        Dampener = true;
        console.log(d);

        //set increase to -1 or +1
        increase = setIncrease(d);
        
        
        for (let i = 0; i < (d.length); i++) {
            //get to the last level without problem it's safe
            if(i == d.length-1){
                console.log("safe")
                safe ++
                break;
            }
            if(checkDifference(d[i],d[i+1], increase)){
                console.log("wrong")
                if(Dampener){
                    Dampener =false;
                    if(i == d.length-2){
                        console.log(`skip last value`)
                    }
                    else if(!checkDifference(d[i],d[i+2], increase)){
                        i++
                        console.log(`skip : ${i+2} next value ok`)
                    }
                    else if(i==0 && !checkDifference(d[1],d[2], increase)){
                        console.log(`skip : 1 next value ok`)
                    }
                    else{
                        console.log("not safe")
                        break;
                    }
                }
                else{
                    console.log("not safe")
                    break;
                }
            }
        }
    })
    console.log(`safe: ${safe}`)
}

function checkDifference(v1,v2, increase){
        difference = (v2-v1)*increase;
        if(difference<1 || difference>3){
            return true;
        }
        else{
            return false;
        }

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

