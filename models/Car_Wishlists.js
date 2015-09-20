'use strict'
module.exports = CarWishListModel;
//Modelo de la relacion de los carros y la lista de deseo.
function CarWishListModel (db,types) {
	 	var Model = db.define('car_wishlist',{
	car_id: {
	 type: types.INTEGER,
		unique: 'car_wish_list',
		primaryKey: true
	},
	wishlist_id: {
	 type: types.INTEGER,
		unique: 'car_wish_list',
		primaryKey: true
	}
});
 	return Model;
}