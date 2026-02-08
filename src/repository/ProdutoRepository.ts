import { Produtos } from "../model/Produtos";

export interface ProdutoRepository{

    cadastrarProduto(Produto:Produtos):void;
    listarProdutos():void;
    consultarProdutoporId(id:number):void;
    atualizarProduto(Produto:Produtos):void;
    deletar(id:number):void;







}