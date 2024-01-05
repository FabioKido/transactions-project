/**
 * Camada 3
 * Http Server - Adapter
 * Cria-se(nessa arquitetura) um Contrato(Interface) e uma Implementação(Classe)
 */

export default interface HttpServer {
    on(method: string, url: string, callback: Function): void
    listen(port: number): void
}