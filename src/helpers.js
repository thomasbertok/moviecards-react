String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

export const getGravatar = (emailToHash) => {
    // TODO: fallback
    return `https://www.gravatar.com/avatar/${emailToHash.hashCode().toString().toLowerCase()}?s=640&d=robohash`;
}

// validate email text
export const emailValidator = email => {
    if (!email) {
        return false;
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return false
    }
    return true
}


// maybe we complicate it later...
export const passwordValidator = pass => {
    if (!pass) {
        return false
    }
    return true
}