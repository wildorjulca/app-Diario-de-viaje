
-- USUARIO

-- FILTRO DE SUUARIOS
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllUsuario`(
  IN _filtro VARCHAR(100)
)
BEGIN
IF _filtro = '' THEN
  SELECT * FROM usuarios;
ELSE
    SELECT * FROM usuarios WHERE nombre LIKE CONCAT('%', _filtro, '%');
END IF;
END

-- INSETAR USUARIO
CREATE DEFINER=`root`@`localhost` PROCEDURE `registerUsuario`(
 IN _nombre VARCHAR(100),
 IN _email VARCHAR(100),
 IN _password VARCHAR(255),
 IN _rol enum('admin', 'usuario'),
 IN _foto_perfil VARCHAR(255)
)
BEGIN
    INSERT INTO usuarios (nombre, email,password,rol,foto_perfil)
     VALUES( _nombre, _email, _password, _rol, _foto_perfil) ;
END