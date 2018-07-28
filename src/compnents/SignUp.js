import React,{Component} from 'react'

class SignUp extends Component{
  render(){
    return (
      <section>
        <form className="form"> 
          <h2>Registro</h2>
         
          <div className="form-group">
          <input
            placeholder="Nombre"
            className = "form-control" 
            type="text"
            name="name"
            id="name"
          />
          </div>
          <div className="form-group">
               <input
            placeholder="Apellido"
            className = "form-control" 
            type="text"
            name="lastname"
            id="lastname"
          />
          </div>
          <div className="form-group">
          <input
            placeholder="Correo"
            className = "form-control" 
            type="email"
            name="email"
            id="email"
          />
          </div>
          <div className="form-group">
            <input
            placeholder="Clave"
            className = "form-control" 
            type="password"
            name="password"
            id="password"
          />
          </div>
          <div className="form-group">
    
          <input
            placeholder="Confirmar clave"
            className = "form-control" 
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
          </div>
          <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="terms"
            />
            Acepto términos y condiciones
          </label>
          </div>
      
          <button className="btn btn-success">Enviar</button>

        </form>
      </section>
    )
  }

}
export default SignUp
