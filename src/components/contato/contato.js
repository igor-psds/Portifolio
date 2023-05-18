import React from "react";
import './styles.css';

function Contato(){
    return (
        <div className="content-container">
            <div className="form-container">
                <form
                    action="https://formspree.io/f/mayzyzkl"
                    method="POST"
                    id="form"
                >
                    <h3>Entre em contato</h3>

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
            </div>
        </div>
    )
}

export default Contato;