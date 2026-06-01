# MongoDB Social Media / Blogging Application Project - Solution

---

# 1. Create Database

```javascript
use social_media_db
```

---

# 2. Collection Design

## Users Collection

```javascript
db.users.insertMany([
{
    username: "john123",
    fullName: "John Smith",
    email: "john@gmail.com",
    bio: "MongoDB Developer",
    joinDate: new Date("2025-01-10"),
    followersCount: 250,
    followingCount: 180
},
{
    username: "alice89",
    fullName: "Alice Johnson",
    email: "alice@gmail.com",
    bio: "Tech Blogger",
    joinDate: new Date("2025-02-05"),
    followersCount: 500,
    followingCount: 320
},
{
    username: "mike_dev",
    fullName: "Mike Brown",
    email: "mike@gmail.com",
    bio: "Full Stack Developer",
    joinDate: new Date("2025-03-15"),
    followersCount: 150,
    followingCount: 90
}
])
```

---

## Tags Collection

```javascript
db.tags.insertMany([
{
    tagName: "mongodb",
    description: "MongoDB Articles",
    usageCount: 45
},
{
    tagName: "nodejs",
    description: "Node.js Tutorials",
    usageCount: 38
},
{
    tagName: "javascript",
    description: "JavaScript Programming",
    usageCount: 50
},
{
    tagName: "cloud",
    description: "Cloud Computing",
    usageCount: 20
}
])
```

---

## Posts Collection

### Embedding Author Information

```javascript
db.posts.insertMany([
{
    title: "MongoDB Aggregation Guide",
    content: "Learn aggregation framework...",
    author: {
        userId: 1,
        username: "john123",
        fullName: "John Smith"
    },
    tags: ["mongodb", "database"],
    likes: 350,
    views: 2500,
    createdDate: new Date("2025-04-10")
},
{
    title: "Node.js Best Practices",
    content: "Node.js coding standards...",
    author: {
        userId: 2,
        username: "alice89",
        fullName: "Alice Johnson"
    },
    tags: ["nodejs", "javascript"],
    likes: 420,
    views: 3500,
    createdDate: new Date("2025-05-01")
},
{
    title: "Cloud Deployment",
    content: "Deploy applications to cloud...",
    author: {
        userId: 3,
        username: "mike_dev",
        fullName: "Mike Brown"
    },
    tags: ["cloud"],
    likes: 150,
    views: 1800,
    createdDate: new Date("2025-05-12")
}
])
```

---

## Comments Collection

### Referencing Posts

```javascript
db.comments.insertMany([
{
    postId: ObjectId("POST_ID_1"),
    user: {
        userId: 2,
        username: "alice89"
    },
    content: "Excellent article!",
    createdDate: new Date()
},
{
    postId: ObjectId("POST_ID_1"),
    user: {
        userId: 3,
        username: "mike_dev"
    },
    content: "Very helpful tutorial.",
    createdDate: new Date()
},
{
    postId: ObjectId("POST_ID_2"),
    user: {
        userId: 1,
        username: "john123"
    },
    content: "Nice explanation.",
    createdDate: new Date()
}
])
```

---

# 3. Why Embedding and Referencing?

## Embedding

Used in:

```javascript
author:{
  userId,
  username,
  fullName
}
```

Advantages:

- Faster reads
- Fewer joins
- Better performance

Disadvantages:

- Data duplication
- Updates required in multiple documents

---

## Referencing

Used in:

```javascript
comments.postId
```

Advantages:

- Avoids duplication
- Flexible structure

Disadvantages:

- Requires lookup operations

---

# 4. Basic Queries

---

## Find All Users

```javascript
db.users.find()
```

---

## Users Joined After Specific Date

```javascript
db.users.find({
    joinDate: {
        $gt: new Date("2025-01-31")
    }
})
```

---

## Users With More Than 100 Followers

```javascript
db.users.find({
    followersCount: {
        $gt: 100
    }
})
```

---

## Username Starts With "a"

```javascript
db.users.find({
    username: /^a/
})
```

---

## Find All Posts

```javascript
db.posts.find()
```

---

## Posts With More Than 500 Views

```javascript
db.posts.find({
    views: {
        $gt: 500
    }
})
```

---

## Posts With More Than 100 Likes

```javascript
db.posts.find({
    likes: {
        $gt: 100
    }
})
```

---

## Posts Having mongodb Tag

```javascript
db.posts.find({
    tags: "mongodb"
})
```

---

## Comments For Specific Post

```javascript
db.comments.find({
    postId: ObjectId("POST_ID_1")
})
```

---

## Count Comments Per Post

```javascript
db.comments.aggregate([
{
    $group: {
        _id: "$postId",
        totalComments: {
            $sum: 1
        }
    }
}
])
```

---

## Find All Tags

```javascript
db.tags.find()
```

---

## Tags Used More Than 10 Times

```javascript
db.tags.find({
    usageCount: {
        $gt: 10
    }
})
```

---

# 5. Aggregation Framework

---

## Most Active Users

```javascript
db.posts.aggregate([
{
    $group: {
        _id: "$author.username",
        totalPosts: {
            $sum: 1
        }
    }
},
{
    $sort: {
        totalPosts: -1
    }
},
{
    $limit: 5
}
])
```

### Output

```json
[
 {
   "_id":"alice89",
   "totalPosts":12
 },
 {
   "_id":"john123",
   "totalPosts":10
 }
]
```

---

## Most Commented Posts

```javascript
db.comments.aggregate([
{
    $group:{
        _id:"$postId",
        totalComments:{
            $sum:1
        }
    }
},
{
    $sort:{
        totalComments:-1
    }
},
{
    $limit:10
}
])
```

---

## Trending Tags

```javascript
db.posts.aggregate([
{
    $unwind:"$tags"
},
{
    $group:{
        _id:"$tags",
        totalUsage:{
            $sum:1
        }
    }
},
{
    $sort:{
        totalUsage:-1
    }
}
])
```

---

## User Engagement Report

```javascript
db.posts.aggregate([
{
    $group:{
        _id:null,
        totalLikes:{
            $sum:"$likes"
        },
        totalViews:{
            $sum:"$views"
        },
        avgLikes:{
            $avg:"$likes"
        },
        avgViews:{
            $avg:"$views"
        }
    }
}
])
```

---

# 6. Advanced Queries

---

## Top Viewed Posts

```javascript
db.posts.find()
.sort({views:-1})
.limit(10)
```

---

## Top Liked Posts

```javascript
db.posts.find()
.sort({likes:-1})
.limit(10)
```

---

## Highest Engagement Users

```javascript
db.posts.aggregate([
{
    $group:{
        _id:"$author.username",
        totalLikes:{
            $sum:"$likes"
        },
        totalViews:{
            $sum:"$views"
        }
    }
},
{
    $project:{
        totalLikes:1,
        totalViews:1,
        engagement:{
            $add:["$totalLikes","$totalViews"]
        }
    }
},
{
    $sort:{
        engagement:-1
    }
}
])
```

---

## Posts Created This Month

```javascript
db.posts.find({
createdDate:{
$gte:new Date("2025-05-01"),
$lt:new Date("2025-06-01")
}
})
```

---

## Posts With No Comments

```javascript
db.posts.aggregate([
{
    $lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"postId",
        as:"comments"
    }
},
{
    $match:{
        comments:{
            $size:0
        }
    }
}
])
```

---

# 7. Indexing

---

## Users

```javascript
db.users.createIndex({
    username:1
})

db.users.createIndex({
    email:1
})
```

---

## Posts

```javascript
db.posts.createIndex({
    title:1
})

db.posts.createIndex({
    createdDate:1
})

db.posts.createIndex({
    likes:1
})

db.posts.createIndex({
    views:1
})
```

---

## Comments

```javascript
db.comments.createIndex({
    postId:1
})

db.comments.createIndex({
    userId:1
})
```

---

## Tags

```javascript
db.tags.createIndex({
    tagName:1
})
```

---

# 8. Query Performance Analysis

---

## Before Indexing

```javascript
db.posts.find({
likes:{
$gt:100
}
}).explain("executionStats")
```

Sample Output:

```json
{
 "stage":"COLLSCAN",
 "executionTimeMillis":25
}
```

---

## After Indexing

```javascript
db.posts.createIndex({
likes:1
})
```

```javascript
db.posts.find({
likes:{
$gt:100
}
}).explain("executionStats")
```

Output:

```json
{
 "stage":"IXSCAN",
 "executionTimeMillis":2
}
```

---

## Conclusion

| Metric | Before | After |
|----------|----------|----------|
| Scan Type | COLLSCAN | IXSCAN |
| Time | 25 ms | 2 ms |
| Performance | Slow | Fast |

---

# 9. Aggregation Pipeline Optimization

---

## Monthly Post Statistics

```javascript
db.posts.aggregate([
{
$group:{
_id:{
month:{
$month:"$createdDate"
}
},
totalPosts:{
$sum:1
},
totalLikes:{
$sum:"$likes"
},
totalViews:{
$sum:"$views"
}
}
}
])
```

---

## Tag Popularity Report

```javascript
db.posts.aggregate([
{
$unwind:"$tags"
},
{
$group:{
_id:"$tags",
usageCount:{
$sum:1
},
avgLikes:{
$avg:"$likes"
},
avgViews:{
$avg:"$views"
}
}
},
{
$sort:{
usageCount:-1
}
}
])
```

---

## User Activity Dashboard

```javascript
db.posts.aggregate([
{
$group:{
_id:"$author.username",
totalPosts:{
$sum:1
},
totalLikes:{
$sum:"$likes"
},
totalViews:{
$sum:"$views"
}
}
}
])
```

---

# Expected Result

You should now have:

✅ Users Collection

✅ Posts Collection

✅ Comments Collection

✅ Tags Collection

✅ CRUD Operations

✅ Aggregation Pipelines

✅ Lookup Operations

✅ Indexes

✅ Query Optimization

✅ Performance Analysis

✅ MongoDB Compass Implementation

This project demonstrates real-world MongoDB usage for a Social Media / Blogging platform and covers document modeling, embedding, referencing, aggregation pipelines, indexing, and query optimization.