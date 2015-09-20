'use strict'
module.exports = ManufacturerModel;
//Modelos de los fabricantes.
function ManufacturerModel (db,types) {
	 	var Model = db.define('manufacturer',{
		name: {type: types.STRING}
},
{
	classMethods: {
		associate: function (models){
			Model.hasMany(models.model,{as: 'models'});
		}
	}
}
);
 	return Model;
}