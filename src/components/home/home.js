import React from "react";
import './styles.css';

function Home(){
    return (
        <div className="hero-container">
            <div className="intro-container">
                <h1>Procurando um desenvolvedor FullStack?</h1>
                <div id="idioma-selection">
                    <h2>Mudar idioma</h2>
                    <div className="idioma-box-1">
                        <div className="idioma-box-2">
                            <div className="idiomas">
                                <p className="idioma">Img</p>
                                <p className="idioma">Português - BR</p>
                            </div>
                            <div className="idiomas">
                                <p className="idioma">Img</p>
                                <p className="idioma">Inglês</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;