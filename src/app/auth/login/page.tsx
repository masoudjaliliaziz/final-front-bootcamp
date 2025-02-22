import LoginForm from "@/form/LoginForm";

import {
  Card,
  CardContent,
  Stack,
  Typography,
  Link as MuLink,
  Box,
} from "@mui/material";
import Link from "next/link";

function Login() {
  return (
    <Box>
      <Card sx={{ width: 500 }} elevation={8}>
        <CardContent sx={{ padding: 4 }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h5"> ورود</Typography>
            <MuLink variant="caption" href="/auth/register" component={Link}>
              ساخت اکانت
            </MuLink>
          </Stack>
          <LoginForm />
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
