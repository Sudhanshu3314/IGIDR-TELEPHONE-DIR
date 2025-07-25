import React, { useState } from "react";
import { Search } from "lucide-react";
import { contactsData } from "../utils/contactsData";
import ContactCard from "./ContactCard";
import { IGIDR_LOGO } from "../utils/constant";

const TelDir = () => {
    const [search, setSearch] = useState("");

    const filtered = contactsData.filter((c) =>
        `${c.name} ${c.phone} ${c.department}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ backgroundColor: '#E1E4E8' }} className="min-h-screen py-10 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 transition-all duration-300">
                <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8 tracking-tight flex justify-center items-center">
                    <img
                        src={IGIDR_LOGO}
                        className="w-[70px] mr-[10px]"
                    />
                    <span>IGIDR Telephone Directory &#x260E;</span>
                </h1>

                {/* Search Bar */}
                <div className="relative mb-8 animate-fade-in">
                    <input
                        type="text"
                        placeholder="Search by name, phone, or department"
                        className="w-full py-3 px-5 pl-12 text-gray-800 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm hover:shadow-md transition duration-200"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                </div>

                {/* Show Results Only If Search Is Not Empty */}
                {search.trim() !== "" && (
                    <>
                        {filtered.length === 0 ? (
                            <p className="text-center text-black italic animate-fade-in">
                                No contacts found ........
                            </p>
                        ) : (
                            <ul className="grid gap-5 animate-fade-in">
                                {filtered.map((contact) => (
                                    <li
                                        key={contact.name}
                                        className="bg-gradient-to-r from-red-50 to-blue-100 border border-gray-300 rounded-xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
                                    >
                                        <ContactCard data={contact} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default TelDir;
