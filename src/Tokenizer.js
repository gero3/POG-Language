import tokens from "./Tokens/Tokens.js";

class Tokenizer {

	constructor( TokenizerOptions ) {

		this.options = TokenizerOptions | {};

	}
	tokenize( text ) {

		var result = [];
		var index = 0;
		while ( index < text.length ) {

			var token = tokens.check( text, index );
			if ( token === undefined ) {

				throw new Error( `We couldn't parse next token at index ${index}.` );

			} else if ( index <= token.start + token.length ) {

				throw new Error( `We couldn't parse next token at index ${index} because the token returns a lower index then the starting index.` );

			} else {

				result.push( token );
				index = token.start + token.length;

			}

		}

		return result;

	}

}

export default Tokenizer;
