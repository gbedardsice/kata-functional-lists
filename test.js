Test.describe('Example list tests', () => {
	var mt, l1, l2, l3, l4, l5;

	Test.before(() => {
		mt = new EmptyList();
		l1 = mt.push('a'); // (a)
		l2 = mt.push('b'); // (b)
		l3 = l1.append(l2); // (a b)
		l4 = l2.push('c'); // (c b)
		l5 = l3.append(l4); // (a b c b)
	});

	Test.it( 'Simple checks', () => {
		Test.expect(mt.isEmpty(), 'Empty List is empty');
		Test.expect(!l1.isEmpty(), 'Non-empty list is not empty');

		Test.assertEquals(mt.toString(), '()');
		Test.assertEquals(l1.toString(), '(a)');
		Test.assertEquals(l2.toString(), '(b)');
		Test.assertEquals(l3.toString(), '(a b)');
		Test.assertEquals(l5.toString(), '(a b c b)');

		Test.assertEquals(mt.length(), 0, 'Empty list has length zero');
		Test.assertEquals(l1.length(), 1, 'Empty list has length zero');
		Test.assertEquals(l2.length(), 1);
	});

	Test.it('Shared structure', () => {
		Test.assertEquals(l3.tail(), l2);
		Test.assertEquals(l5.tail().tail(), l4);
	});

	Test.it('Head value', () => {
		Test.assertEquals(l1.head(), 'a');
		Test.assertEquals(l2.head(), 'b');
		Test.assertEquals(l5.head(), 'a');
	});
});
