const jwt = require("jsonwebtoken");
const Role = require("../models/Role");
const mongoose = require("mongoose");
const User = require("../models/User");

async function isLogged(req, res, next) {
    if (!req.headers["x-access-token"]) return res.status(400).json({ error: "User is not logged" });
    next();
}

async function isValidId(req, res, next) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ error: "Invalid Id" });
        if (String(mongoose.Types.ObjectId(req.params.id)) !== String(req.params.id)) return res.status(400).json({ error: "Invalid Id" });
        if (!await User.findOne({ _id: req.params.id })) return res.status(400).json({ error: "User not found" });;
        next()
    } catch (e) {
        console.error(e);
    }
}

async function isAdmin(req, res, next) {
    try {
        if (!req.headers["x-access-token"]) return res.status(400).json({ error: "User is not logged" });
        const data = jwt.verify(req.headers["x-access-token"], "2019047", { complete: false });
        const adminrole = await Role.findOne({ role: "admin" });
        const user = await User.findOne({ _id: data.id });

        if (String(user.role) !== String(adminrole._id)) return res.status(401).json({ error: "User is unauthorized" });
        next();
    } catch (e) {
        console.error(e);
    }
}

async function isLibrarian(req, res, next) {
    try {
        if (!req.headers["x-access-token"]) return res.status(400).json({ error: "User is not logged" });
        const data = jwt.verify(req.headers["x-access-token"], "2019047", { complete: false });
        const adminrole = await Role.findOne({ role: "librarian" });
        const user = await User.findOne({ _id: data.id });

        if (String(user.role) !== String(adminrole._id)) return res.status(401).json({ error: "User is unauthorized" });
        next();
    } catch (e) {
        console.error(e);
    }
}

async function isClient(req, res, next) {
    try {
        if (!req.headers["x-access-token"]) return res.status(400).json({ error: "User is not logged" });
        const data = jwt.verify(req.headers["x-access-token"], "2019047", { complete: false });
        const adminrole = await Role.findOne({ role: "client" });
        const user = await User.findOne({ _id: data.id });

        if (String(user.role) !== String(adminrole._id)) return res.status(401).json({ error: "User is unauthorized" });
        next();
    } catch (e) {
        console.error(e);
    }
}

module.exports = { isLogged, isAdmin, isLibrarian, isClient, isValidId }