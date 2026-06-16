const swaggerDocument = {
    openapi: '3.0.0',

    info: {
        title: 'User Management API',
        version: '1.0.0',
        description: 'REST API for User Management'
    },

    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local Development Server'
        }
    ],

    tags: [
        {
            name: 'Users',
            description: 'User Operations'
        }
    ],

    components: {
        schemas: {

            User: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1
                    },
                    name: {
                        type: 'string',
                        example: 'Nikunj'
                    },
                    email: {
                        type: 'string',
                        example: 'nikunj@gmail.com'
                    }
                }
            },

            CreateUserRequest: {
                type: 'object',
                required: ['name', 'email'],
                properties: {
                    name: {
                        type: 'string',
                        example: 'John'
                    },
                    email: {
                        type: 'string',
                        example: 'john@gmail.com'
                    }
                }
            },

            ErrorResponse: {
                type: 'object',
                properties: {
                    success: {
                        type: 'boolean',
                        example: false
                    },
                    message: {
                        type: 'string',
                        example: 'User Not Found'
                    }
                }
            }
        }
    },

    paths: {

        '/users': {

            get: {
                tags: ['Users'],
                summary: 'Get All Users',

                responses: {
                    200: {
                        description: 'Users Retrieved Successfully'
                    }
                }
            },

            post: {
                tags: ['Users'],
                summary: 'Create New User',

                requestBody: {
                    required: true,

                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CreateUserRequest'
                            }
                        }
                    }
                },

                responses: {
                    201: {
                        description: 'User Created Successfully'
                    }
                }
            }
        },

        '/users/{id}': {

            get: {
                tags: ['Users'],
                summary: 'Get User By ID',

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
                        description: 'User Found'
                    },

                    404: {
                        description: 'User Not Found'
                    }
                }
            },

            put: {
                tags: ['Users'],
                summary: 'Update User',

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

                requestBody: {
                    required: true,

                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CreateUserRequest'
                            }
                        }
                    }
                },

                responses: {
                    200: {
                        description: 'User Updated Successfully'
                    },

                    404: {
                        description: 'User Not Found'
                    }
                }
            },

            delete: {
                tags: ['Users'],
                summary: 'Delete User',

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
                        description: 'User Deleted Successfully'
                    },

                    404: {
                        description: 'User Not Found'
                    }
                }
            }
        }
    }
};

export default swaggerDocument;