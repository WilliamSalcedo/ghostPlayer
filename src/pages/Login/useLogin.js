import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../../fetcher/loginFetch";
import { useUserStore } from "../../store/userStore";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);

      setUser({
        name: data.username,
      });

      console.log(res, 'respuesta del proceso')
      console.log("Usuario autenticado:", res);
      // Aquí podrías guardar en contexto, Zustand o localStorage
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
  };
};
