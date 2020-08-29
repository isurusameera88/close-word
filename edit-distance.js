  
  /*
@Author - R Isuru Sameera Sandaruwan

*/
  
  
  const createDataMat = (word1)=>{
	  var temp = [];
      for( i = 0 ; i < word1.length + 1; i ++){
        temp.push(i);
      }    
      return temp;
    }

    const findMin = (array) =>{
      return array.sort()[0];
    }

    const editDistance = (word1,word2)=>{
        var data = [];
        var temp = createDataMat(word1);
        var i;
        data.push(temp);
        for(i=0;i < word2.length;i++){
          temp = [];
          temp.push(i + 1);
          for(j=0;j< word1.length;j++){
            if(word2.charAt(i) == word1.charAt(j))
              temp.push(data[i][j]);
            else
              temp.push(findMin([temp[j],data[i][j],data[i][j+1]]) + 1);
          }
          data.push(temp);
        }
        return data[word2.length][word1.length];
    }

    module.exports = {editDistance:editDistance}

