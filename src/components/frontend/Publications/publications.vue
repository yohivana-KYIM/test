<template>
  <section class="body_actualite">
    <div class="titre_actualite">
      <h1>Publications CDEC</h1>
      <span> Découvrez le rapport annuel 2023 de la CDEC. </span>
    </div>
  </section>

  <section class="actualite">
    <div class="divider">Les dernières actualités</div>
    <div class="actualite_group">
      <div class="owl-carousel owl-theme caroussel_actualite">
        <div class="item_actualite">
          <img src="/src/assets/rapport.png" alt="Actualité 1" />
          <h4>RAPPORT ANNUEL 2023
CAISSE DES DÉPÔTS ET CONSIGNATIONS</h4>
          <span> 
LOI N°2008/003 DU 14 AVRIL 2008 RÉGISSANT LES DÉPÔTS ET CONSIGNATIONS </span>
           <a
              href="/docs/rapport/RapportAnnuelCDEC2023BILINGUE-Outlined.pdf" class="btn-en-savoir-plus"
            >lire plus</a>
        </div>
       
       
   
      </div>
    </div>
  </section>
</template>

<script setup>
import "owl.carousel";
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


<style>
@import "../../../css/presentation_actualite.css";

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
}

.actualite_group {
  width: 85%;
}

.item_actualite {
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin-bottom: 30px;
  margin-top: 20px;
  transition: 1s all;
}

.item_actualite:hover {
  /* box-shadow: 5px 5px 20px 3px rgba(50, 76, 156, 0.6); */
  transform: translateY(-20px);
}
.item_actualite img {
  border-radius: 8px;
}

.item_actualite h4 {
  text-align: left;
  font-weight: 600;
  line-height: 33px;
}

.item_actualite span {
  color: rgba(130, 130, 130, 1);
  font-weight: 500;
}
.actualite_information {
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 3em;
  min-width: 250px;
}

.btn-en-savoir-plus {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 15px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    transition: background-color 0.3s ease;
  }
  
  .btn-en-savoir-plus:hover {
    background-color: #2980b9;
  }
</style>

