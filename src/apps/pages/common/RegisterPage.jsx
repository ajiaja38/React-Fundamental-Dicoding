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
} from "@material-tailwind/react";
import useInput from "../../hooks/useInput";
import { register } from "../../utils/network.data";
import useToast from "../../hooks/useToast";
import useLang from "../../hooks/useLang";
import { COMMON_CONTENT, REGISTER_CONTENT } from "../../utils/content";
import SpeedDials from "../../components/SpeedDial";

const RegisterPage = () => {
  const { isDarkMode } = useTheme();
  const { lang } = useLang();
  const { showToast } = useToast();

  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      showToast("error", REGISTER_CONTENT[lang].errorConfirm);
      return;
    }

    const { error } = await register({
      name,
      email,
      password,
    });

    if (error) {
      showToast("error", error);
      return;
    }

    showToast("success", REGISTER_CONTENT[lang].successMessage);
    navigate("/");
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
              value={name}
              onChange={onNameChange}
              color={isDarkMode ? "white" : "black"}
              label={REGISTER_CONTENT[lang].name}
              size="lg"
            />
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
            <Input
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              color={isDarkMode ? "white" : "black"}
              label={REGISTER_CONTENT[lang].confirmPassword}
              type="password"
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0 dark:bg-gray-900 rounded-b-xl">
            <Button
              onClick={handleRegister}
              className="bg-blue-600 dark:bg-blue-gray-800"
              fullWidth
            >
              {REGISTER_CONTENT[lang].button}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              {REGISTER_CONTENT[lang].cta}&nbsp;{" "}
              <NavLink to="/">
                <span className="font-bold">{REGISTER_CONTENT[lang].link}</span>
              </NavLink>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <SpeedDials />
    </>
  );
};

export default RegisterPage;
