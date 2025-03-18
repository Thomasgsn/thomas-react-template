import { LuBanana, LuBatteryCharging, LuBriefcaseMedical, LuCandy, LuChartPie, LuCircleDollarSign, LuCrown, LuFolderDown, LuShirt, LuTestTubeDiagonal, LuTruck } from "react-icons/lu";

interface IconItem {
    title: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const Icons = () => {

    const map: IconItem[] = [
        { title: 'banana', icon: LuBanana },
        { title: 'baTTery', icon: LuBatteryCharging },
        { title: 'chArt pie', icon: LuChartPie },
        { title: 'jersey', icon: LuShirt },
        { title: 'dollArs', icon: LuCircleDollarSign },
        { title: 'cRown', icon: LuCrown },
        { title: 'medic', icon: LuBriefcaseMedical },
        { title: 'CANDY', icon: LuCandy },
        { title: 'FoldEr', icon: LuFolderDown },
        { title: 'truck', icon: LuTruck },
        { title: 'test tube   ', icon: LuTestTubeDiagonal },
    ];

    return (
        <div id="list" className="p-6 flex flex-col justify-around gap-6">
            <p>
                List With Icons Understandable:
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
                {map.map((m) => (
                    <div key={m.title} className="flex flex-col items-center">
                        <m.icon size={28} className="text-blue-500 dark:text-purple-400 mb-2" />
                        <span className="text-sm text-nowrap capitalize">{m.title.toLowerCase()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
