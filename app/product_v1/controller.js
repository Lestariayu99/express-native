const { ObjectId } = require('mongodb');
const db = require('../../config/mongodb');



const index = (req, res) => {
    db.collection('products')
        .find()
        .toArray()
        .then(result => res.json(result))
        .catch(error => res.json(error));
};

const view = (req, res) => {
    const { id } = req.params;
    db.collection('products')
        .findOne({ _id: new ObjectId(id) })
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.status(404).json({ message: 'Produk tidak ditemukan' });
            }
        })
        .catch(error => res.json(error));
};

const create = (req, res) => {
    const { nama, brand, harga } = req.body;
    db.collection('products')
        .insertOne({ nama, brand, harga })
        .then(result => {
            res.json(result.ops[0]);
        })
        .catch(error => res.json(error));
};

const update = (req, res) => {
    const { id } = req.params;
    const { nama, brand, harga } = req.body;
    db.collection('products')
        .updateOne({ _id: new ObjectId(id) }, { $set: { nama, brand, harga } })
        .then(result => {
            if (result.modifiedCount > 0) {
                res.json({ message: 'Produk berhasil diperbarui' });
            } else {
                res.status(404).json({ message: 'Produk tidak ditemukan' });
            }
        })
        .catch(error => res.json(error));
};

const remove = (req, res) => {
    const { id } = req.params;
    db.collection('products')
        .deleteOne({ _id: new ObjectId(id) })
        .then(result => {
            if (result.deletedCount > 0) {
                res.json({ message: 'Produk berhasil dihapus' });
            } else {
                res.status(404).json({ message: 'Produk tidak ditemukan' });
            }
        })
        .catch(error => res.json(error));
};

module.exports = {
    index,
    view,
    create,
    update,
    remove
};









