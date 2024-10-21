class Car {
    constructor(brand, model, year, price) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.price = price;
    }
  }
  
  const cars = [
    new Car('Henschel', 'Panzerkampfwagen Tiger Ausf. B', 1944, 2480591206),
  ];
  
  function displayCars() {
    const carTableBody = document.getElementById('carTable').getElementsByTagName('tbody')[0];
    carTableBody.innerHTML = ''; // Clear existing rows
  
    cars.forEach(car => {
      const row = carTableBody.insertRow();
      row.insertCell(0).textContent = car.brand;
      row.insertCell(1).textContent = car.model;
      row.insertCell(2).textContent = car.year;
      row.insertCell(3).textContent = car.price;
    });
  }
  
  document.getElementById('addCarForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = parseInt(document.getElementById('year').value, 10);
    const price = parseFloat(document.getElementById('price').value);
  
    const newCar = new Car(brand, model, year, price);
    cars.push(newCar);
  
    displayCars();
  
    // Clear form fields
    document.getElementById('addCarForm').reset();
  });
  
  // Initial display of cars
  displayCars();