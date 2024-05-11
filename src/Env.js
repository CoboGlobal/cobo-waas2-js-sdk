class Env {
    constructor(basePath) {
        this.basePath = basePath;
    }
}

Env.PROD = new Env("https://api.cobo.com/v3");
Env.DEV = new Env("https://api.dev.cobo.com/v3");
export default Env;
