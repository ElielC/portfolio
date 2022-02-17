import IFailure from "./failure"

export class ClientFailure implements IFailure {
  msg: string
  constructor(msg = "OCORREU UM ERRO") {
    this.msg = msg
  }
}
