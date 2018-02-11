
module.exports.routes = {
  'post /login': 'AuthController.login',
  'get /login': 'UserController.renderLoginPage',
  'post /signup': 'UserController.create',
  'get /signup': 'UserController.registerRegisterPage',
  'get /Publicroute': 'PublicrouteController.getRequestHandler',
  'get /Protectedroute': 'ProtectedrouteController.getRequestHandler'
}
