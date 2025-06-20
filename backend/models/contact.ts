import { Contact } from "./../types/Contact";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM contact`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err); 
    }
    const rows = <RowDataPacket[]>result;
    const contacts: Contact[] = [];
    rows.forEach((row) => {
      const contact: Contact = {
        id: row.id,
        nume: row.nume,
        prenume: row.prenume,
        email: row.email,
        mesaj: row.mesaj,
        data_adaugare: row.data_adaugare,
       
      };
      contacts.push(contact);
    });
    callback(null, contacts);
  });
};



// Get one user
export const findOne = (contactId: number, callback: Function) => {
  const queryString = `SELECT * FROM contact WHERE p.id=?`;
  db.query(queryString, contactId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const contact: Contact = {
     id: row.id,
        nume: row.nume,
        prenume: row.prenume,
        email: row.email,
        mesaj: row.mesaj,
        data_adaugare: row.data_adaugare
    };
    callback(null, contact);
  });
};

