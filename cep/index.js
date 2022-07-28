// function returnCep(newCep) {

//   // const urlCep = `https://ws.apicep.com/cep/${newCep}.json`;
//   const urlCep = `https://cep.awesomeapi.com.br/${newCep}`;
//   return fetch(urlCep)
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       const { address } = data;
//       console.log(address);
//       return { address }
//     });
// }

async function returnCep(newCep) {

  // const urlCep = `https://ws.apicep.com/cep/${newCep}.json`;
  const urlCep = `https://cep.awesomeapi.com.br/${newCep}`;

  // const data = await fetch(urlCep);
  // const dataJson = data.json();
  // const dates = await dataJson;
  // const { address } = dates;
  // console.log(address);

  const data = (await fetch(urlCep)).json();
  const { address, district } = await data;
  console.log(`${address}\n${district}`);


}



returnCep('04311080');