/**
 * Camada 3
 * Database - Adapter
 * Adapter(Pattern) para o tipo de persistência/acesso aos dados
 * Cria-se(nessa arquitetura) um Contrato(Interface) e uma Implementação(Classe)
 */

export default interface Connection {
    query(statement: string, params: any): Promise<any>
    findOne(statement: string, params: any): Promise<any>
    close(): Promise<void>
}