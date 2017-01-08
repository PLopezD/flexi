import Workout from './workoutModel'
import _ from 'lodash'
import fs from 'fs'
require('dotenv').config()

const AWS = require('aws-sdk');
AWS.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY});
const s3 = new AWS.S3();

let controller = {
  uploadWorkoutImage: (req,res,next) => {
    let myBucket = 'flextester123';
    let myKey = '4.jpg';
    let blob = req.headers.body
    let file = makeFile(blob)
    let params = {Bucket: myBucket, Key: myKey, Body: file};
    s3.putObject(params, function(err, data) {
     if (err) {
       console.log(err)
     } else {
      console.log("Successfully uploaded data to myBucket/myKey");
      console.log(data)
    }
  });
    res.json({'good':'one'})

  }
}

let makeFile = (blob) => {
  console.log(blob.toString())
  let returnBlob = blob.blob()
  console.log(returnBlob)
  return returnBlob
}

export default controller

