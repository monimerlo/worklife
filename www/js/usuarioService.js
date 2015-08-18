/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Onsen.service('usuarioService', function($http, $q) {
    this.validarLogin = function(email, password) {
        //defered = diferido (asincrono)
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get('http://localhost:8080/wl/webresources/ws/login/' + email + '/' + password)
                .success(function(data) {
                    defered.resolve(data);
                })
                .error(function(err) {
//                    console.log(JSON.stringify(err));
                    defered.reject(err);
                });

        return promise;
    };
    
    
});

