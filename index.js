class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let typeAttack;

        switch (this.type) {
            case 'mago':
                typeAttack = 'magia';
                break;
            
            case 'guerreiro':
                typeAttack = 'espada';
                break;

            case 'monge':
                typeAttack = 'artes marciais';
                break;

            case 'ninja':
                typeAttack = 'shuriken';
                break;

            default:
                typeAttack = 'ataque desconhecido';
        }

        console.log(`O ${this.type} atacou usando ${typeAttack}`);
    }
}

const hero1 = new Hero('Gandalf', 100, 'mago');
const hero2 = new Hero('Arthur', 35, 'guerreiro');
const hero3 = new Hero('Bruce', 28, 'monge');
const hero4 = new Hero('Shadow', 22, 'ninja');

hero1.attack(); 
hero2.attack(); 
hero3.attack(); 
hero4.attack(); 