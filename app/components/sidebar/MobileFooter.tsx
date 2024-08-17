"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import Avatar from "../Avatar";
import { User } from "@prisma/client";
import SettingsModal from "./SettingsModal";
import { useState } from "react";

interface MobileFooterProps {
  currentUser: User;
}

const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  const [isModOpen, setIsModOpen] = useState(false);
  if (isOpen) {
    return null;
  }
  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isModOpen}
        onClose={() => {
          setIsModOpen(false);
        }}
      />
      <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
        {routes.map((route) => (
          <MobileItem
            key={route.label}
            label={route.label}
            active={route.active}
            href={route.href}
            onClick={route.onClick}
            icon={route.icon}
          />
        ))}
        <Avatar user={currentUser} />
      </div>
    </>
  );
};

export default MobileFooter;
