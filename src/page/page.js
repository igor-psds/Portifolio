import { React, useRef} from "react";
import './styles/header.css';
import Home from "../components/home/home";
import Sobre from "../components/sobre/sobre";
import Projetos from "../components/projetos/projetos";
import Contato from "../components/contato/contato";

function Page() {

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
            <div id="div-header" className="handler-pull">
                <header>
                        <nav>
                            <ul>
                                <li onClick={() => scrollDown(homeSection)}>Home</li>
                                <li onClick={() => scrollDown(sobreSection)}>Sobre</li>
                                <li onClick={() => scrollDown(projetosSection)}>Projetos</li>
                                <li onClick={() => scrollDown(contatoSection)}>Contato</li>
                            </ul>
                        </nav>
                </header>
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