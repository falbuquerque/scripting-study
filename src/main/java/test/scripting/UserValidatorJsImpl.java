package test.scripting;

class UserValidatorJsImpl implements UserValidator {

    private JavaScriptEngine jsEngine = JavaScriptEngine.getInstance();

    @Override
    public boolean isValidLogin(final String login) {
        return jsEngine.invoke("isValidEmail", login);
    }

}
