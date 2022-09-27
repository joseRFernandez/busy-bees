// list all validator imports here
import usernameValidators from "./usernameValidators";
import passwordValidators from "./passwordValidators";

export default {
  mixins: [usernameValidators, passwordValidators],
};
