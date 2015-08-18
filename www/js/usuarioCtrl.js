/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Onsen.controller('usuarioCtrl', function($rootScope, $scope, $http) {
//    usuarioCtrl($rootScope, $scope, $http);
//});


//El controlador de usuarios
function usuarioCtrl($scope, usuarioService, usuarioFactory) {

    $scope.usuario = "";
    //Método de logueo llamado desde la vista login.html
    $scope.login = function(email, password) {
        // Hacemos una petición DELETE a la API para borrar el id que nos pase el html por parametro
//        $http.delete("/api/todo/" + id).
//                success(function(response) {
//            if (response.status === "OK") { // Si la API nos devuelve un OK...
//                getTodos(); // Actualizamos la lista de ToDo's
//            }
//        });
        modal.show();
        
        usuarioService.validarLogin(email, password)
                .then(function(data) {
                    usuarioFactory.usuario = data;
                    $scope.usuario = usuarioFactory.usuario;
                    modal.hide();
                    app.slidingMenu.setMainPage('inicio.html');
                })
                .catch(function(err) {
                    $scope.usuario = "";
                    usuarioFactory.usuario = "";
                    modal.hide();
                    
                    ons.notification.alert({
                        title: 'Info',
                        messageHTML: '<strong style=\"color: #ff3333\">Usuario o Password incorrectos!</strong>'
                    });
                });

    };
    
    $scope.isLogueado = function() {
        if (typeof (usuarioFactory.usuario) === "undefined")
            return false;
        if (usuarioFactory.usuario === "") {
            return false;
        }
        return true;
    };
    $scope.logout = function() {
        $scope.usuario = "";
        usuarioFactory.usuario = "";
        app.slidingMenu.setMainPage('inicio.html');
    };
    
    $scope.getNombre = function() {
        return usuarioFactory.usuario.nombre;
    };
    $scope.getApellido = function() {
        return usuarioFactory.usuario.apellido;
    };
}


Onsen.controller('usuarioCtrl', function($scope, usuarioService, usuarioFactory) {
    usuarioCtrl($scope, usuarioService, usuarioFactory);
});



