import { Client, Account, Databases } from "appwrite";
export const projectId = "Your Project ID";
export const databaseId = "Your Database ID";
export const noteCollectionId = "Your collection Id";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject(projectId);

export const account = new Account(client);

//Database
export const databases = new Databases(client, projectId);
