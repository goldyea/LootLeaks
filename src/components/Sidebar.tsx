"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        isOpen ? "w-[420px] min-w-[420px]" : "w-[100px] min-w-[100px]",
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 h-screen border-r border-white/5 gradient-sidebar transition-all duration-300",
          isOpen ? "w-[420px]" : "w-[100px]",
        )}
      >
        {/* Header */}
        <div className="relative w-full h-[100px] border-b border-white/5 pl-6 flex items-center">
          {/* Logo */}
          <div className="flex items-center gap-3.5 cursor-pointer max-w-full overflow-hidden">
            <div className="flex-shrink-0">
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
                  fill="url(#logo-gradient)"
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
                    id="logo-gradient"
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
            </div>

            <span
              className={cn(
                "font-black italic text-[22px] leading-[26px] text-white whitespace-nowrap transition-all duration-300",
                isOpen ? "opacity-100 visible" : "opacity-0 invisible",
              )}
            >
              LOOTLEAKS
            </span>
          </div>

          {/* Toggle Button */}
          <div
            className="absolute bottom-[-19px] right-[-19px] w-[39px] h-[39px] gradient-sidebar border border-[#192235] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-[100]"
            onClick={onToggle}
          >
            <svg
              width="20"
              height="39"
              viewBox="0 0 20 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 38.3175C20 38.6944 19.6942 39.0012 19.3175 38.9881C14.3936 38.8158 9.7072 36.7844 6.21142 33.2886C2.55446 29.6316 0.5 24.6717 0.5 19.5C0.5 14.3283 2.55446 9.36838 6.21141 5.71142C9.70719 2.21564 14.3936 0.184217 19.3175 0.0119347C19.6942 -0.00124575 20 0.305566 20 0.6825C20 1.05943 19.6942 1.36366 19.3175 1.37783C14.7557 1.54947 10.4164 3.43685 7.17662 6.67662C3.77565 10.0776 1.865 14.6903 1.865 19.5C1.865 24.3097 3.77565 28.9224 7.17662 32.3234C10.4164 35.5632 14.7558 37.4505 19.3175 37.6222C19.6942 37.6363 20 37.9406 20 38.3175Z"
                fill="#4383FF"
              />
            </svg>
            <svg
              className={cn(
                "transition-all duration-300",
                !isOpen && "rotate-180",
              )}
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.248871 7.0269L3.64891 3.87875C3.72732 3.80358 3.82111 3.74362 3.92482 3.70237C4.02852 3.66113 4.14006 3.63941 4.25292 3.63851C4.36579 3.6376 4.47772 3.65751 4.58218 3.69708C4.68664 3.73666 4.78155 3.7951 4.86136 3.86899C4.94117 3.94289 5.00428 4.03077 5.04702 4.12749C5.08976 4.22421 5.11127 4.32785 5.11029 4.43235C5.10931 4.53685 5.08586 4.64013 5.04131 4.73615C4.99676 4.83217 4.932 4.91902 4.85082 4.99162L2.90175 6.7963H12.75C12.9754 6.7963 13.1916 6.87922 13.351 7.02681C13.5104 7.17441 13.6 7.3746 13.6 7.58333C13.6 7.79207 13.5104 7.99225 13.351 8.13985C13.1916 8.28745 12.9754 8.37037 12.75 8.37037H2.90175L4.85082 10.175C4.932 10.2476 4.99676 10.3345 5.04131 10.4305C5.08586 10.5265 5.10931 10.6298 5.11029 10.7343C5.11127 10.8388 5.08976 10.9425 5.04702 11.0392C5.00428 11.1359 4.94117 11.2238 4.86136 11.2977C4.78155 11.3716 4.68664 11.43 4.58218 11.4696C4.47772 11.5092 4.36579 11.5291 4.25292 11.5282C4.14006 11.5273 4.02852 11.5055 3.92482 11.4643C3.82111 11.423 3.72732 11.3631 3.64891 11.2879L0.248871 8.13977C0.089519 7.99218 0 7.79203 0 7.58333C0 7.37464 0.089519 7.17449 0.248871 7.0269ZM15.3 1.28704V13.8796C15.3 14.0884 15.3895 14.2886 15.5489 14.4361C15.7084 14.5837 15.9246 14.6667 16.15 14.6667C16.3754 14.6667 16.5916 14.5837 16.751 14.4361C16.9104 14.2886 17 14.0884 17 13.8796V1.28704C17 1.0783 16.9104 0.878116 16.751 0.730518C16.5916 0.58292 16.3754 0.5 16.15 0.5C15.9246 0.5 15.7084 0.58292 15.5489 0.730518C15.3895 0.878116 15.3 1.0783 15.3 1.28704Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Body */}
        <div
          className={cn(
            "h-full max-h-[calc(100%-100px)] overflow-y-auto flex flex-col justify-between transition-all duration-300 overflow-x-hidden",
            isOpen ? "px-6 py-6" : "px-4 py-6",
          )}
        >
          <div className="flex flex-col">
            {/* Resource Button */}
            <div
              className={cn(
                "w-full flex gap-3 mb-[18px]",
                !isOpen && "flex-col gap-2.5 mb-4",
              )}
            >
              <div
                className={cn(
                  "relative w-full h-[50px] flex justify-center items-center gap-2 font-bold text-white bg-[#111a33] rounded-xl transition-all duration-300 cursor-pointer hover:bg-[#152447]",
                  !isOpen && "w-[72px] ml-[-3px] flex-col gap-0 text-sm",
                )}
                onMouseEnter={() => !isOpen && setHoveredTooltip("RESOURCES")}
                onMouseLeave={() => setHoveredTooltip(null)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={!isOpen ? "w-5" : ""}
                >
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                    fill="url(#resources-gradient)"
                  />
                  <defs>
                    <linearGradient
                      id="resources-gradient"
                      x1="2"
                      y1="9"
                      x2="22"
                      y2="9"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4E95FF" />
                      <stop offset="1" stopColor="#376FFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className={!isOpen ? "hidden" : ""}>RESOURCES</span>

                {/* Tooltip */}
                {!isOpen && hoveredTooltip === "RESOURCES" && (
                  <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 z-50 px-3 py-2 bg-[#1a1f2e] border border-white/10 rounded-lg shadow-lg">
                    <div className="font-bold text-sm text-white whitespace-nowrap">
                      RESOURCES
                    </div>
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-[#1a1f2e]"></div>
                  </div>
                )}
              </div>
            </div>

            {/* MENU Section */}
            <div
              className={cn(
                "font-medium text-sm leading-[17px] text-white/30 mb-2.5 transition-all duration-300 overflow-hidden",
                !isOpen && "hidden",
              )}
            >
              MENU
            </div>

            <div className="w-full flex flex-col gradient-card rounded-xl mb-[18px]">
              <NavItem
                icon={<HomeIcon />}
                label="Home"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
              <NavItem
                icon={<ResourcesIcon />}
                label="Resources"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
              <NavItem
                icon={<UploadIcon />}
                label="Upload"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
              <NavItem
                icon={<DiscordIcon />}
                label="Discord"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
            </div>

            {/* PROFILE Section */}
            <div
              className={cn(
                "font-medium text-sm leading-[17px] text-white/30 mb-2.5 transition-all duration-300 overflow-hidden",
                !isOpen && "hidden",
              )}
            >
              PROFILE
            </div>

            <div className="w-full flex flex-col gradient-card rounded-xl mb-[18px]">
              <NavItem
                icon={<ProfileIcon />}
                label="Profile"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
              <NavItem
                icon={<VIPIcon />}
                label="VIP Club"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
              <NavItem
                icon={<LeaderboardIcon />}
                label="Leaderboards"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
              <NavItem
                icon={<CreatorIcon />}
                label="Creator Program"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
            </div>

            {/* COMMUNITY Section */}
            <div
              className={cn(
                "font-medium text-sm leading-[17px] text-white/30 mb-2.5 transition-all duration-300 overflow-hidden",
                !isOpen && "hidden",
              )}
            >
              COMMUNITY
            </div>

            <div className="w-full flex flex-col gradient-card rounded-xl">
              <NavItem
                icon={<InfoIcon />}
                label="Information"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
              <NavItem
                icon={<HelpIcon />}
                label="Help Center"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
              <NavItem
                icon={<BugIcon />}
                label="Bug Reports"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
              <NavItem
                icon={<FeedbackIcon />}
                label="Feedback About Us"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
              <NavItem
                icon={<SecurityIcon />}
                label="Policies & Security"
                isCollapsed={!isOpen}
                hoveredTooltip={hoveredTooltip}
                setHoveredTooltip={setHoveredTooltip}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isCollapsed: boolean;
  hoveredTooltip?: string | null;
  setHoveredTooltip?: (tooltip: string | null) => void;
}

function NavItem({
  icon,
  label,
  isCollapsed,
  hoveredTooltip,
  setHoveredTooltip,
}: NavItemProps) {
  return (
    <div
      className={cn(
        "relative w-full h-[50px] rounded-xl transition-all duration-300 cursor-pointer flex items-center hover:bg-white/5",
        isCollapsed ? "justify-center p-0" : "px-6 gap-2.5",
      )}
      onMouseEnter={() => isCollapsed && setHoveredTooltip?.(label)}
      onMouseLeave={() => setHoveredTooltip?.(null)}
    >
      <div className="min-w-[22px]">{icon}</div>
      <span
        className={cn(
          "font-bold text-base leading-[19px] text-white whitespace-nowrap",
          isCollapsed && "hidden",
        )}
      >
        {label}
      </span>

      {/* Tooltip */}
      {isCollapsed && hoveredTooltip === label && (
        <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 z-50 px-3 py-2 bg-[#1a1f2e] border border-white/10 rounded-lg shadow-lg">
          <div className="font-bold text-sm text-white whitespace-nowrap">
            {label}
          </div>
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-[#1a1f2e]"></div>
        </div>
      )}
    </div>
  );
}

// Icons
function HomeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.352877 5.80423C-1.91586e-07 6.47348 0 7.23492 0 8.7577V13.5137C0 15.6286 2.29904e-07 16.6861 0.753159 17.3431C1.43657 17.9392 2.49795 17.9944 4.5 17.9996V12.3922C4.5 11.1533 5.65127 10.149 7.07143 10.149H10.9286C12.3488 10.149 13.5 11.1533 13.5 12.3922V17.9996C15.5021 17.9944 16.5635 17.9392 17.2468 17.3431C18 16.6861 18 15.6286 18 13.5137V8.7577C18 7.23492 18 6.47348 17.6471 5.80423C17.2943 5.1349 16.6315 4.63939 15.306 3.64833L14.0203 2.68698C11.6247 0.895663 10.4269 0 9 0C7.57311 0 6.3753 0.895663 3.97961 2.68698L2.69389 3.64833C1.36848 4.63939 0.705754 5.1349 0.352877 5.80423ZM10.9286 18V12.3922H7.07143V18H10.9286Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function ResourcesIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L10.545 6.91L18 8L10.545 9.09L9 15L7.455 9.09L0 8L7.455 6.91L9 1Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L12 4H10V10H8V4H6L9 1ZM4 12V14H14V12H16V14C16 15.1 15.1 16 14 16H4C2.9 16 2 15.1 2 14V12H4Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2 3.8C14.05 3.275 12.825 2.9 11.55 2.7C11.4 2.975 11.225 3.35 11.1 3.65C9.75 3.475 8.4 3.475 7.05 3.65C6.925 3.35 6.75 2.975 6.6 2.7C5.325 2.9 4.1 3.275 2.95 3.8C0.525 7.3 -0.125 10.725 0.2 14.1C1.75 15.225 3.25 15.9 4.725 16.35C5.1 15.825 5.425 15.275 5.7 14.7C5.15 14.5 4.625 14.25 4.125 13.975C4.25 13.875 4.375 13.775 4.5 13.675C7.425 15.025 10.575 15.025 13.5 13.675C13.625 13.775 13.75 13.875 13.875 13.975C13.375 14.25 12.85 14.5 12.3 14.7C12.575 15.275 12.9 15.825 13.275 16.35C14.75 15.9 16.25 15.225 17.8 14.1C18.175 10.225 17.225 6.825 15.2 3.8ZM6 11.85C5.125 11.85 4.4 11.025 4.4 10.025C4.4 9.025 5.1 8.2 6 8.2C6.9 8.2 7.625 9.025 7.6 10.025C7.6 11.025 6.9 11.85 6 11.85ZM12 11.85C11.125 11.85 10.4 11.025 10.4 10.025C10.4 9.025 11.1 8.2 12 8.2C12.9 8.2 13.625 9.025 13.6 10.025C13.6 11.025 12.9 11.85 12 11.85Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.41176 0C7.36581 0 5.70588 1.72768 5.70588 3.85714C5.70588 5.98661 7.36581 7.71429 9.41176 7.71429C11.4577 7.71429 13.1176 5.98661 13.1176 3.85714C13.1176 1.72768 11.4577 0 9.41176 0ZM7.55882 9C4.48024 9 2 11.5815 2 14.7857V15.4286C2 16.8549 3.10018 18 4.47059 18H14.3529C15.7233 18 16.8235 16.8549 16.8235 15.4286V14.7857C16.8235 11.5815 14.3433 9 11.2647 9H7.55882Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function VIPIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9236 0.0708775C15.8104 -0.008618 15.6676 -0.0221876 15.5435 0.0349557L6.63191 4.13883L6.63135 11.462L15.5435 15.5665C15.6676 15.6236 15.8104 15.61 15.9236 15.5299C16.0368 15.4498 16.1049 15.315 16.1049 15.1695V0.431906C16.1049 0.286446 16.0379 0.150373 15.9236 0.0708775Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function LeaderboardIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 8H11V16H7V8ZM1 12H5V16H1V12ZM13 4H17V16H13V4Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function CreatorIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L11.09 6.26L16 7L11.09 7.74L9 13L6.91 7.74L2 7L6.91 6.26L9 1Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM10 13H8V8H10V13ZM10 6H8V4H10V6Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM10 15H8V13H10V15ZM11.07 8.25L10.5 8.82C10.18 9.14 10 9.5 10 10H8C8 9.18 8.32 8.43 8.85 7.9L9.77 6.98C10.13 6.62 10.13 6.02 9.77 5.66C9.41 5.3 8.81 5.3 8.45 5.66L7.88 6.23L6.47 4.82L7.04 4.25C8.22 3.07 10.08 3.07 11.26 4.25C12.44 5.43 12.44 7.29 11.26 8.47L11.07 8.25Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function BugIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 7H16V9H14V11H16V13H14C14 14.66 12.66 16 11 16H7C5.34 16 4 14.66 4 13H2V11H4V9H2V7H4C4 5.34 5.34 4 7 4H11C12.66 4 14 5.34 14 7ZM12 7C12 6.45 11.55 6 11 6H7C6.45 6 6 6.45 6 7V13C6 13.55 6.45 14 7 14H11C11.55 14 12 13.55 12 13V7Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function FeedbackIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0.538863C8.919 0.53605 8.82337 0.534363 8.72719 0.534363C4.00894 0.534363 0.164812 4.27668 0.0005625 8.95499L0 8.97017C0.00320475 10.974 0.752827 12.9049 2.10262 14.3859L2.097 14.3792C1.9035 15.512 1.56544 16.5268 1.098 17.4656L1.12669 17.4015C2.43 17.2901 3.62363 16.9149 4.68563 16.3299L4.6395 16.353C5.89781 17.0139 7.38844 17.4015 8.97019 17.4015H9.00169H9C9.08438 17.4043 9.18394 17.406 9.2835 17.406C13.9995 17.406 17.8414 13.6625 17.9994 8.9848L18 8.97017C17.8352 4.27668 13.9911 0.534925 9.27281 0.534925C9.17663 0.534925 9.08156 0.536613 8.9865 0.539425L9.00056 0.538863H9ZM4.53881 10.5761C4.09514 10.5761 3.66964 10.3999 3.35591 10.0861C3.04219 9.77241 2.86594 9.34691 2.86594 8.90324C2.86594 8.45956 3.04219 8.03406 3.35591 7.72034C3.66964 7.40661 4.09514 7.23036 4.53881 7.23036C4.98249 7.23036 5.40799 7.40661 5.72171 7.72034C6.03544 8.03406 6.21169 8.45956 6.21169 8.90324C6.21169 9.34691 6.03544 9.77241 5.72171 10.0861C5.40799 10.3999 4.98249 10.5761 4.53881 10.5761ZM9 10.5761C8.55633 10.5761 8.13082 10.3999 7.8171 10.0861C7.50337 9.77241 7.32713 9.34691 7.32713 8.90324C7.32713 8.45956 7.50337 8.03406 7.8171 7.72034C8.13082 7.40661 8.55633 7.23036 9 7.23036C9.44367 7.23036 9.86918 7.40661 10.1829 7.72034C10.4966 8.03406 10.6729 8.45956 10.6729 8.90324C10.6729 9.34691 10.4966 9.77241 10.1829 10.0861C9.86918 10.3999 9.44367 10.5761 9 10.5761ZM13.4612 10.5761C13.0175 10.5761 12.592 10.3999 12.2783 10.0861C11.9646 9.77241 11.7883 9.34691 11.7883 8.90324C11.7883 8.45956 11.9646 8.03406 12.2783 7.72034C12.592 7.40661 13.0175 7.23036 13.4612 7.23036C13.9049 7.23036 14.3304 7.40661 14.6441 7.72034C14.9578 8.03406 15.1341 8.45956 15.1341 8.90324C15.1341 9.34691 14.9578 9.77241 14.6441 10.0861C14.3304 10.3999 13.9049 10.5761 13.4612 10.5761Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.40981 0L2 3.17981C2 14.8196 9.40981 18 9.40981 18C9.40981 18 16.8196 14.8202 16.8196 3.17981L9.40981 0ZM10.4071 9.28519V12.9977H8.40463V9.28519C7.51194 8.88863 6.90106 8.01056 6.90106 6.98906C6.90114 6.53812 7.02294 6.09556 7.25362 5.70808C7.48429 5.3206 7.81527 5.00257 8.21165 4.78754C8.60803 4.57252 9.0551 4.46848 9.50568 4.48639C9.95627 4.50431 10.3937 4.64352 10.7717 4.88933C11.1498 5.13515 11.4545 5.47846 11.6536 5.88303C11.8528 6.2876 11.9391 6.73843 11.9034 7.18796C11.8677 7.63749 11.7113 8.06904 11.4507 8.43707C11.1901 8.80511 10.835 9.09598 10.4229 9.279L10.4071 9.28519Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}
