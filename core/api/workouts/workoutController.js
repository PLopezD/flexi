import Workout from './workoutModel'
import _ from 'lodash'
import fs from 'fs'
require('dotenv').config()


const AWS = require('aws-sdk')
AWS.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY})
const s3 = new AWS.S3()

let controller = {
  uploadWorkoutImage: (req,res,next) => {
    console.log("hitting upload route")
    let myBucket = 'flextester123'
    let myKey = 'woke.jpg'
    let blob = req.headers
    let file = makeFile(blob)
    let params = {Bucket: myBucket, Key: myKey, Body: file}
    s3.putObject(params, function(err, data) {
     if (err) {
       console.log(err)
     } else {
      console.log("Successfully uploaded data to myBucket/myKey")
      console.log(data)
    }
  })
    res.json({'good':'one'})

  }
}

let makeFile = (blob) => {
  console.log(blob)
  return new Buffer([blob])
}

export default controller

