package test.scripting;

class PersonValidatorJsImpl implements PersonValidator {

    private final JavaScriptEngine jsEngine = JavaScriptEngine.getInstance();

    @Override
    public boolean isValidName(final String name) {
        return jsEngine.invoke("isValidName", name);
    }

    @Override
    public boolean isValidBirthDate(final String birthDate) {
        return jsEngine.invoke("isValidBirthDate", birthDate);
    }

}
