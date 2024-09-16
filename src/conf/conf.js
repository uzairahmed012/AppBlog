const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteUrlBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;

/*
Config file is used to use .env variables (It can be use directly but the problem if
in any case enviroment varaiable not loaded properly, it will crash whole application
debugging can be hard. .env file varaiables should be in string so config file is 
important in that way as we pass all varaiables through string method which will make
it secure.)
*/