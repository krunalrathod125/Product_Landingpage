import React from "react";

const bannerDatabase = {
  Kesar_Chandan: {
    left: "/Benefits - Kesar Chandan.webp",
    right: "/Aura - Kesar Chanda.webp",
  },
  Mogra: {
    left: "/Benefits - Mogra.webp",
    right: "/Aura - Mogra.webp",
  },
  Oudh: {
    left: "/Benefits - Oudh.webp",
    right: "/Aura - Oudh.webp",
  },
  Royal_London: {
    left: "/Benefits - Royal London.webp",
    right: "/Aura - London.webp",
  },
  Rose: {
    left: "/Benefits - Rose.webp",
    right: "/Aura - Rose.webp",
  },
  Sukhad_Chandan: {
    left: "/Benefits - Sukhad.webp",
    right: "/Aura - Sukhad chandan.webp",
  },
};

const TwoPostImages = ({ variant = "Kesar_Chandan" }) => {
  const current = bannerDatabase[variant] || bannerDatabase["Kesar_Chandan"];

  return (
    <section className="flex flex-col md:flex-row w-full h-full">
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src={current.left}
          alt={`${variant} Left`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src={current.right}
          alt={`${variant} Right`}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default TwoPostImages;
