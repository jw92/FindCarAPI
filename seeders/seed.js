var model = require('../models/Model.js');	
var Users = model.user;
var Colors = model.color
var Models = model.model;		
var Manufacturers = model.manufacturer;
Users
  .create({username: 'lpaulino',password: '123123',email: 'leonelpaulino18@gmail.com'});
Users
  .create({username: 'lruiz',password: '123123',email: 'luimiruiz@gmail.com'});
Users
  .create({username: 'gwu',password: '123123',email: 'gilvenwu@gmail.com'});

Colors
	.create({name:'Azul'});
Colors
	.create({name: 'Rojo'});
Colors
	.create({name: 'Amarillo'});
Colors
	.create({name: 'Verde'});
Colors
	.create({name: 'Negro'});
Manufacturers
	.create({name:'Honda'});
Manufacturers
	.create({name:'Toyota'});
Manufacturers
	.create({name:'BMW'});
Manufacturers
	.create({name:'Mercedes'});
Models
	.create({name: 'Civic',manufacturerId:1});
Models
	.create({name: 'Acoord',manufacturerId:1});
Models
	.create({name: 'Corolla',manufacturerId:2});
Models
	.create({name: 'Camry',manufacturerId:2});
Models
	.create({name: 'M-8',manufacturerId:3});
Models
	.create({name: 'M-6',manufacturerId:3});
Models
	.create({name: 'E 200',manufacturerId:4});
Models	
	.create({name: 'E 250',manufacturerId:4});











