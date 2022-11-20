const data = [
    {
        question: 'Apa itu LearnGold?',
        description: 'LearnGold adalah sebuah sistem perangkat lunak berbasis website yang dilengkapi dengan Artificial Intellegence dan bertujuan untuk memprediksi harga emas dalam kurun waktu tertentu. LearnGold dapat digunakan oleh semua orang, baik investor profesional maupun investor pemula dalam menganalisis harga emas.'
    },
    {
        question: 'Mengapa LearnGold dibuat?',
        description: 'Banyak orang yang terjun kedunia investasi khususnya harga emas tapi tidak tahu kapan waktu yang tepat dalam membeli dan menjualnya kembali. LearnGold dibuat untuk mengatasi masalah ini dengan menghadirkan fitur fitur yang dapat memprediksi harga emas yang tentunya ramah bagi investor emas pemula.'
    },
    {
        question: 'Siapa pencipta LearnGold?',
        description: 'LearnGold diciptakan oleh tiga mahasiswa Universitas Siliwangi jurusan Informatika angkatan 2022, yaitu Aam Hermansyah, Delvan Ramadhan, dan Yuldan Nur Addinsyah. Didirikan pada tahun 2022 dimana ekonomi dunia mulai bangkit kembali setelah pasca pandemi Covid-19 yang mengakibatkan resesi ekonomi global. LearnGold hadir untuk membantu ekonomi nasional dan umumnya global untuk membangkitkan kembali ekonomi dengan cepat.'
    },
    {
        question: 'Saya menggunakan LearnGold tetapi kenapa prediksinya kurang tepat?',
        description: 'Artificial Intellegence pada LearnGold dibuat dengan algoritma time series forecasting. Dia bekerja dengan cara mengolah data histori dari harga emas sebelumnya. Jadi, prediksi ini bukan merupakan 100% prediksi yang tepat, ini sebagai patokan anda dalam melakukan investasi emas dengan melihat beberapa data histori kebelakang yang di bantu dengan AI dari sistem LearnGold kami.'
    },
    {
        question: 'Apa keuntungan saya menggunakan LearnGold?',
        description: 'Membantu para investor dalam melakukan investasi emas dengan mempertimbangkan prediksi harga emas dari sistem LearnGold. Kami menghadirkan beberapa fitur yang menampilkan prediksi harga emas dari beberapa algoritma yang kami gunakan.'
    },
    {
        question: 'Apakah LearnGold gratis?',
        description: 'LearnGold melayani anda 100% gratis dengan kemudahan yang telah kami sediakan semoga dapat membantu anda dalam berinvestasi emas. Kami akan terus mengembangkan sistem ini untuk kenyamanan kita bersama sebagai investor yang bijak.'
    },
]

export default function FAQs(){
    return (
        <section id="faq">
            <div className="max-w-screen-xl p-8 ss:p-0 mx-auto mt-12">
                <h2 className="text-3xl p-8 pb-2 font-extrabold leading-9 border-b-2 border-gray-300 text-gray-900 mb-12">
                FAQs
                </h2>
                <ul className="flex items-start justify-center gap-8 flex-wrap text-justify">
                    {data.map((faq, index) => (
                        <li className="ss:w-2/5" key={index}>
                            <p className="text-lg font-medium leading-6 text-gray-900">
                                {faq.question}
                            </p>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                                {faq.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}