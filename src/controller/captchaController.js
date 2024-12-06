import * as captchaService from "../services/captchaService.js";

// Fonction pour obtenir les informations du repository
export const getData = async (req, res) => {
  try {
    const data = await captchaService.getData();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const generateUniqueKey = async (req, res) => {
  try {
    const data = await captchaService.generateUniqueKey();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const getKeyData = async (req, res) => {
  try {
    const { key } = req.params;
    const data = await captchaService.getKeyData(key);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
