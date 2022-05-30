import { useEffect } from "react";

export const useSquare = (id: string) => {
  return useEffect(() => {
    const el = document.getElementById(id);
    if (el) el.style.height = `${el.offsetWidth}px`;
  }, []);
};
