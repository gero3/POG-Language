class Tokens {

	constructor() {

		this._tokenDeclarations = [];

	}
	check( text, index ) {

		var token = undefined;
		this._tokenDeclarations.forEach( function ( tokenDeclaration ) {

			if ( token === undefined ) {

				token = tokenDeclaration.check( text, index );

			}

		} );
		return token;

	}

}

var tokensObject = new Tokens();
export default tokensObject;
