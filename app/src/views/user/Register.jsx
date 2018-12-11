import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class RegisterInit extends Component {

    constructor() {

        super(props)
    }
    render() {

        return (

            <div className="row pt-5 register init-register d-none">
                <div className="col-12 col-md-4 mx-auto">
                    <div className="logo text-center mb-4"><img width="200px" src="logo.png" /></div>
                    <form className="form-login box p-4">
                        <div className="form-group">
                            <label>Comece com seu e-mail</label>
                            <input className="form-control" name="email" type="email" />
                        </div>
                        <button className="btn btn-weegbox btn-block">Continue o cadastro</button>
                    </form>
                </div>
            </div>
        )
    }

}

class RegisterMessageSend extends Component {

    render() {

        return (

            <div className="row pt-5 register send-email d-none">
                <div className="col-12 col-md-4 mx-auto">
                    <div className="logo text-center mb-4"><img width="200px" src="logo.png" /></div>
                    <form className="form-login box p-4 text-center">
                        <div className=""><img src="send-email.png" /></div>
                        <p className="m-0">Enviamos um e-mail com as instruções. Abra e leia com atenção e siga os passos.</p>
                    </form>
                </div>
            </div>
        )
    }
}

class RegisterProfile extends Component {

    render() {

        return (

            <div className="row pt-5 register d-none">
                <div className="col-12 col-md-4 mx-auto">
                    <div className="logo text-center mb-4"><img width="200px" src="logo.png" /></div>
                    <form className="form-login box p-4">
                        <div className="form-group">
                            <label>Seu primeiro nome</label>
                            <input className="form-control" name="userName" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Seu sobrenome</label>
                            <input className="form-control" name="userName" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Sua senha</label>
                            <input className="form-control" name="password" type="password" />
                        </div>
                        <div className="form-group">
                            <label>Repita a senha</label>
                            <input className="form-control" name="repeatPassword" type="password" />
                        </div>
                        <button className="btn btn-weegbox btn-block">Finalizar cadastro</button>
                    </form>
                </div>
            </div>
        )
    }
}

export { RegisterInit, RegisterInit, RegisterMessageSend, RegisterProfile }