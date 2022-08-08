let current  = function() {
    console.log(  new Date())
}

const batchName = "Plutonium week3 Day 5"
let getBatchinfo = function() {
    console.log(batchName,'the topic for today is Nodejs module system')
}
module.exports.Batch = getBatchinfo
module.exports.date =  current
