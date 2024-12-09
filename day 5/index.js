fetch("rules.txt")
    .then(response => {return response.text()})
    .then(processData)
    .catch(error =>console.error(error));

function processData(strData){
    list = strData.split("\r\n\r\n")
    rules = list[0]
    manuals = list[1]


    rules = rules.split("\r\n")
    rules= rules.map((element, index, array)=>array[index] = element.split(`|`));
    for (let i = 0; i < rules.length; i++) {
        rules[i] = rules[i].map((element, index, array)=>array[index] = Number(element));
    }

    manuals = manuals.split("\r\n")
    manuals= manuals.map((element, index, array)=>array[index] = element.split(`,`));
    for (let i = 0; i < manuals.length; i++) {
        manuals[i] = manuals[i].map((element, index, array)=>array[index] = Number(element));
    }

    SumCorrectMiddleNum=0;
    for(let t = 0; t<manuals.length;t++) {
        let manual = manuals[t];
        console.log(manual);
        correctOrderBool = true;
        for (let i = 0; i<manual.length;i++){
            for (let j = 0; j < rules.length; j++) {
                if(manual[i] == rules[j][1]){
                    for(let m = (i+1); m<manual.length;m++ ){
                        if (rules[j][0]== manual[m]){
                            correctOrderBool=false;
                        }
                    }
                }
            } 
        }
        if(correctOrderBool){
            console.log("correct")
            let mid= (manual.length-1)/2
            SumCorrectMiddleNum += manual[mid]
        } 
    }

    console.log(`sum: ${SumCorrectMiddleNum}`)

    




//getOrder(list)

    



}