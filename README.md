Web de restaurante con doble función usuario/administrador.

Sin Login: Ver la carta y reservar mesa.

Con Login en USER_ROLE: Pedir cócteles o tapas via web(si estas geolocalizado correctamente) y reservar mesa.

Con Login en ADMIN_ROLE: Gestionar reservas y pedidos.


-Para geolocalizarte ir a pages/Menu.jsx y hacer caber tu latitud y longitud actual entre los baremos de la funcion getCurrentPosition dentro del useEffect pertinente.

-Para crear administrador a traves de postman cambiar el USER_ROLE por ADMIN_ROLE
