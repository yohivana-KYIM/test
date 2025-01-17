<template>
  <section class="actualite">
    <div class="divider">Les dernières actualités</div>
    <div class="actualite_group">
      <div class="owl-carousel owl-theme caroussel_actualite">
        <div class="item_actualite">
          <img src="/src/assets/actualite1.jpeg" alt="Actualité 1" />
          <h4>Conseil d'administration</h4>
          <span> 23 décembre 2024 </span>
          <a href="/conseil_administration" class="btn-en-savoir-plus">Voir plus</a>
        </div>
        <div class="item_actualite">
          <img src="/src/assets/actualite2.jpeg" alt="Actualité 2" />
          <h4>Fête du travail</h4>
          <span> 1er Mai 2024</span>
          <a href="/Fetetravail" class="btn-en-savoir-plus">Voir plus</a>
        </div>
        <div class="item_actualite">
          <img src="/src/assets/actualite3.jpeg" alt="Actualité 3" />
          <h4>Journée de la femme</h4>
          <span> 08 Mars 2024 </span>
          <a href="/Journeefemme" class="btn-en-savoir-plus">Voir plus</a>
        </div>
        <div class="item_actualite">
          <img src="/src/assets/actualite4.jpeg" alt="Actualité 4" />
          <h4>Remise des fonds par la BEAC</h4>
          <span> 29 Mai 2024</span>
          <a href="/remisefonds" class="btn-en-savoir-plus">Voir plus</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "owl.carousel/dist/assets/owl.carousel.css";
import { onMounted } from "vue";

onMounted(() => {
  $(".caroussel_actualite").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
</script>

<style scoped>
/* @import "../css/actualites.css"; */

.actualite {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(246, 248, 247, 1);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%23DCA510'/%3E%3Cstop offset='1' stop-color='%23324C9C'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23324C9C'/%3E%3Cstop offset='1' stop-color='%23DCA510'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.actualite_group {
  width: 85%;
  margin: 0 auto;
}

.item_actualite {
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item_actualite:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.item_actualite img {
  border-radius: 8px;
  margin-bottom: 1em;
  width: 100%;
  height: auto; /* Permet de conserver le ratio aspect */
  object-fit: cover; /* Pour éviter la déformation de l'image */
}

.item_actualite h4 {
  text-align: left;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.5em;
  font-size: 1.1em;
}

.item_actualite span {
  color: rgba(130, 130, 130, 1);
  font-weight: 500;
  font-size: 0.9em;
  margin-bottom: 1em;
}

.btn-en-savoir-plus {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #324c9c;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 0.9em;
  border: 1px solid #324c9c; /* Ajout d'une bordure */
}

.btn-en-savoir-plus:hover {
  background-color: white; /* Changement de couleur au survol */
  color: #324c9c; /* Change la couleur du texte au survol */
  transform: scale(1.05); /* Petit effet de zoom au survol */
  border: 1px solid #324c9c;
}
</style>