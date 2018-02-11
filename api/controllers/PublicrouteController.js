/**
 * PublicrouteController
 *
 * @description :: Server-side logic for managing publicroutes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getRequestHandler: function getRequestHandler(req,res) {
		res.ok("PUBLIC ROUTE");
	}
};
