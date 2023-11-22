interface Computador {
    readonly ram: string;
    readonly hd: string;
    readonly cpu: string;
    readonly type: string;
  }
  
  abstract class Produto implements Computador {
    constructor(
      private _ram: string,
      private _hd: string,
      private _cpu: string,
      private _type: string
    ) {}
  
    // Getters para os atributos definidos na interface
    get ram(): string {
      return this._ram;
    }
  
    get hd(): string {
      return this._hd;
    }
  
    get cpu(): string {
      return this._cpu;
    }
  
    get type(): string {
      return this._type;
    }
  }
  
  // Exemplo de uma classe de computador
  class Desktop extends Produto {
    constructor(ram: string, hd: string, cpu: string) {
      super(ram, hd, cpu, 'Desktop');
    }
  }
  
  // Exemplo de uma classe de computador específica
  class Laptop extends Produto {
    constructor(ram: string, hd: string, cpu: string) {
      super(ram, hd, cpu, 'Laptop');
    }
  }
  
  const meuDesktop = new Desktop('8GB', '500GB', 'Intel i7');
  const meuLaptop = new Laptop('4GB', '512GB', 'AMD Ryzen');
  
  console.log(`Meu Desktop: RAM ${meuDesktop.ram}, HD ${meuDesktop.hd}, CPU ${meuDesktop.cpu}, Tipo ${meuDesktop.type}
  Meu Laptop: RAM ${meuLaptop.ram}, HD ${meuLaptop.hd}, CPU ${meuLaptop.cpu}, Tipo ${meuLaptop.type}`);

  