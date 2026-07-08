import { type LucideIcon } from "lucide-react";

type StatsCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  change?: string;
  changeColor?: string;
};

function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
  iconColor,
  change,
  changeColor,
}: StatsCardProps) {
  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all duration-300">
      
      <div className="flex justify-between items-start">

        <div>
          <p className="text-slate-400 text-sm">{title}</p>

          <h2 className="text-4xl font-bold text-white mt-5">
            {value}
          </h2>

          <p className="text-slate-500 mt-3 text-sm">
            {subtitle}
          </p>
        </div>

        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>

      </div>

      {change && (
        <div className={`mt-5 text-sm font-medium ${changeColor}`}>
          {change}
        </div>
      )}

    </div>
  );
}

export default StatsCard;