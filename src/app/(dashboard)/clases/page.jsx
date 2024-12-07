import LayoutDashboard from "@/app/layout-dashboard";
import ClassManagement from "../components/clases";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default async function page() {
  let data = await fetch("https://fakestoreapi.com/products");
  let datos = await data.json();
  console.log("datos:", datos);

  return (
    <LayoutDashboard>
      <div className="grid grid-cols-2 gap-4">
        {datos.map((item) => (
          <Card key={item.id} className="w-full h-full">
            <CardContent className="p-0">
              <div className="flex flex-row w-full">
                <div className="h-full w-[450px]  bg-red-600">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={item.image}
                      alt="Image"
                      className="rounded-md object-cover"
                     width={150}
                     height={120}
                    />
                  </AspectRatio>
                </div>
                <div className="   bg-green-600">fdgdf</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ClassManagement />
    </LayoutDashboard>
  );
}
