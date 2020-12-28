class AuthResponse {
    constructor(success, response) {
        this.success = success;
        this.response = response;
    }

    get tokenGenerated() {
        return this.success === true;
    }
}

module.exports =  AuthResponse;