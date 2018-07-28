import React,{Component} from 'react'


class SignIn extends Component{
  render(){
    return (
      <section>
        <form class="form">
          <h2>Ingreso</h2>
          <div class="form-group">
          <input 
          class = "form-control"
            type="email" 
            name="email" 
            placeholder="Email" />
            </div>
          <div class="form-group">
          <input 
          class = "form-control"
            type="password" 
            name="password" 
            placeholder="password" />
            </div>
          <button class="btn btn-success btn-block">Log In</button>
          <p class="row text-center">
            <span class="col"><a href="#">Registro</a> </span>
            <span class="col"><a href="#">¿ Olvido de clave ?</a></span>
          </p>
     </form>
      </section>
    )
  }

}
export default SignIn
