import { React, useContext, useRef} from "react";
import './styles/header.css';
import Home from "../components/home/home";
import Sobre from "../components/sobre/sobre";
import Projetos from "../components/projetos/projetos";
import Contato from "../components/contato/contato";
import ArrowDown from "../midia/down-arrow.png";
import { LanguageContext } from "../context/languageContext";

function Page() {

    const { language } = useContext(LanguageContext);

    const homeSection = useRef(null)
    const sobreSection = useRef(null)
    const projetosSection = useRef(null)
    const contatoSection = useRef(null)

    const scrollDown = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return(
        <>
            <div className="pull-header">
                <div id="div-header">
                    <header>
                            <nav>
                                <ul>
                                    {language?
                                        <>
                                            <li onClick={() => scrollDown(homeSection)}>Home</li>
                                            <li onClick={() => scrollDown(sobreSection)}>Sobre</li>
                                            <li onClick={() => scrollDown(projetosSection)}>Projetos</li>
                                            <li onClick={() => scrollDown(contatoSection)}>Contato</li>
                                        </>
                                    :
                                        <>
                                            <li onClick={() => scrollDown(homeSection)}>Home</li>
                                            <li onClick={() => scrollDown(sobreSection)}>About</li>
                                            <li onClick={() => scrollDown(projetosSection)}>Projects</li>
                                            <li onClick={() => scrollDown(contatoSection)}>Contact</li>
                                        </>

                                    }
                                </ul>
                            </nav>
                    </header>
                </div>
                <img className="arrow-header" alt="" src={ArrowDown} />
            </div>

            <div ref={homeSection}>
                <Home />
            </div>
            <div ref={sobreSection}>
                <Sobre />
            </div>
            <div ref={projetosSection}>
                <Projetos />
            </div>
            <div ref={contatoSection}>
                <Contato />
            </div>
        </>
    )
}

export default Page;