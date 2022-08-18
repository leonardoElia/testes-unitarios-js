const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
         expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    let produtos = productDetails('miojo', 'morango');
    expect(Array.isArray(produtos)).toEqual(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(produtos.length).toEqual(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
      expect(typeof produtos[0]).toEqual('object');
      expect(typeof produtos[1]).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
         expect(produtos[0].name).not.toEqual(produtos[1].name);
    // Teste se os dois productIds terminam com 123.
         let arrayProdutos = productDetails('pasta', 'escova');
         let textoPasta = arrayProdutos[0].details.productId;
         let textoQuebradoPasta = textoPasta.split('');
         expect(textoQuebradoPasta[textoQuebradoPasta.length - 1]).toEqual('3');
         let textoEscova = arrayProdutos[1].details.productId;
         let textoQubradoEscova = textoEscova.split('');
         expect(textoQubradoEscova[textoQubradoEscova.length - 1]).toEqual('3');

        });
});
