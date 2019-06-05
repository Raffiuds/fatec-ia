
const fuzzController = require("../src/controller/fuzzController")
const cocaCola = require("../src/model/cocaCola")
const pepsi = require("../src/model/pepsiCola")
const chalk       = require('chalk')
const clear       = require('clear')
const figlet      = require('figlet')
const inquirer = require('inquirer')


function index(){
    
    clear()
    console.log(
        chalk.yellow(
        figlet.textSync('Boteco do Gallão', { horizontalLayout: 'full' })
    ))

    inquirer.prompt([{
        name: 'refri',
        type: 'list',
        message: 'Qual refrigerante deseja para a Cuba Livre?',
        choices: ['Coca-Cola', 'Pepsi'],
      }, {
        name: 'qtdRefri',
        type: 'input',
        message: 'Digite a quantidade de refrigerante? (Entre 0 a 100 ml)',
        validate: validateQtd,
      }, {
        name: 'qtdRun',
        type: 'input',
        message: 'Digite a quantidade de run? (Entre 0 a 100 ml)',
        validate: validateQtd,
      }, {
        name: 'qtdGelo',
        type: 'input',
        message: 'Digite a quantidade de Gelo? (Entre 0 a 100 ml)',
        validate: validateQtd,
      }]).then((a) => {
        
        const refri = Number.parseFloat(a.qtdRefri)
        const run = Number.parseFloat(a.qtdRun)
        const gelo = Number.parseFloat(a.qtdGelo)

        if (a.refri === 'Coca-Cola'){
            fuzzController.cobrarEInformar(
                fuzzController.paladar(refri, run, gelo, cocaCola))
        } else {
            fuzzController.cobrarEInformar(
                fuzzController.paladar(refri, run, gelo, pepsi))
        }
      })

}

function validateQtd(qtd){

  if (!Number.isNaN(qtd)){
    const num = Number.parseFloat(qtd.replace(',', '.'))
    if (!Number.isNaN(num)){
      return (num >= 0 && num <= 100)
    } else {
      return false
    }
  } else {
    return (qtd >= 0 && qtd <= 100)
  }
    
}

index()

module.exports = validateQtd

