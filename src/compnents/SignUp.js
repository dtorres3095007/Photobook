import React,{Component} from 'react'

class SignUp extends Component{
  render(){
    return (
      <section>
        <form class="form"> 
          <h2>Registro</h2>
         
          <div class="form-group">
          <input
            placeholder="Nombre"
            class = "form-control" 
            type="text"
            name="name"
            id="name"
          />
          </div>
          <div class="form-group">
               <input
            placeholder="Apellido"
            class = "form-control" 
            type="text"
            name="lastname"
            id="lastname"
          />
          </div>
          <div class="form-group">
          <input
            placeholder="Correo"
            class = "form-control" 
            type="email"
            name="email"
            id="email"
          />
          </div>
          <div class="form-group">
            <input
            placeholder="Clave"
            class = "form-control" 
            type="password"
            name="password"
            id="password"
          />
          </div>
          <div class="form-group">
    
          <input
            placeholder="Confirmar clave"
            class = "form-control" 
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
          </div>
          <div class="form-group">
          <label>
            <input
              type="checkbox"
              name="terms"
            />
            Acepto términos y condiciones
          </label>
          </div>
      
          <button class="btn btn-success">Enviar</button>

        </form>
      </section>
    )
  }

}
export default SignUp
