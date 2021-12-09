const fs = require('fs')

// const book = {
//     title : 'Ego is the enemy',
//     author : 'Ryan Holiday'
// }

// // takes in the object and makes it a string
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// we read the file getting our binary data
// const dataBuffer = fs.readFileSync('1-json.json')

// // we convert this data to a standard string in javascript
// const dataJSON = dataBuffer.toString()

// // we parse that json data into an object
// const data = JSON.parse(dataJSON)

// console.log(data.title)


// take the content of the json file in binary
const dataBuffer = fs.readFileSync('1-json.json')
// transfer to string
const dataJSON = dataBuffer.toString()
// parse the json data to a javascript object
const dataObj = JSON.parse(dataJSON)

// make the changes
dataObj.name = 'Reem'
dataObj.age = 23

// convert the json object to string so we can write it to the file
const newJSON = JSON.stringify(dataObj)
fs.writeFileSync('1-json.json', newJSON)

