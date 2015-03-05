package test.scripting;

class JsValidatorFactory extends ValidatorFactory {

    private final ContactValidator contactValidator = new ContactValidatorJsImpl();
    private final PersonValidator personValidator = new PersonValidatorJsImpl();
    private final UserValidator userValidator = new UserValidatorJsImpl();

    /*
     * (non-Javadoc)
     * 
     * @see test.scripting.ValidatorFactory#getContactValidator()
     */
    @Override
    public ContactValidator getContactValidator() {
        return contactValidator;
    }

    /*
     * (non-Javadoc)
     * 
     * @see test.scripting.ValidatorFactory#getPersonValidator()
     */
    @Override
    public PersonValidator getPersonValidator() {
        return personValidator;
    }

    @Override
    public UserValidator getUserValidator() {
        return userValidator;
    }

}
