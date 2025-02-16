"use client";
import { register } from "@/actions/register";
import {
  Button,
  Card,
  CardContent,
  Link as MuLink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useActionState } from "react";

type Props = {};

function Register({}: Props) {
  const [state, action, pending] = useActionState(register, undefined);
  console.log(state);
  return (
    <Card sx={{ width: 500 }} elevation={8}>
      <CardContent sx={{ padding: 4 }}>
        <form action={action}>
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
          <Stack gap={3}>
            <Stack
              gap={1}
              mt={2}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <TextField
                error={!!state?.errors?.firstName}
                helperText={state?.errors?.firstName}
                size="small"
                name="firstName"
                fullWidth
                variant="outlined"
                label=" نام "
              />
              <TextField
                error={!!state?.errors?.lastName}
                helperText={state?.errors?.lastName}
                size="small"
                name="lastName"
                fullWidth
                variant="outlined"
                label=" نام خانوادگی"
              />
            </Stack>
            <TextField
              error={!!state?.errors?.email}
              helperText={state?.errors?.email}
              size="small"
              name="email"
              type="email"
              fullWidth
              variant="outlined"
              label=" رایانامه "
            />
            <TextField
              error={!!state?.errors?.password}
              helperText={state?.errors?.password?.map((e, index) => (
                <div key={index}>{`* ${e}`}</div>
              ))}
              size="small"
              name="password"
              type="password"
              fullWidth
              variant="outlined"
              label=" رمز عبور"
            />
            <Typography variant="caption">
              با ثبت نام در سرویس ما شما با همه قوانین سرویس موافقت خود را اعلام
              میدارید
            </Typography>
            <Button
              type="submit"
              disabled={pending}
              disableElevation
              variant="contained"
            >
              ثبت نام
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}

export default Register;
