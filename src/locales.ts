// locales settings for this theme
// Set the languages you want to support on your site.
// https://astro-i18n-starter.pages.dev/setup/

export const DEFAULT_LOCALE_SETTING: string = "en";

interface LocaleSetting {
	[key: Lowercase<string>]: {
		label: string;
		lang?: string;
		dir?: "rtl" | "ltr";
	};
} // refer: https://starlight.astro.build/reference/configuration/#locales

export const LOCALES_SETTING: LocaleSetting = {

	en: {
		label: "English",
		lang: "en-US",
	},
	it: {
		label: "Italiano",
		lang: "it-IT",
	},
	de: {
		label: "Deutsch",
		lang: "de-DE",
	},
};
