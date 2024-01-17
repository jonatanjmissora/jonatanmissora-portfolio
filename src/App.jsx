import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaCodepen,
  FaHospitalSymbol,
  FaArrowUp
} from "react-icons/fa";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import perfilImg from "./img/perfil.webp";
import proyecto1 from "./img/proyecto1.webp";
import proyecto2 from "./img/proyecto2.webp";
import proyecto3 from "./img/proyecto3.webp";
import proyecto4 from "./img/proyecto4.webp";
import proyecto5 from "./img/proyecto5.webp";
import proyecto6 from "./img/proyecto6.webp";
import "./index.css";

export default function App() {
  const pagContRef = useRef();
  const navRef = useRef();
  const pag1Ref = useRef();
  const pag2Ref = useRef();
  const pag3Ref = useRef();

  return (
    <>
      <Header
        pagContRef={pagContRef}
        navRef={navRef}
        pag1Ref={pag1Ref}
        pag2Ref={pag2Ref}
        pag3Ref={pag3Ref}
      />
      <Main
        pagContRef={pagContRef}
        navRef={navRef}
        pag1Ref={pag1Ref}
        pag2Ref={pag2Ref}
        pag3Ref={pag3Ref}
      />
      <Redes />
    </>
  );
}

const Header = ({ pagContRef, navRef, pag1Ref, pag2Ref, pag3Ref }) => {
  const handlePagination = (page) => {
    if (page === "principal") {
      pagContRef.current.style.transform = "translateX(0%)";
      navRef.current.style.left = "0rem";
      pag1Ref.current.style.backgroundColor = "rgba(255, 100, 0, 0.95)";
      pag2Ref.current.style.backgroundColor = "gray";
      pag3Ref.current.style.backgroundColor = "gray";
    }
    if (page === "proyectos") {
      pagContRef.current.style.transform = "translateX(-33.9%)";
      navRef.current.style.left = "33%";
      pag1Ref.current.style.backgroundColor = "gray";
      pag2Ref.current.style.backgroundColor = "rgba(255, 100, 0, 0.95)";
      pag3Ref.current.style.backgroundColor = "gray";
    }
    if (page === "contacto") {
      pagContRef.current.style.transform = "translateX(-67.7%)";
      navRef.current.style.left = "67.7%";
      pag1Ref.current.style.backgroundColor = "gray";
      pag2Ref.current.style.backgroundColor = "gray";
      pag3Ref.current.style.backgroundColor = "rgba(255, 100, 0, 0.95)";
    }
  };

  const handleHamburguer = () => {
    document.querySelector(".hamb-nav").classList.toggle("animado");
    const hambLinks = document.querySelectorAll(".hamb-link");
    hambLinks.forEach((hambLink) => {
      hambLink.classList.toggle("animado");
    });
  };

  const handleHambLink = (nombre) => {
    let posY = 0;
    if (nombre === "proyectos") posY = 900;
    if (nombre === "contacto") posY = 3000;
    window.scrollTo(0, posY);
    document.querySelector(".hamb-nav").classList.toggle("animado");
    const hambLinks = document.querySelectorAll(".hamb-link");
    hambLinks.forEach((hambLink) => {
      hambLink.classList.toggle("animado");
    });
  };

  return (
    <header className="header-container">
      <h1 className="logo">Portfolio</h1>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="link" onClick={() => handlePagination("principal")}>
            Principal
          </li>
          <li className="link" onClick={() => handlePagination("proyectos")}>
            Proyectos
          </li>
          <li className="link" onClick={() => handlePagination("contacto")}>
            Contacto
          </li>
        </ul>
        <div className="link-selected" ref={navRef}></div>
      </nav>
      <div className="hamb-container">
        <div className="icon-box" onClick={handleHamburguer}>
          <FaBars />
        </div>
        <nav className="hamb-nav">
          <ul className="hamb-list">
            <li
              className="hamb-link"
              style={{ "--i": 1 }}
              onClick={() => handleHambLink("principal")}
            >
              Principal
            </li>
            <li
              className="hamb-link"
              style={{ "--i": 2 }}
              onClick={() => handleHambLink("proyectos")}
            >
              Proyectos
            </li>
            <li
              className="hamb-link"
              style={{ "--i": 3 }}
              onClick={() => handleHambLink("contacto")}
            >
              Contacto
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Main = ({ pagContRef, navRef, pag1Ref, pag2Ref, pag3Ref }) => {
  console.log("MAIN");
  return (
    <main className="main-container">
      <section className="pages-container" ref={pagContRef}>
        <Principal />
        <ListaProyectos />
        <Contacto />
      </section>
      <section className="bottom-container">
        <ListCharts />
        <Paginacion
          pagContRef={pagContRef}
          navRef={navRef}
          pag1Ref={pag1Ref}
          pag2Ref={pag2Ref}
          pag3Ref={pag3Ref}
        />
      </section>
    </main>
  );
};

const Principal = () => {
  console.log("PRINCIPAL");
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="principal-container">
      <div className="user-img">
        <div className="border-up"></div>
        <img className="user-img-lg" src={perfilImg} alt="" />
        <div className="border-down"></div>
      </div>
      <div className="user-info">
        <div className="hero-container">
          <div className="titulo1">
            <span style={{ "--i": 1 }}>H</span>
            <span style={{ "--i": 2 }}>o</span>
            <span style={{ "--i": 3 }}>l</span>
            <span style={{ "--i": 4 }}>a</span>
            <span style={{ "--i": 4.7 }}>,</span>
            <span style={{ "--i": 5 }}> </span>
            <span style={{ "--i": 6 }}>s</span>
            <span style={{ "--i": 7 }}>o</span>
            <span style={{ "--i": 8 }}>y</span>
            <span style={{ "--i": 9 }}> </span>
            <span className="primary" style={{ "--i": 10 }}>
              J
            </span>
            <span className="primary" style={{ "--i": 11 }}>
              o
            </span>
            <span className="primary" style={{ "--i": 12 }}>
              n
            </span>
            <span className="primary" style={{ "--i": 13 }}>
              a
            </span>
            <span className="primary" style={{ "--i": 14 }}>
              t
            </span>
            <span className="primary" style={{ "--i": 15 }}>
              a
            </span>
            <span className="primary" style={{ "--i": 16 }}>
              n
            </span>
            <span className="primary" style={{ "--i": 17 }}>
              {" "}
            </span>
            <span className="primary" style={{ "--i": 18 }}>
              M
            </span>
            <span className="primary" style={{ "--i": 19.2 }}>
              i
            </span>
            <span className="primary" style={{ "--i": 20 }}>
              s
            </span>
            <span className="primary" style={{ "--i": 21 }}>
              s
            </span>
            <span className="primary" style={{ "--i": 22 }}>
              o
            </span>
            <span className="primary" style={{ "--i": 23 }}>
              r
            </span>
            <span className="primary" style={{ "--i": 24 }}>
              a
            </span>
          </div>
          <div className="titulo2">
            <span style={{ "--i": 1 }}>D</span>
            <span style={{ "--i": 2 }}>e</span>
            <span style={{ "--i": 3 }}>s</span>
            <span style={{ "--i": 4 }}>a</span>
            <span style={{ "--i": 5 }}>r</span>
            <span style={{ "--i": 6 }}>r</span>
            <span style={{ "--i": 7 }}>o</span>
            <span style={{ "--i": 8 }}>l</span>
            <span style={{ "--i": 9 }}>l</span>
            <span style={{ "--i": 10 }}>a</span>
            <span style={{ "--i": 11 }}>d</span>
            <span style={{ "--i": 12 }}>o</span>
            <span style={{ "--i": 13 }}>r</span>
            <span style={{ "--i": 14 }}> </span>
            <span className="primary" style={{ "--i": 15 }}>
              W
            </span>
            <span className="primary" style={{ "--i": 16 }}>
              e
            </span>
            <span className="primary" style={{ "--i": 17 }}>
              b
            </span>
          </div>
        </div>
        <div className="speech-container">
          <div className="user-speech">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              assumenda ut iure, recusandae nesciunt minima sed laudantium quas
              dolorem earum velit facere voluptas fuga quis, nam odio ex culpa
              officiis!
            </p>
            {readMore && (
              <>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore vel sit eum architecto voluptatem quos voluptas ea
                  sequi excepturi deserunt. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde, ipsum. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit.
                </p>
                <h3 className="experiencia">Experiencia Laboral</h3>
                <p>
                  Tempore vel sit eum architecto voluptatem quos voluptas ea
                  sequi excepturi deserunt. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde, ipsum.
                </p>
                <p>
                  Tempore vel sit eum architecto voluptatem quos voluptas ea
                  sequi excepturi deserunt. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde, ipsum.
                </p>
              </>
            )}
          </div>
          <button
            className="primary-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Leer menos" : "Leer mas"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Paginacion = ({ pagContRef, navRef, pag1Ref, pag2Ref, pag3Ref }) => {
  console.log("PAGINACION");
  const handlePagination = (page) => {
    if (page === "principal") {
      pagContRef.current.style.transform = "translateX(0%)";
      navRef.current.style.left = "0rem";
      pag1Ref.current.style.backgroundColor = "rgba(255, 100, 0, 0.95)";
      pag2Ref.current.style.backgroundColor = "gray";
      pag3Ref.current.style.backgroundColor = "gray";
    }
    if (page === "proyectos") {
      pagContRef.current.style.transform = "translateX(-33.9%)";
      navRef.current.style.left = "33%";
      pag1Ref.current.style.backgroundColor = "gray";
      pag2Ref.current.style.backgroundColor = "rgba(255, 100, 0, 0.95)";
      pag3Ref.current.style.backgroundColor = "gray";
    }
    if (page === "contacto") {
      pagContRef.current.style.transform = "translateX(-67.7%)";
      navRef.current.style.left = "67.7%";
      pag1Ref.current.style.backgroundColor = "gray";
      pag2Ref.current.style.backgroundColor = "gray";
      pag3Ref.current.style.backgroundColor = "rgba(255, 100, 0, 0.95)";
    }
  };
  const handleChevron = (direction) => {
    if (direction === "left") {
      if (pag1Ref.current.style.backgroundColor === "rgba(255, 100, 0, 0.95)")
        return;

      if (pag2Ref.current.style.backgroundColor === "rgba(255, 100, 0, 0.95)") {
        pagContRef.current.style.transform = "translateX(0%)";
        navRef.current.style.left = "0rem";
        pag1Ref.current.style.backgroundColor = "rgba(255, 100, 0, 0.95)";
        pag2Ref.current.style.backgroundColor = "gray";
        pag3Ref.current.style.backgroundColor = "gray";
      } else {
        pagContRef.current.style.transform = "translateX(-33.9%)";
        navRef.current.style.left = "33%";
        pag1Ref.current.style.backgroundColor = "gray";
        pag2Ref.current.style.backgroundColor = "rgba(255, 100, 0, 0.95)";
        pag3Ref.current.style.backgroundColor = "gray";
      }
    } else {
      if (pag3Ref.current.style.backgroundColor === "rgba(255, 100, 0, 0.95)")
        return;

      if (pag2Ref.current.style.backgroundColor === "rgba(255, 100, 0, 0.95)") {
        pagContRef.current.style.transform = "translateX(-67.7%)";
        navRef.current.style.left = "67.7%";
        pag1Ref.current.style.backgroundColor = "gray";
        pag2Ref.current.style.backgroundColor = "gray";
        pag3Ref.current.style.backgroundColor = "rgba(255, 100, 0, 0.95)";
      } else {
        pagContRef.current.style.transform = "translateX(-33.9%)";
        navRef.current.style.left = "33%";
        pag1Ref.current.style.backgroundColor = "gray";
        pag2Ref.current.style.backgroundColor = "rgba(255, 100, 0, 0.95)";
        pag3Ref.current.style.backgroundColor = "gray";
      }
    }
  };

  return (
    <div className="pagination-container">
      <div className="pag-icon" onClick={() => handleChevron("left")}>
        <FaChevronLeft />
      </div>
      <div
        className="pag-mark dot-principal"
        ref={pag1Ref}
        onClick={() => handlePagination("principal")}
      ></div>
      <div
        className="pag-mark dot-proyectos"
        ref={pag2Ref}
        onClick={() => handlePagination("proyectos")}
      ></div>
      <div
        className="pag-mark dot-contactos"
        ref={pag3Ref}
        onClick={() => handlePagination("contacto")}
      ></div>
      <div className="pag-icon" onClick={() => handleChevron("right")}>
        <FaChevronRight />
      </div>
    </div>
  );
};

const ListCharts = () => {
  console.log("LISTCHARTS");
  const progressBars = [
    { icono: <IoLogoHtml5 />, progreso: "75" },
    { icono: <IoLogoCss3 />, progreso: "80" },
    { icono: <IoLogoJavascript />, progreso: "85" }
  ];
  return (
    <div className="progress-container">
      {progressBars.map((p, indice) => (
        <Chart key={indice} icono={p.icono} progreso={p.progreso} />
      ))}
    </div>
  );

  function Chart({ icono, progreso }) {
    const [chartClass, setChartClass] = useState("progress-chart");

    useEffect(() => {
      const setTime = setTimeout(() => {
        setChartClass(`progress-chart progress${progreso}`);
      }, 1000);
      return () => clearTimeout(setTime);
    }, []);
    return (
      <div className={chartClass}>
        <div className="progress-inner">
          <div className="icon-box">{icono}</div>
        </div>
      </div>
    );
  }
};

const ListaProyectos = () => {
  const proyectosArray = [
    {
      titulo: "Proyecto 1",
      img: proyecto1,
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dignissimos totam aperiam tenetur? Unde dignissimos totam aperiam tenetur"
    },
    {
      titulo: "Proyecto 2",
      img: proyecto2,
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dignissimos totam aperiam tenetur?"
    },
    {
      titulo: "Proyecto 3",
      img: proyecto3,
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dignissimos totam aperiam tenetur? Unde dignissimos totam aperiam tenetur"
    },
    {
      titulo: "Proyecto 4",
      img: proyecto4,
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dignissimos totam aperiam tenetur?"
    },
    {
      titulo: "Proyecto 5",
      img: proyecto5,
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dignissimos totam aperiam tenetur? Unde dignissimos totam aperiam tenetur"
    },
    {
      titulo: "Proyecto 6",
      img: proyecto6,
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dignissimos totam aperiam tenetur?"
    }
  ];
  const divRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );
    if (divRef.current) {
      observer.observe(divRef.current);
      if (isVisible) {
        divRef.current
          .querySelectorAll(".proyecto-container")
          .forEach((proyecto) => {
            proyecto.classList.add("animado");
          });
      } else {
        divRef.current
          .querySelectorAll(".proyecto-container")
          .forEach((proyecto) => {
            proyecto.classList.remove("animado");
          });
      }
    }

    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    };
  }, [isVisible]);
  console.log("LISTAPROYECTOS");
  return (
    <div ref={divRef} className="proyectos-page">
      <h2 className="proyectos-titulo">Mis Proyectos</h2>
      <div className="proyectos-container">
        {proyectosArray.map((p, indice) => (
          <Proyecto key={indice} proyecto={p} numero={indice} />
        ))}
      </div>
    </div>
  );

  function Proyecto({ proyecto, numero }) {
    return (
      <div className="proyecto-container" style={{ "--i": numero }}>
        <div className="proyecto-img">
          <img src={proyecto.img} alt="" />
        </div>
        <div className="proyecto-data">
          <div className="proyecto-header">
            <span className="titulo-nombre">{proyecto.titulo}</span>
            <div className="titulo-iconos">
              <FaCode />
              <FaGithub />
            </div>
          </div>
          <p className="descripcion">{proyecto.descripcion}</p>
        </div>
      </div>
    );
  }
};

const Contacto = () => {
  const divRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );
    if (divRef.current) {
      observer.observe(divRef.current);
      if (isVisible)
        document.querySelector(".contacto-titulo").classList.add("animado");
      else
        document.querySelector(".contacto-titulo").classList.remove("animado");
    }
    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    };
  }, [isVisible]);
  console.log("CONTACTO", isVisible);

  return (
    <div ref={divRef} className="contacto-container">
      <div className="contacto-hero">
        <h2 className="contacto-titulo">Tu nuevo proyecto comienza aquí</h2>
      </div>
      <div className="contacto-main">
        <div className="social-container">
          <p>Seguime</p>
          <div className="social-icons">
            <div className="icon-box">
              <FaFacebook />
            </div>
            <div className="icon-box">
              <FaInstagram />
            </div>
            <div className="icon-box">
              <FaTwitter />
            </div>
            <div className="icon-box">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="mail-container">
          <div className="mail-header row">
            <span>Contacto :</span>
            <span>jonatanjmissora@gmail.com</span>
          </div>
          <div className="inputs-container row">
            <input type="text" placeholder="nombre" />
            <input type="mail" placeholder="e-mail" />
          </div>
          <textarea rows="4"></textarea>
          <div className="button-container row">
            <button className="enviar primary-btn">Enviar</button>
          </div>
        </div>
        <div className="work-container">
          <p>Trabajo</p>
          <div className="work-icons">
            <div className="icon-box">
              <FaLinkedinIn />
            </div>
            <div className="icon-box">
              <FaGithub />
            </div>
            <div className="icon-box">
              <FaCodepen />
            </div>
            <div className="icon-box">
              <FaHospitalSymbol />
            </div>
          </div>
        </div>
      </div>
      <div className="go-top-container">
        <div
          className="icon-box"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};

const Redes = () => {
  console.log("REDES");
  return (
    <div className="redes-container">
      <div className="icon-box gh" value="github">
        <FaGithub className="icon" />
      </div>
      <div className="icon-box tw" value="twitter">
        <FaTwitter className="icon" />
      </div>
      <div className="icon-box in" value="instag">
        <FaInstagram className="icon" />
      </div>
    </div>
  );
};
