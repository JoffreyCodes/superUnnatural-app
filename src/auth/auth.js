const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const URL_DOMAIN = process.env.REACT_APP_URL_DOMAIN
const URL_PATH = process.env.REACT_APP_URL_PATH
const PUBLIC_URL = URL_DOMAIN + URL_PATH
const REDIRECT_URL_AFTER_LOGIN = PUBLIC_URL;
const PREVIEW_ID = process.env.REACT_APP_PREVIEW_ID
const SPACE_DELIMITER = "%20";
const SCOPES = [
    "user-top-read",
    "user-library-read",
    "user-library-modify"       
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

module.exports ={PUBLIC_URL, URL_DOMAIN, URL_PATH, PREVIEW_ID, CLIENT_ID, CLIENT_SECRET, SPOTIFY_AUTHORIZE_ENDPOINT, REDIRECT_URL_AFTER_LOGIN, SCOPES_URL_PARAM }