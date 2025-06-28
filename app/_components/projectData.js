
import abroadInquiry1 from "../../public/assets/project/abroadInquiry/abroadInquiry1.webp"
import abroadInquiry2 from "../../public/assets/project/abroadInquiry/abroadInquiry2.webp"
import abroadInquiry3 from "../../public/assets/project/abroadInquiry/abroadInquiry3.webp"
import abroadInquiry4 from "../../public/assets/project/abroadInquiry/abroadInquiry4.webp"
import abroadInquiry5 from "../../public/assets/project/abroadInquiry/abroadInquiry5.webp"
import abroadInquiry6 from "../../public/assets/project/abroadInquiry/abroadInquiry6.webp"

import dayfuna1 from "../../public/assets/project/dayfuna/dayfuna1.webp"
import dayfuna2 from "../../public/assets/project/dayfuna/dayfuna2.webp"
import dayfuna3 from "../../public/assets/project/dayfuna/dayfuna3.webp"
import dayfuna4 from "../../public/assets/project/dayfuna/dayfuna4.webp"

import repair1 from "../../public/assets/project/repair/repair1.webp";
import repair2 from "../../public/assets/project/repair/repair2.webp";
import repair3 from "../../public/assets/project/repair/repair3.webp";

import onlineShop1 from "../../public/assets/project/onlineShop/online1.webp";
import onlineShop2 from "../../public/assets/project/onlineShop/online2.webp";
import onlineShop3 from "../../public/assets/project/onlineShop/online3.webp";

import vetSheba1 from "../../public/assets/project/vetSheba/vet1.webp";
import vetSheba2 from "../../public/assets/project/vetSheba/vet2.webp";
import vetSheba3 from "../../public/assets/project/vetSheba/vet3.png";

import ecomerce1 from "../../public/assets/project/ecommerce/ecom1.webp";
import ecomerce2 from "../../public/assets/project/ecommerce/ecom2.webp";

import chat1 from "../../public/assets/project/chat/chat1.webp";
import chat2 from "../../public/assets/project/chat/chat2.webp";

import coffee1 from "../../public/assets/project/coffe/cof1.webp";
import coffee2 from "../../public/assets/project/coffe/cof2.webp";
import coffee3 from "../../public/assets/project/coffe/cof3.webp";


import aiApp1 from "../../public/assets/mobileApp/abroadInquiry/aiApp1.png";
import aiApp2 from "../../public/assets/mobileApp/abroadInquiry/aiApp2.png";
import aiApp3 from "../../public/assets/mobileApp/abroadInquiry/aiApp3.png";

import dayfunaApp1 from "../../public/assets/mobileApp/dayfuna/dayfuna1.png";
import dayfunaApp2 from "../../public/assets/mobileApp/dayfuna/dayfuna2.png";
import dayfunaApp3 from "../../public/assets/mobileApp/dayfuna/dayfuna3.png";

export const allProjectData = [
    {
        id: 1,
        name: "Abroad Inquiry",
        description: "Abroad Inquiry is an educational consultancy platform built with Next.js, Node.js, Express.js, and MySQL. It leverages Redux for state management and Socket.IO for real-time messaging between students and consultants.",
        liveLink: "https://www.abroadinquiry.com/",
        githubLink: null,
        languages: [
            {
                id: 1,
                name: "Next.js",
                icon: "teenyicons:nextjs-outline"
            },
            {
                id: 2,
                name: "Material UI",
                icon: "logos:material-ui"
            },
            {
                id: 3,
                name: "Redux",
                icon: "logos:redux"
            },
            {
                id: 4,
                name: "Node.js",
                icon: "skill-icons:nodejs-light"
            },

            {
                id: 5,
                name: "Express.js",
                icon: "skill-icons:expressjs-light"
            },

            {
                id: 6,
                name: "Socket.IO",
                icon: "logos:socket-io"
            },

            {
                id: 7,
                name: "MySQL",
                icon: "tabler:brand-mysql"
            },
            {
                id: 8,
                name: "Firebase",
                icon: "logos:firebase"
            },

        ],
        images: [abroadInquiry1, abroadInquiry2, abroadInquiry3, abroadInquiry4, abroadInquiry5, abroadInquiry6]
    },

    {
        id: 2,
        name: "Dayfuna - Hotel Booking",
        description: `Dayfuna is a smart digital platform for booking hotels,
                  apartments, and houses, with integrated visa services. Built
                  with Next.js and Redux, it delivers a seamless experience
                  across devices for travelers and students worldwide.`,
        liveLink: "https://www.dayfuna.com/",
        githubLink: "https://github.com/unusali1/tour-and-travel",
        languages: [
            {
                id: 1,
                name: "React.js",
                icon: "flowbite:react-solid"
            },
            {
                id: 2,
                name: "Shadcn",
                icon: "simple-icons:shadcnui"
            },
            {
                id: 3,
                name: "Tailwind CSS",
                icon: "devicon:tailwindcss"
            },
            {
                id: 4,
                name: "Redux",
                icon: "logos:redux"
            },
            {
                id: 5,
                name: "Node.js",
                icon: "skill-icons:nodejs-light"
            },

            {
                id: 6,
                name: "Express.js",
                icon: "skill-icons:expressjs-light"
            },

            {
                id: 7,
                name: "MongoDB",
                icon: "simple-icons:mongodb"
            },
            {
                id: 8,
                name: "Firebase",
                icon: "logos:firebase"
            },

        ],
        images: [dayfuna1, dayfuna2, dayfuna3, dayfuna4]
    },

    {
        id: 3,
        name: "A to Z Parts Repair Service",
        description: `This is a responsive MERN-Stack web application designed for complete parts repair services. Users can authenticate via Google, explore available services, manage orders, and leave feedback seamlessly.`,
        liveLink: "https://a-to-z-repair-system.netlify.app/",
        githubLink: "https://github.com/unusali1/A-to-Z-Repair-System",
        languages: [
            {
                id: 1,
                name: "React.js",
                icon: "flowbite:react-solid"
            },
            {
                id: 2,
                name: "Node.js",
                icon: "skill-icons:nodejs-light"
            },

            {
                id: 3,
                name: "Express.js",
                icon: "skill-icons:expressjs-light"
            },

            {
                id: 4,
                name: "MongoDB",
                icon: "simple-icons:mongodb"
            },
            {
                id: 5,
                name: "Firebase",
                icon: "logos:firebase"
            },

        ],
        images: [repair1, repair2, repair3]
    },

    {
        id: 4,
        name: "Online Shop Ecommerce",
        description: `A product ordering react application where users can order products from the features of products , can add their desired product to cart, can see total number of product & price in checkout. To do all these, users have to sign in ﬁrst via email.`,
        liveLink: "https://online-shop-mernstack.netlify.app/",
        githubLink: "https://github.com/unusali1/onlie-shop-ecommerce",
        languages: [
            {
                id: 1,
                name: "React.js",
                icon: "flowbite:react-solid"
            },
            {
                id: 2,
                name: "Material UI",
                icon: "logos:material-ui"
            },
            {
                id: 3,
                name: "Redux",
                icon: "logos:redux"
            },
            {
                id: 4,
                name: "Node.js",
                icon: "skill-icons:nodejs-light"
            },

            {
                id: 5,
                name: "Express.js",
                icon: "skill-icons:expressjs-light"
            },

            {
                id: 6,
                name: "MongoDB",
                icon: "simple-icons:mongodb"
            },

        ],
        images: [onlineShop1, onlineShop2, onlineShop3]
    },

    {
        id: 5,
        name: "Vet Sheba",
        description: `A product/medicine ordering react application where users can order products/medicines from the features of products/medicines, can add their desired product/medicine to cart, can see total number of product/medicine & price in checkout. User can also get appointment vetanry doctor.`,
        liveLink: null,
        githubLink: "https://github.com/unusali1/Online-Vatenary-and-Food-Odering-System",
        languages: [
            {
                id: 1,
                name: "React.js",
                icon: "flowbite:react-solid"
            },
            {
                id: 2,
                name: "Material UI",
                icon: "logos:material-ui"
            },
            {
                id: 3,
                name: "Redux",
                icon: "logos:redux"
            },
            {
                id: 4,
                name: "Node.js",
                icon: "skill-icons:nodejs-light"
            },

            {
                id: 5,
                name: "Express.js",
                icon: "skill-icons:expressjs-light"
            },

            {
                id: 6,
                name: "MongoDB",
                icon: "simple-icons:mongodb"
            },
            {
                id: 7,
                name: "Firebase",
                icon: "logos:firebase"
            },

        ],
        images: [vetSheba1, vetSheba2, vetSheba3]
    },

    {
        id: 6,
        name: "Ecommerce",
        description: `A product ordering react application where users can order products from the features of products , can add their desired product to cart, can see total number of product & price in checkout. To do all these, users have to sign in ﬁrst via email.`,
        liveLink: "https://mern-ecommerce-shopstore.herokuapp.com/",
        githubLink: "https://github.com/unusali1/MERN-Ecommerce-Store",
        languages: [
            {
                id: 1,
                name: "React.js",
                icon: "flowbite:react-solid"
            },
            {
                id: 2,
                name: "Material UI",
                icon: "logos:material-ui"
            },
            {
                id: 3,
                name: "Redux",
                icon: "logos:redux"
            },
            {
                id: 4,
                name: "Node.js",
                icon: "skill-icons:nodejs-light"
            },

            {
                id: 5,
                name: "Express.js",
                icon: "skill-icons:expressjs-light"
            },

            {
                id: 6,
                name: "MongoDB",
                icon: "simple-icons:mongodb"
            },
            {
                id: 7,
                name: "Firebase",
                icon: "logos:firebase"
            },

        ],
        images: [ecomerce1, ecomerce2]
    },


    {
        id: 7,
        name: "Chat Application",
        description: ` Realtime chat react application where users can chat others users.To do all these, users have to sign in ﬁrst via email`,
        liveLink: "https://chat-application-mern.netlify.app/",
        githubLink: "https://github.com/unusali1/mern-chat-app-frontend",
        languages: [
            {
                id: 1,
                name: "React.js",
                icon: "flowbite:react-solid"
            },
            {
                id: 2,
                name: "Socket.IO",
                icon: "logos:socket-io"
            },
            {
                id: 3,
                name: "Node.js",
                icon: "skill-icons:nodejs-light"
            },

            {
                id: 4,
                name: "Express.js",
                icon: "skill-icons:expressjs-light"
            },

            {
                id: 5,
                name: "MongoDB",
                icon: "simple-icons:mongodb"
            },
            {
                id: 6,
                name: "Firebase",
                icon: "logos:firebase"
            },

        ],
        images: [chat1, chat2]
    },


    {
        id: 8,
        name: "Coffee Shop",
        description: `A Coffee ordering react application where users can order Coffee from the Coffee Shop menu, can add their desired Coffee to cart, can see total number of Coffee & price in checkout.`,
        liveLink: "https://unusali1.github.io/Coffee-Shop/",
        githubLink: "https://github.com/unusali1/Coffee-Shop",
        languages: [
            {
                id: 1,
                name: "HTML",
                icon: "logos:html-5"
            },
            {
                id: 2,
                name: "CSS",
                icon: "flowbite:css-solid"
            },
            {
                id: 3,
                name: "BootStrap",
                icon: "skill-icons:bootstrap"
            },
            {
                id: 4,
                name: "JavaScript",
                icon: "tabler:brand-javascript"
            },
        ],
        images: [coffee1, coffee2, coffee3]
    },

] 

export const homeProjectData = [
    {
        id: 1,
        name: "Abroad Inquiry",
        description: "Abroad Inquiry is an educational consultancy platform built with Next.js, Node.js, Express.js, and MySQL. It leverages Redux for state management and Socket.IO for real-time messaging between students and consultants.",
        liveLink: "https://www.abroadinquiry.com/",
        githubLink: null,
        languages: [
            {
                id: 1,
                name: "Next.js",
                icon: "teenyicons:nextjs-outline"
            },
            {
                id: 2,
                name: "Material UI",
                icon: "logos:material-ui"
            },
            {
                id: 3,
                name: "Redux",
                icon: "logos:redux"
            },
            {
                id: 4,
                name: "Node.js",
                icon: "skill-icons:nodejs-light"
            },

            {
                id: 5,
                name: "Express.js",
                icon: "skill-icons:expressjs-light"
            },

            {
                id: 6,
                name: "Socket.IO",
                icon: "logos:socket-io"
            },

            {
                id: 7,
                name: "MySQL",
                icon: "tabler:brand-mysql"
            },
            {
                id: 8,
                name: "Firebase",
                icon: "logos:firebase"
            },

        ],
        images: [abroadInquiry1, abroadInquiry2, abroadInquiry3, abroadInquiry4, abroadInquiry5, abroadInquiry6]
    },

    {
        id: 2,
        name: "Dayfuna - Hotel Booking",
        description: `Dayfuna is a smart digital platform for booking hotels,
                  apartments, and houses, with integrated visa services. Built
                  with Next.js and Redux, it delivers a seamless experience
                  across devices for travelers and students worldwide.`,
        liveLink: "https://www.dayfuna.com/",
        githubLink: "https://github.com/unusali1/tour-and-travel",
        languages: [
            {
                id: 1,
                name: "React.js",
                icon: "flowbite:react-solid"
            },
            {
                id: 2,
                name: "Shadcn",
                icon: "simple-icons:shadcnui"
            },
            {
                id: 3,
                name: "Tailwind CSS",
                icon: "devicon:tailwindcss"
            },
            {
                id: 4,
                name: "Redux",
                icon: "logos:redux"
            },
            {
                id: 5,
                name: "Node.js",
                icon: "skill-icons:nodejs-light"
            },

            {
                id: 6,
                name: "Express.js",
                icon: "skill-icons:expressjs-light"
            },

            {
                id: 7,
                name: "MongoDB",
                icon: "simple-icons:mongodb"
            },
            {
                id: 8,
                name: "Firebase",
                icon: "logos:firebase"
            },

        ],
        images: [dayfuna1, dayfuna2, dayfuna3, dayfuna4]
    },
] 


export const mobileAppData = [
    {
        id: 1,
        name: "Abroad Inquiry App",
        description: "Abroad Inquiry is an educational consultancy platform built with React Native, Node.js, Express.js, Socket.IO and MySQL. It leverages Redux for state management and Socket.IO for real-time messaging between students and consultants.",
        appleLink: "https://www.abroadinquiry.com/",
        googlePlay: null,
        githubLink: null,
        languages: [
            {
                id: 1,
                name: "React Native",
                icon: "devicon:reactnative-wordmark"
            },
            {
                id: 2,
                name: "React Native Paper",
                icon: "arcticons:papers"
            },
            {
                id: 3,
                name: "Redux",
                icon: "logos:redux"
            },
           
            {
                id: 6,
                name: "Socket.IO",
                icon: "logos:socket-io"
            },

            {
                id: 8,
                name: "Firebase",
                icon: "logos:firebase"
            },

        ],
        images: [aiApp1,aiApp2,aiApp3]
    },

    {
        id: 2,
        name: "Dayfuna App",
        description: `Dayfuna is a smart digital platform for booking hotels,
                  apartments, and houses, with integrated visa services. Built
                  with React Native and Redux, it delivers a seamless experience
                  across devices for travelers and students worldwide.`,
        appleLink: "https://www.abroadinquiry.com/",
        googlePlay: null,
        githubLink: null,
        languages: [
            {
                id: 1,
                name: "React Native",
                icon: "devicon:reactnative-wordmark"
            },
            {
                id: 2,
                name: "React Native Paper",
                icon: "arcticons:papers"
            },
            
            {
                id: 3,
                name: "Redux",
                icon: "logos:redux"
            },
            {
                id: 7,
                name: "Firebase",
                icon: "logos:firebase"
            },

        ],
        images: [dayfunaApp1,dayfunaApp2,dayfunaApp3]
    },
] 