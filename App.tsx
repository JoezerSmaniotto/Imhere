import { StatusBar } from "expo-status-bar";

import Home from './src/sreens/Home';

export default function App(){
  return(
    <>
      <StatusBar 
        style="light" // Cor dos ícones da barra de status
        backgroundColor="transparent"// Cor de fundo da barra de status, com o transparent, pega cor que defini na aplicação
        translucent // Faz a StatusBar ficar sobre o aplicativo
      />
      <Home/>
    </>
  );
}