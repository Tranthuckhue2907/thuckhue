var person = {
  name: "Khue",
  age: 21,
  occupation: "Sinh Vien",
  displayInformation: function (infor) {
    return (
      "name:" + this.name + "age:" + this.age + "occupation:" + this.occupation
    );
  },
};
person.displayInformation();
