import moment from 'moment'

export default class ScoreboardGenerator {
  constructor(workouts, users, totalWorkoutDays) {
    this.workouts = workouts
    this.users = users
    this.totalWorkoutDays = totalWorkoutDays
  }

  generateScoreboard() {
    if (!this.workouts || !this.users) {
      return []
    }
    let cleanWorkouts = this.workouts.map(function(workout) {
      return {
        date:moment(workout.date).format('L'),
        user:workout.user.email
      }
    })
    return this.scoreboardCreator(cleanWorkouts)
  } 

  scoreboardCreator(cleanWorkouts) {
    let scoreBoard = []
    this.users.forEach((user, i) => {
      scoreBoard[i] = {}
      scoreBoard[i].user = user
      scoreBoard[i].date = []
      for (let j = 0; j < cleanWorkouts.length; j++) {
        let dateItem = cleanWorkouts[j]
        if (dateItem.user === user.email) {
          if (scoreBoard[i].date.indexOf(dateItem.date) === -1) {
            scoreBoard[i].date.push(dateItem.date)
          }
        }
      }
      scoreBoard[i].score = this.totalWorkoutDays - scoreBoard[i].date.length
    })
    return scoreBoard
  }
}


