import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {Link} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import ModalCarousel from './ModalCarousel'; // Assure-toi que le chemin est bon



// Configuration modifiable
const config = {
    // Personalisation
    logoLight: '/logo_light.png',
    logoDark: '/logo_dark.png',
    nomAgence: "Beyond 31 ",
    slogan: "Concrétisez vos idées en une semaine.",

    // Réseaux sociaux
    reseaux: {
        instagram: "https://instagram.com/beyond_31_",
        linkedin: "https://www.linkedin.com/company/beyond-agencyfr/?viewAsMember=true",
    },

    // Contact
    email: "contact@beyond31.fr",
    telephone: "+33 6 25 13 96 27",
    adresse: "Poitiers, France",

    // Services illustrés
    services: [
        {
            titre: "Identité visuelle",
            description: "Création d'une identité unique pour votre marque",
            illustration: "/illustrations/id_visu.jpg",
            motsCles: ["Logo", "Charte graphique", "Direction artistique"]
        },
        {
            titre: "Marketing publicitaire",
            description: "Développement de votre publicité pour renforcer l'identité de votre marque",
            illustration: "/illustrations/pub.jpg",
            motsCles: ["Publicité", "Stratégie", "Montage vidéo"]
        },
        {
            titre: "UI/UX Design",
            description: "Interfaces intuitives et expériences mémorables",
            illustration: "/illustrations/uxui.jpg",
            motsCles: ["Prototypage", "Expérience utilisateur", "Application mobile"]
        },
        {
            titre: "Développement web",
            description: "Solutions techniques sur-mesure, refonte et création de site web",
            illustration: "/illustrations/design_web.jpg",
            motsCles: ["React", "Html", "Css", "Javascript", "WordPress"]
        }
    ],

    // Réalisations récentes
    realisations: [
        {
            titre: "Clando Ga",
            description: "Identité visuelle & Application mobile pour une startup gabonaise",
            categories: ["Branding", "UI/UX", "Développement"],
            vignette: "/illustrations/clandoga.jpg",
            images: [
                "/images/clando1.jpg",
                "/images/clando2.jpg",
                "/images/clando3.gif"
            ]
        }
        ,
        {
            titre: "Beyond 31",
            description: "Identité visuelle pour notre site web ",
            categories: ["UI/UX", "web", "identité visuelle"],
            vignette: "/images/beyond3.png",
            images: [
                "/images/beyond1.jpg",
                "/images/beyond2.jpg",
                "/images/beyond3.png"
            ]
        },
        {
            titre: "Craph site web",
            description: "développement web pour une clinique gabonaise",
            categories: ["UI/UX", "web", "css", "html", "react" ],
            vignette: "/illustrations/craph_site.jpg",
            images: [
                "/images/craph1.png",
                "/images/craph2.png",
                "/images/craph3.png"
            ]
        }
    ]
};

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedRealisation, setSelectedRealisation] = useState(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animations basées sur le scroll
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.1], [0, -100]);

    return (
        <div
            className={`relative ${darkMode ? 'bg-[#0a0a0a] text-gray-100' : 'bg-[#faf9f5] text-[#1a1a1a]'}`}
            ref={containerRef}
        >

            {/* Header sticky */}
            <motion.header
                style={{ opacity, y }}
                className={`fixed w-full z-50 ${darkMode ? 'bg-[#0a0a0a]/80' : 'bg-[#faf9f5]/80'} backdrop-blur-md border-b ${darkMode ? 'border-[#1f1f1f]' : 'border-[#eaeaea]'}`}
            >
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="w-32 h-22 md:w-22 md:h-22">
                        <img
                            src={darkMode ? config.logoLight : config.logoDark}
                            alt={config.nomAgence}
                            className="w-full h-full"
                        />
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#accueil" className="nav-link">Accueil</a>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#realisations" className="nav-link">Réalisations</a>
                        <motion.a
                            href="/contact.html"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`ml-4 px-6 py-2 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
                        >
                            Devis gratuit
                        </motion.a>
                    </nav>

                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </motion.header>
            <motion.header
                style={{ opacity, y }}
                className={`fixed w-full z-50 ${darkMode ? 'bg-[#0a0a0a]/80' : 'bg-[#faf9f5]/80'} backdrop-blur-md border-b ${darkMode ? 'border-[#1f1f1f]' : 'border-[#eaeaea]'}`}
            >
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="w-32 h-22 md:w-22 md:h-22">
                        <img
                            src={darkMode ? config.logoLight : config.logoDark}
                            alt={config.nomAgence}
                            className="w-full h-full"
                        />
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#accueil" className="nav-link">Accueil</a>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#realisations" className="nav-link">Réalisations</a>
                        <a href="/contact.html" className="nav-link">Contact</a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`ml-4 px-6 py-2 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
                        >
                            Devis gratuit
                        </motion.a>
                    </nav>

                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </motion.header>

            {/* Contenu principal avec ancres */}
            <main className="relative z-10">
                {/* Section Accueil */}
                <section id="accueil" className="min-h-screen flex items-center relative bg-[#f5f0eb]" >
                    <section id="accueil" className="min-h-screen flex items-center relative">
                        {/* Nouveau - Icônes réseaux sociaux à droite */}
                        <div className=" move left-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-6">
                            {/* Icône LinkedIn */}
                            <motion.a
                                href={config.reseaux.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className={`p-3 rounded-full ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} transition-colors`}
                                aria-label="LinkedIn"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </motion.a>

                            {/* Icône Instagram */}
                            <motion.a
                                href={config.reseaux.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className={`p-3 rounded-full ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} transition-colors`}
                                aria-label="Instagram"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </motion.a>
                        </div>

                        {/* Le reste de votre section Accueil existante */}
                        <div className="container mx-auto px-6 py-32">
                        </div>
                    </section>
                    <div className="container mx-auto px-6 py-32">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
                                {config.nomAgence} —<br />
                                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {config.slogan}
                </span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-10 max-w-2xl">
                                Nous transformons les idées en expériences digitales exceptionnelles.
                            </p>
                            <div className="flex gap-4">
                                <motion.a
                                    href="#services"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`px-8 py-3 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
                                >
                                    Nos services
                                </motion.a>
                                <motion.a
                                    href="#realisations"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`px-8 py-3 rounded-full border ${darkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}
                                >
                                    Nos réalisations
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {/* Section À propos */}
                <section id="a-propos" className="py-24 bg-[#e9f5ec] relative overflow-hidden">
                    {/* Halo lumineux artistique */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#b2dfd4] rounded-full blur-[150px] opacity-30 -z-10"></div>

                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                        {/* Texte à gauche */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="md:w-1/2"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Une vision, <br /> une passion
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Beyond n’est pas née d’une idée. Elle est née d’un besoin : celui de créer du sens, du beau, du durable.
                               Un jeune étudiant qui souhaite mettre ses compétences au profit de petites et moyennes entreprises sans oublier les particuliers
                            </p>
                            <p className="italic text-md text-gray-500">
                                “Nous sommes aux petits soins avec nos clients, soyez satisfaits en moins de 31 jours..”
                            </p>
                        </motion.div>

                        {/* Cadre animé à droite */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="md:w-1/2 relative"
                        >
                            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
                                <img
                                    src="/logo_team.png"
                                    alt="Équipe Beyond"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                                <div className="absolute bottom-4 right-4 text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl text-sm z-20 shadow-lg">

                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Section Services */}
                <section id="services" className="py-20 bg-gradient-to-b from-transparent via-transparent to-transparent bg-[#f5f5f5]">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-medium mb-16">Nos expertises</h2>

                            <div className="grid md:grid-cols-2 gap-12">
                                {config.services.map((service, index) => (
                                    <ServiceCard
                                        key={index}
                                        service={service}
                                        darkMode={darkMode}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section Réalisations */}
                <section id="realisations" className="py-20 bg-[#fff3e6]">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-medium mb-16">Récentes réalisations</h2>

                            <div className="grid md:grid-cols-2 gap-12">
                                {config.realisations.map((realisation, index) => (
                                    <div key={index} onClick={() => setSelectedRealisation(realisation)} className="cursor-pointer">
                                        <ProjectCard
                                            projet={realisation}
                                            darkMode={darkMode}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 text-center">
                            </div>
                        </motion.div>
                    </div>
                </section>
                {/* Section Devis */}
                <section id="contact" className={`py-20 ${darkMode ? 'bg-[#131313]' : 'bg-[#f8f8f6]'}`}>
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-medium mb-8">Prêt à démarrer votre projet ?</h2>
                            <p className="text-xl mb-12 max-w-2xl mx-auto">
                                Obtenez un devis gratuit et personnalisé pour votre projet.
                            </p>
                            <motion.a
                                href="/Devis-gratuit.html"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`inline-block px-12 py-4 rounded-full text-lg ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
                            >
                                Devis gratuit
                            </motion.a>
                        </motion.div>
                    </div>
                </section>
            </main>
            <AnimatePresence>
                {selectedRealisation && (
                    <ModalCarousel
                        realisation={selectedRealisation}
                        onClose={() => setSelectedRealisation(null)}
                    />
                )}
            </AnimatePresence>


            {/* Footer */}
            <Footer darkMode={darkMode} config={config} />
        </div>
    );

}

// Composant ServiceCard
function ServiceCard({ service, darkMode, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`p-8 rounded-2xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'} shadow-lg`}
        >
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-4">{service.titre}</h3>
                    <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {service.motsCles.map((mot, i) => (
                            <span
                                key={i}
                                className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-[#0a0a0a] text-gray-300' : 'bg-gray-100 text-gray-800'}`}
                            >
                {mot}
              </span>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src={service.illustration}
                        alt={service.titre}
                        className="max-h-40 object-contain"
                    />
                </div>
            </div>
        </motion.div>
    );
}

// Composant ProjectCard
function ProjectCard({ projet, darkMode }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group"
        >
            <div className={`relative overflow-hidden rounded-2xl aspect-video ${darkMode ? 'bg-[#1a1a1a]' : 'bg-gray-200'}`}>
                <img
                    src={projet.vignette}
                    alt={projet.titre}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div>
                        <h3 className="text-2xl text-white font-medium">{projet.titre}</h3>
                        <p className="text-gray-300 mt-2">{projet.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {projet.categories.map((categorie, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-full bg-white/10 text-white text-xs"
                                >
                  {categorie}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Composant ThemeToggle
function ThemeToggle({ darkMode, setDarkMode }) {
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-all"
            aria-label="Toggle dark mode"
        >
            {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}
        </button>
    );

}

function Footer({ darkMode, config }) {
    return (
        <footer className={`py-10 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f5]'} border-t ${darkMode ? 'border-[#1f1f1f]' : 'border-[#eaeaea]'}`}>
            <div className="container mx-auto px-4">
                {/* Grille sur 3 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Logo à gauche */}
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src={darkMode ? config.logoLight : config.logoDark}
                            alt={config.nomAgence}
                            className="w-32 mb-2"
                        />
                    </div>

                    {/* Contact au centre */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider mb-3">Contact</h4>
                        <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <li>
                                <a href={`mailto:${config.email}`} className="hover:underline">{config.email}</a>
                            </li>
                            <li>
                                <a href={`tel:${config.telephone}`} className="hover:underline">{config.telephone}</a>
                            </li>
                            <li>{config.adresse}</li>
                        </ul>
                    </div>

                    {/* Légal à droite */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider mb-3">Légal</h4>
                        <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <li>
                                <a href="/mentions-legales.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Mentions légales
                                </a>
                            </li>
                            <li>
                                <a href="/politique-de-confidentialite.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Politique de confidentialité
                                </a>
                            </li>
                            <li>
                                <a href="/cgv.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Conditions générales
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className={`mt-8 pt-4 border-t text-center text-sm ${darkMode ? 'border-[#1f1f1f] text-gray-500' : 'border-[#eaeaea] text-gray-400'}`}>
                    © {new Date().getFullYear()} {config.nomAgence}. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}