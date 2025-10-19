"use client";

import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({
    children,
    style
  }:
  {
    children: React.ReactNode,
    style: string
  })
  {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
      router.back();
    }, [router]);

    const onClick: MouseEventHandler = useCallback(
      (e) => {
        if (e.target === overlay.current || e.target === wrapper.current) {
          if (onDismiss) onDismiss();
        }
      },
      [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === "Escape") onDismiss();
      },
      [onDismiss]
    );

    useEffect(() => {
      document.addEventListener("keydown", onKeyDown);
      // Disable background scroll when modal is open
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener("keydown", onKeyDown);
        // Re-enable background scroll when modal is closed
        document.body.style.overflow = 'unset';
      };
    }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className={style}
      >
        {children}
      </div>
    </div>
  );
}