import { Request, Response } from "express";
import UsuarioModel from "../models/usuario.model";
import bcrypt from "bcryptjs";

export const crearUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    const { email, password } = body;

try {


    const existeEmail = await UsuarioModel.findOne({ email: email});

    if (existeEmail){
        return res.status(409).json({
            ok: false,
            msg: `Ya existe ese correo ${ email }`
        })
    }

    
    const newUsuario = new UsuarioModel({
        ...body,
    }); 


    if (password){
    //Encripto la contraseña
    const salt = bcrypt.genSaltSync(10);
    newUsuario.password = bcrypt.hashSync(password, salt)
    }
    const usuarioCreado = await newUsuario.save();

    res.status(200).json({
        ok: true,
        msg: "Usuario creado satisfactoriamente",
        usuario: usuarioCreado
    })
} catch (error) {
    console.log(error)
    res.status(400).json({
        ok: false,
        error,
        msg: "Error al crear usuario."
    })
}


}

export const getUsuarios = async (req: Request, res: Response) => {

    try {
        const usuarios = await UsuarioModel.find();

        res.json({
            ok: true,
            usuarios,
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar usuarios",
        })
    }
}

export const getUsuario = async (req: Request, res: Response) => {

    try {
        const id = req.params.id;
        const usuario = await UsuarioModel.findById({_id: id});

        res.json({
            ok: true,
            usuario,
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar usuarios",
        })
    }
}

export const updateUsuario = async (req: Request, res: Response) => {

    try {
        const id = req.params.id;

        const { body } = req;

        const usuario = await UsuarioModel.findByIdAndUpdate(id, body, {new: true});

        res.json({
            ok: true,
            usuario,
            msg: "Usuario actualizado"
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar usuarios",
        })
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {

    try {
        const id = req.params.id;
        const usuario = await UsuarioModel.deleteOne({_id: id});

        res.json({
            ok: true,
            usuario,
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar usuarios",
        })
    }
}