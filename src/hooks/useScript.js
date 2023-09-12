import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useScript = (url) => {
  const path = usePathname();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = false;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [path]);
};

export default useScript;
