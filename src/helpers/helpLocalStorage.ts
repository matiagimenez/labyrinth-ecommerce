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
		localStorage.setItem(key, value);
	} catch (exception) {
		console.error(exception);
	}
}
