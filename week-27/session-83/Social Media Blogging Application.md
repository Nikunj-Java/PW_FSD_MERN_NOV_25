
# MongoDB Social Media / Blogging Application Project

## Objective

In this project, you will design and implement a MongoDB-based Social Media / Blogging Application. The application will manage users, posts, comments, and tags while demonstrating MongoDB's document modeling, aggregation framework, indexing, and performance optimization techniques.

---

# Project Requirements

## Task 1: Design MongoDB Collections

Create the following collections:

### Users Collection
Store user information such as:

- Username
- Full Name
- Email
- Bio
- Join Date
- Followers Count
- Following Count

### Posts Collection
Store post details:

- Post Title
- Content
- Author Information
- Tags
- Likes
- Views
- Created Date

### Comments Collection
Store comments for posts:

- Comment Content
- User Information
- Post Reference
- Created Date

### Tags Collection
Store available tags:

- Tag Name
- Description
- Usage Count

---

## Task 2: Schema Design

Design schemas using a combination of:

### Embedding

Embed frequently accessed data such as:

- Author details inside posts
- User details inside comments

### Referencing

Use references for:

- Posts ↔ Comments
- Posts ↔ Tags
- Users ↔ Posts

Explain:

- Why embedding is used
- Why referencing is used
- Advantages and disadvantages of both approaches

---

## Task 3: Insert Sample Data

Populate collections with realistic test data.

### Requirements

Insert:

- 20 Users
- 50 Posts
- 100 Comments
- 15 Tags

Ensure:

- Multiple users create posts
- Multiple comments exist on each post
- Posts contain multiple tags
- Likes and views vary across posts

---

## Task 4: Basic Queries

Perform the following queries:

### Users

1. Find all users.
2. Find users joined after a specific date.
3. Find users with more than 100 followers.
4. Find users whose username starts with "a".

### Posts

5. Find all posts.
6. Find posts with more than 500 views.
7. Find posts with more than 100 likes.
8. Find posts containing a specific tag.

### Comments

9. Find all comments on a specific post.
10. Count comments per post.

### Tags

11. Find all tags.
12. Find tags used more than 10 times.

---

## Task 5: Aggregation Framework

### Most Active Users

Find:

- Total posts created by each user
- Top 5 most active users

Expected Output:

| User | Total Posts |
|--------|------------|
| user1 | 15 |
| user2 | 12 |

---

### Most Commented Posts

Find:

- Number of comments on each post
- Top 10 most commented posts

Expected Output:

| Post Title | Comments |
|------------|----------|
| MongoDB Guide | 55 |

---

### Trending Tags

Find:

- Tags appearing most frequently in posts

Expected Output:

| Tag | Usage Count |
|------|-------------|
| mongodb | 45 |
| nodejs | 38 |

---

### User Engagement Report

Calculate:

- Total Likes
- Total Views
- Average Likes Per Post
- Average Views Per Post

---

## Task 6: Advanced Queries

### Top Viewed Posts

Retrieve:

- Top 10 posts by views

---

### Top Liked Posts

Retrieve:

- Top 10 posts by likes

---

### Users With Highest Engagement

Calculate:

```
Total Likes Received
+
Total Views Received
```

Return top users.

---

### Posts Created This Month

Retrieve all posts created during the current month.

---

### Posts With No Comments

Identify posts that have not received any comments.

---

## Task 7: Indexing

Create indexes for the following fields:

### Users

- username
- email

### Posts

- title
- createdDate
- likes
- views

### Comments

- postId
- userId

### Tags

- tagName

---

## Task 8: Performance Analysis

### Before Indexing

Run:

```javascript
db.posts.find({ likes: { $gt: 100 } }).explain("executionStats")
```

Record:

- Execution Time
- Documents Examined
- Winning Plan

---

### After Indexing

Create appropriate indexes and execute the same query again.

Compare:

- Execution Time
- Query Performance
- Index Usage

Document findings.

---

## Task 9: Aggregation Pipeline Optimization

Create aggregation pipelines for:

### Monthly Post Statistics

Calculate:

- Number of posts per month
- Total likes per month
- Total views per month

---

### Tag Popularity Report

Calculate:

- Tag usage frequency
- Average likes per tag
- Average views per tag

---

### User Activity Dashboard

Generate:

- Total Posts
- Total Comments
- Total Likes Received
- Total Views Received

For each user.

---

## Task 10: MongoDB Compass Implementation

Perform all tasks using MongoDB Compass:

### Requirements

- Create collections
- Insert documents
- Build indexes
- Run aggregation pipelines
- Export results

Capture screenshots for:

1. Collections
2. Documents
3. Aggregation Pipelines
4. Indexes
5. Query Results

---

# Deliverables

Submit:

### Database Files

- Users Collection
- Posts Collection
- Comments Collection
- Tags Collection

### Queries

- CRUD Queries
- Aggregation Pipelines
- Index Creation Scripts

### Reports

- Performance Comparison Report
- Indexing Report
- Aggregation Results Report

### Screenshots

- MongoDB Compass Collections
- Aggregation Pipelines
- Query Results
- Index Configuration

---

# Bonus Challenges

### Challenge 1

Implement a follower-following relationship between users.

---

### Challenge 2

Generate a recommendation system that suggests posts based on:

- User interests
- Frequently used tags

---

### Challenge 3

Create a trending score formula:

Score = (Likes × 2) + Comments + (Views ÷ 10)

Rank posts by trending score.

---

### Challenge 4

Build a complete MongoDB Compass dashboard showing:

- Active Users
- Trending Posts
- Trending Tags
- Monthly Activity

---

# Expected Learning Outcomes

After completing this project, you will be able to:

- Design MongoDB document schemas.
- Understand embedding vs referencing.
- Work with large datasets efficiently.
- Use aggregation pipelines effectively.
- Optimize queries using indexes.
- Analyze database performance.
- Build real-world social media and blogging applications using MongoDB.

