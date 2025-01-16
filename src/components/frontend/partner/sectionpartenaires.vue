<template>
  <section class="section_partenaire">
    <div class="divider">Nos partenaires</div>
    <div class="img_group_partenaire">
      <div id="owl-demo" class="owl-carousel owl-theme">
        <div class="item">
          <img src="../../../assets/sg.png" alt="Partenaire SG" />
        </div>
        <div class="item">
          <img src="../../../assets/scb.png" alt="Partenaire SCB" />
        </div>
        <div class="item">
          <img src="../../../assets/bicec.png" alt="Partenaire BICEC" />
        </div>
        <div class="item">
          <img src="../../../assets/MINFI.png" alt="Partenaire MINFI" />
        </div>
        <div class="item">
          <img src="../../../assets/FCD.jpg" alt="Partenaire FCD" />
        </div>
        <div class="item">
          <img src="../../../assets/banque.png" alt="Partenaire Banque" />
        </div>
        <div class="item">
          <img src="../../../assets/DGTCFM.png" alt="Partenaire DGTCFM" />
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
import $ from 'jquery'; // Importez jQuery
import 'owl.carousel';// Importez Owl Carousel
import { onMounted } from 'vue';


export default {
    setup() {
        onMounted(() => {
              $(document).ready(function() {
                $("#owl-demo").owlCarousel({
                  loop: true, // Activation du défilement infini
                  margin: 20,
                  nav: false,   // Suppression des boutons "suivant" et "précédent"
                  autoplay:true,
                  autoplayTimeout:2000,
                  autoplayHoverPause:true,
                  responsive: {
                      0: {
                        items: 1
                      },
                      600: {
                        items: 3
                      },
                      1000: {
                        items: 5
                      }
                }
                  
                });
            });
        })
    }
}
</script>

<style scoped>
@import "../../../css/actualites.css";
@import 'owl.carousel/dist/assets/owl.carousel.css';
@import 'owl.carousel/dist/assets/owl.theme.default.css';


.section_partenaire {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(246, 248, 247, 1);
  padding-bottom: 2rem;
}

.section_partenaire .img_group_partenaire img {
   max-width: 100%;
   display: block; /* Remove extra space below the image */
    height: auto;
}


.img_group_partenaire {
  width: 80%;
  display: flex;
  justify-content: center; /* pour centrer les caroussel*/
  align-items: center;
  margin-bottom: 2em;
}

#owl-demo{
  width: 100%;
}


</style>