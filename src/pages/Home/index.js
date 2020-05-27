import React, { useState } from 'react';
import axios from 'axios'; 
import * as S from './styled';

function App(props) {
  const [usuario, setUsuario] = useState('Luciano')

    function handlePesquisa() {
      axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
      <>   { /* tag fragment */ }
      <S.Input type="Text" className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}> IMPUTO</S.Input>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>  
      </>
  );

}

export default App;

