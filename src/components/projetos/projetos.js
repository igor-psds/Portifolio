import { useContext } from "react";
import './styles.css';
import { LanguageContext } from "../../context/languageContext";

function Projetos(){

    const { language } = useContext(LanguageContext);

    return (
        <div class="content-container">
            {language?
                <>
                    <div class="project-container">
                        <div class="project-content">

                            <div class="position-container right">
                                <div class="project-card">
                                    <div class="project-image project-1"></div>
                                    <p class="project-text-right">
                                        Meu primeiro projeto do curso de programação, nele eu fiz um site do filme do Batman
                                        com página Principal, Fotos, Comentários e Contato. Também deixei o site responsivo. A primeira 
                                        versão foi feita usando apenas HTML e CSS, depois fiz uma versão usando React.
                                    </p>
                                </div>
                            </div>

                            <div class="position-container left">
                                <div class="project-card card-reverse">
                                    <div class="project-image image-reverse project-2"></div>
                                    <p class="project-text-left">
                                        Meu segundo projeto do curso de programação, nele eu fiz uma réplica do YouTube, nele 
                                        implementei um sistema de pesquisa de videos, cadastro de usuário e login. Também usei 
                                        uma API para trazer videos do próprio YouTube para a pagina inicial e para os resultados de 
                                        pesquisa.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </>
            :
                <>
                    <div class="project-container">
                        <div class="project-content">

                            <div class="position-container right">
                                <div class="project-card">
                                    <div class="project-image project-1"></div>
                                    <p class="project-text-right">
                                        My first project of the programing course, in it I did a website for the Batman movie 
                                        with Home, Images, Comments and Contact pages. Made it responsive as well. The first 
                                        version was made only with HTML and CSS, the second version was made with React.
                                    </p>
                                </div>
                            </div>

                            <div class="position-container left">
                                <div class="project-card card-reverse">
                                    <div class="project-image image-reverse project-2"></div>
                                    <p class="project-text-left">
                                        My second project of the programing course, in which I did a YouTube replica, in it I've 
                                        implemented a system for searching videos, sign up and login. Also used an API to bring 
                                        videos from YouTube to the Home page and as search results.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Projetos;