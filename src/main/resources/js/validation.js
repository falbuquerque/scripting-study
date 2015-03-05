var utils = new Utils();

/**
 * Verifica se um telefone � v�lido.
 * 
 * @param phoneDDD o DDD
 * @param phoneNumber o n�mero do telefone
 * @param state a UF do telefone
 * @returns <code>true</code> se o telefone for v�lido; <code>false</code> caso contr�rio
 */
function isValidTelephone(phoneDDD, phoneNumber, state) {
	phoneDDD = utils.getDigits(phoneDDD);
	
	if (/^\d{2,3}$/.test(phoneDDD)) {
		var dddsWithNineDigits = [ "11" ],
			regex = (dddsWithNineDigits.indexOf(phoneDDD) != -1) ? /^\d{8,9}$/ : /^\d{8}$/;

		phoneNumber = utils.getDigits(phoneNumber);
		
		return regex.test(phoneNumber);
	}

	return false;
}

/**
 * Verifica se um nome � v�lido. O nome deve ter ao menos o primeiro e o 
 * �ltimo nome, formados por caracteres (obrigatoriamente) e pode ter d�gitos.
 * 
 * @param name o nome que ser� validado
 * @returns <code>true</code> se o nome for v�lido; <code>false</code> caso contr�rio
 */
function isValidName(name) {
	var split = name.trim().split(/\s+/);
	
	if (split.length > 1) {
		var regex = /^\d*[a-z'-]+\d*$/i;
		
		for (var i = 0; i < split.length; i++) {
			
			if (!regex.test(split[i])) {
				return false;
			}
			
		}
		
		return true;
	}
	
	return false;
}

/**
 * Verifica se um nome � v�lido. O nome deve ter ao menos o primeiro e o 
 * �ltimo nome, formados por caracteres (obrigatoriamente) e pode ter d�gitos.
 * O formato permitido �: 
 * (letras ou d�gitos ou . ou _ ou -)@(letras ou d�gitos ou . ou _ ou -).(3 letras ou d�gitos).(2 letras)
 * 
 * @param name o nome que ser� validado
 * @returns <code>true</code> se o nome for v�lido; <code>false</code> caso contr�rio
 */
function isValidEmail(email) {
	return /^[\w\.-]+@[\w-]+\.\w{2,3}(\.[a-z]{2})?$/i.test(email);
}

/**
 * Verifica se uma data de nascimento � v�lida. Ela deve ser uma data v�lida 
 * e anterior � data atual. O formato esperado � dd/mm/yyyy.
 * 
 * @param birthDate a data que ser� validada
 * @returns <code>true</code> se a data for v�lida; <code>false</code> caso contr�rio
 */
function isValidBirthDate(birthDate) {
	
	if (isValidDate(birthDate)) {
		var split = birthDate.split("/");
		birthDate = new Date(split[2], (split[1] - 1), split[0]);
		
		return birthDate < new Date();
	}
	
	return false;
}

/**
 * Verifica se uma data � v�lida. Ela deve ser uma data no formato dd/mm/yyyy.
 * 
 * @param date a data que ser� validada
 * @returns <code>true</code> se a data for v�lida; <code>false</code> caso contr�rio
 */
function isValidDate(date) {
	return /^\d{2}\/\d{2}\/\d{4}$/.test(date);
}

/**
 * Verifica se uma String � num�rica.
 * 
 * @param str a String que ser� testada
 * @returns <code>true</code> se a String for encontrada; 
 * <code>false</code> caso contr�rio
 */
function isNumeric(str) {
	return /^\d+$/.test(str);
}

/**
 * Classe que cont�m m�todos utilit�rios.
 */
function Utils() {
	
	/**
	 * Obt�m apenas os d�gitos da String fornecida.
	 * 
	 * @param str A String que cont�m os d�gitos
	 * @returns os d�gitos da String fornecida
	 */
	this.getDigits = function(str) {
		return this.replaceAll(str, /\D/, "");
	};
	
	/**
	 * Substitui todas as ocorr�ncias de <code>search</code> por <code>substitute</code> 
	 * em <code>str</code>.
	 * 
	 * @param str a String na qual a busca e a substitui��o ser�o realizadas
	 * @param search a String ou Regex com base na qual a busca ser� realizada
	 * @param substitute a String pela qual os matches da busca ser�o substitu�dos
	 * @returns a String com as substitui��es realizadas
	 */
	this.replaceAll = function(str, search, substitute) {

		while (this.isSearchPresent(str, search)) {
			str = str.replace(search, substitute);
		}

		return str;
	};

	/**
	 * Verifica se <code>search</code> est� presente em <code>str</code>.
	 * 
	 * @param str a String na qual a busca ser� realizada
	 * @param search a String ou Regex que ser� buscada na String
	 * @returns <code>true</code> se a busca for encontrada; 
	 * <code>false</code> caso contr�rio
	 */
	this.isSearchPresent = function(str, search) {
		
		if (search instanceof String) {
			return (str.indexOf(search) != -1);
		} else {
			return search.test(str);
		}
		
	};

};
