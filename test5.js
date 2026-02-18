var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  price: function() {
    var total = 0;

    for (var key in this) {
      if (typeof this[key] === "string") {
        var number = parseInt(this[key]);
        total = total + number;
      }
    }

    return total + " грн";
  },

  minPrice: function() {
    var min = Infinity;

    for (var key in this) {
      if (typeof this[key] === "string") {
        var number = parseInt(this[key]);

        if (number < min) {
          min = number;
        }
      }
    }

    return min + " грн";
  },

  maxPrice: function() {
    var max = 0;

    for (var key in this) {
      if (typeof this[key] === "string") {
        var number = parseInt(this[key]);

        if (number > max) {
          max = number;
        }
      }
    }

    return max + " грн";
  }
};

services["Розбити скло"] = "200 грн";
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());