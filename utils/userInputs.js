const getUserInputElements = form => {
  const emailInput = form.children['user-email_input'];

  const getUserPasswdInput = () => {
    return form.children['user-passwd_input--wrapper'].children[
      'user-passwd_input--container'
    ].children['user-passwd_input'];
  };

  const passwdInput = getUserPasswdInput();

  return { emailInput, passwdInput };
};

const getUserInputValues = form => {
  const { emailInput, passwdInput } = getUserInputElements(form);

  return { email: emailInput.value, passwd: passwdInput.value };
};

const clearUserInputValues = form => {
  const { emailInput, passwdInput } = getUserInputElements(form);

  emailInput.value = '';
  passwdInput.value = '';
};

export { clearUserInputValues, getUserInputValues };
