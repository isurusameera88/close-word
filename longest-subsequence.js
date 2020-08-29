
/*
@Author - R Isuru Sameera Sandaruwan

*/


const createDataMat = (word1)=>{
  var temp = [];
  for( i = 0 ; i < word1.length + 1; i ++){
    temp.push(0);
  }    
  return temp;
}

const findMax = (array) =>{
  return array.sort()[1];
}

const subSequence = (word1,word2)=>{
    var data = [];
    var temp = createDataMat(word1);
    var i;
    data.push(temp);
    for(i=0;i < word2.length;i++){
      temp = [];
      temp.push(0);
      for(j=0;j< word1.length;j++){  
        if(word2.charAt(i) == word1.charAt(j))
          temp.push(data[i][j] + 1);
        else
          temp.push(findMax([temp[j],data[i][j+1]]));
      }
      data.push(temp);
    }
    return data[word2.length][word1.length];
}

module.exports = {subSequence:subSequence}