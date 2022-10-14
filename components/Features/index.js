import Card from "./Card";

export default function Features(){
    return (
        <section id="features" className="py-6">
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
                <Card 
                title="Diagram Harga Emas"
                description="Menampilkan data diagram harga emas bahkan dari tahun 1950."
                />
                <Card 
                title="Prediksi Harga Emas"
                description="Menyajikan beberapa informasi mengenai prediksi harga emas dimasa yang akan datang dengan beberapa algoritma prediksi."
                />
                <Card 
                title="Tabel Laba Pertahun"
                description="Menampilkan informasi mengenai laba persentase harga emas pertahun."
                />
            </div>
        </section>
    )
}