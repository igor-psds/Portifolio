import { useContext } from "react";
import './styles.css';
import { LanguageContext } from "../../context/languageContext";

function Contato(){

    const { language } = useContext(LanguageContext);
    
    return (
        <div className="content-container">
            <div className="form-container">
                {language?
                    <>
                        <form
                            action="https://formspree.io/f/mayzyzkl"
                            method="POST"
                            id="form"
                        >
                            <div className="form-title">
                                <h3>Entre em contato</h3>
                            </div>

                            <fieldset>
                                <input placeholder="Email:" type="email" name="email" />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Nome:" type="name" name="name" />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Telefone:" type="phone" name="phone" />
                            </fieldset>
                            <fieldset>
                                <textarea placeholder="Escreva sua mensagem..." name="message"></textarea>
                            </fieldset>
                            <button type="submit">Enviar</button>
                        </form>
                    </>
                :
                    <>
                        <form
                            action="https://formspree.io/f/mayzyzkl"
                            method="POST"
                            id="form"
                        >
                            <div className="form-title">
                                <h3>Contact me</h3>
                            </div>

                            <fieldset>
                                <input placeholder="Email:" type="email" name="email" />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Name:" type="name" name="name" />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Phone:" type="phone" name="phone" />
                            </fieldset>
                            <fieldset>
                                <textarea placeholder="Type your message..." name="message"></textarea>
                            </fieldset>
                            <button type="submit">Enviar</button>
                        </form>
                    </>
                }
            </div>
        </div>
    )
}

export default Contato;