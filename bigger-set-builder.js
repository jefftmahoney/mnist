const fs = require('fs')
const mnist = require('mnist')

const set = mnist.set(8000, 2000)
const trainingSet = set.training
const testSet = set.test

// create a training file source
const trainingContent = trainingSet.map((x) => JSON.stringify(x)).join('\n')
fs.writeFile('data/training_source_bigger.json', trainingContent, (err) => {
  if (err) {
    console.log(`ERROR writing training source file. Details: `, err)
  } else {
    console.log('training source creation successful')
  }
})

// create a test file source
const testContent = testSet.map((x) => JSON.stringify(x)).join('\n')
fs.writeFile('data/test_source_bigger.json', testContent, (err) => {
  if (err) {
    console.log('ERROR writing test source file')
  } else {
    console.log('test source creation successful')
  }
})

// operation successful?  let us know
// console.log('Bigger set creation successful!')
