import { Produtos } from "./Produtos";

export class Cosmeticos extends Produtos{

    private _fragancia:string;


	constructor(id: number, nome: string, tipo: number, preco: number,fragancia: string) {
		super(id, nome, tipo, preco);
        this._fragancia = fragancia;
	}



   
	public get fragancia(): string {
		return this._fragancia;
	}

	public set fragancia(value: string) {
		this._fragancia = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Fragancia: ${this._fragancia}`);
    }





}