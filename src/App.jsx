import s from "./app.module.scss";
import { useState, useEffect } from "react";
import azul from "./assets/pepsiAzul.png";
import vermelha from "./assets/pepsiVermelha.png";
import preta from "./assets/pepsiPreta.png";
import logo from "./assets/logoPepsi.png";
import "./app.module.scss";
import "./globalReset.scss";
import facebook from "./assets/facebook.png";
import x from "./assets/x.png";
import instagram from "./assets/instagram.png";

export default function App() {
  const [corFundo, setCorFundo] = useState("azul");
  const [imagem, setImagem] = useState(azul);
  const [altImagem, setAltImagem] = useState("Pepsi Azul");

  // Funções para mudar cor e salvar os dados
  const mudarCorAzul = () => {
    setCorFundo("azul");
    setImagem(azul);
    setAltImagem("Pepsi Azul");
  };

  const mudarCorVermelho = () => {
    setCorFundo("vermelho");
    setImagem(vermelha);
    setAltImagem("Pepsi Vermelha");
  };

  const mudarCorPreto = () => {
    setCorFundo("preto");
    setImagem(preta);
    setAltImagem("Pepsi Preta");
  };

  // Recupera a cor salva do localStorage quando o componente monta
  useEffect(() => {
    const savedColor = localStorage.getItem("corFundo");
    if (savedColor) {
      setCorFundo(savedColor); // Atualiza o estado com a cor salva
    }
  }, []);

  // Salva a cor de fundo no localStorage sempre que ela mudar
  useEffect(() => {
    localStorage.setItem("corFundo", corFundo);
  }, [corFundo]);

  return (
    <div className={`${s.container} ${s[corFundo]}`}>
      <header>
        <div>
          <img src={logo} alt="Logo da Pepsi." />
          <nav>
            <ul>
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>Products</li>
              </a>
              <a href="">
                <li>What's New</li>
              </a>
              <a href="">
                <li>Newsletter</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
            </ul>
          </nav>
        </div>
      </header>
      <div className={s.mainFooter}>
        <main>
          <div className={s.textoImagem}>
            <section>
              <h2>THAT'S WHAT</h2>
              <h1>I LIKE</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                sapiente aspernatur possimus odio accusantium inventore. Vel
                perferendis molestias a unde eum dolorem officia doloremque!
                Doloribus asperiores quas vitae quisquam libero.
              </p>
              <button>VIEW ALL PRODUCTS</button>
            </section>
            <img src={imagem} alt={altImagem} />
          </div>
          <section className={s.imagensEstaticas}>
              <img onClick={mudarCorAzul} src={azul} alt="Imagem Pepsi Azul" />
              <img
                onClick={mudarCorVermelho}
                src={vermelha}
                alt="Imagem Pepsi Vermelha"
              />
              <img
                onClick={mudarCorPreto}
                src={preta}
                alt="Imagem Pepsi Preta"
              />
            </section>
        </main>
        <footer>
          <nav>
            <a href="https://pt-br.facebook.com/">
              <img src={facebook} alt="Logo do Facebook." />
            </a>
            <a href="https://x.com/?lang=pt">
              <img src={x} alt="Logo do X." />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="Logo do Instagram." />
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
