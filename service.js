const axios = require('axios')



const URL = 'https://swapi.dev/api/people'
async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}`
  const result = await axios({
    method: 'get',
    url: url,
  })
  return result.data.results.map((item) => {
    return {
      nome: item.name,
      peso: item.height,
    }
  })
}

module.exports = {
  obterPessoas,
}
