/**
 * ProtectedrouteController
 *
 * @description :: Server-side logic for managing protectedroutes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getRequestHandler: function getRequestHandler(req,res) {
		console.log("entered");
		res.ok("PROTECTED ROUTE ACCESSIBLE");
	}
};
