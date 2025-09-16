import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(3, "Nama wajib diisi!"),
  username: z.string().min(5, "Username minimal 5 karakter!"),
  email: z.string().email("Email tidak valid!"),
  password: z.string().min(6, "Password minimal 6 karakter!"),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    alert("Register berhasil!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl mb-4">Register</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-64"
      >
        <input
          type="text"
          placeholder="Nama"
          {...register("name")}
          className="p-2 rounded text-black bg-gray-300"
        />
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}

        <input
          type="text"
          placeholder="Username"
          {...register("username")}
          className="p-2 rounded text-black bg-gray-300"
        />
        {errors.username && (
          <p className="text-red-400">{errors.username.message}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="p-2 rounded text-black bg-gray-300"
        />
        {errors.email && <p className="text-red-400">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="p-2 rounded text-black bg-gray-300"
        />
        {errors.password && (
          <p className="text-red-400">{errors.password.message}</p>
        )}

        <button type="submit" className="bg-green-600 p-2 rounded">
          Register
        </button>
        <p className="text-sm mt-2">
          Sudah punya akun?{" "}
          <Link to="/" className="text-blue-400">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
