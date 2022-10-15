import { Github, Whatsapp, Instagram, aam, delvan, yuldan } from '../public';

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

export const teams = [
    {
        name: 'Aam Hermansyah',
        photo: aam,
        born: '03 Maret, 2003 di Garut, Jawa Barat, Indonesia.',
        job: 'Mahasiswa',
        socialMedia: [
            { 
                link: 'instagram.com/aamhrmnsyah',
                icon: <Instagram /> 
            },
            {
                link: 'wa.me/6282316126449?text=Hii...',
                icon: <Whatsapp />
            },
            {
                link: 'github.com/AamHermansyah',
                icon: <Github />
            }
        ]
    },
    {
        name: 'Delvan Ramadhan',
        photo: delvan,
        born: '05 November, 2003 di Tasikmalaya, Jawa Barat, Indonesia.',
        job: 'Mahasiswa',
        socialMedia: [
            { 
                link: 'instagram.com/_dererere',
                icon: <Instagram /> 
            },
            {
                link: 'wa.me/62895385178849?text=Hii...',
                icon: <Whatsapp />
            }
        ]
    },
    {
        name: 'Yuldan Nur Addinsyah',
        photo: yuldan,
        born: '14 Juli, 2004 di Cilacap, Jawa Tengah, Indonesia.',
        job: 'Mahasiswa',
        socialMedia: [
            { 
                link: 'instagram.com/yuldan_png',
                icon: <Instagram /> 
            },
            {
                link: 'wa.me/6285701796316?text=Hii...',
                icon: <Whatsapp />
            }
        ]
    },
]

export const features = [
    {
        title: "Diagram Harga Emas",
        description: "Menampilkan data diagram harga emas bahkan dari tahun 1950."
    },
    {
        title: "Prediksi Harga Emas",
        description: "Menyajikan beberapa informasi mengenai prediksi harga emas dimasa yang akan datang dengan beberapa algoritma prediksi."
    },
    {
        title: "Tabel Laba Pertahun",
        description: "Menampilkan informasi mengenai laba persentase harga emas pertahun."
    },
]