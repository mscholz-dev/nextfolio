const projects = [
  {
    id: 0,
    imgSrc: "exact-form-preview",
    imgAlt: "Page d'accueil de Exact Form",
    title:
      "Exact Form : simplifiez la collecte de données avec une solution intelligente",
    url: "exact-form-simplifiez-la-collecte-de-donnees-avec-une-solution-intelligente",
    description: "",
    category: "E-commerce",
    content: `
    <h3>Quel est mon rôle dans ce projet ?</h3>
    <p>Je suis responsable du projet web puisque je suis le seul intervenant.</p>

    <h3>Quels sont les objectifs du projet ?</h3>
    <ul>
      <li>Stocker des données de formulaire sans concevoir une API RESTful / Base de données ;</li>
      <li>Permettre la manipulation des données récoltées (visualisation, modification, suppression) dans un tableau de bord centralisé ;</li>
      <li>Partager les données récoltées à des collaborateurs avec des droits restrictif ;</li>
      <li>Exporter les données récoltées sous différents formats (CSV, Excel, etc...) ;</li>
    </ul>

    <h3>D'où est venu l'idée du projet ?</h3>
    <p>Lors de mon alternance chez Workunion, j'avais comme mission de faire la refonte de site web, que ça soit le design, le parcours utilisateur ainsi que la conception des base de données.</p>
    <p>Certains sites web ne possédait qu'un ou deux formulaires à gérer et concevoir, héberger une API ainsi qu'une base de données pour si peu était une perte de temps et d'argent, c'est là que l'idée d'Exact Form m'est venu.</p>

    <h3>Combien de temps le projet a-t-il durée ?</h3>
    <ul>
      <li>L'idée d'Exact Form est venu en fin Janvier ;</li>
      <li>La phase de prototypage (maquettes intéractives) du site web à durée 1 semaine ;</li>
      <li>La conception de la base de données et des fonctionnalités à durée 2 semaines à l'aide de différents diagrammes (modèle logique/physique de données)</li>
      <li>L'intégration de l'interface utilisateur ainsi que <b>les tests End-to-End</b> ont durée 2 semaines ;</li>
      <li>La réalisation de l'API REST, la base de données ainsi que <b>les tests d'intégrations avec Jest</b> ont durée 3 semaines ;</li>
      <li>La création d'un dossier projet contenant le cachier des charges, les spécifications fonctionnelles et techniques, les livrables, etc... a durée 3 semaines ;</li>
      <li>L'élaboration de slides afin de présenter ce projet à un jury de deux développeurs séniors pour valider mon diplôme de <b>Concepteur développeur web</b> a pris 2 semaines ;</li>
    </ul>

    <p>À savoir que le projet n'est actuellement pas entièrement fini, notamment la partie collaboration et exportation du projet, mais le coeur du projet est fonctionnel.</p>

    <h3>Quelles ont été les choix technologiques du projet ?</h3>
    <p>Pour commencer, le language pour créer les applications n'est pas le JavaScript mais le TypeScript. Ce choix a été fait pour plusieurs raisons :</p>
    <ul>
      <li>Le typage statique pour restreindre les données incorrectes et améliorer l'autocomplétion ;</li>
      <li>Il est facultatif et réversible, le supprimer entièrement d'un projet n'est pas un problème ;</li>
      <li>Sa transpilation ES6 permettant de coder en ES6+ et transformer le code en ES5 ou moins pour améliorer la compatibilité avec les serveurs / navigateurs web ;</li>
      <li>Il est largement adopté par les développeurs JavaScript car il permet notamment de faciliter le travail en équipe pour les raisons ci-dessus ;</li>
      <li>Surtout monter en compétence en tant que développeur JavaScript ;</li>
    </ul>

    <p>Pour le front, NextJS a été retenu étant donné que c'est un framework que je connais dans son intégralité. Pour l'API RESTful, j'ai choisi d'utiliser ExpressJS puisque c'est un framework permettant une grande liberté dans l'architecture du projet et pour sa rapidité (cela me permet de profiter de l'architecture de NestJS sans sa lenteur dans les requêtes HTTP).</p>
    <p>Pour simplifier et uniformiser les requêtes d'une base de données à l'autre, j'ai utilisé Prisma comme ORM.</p>
    <p>Pour la base de données, j'ai pris MongoDB pour son accès au cloud dès le développement afin de réduire un maximum les imprévus lors de mise en production. De plus, cela permet de n'avoir rien à installer en local facilitant ainsi la mise en place de l'environnement de développement.</p>
    <p>Le cluster MongoDB dans le cloud possède 3 base de données différentes :</p>
    <ul>
      <li>"exact_form_dev" pour le développement ;</li>
      <li>"exact_form_test" pour les tests front et API afin de ne pas interférer avec les développeurs ;</li>
      <li>"exact_form" pour la production, c'est la base de données avec laquelle les utilisateurs finaux intéragiront ;</li>
    </ul>

    <h3>La phase design</h3>
    <p>La réalisation de la charte graphique du projet a commencé par le choix des couleurs que portera le site. Avec <a href="https://colorhunt.co/" target="_blank">colorhunt.co</a> j'ai pu facilement trouvé des couleurs qui mettant en valeur la future intégration du site web.</p>
    <figure style="max-width:500px">
      <img src="/img/projects/exact-form/colors.webp" alt="Couleurs de la charte graphique"/>
      <figcaption>Couleurs de la charte graphique</figcaption>
    </figure>

    <p>Ensuite, le choix des polices a été fait avec <a href="https://fonts.google.com/" target="_blank">fonts.google.com</a>. La police pour les titres se nomme "Saira Condensed" et celle pour les textes "Exo2".</p>
    <figure style="max-width:200px">
      <img src="/img/projects/exact-form/font-saira-condensed.webp" alt="Police des titres"/>
      <figcaption>Police des titres</figcaption>
    </figure>

    <figure style="max-width:200px">
      <img src="/img/projects/exact-form/font-exo2.webp" alt="Police des textes"/>
      <figcaption>Police des textes</figcaption>
    </figure>

    <p>Pour les pictogrammes, mon choix s'est tourné sur <a href="https://fontawesome.com/icons" target="_blank">fontawesome.com</a> pour sa grande variétée ainsi que la gratuitée de ses différents pictogrammes.</p>
    <figure style="max-width:500px">
      <img src="/img/projects/exact-form/icons.webp" alt="Pictogrammes de la charte graphique"/>
      <figcaption>Pictogrammes de la charte graphique</figcaption>
    </figure>

    <p>Le logo quand à lui a été trouvé sur <a href="https://dribbble.com/" target="_blank">dribbble.com</a> et je n'ai fait que le reproduire sur Figma en svg afin d'avoir une version légère et scalable du logo.</p>
    <figure style="max-width:125px">
      <img src="/img/projects/exact-form/logo.svg" alt="Logo de Exact Form"/>
      <figcaption>Logo de Exact Form</figcaption>
    </figure>

    <p>Le prototypage complet a été réalisé avec <a href="https://www.figma.com/" target="_blank">figma.com</a> car c'est un logiciel de design facile à prendre en main, intuitif et permettant à n'importe quel développeur de réaliser des maquettes.</p>
    <p>Le prototypage contient 4 chemins différents :</p>
    <ul>
      <li><a href="https://www.figma.com/proto/88B10LYwnwMkx65CMScKai/Exact-Form?type=design&node-id=28-216&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=28%3A216&show-proto-sidebar=1" target="_blank">Le chemin mobile visiteur</a> ;</li>
      <li><a href="https://www.figma.com/proto/88B10LYwnwMkx65CMScKai/Exact-Form?type=design&node-id=28-165&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=28%3A165&show-proto-sidebar=1" target="_blank">Le chemin PC visiteur</a> ;</li>
      <li><a href="https://www.figma.com/proto/88B10LYwnwMkx65CMScKai/Exact-Form?type=design&node-id=28-956&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=28%3A956&show-proto-sidebar=1" target="_blank">Le chemin mobile connecté</a> ;</li>
      <li><a href="https://www.figma.com/proto/88B10LYwnwMkx65CMScKai/Exact-Form?type=design&node-id=28-926&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=28%3A926&show-proto-sidebar=1" target="_blank">Le chemin PC connecté</a> ;</li>
    </ul>
  

    <h3>La phase conception</h3>
    <p>La mise en place de la conception est la partie la plus importante du projet car elle permet de définir le parcours utilisateur, les données à stocker ainsi que l'ensemble des fonctionnalités du projet dans son ensemble.</p>

    <p>Pour commencer cette conception, j'ai imaginé le parcours utilisateur sur le site avec une cartographie selon si l'utilisateur est connecté ou non.</p>
    <figure style="max-width:800px">
      <img src="/img/projects/exact-form/cartography-visitor.webp" alt="Cartographie du visiteur"/>
      <figcaption>Cartographie du visiteur</figcaption>
    </figure>

    <figure style="max-width:800px">
      <img src="/img/projects/exact-form/cartography-client.webp" alt="Cartographie de l'utilisateur connecté"/>
      <figcaption>Cartographie de l'utilisateur connecté</figcaption>
    </figure>

    <p>S'en est suivi la différenciation des différents rôles présent grâce à des diagrammes de cas d'utilisation pour chaque fonctionnalité </p>
    <figure style="max-width:800px">
      <img src="/img/projects/exact-form/use-case-general.webp" alt="Diagramme de cas d'utilisation général"/>
      <figcaption>Diagramme de cas d'utilisation général</figcaption>
    </figure>

    <figure style="max-width:800px">
      <img src="/img/projects/exact-form/use-case-profile.webp" alt="Diagramme de cas d'utilisation du profil"/>
      <figcaption>Diagramme de cas d'utilisation du profil</figcaption>
    </figure>

    <figure style="max-width:800px">
      <img src="/img/projects/exact-form/use-case-form.webp" alt="Diagramme de cas d'utilisation des liens de collecte de données de formulaires"/>
      <figcaption>Diagramme de cas d'utilisation des liens de collecte de données de formulaires</figcaption>
    </figure>

    <figure style="max-width:800px">
      <img src="/img/projects/exact-form/use-case-form-data.webp" alt="Diagramme de cas d'utilisation des données collectées"/>
      <figcaption>Diagramme de cas d'utilisation des données collectées</figcaption>
    </figure>

    <p>J'ai poursuivi cette conception en créant un diagramme des classes permettant de me représenter les différents services que contiendra mon API RESTful. À savoir que les méthodes ne sont pas présentes pour faciliter la lecture du diagramme.</p>
    <figure style="max-width:800px">
      <img src="/img/projects/exact-form/class-diagram.webp" alt="Diagramme de classe"/>
      <figcaption>Diagramme de classe</figcaption>
    </figure>

    <p>Puis j'ai conçu 2 diagrammes d'activités permettant de visualiser les 2 fonctionnalitées les plus importantes du site, à savoir la collecte de données et la visualisation de ces données de manière paginée.</p>
    <figure style="max-width:300px">
      <img src="/img/projects/exact-form/activity-form-data-create.webp" alt="Diagramme d'activité de l'enregistrement de données avec un lien de collecte"/>
      <figcaption>Diagramme d'activité de l'enregistrement de données avec un lien de collecte</figcaption>
    </figure>

    <figure style="max-width:300px">
      <img src="/img/projects/exact-form/activity-form-data-read.webp" alt="Diagramme d'activité de la visualisation des données récoltées paginées"/>
      <figcaption>Diagramme d'activité de la visualisation des données récoltées paginées</figcaption>
    </figure>

    <p>Pour aller plus loin dans la conception de la visualisation des données récoltées de manière paginées, un diagramme de séquence représentant chaque étape de l'action utilisateur à l'affichage sur l'interface a été fait avec le plus de détails et étapes possibles.</p>
    <figure>
      <img src="/img/projects/exact-form/sequence-diagram.webp" alt="Diagramme de séquence de la visualisation des données récoltées paginées"/>
      <figcaption>Diagramme de séquence de la visualisation des données récoltées paginées</figcaption>
    </figure>

    <p>Maintenant que la base de données commence à prendre forme avec tous les diagrammes précédant, voici un modèle logique de données qui est une version moins détaillée du modèle physique de données.</p>
    <figure style="max-width:800px">
      <img src="/img/projects/exact-form/data-logic-model.webp" alt="Modèle logique de données"/>
      <figcaption>Modèle logique de données</figcaption>
    </figure>

    <p>Du modèle logique de données en découle le modèle physique de données qui est le diagramme réprésentant à la perfection la base de données lors de la conception d'une base de données. On y trouve les contraintes et les tables de liasons s'il y en a (ce qui n'est pas le cas ici).</p>
    <p>À savoir que c'est le diagramme le plus présent lors de la création d'un projet web avec une base de données vu qu'il est simple à faire, facile à comprendre et représente au mieux la base de données juste avant de pouvoir la créer.</p>
    <figure style="max-width:800px">
      <img src="/img/projects/exact-form/data-physic-model.webp" alt="Modèle physique de données"/>
      <figcaption>Modèle physique de données</figcaption>
    </figure>

    <h3>Les tests côté API</h3>
    <p>L'objectif principal des tests côté API est de s'assurer que toutes les parties d'une application fonctionnent correctement ensemble, en simulant des interactions réelles entre les différentes API. Ces tests peuvent être effectués à différents niveaux, tels que le niveau d'unité, le niveau de composant ou le niveau de système, en fonction de la complexité et des exigences du projet.</p>
    <p>Ici, j'ai choisi de faire des tests d'intégration en testant chaque route avec chaque cas d'erreur et de réussite possible afin d'avoir la couverture de test la plus grande possible.</p>
    <figure style="max-width: 600px">
      <img src="/img/projects/exact-form/api-test.webp" alt="Résultats des tests côté API"/>
      <figcaption>Résultats des tests côté API</figcaption>
    </figure>

    <h3>La mise en production</h3>
    <p>J'ai d'abord acheté le nom de domaine "exact-form.com" sur <a href="https://namecheap.com/" target="_blank">namecheap.com</a> que j'ai relié à Heroku qui qui héberge le front et l'API. Heroku est à mon sens meilleur que OVH pour l'hébergement ainsi que la gestion du nom de domaine. À savoir que les deux projets ont besoin de serveur pour fonctionner, NextJS ne fonctionne pas dans le même environnement que ReactJS.</p>
    <p>Actuellement la production n'est pas disponible puisque Heroku me coûterait 14€ par mois. Avec des moyens plus importants, je commencerai à l'utiliser dans mes futurs projets.</p>

    <h3>Quelles ont été les ressources mise en oeuvre pour assurer la sécurité sur le site ?</h3>
    <p>Beaucoup de ressources ont été mise en oeuvre afin de sécuriser un maximum toutes les requêtes ainsi que les données que le site recolte :</p>
    <ul>
      <li>XSS, la faille permettant des injections de script est bloquée avec l'utilisation de NextJS et le paquet npm "xss" ;</li>
      <li>Injection NoSQL, la faille permettant des injections de requêtes dans la base de données pour y soutirer des informations est bloqué grâce à l'ORM Prisma ;</li>
      <li>Les mots de passe stockées en base de données sont hachés. Personne, y compris un développeur du site ne peut connâitre votre mot de passe car un mot de passe haché ne peut pas permettre de trouver le mot de passe final ;</li>
      <li>Chaque mot de passe est robuste (1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial et 8 caractères minimaux) afin de limiter les attaques par brute force et le vol de compte ;</li>
      <li>La base de données de production est inaccessible à tous les développeurs avec des utilisateurs différents et inversement afin d'éviter tout problème ;</li>
    </ul>

    <h3>Conclusion</h3>
    <p>La réalisation de ce projet m'aura énormement appris que ça soit pour me sentir plus à l'aise avec TypeScript ou avec la mise en place de tests End-to-End et d'intégration côté front et API. De plus étant un projet que j'ai réalisé seul, je suis heureux de tout ce qui a été produit pour la réalisation de ce projet.</p>
    <p>Ce projet m'a permis d'obtenir mon Bac+3 en validant mon diplôme de concepteur développeur web devant un jury de deux développeurs séniors lors d'une présentation de deux heures.</p>
    `,
  },
  {
    id: 1,
    imgSrc: "ikomobi-preview",
    imgAlt: "Page d'accueil de Ikomobi",
    title:
      "Ikomobi : intégration captivante de sa page d'accueil",
    url: "ikomobi-integration-captivante-de-sa-page-d-accueil",
    category: "Agence web",
    content: `
    <h3></h3>
    `,
  },
  {
    id: 2,
    imgSrc: "pixel-renovate-preview",
    imgAlt: "Page d'accueil de Pixel Renovate",
    title:
      "Pixel Renovate : explorez notre service de réparation professionnel",
    url: "pixel-renovate-explorez-notre-service-de-reparation-professionnel",
    category: "E-commerce",
    content: `
    <h3>Qu'est ce que Pixel Renovate ?</h3>
    <p>Pixel Renovate est un site web proposant des services de réparation informatique. Ce projet a pour but de ressembler le plus possible à un site d'entreprise actif.</p>

    <h3>Quel est mon rôle dans ce projet ?</h3>
    <p>Je suis responsable du projet web puisque je suis le seul intervenant.</p>

    <h3>Quels ont été les objectifs de ce projet ?</h3>
    <ul>
      <li>Tester des intégrations tel que Notion ou les webhooks de Discord ;</li>
      <li>Utiliser une librairie pour rendre le site très dynamique (framer-motion);</li>
      <li>Utiliser l'API serverless de NextJS ;</li>
      <li>Monter en compétence, encore et toujours !</li>
    </ul>

    <h3>>Combien de temps le projet a-t-il durée ?</h3>
    <p>J'ai pris pratiquement 1 mois que ça soit pour l'idée, le design, la conception ainsi que le développement de la solution et la mise en production du site.</p>
    <p>J'ai notamment testé l'API de Notion pour avoir un backend déjà près à l'emploi mais l'API de Notion étant extrèmement lente (parfois plus de 8 secondes pour ajouter une petite donnée dans une base de données Notion), j'ai dû opter pour les webhooks de Discord ainsi que MongoDB pour stocker les données clientes.</p>

    <h3>Quels sites ont servis pour le benchmark ?</h3>
    <p>Le benchmark est une des étapes les plus importantes et qui permet de gagner beaucoup de temps dans le lancement d'un projet en s'inspirant de ce qui a déjà été fait pour faire MIEUX ! J'ai principalement benchmarké 3 sites d'entreprises se trouvant sur Lille :</p>
    <ul>
      <li><a href="https://www.supergeek.fr/depannage-informatique/hauts-de-france/lille/" target="_blank">supergeek.fr</a> ;</li>
      <li><a href="https://www.ldlc.com/magasins-ldlc/magasin-470059/59-ldlc-villeneuve-d-ascq/" target="_blank">ldlc.com</a></li>
      <li><a href="https://easytechlille.fr/" target="_blank">easytechlille.fr</a></li>
    </ul>

    <h3>La phase design</h3>
    <p>La réalisation de la charte graphique du projet a commencé par le choix des couleurs que portera le site. Avec <a href="https://colorhunt.co/" target="_blank">colorhunt.co</a> j'ai pu facilement trouvé des couleurs qui mettant en valeur la future intégration du site web.</p>

    <figure style="max-width: 350px">
      <img src="/img/projects/pixel-renovate/pixel-renovate-colors.webp" alt="Charte graphique de Pixel Renovate"/>
      <figcaption>Charte graphique de Pixel Renovate</figcaption>
    </figure>


    <p></p> TODO: ajouter les polices à chaque projet ainsi que les logos
    <figure style="max-width: 500px">
      <img src="/img/projects/pixel-renovate/reviews-model.webp" alt="Maquette dribbble pour le design du block des avis des clients du site"/>
      <figcaption><a href="https://dribbble.com/shots/19247588-No-Code-Automation-SaaS-Website" target="_blank">Maquette dribbble pour le design du block des avis des clients du site</a></figcaption>
    </figure>

    <figure style="max-width: 500px">
      <img src="/img/projects/pixel-renovate/service-card-model.webp" alt="Maquette dribble pour le design des différents services du site"/>
      <figcaption><a href="https://dribbble.com/shots/17440301-Card-Components" target="_blank">Maquette dribble pour le design des différents services du site</a></figcaption>
    </figure>

    <figure  style="max-width: 500px">
      <img src="/img/projects/pixel-renovate/discord-illustration.webp" alt="Illustration trouvée sur dribbble de Discord"/>
      <figcaption><a href="https://dribbble.com/shots/20961326-Discord-Logo" target="_blank">Illustration trouvée sur dribbble de Discord</a></figcaption>
    </figure>

    <figure style="max-width: 300px">
      <img src="/img/projects/pixel-renovate/pixel-renovate-data-physic-model.webp" alt="Modèle physique de données"/>
      <figcaption>Modèle physique de données</figcaption>
    </figure>

    <h3>Comment le contenu du site a été créer ?</h3>
    <p></p>
    `,
  },
  {
    id: 3,
    imgSrc: "pc-genius-preview",
    imgAlt: "Page d'accueil de PC Genius",
    title:
      "PC Genius : découvrez l'univers en ligne de l'expertise informatique à travers le site web de notre client",
    url: "pc-genius-decouvrez-l-univers-en-ligne-de-l-expertise-informatique-a-travers-le-site-web-de-notre-client",
    category: "Premier client",
    content: `
    <h3></h3>

    <figure>
      <img src="/img/projects/pc-genius/pc-genius-colors.webp" alt="Charte graphique de PC Genius"/>
      <figcaption>Charte graphique de PC Genius</figcaption>
    </figure>

    <figure>
      <img src="" alt="Maquette dribbble pour le design des différents services du site"/>
      <figcaption><a href="" target="_blank">Maquette dribbble pour le design des différents services du site</a></figcaption>
    </figure>
    `,
  },
  {
    id: 4,
    imgSrc: "workunion-preview",
    imgAlt: "Page d'accueil de Workunion",
    title:
      "Workunion : explorez notre plateforme de réservation d'espaces de coworking et de domiciliation en ligne",
    url: "workunion-explorez-notre-plateforme-de-reservation-d-espaces-de-coworking-et-de-domiciliation-en-ligne",
    category: "Réservation",
    content: `
    <h3>Quel est mon rôle dans ce projet ?</h3>
    <p>J'ai aidé à la conception du projet dans son intégralité en imaginant la base de données ainsi que le parcours utilisateur du début à la fin de la réservation d'un espace de coworking. Lors de ce projet, j'ai été épauler par un second concepteur développeur web où je me suis occupé de la partie back-end pendant que lui s'occupait de la partie front-end du site web.</p>

    <h3>Quels sont les objectifs du site ?</h3>
    <ul>
      <li>Mettre le site de l'entreprise aux goûts du jour ;</li>
      <li>Promouvoir la domiciliation ;</li>
      <li>Permettre une réservation d'espace de coworking 100% automatisé ;</li>
      <li>Monter en compétence en conception et en TypeScript ;</li>
    </ul>

    <h3>Combien de temps le projet a-t-il durée ?</h3>
    <ul>
      <li>La recherche de la charte graphique et de l'intégration de la page d'accueil a durée 1.5 semaines ;</li>
      <li>La mise en place de la réservation des espaces de coworking 100% automatisé en ligne nous a pris 2 semaines en se répartissant les tâches intelligamment ;</li>
    </ul>

    <h3>Quelles ont été les choix technologiques pour ce site ?</h3>
    <p>Pour commencer, le language pour créer les applications n'est pas le JavaScript mais le TypeScript. Ce choix a été fait pour plusieurs raisons :</p>
    <ul>
      <li>Le typage statique pour restreindre les données incorrectes et améliorer l'autocomplétion ;</li>
      <li>Il est facultatif et réversible, le supprimer entièrement d'un projet n'est pas un problème ;</li>
      <li>Sa transpilation ES6 permettant de coder en ES6+ et transformer le code en ES5 ou moins pour améliorer la compatibilité avec les serveurs / navigateurs web ;</li>
      <li>Il est largement adopté par les développeurs JavaScript car il permet notamment de faciliter le travail en équipe pour les raisons ci-dessus ;</li>
      <li>Surtout monter en compétence en tant que développeur JavaScript ;</li>
    </ul>

    <p>Pour le front, NextJS a été retenu étant donné que c'est un framework que je connais dans son intégralité. Pour l'API RESTful, j'ai choisi d'utiliser ExpressJS puisque c'est un framework permettant une grande liberté dans l'architecture du projet et pour sa rapidité (cela me permet de profiter de l'architecture de NestJS sans sa lenteur dans les requêtes HTTP).</p>
    <p>Pour simplifier et uniformiser les requêtes d'une base de données à l'autre, j'ai utilisé Prisma comme ORM.</p>
    <p>Pour la base de données, j'ai pris MongoDB pour son accès au cloud dès le développement afin de réduire un maximum les imprévus lors de mise en production. De plus, cela permet de n'avoir rien à installer en local facilitant ainsi la mise en place de l'environnement de développement.</p>

    <h3>La phase design de Workunion</h3>
    <p>La réalisation de la charte graphique du projet a commencé par le choix des couleurs que portera le site. Avec <a href="https://colorhunt.co/" target="_blank">colorhunt.co</a> nous avons pu facilement trouvé des couleurs qui mettant en valeur la future intégration du site web.</p>

    <figure>
      <img src="/img/projects/workunion/workunion-colors.webp" alt="Charte graphique de Workunion"/>
      <figcaption>Charte graphique de Workunion</figcaption>
    </figure>

    <figure>
      <img src="/img/projects/workunion/select-model.webp" alt="Maquette dribbble du componsant des tarifs de domiciliations"/>
      <figcaption><a href="https://dribbble.com/shots/20081653-Gonline-Sales-Management-Landing-Page" target="_blank">Maquette dribbble du componsant des tarifs de domiciliations</a></figcaption>
    </figure>

    <figure>
      <img src="/img/projects/workunion/workunion-data-physic-model.webp" alt="Modèle physique de données"/>
      <figcaption>Modèle physique de données</figcaption>
    </figure>
    `,
  },
  {
    id: 5,
    imgSrc: "portfolio-preview",
    imgAlt: "Page d'accueil de mon portfolio",
    title:
      "Mon Portfolio : de l'imagination à la réalisation d'un site web personnel",
    url: "mon-portfolio-de-l-imagination-a-la-realisation-d-un-site-web-personnel",
    category: "Promotionnel",
    content: `
    <h3>Pourquoi avoir créé un portfolio ?</h3>
    <p>À l'ère numérique, il est essentiel d'avoir une présence en ligne professionnelle. Mon portfolio me sert de vitrine en ligne où je présentes mon travail de manière professionnelle et accessible à tous. Cela facilite la recherche de mes réalisations par des clients potentiels, des recruteurs ou des collaborateurs, et cela me permet de contrôler l'image que vous souhaitez projeter.</p>

    <h3>Combien de temps le projet a-t-il durée ?</h3>
    <p>J'ai pris un mois avec quelques pauses puisque cela est tombé en même temps que le passage de mon diplôme de concepteur développeur web.</p>
    
    <h3>Quelles ont été mes inspirations pour la réalisation l'interface utilisateur ?</h3>
    <p>Lorsque je travaille sans design pour appuyer le développement d'un projet web, j'utilise sans modération <a href="https://dribbble.com/" target="_blank">dribbble.com</a> afin de trouver des design innovants et gratuitement. Une fois une maquette ou un composant me permettant de créer un block, je n'ai qu'à le reproduire en le mettant en adéquation avec ma charte graphique.</p>
    <p>Voici la maquette qui m'a permis de trouver les couleurs ainsi que la structure de la page d'accueil : <a href="https://cdn.dribbble.com/users/2328616/screenshots/18329565/downloads/Moxa%20%E2%9C%A6%20Homepage%20Full.png" target="_blank">lien dribbble</a></p>

    <p>Depuis cette maquette, j'ai obtenu les couleurs que le portfolio portera.</p>
    <figure style="max-width:350px">
      <img src="/img/projects/portfolio/portfolio-colors.webp" alt="Charte graphique de mon portfolio"/>
      <figcaption>Charte graphique de mon portfolio</figcaption>
    </figure>

    <p>Après de longues recherches, j'ai trouvé un componsant innovant et très technique à réaliser qui était parfait pour représenter mes compétences techniques étant donné qu'il serait le componsant le plus technique du portfolio !</p>
    <figure style="max-width:800px">
      <img src="/img/projects/portfolio/stack-model.webp" alt="Composant trouvé sur dribbble représentant mes compétences techniques sur l'accueil"/>
      <figcaption><a href="https://dribbble.com/shots/16137898-Introducing-Alloy-Ecommerce-Stack-2-0" target="_blank">Composant trouvé sur dribbble représentant mes compétences techniques sur l'accueil</a></figcaption>
    </figure>

    <p>Je voulais aussi que le portfolio est quelque chose de plus humain que les autres, j'ai donc décidé d'y intégrer des voix de mes anciens collègues qui se sont enregistré pour vous donner le ressentit qu'ils ont eu en travaillant avec moi !</p>
    <figure style="max-width:800px">
      <img src="/img/projects/portfolio/testimony-model.webp" alt="Maquette dribble pour le design du block témoignage"/>
      <figcaption><a href="https://dribbble.com/shots/20647721-Testimony-Alternative-Section" target="_blank">Maquette dribble pour le design du block témoignage</a></figcaption>
    </figure>

    <h3>Y-a-t'il eu une conception avec la mise en route du développement ?</h3>
    <p>Oui ! Un modèle physique de donnéees a été fait afin de savoir ce que chaque formulaire permettrait de stocker.</p>
    <figure style="max-width:500px">
      <img src="/img/projects/portfolio/portfolio-data-physic-model.webp" alt="Modèle physique de données"/>
      <figcaption>Modèle physique de données</figcaption>
    </figure>

    <p>Pour les technologies utilisés, on y trouve NextJS en front étant un framework que je maitrîse sur le bout des doigts. Pour la base de données, j'ai choisi MongoDB pour son accès au cloud dès le développement afin de réduire au maximum les imprévus lors de mise en production ainsi que de faciliter le développement car cela enlève l'installation de paquets pour tourner une base de données en locale.</p>
    <p>Pour pouvoir répondre au mieux aux demandes de contact ainsi qu'être informer à la seconde près lorsque quelqu'un s'abonne à ma newsletter, j'utilise Discord afin de recevoir un message m'informant qu'un utilisateur a soumis un formulaire. C'est une solution gratuite et extrèmement simple à mettre en place.</p>
    
    <h3>Comment s'est déroulé la mise en production ?</h3>
    <p>J'ai déjà acheté le nom de domaine <a href="https://mscholz.dev" target="_blank">mscholz.dev</a> sur <a href="https://namecheap.com/" target="_blank">namecheap.com</a>. Puis j'ai hébergé le projet NextJS sur <a href="https://vercel.com/" target="_blank">vercel.com</a> gratuitement.</p>
    <p>À noter que l'API a directement été faite dans le projet NextJS avec son API serverless intégrée pour n'engendrer aucun coût mensuel inutile.</p>

    <h3>Est-ce que ce portfolio respecte la RGPD (réglementation générale de la protection des données) ?</h3>
    <p>Oui ! Dès la conception, ces lois ont été prise en compte dès la conception. Une page mentions légales bien fournis est présente avec toutes les informations nécessaires sur les données que le site collecte.</p>
    <p>De plus, chaque soumission de formulaire, donc stockage de données utilisateurs qu'elles soient personnelles ou non, envoie un email à l'utilisateur concerné avec un lien permettant en 1 clic de <b>supprimer</b> les données de sa demande. Cela permet à chacun de changer à tout moment son avis et de supprimer tout passage sur le site !</p>
    `,
  },
];

export default projects;

/*
<figure>
  <img src="" alt=""/>
  <figcaption></figcaption>
</figure>
*/
