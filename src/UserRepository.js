import userData from './data/users'
import User from './User'

class UserRepository {
  constructor(data){
    this.data = data;
    this.currentUser = {}
  }

  findUserById(id) {
    const user = this.data.find(user => user.id === id)
    this.currentUser = user
    return user
  }

  findFriendsById(id) {
    const friend = this.data.find(friend => friend.id === id)
    return friend
  }

  calculateAverageStepGoal() {
    const totalSteps = this.data.reduce((total, num) => {
      return total += num.dailyStepGoal
    }, 0)
    return totalSteps / this.data.length
  }

  createNewUser() {
    const newUser = new User(this.currentUser)
    console.log()
    return newUser
  }

  createUserFriendList() {
    const friendIds = this.currentUser.friends
    const foundFriends = friendIds.map(friendId => {
      return this.findFriendsById(friendId).name
    })
    return foundFriends
  }
}

export default UserRepository;
