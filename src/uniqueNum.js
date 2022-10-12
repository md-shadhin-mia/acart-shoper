function uniqueNum(){
    return (new Date()) / (Math.random()*1000000000) | 0
}

module.exports = uniqueNum;