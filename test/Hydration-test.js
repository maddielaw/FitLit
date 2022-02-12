import { expect } from 'chai';
import Hydration from '../src/Hydration';

let userHydration, hydrationData, userWeekSet

describe('HydrationProfile', () => {

  beforeEach(function() {
    hydrationData = [
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 69
  },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 47
  },
  {
      "userID": 4,
      "date": "2019/06/15",
      "numOunces": 85
}];

  userWeekSet = [
    {userID: 2, date: '2020/01/16', numOunces: 44},
    {userID: 2, date: '2020/01/17', numOunces: 86},
    {userID: 2, date: '2020/01/18', numOunces: 79},
    {userID: 2, date: '2020/01/19', numOunces: 56},
    {userID: 2, date: '2020/01/20', numOunces: 50},
    {userID: 2, date: '2020/01/21', numOunces: 85},
    {userID: 2, date: '2020/01/22', numOunces: 93}
  ]

  userHydration = new Hydration(hydrationData)
  })

  it('should be a function', function () {
    expect(Hydration).to.be.a('function');
  });

  it('should instantiate a HydrationProfile', function () {
    expect(userHydration).to.be.an.instanceof(Hydration)
  });

  it('should be able to hold a user\'s hydration data', function () {
    expect(userHydration.hydrationData).to.equal(hydrationData)
  })

  it('should be able to calculate ounces per day based on date', function() {
    expect(userHydration.calcOuncesPerDay("2019/06/16")).to.equal(69)
  })

  it('should be able to calculate a user\'s average overall water intake', function() {
    expect(userHydration.calcAverageOunces()).to.equal(69)
  })

  it('should be able to calculate ounces of water per day in most recent week', function() {
    userHydration.hydrationData = userWeekSet
    expect(userHydration.calcOuncesPerWeek())
      .to.eql([
        "2020/01/16: 44",
        "2020/01/17: 86",
        "2020/01/18: 79",
        "2020/01/19: 56",
        "2020/01/20: 50",
        "2020/01/21: 85",
        "2020/01/22: 93"])
  })



})
