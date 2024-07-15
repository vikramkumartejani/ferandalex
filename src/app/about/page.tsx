import React from "react";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="text-white font-clashdisplay-regular">
      <section className="relative h-[400px] md:h-full w-full">
        <img
          src="/assets/section-shape.png"
          alt=""
          className="absolute top-0 md:-top-10 left-0 h-[400px] md:h-full w-full"
        />
        <img
          src="/assets/about-section-bg.jpeg"
          alt=""
          className="h-[400px] md:h-full w-full"
        />
        <img
          src="/assets/DESPRE NOI.svg "
          alt=""
          className=" absolute top-[60%] lg:top-2/3 ml-[5%] w-[60%] lg:w-auto  "
        />
        {/* <h1 className="font-extrabold absolute top-[60%] lg:top-2/3 ml-[5%] uppercase text-[20px] leading-[25px] xl:text-[100px] x;:leading-[96px]">
          DESPRE NOI: <br /> de la planuri la realitate
        </h1> */}
      </section>

      <section className="grid  md:grid-cols-2 lg:pt-[200px] items-center justify-center gap-[80px]  px-[5%] lg:px-0 lg:pl-[5%] max-h-[850px] py-[5%]">
        <div>
          <h3 className="text-[40px] lg:text-[100px] leading-[123px]">
            Misiunea noastra
          </h3>
          <p className="text-[20px] lg:text-[40px] leading-[30px] md:leading-[50px]">
            Suntem o echipa de profesionisti pasionati, dedicati sa construim
            viitorul. Cu o experienta bogata, ne angajam sa depasim asteptarile
            si sa transformam visele in realitate.
          </p>
        </div>

        <div className="hidden lg:block px-0 h-full w-full lg:rounded-l-[77px] overflow-hidden">
          <img
            src="/assets/about-section-bg1.jpeg"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="lg:hidden w-[90%] h-full rounded-[50px] mx-auto overflow-hidden">
          <img
            src="/assets/about-section-bg1.jpeg"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-[40px] lg:pt-[300px] md:space-y-[60px] lg:space-y-[150px] px-[10%]">
        <h2 className="text-[40px] lg:text-[100px] leading-[123px] text-center">
          Cine suntem
        </h2>
        <p className="text-[20px] lg:text-[40px] leading-[30px] md:leading-[50px]">
          Ferandalex, o companie fondată în 2018 de un grup de profesioniști
          pasionați, a pornit cu o viziune clară: construirea unui viitor mai
          bun. <br /> <br /> De la început, Ferandalex s-a concentrat pe
          calitatea excepțională a lucrărilor și pe abordarea transparentă a
          proiectelor. Cu o echipă de arhitecți, ingineri și tehnicieni
          altamente calificați, compania a reușit să construiască case,
          apartamente, clădiri de birouri și spații comerciale care au depășit
          așteptările clienților.
          <br />
          <br />
          La Ferandalex, suntem mai mult decât o companie; suntem o familie - o
          familie unită de pasiune, profesionalism și dorința de a face o
          diferență.
        </p>

        <div className="relative w-full overflow-hidden">
          <img
            src="/assets/about-section-bg2.jpeg"
            alt="Background"
            className="w-full h-auto"
            style={{ height: "auto" }}
          />
          <img
            src="/assets/family.svg"
            alt=""
            className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
          />
          {/* <h1 className="text-[60px] lg:text-[220px] xl:text-[280px] text-start 3xl:text-[320px] leading-none lg:leading-[220px] font-extrabold absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            WE ARE A <span className="text-[#CCE716]">FAMILY</span>
          </h1> */}
        </div>

        <h2 className="text-[40px] lg:text-[100px] leading-[50px] lg:leading-[123px] text-center">
          Angajamentul nostru
        </h2>
      </section>

      <section>
        <div className="relative w-full h-[500px] lg:h-[900px] xl:h-[1000px] 2xl:h-[1100px]  overflow-hidden">
          <img
            src="/assets/about-section-bg3.jpeg"
            alt="About Section Background"
            className="absolute top-0 left-0 w-full h-full object-cover "
          />
        </div>

        <div>
          <p className="text-[20px] px-[10%] py-[15%] lg:text-[40px] leading-[30px] md:leading-[50px]">
            La Ferandalex, ne angajăm să oferim mai mult decât simple
            construcții. Garantăm excelență în fiecare aspect al muncii noastre,
            de la proiectare până la finalizare. <br /> <br /> Calitatea
            excepțională este asigurată prin utilizarea materialelor premium și
            a tehnologiilor de ultimă generație, în timp ce inovația continuă ne
            permite să găsim soluții eficiente și durabile pentru fiecare
            proiect.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
