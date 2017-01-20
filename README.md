# Flexy (v.0.0.1) 

Goal for self
---------
  - Use and learn new technologies to write something someone might use
  - Have some fun with a side project
  - Get better at disecting problems, breaking them into smaller/manageable pieces
  - Use Vim as much as possible

Goal for app
----------
Create a mobile app to track workouts amongst friends. The app should:

  - Allow users to upload photos so others within the challenge can view them. (upload screen)
  - Allow users to have a calendar view so they can scroll through the pictures uploaded on a given day. (calendar screen)
  - Allow users to see how many days they and others have worked out and how many days until someone loses the challenge. (leaderboard screen)
  - Allow users to login with Facebook OAuth
  - 

  Future enhancements
  ----
  - Chat application for trashtalk 
  - Admin screens, allow users to create their own challenges with new friends 
  
Stack
----------
  - React-Native
  - Express or Rails 
  - Facebook Oauth
  - Amazon S3
  - Digital Ocean
  

Steps:
  1. front end rnative
    
        
  2. rails back end for routes 
    / post pict
      store workout in db
      store pic on s3
      
    / get facebook
      get creds? -- investigate
    / get scoreboard
      generate object with user info and their score
      pass down challenge id -- return scoreboard
      
    / get pics from challenge
      
  3. build models
    a. excersises model
    b. challenge model
    c. user model
    d. 


https://medium.com/@scottdixon/react-native-creating-a-custom-module-to-upload-camera-roll-images-7a3c26bac309#.stnvvk3d9
https://www.npmjs.com/package/react-native-camera
https://www.npmjs.com/package/blob-util
https://github.com/wkh237/react-native-fetch-blob
https://github.com/marcshilling/react-native-image-picker

http://codebeautify.org/base64-to-image-converter