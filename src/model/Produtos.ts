export abstract class Produtos{
    
    private _id:number;
    private _nome:string;
    private _tipo:number;
    private _preco:number;
    

	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}
	
	public get id(): number {
		return this._id;
	}

   
	public set id(value: number) {
		this._id = value;
	}

    
	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

    
	public get tipo(): number {
		return this._tipo;
	}

    
	public set tipo(value: number) {
		this._tipo = value;
	}

    public get preco(): number {
		return this._preco;
	}

    
	public set preco(value: number) {
		this._preco = value;
	}

    
    public visualizar():void{
        console.log("*************************************");
        console.log(`\n       ID: ${this.id} `);
        console.log(`\n     Nome: ${this.nome} `);
        console.log(`\n     Tipo: ${this.tipo} `);
        console.log(`\n     Preço: ${this.preco.toFixed(2)} `);
        

    }
}