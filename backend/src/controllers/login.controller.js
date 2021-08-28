const User = require("../models/User");
const UserData = require("../models/UserData")
const Role = require("../models/Role");
const jwt = require("jsonwebtoken");

async function signIn(req, res) {
    const { username, pwd } = req.body;

    if (username && pwd) {
        const { username } = req.body;

        const newUser = await User.findOne({ username });
        if (!newUser) return res.status(404).json({ error: "User not found" });

        const validatePassword = await User.comparePassword(req.body.pwd, newUser.pwd);
        if (!validatePassword) return res.status(404).json({ error: "Password does not match" });

        const token = jwt.sign({ id: newUser._id }, "2019047", {
            expiresIn: 86400
        });

        res.json({ token });
    } else {
        res.status(400).json({ "error": "Missing parameters" });
    }
}

async function signUp(req, res) {
    const { username, pwd, firstname, lastname, email } = req.body;

    const clientid = await Role.findOne({ role: "client" });

    if (!clientid) return res.status(500).json({ error: "Server error: contact developer" });
    if (await User.findOne({ username })) return res.status(400).json({ "error": "The user already exists" });

    if (username && pwd && firstname && lastname && email) {
        if (username.length >= 4) {
            if (pwd.length >= 4) {
                const data = new User({
                    username,
                    pwd: await User.encryptPassword(pwd),
                    role: clientid._id
                });


                data.save()
                    .then(doc => {
                        const userdata = new UserData({
                            firstname,
                            lastname,
                            email,
                            user: doc._id
                        });

                        userdata.save()
                            .then(doc2 => res.json(doc2))
                            .catch(err2 => console.error(err2))
                    })
                    .catch(err => console.error(err));
            } else {
                res.status(400).json({ error: "Password is too short" })
            }
        } else {
            res.status(400).json({ error: "Username is too short" })
        }
    } else {
        res.status(400).json({ "error": "Missing parameters" })
    }
}

module.exports = { signIn, signUp }