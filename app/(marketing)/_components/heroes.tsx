import Image from "next/image";


export const Heroes = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:h-[250px] md:w-[250px]">
            <Image
              src="/documents.png"
              fill
              className="object-contain dark:hidden"
              alt="Documents"
            />
            <Image
              src="/documents-dark.png"
              fill
              className="object-contain hidden dark:block"
              alt="Documents"
            />
          </div>
          <div className="relative h-[250px] w-[250px] hidden md:block">
            <Image
              src="/reading.png"
              fill
              className="object-contain dark:hidden"
              alt="Reading"
            />
            <Image
              src="/reading-dark.png"
              fill
              className="object-contain hidden dark:block"
              alt="Reading"
            />
          </div>
        </div>
      </div>
    );
}