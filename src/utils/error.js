export class ValidationError extends Error{
    constructor(status, message) {
        super()
        this.name = "ValidationError"
        this.status = status
        this.message = message
    }
}

export class InternalServerError extends Error{
    constructor(status, message) {
        super()
        this.name = "InternalServerError"
        this.status = status
        this.message = message
    }
}

export class ForbiddenError extends Error {
    constructor(status, message) {
      super(message);
      this.name = "ForbiddenError";
      this.status = status || 403;
    }
  }
  
    export class NotFoundError extends Error {
    constructor(status, message) {
      super(message);
      this.name = "NotFoundError";
      this.status = status || 404;
    }
}