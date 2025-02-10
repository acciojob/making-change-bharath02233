const makeChange = (amount) => {
  // your name here
	let change = { q: 0, d: 0, n: 0, p: 0 };

    change.q = Math.floor(amount / 25);
    amount %= 25;

    change.d = Math.floor(amount / 10);
    amount %= 10;

    change.n = Math.floor(amount / 5);
    amount %= 5;

    change.p = amount; // Remaining amount is all pennies

    return change;
};

// Do not the change the code below
