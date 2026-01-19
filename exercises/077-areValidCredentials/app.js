function areValidCredentials(name, password) {
    if (name.length > 2 && password.length > 8) {
        return true;
    }
    return false;
}

console.log(areValidCredentials("Ritu", "mylongpassword")); // true