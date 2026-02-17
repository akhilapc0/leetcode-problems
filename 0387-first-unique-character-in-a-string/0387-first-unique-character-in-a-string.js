/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s){
   let obj={}
for(let str of s){
    if(obj[str]){
        obj[str]+=1
    }else{
        obj[str]=1
    }
}
console.log(obj)
let result=""
for(let key in obj){
    if(obj[key] ===1){
        
        result+=key
       
    }

}
console.log(result)
for(let i=0;i<s.length;i++){
    if(result.includes(s[i])){
        return i 
    }
}
return -1


}

