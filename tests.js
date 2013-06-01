test( "hello test", function() {
	ok( 1 == "1", "Passed!" );
});

test( "2 equals 1", function() {
	ok( 2 == "1", "Passed!" );
});


test( "Browser is FF", function() {
	var browsername = window.navigator.userAgent;
	ok( browsername.match(/Firefox/), "UserAgent: " + browsername );
});

test( "2 empty strings are equal", function() {
	ok( "" == "", "Passed!" );
});

test( "An empty string equals null", function() {
	ok( "" == null, "Passed!" );
});

test( "Empty string equals 0", function() {
	ok( "" == 0, "Passed!" );
});

test( "Empty string equals false", function() {
	ok( "" == false, "Passed!" );
});

test( "Empty string triple-equals 0", function() {
	ok( "" === 0, "Passed!" );
});

