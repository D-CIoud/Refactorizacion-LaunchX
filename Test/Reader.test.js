const Reader = require('../lib/utils/Reader')

describe('Test for reading an archive correctly', () =>{
    test('1. Read the contents of the explorers archive in json, from a path given', () => {
        const reader = Reader.readJsonFile('explorers.json')
        expect(reader[0].name).toBe('Woopa1')
        expect(reader[1].name).toBe('Woopa2')
        expect(reader[2].name).toBe('Woopa3')
        expect(reader[3].name).toBe('Woopa4')
        expect(reader[4].name).toBe('Woopa5')
    })

    //En esta prueba valide que leyera bien de la ruta el archivo y que si estuviera leyendo bien el archivo validando el nombre de los explorers
})