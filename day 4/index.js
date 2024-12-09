fetch("data.txt")
    .then(response => {return response.text()})
    .then(processData)
    .catch(error =>console.error(error));

function processData(strData){
    list = strData.split("\r\n")
    list= list.map((element, index, array)=>array[index] = element.split(``));
    getXmas(list); 
    getXmas2(list);
}

function getXmas2(list){
    let xmas =0;
    for (let i = 1; i < (list.length-1); i++) {
        for (let j = 1; j < (list[i].length-1); j++) {
            if(list[i][j] =="A"){
                if(list[i-1][j-1]=="M" && list[i+1][j+1]=="S" && list[i-1][j+1]=="M" && list[i+1][j-1]=="S" )
                    {{xmas++;}}
                if(list[i-1][j-1]=="M" && list[i+1][j+1]=="S" && list[i-1][j+1]=="S" && list[i+1][j-1]=="M" )
                    {{xmas++;}}
                if(list[i-1][j-1]=="S" && list[i+1][j+1]=="M" && list[i-1][j+1]=="S" && list[i+1][j-1]=="M" )
                    {{xmas++;}}
                if(list[i-1][j-1]=="S" && list[i+1][j+1]=="M" && list[i-1][j+1]=="M" && list[i+1][j-1]=="S" )
                    {{xmas++;}}
            }
        }
        
    }
    console.log(`amount : ${xmas}`)
}

function getXmas(list){
    let xmas =0;
    for (let i = 0; i < (list.length); i++) {
        for (let j = 0; j < (list[i].length); j++) {
            if(list[i][j] =="X"){
                // Right
                if(list[i][j+1]=="M" && list[i][j+2]=="A" && list[i][j+3]=="S" )
                    {xmas++;}
                //left
                if(list[i][j-1]=="M" && list[i][j-2]=="A" && list[i][j-3]=="S" )
                    {xmas++; }

                if(i<(list.length-3)){
                    //bot
                    if(list[i+1][j]=="M"&& list[i+2][j]=="A" && list[i+3][j]=="S")
                        {xmas++}
                    //bot-right
                    if(list[i+1][j+1]=="M" && list[i+2][j+2]=="A" && list[i+3][j+3]=="S" )
                        {xmas++}
                    //bot-left
                    if(list[i+1][j-1]=="M" && list[i+2][j-2]=="A" && list[i+3][j-3]=="S" )
                        {xmas++}
                }
                if(i>2){
                    //top
                    if(list[i-1][j]=="M"&& list[i-2][j]=="A" && list[i-3][j]=="S")
                        {xmas++}
                    //top-left
                    if(list[i-1][j-1]=="M" && list[i-2][j-2]=="A" && list[i-3][j-3]=="S" )
                        {xmas++}
                    //top-right
                    if(list[i-1][j+1]=="M" && list[i-2][j+2]=="A" && list[i-3][j+3]=="S" )
                        {xmas++} 
                        
                }
            }
        }
        
    }
    console.log(`amount: ${xmas}`)
}



