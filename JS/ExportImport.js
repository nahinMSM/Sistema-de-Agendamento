
// src/algumaCoisa.js
// Define outraFunco primeiro
const outraFunco = () => {
  console.log('Executando outraFunco');
};

// Define AlgumaCoisa e use outraFunco dentro dela
const AlgumaCoisa = () => {
  // Aqui eu usaria uma função de fora
  outraFunco();
};

// Exporta AlgumaCoisa como default
export default AlgumaCoisa;


// _____________________________________________________

// src/main.js
import AlgumaCoisa from './algumaCoisa.js';

// Use a função AlgumaCoisa
AlgumaCoisa();


// html
<script type="module" src="./src/main.js"></script>
