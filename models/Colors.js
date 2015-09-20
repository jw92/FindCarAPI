'use strict'
module.exports = ColorModel;
//Modelo de los colores
function ColorModel (db,types) {
	 	var Model = db.define('color',
	 	{
			name: {type: types.STRING}
		},
		{
	 		classMethods: {
			 	associate: function (models){
			 		Model.hasMany(models.car, {as: 'cars'});
			 	}
		 	}
		}
);
 	return Model;
}