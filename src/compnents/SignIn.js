import React,{Component} from 'react'

class SignIn extends Component{
  render(){
    return (
      <section>
        <form >
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
          <button class="btn btn-success">Enviar</button>
          <p>
            <a href="#">Registro</a> 
            |
            <a href="#">Olvido de clave</a>
          </p>
     </form>
      </section>
    )
  }

}
export default SignIn
