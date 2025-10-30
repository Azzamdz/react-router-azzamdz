import LayoutDashboard from "@/components/layout/layoutDashboard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserById } from "@/utilss/api/users";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const fetchUserByid = async (id) => {
    try {
      const userData = await getUserById(id);
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserByid();
  }, []);

  return (
    <LayoutDashboard>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Detail User
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-sm">
          <div>
            <Label className="text-gray-700 font-medium">Nama Lengkap</Label>
            <Input
              placeholder="Nama Lengkap"
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={user.fullname}
              type="text"
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
            />
          </div>

          <div>
            <Label className="text-gray-700 font-medium">Username</Label>
            <Input
              placeholder="Username"
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div>
            <Label className="text-gray-700 font-medium">Email</Label>
            <Input
              placeholder="Email"
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div>
            <Label className="text-gray-700 font-medium">Nomor Telepon</Label>
            <Input
              placeholder="Nomor Telepon"
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={user.phone_number}
              onChange={(e) =>
                setUser({ ...user, phone_number: e.target.value })
              }
            />
          </div>

          <div>
            <Label className="text-gray-700 font-medium">Umur</Label>
            <Input
              placeholder="Umur"
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={user.age}
              onChange={(e) => setUser({ ...user, age: e.target.value })}
            />
          </div>

          <div>
            <Label className="text-gray-700 font-medium">Alamat</Label>
            <Input
              placeholder="Alamat"
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
          </div>

          <div className="md:col-span-2">
            <Label className="text-gray-700 font-medium">Role</Label>
            <Input
              placeholder="Role"
              className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            />
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}

export default DetailUser;
