import React,{Component} from 'react'

class PasswordRecovery extends Component{
  render(){
    return (
      <section>
          <form className="form">
            <h2>Recuperar clave</h2>
            <div className="form-group">
            <div class="input-group">
            <span class="input-group-addon">@</span>
            <input
            className="form-control"
              type="email"
              name="email"
              placeholder="email" />
              </div>
              </div>
            <button className="btn btn-success">Enviar</button>
          </form>

      </section>
    )
  }

}
export default PasswordRecovery
