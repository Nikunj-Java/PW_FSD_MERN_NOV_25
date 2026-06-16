import users from "../data/user.js";

// get all users
export const getUsers=(req,res)=>{
    res.json(users);
}
// get user by id
export const getUserById = (req, res) => {

    const user = users.find(
        user => user.id === Number(req.params.id)
    );

    if (!user) {

        return res.status(404).json({
            message: 'User Not Found'
        });

    }

    res.json(user);
};

// create user
export const createUser=(req,res)=>{
    const {name,email}=req.body;

    const newUser= {
        id:users.length+1,
        name,
        email
    }
    users.push(newUser);
    res.status(201).json(newUser);
}


// Update user
export const updateUser = (req, res) => {

    const user = users.find(
        user => user.id === Number(req.params.id)
    );

    if (!user) {

        return res.status(404).json({
            message: 'User Not Found'
        });

    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json(user);
};

//delete user
export const deleteUser = (req, res) => {

    const index = users.findIndex(
        user => user.id === Number(req.params.id)
    );

    if (index === -1) {

        return res.status(404).json({
            message: 'User Not Found'
        });

    }

    users.splice(index, 1);

    res.json({
        message: 'User Deleted'
    });
};