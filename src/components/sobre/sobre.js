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
                                <a href="https://www.linkedin.com/in/igor-silva-29b648292/" target="_blank">
                                    <button class="profile-button">
                                        Meu LinkedIn
                                    </button>
                                </a>
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
                            Sou um desenvolvedor com experiência prática na construção de aplicações web full stack, incluindo projetos como clones do YouTube e do WhatsApp.
                            Eu me especializo em desenvolvimento front-end com React e, embora tenha experiência em desenvolvimento back-end com Node.js, ainda estou aprimorando minhas habilidades nessa área.
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
                                <a href="https://www.linkedin.com/in/igor-silva-29b648292/" target="_blank">
                                    <button class="profile-button">
                                        My LinkedIn
                                    </button>
                                </a>
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
                            I'm a developer with hands-on experience building full-stack web applications, including projects like a YouTube and WhatsApp clone.
                            I specialize in front-end development with React, and while I have experience in back-end development with Node.js, I'm still enhancing my skills in that area.
                        </p>
                    </div>
                </>
            }
        </div>
    )
}

export default Sobre;