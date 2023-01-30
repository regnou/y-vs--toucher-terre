// 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo, service@monwoo.com
// Backup of this starter page can be found at :
// src/routes/mws/core/+layout.ts

import { browser, dev } from '$app/environment';

// https://github.com/sveltejs/kit/pull/6197
// export const csr = false; // client side rendering, to avoid JS on fully static content pages
// https://kit.svelte.dev/docs/page-options#csr
export const prerender = true;

// https://tailwind-elements.com/quick-start/
// import 'tw-elements'; // WILL FAIL SSR side ? looking for document stuff etc...
// https://stackoverflow.com/questions/13444064/typescript-conditional-module-import-export
// (async () => {
//     (await import('tw-elements')).default;
// })();

// https://web.dev/samesite-cookies-explained/?utm_source=devtools
// if (!browser) {
//     declare global document = {};
// };
// import 'tw-elements';

// https://stackoverflow.com/questions/13444064/typescript-conditional-module-import-export
// const e = import('tw-elements') as any;

//
// 'tw-elements' breaks SSR by using 'document' variable without protecting it
// so we async load it on 'browser' condition to use it frontside only
// CF : ./app.d.ts for module declation as any ok, inspired from
// https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
// if (browser) {
//     (async () => {
//         (await (import('tw-elements') as any));
//     })();
// }

// https://kit.svelte.dev/docs/page-options#trailingslash
// If wana generate folders with index.html inside, instead of <route>.html...
// export const trailingSlash = 'always';

// https://miguel.monwoo.com/embedded-iframes/prod/mws/embeddable-iframe
// => // TODO TOO slow on PHP proxy with Web secu (DDOS firewall, etc...)
// => should bundle all with less files... (or my open .htaccess is not so open and still using browserproxy ? why same time on both ?)
// https://stackoverflow.com/questions/63548795/how-to-change-variable-value-in-svelte-app-via-browsers-console
// if (browser) {
//     // https://stackoverflow.com/questions/64245188/how-to-differentiate-between-svelte-dev-mode-and-build-mode
//     // TODO : be able to test productions switch in dev = .env conf before 'sveltkit' build reality
//     if (!dev) {
//         window.console.log = (...a) => { }; // cleaning logs
//     }
// }
