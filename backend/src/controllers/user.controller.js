const User = require("../models/User");
const UserData = require("../models/UserData");
const jwt = require("jsonwebtoken");

async function getUsers(req, res) {
    User.find()
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

async function getUserById(req, res) {
    User.findOne({ _id: req.params.id })
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

async function getMyUser(req, res) {
    const data = jwt.verify(req.headers["x-access-token"], "2019047", { complete: false });

    User.findOne({ _id: data.id }, { pwd: 0 })
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

async function editUser(req, res) {
    const { username, pwd, firstname, lastname, email } = req.body;

    if (username || pwd || firstname || lastname || email) {
        UserData.findOne({ user: req.params.id })
            .then(async function(doc) {
                await UserData.findByIdAndUpdate(doc._id, { firstname, lastname, email, user: data.id })
            })
            .catch(err => console.error(err))
        User.findByIdAndUpdate(req.params.id, { username, pwd: await User.encryptPassword(pwd) })
            .then(doc => res.json(doc))
            .catch(err => console.error(err))
    } else {
        res.status(400).json({ error: "There is nothing to edit" })
    }
}

async function editMyUser(req, res) {
    const data = jwt.verify(req.headers["x-access-token"], "2019047", { complete: false });
    const { username, pwd, firstname, lastname, email } = req.body;

    if (username || pwd || firstname || lastname || email) {
        UserData.findOne({ user: data.id })
            .then(async function(doc) {
                await UserData.findByIdAndUpdate(doc._id, { firstname, lastname, email, user: data.id })
            })
            .catch(err => console.error(err))
        User.findByIdAndUpdate(data.id, { username, pwd: await User.encryptPassword(pwd) })
            .then(doc => res.json(doc))
            .catch(err => console.error(err))
    } else {
        res.status(400).json({ error: "There is nothing to edit" })
    }
}

async function deleteUser(req, res) {
    try {
        const userdata = await UserData.findOne({ user: req.params.id })
        if (!userdata) return res.status(400).json({ error: "User does not have user data" });

        await UserData.findByIdAndDelete(userdata.id);
        User.findByIdAndDelete(req.params.id)
            .then(doc => res.json(doc))
            .catch(err => console.error(err))
    } catch (e) {
        console.error(e)
    }
}

async function deleteMyUser(req, res) {
    try {
        const data = jwt.verify(req.headers["x-access-token"], "2019047", { complete: false });

        const userdata = await UserData.findOne({ user: data.id })
        if (!userdata) return res.status(400).json({ error: "User does not have user data" });

        await UserData.findByIdAndDelete(userdata.id);

        User.findByIdAndDelete(data.id)
            .then(doc => res.json(doc))
            .catch(err => console.error(err))
    } catch (e) {
        console.error(e)
    }
}

module.exports = { getUsers, getUserById, editMyUser, deleteMyUser, getMyUser, editUser, deleteUser }