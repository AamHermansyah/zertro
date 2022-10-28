import { Github, Whatsapp, Instagram, aam, delvan, yuldan, DropdownArrow } from '../public';
import { CONFIG_DATE } from '../utils/config';

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
                content: 'Contact',
                href: '#team'
            },
            {
                id: 'nav-3',
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
                href: 'wa.me/6282316126449?text=Hii...',
                icon: <Whatsapp />
            },
            {
                id: 'social-2',
                href: 'instagram.com/aamhrmnsyah',
                icon: <Instagram />
            },
            {
                id: 'social-3',
                href: 'github.com/AamHermansyah',
                icon: <Github />
            }
        ]
    }
}

export const navbar = [
    {
        id: 'navbar-1',
        title: 'Home',
        href: '/dashboard',
    },
    {
        id: 'navbar-2',
        title: 'Prediksi',
        href: '/dashboard/prediction',
        icon: <DropdownArrow />,
        child: [
            {link: '/dashboard/prediction/CAGR', title: 'CAGR'},
            {link: '/dashboard/prediction/moving-average', title: 'Moving Average'}
        ]
    },
    {
        id: 'navbar-3',
        title: 'Histori Harga',
        href: '/dashboard/history',
        icon: <DropdownArrow />,
        child: [
            {link: '/dashboard/history/annual', title: 'Pertahun'},
            {link: '/dashboard/history/monthly', title: 'Perbulan'},
        ]
    },
    {
        id: 'navbar-4',
        title: 'Histori Tabel Laba',
        href: '/dashboard/tabel-laba',
        icon: <DropdownArrow />,
        child: [
            {link: '/dashboard/tabel-laba/one-last-year', title: '1 Tahun Terakhir'},
            {link: '/dashboard/tabel-laba/annual', title: 'Semua (per tahun)'},
        ]
    },
    {
        id: 'navbar-5',
        title: 'Contact',
        href: '/#team',
    },
]

export const teams = [
    {
        name: 'Aam Hermansyah',
        photo: aam,
        born: '03 Maret, 2003 di Garut, Jawa Barat, Indonesia.',
        job: 'Mahasiswa Informatika UNSIL',
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
        job: 'Mahasiswa Informatika UNSIL',
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
        job: 'Mahasiswa Informatika UNSIL',
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

export const buttons_prediction = [
    {title: '7 Hari', value: CONFIG_DATE.ONE_WEEK},
    {title: '14 Hari', value: CONFIG_DATE.TWO_WEEK},
    {title: '30 Hari', value: CONFIG_DATE.ONE_MONTH},
    {title: '3 Bulan', value: CONFIG_DATE.THREE_MONTH},
    {title: '6 Bulan', value: CONFIG_DATE.SIX_MONTH},
    {title: '1 Tahun', value: CONFIG_DATE.ONE_YEAR},
    {title: '6 Tahun', value: CONFIG_DATE.ONE_YEAR * 6},
]