import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Logo from './imgs/logo.png'
import LogoBranco from './imgs/logo-branco.png'
import BoxOpen from './imgs/box-open.png'
import BoxClose from './imgs/box-close.png'
import BoxSend from './imgs/box-send.png'
import BoxClear from './imgs/box-clear.png'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {

        Axios.post()
        alert(this.state.email)
        event.preventDefault();
        
    }

    render() {
        return (
            <div className="container">
                <div className="row pt-5 mt-5 login">

                    <div className="col-12 col-md-4 mx-auto">
                        <div className="logo text-center mb-4"><img width="200px" src={Logo} /></div>
                        <form className="form-login box p-4" onSubmit={this.handleSubmit} >
                            <div className="form-group">
                                <label>E-mail</label>
                                <input className="form-control" name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Senha</label>
                                <input className="form-control" name="pass" type="password" value={this.state.pass} onChange={this.handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-weegbox btn-block">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

class HeaderDashboard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="container-fluid bg-theme">
                <div className=" navbar-weegbox row">
                    <div className="col-2">
                        <button className="navbar-toggler d-xs-block d-md-none" type="button" data-toggle="collapse" data-target="#menuHeaderWeegBox" aria-controls="menuHeaderWeegBox" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link to="/dashboard" className="navbar-brand" ><img width="150px" src={LogoBranco} /></Link>
                    </div>
                    <div className="col">
                        <form className="form-inline my-2 my-lg-0">
                            <div className="search" >
                                <input className="input-search" placeholder="Digite para buscar" />
                                <button><i className="filter"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className="col-3 menu-wrapper">
                        <ul className="navbar-nav float-right mt-1">
                            <li className="nav-item active">
                                <Link to="/dashboard" className="nav-link" >Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" className="nav-link" >Sair</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class Dashboard extends Component {

    render() {

        return (
            <Fragment>
                <HeaderDashboard />
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12">
                            <button className="btn btn-weegbox float-right" data-toggle="modal" data-target="#new-box">Abrir uma caixa</button>
                        </div>
                    </div>
                    <div className="row mt-4 box">
                        <div className="col-12 text-center">
                            <div className="alert-wb mx-auto my-5 text-center">
                                <img width="200" src={BoxClear} />
                                <p className="alert-text-wb" >Você não tem caixas</p>
                                <button className="btn btn-weegbox" data-toggle="modal" data-target="#new-box">Abrir uma caixa</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade modal-weegbox" ref={modal => this.newBox = modal} tabIndex="-1" id="new-box" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header modal-header-weegbox">
                                <h5 className="modal-title">Informações do objeto</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-content-wrapper">

                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Rastreamento do produto</label>
                                        <input className="form-control" placeholder="XXXXXXXXXXXXX" />
                                    </div>

                                    <div className="alert alert-weegbox my-3"><p>O sistema possui bots que auditam os produtos inseridos, visando a segurança das informações apresentadas. Os produtos e informações informados devem ser reais e auditáveis. Não nos responsabilizamos por produtos vendidos por lojas falsas ou desconhecidas do mercado.</p></div>
                                    <button type="button" className="btn btn-weegbox btn-block">Adicionar</button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-link btn-block" data-dismiss="modal">Fechar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}

class Box extends Component {

    render() {

        return (
            <Fragment>
                <HeaderDashboard />
                <div className="container">
                    <div className="row align-items-center mt-4">
                        <div className="col-3">
                            <div className="info-box">BR09823923098LKJSD</div>
                        </div>
                        <div className="col-7 text-md-right">
                            <button className="btn btn-weegbox " data-toggle="modal" data-target="#members">Membros da Caixa</button>
                            <button className="btn btn-weegbox btn-inactive">Fechar caixa</button>
                            <button className="btn btn-weegbox " data-toggle="modal" data-target="#new-object">Adicionar Objeto</button>
                            <button className="btn btn-weegbox btn-pay" data-toggle="modal" data-target="#pay-modal">Fazer pagamento</button>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 col-md-3 mb-3">
                            <div className="row box mx-0">
                                <div className="col-12">
                                    <div className="title-box px-0">ENDEREÇO PARA ENVIO</div>
                                </div>
                                <div className="col-12 text-center mb-3">
                                    <div className="info-label">Rua da Casa de Consolidacao BOX 934729387410942 Miami, FL</div>
                                </div>

                            </div>

                            <div className="row mt-3 box mx-0">
                                <div className="col-12">
                                    <div className="title-box px-0">A CAIXA</div>
                                </div>

                                <div className="col-6 text-center mb-3">
                                    <div className="info-box">450 Lb</div>
                                    <div className="info-label">Peso Mínimo</div>
                                </div>
                                <div className="col-6 text-center mb-3">
                                    <div className="info-box">60 Lb</div>
                                    <div className="info-label">Peso Alcançado</div>
                                </div>
                            </div>

                            <div className="row box mt-3 mx-0">
                                <div className="col-12">
                                    <div className="title-box px-0">VOCÊ NA CAIXA</div>
                                </div>

                                <div className="col-6 text-center">
                                    <div className="info-box">450 Lb</div>
                                    <div className="info-label">Peso dos Objetos</div>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="info-box">1200,00</div>
                                    <div className="info-label">Valor total</div>
                                </div>
                                <div className="col-6 text-center my-3">
                                    <div className="info-box">R$ 120,00</div>
                                    <div className="info-label">Seguro</div>
                                </div>
                                <div className="col-6 text-center my-3">
                                    <div className="info-box">R$39,00</div>
                                    <div className="info-label">Transporte</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="row mx-0 box list-objts-wrapper">
                                <div className="col-12">
                                    <div className="row py-2 list-objts list-objts-header">
                                        <div className="col-5">Produto</div>
                                        <div className="col-3">Preço</div>
                                        <div className="col-2">Qtd</div>
                                        <div className="col-1"></div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div className="row py-2 align-items-center list-objts">
                                        <div className="col-5">Iphone XS 64Gb Plus - Apple Kit Complete</div>
                                        <div className="col-3">U$ 900.00</div>
                                        <div className="col-2">02</div>
                                        <div className="col-1"></div>
                                        <div className="col-1">
                                            <div className="dropdown">
                                                <button className="btn btn-toogle-weegbox dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                                <div className="dropdown-menu dropdown-menu-weegbox dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Remover da caixa</a>
                                                    <a className="dropdown-item" href="#">Enviar informações</a>
                                                    <a className="dropdown-item" href="#">Adicionar rastreamento</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="alert-wb mx-auto my-5 text-center">
                                        <img width="200" src={BoxClear} />
                                        <p className="alert-text-wb" >Você não tem objetos</p>
                                        <button className="btn btn-weegbox" data-toggle="modal" data-target="#new-object">Abrir um objeto</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 list-status-wrapper">
                            <ul className="list-status-box text-center">
                                <li>
                                    <img src={BoxSend} />
                                    <p>Enviada para viagem</p>
                                    <p>25/04/2019</p>
                                </li>
                                <li>
                                    <img src={BoxClose} />
                                    <p>João Paulo fechou a caixa</p>
                                    <p>20/04/2019</p>
                                    <button className="btn btn-weegbox btn-small btn-pay" data-toggle="modal" data-target="#pay-modal">Fazer Pagamento</button>
                                </li>
                                <li>
                                    <img src={BoxOpen} />
                                    <p>Caixa aberta</p>
                                    <p>01/04/2019</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="modal fade modal-weegbox" ref={modal => this.newObject = modal} tabIndex="-1" id="new-object" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header modal-header-weegbox">
                                <h5 className="modal-title">Adicionar objeto</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-content-wrapper">

                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Comece colando a url do produto</label>
                                        <input className="form-control" placeholder="http:// ou https://" />
                                    </div>
                                    <div className="form-group">
                                        <label>Nome do produto</label>
                                        <input className="form-control" placeholder="Nome do produto que você comprou" />
                                    </div>
                                    <div className="form-group">
                                        <label>Valor do produto em dólares</label>
                                        <input className="form-control" placeholder="US$" />
                                    </div>
                                    <div className="form-group">
                                        <label>Peso em libras</label>
                                        <input className="form-control" placeholder="lb" />
                                    </div>
                                    <div className="form-group">
                                        <label>Volume do produto</label>
                                        <input className="form-control" placeholder="vol" />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantidade de itens</label>
                                        <input className="form-control" placeholder="Quantidade" />
                                    </div>
                                    <div className="alert alert-weegbox my-3"><p>O sistema possui bots que auditam os produtos inseridos, visando a segurança das informações apresentadas. Os produtos e informações informados devem ser reais e auditáveis. Não nos responsabilizamos por produtos vendidos por lojas falsas ou desconhecidas do mercado.</p></div>
                                    <button type="button" className="btn btn-weegbox btn-block">Adicionar</button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-link btn-block" data-dismiss="modal">Fechar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="modal fade modal-weegbox" ref={modal => this.members = modal} tabIndex="-1" id="members" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header modal-header-weegbox">
                                <h5 className="modal-title">Membros da Caixa</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-content-wrapper">
                                <div className="modal-body">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Sergio Thaus
                                <span className="badge badge-primary badge-pill">14 objetos</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Joao Paulo
                                <span className="badge badge-primary badge-pill">2 objetos</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Tatiane
                                <span className="badge badge-primary badge-pill">1 objeto</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="modal-body">
                                    <p>Convide um novo amigo</p>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Insira um e-mail para convidar" />
                                    </div>

                                    <button type="button" className="btn btn-weegbox btn-block">Convidar</button>
                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-link btn-block" data-dismiss="modal">Fechar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="modal fade modal-weegbox" ref={modal => this.objectInfo = modal} tabIndex="-1" id="object-info" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header modal-header-weegbox">
                                <h5 className="modal-title">Informações do objeto</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-content-wrapper">

                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Rastreamento do produto</label>
                                        <input className="form-control" placeholder="XXXXXXXXXXXXX" />
                                    </div>

                                    <div className="alert alert-weegbox my-3"><p>O sistema possui bots que auditam os produtos inseridos, visando a segurança das informações apresentadas. Os produtos e informações informados devem ser reais e auditáveis. Não nos responsabilizamos por produtos vendidos por lojas falsas ou desconhecidas do mercado.</p></div>
                                    <button type="button" className="btn btn-weegbox btn-block">Adicionar</button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-link btn-block" data-dismiss="modal">Fechar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="modal fade modal-weegbox" ref={modal => this.objectInfo = modal} tabIndex="-1" id="pay-modal" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header modal-header-weegbox">
                                <h5 className="modal-title">Pedido de Pagamento</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-content-wrapper">

                                <div className="modal-body">
                                    <div className="row box mt-3 mx-0">
                                        <div className="col-12">
                                            <div className="title-box px-0">VOCÊ NA CAIXA</div>
                                        </div>

                                        <div className="col-6 text-center">
                                            <div className="info-box">450 Lb</div>
                                            <div className="info-label">Peso dos Objetos</div>
                                        </div>
                                        <div className="col-6 text-center">
                                            <div className="info-box">1200,00</div>
                                            <div className="info-label">Compra total</div>
                                        </div>
                                        <div className="col-6 text-center my-3">
                                            <div className="info-box">R$ 120,00</div>
                                            <div className="info-label">Seguro</div>
                                        </div>
                                        <div className="col-6 text-center my-3">
                                            <div className="info-box">R$39,00</div>
                                            <div className="info-label">Transporte</div>
                                        </div>

                                        <div className="col-12 text-center mb-3">
                                            <div className="info-box">R$1359,00</div>
                                            <div className="info-label">Total</div>
                                        </div>
                                    </div>


                                    <div className="alert alert-weegbox my-3"><p>Você está fazendo o pagamento parcial da caixas, valor relativo ao rateio conforme as encomendas que você está transportando. Seus amigos também precisam concluir o pagamento para o despacho da carga. Caso isso não ocorra o regulamento do contrato deve ser executado para que não haja prejuízo de todos.</p></div>
                                    <button type="button" className="btn btn-weegbox btn-block">Confirmar</button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-link btn-block" data-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

class Payment extends Component {

    render() {

        return (
            <Fragment>
                <HeaderDashboard />
                <div className="container">
                    <div className="row pt-4 mt-4">
                        <div className="col-12">
                            <h2 class="mb-4">Pagamento</h2>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row box">
                                <div className="col-12">
                                    <div className="title-box px-0">VOCÊ NA CAIXA</div>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="info-box">450 Lb</div>
                                    <div className="info-label">Peso dos Objetos</div>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="info-box">1200,00</div>
                                    <div className="info-label">Compra total</div>
                                </div>
                                <div className="col-6 text-center my-3">
                                    <div className="info-box">R$ 120,00</div>
                                    <div className="info-label">Seguro</div>
                                </div>
                                <div className="col-6 text-center my-3">
                                    <div className="info-box">R$39,00</div>
                                    <div className="info-label">Transporte</div>
                                </div>
                                <div className="col-12 text-center mb-3">
                                    <div className="info-box">R$1359,00</div>
                                    <div className="info-label">Total</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="form-group">
                                <input className="form-control" name="cardNumber" type="number" placeholder="Número do cartão" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="cardHolder" type="text" placeholder="Titular do cartão" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="cardDate" type="date" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="cardCCV" type="number" placeholder="Cód de Segurança" />
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="cardFlag">
                                    <option>MasterCard</option>
                                    <option>Visa</option>
                                    <option>Elo</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="instaments">
                                    <option>1 parcela</option>
                                    <option>2 parcelas</option>
                                    <option>3 parcelas</option>
                                </select>
                            </div>
                            <button className="btn btn-weegbox btn-block">Processar pagamento</button>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-12 col-md-4 mx-auto text-center">
                            <img width="100%" src="CreditCardIcons.png" />
                            <img width="120px" src="ebanxlogo.png" />
                            <img width="120px" src="SSL.png" />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

class PaymentOrders extends Component {

    render() {

        return (
            <Fragment>
                <HeaderDashboard />
                <div className="container ">
                    <div className="row pt-4 mt-4">
                        <div className="col-12"><h2 className="mb-3">Orderns de Pagamento</h2></div>
                        <div className="col-12 box orders">
                            <div className="row list-item">
                                <div className="col-9">Caixa BR1982982892398</div>
                                <div className="col-3">Aguardando Pagamento</div>
                            </div>
                            <div className="row list-item">
                                <div className="col-9">Caixa BR1982982892398</div>
                                <div className="col-3">Aguardando Pagamento</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

class Profile extends Component {

    render() {

        return (
            <Fragment>
                <HeaderDashboard />
                <div className="container">
                    <div className="row pt-4 mt-4">
                        <div className="col-12">
                            <h2>Perfil</h2>
                        </div>
                        <div className="col-12 col-md-6">

                            <div className="row mx-0">
                                <div className="col-12 box py-3">
                                    <form id="profile">
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input className="form-control" placeholder="Nome" />
                                        </div>
                                        <div className="form-group">
                                            <label>Sobrenome</label>
                                            <input className="form-control" placeholder="Sobrenome" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">

                            <div className="row mx-0">
                                <div className="col-12 box py-3">
                                    <form id="address">
                                        <div className="form-group">
                                            <label>Endereço</label>
                                            <input className="form-control" placeholder="Rua/Viela/Avenida" />
                                        </div>
                                        <div className="form-group">
                                            <label>Complemento</label>
                                            <input className="form-control" placeholder="Referência/Quadra/Lote" />
                                        </div>
                                        <div className="form-group">
                                            <label>CEP</label>
                                            <input className="form-control" placeholder="000000-000" />
                                        </div>
                                        <div className="form-group">
                                            <label>Bairro</label>
                                            <input className="form-control" placeholder="Bairro/Setor/Conjunto" />
                                        </div>
                                        <div className="form-group">
                                            <label>Cidade</label>
                                            <input className="form-control" placeholder="Cidade" />
                                        </div>
                                        <div className="form-group">
                                            <label>Estado</label>
                                            <input className="form-control" placeholder="UF" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

class ResetPass extends Component {

    render() {

        return (
            <div className="row pt-5 reset-pass">
                <div className="col-12 col-md-4 mx-auto">
                    <div className="logo text-center mb-4"><img width="200px" src="logo.png" /></div>
                    <form className="form-login box p-4" id="reset-pass">
                        <div className="form-group">
                            <label>Sua senha</label>
                            <input className="form-control" name="password" type="password" />
                        </div>
                        <div className="form-group">
                            <label>Repita a senha</label>
                            <input className="form-control" name="repeatPassword" type="password" />
                        </div>
                        <button className="btn btn-weegbox btn-block">Trocar a senha</button>
                    </form>
                </div>
            </div>
        )
    }
}

export { Login, ResetPass, Dashboard, Profile, Box, Payment, PaymentOrders }