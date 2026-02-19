import "./style.css";
import "./main.scss";

document.querySelector("#app").innerHTML = `
  <button type="button" class="mon-bouton-exemple">
    Ceci est un bouton avec un sélecteur personnalisé <br/>qui @extend les styles du DSFR
  </button>
`;
