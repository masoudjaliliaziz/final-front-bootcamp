"use client";
import { login } from "@/actions/login";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useActionState } from "react";

function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action}>
      <Stack gap={3}>
        <Stack
          gap={1}
          mt={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        ></Stack>
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

        <Button
          type="submit"
          disabled={pending}
          disableElevation
          variant="contained"
        >
          ورود
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
