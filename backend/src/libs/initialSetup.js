const Role = require("../models/Role");
const User = require("../models/User")

async function createRoles() {
    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ role: "admin" }).save(),
            new Role({ role: "librarian" }).save(),
            new Role({ role: "client" }).save()
        ]);

        console.log(values);
    } catch (e) {
        console.error(e);
    }
}

async function createAdminUser() {
    try {
        const adminrole = await Role.findOne({ role: "admin" });
        if (await User.findOne({ username: "adminpractica", role: adminrole._id })) return;

        const values = await Promise.all([
            new User({
                username: "adminpractica",
                pwd: await User.encryptPassword("adminpractica"),
                role: adminrole._id
            }).save()
        ]);

        console.log(values);
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    createRoles,
    createAdminUser
};