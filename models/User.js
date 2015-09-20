'use strict'
var bcrypt = require('bcrypt');
module.exports = UserModel;
//Modelo del usuario.
function UserModel (db,types) {
	 	var Model = db.define('user',
 	{
		username: {
			type: types.STRING,
			primaryKey: true,
			validate: {
				min: 5
			}

		},
		email: {
			type: types.STRING,
			allowNull: false,
			validate: {
				isEmail: true,
			}
		},
  		password: {
	    type: types.STRING,
	    allowNull: false,
	    validate: {
	    	min: 6
	    },
	    set: function (val) {
    		 var salt = bcrypt.genSaltSync(10);
	         var value = bcrypt.hashSync(val,salt);
	         this.setDataValue('password',value);
	     }
		}			
	},
	{
		classMethods: {
			associate: function(models){
			 Model.hasMany(models.car, {as: 'cars'});
			 Model.hasOne(models.wishlist,{as:'wishlist'})
			}
		}
	}
);
 	return Model;
}
