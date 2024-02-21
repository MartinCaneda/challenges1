console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!
function showWelcomeMessage(userName, userRole) {
  console.log("Welcome ${userName}! You are logged in now as ${userRole}.");
}

function showErorMessage(errorMessage) {
  console.log("Login error: ${errorMessage}");
}

handleUserLogin(showWelcomeMessage, showErorMessage, "Jane Doe");

handleUserLogin(showWelcomeMessage, showErorMessage, "John Doe");
