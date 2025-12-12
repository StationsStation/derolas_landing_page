export type UnicornStudioGlobal = { init: () => Promise<unknown> };

declare global {
	interface Window {
		UnicornStudio?: UnicornStudioGlobal;
	}
}

export {};
