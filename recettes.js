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
  "Amélanchier": [
    {
      titre: "Compote d’amélanches",
      image: "https://isabellecotenutritionniste.com/wp-content/uploads/2018/07/Compote-amelanche-haut-petit-980x749.jpg",
      lien: "https://isabellecotenutritionniste.com/recettes/compote-damelanches/"
    }
  ],
  "Arbousier": [
    {
      titre: "Confiture d’arbouse",
      image: "https://img.cuisineaz.com/660x495/2016/03/17/i21778-confiture-d-arbouses.webp",
      lien: "https://www.cuisineaz.com/recettes/confiture-d-arbouses-31178.aspx"
    }
  ],
  "Argousier": [
    {
      titre: "Sauce à l'argousier, érable et romarin",
      image: "https://www.argousiere.com/wp-content/uploads/2018/11/sauce-argousier-romarin-et-erable-833x800-1000x600-1-600x576.jpg",
      lien: "https://www.argousiere.com/recipe/sauce-a-largousier-erable-et-romarin/"
    }
  ],
  "Aronie": [
    {
      titre: "Boulettes de viande aux baies d’aronie",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiM3IbRSUdQu4oIEI7dV8q339BLlxxhEPDrSEZKE6nje6Wff7_YIziYKCcrTG0Qr6djkPVaqZ9LnHpVKpbttUVntobd_NX8Y8i44J1a8wreHqPIRpBsKPwTKe4xhZpuvRt0MlDY0MNPDEA/s640/boulettes+baies+d%2527aronia.jpg",
      lien: "https://www.un-peu-gay-dans-les-coings.eu/2018/10/boulettes-de-viande-aux-baies-daronia.html"
    }
  ],


  "Aubépine": [
    {
      titre: "Gelée de baie d’aubépine",
      image: "https://img-global.cpcdn.com/recipes/c2a8ed4d2c7a0b05/600x852cq80/gelee-de-baies-daubepine-photo-principale-de-la-recette.webp",
      lien: "https://cookpad.com/fr/recettes/16541175"
    }
  ],
  "Aubepine": [
    {
      titre: "Gelée de baie d’aubépine",
      image: "https://img-global.cpcdn.com/recipes/c2a8ed4d2c7a0b05/600x852cq80/gelee-de-baies-daubepine-photo-principale-de-la-recette.webp",
      lien: "https://cookpad.com/fr/recettes/16541175"
    }
  ],



  "Cerisier à fruits": [
    {
      titre: "Vin de feuille de cerisier",
      image: "https://lagrangeauxsavoirfaire.fr/wp-content/uploads/2021/01/la-grange-aux-savoir-faire-recette-du-guignolet-11.jpg",
      lien: "https://lagrangeauxsavoirfaire.fr/blog/recettes/recette_guignolet/"
    },
    {
      titre: "Riz au fleur de cerisier",
      image: "https://img.lemde.fr/2023/08/17/0/0/1500/1200/960/0/75/0/098c931_297811-3334969.jpg",
      lien: "https://www.lemonde.fr/les-recettes-du-monde/article/2023/08/25/le-riz-aux-fleurs-de-cerisier-la-recette-de-nancy-singleton-hachisu_6186559_5324493.html"
    }
  ],
  "Châtaignier": [
    {
      titre: "Velouté de châtaigne",
      image: "https://deliacious.com/wp-content/uploads/2018/12/soupe-chataignes-500x500.jpg",
      lien: "https://deliacious.com/2018/12/veloute-chataigne.html"
    }
  ],
  "Chèvrefeuille": [
    {
      titre: "Rhum chèvrefeuille",
      image: "https://www.rhum-arrange.fr/wp-content/uploads/2008/06/fleurs-de-chevrefeuilles-scaled.jpg",
      lien: "https://www.rhum-arrange.fr/recettes/rhum-arrange/rhum-chevrefeuille/"
    }
  ],

  "Cognassier": [
    {
      titre: "Poêlée de coing et magret au four",
      image: "https://www.lesfruitsetlegumesfrais.com/app/uploads/2013/03/r103-1-poelee-coing-et-magret-au-four-500x500.jpg",
      lien: "https://www.lesfruitsetlegumesfrais.com/recettes/poelee-de-coing-et-magret-au-four"
    },
    {
      titre: "Pâte de coings",
      image: "data:image/jpeg;base64,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",
      lien: "https://cuisine.journaldesfemmes.fr/recette/305270-pate-de-coings"
    }
  ],
   "Cornouiller": [
    {
      titre: "Cornouiller mariné",
      image: "https://taste.decorexpro.com/images/article/thumb/715-0/2018/10/kak-zamarinovat-kizil-1.jpg",
      lien: "https://taste.decorexpro.com/kizil/kak-zamarinovat/"
    },
    {
      titre: "Chutney de cornouilles",
      image: "https://img-3.journaldesfemmes.fr/R1mQxLA7cDZgwGwphDmFZwoTuPQ=/750x500/7b983877925742028c4135c74dc2f5b7/ccmcms-jdf/39917012.jpg",
      lien: "https://cuisine.journaldesfemmes.fr/recette/318758-chutney-de-cornouilles"
    }
  ],
  "Figuier": [
    {
      titre: "Saucisson au chocolat et aux figues",
      image: "https://content.joseedistasio.ca/app/uploads/2020/11/30151610/saucisson-chocolat-349-999x1501.jpg",
      lien: "https://www.joseedistasio.ca/recettes/saucisson-au-chocolat-et-aux-figues/"
    }
  ],
  "Glycine": [
    {
      titre: "Beignet de fleur de glycine",
      image: "https://www.julieandrieu.com/media/cache/web_recipe_detail/uploads/recettes/dessert/beignets-fleurs-glycines-camille-oger.jpg",
      lien: "https://www.julieandrieu.com/recettes/beignets-fleurs-glycines-camille-oger"
    }
  ],
  "Poirier à fruits": [
    {
      titre: "Poires rôties au cidre",
      image: "https://cache.marieclaire.fr/data/photo/w1500_ci/6z/recette-de-poire-roties-au-cidre.webp",
      lien: "https://www.marieclaire.fr/cuisine/poires-roties-au-cidre,1487547.asp"
    }
  ],
  "Prunier à fruits": [
    {
      titre: "",
      image: "https://www.julieandrieu.com/media/cache/web_recipe_detail/uploads/recettes/dessert/beignets-fleurs-glycines-camille-oger.jpg",
      lien: "https://www.julieandrieu.com/recettes/beignets-fleurs-glycines-camille-oger"
    }
  ]
};

const recetteHTMLParEspece = {};

for (const espece in recettes) {
  const recettesEspece = recettes[espece];
  recetteHTMLParEspece[espece] = recettesEspece.map(recette => {
    return `
      <h3>${recette.titre}</h3>
      <img src="${recette.image}" alt="${recette.titre}">
      <a class="recette-link" href="${recette.lien}" target="_blank">🍽️ Voir la recette complète</a>
    `;
  });
}


/*
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
*/



const couleurParEspece = {};
const palette = [
  "#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231",
  "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe",
  "#008080", "#e6beff", "#9a6324", "#fffac8", "#800000"
];

let colorIndex = 0;

function getCouleurPourEspece(espece) {
  if (!couleurParEspece[espece]) {
    couleurParEspece[espece] = palette[colorIndex % palette.length];
    colorIndex++;
  }
  return couleurParEspece[espece];
}
