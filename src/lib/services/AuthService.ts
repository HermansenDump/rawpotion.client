import {Log, UserManager} from "oidc-client";

export class AuthService {
    private userManager: UserManager;

    constructor() {
        const settings = {
            authority: "https://localhost:5001/",
            client_id: "rawpotion.client",
            redirect_uri: "http://localhost:3000/identity/login/callback",
            response_type: "code",
            scope: "openid profile",
        };

        this.userManager = new UserManager(settings);

        Log.logger = console;
        Log.level = Log.INFO;
    }

    public login() {
        return this.userManager.signinRedirect();
    }

    async signinRedirectCallback() {
        await this.userManager.signinRedirectCallback()
            .then(() => {
                console.log("User is logged in")
            }, error => {
                console.error(error);
            });
    }

    async getUser() {
        return this.userManager.getUser();
    }
}
