"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

export function Header() {
  const { status, data } = useSession();
  const isLogged = status === "authenticated";

  const handleLogin = async () => {
    await signIn();
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-7">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {isLogged && data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>

                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Boas compras!</p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            <Button
              onClick={isLogged ? handleLogout : handleLogin}
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <LogInIcon size={16} />
              {isLogged ? "Fazer Logout" : "Fazer Login"}
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Inicio
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">Bruno</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
}
