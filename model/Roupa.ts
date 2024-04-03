export abstract class Roupa implements RoupaRepository {
    private _tipo: string;
    private _tamanho: Array<string> = new Array<string>();
    private _tecido: string;
    private _cor: string;
    private _marca: string;
    private _preco: string;
    private _material: string;
    private _quantidade: number;

    constructor(tipo: string, tamanho: string[], tecido: string, cor: string, marca: string, preco: string, material: string, quantidade: number) {
        this._tipo = tipo;
        this._tamanho = tamanho;
        this._tecido = tecido;
        this._cor = cor;
        this._marca = marca;
        this._preco = preco;
        this._material = material;
        this._quantidade = quantidade;
    }

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

    public get tecido_1(): string {
        return this._tecido;
    }

    public set tecido_1(value: string) {
        this._tecido = value;
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

    instrucoesDeLavagem(): void {
        switch (this._tecido) {
            case 'algodão':
                console.log(`Separar por cores claras e escuras.
Lavar na máquina em ciclo suave com água fria ou morna.
Use um detergente suave.
Evite usar alvejante, a menos que seja necessário para manchas difíceis.
Seque ao ar livre ou na máquina em temperatura baixa.`)
                break;
            case 'Linho':
                console.log(`Verifique se é seguro lavar na máquina ou se é preferível lavagem à mão.
Use água fria ou morna e um detergente suave.
Evite torcer o tecido para não deformar.
Seque na sombra para evitar desbotamento.
Passe a ferro enquanto ainda estiver ligeiramente úmido.`)
                break;
            case 'Seda':
                console.log(`Lave à mão com água fria e detergente suave para seda.
Não esfregue vigorosamente, apenas mergulhe suavemente e enxágue.
Nunca torça o tecido, apenas pressione delicadamente para remover o excesso de água.
Seque à sombra, longe da luz solar direta.
Use um ferro de passar com temperatura baixa para passar a seda ainda levemente úmida. `)
                break;
            case 'Lã':
                console.log(`Lave à mão em água fria ou morna com um detergente específico para lã.
Evite esfregar ou torcer a peça.
Enxágue bem em água limpa.
Seque achatando delicadamente em uma toalha para remover o excesso de água e, em seguida, seque horizontalmente em uma superfície plana.
Passe a ferro com temperatura baixa, se necessário, utilizando um pano úmido entre o ferro e a peça de lã. `)
                break;
            case 'Sintético':
                console.log(`Lave na máquina com água fria ou morna.
Use um ciclo suave e um detergente suave para tecidos sintéticos.
Evite usar alvejante e amaciante.
Seque na máquina em temperatura baixa ou ao ar livre.
Não é necessário passar a ferro na maioria dos casos, mas se precisar, use uma temperatura baixa. `)
                break;
            default:
                console.log("Tipo de tecido não especificado.")
                break;
        }
    }

    exibirDetalhes(): void {
        console.log(`Essa é uma ${this.tipo} da marca ${this._marca}, feita de ${this._tecido} e disponível na cor ${this._cor}.
Ela está disponível nos seguintes tamanhos: ${this._tamanho}.
O tecido utilizado é ${this._tecido}, e temos ${this.quantidade} unidades disponíveis.
Cada peça está precificada em ${this.preco}.`)
    }
}