import { Cosmeticos } from './src/model/Cosmeticos';
import { Medicamentos } from './src/model/Medicamentos';
import { ProdutoController } from './src/ProdutoController/ProdutoController';
import { colors }  from './src/util/Colors';
import { Input } from "./src/util/Inputs";

const produto = new ProdutoController();

const tpproduto = [`Medicamento`, `Cosmeticos`];

function main(){
    let opcao: number ;

    criarprodutoTeste();
    while(true){
        console.log(colors.fg.white,"**********************************************");
        console.log("                                              ");
        console.log("             FARMACIA DO JOAO                 ");
        console.log("                                              ");
        console.log("**********************************************");
        console.log("                                              ");
        console.log("         1 - Criar Produto                    ");
        console.log("         2 - Listar todos os Produtos         ");
        console.log("         3 - Consultar Produto                ");
        console.log("         4 - Atualizar Produtos               ");
        console.log("         5 - Deletar Produtos                 ");
        console.log("         6 - Sair                             ");
        console.log("**********************************************", colors.reset);


        opcao = Input.questionInt("Digite a opcao Desejada: ");

        if(opcao == 6){
            console.log(`Finalizar Programa`);
            sobre();
            process.exit(0);
        
        
        }

        switch(opcao){
            case 1:
                console.log("\nCriar Produto");
                criarProduto();
                keyPress();
            break;
            case 2:
                console.log(`Listar Todos os Produtos`);
                produto.listarProdutos();
                keyPress();
            break;
            case 3:
                console.log(`Consultar Produto`);
                procurarPorId();
                keyPress();
            break;
            case 4:
                console.log(`Atualizar Produtos`);
                atualizarProduto()
                keyPress();
            break;
            case 5:
                console.log(`Deletar Produto`);

                deletarProdutoporID();
                keyPress();
            break;
            default:
                console.log(`Opção Invalida!`);
                keyPress();
            break;


        }
       
    }

    
}
main();


//funçao criar Produtos

function criarProduto(){
    console.log("Digite o id do Produto: ");
    const id = Input.questionInt("");
    console.log("Digite o Nome do Produto: ");
    const nome = Input.question("");
    console.log("Digite o tipo do Produto: ");
    const tipo =Input.keyInSelect(tpproduto, "",{cancel:false}) +1 ;
    console.log("Digite o preço: ");
    const preco = Input.questionInt("");

    switch(tipo){
        case 1:
            console.log("Digite o nome do Generico: ");
            const generico:string = Input.question("");
            produto.cadastrarProduto(new Medicamentos(produto.gerarNumero(),nome,tipo,preco,generico));
        break;
        case 2:
            console.log("Digite o nome do Cosmeticos: ");
            const cosmeticos:string = Input.question("");
            produto.cadastrarProduto(new Cosmeticos(produto.gerarNumero(),nome,tipo,preco,cosmeticos));
        break;
    }
}


//Funçao dados 

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: João Pedro ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/Pedro-gomes2");
    console.log("*****************************************************");
}




function keyPress(): void{
    console.log("\n Pressione enter para continuar....")
    Input.prompt();
}


// função para teste
function criarprodutoTeste():void{
   
    // Instâncias da Classe Medicamentos
    produto.cadastrarProduto(new Medicamentos(produto.gerarNumero(),"Analgésicos",1,20.00,"Dorflex"));
    produto.cadastrarProduto(new Medicamentos(produto.gerarNumero(),"vitamina",1,25.00,"calciotran"));
 
    // Instâncias da Classe ContaPoupança
    produto.cadastrarProduto(new Cosmeticos(produto.gerarNumero(),"Batom",2,50.00,"wepink"));
    produto.cadastrarProduto(new Cosmeticos(produto.gerarNumero(),"rimel",2,15,"avon"));
 
}


function procurarPorId(){
    console.log("digite o id do produto");
    const id = Input.questionInt("");
    produto.consultarProdutoporId(id);

}

//: deletarr Produto por id

function deletarProdutoporID():void{

    console.log("Digite o ID do Produto: ");
    const id = Input.questionInt("");
    produto.deletar(id);
}

//atulizar 
function atualizarProduto():void{
    console.log("Digite o ID do produto")
    const id  = Input.questionInt("");

    const produtoo = produto.buscarNoArray(id);

    if (produtoo !== null){
        const idOriginal = produtoo.id; // ID usado para localizar na lista

        
        let nome :string = produtoo.nome;
        const tipo:number = produtoo.tipo;
        let preco:number = produtoo.preco;



        //ATUALIZAR NOME 
        console.log(`\nNome  Atual: ${nome}`);
        console.log("Digite o novo nome \n (Pressione ENTER para manter o valor atual)");
        let entrad = Input.question("");

        nome = entrad.trim() == ""? nome : entrad;

        //ATUALIZAR PREÇO

        console.log(`\nPreço Atual: ${preco}`);
        console.log("Digite o novo\n (Pressione ENTER para manter o valor atual)");
        let entra = Input.question("");

        preco = entra.trim()==="" ? preco: parseFloat(entra);

        //Atualizar tipo

        switch(tipo){
            case 1:// Medicamentos 
               
                let generico:string= (produtoo as Medicamentos).generico;

                console.log(`\nO Generico Atual: ${generico}`);
                console.log("Digite o novo\n (Pressione ENTER para manter o valor atual)");
                let entrada = Input.question("");
                generico = entrada.trim() ===""? generico : entrada;

                produto.atualizarProduto(new Medicamentos (id,nome,tipo,preco,generico));

            break;
            case 2://cosmetico

                let fragancia:string = ( produtoo as Cosmeticos).fragancia;

                console.log(`\nA fragancia Atual: ${fragancia}`);
                console.log("Digite o novo\n (Pressione ENTER para manter o valor atual)");
                let entra = Input.question("");
                fragancia = entra.trim() ===""?fragancia : entra;

                produto.atualizarProduto(new Cosmeticos (id,nome,tipo,preco,fragancia));
            break;






        }
        






    }else{
        console.log("Produto nao Encontrado!");
    }


}