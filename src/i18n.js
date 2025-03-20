import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome: "Deposits and Consignments Fund",
    search: "Search",
    deposits: "Deposit",
    info_cdec: "CDEC Information",

    advantages: "Advantages",
    economic_development:
      "Economic development of the country: Deposits can contribute to the country's economic development through specialized structures, according to government priorities.",
    public_service:
      "Public service: Deposits are part of a public service mission.",
    categories: "Categories",
    activit_1: "Client funds held by legal professionals",
    activit_2:
      "Deposits made by notaires, administrators, and legal representatives",
    activit_3: "Funds from inactive bank accounts",
    activit_4: "Counterpart funds",
    activit_5: "Compensation funds for expropriation for public utility",
    activit_6: "Funds from the liquidation of public companies",
    activit_7: "Supplementary funds for the judiciary",
    activit_8: "Deposits ordered by laws and regulations",

    deposit_descr:
      "is a material act by which the CDEC receives a sum of money, a security, or precious metals from another party with the obligation to keep and return them.",
    title: "Deposits at CDEC",
    depositDescription:
      "Discover the mechanisms and advantages of deposits managed by the Caisse des Dépôts et Consignations.",
    definitionTitle: "Definition of Deposit",
    definitionText:
      "The Deposit is a material act by which the CDEC receives a sum of money, a security or precious metals from others to keep them and return them.",
    depositTypesTitle: "Deposit Categories",
    depositTypesDescription:
      "Each category represents a specific area of ​​deposit management, reflecting the diversity and complexity of the CDEC's missions.",
    advantagesTitle: "Advantages of Deposits",
    depositTypes: {
      auxiliairesJustice: "Funds of judicial auxiliaries",
      notariaux: "Notarial deposits",
      comptesInactifs: "Inactive bank accounts",
      contrepartie: "Counterparty funds",
      expropriation: "Expropriation compensation",
      liquidationEntreprises: "Company liquidation",
      fondsJudiciaires: "Judicial funds",
    },
    advantagesList: {
      economiqueTitle: "Economic Development",
      economiqueDescription:
        "Stimulate national economic growth through innovative investment strategies and dynamic financial mechanisms.",
      publicTitle: "Public Service",
      publicDescription:
        "Guarantee the transparency, security and efficiency of financial transactions in the service of the general interest.",
    },

    home: "Home",
    cdec: "CDEC",
    presentation: "Presentation",
    services: "Services",
    news: "News",
    deposits: "Deposits",
    governance: "Governance",
    governance_background_image_alt: "Background image representing governance",
    technical_financial_supervision: "Technical / Financial Supervision",
    ministry_of_finance: "Ministry of Finance (MINFI)",
    board_of_directors: "Board of Directors",
    president: "President",
    dg_treasury:
      "Director General of the Treasury, Financial and Monetary Cooperation",
    board_members: "Members of the Board of Directors",
    representative_presidency:
      "Representative of the Presidency of the Republic",
    representative_prime_minister:
      "Representative of the Services of the Prime Minister",
    representative_finance_ministry:
      "Representative of the Ministry of Finance",
    representative_economy_ministry:
      "Representative of the Ministry of Economy, Planning and Regional Development",
    representative_justice_ministry:
      "Representative of the Ministry of Justice",

    ceo_message: "Message from the Director General",
    director_general: "Director General",
    learn_more_cdec: "Learn more about CDEC",
    ceo_quote:
      "A deposit and consignment fund is not even meant to make a profit. It is there to compensate for market failures. It has its positive aspects that cannot be ignored. But these positive aspects can only last if relevant actions are taken.",
    governance: "Governance",
    organizational_chart: "Organizational Chart",
    regulatory_texts: "Regulatory Texts",
    cooperation_partnerships: "Cooperation and Partnerships",
    projects_programs: "Projects and Programs",
    admin_deposits: "Administrative Consignment",

    admin_deposits_desc:
      "is a legal operation where funds or assets are deposited with an administrative authority or public body as a guarantee or for provisional settlement of a disputed situation or for other legal reasons.",

    judicial_deposits: "Judicial Consignment",
    judicial_deposits_desc:
      "is a legal procedure that allows a sum of money or an asset to be placed under the authority of a court during the course of litigation.",
    conventional_deposits: "Conventional Consignment",
    conventional_deposits_desc:
      "is a practice where two parties, in a private agreement, decide to entrust a sum of money or an asset to a trusted third party or financial institution for safekeeping until certain conditions are met.",
    activity_domains: "Activity Domains",

    cdec: "CDEC", // or "Deposit and Consignment Fund"
    cdec_description:
      "The Deposit and Consignment Fund (CDEC) of Cameroon manages and secures public and private funds. It centralizes funds from various sources, such as guarantees and judicial deposits.",

    deposit: "Deposit",

    deposits: "Deposit",
    investment: "Investment",
    infrastructure: "Infrastructure",
    sme: "SMEs",
    education: "Education",
    press_releases: "Press Releases",
    publications: "Publications",
    interviews: "Interviews",
    media_library: "Media Library",
    organizational_chart_title: "CDEC Organizational Chart",
    innovation: "Innovation",
    banking: "Banking",
    engineering: "Engineering",
    administration: "Administration",
    ceo_message: "Message from the Director General",
    ceo: "Director General",
    learn_more_cdec: "Learn more ..",
    ceo_quote:
      "A deposit and consignment fund is not even meant to make a profit. It is there to compensate for market failures. It has its positive aspects that cannot be ignored. But these positive aspects can only last if relevant actions are taken.",
    key_indicators_2023_title: "Key Indicators of 2023",
    total_deposits: "Total Deposits and Consignments (Million FCFA)",
    risk_provisions: "Risk and Contingency Provisions (Million FCFA)",
    total_transferred_funds: "Total Transferred Funds (Million FCFA)",
    balance_sheet: "Balance Sheet (Million FCFA)",
    net_result: "Net Result (Million FCFA)",
    expenses: "Expenses (Million FCFA)",
    social_capital: "Social Capital (Million FCFA)",
    financial_placements: "Financial Placements (Million FCFA)",
    revenue: "Revenue (Million FCFA)",
    latest_news: "Latest News",
    board_meeting: "Board of Directors",
    board_meeting_date: "December 23, 2024",
    labor_day: "Labor Day",
    labor_day_date: "May 1, 2024",
    partners_title: "Our Partners",
    sponsor_logo: "Sponsor logo",
    sponsor: "Sponsor",
    no_sponsors_available: "No sponsors available",
    read_more: "Read More",
    partners: "Our Partners",
    latest_news_title: "Latest News",
    phone_icon: "Phone Icon",
    email_icon: "Email Icon",
    calendar_icon: "Calendar Icon",
    work_schedule: "MON to FRI. 08:00 AM to 04:00 PM",
    cdec_logo: "CDEC Logo",
    join_us: "Join Us",
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    our_missions: "Our Missions",
    useful_links: "Useful Links",
    home: "Home",
    presentation: "Presentation",
    news: "News",
    newsletter: "NEWSLETTER",
    newsletter_placeholder: "Your email here",
    subscribe: "Subscribe",
    copyright: "Copyright CDEC © 2024. All rights reserved.",
    powered_by: "Powered by EVENTIFY AGENCY",
    chat_online: "Online Chat",
    presentation_cdec_title: "Presentation of the CDEC",
    chat_placeholder: "Write your message...",
    chat_greeting: "Hello! How can I help you?",
    chat_response: "Thank you for your message. An advisor will respond soon.",
    subscription_success: "Your subscription has been taken into account.",
    regulatory_texts: "Regulatory Texts",
    decrees: "Decrees",
    loading_decrees: "Loading decrees...",
    no_regulations_available: "No regulations available",
    check_later: "Please check back later",
    document_unavailable: "Document not available",
    our_partners: "Our Partners",
    loading_sponsors: "Loading sponsors",
    sponsor_logo: "Logo of {sponsorName}",

    administrative_deposits: "Administrative Consignment",
    admin_deposits_tagline:
      "Secure your funds and assets in complete legality.",
    what_is_it: "What is it?",

    what_are_the_advantages: "What are its advantages?",
    securing_funds_assets: "Securing funds or assets:",
    securing_funds_assets_desc:
      "Consignment ensures that the funds or assets in question are protected and available until the resolution of the dispute or the final decision. This avoids the risk of dissipation or misuse of resources.",
    guarantee_execution: "Guarantee of execution:",
    guarantee_execution_desc:
      "It provides a financial or material guarantee, ensuring that legal obligations will be respected. The parties know that the necessary resources are consigned and ready to be used according to the final decision.",
    reducing_fraud_risks: "Reducing fraud risks:",
    reducing_fraud_risks_desc:
      "Consignment with a public authority reduces the risk of fraud or misuse of funds, as the authority acts as a neutral and secure third party.",
    encouraging_quick_dispute_resolution:
      "Encouraging quick dispute resolution:",
    encouraging_quick_dispute_resolution_desc:
      "The presence of consigned funds or assets may encourage the parties to resolve disputes more quickly, knowing that the resources are immobilized until the resolution.",
    our_different_activities: "Our different activities",
    guarantees_public_accountants: "Guarantees of public accountants",
    guarantees_public_markets: "Guarantees on public markets",
    guarantees_occupation_admin_housing:
      "Guarantees for occupation of administrative housing or public domain",
    guarantees_public_officials: "Guarantees of public officials",
    repatriation_guarantees: "Repatriation guarantees",
    guarantees_election_candidates: "Guarantees of candidates for elections",
    deposits_personal_contribution:
      "Consignments for personal contribution and advance on vehicle purchase",
    deposits_timber_harvesting: "Consignments for timber harvesting",
    deposits_share_emoluments:
      "Consignments of the share of emoluments allocated to the courts",
    deposits_penal_labor: "Consignments for penal labor",
    curatorship_funds: "Curatorship funds",

    conventional_deposits: "Conventional Consignment",
    conventional_deposits_tagline:
      "Conventional Consignment: A safe solution to free yourself from your obligations.",
    what_is_it: "What is it?",
    conventional_deposits_bold: "Conventional consignment",
    conventional_deposits_desc:
      "is a practice whereby two parties, within the framework of a private agreement, decide to entrust a sum of money or an asset to a trusted third party or financial institution to ensure its safekeeping until certain conditions are met.",
    what_are_the_advantages: "What are its advantages?",
    mutual_agreement: "Mutual Agreement:",
    mutual_agreement_desc:
      "The parties can define their own consignment conditions and modalities, which offers great flexibility.",
    risk_prevention: "Risk Prevention:",
    risk_prevention_desc:
      "By depositing the funds or assets with a trusted third party, the parties reduce the risks of non-payment or non-delivery.",
    trusted_third_party: "Trusted Third Party:",
    trusted_third_party_desc:
      "A financial institution or a neutral third party can play the role of depositary, which strengthens trust between the parties.",
    simplified_process: "Simplified Process:",
    simplified_process_desc:
      "The management of consigned funds or assets is often simplified thanks to standardized procedures by the depositary institution.",
    time_saving: "Time Saving:",
    time_saving_desc:
      "Since it does not require the intervention of a court, conventional consignment can be put in place more quickly.",
    our_different_activities: "Our different activities",
    guarantees_water_electricity_companies:
      "Guarantees with water, electricity, telephone and housing companies",
    judicial_deposits: "Judicial Consignment",
    judicial_deposits_tagline:
      "Judicial Consignment: Secure your interests during disputes with efficiency and fairness.",
    what_is_it: "What is it?",
    judicial_deposits_bold: "Judicial Consignment",
    judicial_deposits_desc:
      "is a legal procedure that allows a sum of money or an asset to be placed under the authority of an authority (often a court) during the course of litigation.",
    what_are_the_advantages: "What are its advantages?",
    protection_against_fraud: "Protection against Frauds:",
    protection_against_fraud_desc:
      "Consignment prevents one of the parties from diverting or dissipating the funds or assets during the course of the litigation.",
    neutrality: "Neutrality:",
    neutrality_desc:
      "The consigned funds or assets are under the care of an impartial authority, guaranteeing an equitable distribution according to the judicial decision.",
    incentive_amicable_settlement: "Incentive to an Amicable Settlement:",
    incentive_amicable_settlement_desc:
      "Knowing that the funds or assets are consigned, the parties may be more inclined to negotiate and reach an amicable agreement.",
    reduction_financial_risks: "Reduction of Financial Risks:",
    reduction_financial_risks_desc:
      "Consignment reduces financial risks for creditors by ensuring that funds will be available for the payment of debts or obligations.",
    clarity_transactions: "Clarity of Transactions:",
    clarity_transactions_desc:
      "Consignment makes transactions more transparent and traceable, which can be useful in case of verifications or audits.",
    our_different_activities: "Our different activities",
    deposits_following_enforceable_judgment:
      "Consignments following an enforceable judicial decision notwithstanding opposition or appeal",
    deposits_following_provisional_enforcement:
      "Consignments following enforceable decisions by provision",
    guarantees_public_officials: "Guarantees of public officials",
    repatriation_guarantees: "Repatriation guarantees",
    guarantees_election_candidates: "Guarantees of candidates for elections",
    funds_placed_escrow: "Funds placed in escrow",
    funds_from_seizure_sales:
      "Funds from the proceeds of sale on seizure pending distribution",
    funds_registry: "Funds of the registries",
    deposits_penal_labor: "Consignments for penal labor",
    curatorship_funds: "Curatorship funds",
    funds_unavailable_investigation:
      "Funds made unavailable by the effect of an investigation or judicial investigation",
    withholdings_following_seizures:
      "Withholdings made following seizures on remuneration",

    press_releases_cdec: "CDEC Press Releases",
    no_press_releases_available: "No press releases available",
    published_on: "Published on",
    open_document: "Open document",
    cdec_publications: "CDEC Publications",
    no_publications_available: "No publications available at the moment.",
    cdec_interviews: "CDEC Interviews",
    discover_our_latest_interviews: "Discover our latest interviews",
    search_interview: "Search for an interview...",
    read_interview: "Read the interview",
    no_results_found: 'No results found for "{{searchQuery}}"',
    cdec_media_library: "CDEC Media Library",
    discover_our_latest_videos: "Discover our latest videos",
    search_video: "Search for a video...",
    cdec_cameroun: "CDEC Cameroon",
    watch: "Watch",
    open: "Open",
    no_videos_available: "No videos available.",
    deposit: "Deposit",
    consignation_title: "Administrative Consignment",
    consignation_subtitle:
      "Administrative Consignment: Secure your funds and assets in complete legality.",
    what_is_it: "What is it?",
    consignation_definition:
      "<b>Administrative consignment</b> is a legal procedure by which funds or assets are deposited with an administrative authority or public body as collateral or provisional settlement of a disputed situation or for other legal reasons.",
    advantages: "What are its advantages?",
    advantage_1:
      "<b>Securing funds or assets:</b> Consignment ensures that the funds or assets in question are protected and available until the dispute is resolved or the final decision is made. This avoids the risk of dissipation or misuse of resources.",
    advantage_2:
      "<b>Guarantee of execution:</b> It provides a financial or material guarantee, ensuring that legal obligations will be respected. The parties know that the necessary resources are consigned and ready to be used according to the final decision.",
    advantage_3:
      "<b>Reducing the risk of fraud:</b> Consignment with a public authority reduces the risk of fraud or embezzlement of funds, as the authority acts as a neutral and secure third party.",
    activities: "Our different activities",
    activity_1: "Bonds of public accountants",
    activity_2: "Guarantees on public contracts",
    activity_3:
      "Guarantees for occupation of administrative housing or public domain",
    activity_4: "Guarantees of ministerial public officers",
    activity_5: "Repatriation bonds",
    activity_6: "Bonds of candidates for elections",
    activity_7:
      "Consignments for personal contribution and advance on vehicle purchase",
    activity_8: "Consignments for logging",
    activity_9:
      "Consignments of the quota share of fees allocated to the courts",
    activity_10: "Consignments for criminal labor",
    activity_11: "Guardianship fund",
  },

  fr: {
    consignation_title: "La consignation administrative",
    deposit: "Dépôt",
    deposits: "Dépôt",
    deposit_descr:
      "est un acte matériel par lequel la CDEC reçoit une somme d'argent, une valeur mobilière ou des métaux précieux d'autrui à charge de les garder et de les restituer.",
    consignation_subtitle:
      "Consignation Administrative : Sécurisez vos fonds et biens en toute légalité.",

    what_is_it: "Qu'est ce que c'est?",
    consignation_definition:
      "<b>La consignation administrative</b> est une procédure légale par laquelle des fonds ou des biens sont déposés auprès d'une autorité administrative ou d'un organisme public à titre de garantie ou de règlement provisoire d'une situation en litige ou pour d'autres raisons légales.",
    advantages: "Quelles sont ses avantages?",
    advantage_1:
      "<b>Sécurisation des fonds ou des biens :</b> La consignation assure que les fonds ou les biens en question sont protégés et disponibles jusqu'à la résolution du litige ou la décision finale. Cela évite les risques de dissipation ou de détournement des ressources.",
    advantage_2:
      "<b>Garantie d'exécution :</b> Elle fournit une garantie financière ou matérielle, assurant que les obligations légales seront respectées. Les parties savent que les ressources nécessaires sont consignées et prêtes à être utilisées selon la décision finale.",
    advantage_3:
      "<b>Réduction des risques de fraude :</b> La consignation auprès d'une autorité publique réduit les risques de fraude ou de détournement des fonds, car l'autorité agit en tant que tiers neutre et sécurisé.",
    admin_deposits_desc:
      "est une opération légale par laquelle des fonds ou des biens sont déposés auprès d’une autorité administrative ou d’un organisme public à titre de garantie ou de règlement provisoire d’une situation en litige ou pour d’autres raisons légales.",

    activities: "Nos différentes activités",
    activity_1: "Cautionnements des comptables publics",
    activity_2: "Cautionnements sur les marchés publics",
    activity_3:
      "Cautionnements pour occupation d’un logement administratif ou du domaine public",
    activity_4: "Cautionnements des officiers publics ministériels",
    activity_5: "Cautionnements de rapatriement",
    activity_6: "Cautionnements des candidats aux élections",
    activity_7:
      "Consignations pour apport personnel et avance sur achat de véhicule",
    activity_8: "Consignations pour coupe de bois",
    activity_9:
      "Consignations de la quote-part des émoluments affectés aux tribunaux",
    activity_10: "Consignations pour main-d’œuvre pénale",
    activity_11: "Fonds de la curatelle",
    cdec_media_library: "Médiathèque CDEC",
    discover_our_latest_videos: "Découvrez nos dernières vidéos",
    search_video: "Rechercher une vidéo...",
    cdec_cameroun: "CDEC Cameroun",
    watch: "Regarder",
    open: "Ouvrir",
    no_videos_available: "Aucune vidéo disponible.",
    cdec_interviews: "Interviews CDEC",
    discover_our_latest_interviews: "Découvrez nos dernières interviews",
    search_interview: "Rechercher une interview...",
    read_interview: "Lire l'interview",
    no_results_found: 'Aucun résultat trouvé pour "{{searchQuery}}"',
    cdec_publications: "Publications CDEC",
    no_publications_available: "Aucune publication disponible pour le moment.",

    press_releases_cdec: "Communiqués CDEC",
    no_press_releases_available: "Aucun communiqué disponible",
    published_on: "Publié le",
    open_document: "Ouvrir le document",
    welcome: "Caisse des Dépots Et Consignations",

    title: "Les Dépôts à la CDEC",
    definitionTitle: "Définition du Dépôt",
    definitionText:
      "Le Dépôt est un acte matériel par lequel la CDEC reçoit une somme d'argent, une valeur mobilière ou des métaux précieux d'autrui à charge de les garder et de les restituer.",
    depositTypesTitle: "Catégories des Dépôts",
    depositTypesDescription:
      "Chaque catégorie représente un domaine spécifique de gestion des dépôts, reflétant la diversité et la complexité des missions de la CDEC.",
    advantagesTitle: "Avantages des Dépôts",
    depositTypes: {
      auxiliairesJustice: "Fonds des auxiliaires de justice",
      notariaux: "Dépôts notariaux",
      comptesInactifs: "Comptes bancaires inactifs",
      contrepartie: "Fonds de contrepartie",
      expropriation: "Indemnisations d'expropriation",
      liquidationEntreprises: "Liquidation d'entreprises",
      fondsJudiciaires: "Fonds judiciaires",
    },
    advantagesList: {
      economiqueTitle: "Développement Économique",
      economiqueDescription:
        "Stimuler la croissance économique nationale à travers des stratégies d'investissement innovantes et des mécanismes financiers dynamiques.",
      publicTitle: "Service Public",
      publicDescription:
        "Garantir la transparence, la sécurité et l'efficacité des transactions financières au service de l'intérêt général.",
    },

    search: "Rechercher",
    home: "Accueil",
    cdec: "CDEC",
    organizational_chart_title: "Organigramme CDEC",
    services: "Services",
    presentation: "Présentation",
    news: "Actualités",
    latest_news_title: "Les dernières actualités",
    partners_title: "Nos partenaires",
    sponsor_logo: "Logo du sponsor",
    ceo_message: "Mot du Directeur Général",
    director_general: "Directeur Général",
    learn_more_cdec: "En savoir plus sur la CDEC",
    presentation_cdec_title: "Présentation de la CDEC",
    our_partners: "Nos Partenaires",
    loading_sponsors: "Chargement des sponsors",
    sponsor_logo: "Logo de {sponsorName}",
    regulatory_texts: "Textes Réglementaires",
    decrees: "Décrets",
    loading_decrees: "Chargement des décrets...",
    no_regulations_available: "Aucune réglementation disponible",
    check_later: "Veuillez vérifier ultérieurement",
    document_unavailable: "Document non disponible",
    ceo_quote:
      "Une caisse de dépôts et consignations n’a même pas vocation à faire de bénéfices. Elle est là pour combler les défaillances du marché. Elle a ses aspects positifs qu’on ne peut pas négliger. Mais, ces aspects positifs ne peuvent perdurer que si des actions pertinentes sont faites.",
    sponsor: "Sponsor",
    no_sponsors_available: "Aucun sponsor disponible",
    projects_programs: "Projets et Programmes",
    admin_deposits: "La Consignation Administrative",

    judicial_deposits: "La Consignation Judiciaire",
    judicial_deposits_desc:
      "La Consignation Judiciaire est une procédure juridique qui permet de mettre une somme d’argent ou un bien sous l’autorité d’une autorité (souvent un tribunal) pendant la durée d’un litige.",
    conventional_deposits: "La Consignation Conventionnelle",
    conventional_deposits_desc:
      "La Consignation conventionnelle est une pratique par laquelle deux parties, dans le cadre d’un accord privé décident de confier une somme d’argent ou un bien à un tiers de confiance ou à un établissement financier pour en assurer la garde jusqu’à ce que certaines conditions soient remplies.",
    activity_domains: "Domaines D'Activité",
    cdec: "CDEC", // or "Caisse des Dépôts et Consignations"
    cdec_description:
      "La Caisse des Dépôts et Consignations (CDEC) du Cameroun gère et sécurise les fonds publics et privés. Elle centralise des fonds provenant de diverses sources comme les cautionnements et les dépôts judiciaires.",
    investment: "Investissement",
    infrastructure: "Infrastructure",
    sme: "TPE/PME",
    governance: "Gouvernance",
    organizational_chart: "Organigramme",
    regulatory_texts: "Textes réglementaires",
    cooperation_partnerships: "Coopération et partenariats",
    education: "Éducation",
    innovation: "Innovation",
    banking: "Banque",
    engineering: "Ingénierie",
    administration: "Administration",
    governance: "Gouvernance",
    governance_background_image_alt:
      "Image de fond représentant la gouvernance",
    technical_financial_supervision: "Tutelle Technique / Financière",
    ministry_of_finance: "Ministère des Finances (MINFI)",
    board_of_directors: "Conseil d'Administration",
    president: "Président",
    dg_treasury:
      "Directeur Général du Trésor, de la Coopération Financière et Monétaire",
    board_members: "Membres du Conseil d'Administration",
    representative_presidency: "Représentant de la Présidence de la République",
    representative_prime_minister:
      "Représentant des Services du Premier ministre",
    representative_finance_ministry: "Représentant du Ministère des Finances",
    representative_economy_ministry:
      "Représentant du Ministère de l'Économie, de la Planification et de l'Aménagement du Territoire",
    representative_justice_ministry: "Représentant du Ministère de la Justice",
    ceo_message: "MOT DU DIRECTEUR GÉNÉRAL",
    ceo: "Directeur Général",
    learn_more_cdec: "En savoir plus ",
    ceo_quote:
      "Une caisse de dépôts et consignations n’a même pas vocation à faire de bénéfices. Elle est là pour combler les défaillances du marché. Elle a ses aspects positifs qu’on ne peut pas négliger. Mais, ces aspects positifs ne peuvent perdurer que si des actions pertinentes sont faites.",
    key_indicators_2023_title: "Principaux Indicateurs de 2023",
    total_deposits: "Total des dépôts et consignations (millions FCFA)",
    risk_provisions: "Provisions pour risques et charges (millions FCFA)",
    total_transferred_funds: "Total des fonds transféré (millions FCFA)",
    balance_sheet: "Bilan (millions FCFA)",
    net_result: "Résultat net (millions FCFA)",
    expenses: "Dépenses (millions FCFA)",
    social_capital: "Capital social (millions FCFA)",
    financial_placements: "Placements financiers (millions FCFA)",
    revenue: "Revenu (millions FCFA)",
    latest_news: "Les dernières actualités",
    board_meeting: "Conseil d'administration",
    board_meeting_date: "23 décembre 2024",
    labor_day: "Fête du travail",
    labor_day_date: "1 mai 2024",
    press_releases: "Communiqués",
    our_missions: "Nos Missions",
    publications: "Publications",
    interviews: "Interviews",
    media_library: "Mediathèque",
    read_more: "Lire plus",
    partners: "Nos PARTENAIRES",
    phone_icon: "Icône Téléphone",
    email_icon: "Icône Email",
    calendar_icon: "Icône Calendrier",
    work_schedule: "LUN à VEN. 08H00 à 16h00",
    cdec_logo: "Logo CDEC",
    join_us: "Rejoignez-nous",
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    useful_links: "Liens Utiles",
    home: "Accueil",
    conventional_deposits: "La consignation Conventionnelle",
    conventional_deposits_tagline:
      "La Consignation Conventionnelle : Une solution sûre pour se libérer de ses obligations.",
    what_is_it: "Qu'est ce que c'est?",
    conventional_deposits_bold: "La consignation conventionnelle",
    conventional_deposits_desc:
      "est une pratique par laquelle deux parties, dans le cadre d'un accord privé, décident de confier une somme d'argent ou un bien à un tiers de confiance ou à un établissement financier pour en assurer la garde jusqu'à ce que certaines conditions soient remplies.",
    what_are_the_advantages: "Quelles sont ses avantages?",
    mutual_agreement: "Accord Mutuel :",
    mutual_agreement_desc:
      "Les parties peuvent définir leurs propres conditions et modalités de consignation, ce qui offre une grande flexibilité.",
    risk_prevention: "Prévention des Risques :",
    risk_prevention_desc:
      "En déposant les fonds ou les biens auprès d'un tiers de confiance, les parties réduisent les risques de non-paiement ou de non-livraison.",
    trusted_third_party: "Tiers de Confiance :",
    trusted_third_party_desc:
      "Un établissement financier ou un tiers neutre peut jouer le rôle de dépositaire, ce qui renforce la confiance entre les parties.",
    simplified_process: "Processus Simplifié :",
    simplified_process_desc:
      "La gestion des fonds ou des biens consignés est souvent simplifiée grâce à des procédures standardisées par l'établissement dépositaire.",
    time_saving: "Gain de Temps :",
    time_saving_desc:
      "Étant donné qu'elle ne nécessite pas l'intervention d'un tribunal, la consignation conventionnelle peut être mise en place plus rapidement.",
    our_different_activities: "Nos différentes activités",
    guarantees_water_electricity_companies:
      "Cautionnements auprès des entreprises d’eau, d’électricité, de téléphone et d’habitat",
    administrative_deposits: "Consignation Administrative",
    admin_deposits_tagline: "Sécurisez vos fonds et biens en toute légalité.",
    what_is_it: "Qu'est ce que c'est?",

    what_are_the_advantages: "Quelles sont ses avantages?",
    securing_funds_assets: "Sécurisation des fonds ou des biens :",
    securing_funds_assets_desc:
      "La consignation assure que les fonds ou les biens en question sont protégés et disponibles jusqu'à la résolution du litige ou la décision finale. Cela évite les risques de dissipation ou de détournement des ressources.",
    guarantee_execution: "Garantie d'exécution :",
    guarantee_execution_desc:
      "Elle fournit une garantie financière ou matérielle, assurant que les obligations légales seront respectées. Les parties savent que les ressources nécessaires sont consignées et prêtes à être utilisées selon la décision finale.",
    reducing_fraud_risks: "Réduction des risques de fraude :",
    reducing_fraud_risks_desc:
      "La consignation auprès d'une autorité publique réduit les risques de fraude ou de détournement des fonds, car l'autorité agit en tant que tiers neutre et sécurisé.",
    encouraging_quick_dispute_resolution:
      "Encouragement à la résolution rapide des litiges :",
    encouraging_quick_dispute_resolution_desc:
      "La présence de fonds ou de biens consignés peut inciter les parties à résoudre les litiges plus rapidement, sachant que les ressources sont immobilisées jusqu'à la résolution.",
    our_different_activities: "Nos différentes activités",
    guarantees_public_accountants: "Cautionnements des comptables publics",
    guarantees_public_markets: "Cautionnements sur les marchés publics",
    guarantees_occupation_admin_housing:
      "Cautionnements pour occupation d’un logement administratif ou du domaine public",
    guarantees_public_officials:
      "Cautionnements des officiers publics ministériels",
    repatriation_guarantees: "Cautionnements de rapatriement",
    guarantees_election_candidates:
      "Cautionnements des candidats aux élections",
    deposits_personal_contribution:
      "Consignations pour apport personnel et avance sur achat de véhicule",
    deposits_timber_harvesting: "Consignations pour coupe de bois",
    deposits_share_emoluments:
      "Consignations de la quote-part des émoluments affectés aux tribunaux",
    deposits_penal_labor: "Consignations pour main-d’œuvre pénale",
    curatorship_funds: "Fonds de la curatelle",
    presentation: "Présentation",
    news: "Actualités",

    info_cdec: "Informations CDEC",
    advantages: "Avantages",
    economic_development:
      "Développement économique du pays : Les dépôts peuvent concourir au développement économique du pays, par l’intermédiaire des structures spécialisées, selon les priorités par le gouvernement.",
    public_service:
      "Service public : Les dépôts s’inscrivent dans le cadre d’une mission de service public.",
    categories: "Catégories",
    activit_1: "Les fonds des clients détenus par des auxiliaires de justice",
    activit_2:
      "Les dépôts effectués par des notaires, administrateurs, et mandataires judiciaires",
    activit_3:
      "Les fonds issus des comptes inactifs des établissements bancaires",
    activit_4: "Les fonds de contrepartie",
    activit_5:
      "Les fonds destinés aux indemnisations pour expropriation pour cause d’utilité publique",
    activit_6: "Les fonds issus des liquidations des entreprises publiques",
    activit_7:
      "Les fonds complémentaires d’équipement des services judiciaires",
    activit_8: "Les dépôts ordonnés par les lois et règlements",

    depositDescription:
      "Découvrez les mécanismes et les avantages des dépôts gérés par la Caisse des Dépôts et Consignations",
    newsletter: "NEWSLETTER",
    newsletter_placeholder: "Votre email ici",
    subscribe: "Souscrire",
    copyright: "Copyright CDEC © 2024. Tous droits réservés.",
    powered_by: "Propulsé par EVENTIFY AGENCY",
    chat_online: "Chat en ligne",
    chat_placeholder: "Écrivez votre message...",
    chat_greeting: "Bonjour ! Comment puis-je vous aider ?",
    chat_response:
      "Merci pour votre message. Un conseiller vous répondra bientôt.",
    subscription_success: "Votre inscription a été prise en compte.",

    administrative_deposits: "Administrative Deposits",
    admin_deposits_tagline:
      "Administrative Deposit: Secure your funds and assets with complete legality.",
    what_is_it: "What is it?",
    admin_deposits_bold: "Administrative deposit",

    what_are_the_advantages: "What are its advantages?",
    securing_funds_assets: "Securing funds or assets:",
    securing_funds_assets_desc:
      "Consignment ensures that the funds or assets in question are protected and available until the resolution of the dispute or the final decision. This avoids the risk of dissipation or misuse of resources.",
    guarantee_execution: "Guarantee of execution:",
    guarantee_execution_desc:
      "It provides a financial or material guarantee, ensuring that legal obligations will be respected. The parties know that the necessary resources are consigned and ready to be used according to the final decision.",
    reducing_fraud_risks: "Reducing fraud risks:",
    reducing_fraud_risks_desc:
      "Consignment with a public authority reduces the risk of fraud or misuse of funds, as the authority acts as a neutral and secure third party.",
    encouraging_quick_dispute_resolution:
      "Encouraging quick dispute resolution:",
    encouraging_quick_dispute_resolution_desc:
      "The presence of consigned funds or assets may encourage the parties to resolve disputes more quickly, knowing that the resources are immobilized until the resolution.",
    our_different_activities: "Our different activities",
    guarantees_public_accountants: "Guarantees of public accountants",
    guarantees_public_markets: "Guarantees on public markets",
    guarantees_occupation_admin_housing:
      "Guarantees for occupation of administrative housing or public domain",
    guarantees_public_officials: "Guarantees of public officials",
    repatriation_guarantees: "Repatriation guarantees",
    guarantees_election_candidates: "Guarantees of candidates for elections",
    deposits_personal_contribution:
      "Consignments for personal contribution and advance on vehicle purchase",
    deposits_timber_harvesting: "Consignments for timber harvesting",
    deposits_share_emoluments:
      "Consignments of the share of emoluments allocated to the courts",
    deposits_penal_labor: "Consignments for penal labor",
    curatorship_funds: "Curatorship funds",

    judicial_deposits: "La consignation judiciaire",
    judicial_deposits_tagline:
      "La Consignation Judiciaire : Sécurisez vos intérêts pendant les litiges avec efficacité et équité.",
    what_is_it: "Qu'est-ce que c'est ?",
    judicial_deposits_bold: "La consignation judiciaire",
    judicial_deposits_desc:
      "est une procédure juridique qui permet de mettre une somme d'argent ou un bien sous la garde d'une autorité (souvent un tribunal) pendant la durée d'un litige.",
    what_are_the_advantages: "Quels sont ses avantages ?",
    protection_against_fraud: "Protection contre les Fraudes :",
    protection_against_fraud_desc:
      "La consignation empêche l'une des parties de détourner ou de dissiper les fonds ou les biens pendant la durée du litige.",
    neutrality: "Neutralité :",
    neutrality_desc:
      "Les fonds ou les biens consignés sont sous la garde d'une autorité impartiale, garantissant une répartition équitable selon la décision judiciaire.",
    incentive_amicable_settlement: "Incitation à un Règlement Amiable :",
    incentive_amicable_settlement_desc:
      "Sachant que les fonds ou les biens sont consignés, les parties peuvent être plus enclines à négocier et à parvenir à un accord amiable.",
    reduction_financial_risks: "Réduction des Risques Financiers :",
    reduction_financial_risks_desc:
      "La consignation réduit les risques financiers pour les créanciers en s'assurant que les fonds seront disponibles pour le paiement des dettes ou des obligations.",
    clarity_transactions: "Clarté des Transactions :",
    clarity_transactions_desc:
      "La consignation rend les transactions plus transparentes et traçables, ce qui peut être utile en cas de vérifications ou d'audits.",
    our_different_activities: "Nos différentes activités",
    deposits_following_enforceable_judgment:
      "Consignations consécutives à une décision judiciaire exécutoire nonobstant opposition ou appel",
    deposits_following_provisional_enforcement:
      "Consignations consécutives aux décisions exécutoires par provision",
    guarantees_public_officials:
      "Cautionnements des officiers publics ministériels",
    repatriation_guarantees: "Cautionnements de rapatriement",
    guarantees_election_candidates:
      "Cautionnements des candidats aux élections",
    funds_placed_escrow: "Fonds placés sous séquestre",
    funds_from_seizure_sales:
      "Fonds issus des produits de vente sur saisie en attente de distribution",
    funds_registry: "Fonds des greffes",
    deposits_penal_labor: "Consignations pour main-d’œuvre pénale",
    curatorship_funds: "Fonds de la curatelle",
    funds_unavailable_investigation:
      "Fonds rendus indisponibles par l’effet d’une enquête ou d’une instruction judiciaire",
    withholdings_following_seizures:
      "Retenues opérées à la suite des saisies sur les rémunérations",
  },
};

// 

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("locale") || "fr", // Langue par défaut
  fallbackLocale: "en",
  messages,
});

export default i18n;
