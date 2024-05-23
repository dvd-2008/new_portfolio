import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter,MessageCirclePlus, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "http://tiktok.com/@davidh201907",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "www.linkedin.com/in/dhuaman2008",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "http://Instagram.com/david_h_2008",
    },
    {
        id: 4,
        logo: <MessageCirclePlus size={30} strokeWidth={1} />,
        src: "http://Wa.me/51970429472",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Especialista en Computación en la Nube",
        subtitle: "Buho S.A.C",
        description: "Realicé el mantenimiento de una Máquina Virtual (Ubuntu) alojada en Google Cloud Platform, administrando todos los aspectos a través de la línea de comandos e integrando la VM con Cloudflare para optimizar la entrega de contenido y mejorar la seguridad.",
        date: "Ene 2024 ",
    },
    {
        id: 2,
        title: "Desarrollador Frontend",
        subtitle: "CIBERTEC",
        description: "Realicé una página web que muestra un carrito de compras usando React y un buscador de frutas usando Angular.",
        date: "Jun 2023 ",
    },
    {
        id: 3,
        title: "Mantenimiento de Página Web",
        subtitle: "SENATI",
        description: "Realicé el mantenimiento de una página web usando un CRUD con PHP y MySQL a través de PDO.",
        date: "Abr 2022 ",
    },
    {
        id: 4,
        title: "Creación de Interfaz Gráfica",
        subtitle: "SENATI",
        description: "Desarrollé una interfaz gráfica utilizando JFrame y programación orientada a objetos en Java, relacionándola con MySQL (phpMyAdmin).",
        date: "Feb 2023 ",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 5,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 25,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 1,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop  />,
        title: "Computación en la Nube",
        description: "Gestión de máquinas virtuales en Google Cloud y Azure, integradas con Cloudflare para optimización y seguridad.",
    },
    {
        icon: <Pencil  />,
        title: "Desarrollo Web",
        description: "Diseño y desarrollo de sitios web a medida utilizando tecnologías como PHP, Laravel, MySQL, React.js, y ASP.NET MVC.",
    },
    {
        icon: <Computer  />,
        title: "Bases de Datos",
        description: "Manejo y mantenimiento de bases de datos con MySQL, incluyendo la implementación de CRUD a través de PDO en PHP.",
    },
    {
        icon: <Book  />,
        title: "Desarrollo de Aplicaciones",
        description: "Creación de aplicaciones de escritorio y web con Java, Java Servlet y .NET C#.",
  },
    {
        icon: <Rocket  />,
        title: "Herramientas de Desarrollo",
        description: "Uso de Visual Studio, PyCharm, NetBeans y Eclipse para mejorar la eficiencia del desarrollo.",
  },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web MVC",
        image: "/image-1.png",
        urlGithub: "https://github.com/dvd-2008/SISTEMA_NUEVO",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "CRUD PDO MVC",
        image: "/image-2.png",
        urlGithub: "https://github.com/dvd-2008/banco_senati",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Proyectos React",
        image: "/image-3.png",
        urlGithub: "https://github.com/dvd-2008/ejercicios_react",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Proyectos Angular ",
        image: "/image-4.png",
        urlGithub: "https://github.com/dvd-2008/examen_angular",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Proyectos Java JFrame",
        image: "/image-5.png",
        urlGithub: "https://github.com/dvd-2008/Sistema_Colegio",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Proyecto Java Web",
        image: "/image-6.png",
        urlGithub: "https://github.com/dvd-2008/crud_eclipse/blob/main/README.md",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Proyecto Python ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "Proyectos ASP.NET WEB MVC",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];