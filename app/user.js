var getUser = function getUser(a,b){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            if(a && b){
                resolve(a+b);
            }else{
                resolve(a+a);
            }
        },1);
    });
    
};

module.exports.getUser = getUser;