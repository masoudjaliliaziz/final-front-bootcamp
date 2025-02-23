import { getCities } from "@/app/server/cities";
import CityTable from "./components/CityTable";
import { Suspense } from "react";
import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function page() {
  getCities();
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>شناسه</TableCell>
              <TableCell>نام شهر</TableCell>
              <TableCell>کد شهر</TableCell>
              <TableCell>کد شناسه</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Suspense
              fallback={
                <TableRow>
                  <TableCell>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      height={65}
                    />
                  </TableCell>
                  <TableCell>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      height={65}
                    />
                  </TableCell>
                  <TableCell>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      height={65}
                    />
                  </TableCell>
                  <TableCell>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      height={65}
                    />
                  </TableCell>
                </TableRow>
              }
            >
              <CityTable />
            </Suspense>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default page;
