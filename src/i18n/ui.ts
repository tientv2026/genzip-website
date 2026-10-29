export const languages = { vi: 'Tiếng Việt', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'vi';

// Chuỗi dùng chung cho cả site. Thêm khoá mới thì thêm đủ cả vi và en.
export const ui = {
  vi: {
    'site.tagline': 'Trình nén miễn phí cho Windows',
    'nav.features': 'Tính năng',
    'nav.news': 'Tin tức',
    'nav.label': 'Điều hướng chính',
    'language.label': 'Ngôn ngữ',
    'nav.guide': 'Hướng dẫn',
    'nav.download': 'Tải về',
    'nav.faq': 'Hỏi đáp',
    'nav.support': 'Ủng hộ',
    'cta.download': 'Tải miễn phí',
    'cta.store': 'Tải từ Microsoft Store',
    'cta.installer': 'Tải bộ cài (.exe)',
    'theme.toggle': 'Đổi giao diện sáng/tối',
    'menu.open': 'Mở menu',
    'footer.product': 'Sản phẩm',
    'footer.help': 'Hỗ trợ',
    'footer.legal': 'Pháp lý',
    'footer.changelog': 'Lịch sử phiên bản',
    'footer.contact': 'Liên hệ',
    'footer.terms': 'Điều khoản sử dụng',
    'footer.privacy': 'Quyền riêng tư',
    'footer.licenses': 'Giấy phép bên thứ ba',
    'footer.engine': 'Engine nén: 7-Zip © Igor Pavlov · GNU LGPL',
    'common.soon': 'Sắp có',
  },
  en: {
    'site.tagline': 'Free archive manager for Windows',
    'nav.features': 'Features',
    'nav.news': 'News',
    'nav.label': 'Main navigation',
    'language.label': 'Language',
    'nav.guide': 'Guide',
    'nav.download': 'Download',
    'nav.faq': 'FAQ',
    'nav.support': 'Support',
    'cta.download': 'Download free',
    'cta.store': 'Get it from Microsoft Store',
    'cta.installer': 'Download installer (.exe)',
    'theme.toggle': 'Toggle light/dark theme',
    'menu.open': 'Open menu',
    'footer.product': 'Product',
    'footer.help': 'Help',
    'footer.legal': 'Legal',
    'footer.changelog': 'Changelog',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms of use',
    'footer.privacy': 'Privacy',
    'footer.licenses': 'Third-party licenses',
    'footer.engine': 'Compression engine: 7-Zip © Igor Pavlov · GNU LGPL',
    'common.soon': 'Coming soon',
  },
} as const;

export type UiKey = keyof (typeof ui)['vi'];

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : 'vi';
}

/** Đường dẫn trong site theo ngôn ngữ: path('/features', 'en') -> '/en/features'. */
export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** Cùng trang ở ngôn ngữ kia (dùng cho nút VI/EN). */
export function switchLangPath(url: URL, target: Lang): string {
  const rest = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localePath(rest, target);
}
