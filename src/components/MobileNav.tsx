export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#090f1e] border-t border-white/5 z-50 md:hidden">
      <div className="flex">
        <MobileNavItem icon={<MenuIcon />} label="Menu" isActive />
        <MobileNavItem icon={<ResourcesIcon />} label="Resources" />
        <MobileNavItem icon={<UploadIcon />} label="Upload" />
        <MobileNavItem icon={<DiscordIcon />} label="Discord" />
        <MobileNavItem icon={<ProfileIcon />} label="Profile" />
      </div>
    </div>
  );
}

interface MobileNavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function MobileNavItem({ icon, label, isActive = false }: MobileNavItemProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-2 cursor-pointer">
      <div
        className={`w-full h-1 mb-1 transition-all duration-300 ${isActive ? "bg-[#4383ff]" : "bg-transparent"}`}
      />
      <div className="mb-1">{icon}</div>
      <span className="text-xs font-bold text-white">{label}</span>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9099 0H0.540081C0.241802 0 0 0.241802 0 0.540081V2.60769C0 2.90597 0.241802 3.14777 0.540081 3.14777H16.9099C17.2082 3.14777 17.45 2.90597 17.45 2.60769V0.540081C17.45 0.241802 17.2082 0 16.9099 0Z"
        fill="#6F7D9D"
      />
      <path
        d="M12.533 7.42615H1.12016C0.821881 7.42615 0.580078 7.66795 0.580078 7.96623V10.0338C0.580078 10.3321 0.821881 10.5739 1.12016 10.5739H12.533C12.8312 10.5739 13.0731 10.3321 13.0731 10.0338V7.96623C13.0731 7.66795 12.8312 7.42615 12.533 7.42615Z"
        fill="#6F7D9D"
      />
      <path
        d="M16.9099 14.8522H0.540081C0.241802 14.8522 0 15.094 0 15.3923V17.4599C0 17.7581 0.241802 17.9999 0.540081 17.9999H16.9099C17.2082 17.9999 17.45 17.7581 17.45 17.4599V15.3923C17.45 15.094 17.2082 14.8522 16.9099 14.8522Z"
        fill="#6F7D9D"
      />
      <path
        d="M20.266 8.22181C20.402 8.30106 20.5148 8.41457 20.5932 8.55104C20.6717 8.6875 20.7129 8.84214 20.7129 8.99953C20.7129 9.15692 20.6717 9.31156 20.5932 9.44802C20.5148 9.58449 20.402 9.698 20.266 9.77724L16.5052 11.9664C16.3685 12.046 16.2131 12.0881 16.0549 12.0885C15.8966 12.089 15.7411 12.0476 15.6039 11.9688C15.4667 11.8899 15.3527 11.7763 15.2734 11.6393C15.1942 11.5023 15.1524 11.3469 15.1523 11.1887V6.8113C15.1522 6.65297 15.1939 6.49742 15.2731 6.36033C15.3523 6.22324 15.4663 6.10947 15.6035 6.0305C15.7407 5.95153 15.8963 5.91014 16.0547 5.91053C16.213 5.91091 16.3684 5.95305 16.5052 6.03268L20.266 8.22181Z"
        fill="#6F7D9D"
      />
    </svg>
  );
}

function ResourcesIcon() {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1L9.545 6.91L16 8L9.545 9.09L8 15L6.455 9.09L0 8L6.455 6.91L8 1Z"
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
