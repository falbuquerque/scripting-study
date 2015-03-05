package test.scripting;

public abstract class ValidatorFactory {

    public static final String JS_VALIDATOR_FACTORY = "JavaScript";

    private static ValidatorFactory jsValidatorFactory = new JsValidatorFactory();

    public static ValidatorFactory getValidatorFactoryByName(String name) {

        if (JS_VALIDATOR_FACTORY.equalsIgnoreCase(name)) {
            return getJsValidatorFactory();
        }

        throw new IllegalArgumentException("The name informed isn't referent to any available factory.");
    }

    public static ValidatorFactory getJsValidatorFactory() {
        return jsValidatorFactory;
    }

    public abstract ContactValidator getContactValidator();

    public abstract PersonValidator getPersonValidator();

    public abstract UserValidator getUserValidator();
}
