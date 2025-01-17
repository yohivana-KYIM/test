<template>
 

   <br/>
  <h1 class="mb-4 text-4xl font-black md:text-5xl" style="text-align: center;">
    <span
      class="text-transparent bg-clip-text"
      style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
    >
Publications CDEC
    </span>
  </h1>
<br/>
  <section class="actualite">
   
    <div class="">
      <!-- Affichage d'un seul élément -->
      <div class="item_actualite">
        <div class="">
          <img src="/src/assets/rapport.png" alt="Actualité 1" />
        </div>
        <h4>RAPPORT ANNUEL 2023 CAISSE DES DÉPÔTS ET CONSIGNATIONS</h4>
        <span>
          LOI N°2008/003 DU 14 AVRIL 2008 RÉGISSANT LES DÉPÔTS ET CONSIGNATIONS
        </span>
        <a
          href="/docs/rapport/RapportAnnuelCDEC2023BILINGUE-Outlined.pdf"
          class="btn-en-savoir-plus"
        >
          Lire plus
        </a>
      </div>
    </div>
  </section>
</template>

<style>
@import "../../../css/presentation_actualite.css";

.actualite {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(246, 248, 247, 1);
  flex-wrap: wrap;
}

.actualite_group {
  width: 85%;
}

.item_actualite {
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  margin-bottom: 30px;
  margin-top: 20px;
  transition: 1s all;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.item_actualite:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.image-container {
  /* Modification ici pour une taille d'image réduite */
    width: 35%; /* Réduction de la largeur de l'image */
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;
  align-self: center; /* Centrer l'image */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
    transition: transform 0.3s ease;
}
.item_actualite:hover .image-container img{
    transform: scale(1.05);
}

.item_actualite h4 {
  text-align: left;
  font-weight: 600;
  line-height: 1.4em;
  margin-bottom: 10px;
}

.item_actualite span {
  color: rgba(130, 130, 130, 1);
  font-weight: 500;
  font-size: 0.9em;
  margin-bottom: 15px;
    display: block;
}

.btn-en-savoir-plus {
  display: inline-block;
  margin-top: 5px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  text-align: center;
  transition: background-color 0.3s ease;
    font-weight: 500;
}

.btn-en-savoir-plus:hover {
  background-color: #2980b9;
}
</style>