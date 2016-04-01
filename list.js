class List {}

class EmptyList extends List {
	constructor() {
		super();
	}

	toString() {
		return '()';
	}

	isEmpty() {
		return true;
	}

	length() {
		return 0;
	}

	push(x) {
		return new ListNode(x, this);
	}

	remove(x) {
		return this;
	}

	append(xs) {
		return xs;
	}

	values() {
		return [];
	}
}

class ListNode extends List {
	constructor(value, next) {
		super();
		this.next = next;
		this.value = value;
	}

	isEmpty() {
		return false;
	}

	toString() {
		return '(' + this.values().join(' ') + ')';
	}

	head() {
		if (this.next instanceof EmptyList) {
			return this.value;
		}

		return this.next.head();
	}

	tail() {
		return this.next;
	}

	length() {
		return this.next.length() + 1;
	}

	push(x) {
		return new ListNode(x, this);
	}

	contains(x) {
		if (this.value === x) {
			return true;
		}

		if (this.next instanceof EmptyList) {
			return false;
		}

		return this.next.contains(x);
	}

	remove(x) {
		if (!this.contains(x)) {
			return this;
		}

		if (this.value === x) {
			return this.next.remove(x);
		}

		return new ListNode(this.value, this.next.remove(x));
	}

	append(xs) {
		if (this.next instanceof EmptyList) {
			return new ListNode(this.value, xs);
		}

		let next = new ListNode(this.next.value, this.next.next).append(xs);

		return new ListNode(this.value, next);
	}

	values() {
		return [this.value].concat(this.next.values());
	}
}
