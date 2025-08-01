const userModel = require('../models/userModel');

const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);;
    let user;
    

    const userExiste = await userModel.findOne({ email });
    if (userExiste) {
        res.status(209).send({ message: 'Email already exists' });
        return;
        let user;
    }

    try {
        user = await userModel.create({ username, email, password }),
        console.log('User created successfully', user);


    }

    catch (error) {
        res.send({ message: 'Error registring user', error });
        return;
    };


}

module.exports = { addUser };