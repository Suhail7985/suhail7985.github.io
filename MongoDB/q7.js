// posts 
// _id-posts
// p1-Post 1
// p2-Post 2


// comments 
// _id-pid-comments
// c1-p1-Comment 1
// c2-p1-Comment 2
// c3-p2-Comment 3
// c4-p2-Comment 4
// c4-p2-Comment 5


db.posts.insertMany([
  { _id: "p1", post: "Post 1" },
  { _id: "p2", post: "Post 2" }
])




db.comments.insertMany([
  { _id: "c1", pid: "p1", comment: "Comment 1" },
  { _id: "c2", pid: "p1", comment: "Comment 2" },
  { _id: "c3", pid: "p2", comment: "Comment 3" },
  { _id: "c4", pid: "p2", comment: "Comment 4" },
  { _id: "c5", pid: "p2", comment: "Comment 5" }
])

db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "pid",
            as: "comments"
            }
        },
        { $unwind: "$comments" },
        { $project: { post: 1, comments: 1 } }
])


db.comments.insertOne({ _id: "c6", pid: "p1", comment: "Comment 6" })


//

// marks
// name,term,subject,Score 
// john,t1,maths,98
// john,t2,maths,90
// john,t3,maths,88
// john,t1,science,92
// john,t2,science,82
// john,t3,science,82
// Cathy,t1,maths,92
// Cathy,t2,maths,92
// Cathy,t3,maths,82
// Cathy,t1,science,92
// Cathy,t2,science,82
// Cathy,t3,science,80

db.marks.insertMany([
    { name: "John", term: "t1", subject: "maths", Score: "98" },
    { name: "John", term: "t2", subject: "maths", Score: "90" },
    { name: "John", term: "t3", subject: "maths", Score: "88" },
    { name: "John", term: "t1", subject: "science", Score: "92" },
    { name: "John", term: "t2", subject: "science", Score: "82" },
    { name: "John", term: "t3", subject: "science", Score: "82" },
    { name: "Cathy", term: "t1", subject: "maths", Score: "92" },
    { name: "Cathy", term: "t2", subject: "maths", Score: "92" },
    { name: "Cathy", term: "t3", subject: "maths", Score: "82" },
    { name: "Cathy", term: "t1", subject: "science", Score: "92" },
    { name: "Cathy", term: "t2", subject: "science", Score: "82" },
    { name: "Cathy", term: "t3", subject: "science", Score: "80" }
])



//display Average score of each student name wise
db.marks.aggregate([
    {
        $group: {
            _id: "$name",
            AvgScore: { $avg: "$Score" }}},
            {$sort:{_id:1}}

])



//display Average score of each student  term wise 
db.marks.aggregate([    
    {
        $group: { _id: { name: "$name", term: "$term" },
        average: { $avg: "$Score" } }
},
{ $project: { _id: 0, name: "$_id.name", term: "$_id.term", average: 1 } }
])


// display Average score of each student subject wise
db.marks.aggregate([
    {
        $group: {
            _id: {term:"$term",subject:"$subject"},
            AvgScore: { $avg: "$Score" }}},
            {$sort:{_id:1}}

])


// display Average score of each student subject wise and term wise
db.marks.aggregate([
{
    $group: {
        _id: {name:"$name",term:"$term",subject:"$subject"},
        AvgScore: { $avg: "$Score" }}},
        {$sort:{_id:1}}
    ])



// studentInfo
// _id,name
// s1,John
// s2,Cathy

db.studentInfo.insertMany([
    { _id: "s1", name: "John" },
    { _id: "s2", name: "Cathy" }

])

//rename John to s1 from collection marks
db.marks.updateMany(
  {},
  { $rename: { name: "sid" } }
)


db.marks.updateMany(
  {sid:"John"},
  { $set: { sid: "s1" } }
)

    db.marks.updateMany(
    {sid:"Cathy"},
    { $set: { sid: "s2" } }
    )

//show the name form studentInfo collection and further details from marks
db.studentInfo.aggregate([
    {
        $lookup: {
            from: "marks",
            localField: "_id",
            foreignField: "sid",
            as: "marks"
            }
            },
            { $unwind: "$marks" },
            {$group: {
                _id: "$marks.term",
               
                AvgScore: { $avg: "$marks.Score" }
            }
}       
])




db.employees.aggregate([{$project:{_id:0,name:1,salary:1,Grade:"Grade A"}}])

//salary requirement greater 3000 have grade A
db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        Grade:{$cond:[{$gt:["$salary",3000]},"Grade A","Grade B"]}
    }}
])

//or

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        Grade:{$cond:{
            if:{$gt:["$salary",3000]},
            then:"Grade A",
            else:"Grade B"
        }}}
    },
    {
        //store the result in new collection 
        $out: "GradeWiseSalary"
    }
])


db.createView("viewname","collectionname",[query])


db.createView("salaryview", "employees", [
{
    $project: {
    _id: 0,
    name: 1,
    salary: 1,
    Grade: {
    $cond: {
    if: { $gte: ["$salary", 3000] },
    then: "Grade A",
    else: "Grade B"
        }
    }}}
])





//mongodump
//mongodump -d lpu -o E:\lpubackup