"use client";
import { register } from "@/actions/register";
import {
  Stack,
  Typography,
  Link as MuLink,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { spawn } from "child_process";
import Link from "next/link";
import { useActionState } from "react";

type Props = {};

function RegisterForm({}: Props) {
  const [state, action, pending] = useActionState(register, undefined);
  return (
    <form action={action}>
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
            <Box
              component={"span"}
              display={"block"}
              key={index}
            >{`* ${e}`}</Box>
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
  );
}

export default RegisterForm;
