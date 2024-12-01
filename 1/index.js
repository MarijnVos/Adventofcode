fetch("data.txt")
    .then(response => {return response.text()})
    .then(processData)
    .catch(error =>console.error(error));

function splitToList(strSplit, i){
    copylist = strSplit.slice()
    list = copylist.map((element, index, array)=>{array[index] = element[i]});
    list = copylist.map((element, index, array)=>array[index] = Number(element)); 
    return list
}

function processData(strData){
    strSplit = strData.split("\r\n")
    strSplit = strSplit.map((element, index, array)=>array[index] = element.split("   " ));
    list1 = splitToList(strSplit,0)
    list2 = splitToList(strSplit,1)

    getDistance(list1, list2);
    getSimScore(list1,list2);

}

function getDistance(list1, list2){
    list1 = list1.toSorted();
    list2 = list2.toSorted();

    totalDistance = 0
    for (let i = 0; i < list1.length; i++) {
        distance = Math.abs(list1[i]-list2[i])
        totalDistance += distance
    }

    console.log("total distance: " + totalDistance)
}

function getSimScore(List1, list2){
    simScore = 0;
    for (let i = 0; i < list1.length; i++) {
        amount=0;
        for (let j = 0; j < list2.length; j++) {
         if (list1[i]==list2[j]){
                amount ++;
         }
        }
        simScore += amount*list1[i];
    }
    console.log("simscore: " + simScore)
}



