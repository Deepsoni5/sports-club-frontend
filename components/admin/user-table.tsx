"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilIcon, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const users = [
  {
    nombre: "Hector Hugo",
    apellidoPaterno: "Corona",
    apellidoMaterno: "Garcia",
    activo: true,
  },
  {
    nombre: "Fernanda",
    apellidoPaterno: "hernandez",
    apellidoMaterno: "Vargas",
    activo: true,
  },
  {
    nombre: "Fransico",
    apellidoPaterno: "Coronado",
    apellidoMaterno: "Espitia",
    activo: false,
  },
  {
    nombre: "Alberto",
    apellidoPaterno: "Morales",
    apellidoMaterno: "Perez",
    activo: true,
  },
  {
    nombre: "Mauricio",
    apellidoPaterno: "Perez",
    apellidoMaterno: "Correa",
    activo: false,
  },
  {
    nombre: "Fernando",
    apellidoPaterno: "Bautista",
    apellidoMaterno: "Reyes",
    activo: true,
  },
  {
    nombre: "Juan",
    apellidoPaterno: "Mendez",
    apellidoMaterno: "Cordova",
    activo: true,
  },
];

export function UserTable() {
  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between p-4">
        <Button className="bg-[#0047BB] hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> Add
        </Button>
        <Button variant="outline">Filtro: Todos</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido paterno</TableHead>
            <TableHead>Apellido materno</TableHead>
            <TableHead>Activo</TableHead>
            <TableHead>Acción</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.nombre}</TableCell>
              <TableCell>{user.apellidoPaterno}</TableCell>
              <TableCell>{user.apellidoMaterno}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                    user.activo
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  )}
                >
                  {user.activo ? "Activo" : "Inactivo"}
                </span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <PencilIcon className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
