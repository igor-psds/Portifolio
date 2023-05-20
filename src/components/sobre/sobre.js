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
                                <a href="https://github.com/igor-psds" target="_blank">
                                    <button class="profile-button">
                                        Meu Github
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
                            I've been having these weird thoughts lately. Like, is any of this for real or not?
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
                                <a href="https://github.com/igor-psds" target="_blank">
                                    <button class="profile-button">
                                        My Github
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
                            I've been having these weird thoughts lately. Like, is any of this for real or not?
                        </p>
                    </div>
                </>
            }
        </div>
    )
}

export default Sobre;