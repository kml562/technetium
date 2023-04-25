const express = require('express');
const router = express.Router();

// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String ,
// age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote
// WRITE A POST API TO THE ABOVE
//take this as sample for array of persons:

let persons= [{name: "PK",age: 10, votingStatus: false},{name: "SK",age: 20,votingStatus: false
},{name: "AA",age: 70,votingStatus: false},{name: "SC",age: 5, votingStatus: false
},{ name: "HO",age: 40,votingStatus: false}]


router.post("/query",function(req,res){
let = req.query;
console.log(data)


})


//filter out all the numbers that are greater than "input" ( input is received from query params)
let myArr = [23, 45, 67, 281394, 32424, 423, 24, 42323, 4, 234, 12, 34]

router.post( "/post-query-2", function (req, res){
    let input= req.query.input

    // let finArr= myArr.filter ( ele => ele>input )
    let finalArr= []
    for( i=0 ; i<myArr.length ; i++){
        if ( myArr[i] > input )     finalArr.push( myArr[i])
    }
    res.send( {data: finalArr , status: true})
})


module.exports = router;