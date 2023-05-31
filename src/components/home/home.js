import {useContext} from "react";
import './styles.css';
import FlagUS from "../../midia/US_flag.jpg";
import FlagBr from "../../midia/BR_flag.jpg";
import { LanguageContext } from "../../context/languageContext";

function Home(){

    const {language, setLanguage} = useContext(LanguageContext);

    return (
        <div className="hero-container">
            <div className="intro-container">
                {language?
                    <>
                        <h1>Procurando um Desenvolvedor FullStack?</h1>
                        <div id="idioma-selection">
                            <h2>Mudar idioma</h2>
                            <div className="idioma-box-1">
                                <div className="idioma-box-2">
                                    <div className="idiomas" onClick={() => setLanguage(true)}>
                                        <img className="flag-idioma" alt="" src={FlagBr} />
                                        <p className="idioma">Português - BR</p>
                                    </div>
                                    <div className="idiomas" onClick={() => setLanguage(false)}>
                                        <img className="flag-idioma" alt="" src={FlagUS} />
                                        <p className="idioma">Inglês</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                :
                    <>
                        <h1>Looking for a Full Stack Developer?</h1>
                        <div id="idioma-selection">
                            <h2>Change Language</h2>
                            <div className="idioma-box-1">
                                <div className="idioma-box-2">
                                    <div className="idiomas" onClick={() => setLanguage(true)}>
                                        <img className="flag-idioma" alt="" src={FlagBr} />
                                        <p className="idioma">Portuguese - BR</p>
                                    </div>
                                    <div className="idiomas" onClick={() => setLanguage(false)}>
                                        <img className="flag-idioma" alt="" src={FlagUS} />
                                        <p className="idioma">English</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Home;