import Link from "next/link";

const Header = ({ title, HrefLink, TitleLink }) => {
  return (
    <div className={"flex justify-between items-center p-4 mx-36"}>
      <h1 className="md:text-2xl text-black text-xl">{title}</h1>
      {HrefLink && TitleLink ? (
        <Link
          href={HrefLink}
          className="md:text-xl text-black text-lg hover:underline hover:text-gray-300 "
        >
          {TitleLink}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
