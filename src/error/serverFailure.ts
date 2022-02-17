import IFailure from "./failure"

export class ServerFailure implements IFailure {
  msg: string
  constructor(msg = "OCORREU UM ERRO") {
    this.msg = msg
  }
}
