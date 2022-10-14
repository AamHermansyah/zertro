import Github from "../public/icons/Github";
import Instagram from "../public/icons/Instagram";
import Whatsapp from "../public/icons/Whatsapp";

export const footer = {
    navigation: {
        title: 'Navigation',
        listItem: [
            {
                id: 'nav-1',
                content: 'Home',
                href: '/'
            },
            {
                id: 'nav-2',
                content: 'Donasi',
                href: '#Donasi'
            },
            {
                id: 'nav-3',
                content: 'Contact',
                href: '#contact'
            },
            {
                id: 'nav-4',
                content: 'FAQ',
                href: '#faq'
            }
        ]
    },
    socialMedia: {
        title: 'Social media',
        listItem: [
            {
                id: 'social-1',
                href: '/',
                icon: <Whatsapp />
            },
            {
                id: 'social-2',
                href: '/',
                icon: <Instagram />
            },
            {
                id: 'social-3',
                href: '/',
                icon: <Github />
            }
        ]
    }
}

export const navbar = [
    {
        id: 'navbar-1',
        title: 'Home',
        href: '#home',
    },
    {
        id: 'navbar-2',
        title: 'Harga emas',
        href: '#harga-emas',
    },
    {
        id: 'navbar-3',
        title: 'Tabel laba',
        href: '#tabel-laba',
    },
    {
        id: 'navbar-4',
        title: 'Prediksi',
        href: '#prediksi',
    },
    {
        id: 'navbar-5',
        title: 'Donasi',
        href: '#donasi',
    },
    {
        id: 'navbar-6',
        title: 'Contact',
        href: '#contact',
    },
]