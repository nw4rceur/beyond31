import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

// Configuration modifiable
const config = {
    logoLight: '/logo_light.png',
    logoDark: '/logo_dark.png',
    nomAgence: "Beyond 31",
    slogan: "Concrétisez vos idées en une semaine.",
    reseaux: {
        instagram: "https://instagram.com/beyond_31_",
    },
    email: "contact@beyond31.fr",
    telephone: "+33 6 25 13 96 27",
    adresse: "Poitiers, France",
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
    realisations: [
        {
            titre: "Clando Ga",
            description: "Identité visuelle & Application mobile pour une startup gabonaise",
            categories: ["Branding", "UI/UX", "Développement"],
            vignette: "/illustrations/clandoga.jpg",
            images: ["/images/clando1.jpg","/images/clando2.jpg","/images/clando3.gif"]
        },
        {
            titre: "Beyond 31",
            description: "Identité visuelle pour notre site web",
            categories: ["UI/UX", "web", "identité visuelle"],
            vignette: "/images/beyond3.png",
            images: ["/images/beyond1.jpg","/images/beyond2.jpg","/images/beyond3.png"]
        },
        {
            titre: "Craph site web",
            description: "Développement web pour une clinique gabonaise",
            categories: ["web", "css", "html", "react"],
            vignette: "/illustrations/craph_site.jpg",
            images: ["/images/craph1.png","/images/craph2.png","/images/craph3.png"]
        },
        {
            titre: "SanamaRenov site web",
            description: "Développement web pour une entreprise de renovation",
            categories: ["web", "css", "html", "react"],
            vignette: "/images/sanama1.png",
            images: ["/images/sanama1.png","/images/sanama2.png","/images/sanama3.png","/images/sanama4.png","/images/sanama5.png","/images/sanama6.png","/images/sanama7.png"]
        }
    ]
};

// Modal Carousel Component
function ModalCarousel({ realisation, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((currentIndex + 1) % realisation.images.length);
    const prev = () => setCurrentIndex((currentIndex - 1 + realisation.images.length) % realisation.images.length);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-white text-4xl">&times;</button>
                <div className="relative">
                    <img src={realisation.images[currentIndex]} alt={realisation.titre} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
                    <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full">←</button>
                    <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full">→</button>
                </div>
                <div className="text-center mt-4 text-white">
                    <h3 className="text-2xl font-bold">{realisation.titre}</h3>
                    <p className="text-gray-300">{currentIndex + 1} / {realisation.images.length}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedRealisation, setSelectedRealisation] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("darkMode");
        if (savedTheme === "true") setDarkMode(true);
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.1], [0, -100]);

    return (
        <div className={`relative ${darkMode ? 'bg-[#0a0a0a] text-gray-100' : 'bg-[#faf9f5] text-[#1a1a1a]'}`} ref={containerRef}>
            {/* Header sticky */}
            <motion.header
                style={{ opacity, y }}
                className={`fixed w-full z-50 ${darkMode ? 'bg-[#0a0a0a]/80' : 'bg-[#faf9f5]/80'} backdrop-blur-md border-b ${darkMode ? 'border-[#1f1f1f]' : 'border-[#eaeaea]'}`}
            >
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="w-32 h-22 md:w-22 md:h-22">
                        <img src={darkMode ? config.logoLight : config.logoDark} alt={config.nomAgence} className="w-full h-full" />
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

                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-xl">☰</button>
                    </div>

                    {menuOpen && (
                        <div className={`absolute top-full left-0 w-full ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'} flex flex-col items-center gap-4 py-4`}>
                            <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
                            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                            <a href="#realisations" onClick={() => setMenuOpen(false)}>Réalisations</a>
                            <a href="/contact.html" onClick={() => setMenuOpen(false)}>Contact</a>
                        </div>
                    )}
                </div>
            </motion.header>

            {/* Section Accueil */}
            <main className="relative z-10">
                <section id="accueil" className="min-h-screen flex items-center relative">
                    <div className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-40">
                        <motion.a
                            href={config.reseaux.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className={`p-3 rounded-full ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} transition-colors inline-block`}
                            aria-label="Instagram"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            </svg>
                        </motion.a>
                    </div>

                    <div className="container mx-auto px-6 py-32">
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-4xl">
                            <h1 className="text-4xl md:text-7xl font-medium mb-6 leading-tight">
                                {config.nomAgence} —<br />
                                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {config.slogan}
                </span>
                            </h1>
                            <p className="text-lg md:text-2xl mb-10 max-w-2xl">
                                Nous transformons les idées en expériences digitales exceptionnelles.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a href="#services" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={`px-8 py-3 rounded-full text-center ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>Nos services</motion.a>
                                <motion.a href="#realisations" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={`px-8 py-3 rounded-full text-center border ${darkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}>Nos réalisations</motion.a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section À propos */}
                <section id="a-propos" className="py-24 bg-[#e9f5ec] relative overflow-hidden">
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#b2dfd4] rounded-full blur-[150px] opacity-30 -z-10"></div>
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Une vision, <br /> une passion
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Beyond n'est pas née d'une idée. Elle est née d'un besoin : celui de créer du sens, du beau, du durable. Un jeune étudiant qui souhaite mettre ses compétences au profit de petites et moyennes entreprises sans oublier les particuliers
                            </p>
                            <p className="italic text-md text-gray-500">
                                "Nous sommes aux petits soins avec nos clients, soyez satisfaits en moins de 31 jours.."
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="md:w-1/2 relative">
                            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
                                <img src="/logo_team.png" alt="Équipe Beyond" className="object-cover w-full h-full" />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section Services */}
                <section id="services" className="py-20 bg-[#f5f5f5]">
                    <div className="container mx-auto px-6">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
                            <h2 className="text-3xl md:text-5xl font-medium mb-16">Nos expertises</h2>
                            <div className="grid md:grid-cols-2 gap-12">
                                {config.services.map((service, index) => (
                                    <ServiceCard key={index} service={service} darkMode={darkMode} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section Réalisations */}
                <section id="realisations" className="py-20 bg-[#fff3e6]">
                    <div className="container mx-auto px-6">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
                            <h2 className="text-3xl md:text-5xl font-medium mb-16">Récentes réalisations</h2>
                            <div className="grid md:grid-cols-2 gap-12">
                                {config.realisations.map((realisation, index) => (
                                    <div key={index} onClick={() => setSelectedRealisation(realisation)} className="cursor-pointer">
                                        <ProjectCard projet={realisation} darkMode={darkMode} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section Devis */}
                <section id="contact" className={`py-20 ${darkMode ? 'bg-[#131313]' : 'bg-[#f8f8f6]'}`}>
                    <div className="container mx-auto px-6 text-center">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <h2 className="text-3xl md:text-5xl font-medium mb-8">Prêt à démarrer votre projet ?</h2>
                            <p className="text-xl mb-12 max-w-2xl mx-auto">
                                Obtenez un devis gratuit et personnalisé pour votre projet.
                            </p>
                            <motion.a href="/Devis-gratuit.html" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`inline-block px-12 py-4 rounded-full text-lg ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                                Devis gratuit
                            </motion.a>
                        </motion.div>
                    </div>
                </section>
            </main>

            <AnimatePresence>
                {selectedRealisation && (
                    <ModalCarousel realisation={selectedRealisation} onClose={() => setSelectedRealisation(null)} />
                )}
            </AnimatePresence>

            <Footer darkMode={darkMode} config={config} />
        </div>
    );
}

// --- Composants ---
function ServiceCard({ service, darkMode, index }) {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.1 }} className={`p-8 rounded-2xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'} shadow-lg`}>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-4">{service.titre}</h3>
                    <p className="text-gray-500">{service.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {service.motsCles.map((mot, i) => <li key={i} className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-white/10 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>{mot}</li>)}
                    </ul>
                </div>
                <div className="flex-1">
                    <img src={service.illustration} alt={service.titre} className="rounded-xl object-cover w-full h-64 md:h-48" />
                </div>
            </div>
        </motion.div>
    );
}

function ProjectCard({ projet, darkMode }) {
    return (
        <motion.div whileHover={{ scale: 1.03 }} className={`rounded-xl overflow-hidden shadow-lg cursor-pointer ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
            <img src={projet.vignette} alt={projet.titre} className="object-cover w-full h-64" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{projet.titre}</h3>
                <p className="text-gray-500 mb-2">{projet.description}</p>
                <div className="flex flex-wrap gap-2">
                    {projet.categories.map((cat, i) => <span key={i} className={`px-2 py-1 text-sm rounded-full ${darkMode ? 'bg-white/10 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>{cat}</span>)}
                </div>
            </div>
        </motion.div>
    );
}

function ThemeToggle({ darkMode, setDarkMode }) {
    return (
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 rounded-full border">
            {darkMode ? '🌞' : '🌙'}
        </button>
    );
}

function Footer({ darkMode, config }) {
    const logos = [
        '/logo1.png', '/logo2.png', '/logo3.png', '/logo4.png',
        '/logo5.png', '/logo6.png', '/logo7.png', '/logo8.png'
    ];

    return (
        <footer className={`py-12 ${darkMode ? 'bg-[#0a0a0a] text-gray-400' : 'bg-[#faf9f5] text-gray-800'}`}>
            {/* Logos défilants */}
            <div className="overflow-hidden mb-12">
                <motion.div
                    className="flex gap-12 whitespace-nowrap"
                    animate={{ x: [0, -1920] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <img key={i} src={logo} alt={`Logo ${i}`} className="h-12 md:h-16 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex justify-center mb-8 text-center">
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold mb-3">{config.nomAgence}</h4>
                        <p className="mb-1">{config.adresse}</p>
                        <p className="mb-1">{config.telephone}</p>
                        <p>{config.email}</p>
                    </div>
                </div>
                <div className="pt-6 border-t border-gray-300">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-red-500 opacity-50 text-sm">© 2025 Beyond 31. Tous droits réservés.</p>
                        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                            <a href="/politique-de-confidentialite.html" className="hover:underline text-red-500 opacity-50">Politique de confidentialité</a>
                            <a href="/mentions-legales.html" className="hover:underline text-red-500 opacity-50">Mentions légales</a>
                            <a href="/cgv.html" className="hover:underline text-red-500 opacity-50">Conditions légales</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}