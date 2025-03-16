// const body = require("express-validator")
const { body } = require('express-validator');
const ReglasValidacionUsuario = [
    body("nombre")
        .trim()
        .notEmpty()
        .withMessage("El nombre es obligatorio.")
        .isLength({ max: 100 })
        .withMessage("El nombre debe tener máximo 100 caracteres."),

    body("email")
        .notEmpty()
        .withMessage("Campo email requerido")
        .isLength({ max: 100 })
        .withMessage("El nombre debe tener máximo 100 caracteres."),
    body("password")
        .notEmpty()
        .withMessage("Campo password requerido")
        .isLength({ max: 255 })
        .withMessage("Password debe tener máximo 255 caracteres."),




    // body("")
    //     .trim()
    //     .notEmpty()
    //     .withMessage("El número de documento es obligatorio.")
    //     .isLength({ max: 11 })
    //     .withMessage("El número de documento debe tener máximo 11 caracteres."),

    // body("direccion")
    //     .trim()
    //     .isLength({ max: 75 })
    //     .withMessage("La dirección debe tener máximo 75 caracteres."),

    // body("telefono")
    //     .trim()
    //     .isLength({ max: 45 })
    //     .withMessage("El teléfono debe tener máximo 45 caracteres.")
];

export { ReglasValidacionUsuario };
