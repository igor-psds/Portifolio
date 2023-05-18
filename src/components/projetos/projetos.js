import React from "react";
import './styles.css';

function Projetos(){
    return (
        <div class="content-container">
            <div class="project-container">
                <div class="project-content">

                    <div class="position-container right">
                        <div class="project-card">
                            <div class="project-image project-1"></div>
                            <p class="project-text-right">
                                Meu primeiro projeto do curso de programação, nele foi passados 
                                alguns desafios para fazer junto do projeto. Fiz o projeto e completei os desafios que foram 
                                passados, fiquei satisfeito com o resultado. Mais tarde recriei ele usando React.
                            </p>
                        </div>
                    </div>

                    <div class="position-container left">
                        <div class="project-card card-reverse">
                            <div class="project-image image-reverse project-2"></div>
                            <p class="project-text-left">
                                Meu segundo projeto do curso de programação, nele foi passado 6 desafios para fazer 
                                junto do projeto, 4 deles envolviam mandar informações para o back end ou pegar e usar elas. 
                                Apos muita pesquisa e estudo conclui todos os desafios.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Projetos;