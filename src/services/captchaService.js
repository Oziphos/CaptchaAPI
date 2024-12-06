import fs from "fs/promises";

// Lire les données existantes depuis le fichier JSON
export const getData = async () => {
  try {
    const data = await fs.readFile("./src/data/data.json", "utf-8");
    return JSON.parse(data); // Convertir les données en objet JSON
  } catch (error) {
    console.error("Error fetching JSON file:", error.message);
    throw error;
  }
};

export const getKeyData = async (key) => {
  try {
    const data = await getData();
    const foundItem = data.find((item) => item.id === key);
    return foundItem || {};
  } catch (error) {
    console.error("Error getting key data:", error.message);
    throw error;
  }
};

// Générer une clé unique avec les champs `nb_valide` et `nb_intrus`
export const generateUniqueKey = async () => {
  try {
    // Étape 1 : Lire les données existantes
    const data = await getData();
    const existingIds = data.map((item) => item.id);

    // Étape 2 : Générer une clé unique
    let newKey;
    do {
      newKey = generateRandomKey(); // Générer une clé aléatoire
    } while (existingIds.includes(newKey)); // Vérifier si la clé est unique

    // Étape 3 : Générer des valeurs aléatoires pour `nb_valide` et `nb_intrus`
    const nbValide = getRandomInt(2, 5);
    const nbIntrus = getRandomInt(2, 5);

    const datas = { id: newKey, nb_valide: nbValide, nb_intrus: nbIntrus };
    writeDatasToFile(data, datas);

    return datas;
  } catch (error) {
    console.error("Error generating key:", error.message);
    throw error;
  }
};

// Ajouter une nouvelle clé avec tous ses champs au fichier JSON
export const writeDatasToFile = async (oldDatas, keyData) => {
  try {
    const data = oldDatas;
    data.push(keyData);
    await fs.writeFile(
      "./src/data/data.json",
      JSON.stringify(data, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error("Error writing key to file:", error.message);
    throw error;
  }
};

// Fonction locale pour générer une clé aléatoire
const generateRandomKey = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 16; // Longueur de la clé
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Fonction locale pour générer un entier aléatoire entre `min` et `max` inclus
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
