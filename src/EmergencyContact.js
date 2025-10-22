import { Link, useNavigate } from 'react-router';

const EmergencyContacts = () => {
    const links = [
        {
            href: "https://drive.google.com/file/d/1923vU6ysu5SIXjs970QhRQw41laQ0l44/view?usp=sharing",
            text: "🚨 IGIDR Emergency Contact",
            color: "bg-red-600 hover:bg-red-700",
            tooltip: "1. Ms.Jayshree Borkar: Extn 586, Mobile: +91 9930910762 | 2. Mr.Mahesh Mohan: Extn 566, Mobile: +91 9920044137",
            external: true
        },
        {
            href: "https://drive.google.com/file/d/1mfxkTMec8g907YnicWpv4gtfM64Mm2Bm/view?usp=sharing",
            text: "🏥 List of Hospitals",
            color: "bg-green-600 hover:bg-green-700",
            external: true
        },
        {
            href: "https://drive.google.com/file/d/1OuaHLECx1jN4bwfyfoPINdBkdm0gvWO_/view?usp=drive_link",
            text: "🐍 In Case of Snake Bite",
            color: "bg-yellow-500 hover:bg-yellow-600 text-black",
            tooltip: "Vasudha Hospital (24hr), Bhagwati Hospital Borivali, Kanchi Hospital Goregaon",
            external: true
        },
        {
            href: "/allcontact",
            text: "📇 All Contacts",
            color: "bg-blue-600 hover:bg-blue-700",
            external: false
        }
    ];

    return (
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-center p-6">
            {links.map((link, index) =>
                link.external ? (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white px-5 py-3 rounded-lg font-semibold text-sm transition ${link.color}`}
                        title={link.tooltip || ""}
                    >
                        {link.text}
                    </a>
                ) : (
                    <Link
                        key={index}
                        to={link.href}
                        target='_blank'
                        className={`text-white px-5 py-3 rounded-lg font-semibold text-sm transition ${link.color}`}
                        title={link.tooltip || ""}
                    >
                        {link.text}
                    </Link>
                )
            )}
        </div>
    );
};

export default EmergencyContacts;
