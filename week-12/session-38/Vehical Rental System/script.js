// ==========================
// Base Class (Parent)
// ==========================
class Vehicle {
    #pricePerDay;

    constructor(name, pricePerDay) {
        this.name = name;
        this.pricePerDay = pricePerDay; // setter used
    }

    // Getter
    get pricePerDay() {
        return this.#pricePerDay;
    }

    // Setter with validation (Encapsulation)
    set pricePerDay(value) {
        if (value > 0) {
            this.#pricePerDay = value;
        } else {
            alert("Price must be greater than 0");
        }
    }

    rent() {
        return `${this.name} rented.`;
    }

    getDetails() {
        return `${this.name} - ₹${this.#pricePerDay}/day`;
    }
}


// ==========================
// Child Class - Car
// ==========================
class Car extends Vehicle {
    constructor(name, pricePerDay) {
        super(name, pricePerDay);  // super keyword
        this.fuelType = "Petrol";
    }

    // Polymorphism (method overriding)
    rent() {
        return `🚗 Car rented with AC service`;
    }
}


// ==========================
// Child Class - Bike
// ==========================
class Bike extends Vehicle {
    constructor(name, pricePerDay) {
        super(name, pricePerDay);
        this.helmetIncluded = true;
    }

    // Polymorphism
    rent() {
        return `🏍️ Bike rented with helmet`;
    }
}


// ==========================
// Rental System (Composition)
// ==========================
class RentalSystem {
    constructor() {
        this.vehicles = [];
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
        this.render();
    }

    deleteVehicle(index) {
        this.vehicles.splice(index, 1);
        this.render();
    }

    render() {
        const list = document.getElementById("vehicleList");
        list.innerHTML = "";

        this.vehicles.forEach((vehicle, index) => {
            const div = document.createElement("div");
            div.className = "vehicle-card";

            div.innerHTML = `
                <div>
                    <strong>${vehicle.getDetails()}</strong>
                </div>
                <div>
                    <button class="rent-btn" onclick="alert(system.vehicles[${index}].rent())">
                        Rent
                    </button>
                    <button class="delete-btn" onclick="system.deleteVehicle(${index})">
                        Delete
                    </button>
                </div>
            `;

            list.appendChild(div);
        });
    }
}


// ==========================
// Global System Instance
// ==========================
const system = new RentalSystem();


// ==========================
// Add Vehicle Function
// ==========================
function addVehicle() {
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const price = parseInt(document.getElementById("price").value);

    if (!name || !price) {
        alert("Please fill all fields");
        return;
    }

    let vehicle;

    if (type === "Car") {
        vehicle = new Car(name, price);
    } else {
        vehicle = new Bike(name, price);
    }

    system.addVehicle(vehicle);

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
}
