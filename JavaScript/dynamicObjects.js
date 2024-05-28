const members = [
    //id, nameEN,nameES, briefEN,briefES,briefCAT, descriptionEN,descriptionES,descriptionCAT, link
    {
        id : 1,
        nameEN : "",
        nameES : "Ingeniería ambiental del agua",
        briefEN: "",
        briefES: "",
        briefCAT: "",
        descriptionEN:"",
        descriptionES:"",
        descriptionCAT:"",
        link: ""
    },
   {
        id : 2,
        nameEN : "",
        nameES : "Ciberseguridad",
        briefEN: "",
        briefES:"",
        briefCAT:"",
        descriptionEN:"",
        descriptionES:"",
        descriptionCAT:"",
        link: ""
    },
    {
        id : 3,
        nameEN : "",
        nameES : "Criminologia y derecho",
        briefEN: "",
        briefES:"",
        briefCAT:"",
        descriptionEN:"",
        descriptionES:"",
        descriptionCAT:"",
        link: ""
    }
]

const news =[
    //name,briefEN,briefES,briefCAT,link,data
   {
        name:"Formalización del convenio con INCIBE",
        briefEN:"",
        briefES: "<p style='text-align: justify'> Se ha formalizado el convenio de colaboración entre la Universitat de Girona (UdG) y la S.M.E. Instituto Nacional de Ciberseguroidad de España M.P., S.A.(INCIBE), para la promoción de cátedras de ciberseguridad en España, dentro del plan de recuperación, transformación y resiliencia, financiado por la Unión Europea – Next Generation EU. <br> <br> El Convenio, con un presupuesto total de 726.755 € y una cofinanciación de la UdG del 25%, tiene por objeto promocionar el desarrollo del conocimiento y capacidades de personas y organizaciones en el ámbito de la Digitalización y Ciberseguridad Hídrica a lo largo de los años 2024 y 2025. <p>",
        briefCAT:"",
        link:"", // If link does not exist, has to be set at "" (only correct option)
        data: new Date(2024,1,20), //Careful, second parameter that indicates month index has values between 0 to 11, meaning 0 is January.
    },
    {
        name:"Lanzamiento del Grupo de Trabajo especializado en el sector estratégico Aguas",
        briefEN:"",
        briefES: "<p style='text-align: justify'> El Instituto Nacional de Ciberseguridad (INCIBE) ha convocado a su sede\n" +
            "principal al director de la Cátedra INCIBE de Digitalización y Ciberseguridad\n" +
            "Hídrica de la UdG para formar parte de la reunión inicial de formación del grupo\n" +
            "de trabajo (ISAC) especializado en el sector Aguas. Al acto, que ha contado\n" +
            "\n" +
            "con la presencia del director general de INCIBE Félix A. Barrio, han asistido\n" +
            "representantes de la Asociación Española de Empresas Gestoras de los\n" +
            "Servicios de Agua Urbana (ASOAGA), de la Plataforma Tecnológica Española\n" +
            "del Agua (PTEA), y representantes de diversas entidades relacionades con la\n" +
            "compra pública innovadora del sector (Universidad de la Coruña, Universidad\n" +
            "de Extremadura, Emalcsa y Tecdesoft).<p>",
        briefCAT:"",
        link:"https://www.incibe.es/incibe/sala-de-prensa/incibe-ptea-y-aga-colaboran-para-elevar-el-nivel-de-ciberseguridad-en-el", // If link does not exist, has to be set at "" (only correct option)
        data: new Date(2024,4,10), //Careful, second parameter that indicates month index has values between 0 to 11, meaning 0 is January.
    },
    {
        name:"Presentación de la Cátedra en el Barcelona Cybersecurity Congress 2024",
        briefEN:"",
        briefES: "<p style='text-align: justify'> Los días 21 a 23 de Mayo se ha celebrado el Barcelona Cybersecurity\n" +
            "Congress 2024, un lugar de encuentro entre profesionales de la ciberseguridad\n" +
            "a nivel internacional, y organizado por la Agencia de Ciberseguridad de\n" +
            "Cataluña. En el marco de este evento, miembros del equipo de trabajo de la\n" +
            "Cátedra INCIBE de Digitalización y Ciberseguridad Hídrica de la UdG han\n" +
            "asistido al Hacking Village para realizar la primera presentación en sociedad de\n" +
            "la Càtedra. El Dr Steven Kemp, dedicado al ámbito de la criminología, ha\n" +
            "presentado los objetivos y las líneas de actuación de la Cátedra ante medio\n" +
            "centenar de profesionales de la ciberseguridad y la IoT. Asimismo, ha\n" +
            "destacado la magnitud económica del sector hídrico, su relevancia como\n" +
            "infraestructura crítica y los múltiples retos de ciberseguridad que aguardan al\n" +
            "sector.<p> <br> <img style='display: block;margin-left: auto;margin-right: auto; max-width: 30%; max-height: 30%' src=\"./images/noticia1_1.jpg\" alt=\"El Dr Steven Kemp presenta la Cátedra INCIBE de Digitalización y Ciberseguridad Hídrica de la UdG.\"> <br>",
        briefCAT:"",
        link:"https://www.barcelonacybersecuritycongress.com/", // If link does not exist, has to be set at "" (only correct option)
        data: new Date(2024,4,23), //Careful, second parameter that indicates month index has values between 0 to 11, meaning 0 is January.
    },
]

const agenda=[
    //name,briefEN,briefES,briefCAT,link,data
    {
        name:"Formalización del convenio con INCIBE",
        briefEN:"",
        briefES:"",
        briefCAT:"",
        link:"", // If link does not exist, has to be set at "" (only correct option)
        data: new Date(2024,1,20), //Careful, second parameter that indicates month index has values between 0 to 11, meaning 0 is January.
    },
    {
        name:"Lanzamiento del Grupo de Trabajo especializado en el sector estratégico Aguas",
        briefEN:"",
        briefES:"",
        briefCAT:"",
        link:"", // If link does not exist, has to be set at "" (only correct option)
        data: new Date(2024,4,10), //Careful, second parameter that indicates month index has values between 0 to 11, meaning 0 is January.
    },
    {
        name:"Presentación de la Cátedra en el Barcelona Cybersecurity Congress 2024",
        briefEN:"",
        briefES:"",
        briefCAT:"",
        link:"", // If link does not exist, has to be set at "" (only correct option)
        data: new Date(2024,4,23), //Careful, second parameter that indicates month index has values between 0 to 11, meaning 0 is January.
    },
    {
        name:"Primera reunión de seguimiento Cátedra INCIBE",
        briefEN:"",
        briefES:"",
        briefCAT:"",
        link:"", // If link does not exist, has to be set at "" (only correct option)
        data: new Date(2024,5,5), //Careful, second parameter that indicates month index has values between 0 to 11, meaning 0 is January.
    },
    {
        name:"Primer workshop interno con las entitades colaboradoras",
        briefEN:"",
        briefES:"",
        briefCAT:"",
        link:"", // If link does not exist, has to be set at "" (only correct option)
        data: new Date(2024,6,2), //Careful, second parameter that indicates month index has values between 0 to 11, meaning 0 is January.
    },
]
const links_images=[
    {
        link:"https://www.agbar.es/"
    },
    {
        link:"https://cwp.cat/es/incio/"
    },
    {
        link:"https://icra.cat/"
    },
    {
        link:"https://eurecat.org/es/"
    },
    {
        link:"https://ciberseguretat.gencat.cat/ca/agencia/que-fem/estic-cibersegur/"
    },
]