'use strict'
module.exports = ModelsModel;
//Modelo de los diferentes tipos de carros (modelos)
function ModelsModel (db,types) {
 	var Model = db.define('model',
 		{
			name: {type: types.STRING}
		},
		{
	 		classMethods: {
			 	associate: function (models){
			 		Model.belongsTo(models.manufacturer);
			 		Model.hasMany(models.car, {as: 'Cars'});
			 	}
		 	}
		}
);
 	return Model;
}