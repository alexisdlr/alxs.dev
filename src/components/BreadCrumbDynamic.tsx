import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const BreadcrumbDynamic = () => {
  // Obtén la ruta actual
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Enlace al inicio */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-gray-500 dark:text-iris">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {/* Generar enlaces dinámicamente */}
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={path}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="">
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={path} className="text-gray-500 dark:text-iris">
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbDynamic;
