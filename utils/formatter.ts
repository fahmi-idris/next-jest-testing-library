export function capitalize(str: string): string {
	if (!str) return '';
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function sum(a: number, b: number): number {
	return a + b;
}

export class Logger {
	log(message: string): void {
			console.log(`[Log]: ${message}`);
	}
}
