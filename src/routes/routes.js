import {
    addNewContact,
    getContacts,
    getSpecificContact,
    updateContact,
    deleteContact
  } from "../controllers/controller";
  
  const routes = app => {
    //Contact route (whole collection or posting to db)
    app
      .route("/contacts")
      .get(getContacts)
      .post(addNewContact);
      var contacts=[{
        "Firstname": "bob",
      "lastname": "jones",
      "email": "bob@gmail.com",
      "Phonenumber": "240-555-5555",
      "company": "jersey",
      "date":"10/12/2017",
      }]
    //specific id's in database
    app
      .route("/contacts/:contactId")
      .get(getSpecificContact)
      .put(updateContact)
      .delete(deleteContact);
  };
  
  export default routes;