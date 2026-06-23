# Environment Variables
- it is used for retricting the Exposure of Your Secrets
- This Secrets can be API KEY, Password, Tokens, PORT Number
## Installation
```
npm install dotenv
```

## Configure
- .env
```
PORT=3000

MONGO_URI=mongodb://localhost:27017/userdb

SESSION_SECRET=nikunjsecret
```

## Use in Server.js File
```
import dotenv from 'dotenv';

dotenv.config();
```

## How to Use
- before
```
PORT= 3000
MONGODB_URI=mongodb://127.0.0.1:27017/userdb
SESSION_SECRET=mysecretkey

```
- after
```
const PORT= process.env.PORT
const MONGODB_URI= process.env.MONGODB_URI
const SECRET= process.env.SESSION_SECRET
```


