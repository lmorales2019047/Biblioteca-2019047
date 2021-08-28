const User = require("../models/User");
const UserData = require("../models/UserData");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

async function getUsers(req, res) {
    User.find()
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

async function getUserById(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ error: "Invalid Id" });
    if (String(mongoose.Types.ObjectId(req.params.id)) !== String(req.params.id)) return res.status(400).json({ error: "Invalid Id" });
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
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ error: "Invalid Id" });
    if (String(mongoose.Types.ObjectId(req.params.id)) !== String(req.params.id)) return res.status(400).json({ error: "Invalid Id" });
    if (!await User.findOne({ _id: req.params.id })) return res.status(400).json({ error: "User not found" });;

    const { username, pwd, firstname, lastname, email } = req.body;

    if (username || pwd || firstname || lastname || email) {
        const user = new User({ username, pwd: await User.encryptPassword(pwd) });
        const userdata = new UserData({ firstname, lastname, email, user: req.params.id });
        await userdata.save();
        user.save()
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
        const user = new User({ username, pwd: await User.encryptPassword(pwd) });
        const userdata = new UserData({ firstname, lastname, email, user: data.id });
        await userdata.save();
        user.save()
            .then(doc => res.json(doc))
            .catch(err => console.error(err))
    } else {
        res.status(400).json({ error: "There is nothing to edit" })
    }
}

async function deleteUser(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ error: "Invalid Id" });
    if (String(mongoose.Types.ObjectId(req.params.id)) !== String(req.params.id)) return res.status(400).json({ error: "Invalid Id" });
    if (!await User.findOne({ _id: req.params.id })) return res.status(400).json({ error: "User not found" });;

    try {
        User.findByIdAndDelete(req.params.id)
            .then(doc => res.json(doc))
            .catch(err => console.error(err))
    } catch (e) {
        console.error(e)
    }
}

async function deleteMyUser(req, res) {
    const data = jwt.verify(req.headers["x-access-token"], "2019047", { complete: false });

    try {
        User.findByIdAndDelete(data.id)
            .then(doc => res.json(doc))
            .catch(err => console.error(err))
    } catch (e) {
        console.error(e)
    }
}

module.exports = { getUsers, getUserById, editMyUser, deleteMyUser, getMyUser, editUser, deleteUser }