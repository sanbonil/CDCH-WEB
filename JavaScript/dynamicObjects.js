const members = [
    //id, nameEN,nameES, briefEN,briefES,briefCAT, descriptionEN,descriptionES,descriptionCAT, link
    {
        id : 1,
        nameEN : "Dr. Ignasi Rodriguez-Roda Layret",
        nameES : "Laboratorio de Ingeniería Química y Analítica - LEQUIA",
        briefEN: "Professor, UdG, Cathedra Director",
        briefES: "",
        briefCAT: "Catedràtic, UdG, Director de Càtedra",
        descriptionEN:"Chemical engineering professor at the Universitat de Girona and senior Researcher at LEQUiA-UdG",
        descriptionES:"El Laboratori d’Enginyeria Química i Ambiental (LEQUIA) es un grupo de investigación de la Universitat de Girona, que desarrolla soluciones eco-innovadoras en el ámbito del medio ambiente. Las líneas actuales de investigación son: 1) bioprocesos innovadores para el tratamiento, la recuperación de recursos y la síntesis de nuevos productos; 2) procesos avanzados fisicoquímicos para el tratamiento y/o reutilización de efluentes líquidos y gaseosos; y 3) la planificación y control, así como la evaluación de sistemas ambientales complejos.",
        descriptionCAT:"Dra. Sara Rodríguez-Mozaz centra la seva recerca en el desenvolupament d'eines analítiques avançades per estudiar l'origen, el destí i l'impacte ecològic dels anomenats contaminants emergents al medi ambient i sobre la salut humana. És IP de ReUseMP3 i líder de WP3, WP4 i WP5.",
        link: ""
    },
   {
        id : 2,
        nameEN : "Dr. Gianluigi Buttiglieri",
        nameES : "Investigadores Criminología",
        briefEN: "Research Scientist, ICRA, PI of ReUseMP3",
        briefES:"",
        briefCAT:"Investigador científic, ICRA, PI de ReUseMP3",
        descriptionEN:"Dr. Gianluigi Buttiglieri focuses his research on water reuse, circular economy, and nature-based solutions, with a special attention on the fate of organic micropollutants in water and wastewater technologies. He is PI of ReUseMP3 and leader of WP1, WP2 and WP4.",
        descriptionES:"",
        descriptionCAT:"Dr. Gianluigi Buttiglieri centra la seva recerca en la reutilització de l'aigua, l'economia circular i les solucions basades en la natura, amb una atenció especial al destí dels microcontaminants orgànics a les tecnologies de tractament de les aigües residuals. És IP de ReUseMP3 i líder dels WP1, WP2 i WP4.",
        link: ""
    },
    {
        id : 3,
        nameEN : "Dr. Quim Comas",
        nameES : "Investigadores Derecho",
        briefEN: "Professor, UdG",
        briefES:"",
        briefCAT:"Professor, UdG",
        descriptionEN:"Dr. Quim Comas is expert on the development of tools and technologies to foster the implementation of circular economy in the urban water cycle, multicriteria decision support systems, nature-based solutions, and membrane technologies. In ReUseMP3 he will be working mainly in WP2 and WP6.",
        descriptionES:"",
        descriptionCAT:"Dr. Quim Comas és expert en el desenvolupament d'eines i tecnologies per fomentar la implementació de l'economia circular al cicle urbà de l'aigua, sistemes de suport a la decisió multicriteri, solucions basades en la naturalesa i tecnologies de membranes. A ReUseMP3 treballarà principalment als WP2 i WP6.",
        link: ""
    },
   {
        id : 4,
        nameEN : "Dr. Eusebi Calle Ortega",
        nameES : "Broadband Communications and Distributed Systems - BCDS",
        briefEN: "Professor, UdG",
        briefES:"",
        briefCAT:"Professor, UdG",
        descriptionEN:"Dr. Eusebi Calle Ortega has expertise in the design and analysis of availability, robustness, and routing schemes in different types of networks, including water distribution networks. In ReUseMP3 he will be working mainly in WP6.",
        descriptionES:"El grupo de investigación BCDS-UdG tiene experiencia en la aplicación de la ciencia de redes, la teoría de grafos y la inteligencia artificial/aprendizaje automático al área de redes informáticas (por ejemplo, diseño de mecanismos de enrutamiento, resiliencia y gestión dinámica de recursos) y al área de redes de agua (por ejemplo, diseño de redes de distribución de agua y colocación de sensores en redes de aguas residuales) ",
        descriptionCAT:"Dr. Eusebi Carrer Ortega té experiència en el disseny i l'anàlisi de disponibilitat, robustesa i esquemes d'encaminament en diferents tipus de xarxes, incloses les xarxes de distribució d'aigua. A ReUseMP3 treballarà principalment a WP6.",
        link: ""
    },
  /*  {
        id : 5,
        nameEN : "Dr. Diana Alvarez",
        nameES : "Dra. Diana Alvarez",
        briefEN: "SCT-UEM-LC responsible, ICRA",
        briefES:"Responsable de SCT-UEM-LC, ICRA",
        briefCAT:"Responsable de SCT-UEM-LC, ICRA",
        descriptionEN:"Dr. Diana Alvarez is responsible of ICRA SCT-UEM-LC. She is expert on the development and application of analytical methodologies for the identification and quantification of emerging pollutants and biomarkers in environmental samples. In ReUseMP3 she will be working mainly in WP3.",
        descriptionES:"Dra. Diana Álvarez es responsable del SCT-UEM-LC del ICRA. Es experta en el desarrollo y aplicación de metodologías analíticas para la identificación y cuantificación de contaminantes emergentes y biomarcadores en muestras ambientales. En ReUseMP3 trabajará principalmente en WP3.",
        descriptionCAT:"Dra. Diana Álvarez és responsable del SCT-UEM-LC de l'ICRA. És experta en el desenvolupament i l'aplicació de metodologies analítiques per a la identificació i quantificació de contaminants emergents i biomarcadors en mostres ambientals. A ReUseMP3 treballarà principalment a WP3.",
        link: "https://www.scopus.com/authid/detail.uri?authorId=6503937806"
    },
    {
        id : 6,
        nameEN : "Verònica Rocasalva",
        nameES : "Verònica Rocasalva",
        briefEN: "Technical Support Personnel, ICRA",
        briefES:"Personal de soporte técnico, ICRA",
        briefCAT:"Personal de suport tècnic, ICRA",
        descriptionEN:"Verònica Rocasalva is technical support personnel at ICRA. She is a higher degree chemistry laboratory technician with a wide experience in developing laboratory, quality, and research tasks. In ReUseMP3 she will be working mainly in WP1 and WP2.",
        descriptionES:"Verónica Rocasalva es personal de soporte técnico en ICRA. Es técnico superior de laboratorio de química con amplia experiencia en el desarrollo de tareas de laboratorio, calidad e investigación. En ReUseMP3 trabajará principalmente en WP1 y WP2.",
        descriptionCAT:"Verònica Rocasalva és personal de suport tècnic a ICRA. És tècnic superior de laboratori de química amb àmplia experiència en el desenvolupament de tasques de laboratori, qualitat i investigació. A ReUseMP3 treballarà principalment a WP1 i WP2.",
        link: ""
    },
    {
        id : 7,
        nameEN : "Esther Mendoza",
        nameES : "Esther Mendoza",
        briefEN: "PhD student, ICRA",
        briefES:"Estudiante de doctorado, ICRA",
        briefCAT:"Estudiant de doctorat, ICRA",
        descriptionEN:"Esther Mendoza is MSc in Environmental Sciences, and she is working in her PhD on circular economy to facilitate water reuse in touristic cities. She has expertise on treatment technologies, including forward and hydroponic technologies. In ReUseMP3 she will be working mainly in WP1 and WP2.",
        descriptionES:"Esther Mendoza es máster en Ciencias Ambientales y está trabajando en su doctorado en economía circular para facilitar la reutilización del agua en ciudades turísticas. Tiene experiencia en tecnologías de tratamiento, incluidas tecnologías hidropónicas y de avance.En ReUseMP3 trabajará principalmente en WP1 y WP2.",
        descriptionCAT:"Esther Mendoza és màster en Ciències Ambientals i està treballant al seu doctorat en economia circular per facilitar la reutilització de l'aigua a ciutats turístiques. Té experiència en tecnologies de tractament, incloses tecnologies hidropòniques i avançades. A ReUseMP3 treballarà principalment a WP1 i WP2.",
        link: "https://www.scopus.com/authid/detail.uri?authorId=57214114107"
    },
    {
        id : 8,
        nameEN : "Marc Castaño",
        nameES : "Marc Castaño",
        briefEN: "PhD student, ICRA",
        briefES:"Estudiante de doctorado, ICRA",
        briefCAT:"Estudiant de doctorat, ICRA",
        descriptionEN:"Marc Castaño is MSc in Chromatography, and he is working in his PhD on tracking micropollutants in water loops. He has expertise on the identification and quantification of emerging pollutants in environmental samples. In ReUseMP3 he will be working mainly in WP3, WP4, and WP5.",
        descriptionES:"Marc Castaño tiene un máster en cromatografía y está trabajando en su doctorado en el seguimiento de microcontaminantes en ciclos de agua regenerada y reutilizada. Tiene experiencia en la identificación y cuantificación de contaminantes emergentes en muestras ambientales. En ReUseMP3 trabajará principalmente en WP3, WP4 y WP5.",
        descriptionCAT:"Marc Castaño té un màster en cromatografia i està treballant en el doctorat en el seguiment de microcontaminants en cicles d'aigua regenerada i reutilitzada. Té experiència en la identificació i la quantificació de contaminants emergents en mostres ambientals. A ReUseMP3 treballarà principalment a WP3, WP4 i WP5.",
        link: "https://www.scopus.com/authid/detail.uri?authorId=57210104126"
    },
    {
        id : 9,
        nameEN : "Dr. Gaetan Blandin",
        nameES : "Dr. Gaetan Blandin",
        briefEN: "Postdoctoral Researcher, UdG",
        briefES:"Investigador de postgrado, UdG",
        briefCAT:"Investigador de postgrau, UdG",
        descriptionEN:"Dr. Gaetan Blandin focuses on water processes associated with membrane technologies, in particular forward osmosis technology, within the context of circular economy. Currently at Lequia working of FORWARD Factory project (La Caixa Junior leader fellow). In ReUseMP3 he will be working mainly in WP1.",
        descriptionES:"Dr. Gaétan Blandin se centra en los procesos del agua asociados con tecnologías de membrana, en particular con tecnologías de ósmosis directa, en el contexto de la economía circular. Actualmente en Lequia trabajando en el proyecto FORWARD Factory (becario líder de La Caixa Junior). En ReUseMP3 estará trabajando principalmente en WP1.",
        descriptionCAT:"Dr. Gaétan Blandin se centra en els processos de l'aigua associats amb tecnologies de membrana, en particular amb tecnologies d'osmosi directa, en el context de l'economia circular. Actualment a Lequia treballant al projecte FORWARD Factory (becari líder de La Caixa Junior). A ReUseMP3 estarà treballant principalment a WP1.",
        link: "https://www.scopus.com/authid/detail.uri?authorId=56625035000"
    },
    */
]

const advisoryBoard=[
    //name, locationEN,locationES,locationCAT, briefEN,briefES,briefCAT, link
    /*{
        name : "Evina Katsou",
        locationEN:"Brunel University (UK)",
        locationES:"Universidad de Brunel (Reino Unido)",
        locationCAT:"Universitat de Brunel (Regne Unit)",
        briefEN:"Risk assessment, decision support systems and micropollutants",
        briefES:"Evaluación de riesgos, sistemas de apoyo a la decisión y microcontaminantes",
        briefCAT:"Avaluació de riscos, sistemes de suport a la decisió i microcontaminants",
        link:"https://www.scopus.com/authid/detail.uri?authorId=26040737500"
    },
    {
        name : "Monica Brienza",
        locationEN:"Basilicata University (Italy)",
        locationES:"Universidad Basilicata (Italia)",
        locationCAT:"Universitat Basilicata (Itàlia)",
        briefEN:"Water reuse and micropollutants",
        briefES:"Reutilización de agua y microcontaminantes",
        briefCAT:"Reutilització de l'aigua i microcontaminants",
        link:"https://www.scopus.com/authid/detail.uri?authorId=56367434500"
    },
    {
        name : "Natasa Atanasova",
        locationEN:"Ljubljana University (Slovenia)",
        locationES:"Universidad de Ljubljana (Eslovenia)",
        locationCAT:"Universitat de Ljubljana (Eslovènia)",
        briefEN:"Co-chair of the Circular City COST, NBS and decision support systems",
        briefES:"Copresidenta de Circular City COST, NBS y sistemas de apoyo a la toma de decisiones",
        briefCAT:"Copresidenta de Circular City COST, NBS i sistemes de suport a la decisió",
        link:"https://www.scopus.com/authid/detail.uri?authorId=12763953800"
    },
    {
        name : "Pedro Carvalho",
        locationEN:"Aarhus University (Denmark)",
        locationES:"Universidad de Aarhus (Dinamarca)",
        locationCAT:"Universitat d'Aarhus (Dinamarca)",
        briefEN:"NBS and micropollutants",
        briefES:"NBS y microcontaminantes",
        briefCAT:"NBS i microcontaminants",
        link:"https://www.scopus.com/authid/detail.uri?authorId=22978130100"
    },*/
   /* {
        name : "Xavier Amores",
        locationEN:"(Girona, Spain)",
        locationES:"(Girona, España)",
        locationCAT:"(Girona, Espanya)",
        briefEN:"Cluster Manager of the Catalan Water Partnership",
        briefES:"Cluster Manager del Catalan Water Partnership",
        briefCAT:"Cluster Manager del Catalan Water Partnership",
        link:"http://www.cwp.cat/en/"
    },*/
]

const publications=[
    //name, briefEN,briefES,briefCAT, link
 /*   {
        name:"Nature-based solutions coupled with advanced technologies: An opportunity for decentralized water reuse in cities",
        briefEN:"Decentralized water reuse in cities is a prominent alternative to mainstream top-down models for urban water treatment. In this sense, Nature-based Solutions (“green” technologies) coupled with advanced technologies (“grey” technologies) constitute a promising approach for fomenting onsite water treatment and reuse in cities, while also providing multiple co-benefits. This article puts forward a conceptual advancement by providing a better understanding of coupled “green-grey”/“grey-green” technologies (CGGT).",
        briefES:"La reutilización descentralizada del agua en las ciudades es una alternativa destacada a los modelos dominantes de arriba hacia abajo para el tratamiento del agua urbana. En este sentido, las soluciones basadas en la naturaleza (tecnologías “verdes”) junto con tecnologías avanzadas (tecnologías “grises”) constituyen un enfoque prometedor para fomentar el tratamiento y la reutilización de agua en el sitio en las ciudades, al mismo tiempo que brindan múltiples co-beneficios. Este artículo presenta un avance conceptual al proporcionar una mejor comprensión de las tecnologías acopladas “verde-gris”/“gris-verde” (CGGT).",
        briefCAT:"La reutilització descentralitzada de l'aigua a les ciutats és una alternativa destacada als models dominants de dalt a baix per al tractament de l'aigua urbana. En aquest sentit, les solucions basades en la natura (tecnologies “verdes”) juntament amb les tecnologies avançades (tecnologies “grises”) constitueixen un enfocament prometedor per fomentar el tractament i la reutilització de l'aigua in situ a les ciutats, alhora que ofereixen múltiples co-beneficis. Aquest article proposa un avenç conceptual proporcionant una millor comprensió de les tecnologies acoblades “verd-gris”/“gris-verd” (CGGT).",
        link:"https://www.sciencedirect.com/science/article/pii/S0959652622003006?via%3Dihub",
    },*/
]

const conferences=[
    //name, briefEN,briefES,briefCAT, link
]


const jobOffers=[
    //name, briefEN,briefES,briefCAT, link
]

const news=[
    //name,briefEN,briefES,briefCAT,link
   /* {
        name:"ICRA newsletter September 2021",
        briefEN:"",
        briefES:"",
        briefCAT:"",
        link:"https://mailchi.mp/a1811b7d3d04/icra-news-setembre-2021?e=b546b9fa1f"
    },
    {
        name:"RETEMA",
        briefEN:"Nature-based solutions for the transition to circular cities",
        briefES:"Soluciones basadas en la naturaleza para la transición a ciudades circulares",
        briefCAT:"Solucions basades en la natura per a la transició a ciutats circulars",
        link:"https://www.retema.es/noticia/soluciones-basadas-en-la-naturaleza-para-la-transicion-hacia-ciudades-circulares-R2cY"
    }*/
]

const agenda=[
    //name,briefEN,briefES,briefCAT,link
    /* {
         name:"ICRA newsletter September 2021",
         briefEN:"",
         briefES:"",
         briefCAT:"",
         link:"https://mailchi.mp/a1811b7d3d04/icra-news-setembre-2021?e=b546b9fa1f"
     },
     {
         name:"RETEMA",
         briefEN:"Nature-based solutions for the transition to circular cities",
         briefES:"Soluciones basadas en la naturaleza para la transición a ciudades circulares",
         briefCAT:"Solucions basades en la natura per a la transició a ciutats circulars",
         link:"https://www.retema.es/noticia/soluciones-basadas-en-la-naturaleza-para-la-transicion-hacia-ciudades-circulares-R2cY"
     }*/
]

const relatedProjects=[
    //id,name,briefEN,briefES,briefCAT,links,boolImage
  /*  {
        id:1,
        name:"HYDROUSA",
        briefEN:"Demonstration of water loops with innovative regenerative business models for the Mediterranean region",
        briefES:"Demostración de circuitos de agua con modelos de negocio regenerativos innovadores para la región mediterránea",
        briefCAT:"Demostració de bucles d'aigua amb models de negoci regeneratius innovadors per a la regió mediterrània",
        links:["https://www.hydrousa.org/","https://www.icra.cat/projects/demonstration-water-loops-with-innovative/122"],
        boolImage:true,
    },
    /*{
        id:2,
        name:"MULTISOURCE",
        briefEN:"Modular tools for integrating enhanced natural treatment solutions into urban water cycles",
        briefES:"Herramientas modulares para integrar soluciones de tratamiento natural en los ciclos de agua urbanos",
        briefCAT:"Eines modulars per integrar solucions de tractament natural als cicles d'aigua urbans",
        links:["https://multisource.eu/","https://www.icra.cat/projects/multisource-modular-tools-integrating-enhanced/181"],
        boolImage:true,
    },
    {
        id:3,
        name:"LIFE-RECYCLO",
        briefEN:"Recycling waste water from small and mèdium sized laundries with advances oxidation process",
        briefES:"Reciclaje de aguas residuales de pequeñas y medianas lavanderías con procesos de oxidación avanzados",
        briefCAT:"Reciclatge d'aigües residuals de bugaderies petites i mitjanes amb avançats processos d'oxidació",
        links:["http://treewater.fr/fr/recyclo","https://www.icra.cat/projectes/life-recyclo-recycling-waste-water/202"],
        boolImage:true,
    },
    {
        id:4,
        name:"SAFE",
        briefEN:"Sustainable water reuse practices improving safety in agriculture, food and environment",
        briefES:"Prácticas sostenibles de reutilización del agua que mejoran la seguridad en la agricultura, la alimentación y el medio ambiente",
        briefCAT:"Pràctiques sostenibles de reutilització de l'aigua que milloren la seguretat a l'agricultura, l'alimentació i el medi ambient",
        links:[],
        boolImage:false,
    }*/

]