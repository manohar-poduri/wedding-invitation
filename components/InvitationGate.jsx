"use client";

import { useEffect, useState } from "react";
import InvitationCover from "./InvitationCover";

export default function InvitationGate({ children }) {
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Prevent the browser from silently restoring a previous scroll
    // position (e.g. from a prior visit) underneath the cover screen.
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const handleOpen = () => {
    if (closing) return;
    // Fire this first, synchronously within the click handler, so the
    // audio.play() call in FloatingActions still counts as triggered by
    // a direct user gesture (required by browser autoplay policies).
    window.dispatchEvent(new Event("invitation:opened"));
    // Always reveal starting from the top of the page, regardless of
    // where the page happened to be scrolled to underneath the cover.
    window.scrollTo(0, 0);
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