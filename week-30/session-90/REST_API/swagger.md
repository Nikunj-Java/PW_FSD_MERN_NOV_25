# Swagger Installation
- it a UI Used for API Documentation
- Installation

```
npm install swagger-ui-express
```

# Swagger Documentation
```
const swaggerDocument = {
    openapi: '3.0.0',
    info: {
        title: 'User API',
        version: '1.0.0'
    },
    paths: {
        '/users': {
            get: {
                summary: 'Get all users',
                responses: {
                    200: {
                        description: 'List of users'
                    }
                }
            },
            post: {
                summary: 'Create user',
                responses: {
                    201: {
                        description: 'User created'
                    }
                }
            }
        },
        '/users/{id}': {
            get: {
                summary: 'Get user by ID',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'integer'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'User found'
                    }
                }
            }
        }
    }
};
```