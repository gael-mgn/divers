const recettes = {
  "Abricotier": [
    {
      titre: "Abricots rôtis",
      image: "https://assets.afcdn.com/recipe/20220613/132768_w1024h768c1cx1060cy707cxt0cyt0cxb2120cyb1415.jpg",
      lien: "https://www.marmiton.org/recettes/recette_abricots-rotis_40562.aspx"
    }
  ],
  "Amandier": [
    {
      titre: "Chouchous aux amandes",
      image: "https://terredamandes.fr/wp-content/uploads/2023/08/IMG_20230829_233440.jpg",
      lien: "https://terredamandes.fr/recette/chouchou-aux-amandes/"
    }
  ],
  "Chèvrefeuille": [
    {
      titre: "Muffins aux baies et au muesli",
      image: "https://www.holle.ch/wp-content/uploads/2024/08/Beeren-Muesli-Muffins_Rezeot.png",
      lien: "https://www.holle.ch/fr/recettes/muffins-aux-baies-et-au-muesli/"
    }
  ],
  "Tilleul": [
    {
      titre: "Infusion de fleurs de tilleul",
      image: "https://exemple.com/images/infusion-tilleul.jpg",
      lien: "https://exemple.com/recettes/infusion-tilleul"
    }
  ],
  "Sureau noir": [
    {
      titre: "Gelée de sureau",
      image: "https://exemple.com/images/gelee-sureau.jpg",
      lien: "https://exemple.com/recettes/gelee-sureau"
    }
  ]
  // Tu peux en ajouter autant que nécessaire
};


// Génère une seule fois tous les panneaux HTML de recettes par espèce
const recetteHTMLParEspece = {};

for (const espece in recettes) {
  let html = "<hr><strong>Recette associée :</strong><br/>";
  recettes[espece].forEach(recette => {
    html += `
      <div style="margin-top: 5px;" classe="recette-popup">
        <img src="${recette.image}" alt="${recette.titre}" ><br/>
        <a class="recette-link" href="${recette.lien}" target="_blank">${recette.titre}</a>
      </div>
    `;
  });
  recetteHTMLParEspece[espece] = html;
}
