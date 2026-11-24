// Write a function that accepts an age and returns true if the person is eligible to vote, otherwise false.
function checkVoteEligibility(age) {
     if(age >= 18) {
        return "Eligible to Vote"
    }
    else {
        return "Not eligible to vote"
    }
}

console.log(checkVoteEligibility(18))
console.log(checkVoteEligibility(17))