import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Devis() {
    const [formData, setFormData] = useState({
        typeProjet: '',
        budget: '',
        delai: '',
        details: ''
    });

    const [estimation, setEstimation] = useState(null);

    const typesProjet = [
        { id: 'site-vitrine', label: 'Site vitrine' },
        { id: 'ecommerce', label: 'Site e-commerce' },
        { id: 'application', label: 'Application mobile' },
        { id: 'identite', label: 'Identité visuelle' },
        { id: 'autre', label: 'Autre' }
    ];

    const budgets = [
        { id: '1-3k', label: '1 000 - 3 000 €' },
        { id: '3-5k', label: '3 000 - 5 000 €' },
        { id: '5-10k', label: '5 000 - 10 000 €' },
        { id: '10k+', label: '10 000 € +' }
    ];

    const delais = [
        { id: '1-3mois', label: '1-3 mois' },
        { id: '3-6mois', label: '3-6 mois' },
        { id: '6mois+', label: '6 mois +' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation simple d'estimation
        const estimations = {
            'site-vitrine': { min: 1500, max: 5000 },
            'ecommerce': { min: 5000, max: 15000 },
            'application': { min: 10000, max: 30000 },
            'identite': { min: 2000, max: 8000 },
            'autre': { min: 1000, max: 10000 }
        };

        const projet = formData.typeProjet || 'autre';
        setEstimation(estimations[projet]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-[#faf9f5] text-[#1a1a1a] py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-medium mb-4">Simulateur de devis</h1>
                    <p className="text-xl max-w-2xl">
                        Obtenez une estimation gratuite et personnalisée pour votre projet.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <h3 className="text-lg font-medium mb-4">Type de projet</h3>
                            <div className="space-y-3">
                                {typesProjet.map((type) => (
                                    <div key={type.id} className="flex items-center">
                                        <input
                                            type="radio"
                                            id={type.id}
                                            name="typeProjet"
                                            value={type.id}
                                            checked={formData.typeProjet === type.id}
                                            onChange={handleChange}
                                            className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                                        />
                                        <label htmlFor={type.id} className="ml-3 block text-sm font-medium">
                                            {type.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Budget estimé</h3>
                            <div className="space-y-3">
                                {budgets.map((budget) => (
                                    <div key={budget.id} className="flex items-center">
                                        <input
                                            type="radio"
                                            id={budget.id}
                                            name="budget"
                                            value={budget.id}
                                            checked={formData.budget === budget.id}
                                            onChange={handleChange}
                                            className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                                        />
                                        <label htmlFor={budget.id} className="ml-3 block text-sm font-medium">
                                            {budget.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Délai souhaité</h3>
                            <div className="space-y-3">
                                {delais.map((delai) => (
                                    <div key={delai.id} className="flex items-center">
                                        <input
                                            type="radio"
                                            id={delai.id}
                                            name="delai"
                                            value={delai.id}
                                            checked={formData.delai === delai.id}
                                            onChange={handleChange}
                                            className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                                        />
                                        <label htmlFor={delai.id} className="ml-3 block text-sm font-medium">
                                            {delai.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="details" className="block text-sm font-medium mb-1">Détails supplémentaires</label>
                            <textarea
                                id="details"
                                name="details"
                                rows="4"
                                value={formData.details}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                placeholder="Décrivez votre projet en quelques mots..."
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium"
                        >
                            Obtenir une estimation
                        </motion.button>
                    </form>

                    {estimation && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 p-6 bg-white rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-medium mb-2">Estimation préliminaire</h3>
                            <p className="mb-4">Fourchette de prix estimée pour votre projet :</p>
                            <div className="text-2xl font-bold">
                                {estimation.min.toLocaleString()} € - {estimation.max.toLocaleString()} €
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                                Cette estimation est indicative. Pour une évaluation précise, nous vous invitons à prendre contact avec notre équipe.
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}