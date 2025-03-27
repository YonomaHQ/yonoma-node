## [Yonoma](https://yonoma.io/) Node.js Email Marketing SDK
### Install
```bash
npm install yonoma
```
### Setup
First, you need to get an API key:
```javascript
import { Yonoma } from "yonoma";

// commonjs
const { Yonoma } = require("yonoma");

const yonoma = new Yonoma("YOUR_API_KEY");
```
### Usage
#### Send your email:
```javascript
await yonoma.email.send({
  from_email: 'email@example.com',
  to_email: 'to@example.com',
  subject: 'From Yonoma.io',
  mail_template: 'Everything is working',
});
```
## Lists
#### Create new list
```javascript
await yonoma.lists.create({ list_name: "New list" });
```
#### Get list of lists
```javascript
await yonoma.lists.list();
```
#### Get one list
```javascript
await yonoma.lists.retrieve("List id");
```
#### Update list
```javascript
await yonoma.lists.update("List id", { list_name: "Updated list name" });
```
#### Delete list
```javascript
await yonoma.lists.delete("List id");
```
## Tags
#### Create new tag
```javascript
await yonoma.tags.create({ tag_name: "New tag" });
```
#### Get list of tags
```javascript
await yonoma.tags.list();
```
#### Get one tag
```javascript
await yonoma.tags.retrieve("Tag id");
```
#### Update tag
```javascript
await yonoma.tags.update("Tag id", { tag_name: "Updated tag name" });
```
#### Delete tag
```javascript
await yonoma.tags.delete("Tag id");
```
## Contacts
#### Create new contact
```javascript
await yonoma.contacts.create("List id", { 
  email: "email@example.com",
  status: "Subscribed" | "Unsubscribed",
  firstName: string, //optional
  lastName: string, //optional
  phone: string, //optional
  gender: string, //optional
  address: string, //optional
  city: string, //optional
  state: string, //optional
  country: string, //optional
  zipcode: string //optional
});
```
#### Update contact
```javascript
await yonoma.contacts.update("List id", "Contact id", {
  status: "Subscribed" | "Unsubscribed",
});
```
#### Add tag to contact
```javascript
await yonoma.contacts.addTag("Contact id", {
  tag_id: "Tag id",
});
```
#### Remove tag from contact
```javascript
await yonoma.contacts.removeTag("Contact id", {
  tag_id: "Tag id",
});
```
