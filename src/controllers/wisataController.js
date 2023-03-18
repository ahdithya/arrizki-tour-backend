const wisataPacket = require("../models/wisataModel");

const getAllWisata = async (req, res) => {
  try {
    const allWisata = await wisataPacket.find();
    res.status(200).json({ data: allWisata });
  } catch (err) {
    res.status(500).json({ error: err?.message || err });
  }
};

const getOneWisata = async (req, res) => {
  const { id } = req.params;
  try {
    const findOneWisata = await wisataPacket.findById(id);
    if (!findOneWisata)
      return res.status(404).json({ error: "Data tidak ditemukan" });
    res.status(200).json({ data: findOneWisata });
  } catch (err) {
    res.status(500).json({ error: err?.message || err });
  }
};

const createNewWisata = async (req, res) => {
  const newWisataData = { ...req.body };

  try {
    const wisata = new wisataPacket({
      ...newWisataData,
    });
    const saveWisata = await wisata.save();

    res.status(200).json({ data: saveWisata });
  } catch (err) {
    res.status(500).json({ error: err?.message || err });
  }
};

const updateOneWisata = async (req, res) => {
  const { id } = req.params;
  const updateWisataData = { ...req.body };
  try {
    const updateWisata = await wisataPacket.findByIdAndUpdate(
      id,
      updateWisataData,
      { new: true }
    );
    if (!updateWisata) {
      res.status(404).json({ error: "Data tidak ditemukan" });
      return;
    }
    res.status(200).json({ data: updateWisata });
  } catch (err) {
    res.status(500).json({ error: err?.message || err });
  }
};

const deleteOneWisata = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWisata = await wisataPacket.findByIdAndDelete(id);
    if (!deletedWisata) {
      res.status(404).json({ error: "Data tidak ditemukan." });
      return;
    }
    res.json("Data Berhasil dihapus.");
  } catch (err) {
    res.status(500).json({ error: err?.message || err });
  }
};

module.exports = {
  getAllWisata,
  getOneWisata,
  createNewWisata,
  updateOneWisata,
  deleteOneWisata,
};
