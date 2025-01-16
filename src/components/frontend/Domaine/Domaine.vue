<template>
  <section class="section_domaine">
    <div class="divider">Domaines D'Activité</div>
    <div class="domaine_information">
      <div class="cdec_section">
        <div class="cdec_description">
          <h2>Caisse des Dépôt et Consignations</h2>
          <p>
            La Caisse des Dépôts et Consignations (CDEC) du Cameroun
            gère et sécurise les fonds publics et privés. Elle centralise des
            fonds provenant de diverses sources comme les cautionnements et les
            dépôts judiciaires.
          </p>
        </div>
      </div>
      <div class="domaine_section">
        <div class="list_domaine">
          <div class="domaine_item">Investissement</div>
          <div class="domaine_item">Infrastructure</div>
        </div>
        <div class="list_domaine">
          <div class="domaine_item">TPE/PME</div>
          <div class="domaine_item">Education</div>
        </div>
        <div class="list_domaine">
          <div class="domaine_item">Innovation</div>
          <div class="domaine_item">Banque</div>
        </div>
        <div class="list_domaine">
          <div class="domaine_item">Ingenierie</div>
          <div class="domaine_item">Administration</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.section_domaine {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.domaine_information{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;

}
.domaine_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 2em;
}

.list_domaine {
  display: flex;
}

.domaine_item {
  width: 200px;
  padding: 1em 1em;
  margin: 10px;
  font-size: 1.1em;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: transparent;
  border: 2px solid rgba(220, 165, 16, 1);
  transition: 1s all;
  
}

.domaine_item:hover {
  background-color: #fff;
  color: rgba(50, 76, 156, 1);
  border: 2px solid rgba(50, 76, 156, 1);
}
</style>