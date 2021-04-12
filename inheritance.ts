// 1. 아메리카노를 만들고
// 2. 라떼를 만든다. 아메리카노에 우유를 추가

type Coffee = {
  shots: number;
  hasMilk: boolean;
}

interface ProMachine {
  makeCoffee(shots: number): Coffee;
}

class CoffeeMachine  implements ProMachine {
  private Beans: number;
  private USE_BEANS_PER_SHOT: number = 10;

  constructor(beans: number) {
    this.Beans = beans;
  }

  private grindBeans(shots: number) {
    const useBeans = shots * this.USE_BEANS_PER_SHOT;
    if(useBeans > this.Beans) throw Error('Not Enough Beans');
    this.Beans -= useBeans;
    console.log('Grid Beans 🐤');
  }

  private preheatMachine() {
    console.log('Preheat Machine 🔥');
  }

  private brewCoffee(shots: number): Coffee {
    return {
      shots,
      hasMilk: false
    }
  }


  makeCoffee(shots): Coffee {
    console.log('====START====');
    this.grindBeans(shots);
    this.preheatMachine();
    return this.brewCoffee(shots);
  }
}

class LatteMachine extends CoffeeMachine {

  public readonly serialNumber: string;

  constructor(beans: number, serialNumber: string) {
    super(beans);
    this.serialNumber = serialNumber;
  }

  private steamMilk() {
    console.log('Steam Mink 🥛');
  }

  makeCoffee(shots: number): Coffee {
    const coffee = super.makeCoffee(shots);
    return {
      ...coffee,
      hasMilk: true,
    }
  }
}


const machine1 = new CoffeeMachine(100);
const americano = machine1.makeCoffee(3);
console.log('machine1', machine1);
console.log('americano', americano);
const latteMachine = new LatteMachine(200 , '999-999');
const latte = latteMachine.makeCoffee(5);
console.log('latte', latte);
console.log('latteMachine', latteMachine);