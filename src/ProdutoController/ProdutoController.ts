import { Produtos } from "../model/Produtos";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository{
   
    private lstprodutos = new Array<Produtos>();

    public numero:number = 0;

    
    
    cadastrarProduto(produto: Produtos): void {
        this.lstprodutos.push(produto);
        console.log(colors.fg.green,`O Produto ${produto.nome} foi cadastrado`);
    }
    
    

    
    
    listarProdutos(): void {
        for (let produto of this.lstprodutos  ){
            produto.visualizar();
        }
    }
    consultarProdutoporId(id: number): void {
        const buscaProduto = this.buscarNoArray(id);
        if(buscaProduto !== null)
            buscaProduto.visualizar();
        else
            console.log("Produto nao encontrado!1");
        
        
    }
   /* atualizarProduto(Produto: Produtos): void {
        const buscaProduto = this.buscarNoArray(Produto.id);
        if (buscaProduto !== null){
            this.lstprodutos[this.lstprodutos.indexOf(buscaProduto)] = Produto;
            console.log(`${Produto} Atulizado`);
        }else{
            console.log("Produto nao encontrado!");
        }
    }*/
    atualizarProduto(produtoAtualizado: Produtos): void {
    const index = this.lstprodutos.findIndex(p => p.id === produtoAtualizado.id);
    if (index !== -1) {
        this.lstprodutos[index] = produtoAtualizado;
        console.log(colors.fg.green, `Produto ${produtoAtualizado.nome} atualizado com sucesso!`, colors.reset);
    } else {
        console.log("Produto não encontrado!");
    }
}

    deletar(id: number): void {
        const buscaProduto = this.buscarNoArray(id);
        if (buscaProduto !== null){
            this.lstprodutos.splice(this.lstprodutos.indexOf(buscaProduto),1);
            console.log(colors.fg.red,`${id} Deletado`,colors.reset);
        }else{
            console.log("Produto nao encontrado!");
        }
    
    }

    public buscarNoArray(id:number):Produtos | null{
        for (let produto of this.lstprodutos){
            if(produto.id === id)
                return produto;
        }
        return null;

    }
    
    public gerarNumero():number{
        return ++ this.numero;
    }

}


