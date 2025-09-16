import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z.string().min(5, "Username minimal 5 karakter!"),
  password: z.string().min(6, "Password minimal 6 karakter!"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    alert("Login berhasil!");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl mb-4">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-64"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...register("username")}
          className="p-2 rounded text-black bg-gray-300"
        />
        {errors.username && <p className="text-red-400">{errors.username}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
          className="p-2 rounded text-black bg-gray-300"
        />
        {errors.password && <p className="text-red-400">{errors.password}</p>}

        <button type="submit" className="bg-blue-600 p-2 rounded">
          Login
        </button>
        <p className="text-sm mt-2">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-400">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
