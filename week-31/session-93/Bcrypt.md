# Bcrypt Implementation

## Installation
```
npm install bcrypt
```

## Import in Existing MongoDb Application
- import in Controller
```
import bcrypt from 'bcrypt';
```

## Hashed the Password During Registration
```
export const createUser = async (req, res) => {

    try {

        const hashedPassword =
            await bcrypt.hash(
                req.body.password,
                10
            );

        const user = await User.create({

            name: req.body.name,

            email: req.body.email,

            password: hashedPassword

        });

        res.status(201).json({

            success: true,

            data: user

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
```

## What Get Stored ?
- Suppose request is
```
{
    "name":"Nikunj",
    "email":"admin@gmail.com",
    "password":"Nikunj@1234"
}
```
- MongoDB Stores
```
{
    "_id":"689...",
    "name":"Nikunj",
    "email":"admin@gmail.com",
    "password":"$2b$10$M4X6..."
}
```