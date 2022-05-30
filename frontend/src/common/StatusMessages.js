const statusMessages = [
  {
    index: "networkError",
    en: "Network error.",
  },
  {
    index: 401,
    en: "Missing credentials.",
  },
  {
    index: 402,
    en: "Access verification required or token expired.",
  },
  {
    index: 403,
    en: "Bad credentials.",
  },
  {
    index: 409,
    en: "This username or email has been registered. Please choose another username/email to new registration.",
  },
  {
    index: "tryingToLogout",
    en: "I am trying to logging out. Please wait!",
  },
  {
    index: "tryingToSignIn",
    en: "I'm trying to sign in. Please, wait!",
  },
  {
    index: "signupSuccessfull",
    en: "Successfull sign up. Check your email for your confirmation code to access this site!",
  },
  {
    index: "confirmed",
    en: "Confirmation successfully. Please, sign in!",
  },
  {
    index: 909,
    en: "Unknown error.",
  },
]

const message = (status) => {
  const messageObject = statusMessages.filter((msg) => msg.index === status);
  if (messageObject.length === 1) {
    return messageObject[0].en;
  } else {
    return "Unknown error.";
  }
}

module.exports = { message }