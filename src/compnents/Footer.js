import React, { Component } from 'react';
import gerente from '../Images/gerente.png';
class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="row">
<div className="col-3">
<h2>Redes Sociales</h2>
      <ul className="social">
      <li><a><i className="icon-twitter"></i></a></li>
      <li><a><i className="icon-instagram"></i></a></li>
      <li><a><i className="icon-youtube"></i></a></li>
      <li><a><i className="icon-linkedin"></i></a></li>
      </ul>
</div>
<div className="col-3 gerente">
      <h2>Gerente</h2>
      <img src={gerente} class="rounded" alt="Cinque Terre"/>
      </div>

      <div className="col-3 contactenos">
   <h2>Contactenos</h2>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet veniam eius fugit, deserunt harum consequatur eligendi nostrum a exercitationem aut ducimus, minima accusantium repellendus dolor obcaecati maxime laudantium quisquam!
      </div>
      </div>

      </footer> 

    )
  }
}

export default Footer;
