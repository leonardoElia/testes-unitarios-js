/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(getCharacter()).toEqual(undefined);
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
      let Arya = getCharacter('Arya');
      expect(Arya.class).toEqual('Rogue')
      expect(Arya.name).toEqual('Arya Stark')
      expect(Arya.phrases[0]).toEqual('Not today')
      expect(Arya.phrases[1]).toEqual('A girl has no name.')
    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    let Brienne = getCharacter('Brienne');
    expect(Brienne.class).toEqual('Knight')
    expect(Brienne.name).toEqual('Brienne Tarth')
    expect(Brienne.phrases[0]).toEqual('Im No Lady, Your Grace.')
    expect(Brienne.phrases[1]).toEqual('I, Brienne Of Tarth, Sentence You To Die.')

    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    let Melissandre = getCharacter('Melissandre');
    expect(Melissandre.class).toEqual('Necromancer')
    expect(Melissandre.name).toEqual('Melissandre')
    expect(Melissandre.phrases[0]).toEqual('Death By Fire Is The Purest Death.')
    expect(Melissandre.phrases[1]).toEqual('For The Night Is Dark And Full Of Terrors.')

    // Teste se o parâmetro não é Case Sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele.
    let testeCase = getCharacter('MeLissAndre');
    expect(testeCase.class).toEqual('Necromancer')
    expect(testeCase.name).toEqual('Melissandre')
    expect(testeCase.phrases[0]).toEqual('Death By Fire Is The Purest Death.')
    expect(testeCase.phrases[1]).toEqual('For The Night Is Dark And Full Of Terrors.')

    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
    expect(getCharacter('leonardo')).toEqual(undefined);
  });
});
