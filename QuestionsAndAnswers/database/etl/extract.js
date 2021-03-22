const fs = require('fs')
const destroy = require('destroy')

const ut = require('./utility.js')

const extractData = (file, headers, tag, cb) => {
  const stream = fs.createReadStream(file).setEncoding('UTF8')

  stream.on('error', (err) => {
    return console.error('Read Stream error: ', err.stack) })

  stream.on('open', () => console.log(`stream has opened ${file}`))

  stream.on('data', (row) => {
    const [...entries] = row.split('\n');
    ut.parseData(entries, headers, (err, result, transform) => {
      if (err) { return cb(err, null) }
      else {
        return transform(tag, result, (err, result, load) => {
          if (err) { return cb(err, null) }
          else {
            return load(result, (err, result) => {
              if (err) { return cb(err, null) }
              else {
                return cb(null, result)
              }
            })
          }
        })
      }
    })
  })
  stream.on('close', () => console.log(`stream has closed ${file}`))

  stream.on('end', () => console.log('stream is finished'))
}

// QUESTIONS

// console.time('extractData')
// console.timeEnd('extractData')
// extractData(ut.questions, ut.qHeaders, 'q', (err, result) => {
//   if (err) { return console.error(err) }
// })


// ANSWERS

// console.time('extractData')
// console.timeEnd('extractData')
// extractData(ut.answers, ut.aHeaders, 'a', (err, result) => {
//   if (err) { return console.error(err) }
// })


// PHOTOS

// console.time('extractData')
// extractData(ut.photos, ut.pHeaders, 'p', (err, result) => {
//   if (err) { return console.error(err) }
// })
// console.timeEnd('extractData')