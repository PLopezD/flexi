module.exports = {
  logging: true,
  db: {
    url: process.env.MONGOLAB_URI || 'mongodb://localhost/gme'
  },
  port : process.env.PORT || 8080
};
