export function Footer() {
  return (
    <div className="relative w-full px-8 pt-11 pb-11 flex justify-center bg-[#090f1e]">
      <div className="w-full max-w-[1300px]">
        {/* Logo Section */}
        <div className="flex items-center gap-6 mb-11">
          <div className="flex items-center gap-3.5 cursor-pointer">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="50"
                height="50"
                rx="12"
                fill="url(#footer-logo-gradient)"
              />
              <path
                d="M33.5069 21.9995L16.1673 32.4557C15.1465 33.0682 13.834 32.339 13.834 31.1432V19.4766C13.834 14.387 19.3319 11.2078 23.7507 13.7453L30.4444 17.5953L33.4923 19.3453C34.4986 19.9432 34.5132 21.4016 33.5069 21.9995Z"
                fill="white"
              />
              <path
                d="M34.3785 30.5467L28.4723 33.9592L22.5807 37.3572C20.4661 38.5676 18.0744 38.3197 16.339 37.0947C15.4932 36.5113 15.5952 35.2134 16.4848 34.6884L35.0202 23.5759C35.8952 23.0509 37.0473 23.5467 37.2077 24.553C37.5723 26.8134 36.6389 29.2488 34.3785 30.5467Z"
                fill="white"
                fillOpacity="0.6"
              />
              <defs>
                <linearGradient
                  id="footer-logo-gradient"
                  x1="0"
                  y1="25"
                  x2="50"
                  y2="25"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4E95FF" />
                  <stop offset="1" stopColor="#376FFF" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-black italic text-[22px] leading-[26px] text-white whitespace-nowrap">
              LOOTLEAKS
            </span>
          </div>
          <div className="w-full h-px bg-white/6 rounded-full" />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between items-start mb-11">
          <div className="flex flex-col gap-3.5">
            <div className="font-bold text-base leading-[19px] text-white mb-1.5">
              Resources
            </div>
            <FooterLink text="Plugins" />
            <FooterLink text="Configs" />
            <FooterLink text="Setups" />
            <FooterLink text="Maps" />
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="font-bold text-base leading-[19px] text-white mb-1.5">
              Community
            </div>
            <FooterLink text="Discord Servers" />
            <FooterLink text="Guides & Info" />
            <FooterLink text="Creator Program" />
            <FooterLink text="Leaderboards" />
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="font-bold text-base leading-[19px] text-white mb-1.5">
              Support
            </div>
            <FooterLink text="Help Center" />
            <FooterLink text="Upload Guide" />
            <FooterLink text="Bug Reports" />
            <FooterLink text="Contact Us" />
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="font-bold text-base leading-[19px] text-white mb-1.5">
              Legal
            </div>
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Terms of Service" />
            <FooterLink text="DMCA Policy" />
            <FooterLink text="Cookie Policy" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/6 rounded-full mb-[35px]" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-10 h-10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="40"
                height="40"
                rx="8"
                fill="url(#bottom-logo-gradient)"
              />
              <path
                d="M26.8055 17.5996L13.3338 25.9646C12.5172 26.4545 11.4672 25.8712 11.4672 24.9145V15.5813C11.4672 11.5096 15.4655 8.96624 19.0006 11.0162L24.3555 14.0762L26.7938 15.4762C27.5989 15.9546 27.6106 16.9213 26.8055 17.5996Z"
                fill="white"
              />
              <path
                d="M27.5028 24.4374L22.7778 27.1674L18.0646 29.8858C16.3729 30.854 14.4595 30.6558 13.0712 29.6758C12.3946 29.209 12.4762 28.1707 13.1878 27.7507L28.0162 18.8607C28.7162 18.4407 29.6378 18.8374 29.7662 19.6424C30.0578 21.4507 29.3111 23.3991 27.5028 24.4374Z"
                fill="white"
                fillOpacity="0.6"
              />
              <defs>
                <linearGradient
                  id="bottom-logo-gradient"
                  x1="0"
                  y1="20"
                  x2="40"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4E95FF" />
                  <stop offset="1" stopColor="#376FFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="font-bold text-sm leading-[17px] text-[#6f7d9d] text-center">
            © 2025 LOOTLEAKS | All Rights Reserved.
          </div>

          <div className="max-w-[1300px] font-medium text-sm leading-[17px] text-[#5f6889]/60 text-center">
            LootLeaks is a community-driven Minecraft resource hub providing
            access to plugins, configs, setups, and maps for both cracked and
            premium Minecraft servers. We are not affiliated with Mojang Studios
            or Microsoft.
          </div>

          <div className="font-bold text-sm leading-[17px] text-[#5f6889]/60 text-center">
            Support <span className="text-white">support@lootleaks.com</span> |
            Creators <span className="text-white">creators@lootleaks.com</span>{" "}
            | DMCA <span className="text-white">dmca@lootleaks.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FooterLinkProps {
  text: string;
}

function FooterLink({ text }: FooterLinkProps) {
  return (
    <div className="font-bold text-base leading-[19px] text-[#6f7d9d] cursor-pointer transition-colors hover:text-white">
      {text}
    </div>
  );
}
