import { useContext } from "react";
import './styles.css';
import { LanguageContext } from "../../context/languageContext";

function Sobre(){

    const { language } = useContext(LanguageContext);

    return (
        <div class="content-container">
            {language?
                <>
                    <div class="profile-container">
                        <div class="profile-content">
                            <div class="profile-card">
                                <div class="profile-image"></div>
                                <span class="name-text">Igor Silva</span>
                                <a href="https://github.com/igor-psds" target="_blank">
                                    <button class="profile-button">
                                        Meu Github
                                    </button>
                                </a>
                                {/* <a href="https://github.com/igor-psds" target="_blank">
                                    <button class="profile-button">
                                        Meu Github
                                    </button>
                                </a> */}
                                <div class="divider"></div>
                                <div class="icons-container">
                                    <div class="icon-item image-1"></div>
                                    <div class="icon-item image-2"></div>
                                    <div class="icon-item image-3"></div>
                                </div>
                            </div>
                        </div>

                        <p class="profile-sinopse">
                            Olá, meu nome é Igor.<br/>
                            Estou estudando para ser um Desenvolvedor Full Stack e em busca da minha primeira oportunidade de trabalho na área.
                            Possuo o Ensino Médio completo. Fluente em inglês, estudei no Canadá na ILAC por 3 meses, alcançando o nivel de inglês altamente avançado.
                        </p>
                    </div>
                </>
            :
                <>
                    <div class="profile-container">
                        <div class="profile-content">
                            <div class="profile-card">
                                <div class="profile-image"></div>
                                <span class="name-text">Igor Silva</span>
                                <a href="https://github.com/igor-psds" target="_blank">
                                    <button class="profile-button">
                                        My Github
                                    </button>
                                </a>
                                {/* <a href="https://github.com/igor-psds" target="_blank">
                                    <button class="profile-button">
                                        My Github
                                    </button>
                                </a> */}
                                <div class="divider"></div>
                                <div class="icons-container">
                                    <div class="icon-item image-1"></div>
                                    <div class="icon-item image-2"></div>
                                    <div class="icon-item image-3"></div>
                                </div>
                            </div>
                        </div>

                        <p class="profile-sinopse">
                            Hi, my name is Igor.<br/>
                            I'm studying to become a Full Stack Developer and looking for my first job opportunity in the area.
                            I've completed High School. Fluent in Englsih, studied in Canada at ILAC for 3 months, reaching the level of High-Advanced English.
                        </p>
                    </div>
                </>
            }
        </div>
    )
}

export default Sobre;