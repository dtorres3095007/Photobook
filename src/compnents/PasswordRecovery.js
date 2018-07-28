import React,{Component} from 'react'

class PasswordRecovery extends Component{
  render(){
    return (
      <section>
          <form class="form">
            <h2>Recuperar clave</h2>
            <div class="form-group">
            <input
            class="form-control"
              type="email"
              name="email"
              placeholder="email" />
              </div>
            <button class="btn btn-success">Enviar</button>
          </form>

      </section>
    )
  }

}
export default PasswordRecovery
