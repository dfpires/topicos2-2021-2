import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import {verify} from 'jsonwebtoken'

export default function isAutheticated(request: Request, response: Response, next: NextFunction): void {

    // verifica se o token foi passado
    // o token é passado no header da requisição
    const authHeader = request.headers.authorization
    // o token foi passado?
    if (!authHeader){
        throw new AppError('Token está ausente')
    }
    // o token está correto?
    // o token vem no seguinte formato
    // BEARED kdsjfklsdjfksjdkfjsdkjflksd
    // token = kdsjfklsdjfksjdkfjsdkjflksd
    const [, token] = authHeader.split(' ') // separamos a palavra BEARED do token

    try {
        const tokenDecodificado = verify(token, 'gdgdfgdf43534534')

    }
    catch{
        throw new AppError('Token é inválido')
    }

}