package test.scripting;

import java.util.Arrays;
import java.util.regex.Pattern;

public class ContactValidatorImpl implements ContactValidator {

	/*
	 * (non-Javadoc)
	 * @see test.scripting.ContactsValidator#isValidTelephone(java.lang.String, java.lang.String, java.lang.String)
	 */
	@Override
	public boolean isValidTelephone(final String ddd, final String number, final String state) {
		final int phoneDDD;
		
		try {
			phoneDDD = Integer.parseInt(ddd, 10);
		} catch (final NumberFormatException numberFormatException) {
			return false;
		}
		
		final int[] dddsWithNineDigits = {11};
		String regex = "^\\d{8}$";
		
		if (Arrays.binarySearch(dddsWithNineDigits, phoneDDD) >= 0) {
			regex = "^\\d{8,9}$";
		}

        return Pattern.compile(regex).matcher(number).find();
    }

}
