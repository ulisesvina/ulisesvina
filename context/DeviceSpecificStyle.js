import { createContext, useState, useEffect, useContext } from "react";

export const DeviceSpecificStyleContext = createContext();

export const useDeviceSpecificStyle = () =>
  useContext(DeviceSpecificStyleContext);

export const DeviceSpecificStyleProvider = ({ children }) => {
  const [isAtTop, setIsAtTop] = useState(true),
    [width, setWidth] = useState(768),
    [isMobile, setIsMobile] = useState(true);

  const handleWindowSizeChange = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowSizeChange);
      handleWindowSizeChange();

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 100;
      setIsAtTop(atTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DeviceSpecificStyleContext.Provider value={{ isAtTop, isMobile }}>
      {children}
    </DeviceSpecificStyleContext.Provider>
  );
};
