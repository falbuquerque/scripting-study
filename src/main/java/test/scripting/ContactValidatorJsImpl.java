package test.scripting;

class ContactValidatorJsImpl implements ContactValidator {

    private JavaScriptEngine jsEngine = JavaScriptEngine.getInstance();

    /*
     * (non-Javadoc)
     * 
     * @see test.scripting.ContactsValidator#isValidTelephone(java.lang.String,
     * java.lang.String, java.lang.String)
     */
    @Override
    public boolean isValidTelephone(final String ddd, final String number, final String state) {
        return jsEngine.invoke("isValidTelephone", ddd, number, state);
    }

}
