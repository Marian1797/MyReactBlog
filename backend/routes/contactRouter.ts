import express, {Request, Response, Router} from "express";
import * as bodyParser from "body-parser";


import * as contactModel from "../models/contact";
import {Contact} from "../types/Contact";
const contactRouter = express.Router();
var jsonParser = bodyParser.json();


contactRouter.get("/", async (req: Request, res: Response) => {
  contactModel.findAll((err: Error, contact: Contact[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": contact});
  });
});



contactRouter.get("/:id", async (req: Request, res: Response) => {
  const contactId: number = Number(req.params.id);
  contactModel.findOne(contactId, (err: Error, contact: Contact) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": contact});
  })
});








export {contactRouter};