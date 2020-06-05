import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
const containerForm = {
    textAlign:'center',
}

export default class PostForm extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
          nome: '',
          dataEntrega: '',
          pontoPartida: '',
          pontoDestino: ''
        }
        this.cadastrar = this.cadastrar.bind(this);
      }
 
     cadastrar = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/cadastrar', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          nome: this.state.nome,
          dataEntrega: this.state.dataEntrega,
          pontoPartida: this.state.pontoPartida,
          pontoDestino: this.state.pontoDestino
        })
          }).then( response => response.json()).then(data => {
        if (data === 'success'){
          alert('enviado com sucesso');
          console.log('enviado com sucesso');
          }
         })
        }
        
    redirecionar(){
        
    }    
 render(){
    return (
    <Container component="main" maxWidth="xs">
        <div>
            <form onSubmit={this.cadastrar} style={containerForm}>
                <span style={{color:'red'}}>{this.state.alerta}</span><br></br>
                <label>Cadastrar encomendas</label><br/>
                <div style={{margin: 30}}>  
                        <TextField 
                        type="text" 
                        placeholder="Seu nome" 
                        value={this.state.nome} 
                        autoFocus 
                        fullWidth
                        onChange={(e)=>this.setState({nome: e.target.value})}/>
                    </div>
                <div style={{margin: 30}}>  
                    <TextField 
                    type="date" 
                    placeholder="Data de entrega" 
                    value={this.state.dataEntrega} 
                    autoFocus 
                    fullWidth
                    onChange={(e)=>this.setState({dataEntrega: e.target.value})}/>
                </div>
                <div style={{margin: 30}}>  
                    <TextField 
                    type="text" 
                    placeholder="Ponto de Partida" 
                    value={this.state.pontoPartida} 
                    autoFocus 
                    fullWidth
                    onChange={(e)=>this.setState({pontoPartida: e.target.value})}/>
                </div>      
                <div style={{margin: 30}}>  
                    <TextField 
                    type="text" 
                    placeholder="Destino" 
                    value={this.state.pontoDestino} 
                    autoFocus 
                    fullWidth
                    onChange={(e)=>this.setState({pontoDestino: e.target.value})}/>
                </div>     
            <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             >
              CADASTRAR
            </Button>
            
              <Link to  ='/cadastros' style={{ textDecoration: 'none', color: 'white' }} >
                <Button
                fullWidth
                margin="2dp"
                variant="contained"
                color="secondary"
                >
                 Lista de Cadastros    
                </Button>
              </Link>
            </form>
        </div>
    </Container>
    );
 }
}