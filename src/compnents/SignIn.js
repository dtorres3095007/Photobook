import React,{Component} from 'react'


class SignIn extends Component{
  render(){
    return (
      <section>
        <form className="form">
          <h2>Ingreso</h2>
          <div className="form-group">
          <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text"><i className="icon-user"></i></div>
        </div>
        <input 
          className = "form-control"
            type="email" 
            name="email" 
            placeholder="Email" />

    </div>
    </div>
          <div className="form-group">
          <input 
          className = "form-control"
            type="password" 
            name="password" 
            placeholder="password" />
            </div>
          <button className="btn btn-success btn-block">Log In</button>
          <p className="row text-center">
            <span className="col"><a href="#">Registro</a> </span>
            <span className="col"><a href="#">¿ Olvido de clave ?</a></span>
          </p>
     </form>
      </section>
    )
  }

}
export default SignIn
