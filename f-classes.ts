// Definiendo una clase
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

const dog = new Animal("Dog");
dog.speak();
