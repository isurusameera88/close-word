/*
@Author - R Isuru Sameera Sandaruwan

*/


var sequence = require('./longest-subsequence');
var distance = require('./edit-distance');

const findClosestOne = (word,wordList) =>{
    var max = 0;
    var similarWord = '';
    for(k = 0 ; k < wordList.length ;k++){
        wordLower = word.toLowerCase();
        wordListLower = wordList[k].toLowerCase();
        var value = 100/(distance.editDistance(wordLower,wordListLower) + 0.1) + 50*sequence.subSequence(wordLower,wordListLower);
        if(k==0){
            max = value;
            similarWord = wordList[0];
        } 
        else{
            if(max < value){
                max = value;
                similarWord = wordList[k];
            } 
        }   
    }
    return {'word':similarWord,'score':max};
}

const findClosestFive = (word,wordList) =>{
    var closeLists = [];
    for(k = 0 ; k < wordList.length ;k++){
        wordLower = word.toLowerCase();
        wordListLower = wordList[k].toLowerCase();
        var value = 100/(distance.editDistance(wordLower,wordListLower) + 0.1) + 50*sequence.subSequence(wordLower,wordListLower);
        closeLists.push({word:wordList[k],score:value});
    }
    return sortList(closeLists).slice(0,5);
}



const findClosestAny = (word,wordList,count) =>{
    var closeLists = [];
    for(k = 0 ; k < wordList.length ;k++){
        wordLower = word.toLowerCase();
        wordListLower = wordList[k].toLowerCase();
        var value = 100/(distance.editDistance(wordLower,wordListLower) + 0.1) + 50*sequence.subSequence(wordLower,wordListLower);
        closeLists.push({word:wordList[k],score:value});
    }
    return sortList(closeLists).slice(0,count);
}




const sortList = (wordList)=>{
    wordList.sort((a,b)=>{
        return a.score == b.score ? 0 : a.score > b.score ? -1 : 1;
    });
    return wordList;
}

module.exports = {
    findClosestFive:findClosestFive,
    findClosestOne:findClosestOne,
    findClosestAny:findClosestAny
}