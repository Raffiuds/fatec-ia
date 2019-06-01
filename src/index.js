
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
        type: 'number',
        message: 'Digite a quantidade de refrigerante? (Entre 0 a 100 ml)',
        validate: validateQtd,
      }, {
        name: 'qtdRun',
        type: 'number',
        message: 'Digite a quantidade de run? (Entre 0 a 100 ml)',
        validate: validateQtd,
      }, {
        name: 'qtdGelo',
        type: 'number',
        message: 'Digite a quantidade de Gelo? (Entre 0 a 100 ml)',
        validate: validateQtd,
      }]).then((a) => {
        
        if (a.refri === 'Coca-Cola'){
            fuzzController.cobrarEInformar(
                fuzzController.paladar(a.qtdRefri, a.qtdRun, a.qtdGelo, cocaCola))
        } else {
            fuzzController.cobrarEInformar(
                fuzzController.paladar(a.qtdRefri, a.qtdRun, a.qtdGelo, pepsi))
        }
      })

}

function validateQtd(qtd){
    return (qtd >= 0 && qtd <= 100 );
}

index()

