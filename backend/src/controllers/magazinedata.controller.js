const MagazineData = require("../models/MagazineData")

async function getMagazineDatas(req, res) {
    MagazineData.find()
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

async function getMagazineDataById(req, res) {
    MagazineData.findOne({ _id: req.params.id })
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

async function addMagazineData(req, res) {
    const { frecuency, copies, bibliography } = req.body;
    if (frecuency, copies, bibliography) {
        const data = new MagazineData({ frecuency, copies, bibliography });
        data.save()
            .then(doc => res.json(doc))
            .catch(err => console.error(err))
    } else {
        res.status(400).json({ error: "Missing parameters" })
    }
}

async function editMagazineData(req, res) {
    const { frecuency, copies, bibliography } = req.body;
    if (frecuency, copies, bibliography) {
        MagazineData.findByIdAndUpdate(req.params.id, { frecuency, copies, bibliography })
    } else {
        res.status(400).json({ error: "Missing parameters" })
    }
}

async function deleteMagazineData(req, res) {
    MagazineData.findByIdAndDelete(req.params.id)
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

module.exports = {
    getMagazineDatas,
    getMagazineDataById,
    addMagazineData,
    editMagazineData,
    deleteMagazineData
}