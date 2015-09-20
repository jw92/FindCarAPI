'use strict'
module.exports = CarModel;
function CarModel (db,types) {
	 	var Model = db.define('car',{
  		transmision: {
	    type: types.ENUM('Tracción Trasera', 'Tracción Delantera', 
	    					 'Tracción Trasera y Traccion Delantera')
		},
		combustible: {
		 type: types.ENUM ('Gasolina','Disel')
		},
		km: types.INTEGER,
		year: types.INTEGER,
		price: types.DECIMAL(2)
},
	{
		classMethod: {
			associate: function(models){
				car.belongsTo(Models.model);
				car.belongsTo(Models.user);
				car.belongsTo(Models.color);
				car.belongsToMany(Models.wishlist,{
					through: {
						model: models.car_wishlist,
						unique: false,
					},
					foreignKey: 'car_id',
				});
			}
		}
	}
);
 	return Model;
}