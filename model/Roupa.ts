export abstract class Roupa {
    private _tipo: string;
    private _tamanho: string[] = ["PP", "P", "M", "G", "GG"];
    private _cor: string;
    private _marca: string;
    private _preco: string;
    private _material: string;
    private _quantidade: number;

    public get tipo(): string {
        return this._tipo;
    }

    public set tipo(value: string) {
        this._tipo = value;
    }

    public get tamanho(): string[] {
        return this._tamanho;
    }

    public set tamanho(value: string[]) {
        this._tamanho = value;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(value: string) {
        this._cor = value;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }
    public get preco(): string {
        return this._preco;
    }

    public set preco(value: string) {
        this._preco = value;
    }

    public get material(): string {
        return this._material;
    }
    public set material(value: string) {
        this._material = value;
    }

    public get quantidade(): number {
        return this._quantidade;
    }
    
    public set quantidade(value: number) {
        this._quantidade = value;
    }
}