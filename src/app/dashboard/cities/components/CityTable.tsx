import { getCities } from "@/app/server/cities";
import { TableCell, TableRow } from "@mui/material";

async function CityTable() {
  const cities = await getCities();
  return (
    <>
      {cities?.results?.map((city) => (
        <TableRow key={city.id}>
          <TableCell>{city.id}</TableCell>
          <TableCell>{city.name} </TableCell>
          <TableCell>{city.code} </TableCell>
          <TableCell>{city.slug} </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default CityTable;
