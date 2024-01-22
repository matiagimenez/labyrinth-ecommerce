export function readLocalStorage(key: string): string | null {
	let data: string | null = null;
	try {
		data = localStorage.getItem(key);
	} catch (exception) {
		console.error(exception);
	}

	return data;
}

export function saveLocalStorage(key: string, value: string): void {
	try {
		if (localStorage.getItem(key) !== value) {
			localStorage.setItem(key, value);
		}
	} catch (exception) {
		console.error(exception);
	}
}
