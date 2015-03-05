import org.springframework.util.StopWatch;

import test.scripting.ContactValidator;
import test.scripting.ContactValidatorImpl;
import test.scripting.ValidatorFactory;

class Test {

    public static void main(String[] args) {
        final ValidatorFactory validatorFactory = ValidatorFactory.getValidatorFactoryByName("JavaScript");
        final StopWatch stopWatch = new StopWatch();
        final ContactValidator validator = new ContactValidatorImpl();
        final ContactValidator validatorJs = validatorFactory.getContactValidator();

        validator.isValidTelephone("11", "66569989", "SP");
        validatorJs.isValidTelephone("11", "66569989", "SP");

        stopWatch.start("java");
        for (int i = 0; i < 10000000; i++) {
            validator.isValidTelephone("11", "66569989", "SP");
        }
        stopWatch.stop();

        stopWatch.start("javascript");
        for (int i = 0; i < 10000000; i++) {
            validatorJs.isValidTelephone("11", "66569989", "SP");
        }
        stopWatch.stop();

        System.out.println(stopWatch);
    }

}
