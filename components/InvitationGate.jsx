"use client";

import { useEffect, useState } from "react";
import InvitationCover from "./InvitationCover";

export default function InvitationGate({ children }) {
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const handleOpen = () => {
    if (closing) return;
    setClosing(true);
    // Match the .closing animation duration in InvitationCover.module.css
    setTimeout(() => setOpened(true), 700);
  };

  return (
    <>
      {!opened && <InvitationCover onOpen={handleOpen} closing={closing} />}
      <div 
      style={{visibility:opened || closing ? "visible" : "hidden"}}
      aria-hidden={!opened && !closing}>
      {children}
      </div>
    </>
  );
}