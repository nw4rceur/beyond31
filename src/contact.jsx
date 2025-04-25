import React from 'react';

const Contact = () => {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <form className="flex flex-col gap-4 max-w-md">
                <input type="text" placeholder="Votre nom" className="border px-4 py-2" />
                <input type="email" placeholder="Votre email" className="border px-4 py-2" />
                <textarea placeholder="Votre message" className="border px-4 py-2"></textarea>
                <button className="bg-black text-white px-4 py-2 rounded">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;
