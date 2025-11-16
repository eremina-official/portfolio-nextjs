"use client";
import { useEffect } from "react";

type Ref = React.RefObject<HTMLDivElement | null>;

export default function useClickOutside(
  refs: Ref | Ref[],
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const refList = Array.isArray(refs) ? refs : [refs];

    function listener(event: MouseEvent | TouchEvent) {
      // Ignore clicks inside any of the provided refs
      const clickedInside = refList.some((ref) => ref.current?.contains(event.target as Node));

      if (!clickedInside) handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}
