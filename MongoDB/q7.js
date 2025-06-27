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
])