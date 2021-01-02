class Token {

	constructor( value, start, length ) {

		this.indentifier = this.constructor.name;
		this.value = value;
		this.start = start;
		this.length = length;

	}
	check( ) {

		throw new Error( "Token.Check should be overriden by implementation in subclass." );

	}

}

export default Token;
