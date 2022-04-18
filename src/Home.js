import React, { useState } from 'react';
import './App.css';
import AddItem from './Components/AddItem/index';
import MaxWeight from './Components/MaxWeight';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import Caminhao from './img/caminhao.png';
import Van from './img/van.png';
import Logo from './img/truck.svg';
import knapsack from './Knapsack';
import ListItems from './Components/ListItems';
import { Alert, NavbarBrand } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function Home() {
  const [pesos, setPesos] = useState([0]);
  const [valores, setValores] = useState([0]);
  const [nomes, setNomes] = useState(['Exemplo de nome']);
  const [maxWeight, setMaxWeight] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <Navbar bg="navbar" variant="dark" sticky="top">
        <NavbarBrand style={{ padding: '20px'}}><img src={Logo} style={{padding: '20px'}}/>Rico Truck</NavbarBrand>
      </Navbar>
      <div className="first">
        <div className="imagens">
        {/* <img
            src={Caminhao}
            alt="Caminhao"
            style={{
              width: '50%',
              height: '38%',
              padding: '2%'
            }}
          /> */}
          <img
          src={Van}
          alt="Van"
          style={{
            width: '100%',
            height: '50%',
            padding: '2%'
          }}
          />
          </div>
          <div className="explanation">
            <div className="title">Ajudamos sua transportadora a enviar seus carregamentos de modo mais <div style={{color: '#7F63CF', fontFamily: 'Courier New', fontSize: '40px', marginTop: '30px', fontWeight: '900' }}>EFICIENTE</div></div>
            <div className="subtitle">A Rico Truck calcula quais carregamentos devem ser enviados visando priorizar as entregas que
            devem ser feitas com mais urgência, analisando também o peso de cada encomenda e o peso do meio de transporte a ser analisado.</div>
          </div>
        </div>
      <div style={{color: '#636060', fontFamily: 'Helvetica', fontSize: '20px', fontWeight: '800', marginTop: '80px', height: '100px', textAlign: 'left', marginLeft: '30px' }}>Informe a carga máxima permitida pelo caminhão que deseja consultar, adicione os itens e valores que o caminhão deverá carregar e veja o resultado rapidamente.</div>
      <div className="bottom-div">
        <MaxWeight
          setMaxWeight={setMaxWeight}
        />
        <AddItem
          pesos={pesos}
          setPesos={setPesos}
          valores={valores}
          setValores={setValores}
          nomes={nomes}
          setNomes={setNomes}
        />
      </div>
      <div style={{color: '#636060', fontFamily: 'Helvetica', fontSize: '20px', fontWeight: '800', marginTop: '10px', height: '100px', textAlign: 'left', marginLeft: '30px' }}>Acompanhe a lista de itens já adicionados</div>

      <ListItems
        nomes={nomes}
        valores={valores}
        pesos={pesos}
      />
      {
          showAlert ?
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)} 
            dismissible
          >
              <Alert.Heading>Resultado:</Alert.Heading>
              <p>
                  O valor máximo possível de ser transportado no seu caminhão é R${result}
              </p>
          </Alert>
          : <Button onClick={()=> {setShowAlert(true); knapsack({valores, pesos, maxWeight, setResult})}} style={{marginBottom: '15px'}}>Calcular</Button>
      }
    </div>
  );
}

export default Home;
