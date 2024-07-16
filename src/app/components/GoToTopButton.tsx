import React, { useEffect, useState } from "react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 lg:bottom-[80px] lg:right-[80px] flex w-full justify-end ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <button onClick={handleGoToTop}>
        <img src="/assets/up-arrow.svg" alt="Go to top" width="68.38px" />
      </button>
    </div>
  );
};

export default GoToTopButton;
