import {TransportService} from "../servise/TransportServise.js";

export class TransportController {
  static async addTransport(req, res, next) {
    try {
      const transport = await TransportService.addTransport(req.body);
      res.status(201).json(transport);
    } catch (error) {
      next(error);
    }
  }

  static async changeTransport(req, res, next) {
    try {
      const updated = await TransportService.changeTransport(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  }

  static async deleteTransport(req, res, next) {
    try {
      const deleted = await TransportService.deleteTransport(req.params.id);
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  }

  static async getAllTransports(req, res, next) {
    try {
      const { branch, search } = req.query;
      const transports = await TransportService.getAllTransports(branch, search);
      res.status(200).json(transports);
    } catch (error) {
      next(error);
    }
  }

  static async getTransportById(req, res, next) {
    try {
      const transport = await TransportService.getTransportById(req.params.id);
      res.status(200).json(transport);
    } catch (error) {
      next(error);
    }
  }
}
