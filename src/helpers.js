/**
 * convert string to hash
 * https://stackoverflow.com/a/7616484
 */
String.prototype.hashCode = function () {
  var hash = 0,
    i,
    chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

/**
 * get gravatar from email address
 */
export const getGravatar = (emailToHash) => {
  // TODO: fallback
  return `https://www.gravatar.com/avatar/${emailToHash.hashCode().toString().toLowerCase()}?s=640&d=robohash`;
};

/**
 * validate email
 */
export const emailValidator = (email) => {
  if (!email) {
    return false;
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return false;
  }
  return true;
};

/**
 * password validator
 */
export const passwordValidator = (pass) => {
  /**
   * TODO: implement it!
   */
  if (!pass) {
    return false;
  }
  return true;
};
