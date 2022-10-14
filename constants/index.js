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