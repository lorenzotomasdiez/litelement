import { css, html, LitElement } from "lit";

export class NeoForm extends LitElement{
    static get properties(){
        return{
            nombre:{type:String},
            apellido:{type:String},
            edad:{type:Number}
        }
    }
    static get styles(){
        return css`
            input{
                color:red;
                font-size:20px;
            }
        `;
    }
    constructor(){
        super();
        this.nombre = "dante";

    }
    render(){
        return html`
            <input type="text" @input="${this.handleNombre}" value="${this.nombre}"placeholder="nombre"/>
            <br/>
            hola ${this.nombre}
            <br/>
            <button @click="${this.eventoMagico}">press me!<button/>
        `;
    }
    handleNombre(e){
        this.nombre=e.target.value;
    }
    eventoMagico(){
        console.log(this.nombre);
    }
}
window.customElements.define('neo-form', NeoForm);