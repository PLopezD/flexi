module.exports = {
  logging: true,
  db: {
    url: process.env.MONGOLAB_URI || 'mongodb://localhost/flexi'
  },
  port : process.env.PORT || 8080
};



