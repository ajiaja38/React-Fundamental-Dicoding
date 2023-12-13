import { NavLink, useNavigate } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Spinner,
} from "@material-tailwind/react";
import useInput from "../../hooks/useInput";
import { login, putAccessToken } from "../../utils/network.data";
import useToast from "../../hooks/useToast";
import useLang from "../../hooks/useLang";
import { COMMON_CONTENT, LOGIN_CONTENT } from "../../utils/content";
import SpeedDials from "../../components/SpeedDial";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { isDarkMode } = useTheme();
  const { lang } = useLang();
  const [isLoading, setIsLoading] = useState(false);

  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const handleLogin = async () => {
    setIsLoading(true);
    const { error, data } = await login({ email, password });

    if (error) {
      console.log(error);
      showToast("error", LOGIN_CONTENT[lang].errorMessage);
      setIsLoading(false);
      return;
    }

    putAccessToken(data?.accessToken);
    showToast("success", LOGIN_CONTENT[lang].successMessage);
    navigate("/home");

    setIsLoading(false);
  };

  return (
    <>
      <div className="w-full bg-white md:bg-gray-100 dark:bg-gray-900 md:dark:bg-blue-gray-900 h-screen flex justify-center items-center">
        <Card className="w-96 dark:bg-gray-900 shadow-none lg:shadow-md">
          <CardHeader
            color="gray"
            className="mb-4 bg-blue-600 dark:bg-blue-gray-800 grid h-28 place-items-center"
          >
            <Typography variant="h2">{COMMON_CONTENT[lang].header}</Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 dark:bg-gray-900">
            <Input
              value={email}
              onChange={onEmailChange}
              color={isDarkMode ? "white" : "black"}
              label="Email"
              size="lg"
            />
            <Input
              value={password}
              onChange={onPasswordChange}
              color={isDarkMode ? "white" : "black"}
              label="Password"
              type="password"
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0 dark:bg-gray-900 rounded-b-xl">
            <Button
              onClick={handleLogin}
              className="bg-blue-600 dark:bg-blue-gray-800 flex justify-center items-center"
              fullWidth
            >
              {isLoading ? (
                <Spinner className="h-4 w-4" />
              ) : (
                LOGIN_CONTENT[lang].button
              )}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              {LOGIN_CONTENT[lang].cta}&nbsp;
              <NavLink to="/register">
                <span className="font-bold">{LOGIN_CONTENT[lang].link}</span>
              </NavLink>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <SpeedDials />
    </>
  );
};

export default LoginPage;
