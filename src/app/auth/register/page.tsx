import Logo from "@/components/Logo";
import RegisterForm from "@/form/RegisterForm";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Link as MuLink,
  Box,
} from "@mui/material";
import Link from "next/link";

function Register() {
  return (
    <Box>
      <Card sx={{ width: 500 }} elevation={8}>
        <CardContent sx={{ padding: 4 }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h5">ثبت نام</Typography>
            <MuLink variant="caption" href="/auth/login" component={Link}>
              قبلا ثبت نام کرده اید ؟
            </MuLink>
          </Stack>
          <RegisterForm />
        </CardContent>
      </Card>
    </Box>
  );
}

export default Register;
