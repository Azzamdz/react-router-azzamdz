import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
  .object({
    name: z
      .string()
      .nonempty("Nama wajib diisi!")
      .max(50, "Nama maksimal 50 karakter!")
      .min(3, "Nama wajib diisi!"),
    umur: z
      .string()
      .nonempty("Umur wajib diisi!")
      .regex(/^\d+$/, "Umur harus berupa angka!")
      .refine((val) => Number(val) >= 18 && Number(val) <= 60, {
        message: "Umur harus antara 18 sampai 60 tahun!",
      }),
    email: z
      .string()
      .email("Email tidak valid!")
      .nonempty("Email wajib diisi!"),
    password: z
      .string()
      .nonempty("Password wajib diisi!")
      .min(8, "Password minimal 8 karakter!")
      .regex(/^[A-Z0-9]+$/, "Password hanya boleh huruf besar dan angka!"),
    confirmPassword: z.string().nonempty("Konfirmasi password wajib diisi!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi password tidak sama!",
    path: ["confirmPassword"],
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
          placeholder="Umur"
          {...register("umur")}
          className="p-2 rounded text-black bg-gray-300"
        />
        {errors.umur && <p className="text-red-400">{errors.umur.message}</p>}

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

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          className="p-2 rounded text-black bg-gray-300"
        />
        {errors.confirmPassword && (
          <p className="text-red-400">{errors.confirmPassword.message}</p>
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
