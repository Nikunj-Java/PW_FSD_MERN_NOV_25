class Pet {
    #name;
    #age;
    #type;

    constructor(name, age, type) {
        this.#name = name;
        this.age = age; // using setter
        this.#type = type;
    }

    // Getter
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get type() {
        return this.#type;
    }

    // Setter with validation
    set age(value) {
        if (value > 0) {
            this.#age = value;
        } else {
            alert("Age must be positive!");
        }
    }

    getDetails() {
        return `${this.#name} (${this.#type}) - ${this.#age} years`;
    }
}


class PetManager {
    constructor() {
        this.pets = [];
    }

    addPet(pet) {
        this.pets.push(pet);
        this.render();
    }

    deletePet(index) {
        this.pets.splice(index, 1);
        this.render();
    }

    render() {
        const petList = document.getElementById("petList");
        petList.innerHTML = "";

        this.pets.forEach((pet, index) => {
            const div = document.createElement("div");
            div.className = "pet-card";

            div.innerHTML = `
                <span>${pet.getDetails()}</span>
                <button class="delete-btn" onclick="manager.deletePet(${index})">
                    Delete
                </button>
            `;

            petList.appendChild(div);
        });
    }
}

const manager = new PetManager();

function addPet() {
    const name = document.getElementById("petName").value;
    const age = document.getElementById("petAge").value;
    const type = document.getElementById("petType").value;

    if (!name || !age) {
        alert("Please fill all fields");
        return;
    }

    const pet = new Pet(name, parseInt(age), type);
    manager.addPet(pet);

    document.getElementById("petName").value = "";
    document.getElementById("petAge").value = "";
}
