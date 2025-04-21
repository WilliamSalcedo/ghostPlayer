import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import { useState } from "react";
import { registerUser } from "../../fetcher/registerFetch";

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
        favoriteConsole: data.favoriteConsole,
      });

      setUser({
        name: data.username,
        email: data.email,
        favoriteConsole: data.favoriteConsole,
      });

      alert(res.message);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    watch,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    passwordValue,
    setPasswordValue,
  };
};
