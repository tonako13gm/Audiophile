"use client";
import { useFormStatus } from "react-dom";

interface variantProps {
    variant: "main" | "light" | "dark";
    children: React.ReactNode
}

export const Submit = ({variant, children}: variantProps) => {
    const { pending } = useFormStatus();

    const main:string = "text-lightColor bg-primaryDark hover:bg-primaryLight"
    const dark:string = "text-lightColor bg-darkColor hover:bg-lightColor hover:text-darkColor"
    const light:string = "text-darkColor bg-transparent border-2 border-darkColor hover:bg-darkColor hover:text-lightColor"

        function variantSetter(props:string) {
            if (props == "main") {
                return main;
            }
            else if (props == "light") {
                return light;
            }
            else if (props == "dark") {
                return dark;
            }
        }

  return (
    <button
      type="submit"
      className={`font-bold py-3 px-5 text-subTitle uppercase cursor-pointer ${variantSetter(variant)}`}
      disabled={pending}
    >
      {children}
    </button>
  );
};