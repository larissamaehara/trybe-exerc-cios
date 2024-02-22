// Criação da classe
class Person {
  // Atributos
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  // Métodos
  // Método construtor
  constructor(name: string, height: number, age: number) {
    console.log(`Creating person ${name}`);
    this.name = name; //Atribui valores de fora aos atributos do objeto
    this.height = height;
    this.age = age;
  }

  // esta sintaxe permite acessar o valor retornado via person.getWeight()
  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
// mesmo que esteja ocorrendo uma validação internamente
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

  // Método de exemplo:
  sleep() {
    console.log(`${this.name} is sleeping, zzzzzzzz`);
  }
}

// Criação dos objetos
const p1 = new Person ('Maria', 171, 58); //Saída: Creating person Maria
const p2 = new Person ('João', 180, 25); //Saída: Creating person João

// Acessando os atributos
console.log(p1.name, p1.height, p1.age); //Saída: Maria 171 58
console.log(p2.name, p2.height, p2.age); //Saída: João 180 25

// Acesso aos métodos
p1.sleep(); //Saída: Maria is sleeping, zzzzzzzz
p2.sleep(); //Saída: João is sleeping, zzzzzzzz

// Alteração direta de variável pública
p1.name = 'Mariah';
// Acesso direto a variável pública
console.log(p1.name);
// Acesso a método público que manipula atributo privado
console.log(p1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age);
// Acesso a método público que manipula atributo privado
p2.birthday();
console.log(p2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age);
// Leitura de atributo readonly
console.log(p1.height);