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
                                        Para o meu primeiro projeto, desenvolvi um site dedicado ao filme do Batman,
                                        com páginas de Início, Imagens, Comentários e Contato. Garantí que o site fosse totalmente 
                                        responsivo para diferentes dispositivos. A versão inicial foi feita apenas com HTML e CSS, 
                                        enquanto a segunda versão foi criada com React.
                                    </p>
                                </div>
                            </div>

                            <div class="position-container left">
                                <div class="project-card card-reverse">
                                    <div class="project-image image-reverse project-2"></div>
                                    <p class="project-text-left">
                                        Para o meu segundo projeto, desenvolvi uma réplica do YouTube com um sistema de busca de vídeos, 
                                        cadastro de usuários e funcionalidade de login. Além disso, integrei uma API para buscar vídeos 
                                        do YouTube, exibindo-os na página inicial e como resultados de busca.
                                    </p>
                                </div>
                            </div>

                            <div class="position-container right">
                                <div class="project-card">
                                    <div class="project-image project-3"></div>
                                    <p class="project-text-right">
                                        Para o meu terceiro projeto, desenvolvi uma réplica do WhatsApp, utilizando Socket.IO para 
                                        implementar funcionalidades de chat privado e em grupo em tempo real. Também foquei em 
                                        criar uma interface intuitiva e garantir uma experiência de troca de mensagens fluida.
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
                                        For my first project,  I developed a website dedicated to the Batman movie, 
                                        featuring Home, Images, Comments, and Contact pages. I ensured the site was fully responsive for different devices.
                                        The initial version was built using only HTML and CSS, while the second version was created with React.
                                    </p>
                                </div>
                            </div>

                            <div class="position-container left">
                                <div class="project-card card-reverse">
                                    <div class="project-image image-reverse project-2"></div>
                                    <p class="project-text-left">
                                        For my second project, I developed a YouTube replica that features a video search system, 
                                        user registration, and login functionality. Additionally, I integrated an API to fetch videos 
                                        from YouTube, displaying them on the Home page and as search results.
                                    </p>
                                </div>
                            </div>

                            <div class="position-container right">
                                <div class="project-card">
                                    <div class="project-image project-3"></div>
                                    <p class="project-text-right">
                                        For my third project, I developed a WhatsApp replica, using Socket.IO to implement 
                                        real-time private and group chat functionality. I also focused on creating an intuitive user 
                                        interface and ensuring a smooth messaging experience.
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