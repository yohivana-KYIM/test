<template>
 <section class="organigramme">
    <div class="divider">Nos Missions</div>
  </section>
  <section class="body_info">
    <div class="mission_container">
  
      <div class="mission_content">
        <p>
          La Caisse des Dépôts et Consignations du Cameroun a pour mission de
          recevoir, conserver et gérer les sommes et avoirs publics et privés,
          conformément aux lois et règlements en vigueur.
        </p>
        <p>
           Elle peut également gérer, sous mandat, des services spécifiques qui
          lui sont confiés par l’État ou ses démembrements.
        </p>
        <p>
          La CDEC peut concourir au financement du développement économique du
          pays, par l’intermédiaire de structures spécialisées, selon les
          priorités définies par le gouvernement.
        </p>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
@import "../../../css/missions.css";

/* Améliorations du design */
.mission {
    padding: 3rem 0;
    text-align: center;
}

.body_info {
    background-color: #f8f9fa;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
}

.mission_container {
    width: 80%;
    max-width: 1000px;
    background: white;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08); /* Plus prononcée */
}

.mission_container h1 {
    text-align: center;
    color: #324c9c;
    font-size: 2.5rem;
    margin-bottom: 2.5rem; /* Plus d'espace en bas */
    font-weight: 600;
}


.mission_content {
    margin-top: 2rem; /* Plus d'espace entre le titre et les paragraphes */
}

.mission_content p {
    line-height: 2; /* Espacement de ligne plus important */
    margin-bottom: 2rem; /* Plus d'espace entre les paragraphes */
    color: #555;
    font-size: 1.1rem; /* Légèrement plus grand */
    padding-left: 2rem;
    position: relative;
}

.mission_content p::before {
    content: "";
    position: absolute;
    left: 0;
    top: 12px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #324c9c;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .mission_container {
        width: 90%;
        padding: 2rem;
    }
    .mission_container h1 {
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
    .mission_content p {
        font-size: 1rem;
        padding-left: 1.5rem;
    }
        .mission_content p::before {
        top: 10px;
        width: 6px;
        height: 6px;
    }
}
</style>