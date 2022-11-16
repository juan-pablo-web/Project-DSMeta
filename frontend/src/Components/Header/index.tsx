import logo from "../../assets/img/logo.svg";
import "./styles.css"
function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por: 
          <a href="https://github.com/juan-pablo-web"> git.juan-pablo-web</a>
          <p></p> Com colaboração de:
          <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
        </p>
      </div>
    </header>
  )
}


export default Header
