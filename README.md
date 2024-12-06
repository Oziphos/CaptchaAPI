## Routes d'api captcha :

### Routes GET :

- **`<adresse_serveur>/captcha/data`**

  - Description : Renvoie la liste des données

  <details>
      <summary>Retour</summary>

  ```json
  {
    "success": true,
    "data": [
      {
        "id": "7KCAusaEdmzcuZiO",
        "nb_valide": 2,
        "nb_intrus": 3
      },
      {
        "id": "UnG1zZDwAHSXfm2b",
        "nb_valide": 5,
        "nb_intrus": 3
      },
      {
        "id": "OSayw8mFkS2mUSMD",
        "nb_valide": 2,
        "nb_intrus": 4
      },
      {
        "id": "J0ASKVKeVtMaLfBi",
        "nb_valide": 4,
        "nb_intrus": 2
      },
      {
        "id": "Pi3o6qGxWDoTR7LI",
        "nb_valide": 4,
        "nb_intrus": 5
      },
      {
        "id": "uWOJ7brelLRly8qc",
        "nb_valide": 2,
        "nb_intrus": 4
      }
    ]
  }
  ```

  </details>

- **`<adresse_serveur>/captcha/key`**

  - Description : Crée une clé unique, associe deux valeurs (nb_intrus et nb_valide) et stocke
    le tout dans le tableau de données. Renvoie les données créées.

  - <details>
      <summary>Retour</summary>

    ```json
    {
      "success": true,
      "data": {
        "id": "jTfG4IPfQ48p2jWp",
        "nb_valide": 2,
        "nb_intrus": 2
      }
    }
    ```

    </details>

- **`<adresse_serveur>/captcha/key/:key`**

  - Description : Renvoies les données associées à la clé passée en paramètres.

  - <details>
        <summary>Retour</summary>

    ```json
    {
      "success": true,
      "data": {
        "id": "jTfG4IPfQ48p2jWp",
        "nb_valide": 2,
        "nb_intrus": 2
      }
    }
    ```

    </details>
