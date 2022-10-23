import Navigation from "../../../layouts/Navigation";
import TableCHAndCHP from "../../../components/TableCHAndCHP";

export default function TabelLaba(){
    return (
        <Navigation active="/dashboard/tabel-laba">
            <section id="tabel_laba">
                <TableCHAndCHP />
            </section>
        </Navigation>
    )
}