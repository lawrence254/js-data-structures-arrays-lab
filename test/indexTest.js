const sinon = require("sinon");

describe("index.js", function () {
  const driver = ["Milo", "Otis", "Garfield"];

  resetDriver = () => {
    driver = ["Milo", "Otis", "Garfield"];
    return driver;
  }

  afterEach(function () {
    expect(driver, 'Recreate original driver array').to.eql(resetDriver());
  });

  describe("Array functions", function () {
    describe("append", function () {
      it('appends pet "Odie" to the end of the pets array', function () {
        // addPetsToEnd()
        expect(addPetsToEnd(driver)).to.have.ordered.members([
          "Milo",
          "Otis",
          "Garfield",
          "Odie",
        ]);
      });
    });

    describe("prepend", function () {
      it("prepends a pet to the beginning of the pets array", function () {
        // addPetsToBegining()
        expect(addPetsToBegining(driver)).to.have.ordered.members([
          "Odie",
          "Milo",
          "Otis",
          "Garfield",
        ]);
      });
    });

    describe("removeLast", function () {
      it("removes the last pet from the pets array", function () {
        // removeLastPet()
        expect(removeLastPet(driver))
          .to.have.ordered.members(["Milo", "Otis"])
          .and.to.not.include("Garfield");
      });
    });

    describe("removeFirst", function () {
      it("removes the First pet from the pets array", function () {
        removeFirstPet()
        expect(removeFirst)
          .to.have.ordered.members(["Otis", "Garfield"])
          .and.to.not.include("Milo");
      });
    });
  });
});
