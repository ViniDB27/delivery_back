module.exports = class ClientModel {
  constructor({
    id,
    document,
    name,
    email,
    password,
    phone,
    street,
    number,
    neighborhood,
    city,
    zipCode,
  }) {
    this.id = id;
    this.document = document;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.city = city;
    this.zipCode = zipCode;
  }
};
