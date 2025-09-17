
const plans = ["BRONZE", "SILVER", "GOLD", "PLATINUM"];

const features = [
    {
        name: "PPA Sales",
        values: ["Home Country Only", "Home Country Only", "Any LATAM Country", "Any LATAM Country"],
    },
    {
        name: "EV Chargers Sales",
        values: [
            <img src={'/icons/red-cross.png'} />,
            "Home Country Only",
            "Any LATAM Country",
            "LATAM",
        ],
    },
    {
        name: "Insurance Sales",
        values: [<img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />],
    },
    {
        name: "Dealer Portal + CRM",
        values: [<img src={'/icons/green-checkmark.png'} />, <img src={'/icons/green-checkmark.png'} />, <img src={'/icons/green-checkmark.png'} />, <img src={'/icons/green-checkmark.png'} />],
    },
    {
        name: "Contract Templates",
        values: [<img src={'/icons/green-checkmark.png'} />, <img src={'/icons/green-checkmark.png'} />, <img src={'/icons/green-checkmark.png'} />, <img src={'/icons/green-checkmark.png'} />],
    },
    {
        name: "Training Support",
        values: [
            "Digital Self-Learning",
            "Digital Self-Learning",
            "Monthly Team Training",
            "Monthly Team Training (Private + Personalized)",
        ],
    },
    {
        name: "Monthly Strategy Sessions",
        values: [<img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />, "Monthly LATAM-Wide Webinar"],
    },
    {
        name: "Free Assignments",
        values: [<img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />, "5 Free Per Quarter"],
    },
    {
        name: "Leads",
        values: [<img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />, "10 Free Per Quarter + Warm Referrals"],
    },
    {
        name: "Dealer Events",
        values: ["Standard Seating", "Preferred Seating", "Gold Seating", "VIP + Backstage"],
    },
    {
        name: "Dealer Public Promotion",
        values: [<img src={'/icons/red-cross.png'} />, "Logo/Profile Listed", "Regional Recognition", "Featured Spotlight (Social, Press, YouTube)"],
    },
    {
        name: "Construction Loans",
        values: ["$500 Application Fee", "$500 Application Fee", "$500 Application Fee", "Free Applications"],
    },
    {
        name: "Expansion Opportunities",
        values: [<img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />, <img src={'/icons/red-cross.png'} />, "Invite-only equity co-development pool"],
    },
];

export default function ComparisonTable() {
    return (
        <div className="w-full max-w-[1348px] mx-auto overflow-x-auto
      bg-[linear-gradient(135deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.85)_calc(50%_-_350px),rgba(255,255,255,0.2)_50%,rgba(0,0,0,0.85)_calc(50%_+_350px),rgba(0,0,0,0.85)_100%)] p-6 rounded-lg mb-15">
            <table className="min-w-[900px] w-full border-separate border-spacing-y-2">
                <thead>
                    <tr>
                        <th className="bg-white/10 text-left text-white/80 font-bold text-[22px] px-4 py-3">Features</th>
                        {plans.map((plan) => (
                            <th
                                key={plan}
                                className="px-6 py-5 text-center text-white font-bold text-[22px] bg-white/10"
                            >
                                {plan}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, idx) => (
                        <tr key={idx} className="border-b border-white/10">
                            <td className="px-4 py-4 text-white/70 font-medium text-[16px]">{feature.name}</td>
                            {feature.values.map((value, i) => (
                                <td key={i} className="px-6 py-3 text-center">
                                    <div className="flex items-center justify-center">
                                        {typeof value === "string" ? (
                                            <span className="font-bold text-[16px] text-[#71717A]">{value}</span>
                                        ) : (
                                            value
                                        )}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
