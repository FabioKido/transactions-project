/**
 * Camada 3
 * Database - Adapter
 * Adapter(Pattern) para o tipo de persistência/acesso aos dados
 * Cria-se(nessa arquitetura) um Contrato(Interface) e uma Implementação(Classe)
 */

import pgp from 'pg-promise'
import Connection from "./Connection";

export default class PostgreSQLAdapter implements Connection {

    connection: any

    constructor() {
        this.connection =  pgp()("uri de conexão do db")
    }

    async query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params)
    }

    async findOne(statement: string, params: any): Promise<any> {
        return this.connection.one(statement, params)
    }

    async close(): Promise<void> {
        return this.connection.$pool.end()
    }
}