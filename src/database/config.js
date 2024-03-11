import {initializeApp} from "firebase/app";
import {getDatabase} from 'firebase/database'

const config = {
    apiKey: "AIzaSyBe0Hybze0iRNPNQhxUpeMdXzAK2uqT3dQ",
    authDomain: "galeriapp-834e4.firebaseapp.com",
    databaseURL: "https://galeriapp-834e4-default-rtdb.firebaseio.com",
    projectId: "galeriapp-834e4",
    storageBucket: "galeriapp-834e4.appspot.com",
    messagingSenderId: "894057485785",
    appId: "1:894057485785:web:05f91e4f2922b7434db5c8",
    measurementId: "G-4NXYWGP6PW"
};

const app = initializeApp(config);

const db = getDatabase(app);


export {db};