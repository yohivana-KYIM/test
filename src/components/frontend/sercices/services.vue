<template>
  <Section class="service">
    <div class="divider">Services</div>
    <div class="service_group">
      <div class="service_information">
        <img class="star" src="../../../assets/consignation.png" alt="" />
        <hr />
        <span>Consignations Administratives</span>
        <p>
          La Consignation Administrative est une opération légale par laquelle
          des fonds ou des biens sont déposés auprès d’une autorité
          administrative ou d’un organisme public à titre de garantie ou de
          règlement provisoire d’une situation en litige ou pour d’autres
          raisons légales.
        </p>
        <button>
          <a>
            <router-link to="/cons_admin" class="li"
              >En savoir plus..
            </router-link></a
          >
        </button>
      </div>
      <div class="service_information">
        <img class="star" src="../../../assets/renovation.png" alt="" />
        <hr />
        <span>Consignations Judiciaires</span>
        <p>
          La Consignation Judiciaire est une procédure juridique qui permet de
          mettre une somme d’argent ou un bien sous l’autorité d’une autorité
          (souvent un tribunal) pendant la durée d’un litige.
        </p>
        <button>
          <a>
            <router-link to="/cons_judiciaire" class="li"
              >En savoir plus..
            </router-link>
          </a>
        </button>
      </div>
      <div class="service_information">
        <img class="star" src="../../../assets/consultation.png" alt="" />
        <hr />
        <span>Consignations Conventionnelles</span>
        <p>
          La Consignation conventionnelle est une pratique par laquelle deux
          parties, dans le cadre d’un accord privé décident de confier une somme
          d’argent ou un bien à un tiers de confiance ou à un établissement
          financier pour en assurer la garde jusqu’à ce que certaines conditions
          soient remplies.
        </p>
        <button>
          <a>
            <router-link to="/cons_convention" class="li"
              >En savoir plus..
            </router-link></a
          >
        </button>
      </div>
    </div>
  </Section>
</template>

<script></script>

<style scoped>
@import "../../../css/accueil.css";

.service_information {
  background: rgba(255, 255, 255, 1);
}
</style>
