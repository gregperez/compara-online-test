class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name != 'Full Coverage' && this.products[i].name != 'Special Full Coverage') {
        if (this.products[i].price > 0) {
          decreasesByType(this, i, 'Mega Coverage');
        }
      } else {
        if (this.products[i].price < 50) {
          this.products[i].price = this.products[i].price + 1;
          if (this.products[i].name == 'Special Full Coverage') {
            if (this.products[i].sellIn < 11) {
              increasesPrice(this, i);
            }
            if (this.products[i].sellIn < 6) {
              increasesPrice(this, i)
            }
          }
        }
      }
      if (this.products[i].name != 'Mega Coverage') {
        this.products[i].sellIn = this.products[i].sellIn - 1;
      }
      if (this.products[i].sellIn < 0) {
        if (this.products[i].name != 'Full Coverage') {
          if (this.products[i].name != 'Special Full Coverage') {
            if (this.products[i].price > 0) {
              decreasesByType(this, i, 'Super Sale');
            }
          } else {
            this.products[i].price = this.products[i].price - this.products[i].price;
          }
        } else {
          increasesPrice(this, i);
        }
      }
    }

    return this.products;
  }
}

function decreasesByType(vm, i, type) {
  if (vm.products[i].name != type) {
    vm.products[i].price = vm.products[i].price - 1;
  }
}

function increasesPrice(vm, i) {
  if (vm.products[i].price < 50) {
    vm.products[i].price = vm.products[i].price + 1;
  }
}

module.exports = {
  Product,
  CarInsurance
}
