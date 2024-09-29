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

/**
 * Error messages in human readable form
 */
const errorStringPairs = [
  ["Firebase: Error (auth/invalid-email)", "Invalid email"],
  ["Firebase: Error (auth/wrong-password).", "Wrong Password"],
  ["Firebase: Error (auth/user-not-found).", "User not found"],
  ["Firebase: Error (auth/email-already-in-use).", "Naah, man!"],
  ["Firebase: Password should be at least 6 characters (auth/weak-password).", "Weak password"],
];

export const getReadableErrorMessage = (error) => {
  const pair = errorStringPairs.find((pair) => pair[0] === error);
  if (pair) {
    return pair[1];
  } else {
    return `Error: ${error}`;
  }
};

export const beautifyJSON = (json) => {
  let sttr = JSON.stringify(json, null, "\t");
  sttr = JSON.stringify(json, null, 2);
  return sttr;
};
