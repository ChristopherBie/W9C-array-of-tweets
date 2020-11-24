var tweets = [
    {tweet: 'Operation Warp Speed is unequaled and unrivaled anywhere in the world.', 
        username: 'Pres. Donald Trump', created_on: '11-14-2020', age: 70},
    {tweet: 'This is 5 times faster than the fastest prior vaccine development in history.', 
        username: 'Pres. Donald Trump', created_on: '11-14-2020', age: 70},
    {tweet: 'We cannot waste time and can only give to those states that will use the Vaccine immediately.', 
        username: 'Pres. Donald Trump', created_on: '11-14-2020', age: 70},
    {tweet: 'Therefore the New York delay. Many lives to be saved, but we are ready when they are. Stop playing politics!', 
        username: 'Pres. Donald Trump', created_on: '11-14-2020', age: 70},
    {tweet: 'Congress must now do a Covid Relief Bill. Needs Democrats support. Make it big and focused. Get it done!', 
        username: 'Pres. Donald Trump', created_on: '11-14-2020', age: 70},
    {tweet: 'Help save lives by donating blood or plasma, joining Canada’s stem cell registry, and encouraging others to donate', 
        username: 'Canadian Blood Services', created_on: '11-14-2020', age: 16},
    {tweet: 'Albertans, we need your help! All blood types are needed. Please encourage a family member, friend, or colleague to donate blood as well.', 
        username: 'Canadian Blood Services', created_on: '11-14-2020', age: 16},
    {tweet: 'Jason Kenney: These major upgrades will help boost the quality of patient care offered at the PL hospital, while creating hundreds of jobs when we need them most.', 
        username: 'Jason Kenney', created_on: '11-14-2020', age: 50},
    {tweet: 'Memory Anchor is creating a new free mobile app so citizens can share stories of soldiers buried in war graves, starting Spring 2021.', 
        username: 'Jason Kenney', created_on: '11-14-2020', age: 50},
    {tweet: 'A good read from Dr. Leslyn Lewis: A strong society must encourage, not limit, debate.', 
        username: 'Jason Kenney', created_on: '11-14-2020', age: 50}
];

// for(i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].tweet + "\nCreated by " + tweets[i].username + " on " + tweets[i].created_on + ".");
// }

function age_checker(tweets) {
    return tweets.age >= 18;
}

var tweets_at_least_18 = tweets.filter(age_checker);

for(i = 0; i < tweets_at_least_18.length; i++) {
    console.log(tweets_at_least_18[i]);
}