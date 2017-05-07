var dburl = process.env.MONGODB_ADDRESS ? 'mongodb://'+ process.env.MONGODB_ADDRESS +':27017' : 'mongodb://localhost/flexi'

module.exports = {
  logging: true,
  db: {
    url: dburl
  },
  port : process.env.PORT || 8080
};



