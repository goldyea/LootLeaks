"use client";

export function HomeContent() {
  return (
    <div className="w-full px-8 pt-[35px] flex justify-center">
      <div className="w-full max-w-[1300px]">
        {/* Hero Section */}
        <HeroSection />

        {/* Middle Cards */}
        <MiddleCards />

        {/* Game Sections */}
        <GameSections />

        {/* Top Rated Resources */}
        <TopRatedResources />

        {/* Recent Members */}
        <RecentMembers />

        {/* Recent Activity */}
        <RecentActivity />

        {/* VIP Section */}
        <VIPSection />

        {/* Info Sections */}
        <InfoSections />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div
      className="relative overflow-hidden w-full min-h-[320px] md:min-h-[380px] lg:min-h-[420px] rounded-3xl mb-6"
      style={{
        backgroundImage: "url(/minecraftbackground.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50 rounded-3xl z-10"></div>

      {/* Glowing animated blue border */}
      <div className="absolute inset-0 z-20 rounded-3xl pointer-events-none animate-pulse border-[3px] border-blue-500/90 shadow-[0_0_12px_3px_#3b82f6aa]" />

      {/* Inner shadow */}
      <div className="absolute inset-0 rounded-3xl shadow-inner z-20"></div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
        {/* Header */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-white mb-4 md:mb-6 drop-shadow-lg">
              WELCOME TO LOOTLEAKS!
            </h1>
            <p className="font-semibold text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl drop-shadow-md">
              Your ultimate destination for premium Minecraft resources,
              plugins, and configurations.
            </p>
          </div>
        </div>

        {/* VIP Card + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="w-full max-w-md lg:max-w-lg">
            <div className="backdrop-blur-sm bg-black/30 border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-sm">🥉</span>
                  </div>
                  <span className="font-bold text-lg text-white">
                    Bronze Member
                  </span>
                </div>
                <div className="text-sm font-bold text-blue-300 flex items-center gap-2 cursor-pointer hover:text-white transition-colors group">
                  VIP Club
                  <svg
                    width="5"
                    height="11"
                    viewBox="0 0 5 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-0.5 transition-transform"
                  >
                    <path
                      d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative mb-5">
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-0 h-full bg-gradient-to-r from-[#4383ff] to-[#6366f1] rounded-full transition-all duration-500"></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm">
                <span className="text-white/70">
                  <span className="text-white font-semibold">600 XP</span> to
                  next level
                </span>
                <span className="text-white/70">
                  Next level bonus{" "}
                  <span className="text-green-400 font-semibold">$50</span>
                </span>
              </div>
            </div>
          </div>

          {/* Call-to-action */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[#4383ff] to-[#6366f1] text-white font-bold rounded-xl hover:from-[#3b82f6] hover:to-[#4f46e5] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Browse Resources
            </button>
            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300">
              Upload Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiddleCards() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 my-6">
      {/* Free Starter Pack Card */}
      <div className="group relative w-full min-h-[90px] sm:h-[85px] gradient-hero rounded-2xl flex flex-col justify-center gap-2.5 pl-6 sm:pl-[130px] pr-4 sm:pr-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 border border-white/5 hover:border-white/10">
        {/* Gift Icon Container */}
        <div className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-xl border border-blue-400/20 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400/40">
          <span className="text-2xl transition-transform duration-300 group-hover:rotate-12">
            🎁
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="font-extrabold text-base sm:text-lg leading-tight text-white mb-1 transition-colors duration-300 group-hover:text-blue-100">
            Free starter pack available!
          </div>
          <div className="font-semibold text-xs sm:text-sm leading-relaxed text-[#8a9bb8] transition-colors duration-300 group-hover:text-[#9fb0d3]">
            Get essential plugins and configs to kickstart your Minecraft server
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* VIP Membership Card */}
      <div className="group relative w-full min-h-[90px] sm:h-[85px] gradient-hero rounded-2xl flex flex-col justify-center gap-2.5 pl-6 sm:pl-[130px] pr-4 sm:pr-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10 border border-white/5 hover:border-white/10">
        {/* Star Icon Container */}
        <div className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl border border-amber-400/20 transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400/40">
          <span className="text-2xl transition-transform duration-300 group-hover:rotate-12">
            ⭐
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="font-extrabold text-base sm:text-lg leading-tight text-white mb-1 transition-colors duration-300 group-hover:text-amber-100">
            Become a VIP member today
          </div>
          <div className="font-semibold text-xs sm:text-sm leading-relaxed text-[#8a9bb8] transition-colors duration-300 group-hover:text-[#9fb0d3]">
            Unlock premium resources and exclusive Minecraft content
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}

function GameSections() {
  return (
    <div className="flex gap-5 mb-11">
      <div className="w-full">
        <div
          className="relative w-full aspect-[1280/440] rounded-2xl mb-3 hover-lift cursor-pointer overflow-hidden"
          style={{
            backgroundImage: "url(/endplugin.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 rounded-2xl"></div>
          <div className="relative z-10 w-full h-full rounded-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl mb-2 drop-shadow-lg">🔧</div>
              <div className="font-bold drop-shadow-md">Premium Plugins</div>
            </div>
          </div>
        </div>
        <div className="font-extrabold text-lg leading-5 text-white mt-3 mb-2">
          Premium Plugins
        </div>
        <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] mb-4">
          Discover high-quality plugins to enhance your Minecraft server. From
          economy systems to custom game modes, find everything you need to
          create the perfect server experience.
        </div>
        <button className="btn-primary w-full h-[50px]">Browse Plugins</button>
      </div>

      <div className="w-full">
        <div
          className="relative w-full aspect-[1280/440] rounded-2xl mb-3 hover-lift cursor-pointer overflow-hidden"
          style={{
            backgroundImage: "url(/serversetup.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 rounded-2xl"></div>
          <div className="relative z-10 w-full h-full rounded-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl mb-2 drop-shadow-lg">⚙️</div>
              <div className="font-bold drop-shadow-md">Server Configs</div>
            </div>
          </div>
        </div>
        <div className="font-extrabold text-lg leading-5 text-white mt-3 mb-2">
          Server Configurations
        </div>
        <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] mb-4">
          Ready-to-use server configurations and setups. Get your Minecraft
          server running quickly with our tested and optimized configuration
          files for various game modes.
        </div>
        <button className="btn-primary w-full h-[50px]">View Configs</button>
      </div>
    </div>
  );
}

function TopRatedResources() {
  const resources = [
    { name: "EssentialsX", color: "from-red-500 to-orange-500" },
    { name: "WorldEdit", color: "from-blue-500 to-purple-500" },
    { name: "Vault", color: "from-pink-500 to-purple-500" },
    { name: "LuckPerms", color: "from-orange-500 to-yellow-500" },
    { name: "PlaceholderAPI", color: "from-green-500 to-blue-500" },
    { name: "Citizens", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="mb-11">
      <div className="flex justify-between items-center mb-6">
        <span className="font-extrabold text-xl leading-6 text-white">
          Top Rated Resources
        </span>
        <div className="font-bold text-base text-[#6f7d9d] flex items-center cursor-pointer hover:text-white transition-colors">
          View all
          <svg
            style={{ marginLeft: "8px", marginBottom: "-3px" }}
            width="5"
            height="11"
            viewBox="0 0 5 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="relative -mx-8">
        <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-[#090f1e] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-[#090f1e] to-transparent z-10" />

        <div className="flex gap-5 px-8 overflow-x-auto scrollbar-hide">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`w-[200px] min-w-[200px] h-[250px] bg-gradient-to-br ${resource.color} rounded-2xl hover-lift cursor-pointer`}
            >
              <div className="w-full h-full rounded-2xl bg-black/20 flex items-center justify-center">
                <div className="text-center text-white font-bold">
                  {resource.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecentMembers() {
  const members = Array(20)
    .fill(null)
    .map((_, i) => {
      const timeUnits = ["m", "h", "d", "w"];
      const timeUnit = timeUnits[Math.floor(Math.random() * timeUnits.length)];
      const timeValue = Math.floor(Math.random() * 59) + 1;

      return {
        username: `User${i + 1}${Math.random() > 0.5 ? "***" : ""}`,
        joinedTime: `${timeValue}${timeUnit} ago`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${i + 1}`,
        gradientColor: [
          "from-blue-500 to-purple-500",
          "from-green-500 to-emerald-500",
          "from-pink-500 to-purple-500",
          "from-orange-500 to-red-500",
          "from-cyan-500 to-blue-500",
          "from-purple-500 to-pink-500",
          "from-yellow-500 to-orange-500",
          "from-indigo-500 to-purple-500",
        ][i % 8],
      };
    });

  return (
    <div className="mb-11">
      <div className="flex justify-between items-center mb-6">
        <span className="font-extrabold text-xl leading-6 text-white">
          Recent Members
        </span>
      </div>

      <div className="w-full bg-[#0d1426] rounded-[18px] p-6 overflow-hidden">
        <div className="flex gap-6 animate-scroll-continuous">
          {[...members, ...members, ...members].map((member, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 min-w-[280px] bg-[#111a33]/50 hover:bg-[#111a33]/80 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-white/5 hover:border-white/10"
            >
              {/* Avatar */}
              <div
                className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${member.gradientColor} p-0.5 transition-transform duration-300 group-hover:scale-110`}
              >
                <div className="w-full h-full rounded-full bg-[#0d1426] flex items-center justify-center overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.username}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors truncate">
                    @{member.username}
                  </span>
                </div>
                <div className="font-medium text-xs text-[#6f7d9d] group-hover:text-[#8a9bb8] transition-colors">
                  Joined {member.joinedTime}
                </div>
              </div>

              {/* View Profile Link */}
              <div className="flex items-center gap-1 text-[#4383ff] hover:text-[#6366f1] transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <span className="font-semibold text-xs whitespace-nowrap">
                  View Profile
                </span>
                <svg
                  width="4"
                  height="8"
                  viewBox="0 0 4 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M0.5 0.5L3.5 4L0.5 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="mb-11">
      <div className="flex justify-between items-center mb-6">
        <span className="font-extrabold text-xl leading-6 text-white">
          Recent Activity
        </span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-1.5 h-14 px-2 bg-[#0d1529]/60 rounded-[100px]">
          <div className="h-10 px-4 flex items-center justify-center font-bold text-base leading-[19px] text-white whitespace-nowrap rounded-[100px] bg-[#121a30] cursor-pointer">
            Recent uploads
          </div>
          <div className="h-10 px-4 flex items-center justify-center font-bold text-base leading-[19px] text-white whitespace-nowrap rounded-[100px] cursor-pointer hover:bg-[#121a30] transition-colors">
            My uploads
          </div>
        </div>

        <div className="font-bold text-base text-white flex items-center">
          <svg
            className="w-4 h-auto mr-2 filter drop-shadow-[0_2px_10px_rgba(39,255,131,0.5)]"
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.375 7.5C4.375 7.5 3.75 7.5 3.75 6.875C3.75 6.25 4.375 4.375 6.875 4.375C9.375 4.375 10 6.25 10 6.875C10 7.5 9.375 7.5 9.375 7.5H4.375ZM6.875 3.75C7.37228 3.75 7.84919 3.55246 8.20083 3.20083C8.55246 2.84919 8.75 2.37228 8.75 1.875C8.75 1.37772 8.55246 0.900806 8.20083 0.549175C7.84919 0.197544 7.37228 0 6.875 0C6.37772 0 5.90081 0.197544 5.54917 0.549175C5.19754 0.900806 5 1.37772 5 1.875C5 2.37228 5.19754 2.84919 5.54917 3.20083C5.90081 3.55246 6.37772 3.75 6.875 3.75Z"
              fill="#27FF83"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.26 7.50027C3.16735 7.30515 3.12114 7.09123 3.125 6.87527C3.125 6.02839 3.55 5.15652 4.335 4.55027C3.94318 4.42954 3.53497 4.3705 3.125 4.37527C0.625 4.37527 0 6.25027 0 6.87527C0 7.50027 0.625 7.50027 0.625 7.50027H3.26Z"
              fill="#27FF83"
            />
            <path
              d="M2.8125 3.75C3.2269 3.75 3.62433 3.58538 3.91735 3.29235C4.21038 2.99933 4.375 2.6019 4.375 2.1875C4.375 1.7731 4.21038 1.37567 3.91735 1.08265C3.62433 0.78962 3.2269 0.625 2.8125 0.625C2.3981 0.625 2.00067 0.78962 1.70765 1.08265C1.41462 1.37567 1.25 1.7731 1.25 2.1875C1.25 2.6019 1.41462 2.99933 1.70765 3.29235C2.00067 3.58538 2.3981 3.75 2.8125 3.75Z"
              fill="#27FF83"
            />
          </svg>
          <span>
            <span className="text-[#27ff83]">12,847</span> active users
          </span>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full flex items-center px-6 gap-5 mb-6">
          <div className="w-[24%] font-medium text-sm text-[#5f6889]">USER</div>
          <div className="w-[24%] font-medium text-sm text-[#5f6889]">
            RESOURCE
          </div>
          <div className="w-[23%] font-medium text-sm text-[#5f6889]">TYPE</div>
          <div className="w-[20%] font-medium text-sm text-[#5f6889]">
            DOWNLOADS
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Recent activity would be populated here */}
          <div className="text-center text-[#5f6889] py-8">
            Recent activity loading...
          </div>
        </div>
      </div>
    </div>
  );
}

function VIPSection() {
  return (
    <div
      className="relative overflow-hidden w-full h-[261px] p-12 rounded-3xl my-11"
      style={{
        backgroundImage: "url(/vipbackground.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>

      <div className="relative z-10">
        <div className="font-extrabold text-[28px] leading-[33px] text-white max-w-[515px] mb-5">
          UNLOCK EXCLUSIVE <span className="text-[#4383ff]">VIP RESOURCES</span>{" "}
          AT LOOTLEAKS!
        </div>
        <div className="font-bold text-base leading-[19px] text-[#6f7d9d] max-w-[490px] mb-5">
          Join the VIP Club to access premium plugins, exclusive configurations,
          and participate in monthly resource contests with amazing prizes
        </div>
        <div className="w-max flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition-opacity">
          <span className="font-bold text-base leading-[19px] text-white">
            VIP Club
          </span>
          <svg
            width="5"
            height="11"
            viewBox="0 0 5 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InfoSections() {
  return (
    <div className="flex gap-5 mt-11">
      <div className="relative overflow-hidden w-full h-[300px] bg-[#0d1426] rounded-3xl p-[35px]">
        <div className="font-extrabold text-xl leading-6 text-white mb-4">
          LootLeaks - Premier Minecraft Resource Hub
        </div>
        <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] mb-4">
          LootLeaks has been the go-to destination for Minecraft server owners
          since 2019. Our platform offers the largest collection of plugins,
          configurations, and server setups for both cracked and premium
          Minecraft servers. We provide safe, tested, and high-quality resources
          to help you build the perfect Minecraft server experience.
        </div>

        <div className="absolute w-full h-[130px] left-0 bottom-0 bg-gradient-to-t from-[#0d1426] via-[#0d1426]/90 to-transparent flex justify-center pt-15">
          <button className="w-[135px] h-[50px] bg-[#182239] rounded-lg font-bold text-base text-white hover:bg-[#4383ff] transition-colors">
            Learn more
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden w-full h-[300px] bg-[#0d1426] rounded-3xl p-[35px]">
        <div className="font-extrabold text-xl leading-6 text-white mb-4">
          Help Us Improve LootLeaks
        </div>
        <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] mb-4">
          Share your experience with LootLeaks and help us improve our platform.
          Your feedback helps us provide better resources for the Minecraft
          community.
        </div>

        <textarea
          className="w-full h-[95px] border-2 border-transparent bg-[#090f1e] rounded-xl outline-none font-bold text-sm text-white p-4 resize-none mb-4 focus:border-[#4383ff] transition-colors"
          placeholder="Share your experience with LootLeaks"
        />

        <div className="flex justify-between items-center">
          <button
            className="btn-primary h-[50px] opacity-70 cursor-not-allowed"
            disabled
          >
            Submit feedback
          </button>
          <div className="font-bold text-base text-[#6f7d9d] flex items-center cursor-pointer hover:text-white transition-colors">
            View all feedback
            <svg
              style={{ marginLeft: "8px", marginBottom: "-3px" }}
              width="5"
              height="11"
              viewBox="0 0 5 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L3.57031 4.21429C3.706 4.37956 3.8141 4.57885 3.88797 4.79993C3.96184 5.02101 4 5.25925 4 5.5C4 5.74075 3.96184 5.97899 3.88797 6.20014C3.8141 6.42121 3.706 6.62044 3.57031 6.78571L1 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
