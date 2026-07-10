import { Link } from "react-router-dom";
import {
  Cloud,
  ArrowRight,
  Server,
  Activity,
  Bell,
  FileText,
  Gauge,
  Globe,
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: Server,
      title: "Fleet Inventory",
      description:
        "Track every server's health, region and resource usage at a glance.",
    },
    {
      icon: Activity,
      title: "Live Metrics",
      description:
        "Visualize CPU, memory, disk and network trends in real time.",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description:
        "Detect warnings and critical issues before they escalate.",
    },
    {
      icon: FileText,
      title: "Log Streaming",
      description:
        "Search and filter live logs across all your services.",
    },
    {
      icon: Gauge,
      title: "Performance",
      description:
        "Monitor response times and fleet-wide performance continuously.",
    },
    {
      icon: Globe,
      title: "Multi Region",
      description:
        "Manage infrastructure distributed across global regions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white relative overflow-hidden">
        {/* Background Effects */}

<div className="absolute inset-0 -z-10 overflow-hidden">

  <div
    className="
      absolute
      top-20
      left-20
      w-[450px]
      h-[450px]
      bg-blue-600/10
      rounded-full
      blur-[140px]
      animate-pulse
    "
  ></div>

  <div
    className="
      absolute
      bottom-10
      right-20
      w-[400px]
      h-[400px]
      bg-cyan-500/10
      rounded-full
      blur-[140px]
      animate-pulse
    "
    style={{ animationDelay: "1.5s" }}
  ></div>

</div>

      {/* Navbar */}

      <header className="h-20 border-b border-slate-800 px-12 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
            <Cloud size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Nimbus
            </h2>

            <p className="text-slate-400">
              Infra Monitoring
            </p>
          </div>

        </div>

        <Link
          to="/dashboard"
          className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Open Dashboard

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </Link>

      </header>

      {/* Hero */}

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-6 py-24">

        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full"></div>

        <div
          className="
            relative
            flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            border
            border-slate-700
            bg-[#111827]
            mb-8
            hover:border-blue-500
            transition
          "
        >
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>

          <span className="text-slate-300">
            All systems operational
          </span>
        </div>

        <h1
          className="
            relative
            text-5xl
            md:text-6xl
            lg:text-[72px]
            font-semibold
            tracking-[-0.03em]
            leading-[1.05]
            tracking-tight
            leading-[1.1]
            max-w-4xl
            mx-auto
            "
        >
          Cloud Infrastructure
          <br />
          Monitoring,
          <br />
          Beautifully Simple.
        </h1>

        <p className="relative mt-8 text-base md:text-lg text-slate-400 max-w-3xl leading-8">

          Nimbus brings servers, metrics, alerts and logs into one clean,
          real-time dashboard so you always know the health of your infrastructure.

        </p>

        <div className="relative flex gap-5 mt-12">

          <Link
            to="/dashboard"
            className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              shadow-blue-600/20
            "
          >
            Launch Dashboard

            <ArrowRight
              size={18}
              className="transition-transform duration-300 hover:translate-x-1"
            />

          </Link>

          <Link
            to="/servers"
            className="
              px-8
              py-4
              rounded-xl
              border
              border-slate-700
              hover:border-blue-500
              hover:bg-slate-800
              transition-all
              duration-300
            "
          >
            Explore Servers
          </Link>

        </div>
        </div>

      </section>

      {/* Features */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-[#111827]
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500
                  hover:shadow-2xl
                  hover:shadow-blue-500/20
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-blue-900/30
                    flex
                    items-center
                    justify-center
                    mb-6
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon
                    size={30}
                    className="text-blue-400"
                  />
                </div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-5 text-slate-400 leading-8">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

         </div>
      </section>
      {/* Statistics */}

        <section className="pt-8 pb-16">
            <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">

            <h2 className="text-4xl font-bold text-blue-400">
                12+
            </h2>

            <p className="mt-3 text-slate-400">
                Active Servers
            </p>

            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">

            <h2 className="text-4xl font-bold text-green-400">
                99.98%
            </h2>

            <p className="mt-3 text-slate-400">
                Uptime
            </p>

            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">

            <h2 className="text-4xl font-bold text-cyan-400">
                4
            </h2>

            <p className="mt-3 text-slate-400">
                Regions
            </p>

            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">

            <h2 className="text-4xl font-bold text-yellow-400">
                24/7
            </h2>

            <p className="mt-3 text-slate-400">
                Monitoring
            </p>

            </div>

        </div>
        </div>

        </section>

        {/* CTA Section */}

<section className="pt-8 pb-16">
  <div className="max-w-7xl mx-auto px-6">

  <div
    className="
      bg-[#111827]
      border
      border-slate-800
      rounded-3xl
      py-16
      px-10
      text-center
      hover:border-blue-500
      transition-all
      duration-300
    "
  >

    <h2 className="text-4xl font-bold">
      Ready to see your fleet?
    </h2>

    <p className="mt-6 text-slate-400 text-base md:text-lg">
      Jump into the live dashboard with realistic mock data — no setup, no login.
    </p>

    <Link
      to="/dashboard"
      className="
        inline-flex
        items-center
        gap-2
        mt-10
        px-10
        py-4
        rounded-xl
        bg-blue-600
        hover:bg-blue-700
        hover:scale-105
        transition-all
        duration-300
      "
    >
      Open Dashboard

      <ArrowRight
        size={20}
        className="group-hover:translate-x-1 transition-transform"
      />

    </Link>

  </div>
</div>
</section>
<footer className="border-t border-slate-800 mt-12">
  <div className="max-w-7xl mx-auto py-5 text-center">

  <p className="text-slate-500 text-sm hover:text-slate-300 transition-colors duration-300">
    Nimbus • Cloud Infrastructure Monitoring
  </p>

</div>
</footer>
    </div>
  );
}

export default Home;