var utils = new Utils();

/**
 * Verifica se um telefone é válido.
 * 
 * @param phoneDDD o DDD
 * @param phoneNumber o número do telefone
 * @param state a UF do telefone
 * @returns <code>true</code> se o telefone for válido; <code>false</code> caso contrário
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
 * Verifica se um nome é válido. O nome deve ter ao menos o primeiro e o 
 * último nome, formados por caracteres (obrigatoriamente) e pode ter dígitos.
 * 
 * @param name o nome que será validado
 * @returns <code>true</code> se o nome for válido; <code>false</code> caso contrário
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
 * Verifica se um nome é válido. O nome deve ter ao menos o primeiro e o 
 * último nome, formados por caracteres (obrigatoriamente) e pode ter dígitos.
 * O formato permitido é: 
 * (letras ou dígitos ou . ou _ ou -)@(letras ou dígitos ou . ou _ ou -).(3 letras ou dígitos).(2 letras)
 * 
 * @param name o nome que será validado
 * @returns <code>true</code> se o nome for válido; <code>false</code> caso contrário
 */
function isValidEmail(email) {
	return /^[\w\.-]+@[\w-]+\.\w{2,3}(\.[a-z]{2})?$/i.test(email);
}

/**
 * Verifica se uma data de nascimento é válida. Ela deve ser uma data válida 
 * e anterior à data atual. O formato esperado é dd/mm/yyyy.
 * 
 * @param birthDate a data que será validada
 * @returns <code>true</code> se a data for válida; <code>false</code> caso contrário
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
 * Verifica se uma data é válida. Ela deve ser uma data no formato dd/mm/yyyy.
 * 
 * @param date a data que será validada
 * @returns <code>true</code> se a data for válida; <code>false</code> caso contrário
 */
function isValidDate(date) {
	return /^\d{2}\/\d{2}\/\d{4}$/.test(date);
}

/**
 * Verifica se uma String é numérica.
 * 
 * @param str a String que será testada
 * @returns <code>true</code> se a String for encontrada; 
 * <code>false</code> caso contrário
 */
function isNumeric(str) {
	return /^\d+$/.test(str);
}

/**
 * Classe que contém métodos utilitários.
 */
function Utils() {
	
	/**
	 * Obtém apenas os dígitos da String fornecida.
	 * 
	 * @param str A String que contém os dígitos
	 * @returns os dígitos da String fornecida
	 */
	this.getDigits = function(str) {
		return this.replaceAll(str, /\D/, "");
	};
	
	/**
	 * Substitui todas as ocorrências de <code>search</code> por <code>substitute</code> 
	 * em <code>str</code>.
	 * 
	 * @param str a String na qual a busca e a substituição serão realizadas
	 * @param search a String ou Regex com base na qual a busca será realizada
	 * @param substitute a String pela qual os matches da busca serão substituídos
	 * @returns a String com as substituições realizadas
	 */
	this.replaceAll = function(str, search, substitute) {

		while (this.isSearchPresent(str, search)) {
			str = str.replace(search, substitute);
		}

		return str;
	};

	/**
	 * Verifica se <code>search</code> está presente em <code>str</code>.
	 * 
	 * @param str a String na qual a busca será realizada
	 * @param search a String ou Regex que será buscada na String
	 * @returns <code>true</code> se a busca for encontrada; 
	 * <code>false</code> caso contrário
	 */
	this.isSearchPresent = function(str, search) {
		
		if (search instanceof String) {
			return (str.indexOf(search) != -1);
		} else {
			return search.test(str);
		}
		
	};

};
